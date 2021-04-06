import { sequelize } from "../database/database";
import RamoCompania from "../models/RamoCompania";
const { QueryTypes } = require('sequelize');

export async function getRamoCompania(req, res) {
    try {
        const ramoCompania = await RamoCompania.findAll({ where: { estado: 'ACT' } });
        res.json({
            data: ramoCompania
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function ramoCompaniaPorEmpresa(req, res) {
    const {
        empresaid } = req.params;
    try {
        console.log(req.params)
        //const ramoCompania = await RamoCompania.findAll({ where: { estado: 'ACT', ramoid } });

        const ramoCompania= await sequelize.query("select rc.*,r.nombre nombreramo from ramo_compania  rc " +
        "inner join ramo r on r.id=rc.ramoid " +
        "where r.empresaid= '" + empresaid + "' and rc.estado ='ACT' order by rc.id "
        , {
            type: QueryTypes.SELECT
        });
        res.json({
            data: ramoCompania
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function ramoCompaniaPorRamo(req, res) {
    const {
        ramoid } = req.params;
    try {
        console.log(req.params)
        //const ramoCompania = await RamoCompania.findAll({ where: { estado: 'ACT', ramoid } });

        const ramoCompania= await sequelize.query("select rc.*,r.nombre nombreramo from ramo_compania  rc " +
        "inner join ramo r on r.id=rc.ramoid " +
        "where r.id= '" + ramoid + "' and rc.estado ='ACT' order by rc.id "
        , {
            type: QueryTypes.SELECT
        });
        res.json({
            data: ramoCompania
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}



export async function ramoCompaniaPorCompania(req, res) {
    const {
        companiaseguroid } = req.params;
    try {
        const ramoCompania= await sequelize.query("select rc.*,r.nombre nombreramo from ramo_compania  rc " +
            "inner join ramo r on r.id=rc.ramoid " +
            "where rc.companiaseguroid= '" + companiaseguroid + "' and rc.estado ='ACT' order by rc.id "
            , {
                type: QueryTypes.SELECT
            });
        res.json({
            data: ramoCompania
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function createRamoCompania(req, res) {
    const {
        porcentajecomision,
        porcentajecomisioncredito,
        porcentajeprima,
        porcentajeprimacredito,
        nota,
        notacredito,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro = new Date(),
        fechamodificacion,
        estado,
        ramoid,
        companiaseguroid } = req.body;
    try {
        //const transaction= sequelize.transaction;

        const regRamoCompanias=await RamoCompania.findAll({ where :{ramoid,companiaseguroid,estado:'ACT'}});
        console.log(regRamoCompanias);
        if (regRamoCompanias.length > 0) {
            // authentication failed
            throw new Error("Ya existe Ramo asignado a la Compania!!");
        }


        let newRamoCompania = await RamoCompania.create({
            porcentajecomision,
            porcentajecomisioncredito,
            porcentajeprima,
            porcentajeprimacredito,
            nota,
            notacredito,

            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion,
            estado,
            ramoid,
            companiaseguroid
        }, {
            fields: ['porcentajecomision',
                'porcentajecomisioncredito',
                'porcentajeprima',
                'porcentajeprimacredito',
                'nota',
                'notacredito', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
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
        res.json({
            data: { estado: false, "error": e.message }
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
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
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
        res.json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function updateRamoCompania(req, res) {
    const { id } = req.params;
    const { porcentajecomision,
        porcentajecomisioncredito,
        porcentajeprima,
        porcentajeprimacredito,
        nota,
        notacredito,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        fechamodificacion,
        estado,
        ramoid,
        companiaseguroid } = req.body;
    try {
        const regRamoCompanias=await RamoCompania.findAll({ where :{ramoid,companiaseguroid,estado:'ACT'}});
        console.log(regRamoCompanias);
        if (regRamoCompanias.length > 0) {
            // authentication failed
            throw new Error("Ya existe Ramo asignado a la Compania!!");
        }
        const updateRowCount = await RamoCompania.update({
            porcentajecomision,
            porcentajecomisioncredito,
            porcentajeprima,
            porcentajeprimacredito,
            nota,
            notacredito,
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
            data: { estado: false, "error": e.message }
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
            data: { estado: false, "error": e.message }
        });
    }
}