
import PolizaDetalleAdicionales from "../models/PolizaDetalleAdicionales";

export async function getPolizaDetalleAdicionales(req, res) {
    try {
        const polizaAdicionals = await PolizaDetalleAdicionales.findAll({ where: { estado: 'ACT' }});
        res.json({
            data: polizaAdicionals
        });
    } catch (e) {
        console.log(e);
    }
}




export async function deletePolizaDetalleAdicionales(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await PolizaDetalleAdicionales.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'PolizaDetalleAdicionales deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function updatePolizaDetalleAdicionales(req, res) {
    const { id } = req.params;
    const {valor,
        dato,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        fechamodificacion,
        estado } = req.body;
    try {
        const updateRowCount = await PolizaDetalleAdicionales.update({
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

        const polizaAdicionals = await PolizaDetalleAdicionales.findOne({
            where: {
                id
            }
        }
        );
        res.json({
            message: 'PolizaDetalleAdicionales update successfully',
            count: polizaAdicionals
        });
       



    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}


export async function bajaPolizaDetalleAdicionales(req, res) {
    const { id } = req.params;

   console.log("bajaPolizaDetalleAdicionales");
    const { 
   //    id,
        usuariomodificacion
         } = req.body;
    try {
       // var moment = require('moment');
        const updateRowCount = await PolizaDetalleAdicionales.update({   
            usuariomodificacion,
           /*  fechamodificacion:moment().format(), */
           fechamodificacion:new Date(),
            estado:'BAJ'
        },{
            where: {
                id
            }
        });

        const polizaAdicionals = await PolizaDetalleAdicionales.findOne({
            where: {
                id
            }
        } 
        );
        
        res.json({
            message: 'PolizaDetalleAdicionales baja successfully',
            count: polizaAdicionals
        });
       



    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getPolizaDetalleAdicionalesPorDetalle(req, res) {
    try {
        const { polizadetalleid } = req.params;
        const polizaDetalleAdicionaless = await PolizaDetalleAdicionales.findAll({
            where: {
                polizadetalleid, estado: 'ACT'
            }
        });
        res.json({
            data: polizaDetalleAdicionaless
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function polizaDetalleAdicionalessPorPoliza(req, res) {
    const {
        polizaid } = req.params;
    try {
        console.log(req.params)
        const polizaDetalleAdicionaless = await PolizaDetalleAdicionales.findAll({ where: { estado: 'ACT', polizaid } });
        res.json({
            data: polizaDetalleAdicionaless
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}
