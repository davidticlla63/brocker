
import PolizaAdicional from "../models/PolizaAdicional";

export async function getPolizaAdicionals(req, res) {
    try {
        const polizaAdicionals = await PolizaAdicional.findAll({ where: { estado: 'ACT' }});
        res.json({
            data: polizaAdicionals
        });
    } catch (e) {
        console.log(e);
    }
}

export async function createPolizaAdicional(req, res) {
    const {
        valor,
        dato,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro= new Date(),
        fechamodificacion,
        polizaid,
        estado } = req.body;
    try {
        //const transaction= sequelize.transaction;
        let newPolizaAdicional = await PolizaAdicional.create({
            valor,
            dato,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion,
            polizaid,
            estado
        }, {
            fields: [' valor',
            'dato', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                'fechamodificacion','polizaid', 'estado']
        });
        if (newPolizaAdicional) {
            return res.json({
                message: 'PolizaAdicional created successfully',
                data: newPolizaAdicional
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getOnePolizaAdicional(req, res) {
    try {
        const { id } = req.params;
        const usuario = await PolizaAdicional.findOne({
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

export async function deletePolizaAdicional(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await PolizaAdicional.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'PolizaAdicional deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function updatePolizaAdicional(req, res) {
    const { id } = req.params;
    const {valor,
        dato,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        fechamodificacion,
        estado } = req.body;
    try {
        const updateRowCount = await PolizaAdicional.update({
            valor,
            dato,
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

        const polizaAdicionals = await PolizaAdicional.findOne({
            where: {
                id
            }
        }
        );
        res.json({
            message: 'PolizaAdicional update successfully',
            count: polizaAdicionals
        });
       



    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}


export async function bajaPolizaAdicional(req, res) {
    const { id } = req.params;

   console.log("bajaPolizaAdicional");
    const { 
   //    id,
        usuariomodificacion
         } = req.body;
    try {
       // var moment = require('moment');
        const updateRowCount = await PolizaAdicional.update({   
            usuariomodificacion,
           /*  fechamodificacion:moment().format(), */
           fechamodificacion:new Date(),
            estado:'BAJ'
        },{
            where: {
                id
            }
        });

        const polizaAdicionals = await PolizaAdicional.findOne({
            where: {
                id
            }
        } 
        );
        
        res.json({
            message: 'PolizaAdicional baja successfully',
            count: polizaAdicionals
        });
       



    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}