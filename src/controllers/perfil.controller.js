import { sequelize } from "../database/database";
const { QueryTypes } = require('sequelize');
import Empresa from "../models/Empresa";
import Perfil from "../models/Perfil";
import Permiso from "../models/Permiso";
import Pagina from "../models/Pagina";
import Accion from "../models/Accion";
import UsuarioPerfil from "../models/UsuarioPerfil";
import Sucursal from "../models/Sucursal";

export async function getPerfils(req, res) {
    try {

        const usuarios = await Perfil.findAll({ where: { estado: 'ACT' }, include: UsuarioPerfil, include: Empresa });
        res.json({
            data: usuarios
        });
    } catch (e) {
        console.log(e);
    }
}

export async function createPerfil(req, res) {
    const {
        nombre,
        descripcion,
        sucursalid,
        empresaid,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro = new Date(),
        fechamodificacion,
        estado } = req.body;
    try {
        //const transaction= sequelize.transaction;
        let newPerfil = await Perfil.create({
            nombre,
            descripcion,
            sucursalid,
            empresaid,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion,
            estado
        }, {
            fields: ['nombre', 'descripcion','sucursalid', 'empresaid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                'fechamodificacion', 'estado']
        });
        if (newPerfil) {
            return res.json({
                message: 'Perfil created successfully',
                data: newPerfil
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

export async function getOnePerfil(req, res) {
    try {
        const { id } = req.params;
        const usuario = await Perfil.findOne({
            where: {
                id
            }
        });
        res.json({
            data: usuario
        });
    } catch (e) {
        console.log(e);
    }
}

export async function deletePerfil(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await Perfil.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Perfil deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
    }
}

export async function updatePerfil(req, res) {
    const { id } = req.params;
    const { nombre,
        descripcion,
        sucursalid,
        empresaid,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        fechamodificacion,
        estado } = req.body;
    try {
        const updateRowCount = await Perfil.update({
            nombre,
            descripcion,
            sucursalid,
            empresaid,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion,
            estado
        }, {
            where: {
                id
            }
        });

        const perfils = await Perfil.findOne({
            where: {
                id
            }
        });
        res.json({
            message: 'Perfil update successfully',
            perfil: perfils
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}


export async function getPerfilByEmpresa(req, res) {
    try {
        const { empresaid } = req.params;
        const perfils = await Perfil.findAll({
            /* attributes: ['id', 'nombre', 'descripcion','fecharegistro',
            'fechamodificacion','estado','empresaid'], */
            where: {
                empresaid, estado: 'ACT'
            },include:Sucursal
        });
        res.json({ perfils });
    } catch (e) {
        console.log(e);
    }
}


export async function getPerfilBySucursal(req, res) {
    try {
        const { sucursalid } = req.params;
        const perfils = await Perfil.findAll({
            /* attributes: ['id', 'nombre', 'descripcion','fecharegistro',
            'fechamodificacion','estado','empresaid'], */
            where: {
                sucursalid, estado: 'ACT'
            },include:Sucursal
        });
        res.json({ perfils });
    } catch (e) {
        console.log(e);
    }
}

export async function createPerfilPermisos(req, res) {
    const { perfilid } = req.params;
    const {
        permisos,
        usuarioregistro
    } = req.body;

    let t = await sequelize.transaction();
    try {
        await Permiso.update({
            fechamodificacion: new Date(),
            estado: 'BAJ',
            usuariomodificacion: usuarioregistro
        },
            {
                where: {
                    perfilid: perfilid
                }
            }
            , { transaction: t });

        // step 3
        for (let i = 0; i < permisos.length; i++) {
            // listaPermisos.push( 
            await Permiso.create({
               /*  accionid: permisos[i].accionId,
                paginaid: permisos[i].paginaId, */
                //accionid: permisos[i].accionId,
                paginaaccionid: permisos[i].id,
                perfilid: perfilid,
                usuarioregistro,
                usuariomodificacion: usuarioregistro,
                fecharegistro: new Date(),
                fechamodificacion: new Date(),
                estado: 'ACT'
            }, {
                fields: [
                    'paginaaccionid',
                    'perfilid',
                    'usuarioregistro',
                    'usuariomodificacion',
                    'fecharegistro',
                    'fechamodificacion',
                    'estado']
            }, { transaction: t });
            //)
        }
        // commit
        await t.commit();
        return res.json({
            message: 'Permisos created successfully',
            data: permisos
        });

    } catch (err) {
        // Rollback transaction only if the transaction object is defined
        // if (t) {
        await t.rollback();
        //await newUsuario.destroy();

        //}
        console.log(err);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
        // throw new Error(err);
    }
}

/* export async function getPermisosPorPerfil(req, res) {
    const { perfilid } = req.params;
    console.log(req.params)
    try {

        const paginas = await Permiso.findAll({
            where: { estado: 'ACT', perfilid }
            , include: { model: Pagina, require: true, estado: 'ACT', 
            include: { model: Accion, estado: 'ACT', require: true } }
        });
        res.json({
            data: paginas
        });
    } catch (e) {
        console.log(e);
    }
}
 */
export async function getPermisosPorPerfil(req, res) {
    const { perfilid } = req.params;
    try {
        /*   const permisos = await sequelize.query("select p.id as permisoid, per.id perfilid,per.nombre as nombreperfil,p.paginaid,pag.nombre as nombrepagina,p.accionid , a.nombre as nombreaccion "+
          "from pagina pag "+
           "inner join permiso p on p.paginaid=pag.id and p.estado='ACT' "+
           "inner join accion a on a.id=p.accionid  "+
           "inner join perfil per on per.id=p.perfilid "+
           "where per.id= '" + perfilid + "' order by per.id "
              , {
                  type: QueryTypes.SELECT
              }); */

        const permisos = await sequelize.query("select p.id as permisoid,pa.id as paginaaccionid, per.id perfilid,per.nombre as nombreperfil,pag.id paginaid,pag.nombre as nombrepagina,a.id accionid , a.nombre as nombreaccion " +
            "from pagina pag " +
            "inner join pagina_accion pa on pa.paginaid=pag.id and pa.estado='ACT' " +
            "inner join permiso p on P.paginaaccionid=pa.id and  p.estado='ACT' " +
            "inner join accion a on a.id=pa.accionid " +
            "inner join perfil per on per.id=p.perfilid " +
            "where per.id= '" + perfilid + "' order by per.id "
            , {
                type: QueryTypes.SELECT
            });
        //console.log(JSON.stringify(usuarios[0], null, 2));

        res.json({ permisos });
    } catch (e) {
        console.log(e);
    }
}