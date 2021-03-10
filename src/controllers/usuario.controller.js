//import { Sequelize } from "sequelize/types";
//import { sequelize } from "../database/database";
import Usuario from "../models/Usuario";

export async function getUsuarios(req, res) {
    try {
        
        const usuarios = await Usuario.findAll();
        res.json({
            data: usuarios
        });
    } catch (e) {
        console.log(e);
    }
}

export async function createUsuario(req, res) {
    const { 
        nombrecompleto,
        nick,
        password,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        fechamodificacion,
        estado} = req.body;
    try {
        //const transaction= sequelize.transaction;
        let newUsuario = await Usuario.create({
            nombrecompleto,
            nick,
        password,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        fechamodificacion,
        estado
        }, {
            fields: ['nombrecompleto', 'nick', 'password', 'usuarioregistro','usuariomodificacion','fecharegistro',
            'fechamodificacion','estado']
        });
        if (newUsuario) {
            return res.json({
                message: 'Usuario created successfully',
                data: newUsuario
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
    }
}

export async function updateUsuario(req, res) {
    const { id } = req.params;
    const { nombrecompleto,
        nick,
        password,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        fechamodificacion,
        estado } = req.body;
    try {

        const usuarios = await Usuario.findAll({
            attributes: ['nombrecompleto', 'nick', 'password', 'usuarioregistro','usuariomodificacion','fecharegistro',
            'fechamodificacion','estado'],
            where: {
                id
            }
        });

        if (usuarios.length > 0) {
            usuarios.forEach(async usuario => {
                await usuario.update({
                    nombrecompleto,
                    nick,
                    password,
                    usuarioregistro,
                    usuariomodificacion,
                    fecharegistro,
                    fechamodificacion,
                    estado
                });
            });
        }

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
    }
}