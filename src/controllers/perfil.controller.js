
import Empresa from "../models/Empresa";
import Perfil from "../models/Perfil";
import UsuarioPerfil from "../models/UsuarioPerfil";

export async function getPerfils(req, res) {
    try {

        const usuarios = await Perfil.findAll({ where: { estado: 'ACT' }, include: UsuarioPerfil,include: Empresa });
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
        fecharegistro= new Date(),
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
        },{
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
                empresaid ,estado:'ACT'
            }
        }); 
        res.json({ perfils });
    } catch (e) {
        console.log(e);
    }
}