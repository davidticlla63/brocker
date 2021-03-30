
import RamoCompania from "../models/RamoCompania";

export async function getRamoCompania(req, res) {
    try {
        const ramoCompania = await RamoCompania.findAll({ where: { estado: 'ACT' } });
        res.json({
            data: ramoCompania
        });
    } catch (e) {
        console.log(e);
    }
}

export async function ramoCompaniaPorRamo(req, res) {
    const {
        ramoid } = req.params;
    try {
        console.log(req.params)
        const ramoCompania = await RamoCompania.findAll({ where: { estado: 'ACT', ramoid } });
        res.json({
            data: ramoCompania
        });
    } catch (e) {
        console.log(e);
    }
}

export async function ramoCompaniaPorCompania(req, res) {
    const {
        companiaseguroid } = req.params;
    try {
        console.log(req.params)
        const ramoCompania = await RamoCompania.findAll({ where: { estado: 'ACT', companiaseguroid } });
        res.json({
            data: ramoCompania
        });
    } catch (e) {
        console.log(e);
    }
}

export async function createRamoCompania(req, res) {
    const {
        porcentajecomision,
        porcentajeprima,
        porcentajeprimacredito,
        nota,
        notacretido,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro = new Date(),
        fechamodificacion,
        estado,
        ramoid,
        companiaseguroid } = req.body;
    try {
        //const transaction= sequelize.transaction;
        let newRamoCompania = await RamoCompania.create({
            porcentajecomision,
            porcentajeprima,
            porcentajeprimacredito,
            nota,
            notacretido,

            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion,
            estado,
            ramoid,
            companiaseguroid
        }, {
            fields: ['porcentajecomision',
                'porcentajeprima',
                'porcentajeprimacredito',
                'nota',
                'notacretido', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                'fechamodificacion', 'estado',
                'ramoid', 'companiaseguroid']
        });
        if (newRamoCompania) {
            return res.json({
                message: 'RamoCompania created successfully',
                data: newRamoCompania
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

export async function getOneRamoCompania(req, res) {
    try {
        const { id } = req.params;
        const usuario = await RamoCompania.findOne({
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

export async function deleteRamoCompania(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await RamoCompania.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'RamoCompania deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
    }
}

export async function updateRamoCompania(req, res) {
    const { id } = req.params;
    const { porcentajecomision,
        porcentajeprima,
        porcentajeprimacredito,
        nota,
        notacretido,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        fechamodificacion,
        estado,
        ramoid,
        companiaseguroid } = req.body;
    try {
        const updateRowCount = await RamoCompania.update({
            porcentajecomision,
            porcentajeprima,
            porcentajeprimacredito,
            nota,
            notacretido,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion,
            estado, 
            ramoid,
            companiaseguroid
        }, {
            where: {
                id
            }
        });

        const ramoCompania = await RamoCompania.findOne({
            where: {
                id
            }
        }
        );
        res.json({
            message: 'RamoCompania update successfully',
            count: ramoCompania
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}


export async function bajaRamoCompania(req, res) {
    const { id } = req.params;

    console.log("bajaRamoCompania");
    const {
        //    id,
        usuariomodificacion
    } = req.body;
    try {
        // var moment = require('moment');
        const updateRowCount = await RamoCompania.update({
            usuariomodificacion,
            /*  fechamodificacion:moment().format(), */
            fechamodificacion: new Date(),
            estado: 'BAJ'
        }, {
            where: {
                id
            }
        });

        const ramoCompania = await RamoCompania.findOne({
            where: {
                id
            }
        }
        );

        res.json({
            message: 'RamoCompania baja successfully',
            count: ramoCompania
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}