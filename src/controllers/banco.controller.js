
import Banco from "../models/Banco";

export async function getBancos(req, res) {
    try {
        const bancos = await Banco.findAll({ where: { estado: 'ACT' }});
        res.json({
            data: bancos
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function bancosPorEmpresa(req, res) {
    const {
        empresaid } = req.params;
    try {
        console.log(req.params)
        const bancos = await Banco.findAll({ where: { estado: 'ACT' ,empresaid:empresaid}});
        res.json({
            data: bancos
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function createBanco(req, res) {
    const {
        nombre,
        descripcion,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro= new Date(),
        fechamodificacion,
        estado,
        empresaid} = req.body;
    try {
        //const transaction= sequelize.transaction;
        let newBanco = await Banco.create({
            nombre,
            descripcion,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion,
            estado,
            empresaid
        }, {
            fields: ['nombre', 'descripcion', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                'fechamodificacion', 'estado',
                'empresaid']
        });
        if (newBanco) {
            return res.json({
                message: 'Banco created successfully',
                data: newBanco
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getOneBanco(req, res) {
    try {
        const { id } = req.params;
        const usuario = await Banco.findOne({
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

export async function deleteBanco(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await Banco.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Banco deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function updateBanco(req, res) {
    const { id } = req.params;
    const { nombre,
        descripcion,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        fechamodificacion,
        estado } = req.body;
    try {
        const updateRowCount = await Banco.update({
            nombre,
            descripcion,
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

        const bancos = await Banco.findOne({
            where: {
                id
            }
        }
        );
        res.json({
            message: 'Banco update successfully',
            count: bancos
        });
       



    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}


export async function bajaBanco(req, res) {
    const { id } = req.params;

    const { 
   //    id,
        usuariomodificacion
         } = req.body;
    try {
       // var moment = require('moment');
        const updateRowCount = await Banco.update({   
            usuariomodificacion,
           /*  fechamodificacion:moment().format(), */
           fechamodificacion:new Date(),
            estado:'BAJ'
        },{
            where: {
                id
            }
        });

        const bancos = await Banco.findOne({
            where: {
                id
            }
        } 
        );
        
        res.json({
            message: 'Banco baja successfully',
            count: bancos
        });
       



    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}