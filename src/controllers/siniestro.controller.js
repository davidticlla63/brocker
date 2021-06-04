
import Siniestro from "../models/Siniestro";

export async function getSiniestros(req, res) {
    try {
        const siniestros = await Siniestro.findAll({ where: { estado: 'ACT' }});
        res.json({
            data: siniestros
        });
    } catch (e) {
        console.log(e);
    }
}

export async function createSiniestro(req, res) {
    const {
        fechanotificacion,
        fechasiniestro,
        descripcion,
        resumen,
        placa,
        resumenfinalsiniestro,
        montoindemnizar,
        fecharecordatorio,
        notarecordatorio,
        tipo,
        estadosiniestro,
        encargadoid,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        fechamodificacion,
        estado,
        polizaid,
        sucursalid } = req.body;
    try {
        //const transaction= sequelize.transaction;
        let newSiniestro = await Siniestro.create({
            fechanotificacion,
            fechasiniestro,
            descripcion,
            resumen,
            placa,
            resumenfinalsiniestro,
            montoindemnizar,
            fecharecordatorio,
            notarecordatorio,
            tipo,
            estadosiniestro,
            encargadoid,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro:new Date(),
            fechamodificacion:new Date(),
            estado:'ACT',
            polizaid,
            sucursalid
        }, {
            fields: [ 'fechanotificacion',
                'fechasiniestro',
                'descripcion',
                'resumen',
                'placa',
                'resumenfinalsiniestro',
                'montoindemnizar',
                'fecharecordatorio',
                'notarecordatorio',
                'tipo',
                'estadosiniestro',
                'encargadoid',
                'usuarioregistro',
                'usuariomodificacion',
                'fecharegistro',
                'fechamodificacion',
                'estado',
                'polizaid',
                'sucursalid']
        });
        if (newSiniestro) {
            return res.json({
                message: 'Siniestro created successfully',
                data: newSiniestro
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function updateSiniestro(req, res) {
    const { id } = req.params;
    const { fechanotificacion,
        fechasiniestro,
        descripcion,
        resumen,
        placa,
        resumenfinalsiniestro,
        montoindemnizar,
        fecharecordatorio,
        notarecordatorio,
        tipo,
        estadosiniestro,
        encargadoid,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        fechamodificacion,
        estado,
        polizaid,
        sucursalid } = req.body;
    try {
        const updateRowCount = await Siniestro.update({
            fechanotificacion,
            fechasiniestro,
            descripcion,
            resumen,
            placa,
            resumenfinalsiniestro,
            montoindemnizar,
            fecharecordatorio,
            notarecordatorio,
            tipo,
            estadosiniestro,
            encargadoid,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion:new Date(),
            estado,
            polizaid,
            sucursalid
        },{
            where: {
                id
            }
        });

        const siniestros = await Siniestro.findOne({
            where: {
                id
            }
        }
        );
        res.json({
            message: 'Siniestro update successfully',
            count: siniestros
        });
       



    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getOneSiniestro(req, res) {
    try {
        const { id } = req.params;
        const usuario = await Siniestro.findOne({
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

export async function deleteSiniestro(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await Siniestro.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Siniestro deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function bajaSiniestro(req, res) {
    const { id } = req.params;

   console.log("bajaSiniestro");
    const { 
   //    id,
        usuariomodificacion
         } = req.body;
    try {
       // var moment = require('moment');
        const updateRowCount = await Siniestro.update({   
            usuariomodificacion,
           /*  fechamodificacion:moment().format(), */
           fechamodificacion:new Date(),
            estado:'BAJ'
        },{
            where: {
                id
            }
        });

        const siniestros = await Siniestro.findOne({
            where: {
                id
            }
        } 
        );
        
        res.json({
            message: 'Siniestro baja successfully',
            count: siniestros
        });
       



    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}