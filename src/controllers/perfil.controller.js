
import Perfil from "../models/Perfil";
import UsuarioPerfil from "../models/UsuarioPerfil";

export async function getPerfils(req, res) {
    try {

        const usuarios = await Perfil.findAll({ where: { estado: 'ACT' }, include: UsuarioPerfil });
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
        usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        fechamodificacion,
        estado } = req.body;
    try {
        //const transaction= sequelize.transaction;
        let newPerfil = await Perfil.create({
            nombre,
            descripcion,
            sucursalid,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion,
            estado
        }, {
            fields: ['nombre', 'descripcion', 'sucursalid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
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
        usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        fechamodificacion,
        estado } = req.body;
    try {

        const usuarios = await Perfil.findAll({
            attributes: ['nombre', 'descripcion', 'sucursalid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                'fechamodificacion', 'estado'],
            where: {
                id
            }
        });

        if (usuarios.length > 0) {
            usuarios.forEach(async usuario => {
                await usuario.update({
                    nombre,
                    descripcion,
                    sucursalid,
                    usuarioregistro,
                    usuariomodificacion,
                    fecharegistro,
                    fechamodificacion,
                    estado
                });
            });
        }

        return res.json({
            message: 'Perfil updated successfully',
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