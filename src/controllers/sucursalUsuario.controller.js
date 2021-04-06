//import { Sequelize } from "sequelize/types";
//import { sequelize } from "../database/database";
import SucursalUsuario from "../models/SucursalUsuario";

const atributos= ['usuarioid',
'sucursalid',
'usuarioregistro',
'usuariomodificacion',
'fecharegistro',
'fechamodificacion',
'estado']

// const atributo={  
//     usuarioid,
//     sucursalid,
//     usuarioregistro,
//     usuariomodificacion,
//     fecharegistro,
//     fechamodificacion,
//     estado
// } 

export async function getSucursalUsuarios(req, res) {
    try {        
        const sucursalUsuarios = await SucursalUsuario.findAll({where:{estado:'ACT'}});
        res.json({
            data: sucursalUsuarios
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function createSucursalUsuario(req, res) {
    const {usuarioid,
    sucursalid,
    usuarioregistro,
    usuariomodificacion,
    fecharegistro,
    fechamodificacion,
    estado} = req.body;
    try {
        //const transaction= sequelize.transaction;
        let newSucursalUsuario = await SucursalUsuario.create({usuarioid,
            sucursalid,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion,
            estado}, {
            fields: ['usuarioid',
            'sucursalid',
            'usuarioregistro',
            'usuariomodificacion',
            'fecharegistro',
            'fechamodificacion',
            'estado']
        });
        if (newSucursalUsuario) {
            return res.json({
                message: 'SucursalUsuario created successfully',
                data: newSucursalUsuario
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getOneSucursalUsuario(req, res) {
    try {
        const { id } = req.params;
        const sucursalUsuario = await SucursalUsuario.findOne({
            where: {
                id
            }
        });
        res.json({
            data: sucursalUsuario
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function deleteSucursalUsuario(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await SucursalUsuario.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'SucursalUsuario deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function updateSucursalUsuario(req, res) {
    const { id } = req.params;
    const {  usuarioid,
        sucursalid,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        fechamodificacion,
        estado} = req.body;
    try {

        const sucursalUsuarios = await SucursalUsuario.findAll({
            attributes: atributos,
            where: {
                id
            }
        });

        if (sucursalUsuarios.length > 0) {
            sucursalUsuarios.forEach(async sucursalUsuario => {
                await sucursalUsuario.update({
                    usuarioid,
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
            message: 'SucursalUsuario updated successfully',
            data: sucursalUsuarios
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }

   
}

export async function getSucursalUsuarioByEmpresa(req, res) {
    try {
        const { empresaid } = req.params;
        const sucursalUsuario = await SucursalUsuario.findAll({
            attributes: atributos,
            where: {
                empresaid//,estado:'ACT'
            }
        }); 
        res.json({ sucursalUsuario });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}