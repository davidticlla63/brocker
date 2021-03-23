import { sequelize } from "../database/database";
const { QueryTypes } = require('sequelize');
import Empresa from "../models/Empresa";
import Perfil from "../models/Perfil";
import Permiso from "../models/Permiso";
import UsuarioPerfil from "../models/UsuarioPerfil";

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
            empresaid,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion,
            estado
        }, {
            fields: ['nombre', 'descripcion', 'empresaid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
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
            }
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
                accionid: permisos[i].accionId,
                paginaid: permisos[i].paginaId,
                perfilid: perfilid,
                usuarioregistro,
                usuariomodificacion: usuarioregistro,
                fecharegistro: new Date(),
                fechamodificacion: new Date(),
                estado: 'ACT'
            }, {
                fields: [
                    'accionid',
                    'paginaid',
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