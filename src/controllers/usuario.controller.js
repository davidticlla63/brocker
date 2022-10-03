
import Usuario from "../models/Usuario";
import UsuarioPerfil from "../models/UsuarioPerfil";
import SucursalUsuario from "../models/SucursalUsuario";
import { sequelize } from "../database/database";
const { QueryTypes } = require('sequelize');
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../config'
//const { v4: uuidv4 } = require('uuid');


export async function login(req, res) {
    try {
        // console.log(req.params);
        
        const { nick, password } = req.body;
        /*   if(nick ==null || password ==null){
                throw new error("usuario y contraseña no pueden estar en blanco");
            } */

        if (typeof nick === "undefined") {
            throw new Error("ingrese el usuario!!!");
        }
        if (typeof password === "undefined") {
            throw new Error("ingrese el contraseña!!!");
        }
        /*   const { Op } = require("sequelize");
          const usuario = await Usuario.findOne({
              where: {
                  nick,estado:{[Op.notIn]:['BAJ']} ,//,estado:'ACT'
              }
          }); */

        const usuarios = await sequelize.query(`select up.* 
                 from  usuario up 
                where   up.estado !='BAJ' and up.nick= '` + nick + `' `
            , {
                type: QueryTypes.SELECT
            });

        if (!usuarios) {
            throw new Error("no se encontró el usuario");
        }
        if (usuarios.length === 0) {
            throw new Error("no se encontró el usuario");
        }
        let usuario = usuarios[0];
        // check account found and verify password
        if (!usuario.password || !bcrypt.compareSync(password, usuario.password)) {
            // authentication failed
            throw new Error("contraseña no valida!!");
        } else {

            const token = jwt.sign({ id: usuario.id }, config.SECRET, {
                expiresIn: 86400//24 horas
            });
            // authentication successful


            const usuarios = await sequelize.query(`select u.id, u.nick,u.estado,p.ci,p.nombrecompleto,p.fotoperfil,p.tipocartera,s.id sucursalid, s.nombre nombresucursal,e.id empresaid,e.razonsocial nombreempresa,a.nombre areatrabajo
             from usuario u 
                inner join sucursal_usuario su on su.usuarioid=u.id and su.estado='ACT' 
                left JOIN sucursal s on s.id=su.sucursalid and s.estado='ACT' 
                left join personal p on p.id=u.personalid  and p.estado='ACT'
                left join area_trabajo a on a.id =p.areatrabajoid
                LEFT join empresa e on e.id=s.empresaid and e.estado='ACT' 
                where u.id= '` + usuario.id + `' and u.estado in ('ACT','SU','ADM') order by u.nick `
                , {
                    type: QueryTypes.SELECT
                });

            const perfiles = await sequelize.query(`select pe.id,pe.nombre,pe.sucursalid,s.nombre as sucursal ,p.diaproduccion 
                 from  usuario_perfil up 
                INNER JOIN perfil pe on pe.id=up.perfilid 
                inner join sucursal s on  s.id= pe.sucursalid 
                left join param_produccion p  on p.sucursalid=pe.sucursalid and p.estado='ACT' 
                where   up.estado='ACT' and up.usuarioid= '` + usuario.id + `' order by pe.nombre `
                , {
                    type: QueryTypes.SELECT
                });
            res.json({
                data: { "estado": true, "messaje": "Ingreso exitoso!!", usuarios, perfiles, "token": token }
            });
        }

    } catch (e) {
        console.log(e);

        res.json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getUsuarios(req, res) {
    try {

        const usuarios = await Usuario.findAll({ where: { estado: 'ACT' }, include: UsuarioPerfil });
        res.json({
            data: usuarios
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function createUsuario(req, res) {
    const {
        // id=
        //nombrecompleto,
        sucursal,
        perfiles,
        nick,
        password,
        empresaid,
        personalid,
        usuarioregistro,
        usuariomodificacion,
        estado } = req.body;
    //let guid= uuidv4();
    //console.log(guid);
    let t = await sequelize.transaction();
    let newUsuario;
    try {
        // get transaction

        // step 1
        newUsuario = await Usuario.create({
            //nombrecompleto,
            nick,
            password: bcrypt.hashSync(password, 10),
            empresaid,
            personalid,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro: new Date(),
            fechamodificacion: new Date(),
            estado
        }, {
            fields: ['nick', 'empresaid',
                'personalid', 'password', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                'fechamodificacion', 'estado']
        }, { transaction: t });

        // step 2
        await SucursalUsuario.create({
            sucursalid: sucursal.sucursalid,
            usuarioid: newUsuario.id,
            usuarioregistro: usuarioregistro,
            fechamodificacion: new Date(),
            fecharegistro: new Date(),
            estado: 'ACT'
        }, { transaction: t });

        // step 3
        for (let i = 0; i < perfiles.length; i++) {
            await UsuarioPerfil.create({
                perfilid: perfiles[i].id,
                usuarioid: newUsuario.id,
                usuarioregistro: usuarioregistro,
                fechamodificacion: new Date(),
                fecharegistro: new Date(),
                estado: 'ACT'
            }, { transaction: t });
        }

        /*  const token = jwt.sign({id:newUsuario.id},config.SECRET,{
             expiresIn:86400//24 horas
         }); */
        // commit
        await t.commit();

        if (newUsuario) {
            return res.json({
                message: 'Usuario created successfully',
                //data: {newUsuario,"token":token}
                data: { newUsuario }
            });
        }
    } catch (err) {

        // Rollback transaction only if the transaction object is defined
        if (t) {
            await t.rollback();
            //await newUsuario.destroy();
            if (newUsuario) {
                await Usuario.destroy({ where: { id: newUsuario.id } })
            }
        }
        console.log(err);
        res.status(500).json({
            data: { estado: false, "error": err.message }
        });
        // throw new Error(err);
    }
}


/* export async function createUsuario(req, res) {
    const {
        // id=
        //nombrecompleto,
        sucursal,
        perfiles,
        nick,
        password,
        empresaid,
        personalid,
        usuarioregistro,
        usuariomodificacion,
        estado } = req.body;

    try {


        //const transaction= sequelize.transaction;
        const result = await sequelize.transaction(async (t) => {

            let newUsuario = await Usuario.create({
                //nombrecompleto,
                nick,
                password,
                empresaid,
                personalid,
                usuarioregistro,
                usuariomodificacion,
                fecharegistro: new Date(),
                fechamodificacion: new Date(),
                estado
            }, {
                fields: ['nick', 'empresaid',
                    'personalid', 'password', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                    'fechamodificacion', 'estado']
            }, { transaction: t });

            let sucursal_usuario = await SucursalUsuario.create({
                sucursalid: sucursal.sucursalid,
                usuarioid: newUsuario.id,
                usuarioregistro: usuarioregistro,
                fechamodificacion: new Date(),
                fecharegistro: new Date(),
                estado: 'ACT'
            }, { transaction: t });




            // step 3
            for (let i = 0; i < perfiles.length; i++) {
                await UsuarioPerfil.create({
                    perfilid:' perfiles[i].id',
                    usuarioid: newUsuario.id,
                    usuarioregistro: usuarioregistro,
                    fechamodificacion: new Date(),
                    fecharegistro: new Date(),
                    estado: 'ACT'
                }, { transaction: t });
            }
            if (newUsuario) {
                return res.json({
                    message: 'Usuario created successfully',
                    data: newUsuario
                });
            }

        });

    } catch (e) {

        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });

    }
} */
export async function getOneUsuario(req, res) {
    try {
        const { id } = req.params;
        const usuario = await Usuario.findOne({
            where: {
                id
            }
        });
        res.json({
            data: usuario
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function deleteUsuario(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await Usuario.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Usuario deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function updateUsuario(req, res) {
    const { id } = req.params;
    const { //nombrecompleto,
        sucursal,
        perfiles,
        nick,
        password,
        empresaid,
        personalid,
        usuarioregistro,
        usuariomodificacion,
        estado } = req.body;

    const t = await sequelize.transaction();
    // let newUsuario;
    try {
        // get transaction

        // step 1

        const count = await Usuario.update({
            nick,
            password: bcrypt.hashSync(password, 10),
            empresaid,
            personalid,
            usuarioregistro,
            usuariomodificacion,
            fechamodificacion: new Date(),
            estado
        },
            {
                where: {
                    id
                }
            }
            , { transaction: t });

        const usuarios = await Usuario.findOne({
            where: {
                id
            }
        }, { transaction: t });

        //registramos los sucursales asignadas
        await SucursalUsuario.update({
            fechamodificacion: new Date(),
            estado: 'BAJ'
        },
            {
                where: {
                    usuarioid: id
                }
            }
            , { transaction: t });

        // step 2
        //registramos los sucursales asignadas
        await SucursalUsuario.create({
            sucursalid: sucursal.sucursalid,
            usuarioid: id,
            usuarioregistro: usuarioregistro,
            fechamodificacion: new Date(),
            fecharegistro: new Date(),
            estado: 'ACT'
        }, { transaction: t });


        await UsuarioPerfil.update({
            fechamodificacion: new Date(),
            estado: 'BAJ'
        },
            {
                where: {
                    usuarioid: id
                }
            }
            , { transaction: t });
        // step 3
        for (let i = 0; i < perfiles.length; i++) {
            //baja los perfiles asignadas

            //registramos los perfiles asignadas
            await UsuarioPerfil.create({
                perfilid: perfiles[i].id,
                usuarioid: id,
                usuarioregistro: usuarioregistro,
                fechamodificacion: new Date(),
                fecharegistro: new Date(),
                estado: 'ACT'
            }, { transaction: t });
        }
        // commit
        await t.commit();

        if (usuarios) {
            return res.json({
                message: 'Usuario created successfully',
                data: usuarios
            });
        }
    } catch (err) {
        // Rollback transaction only if the transaction object is defined
        if (t) {
            await t.rollback();
        }
        console.log(err);
        res.status(500).json({
            data: { estado: false, "error": err.message }
        });
        // throw new Error(err);
    }

    /*  try {
 
         const usuarios = await Usuario.update({
             nick,
                 password,
                 empresaid,
                 personalid,
                 usuarioregistro,
                 usuariomodificacion,
                 fechamodificacion:new Date(),
                 estado},
             {where: {
                 id
             }}
         );
 
         const usuarios = await Usuario.findOne({
             where: {
                 id
             }
         });
 
       
 
         return res.json({
             message: 'Usuario updated successfully',
             data: usuarios
         });
 
     } catch (e) {
         console.log(e);
         res.status(500).json({
             message: 'Something goes wrong',
             data: {}
         });
     } */
}

export async function usuarioBySucursal(req, res) {
    try {
        const { sucursalid } = req.params;
        const usuarios = await Usuario.findAll({
            where: { estado: 'ACT' },
            include: [//{model:AreaTrabajo, attributes: ['nombre'],require:true },
                {
                    model: SucursalUsuario, attributes: ['nombre'], require: true,
                    where: {
                        sucursalid, estado: 'ACT'
                    }
                }]
        });
        res.json({ usuarios });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}


export async function usuarioByEmpresa(req, res) {
    try {
        const { empresaid } = req.params;


        const usuarios = await sequelize.query(`SELECT u.id,u.nick,u.usuarioregistro,u.usuariomodificacion,u.fecharegistro,u.fechamodificacion,u.empresaid,u.personalid,u.estado
            ,p.nombrecompleto,s.id as sucursalid,s.nombre as nombresucursal,pe.id as perfilid,pe.nombre as nombreperfil FROM usuario u 
            inner join personal p on p.id=u.personalid and p.estado='ACT' 
            inner join sucursal_usuario su on  su.usuarioid=u.id and su.estado='ACT' 
            INNER JOIN sucursal s on s.id= su.sucursalid  and s.estado='ACT' 
            inner join  usuario_perfil up on up.usuarioid=u.id and up. estado='ACT' 
            inner JOIN perfil pe on pe.id=up.perfilid  and pe.estado='ACT' 
            WHERE u.estado  !='BAJ' and u.empresaid= '` + empresaid + `' order by u.fechamodificacion desc `
            , {
                type: QueryTypes.SELECT
            });
        //console.log(JSON.stringify(usuarios[0], null, 2));

        res.json({ usuarios });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function usuariosBySucursal(req, res) {
    try {
        const { sucursalid } = req.params;


        const usuarios = await sequelize.query(`SELECT  u.id,u.nick,u.usuarioregistro,u.usuariomodificacion,u.fecharegistro,u.fechamodificacion,u.empresaid,u.personalid,u.estado
            ,p.nombrecompleto,s.id as sucursalid,s.nombre as nombresucursal,pe.id as perfilid,pe.nombre as nombreperfil FROM usuario u 
            inner join personal p on p.id=u.personalid and p.estado='ACT' 
            inner join sucursal_usuario su on  su.usuarioid=u.id and su.estado='ACT' 
            INNER JOIN sucursal s on s.id= su.sucursalid  and s.estado='ACT' 
            inner join  usuario_perfil up on up.usuarioid=u.id and up. estado='ACT' 
            INNER JOIN perfil pe on pe.id=up.perfilid  and pe.estado='ACT' 
            WHERE u.estado !='BAJ' and su.sucursalid= '` + sucursalid + `' order by u.id `
            , {
                type: QueryTypes.SELECT
            });
        //console.log(JSON.stringify(usuarios[0], null, 2));

        res.json({ usuarios });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function bajaUsuario(req, res) {
    const { id } = req.params;
    const {
        //id,
        usuariomodificacion
    } = req.body;
    try {
        const updateRowCount = await Usuario.update({
            usuariomodificacion,
            fechamodificacion: new Date(),
            estado: "BAJ"
        }, {
            where: {
                id
            }
        });

        const usuarios = await Usuario.findOne({
            where: {
                id
            }
        }//,{ include: Sucursal } 
        );
        res.json({
            message: 'Sucursal baja successfully',
            count: usuarios
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}