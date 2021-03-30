import { sequelize } from "../database/database";
const { QueryTypes } = require('sequelize');
import Ramo from "../models/Ramo";

export async function getRamos(req, res) {
    try {
        const ramos = await Ramo.findAll({ where: { estado: 'ACT' } });
        res.json({
            data: ramos
        });
    } catch (e) {
        console.log(e);
    }
}

export async function getRamosPorEmpresa(req, res) {
    const {
        empresaid } = req.params;
    try {


        const ramos = await sequelize.query("select r.* ,tr.nombre as tiporamo " +
        "from ramo r " +
        "inner join tipo_ramo tr on tr.id=r.tiporamoid " +
        "where r.empresaid= '" + empresaid + "' and r.estado='ACT' order by r.id "
        , {
            type: QueryTypes.SELECT
        });
        //const ramos = await Ramo.findAll({ where: { estado: 'ACT', empresaid } });
        res.json({
            data: ramos
        });
    } catch (e) {
        console.log(e);
    }
}

export async function createRamo(req, res) {
    const {
        nombre,
        descripcion,
        ramoSpvs,
        tiporamoid,
        empresaid,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro = new Date(),
        fechamodificacion,
        estado } = req.body;
    try {
        //const transaction= sequelize.transaction;
        let newRamo = await Ramo.create({
            nombre,
            descripcion,
            ramoSpvs,
            tiporamoid,
            empresaid,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion,
            estado
        }, {
            fields: ['nombre', 'descripcion', 'ramoSpvs',
                'tiporamoid',
                'empresaid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                'fechamodificacion', 'estado']
        });
        if (newRamo) {
            return res.json({
                message: 'Ramo created successfully',
                data: newRamo
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

export async function getOneRamo(req, res) {
    try {
        const { id } = req.params;
        const usuario = await Ramo.findOne({
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

export async function deleteRamo(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await Ramo.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Ramo deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
    }
}

export async function updateRamo(req, res) {
    const { id } = req.params;
    const { nombre,
        descripcion,
        ramoSpvs,
        tiporamoid,
        empresaid,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        fechamodificacion,
        estado } = req.body;
    try {
        const updateRowCount = await Ramo.update({
            nombre,
            descripcion,
            ramoSpvs,
            tiporamoid,
            empresaid,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion,
            estado
        }, {
            where: {
                id
            }
        });

        const ramos = await Ramo.findOne({
            where: {
                id
            }
        }
        );
        res.json({
            message: 'Ramo update successfully',
            count: ramos
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}


export async function bajaRamo(req, res) {
    const { id } = req.params;

    console.log("bajaRamo");
    const {
        //    id,
        usuariomodificacion
    } = req.body;
    try {
        // var moment = require('moment');
        const updateRowCount = await Ramo.update({
            usuariomodificacion,
            /*  fechamodificacion:moment().format(), */
            fechamodificacion: new Date(),
            estado: 'BAJ'
        }, {
            where: {
                id
            }
        });

        const ramos = await Ramo.findOne({
            where: {
                id
            }
        }
        );

        res.json({
            message: 'Ramo baja successfully',
            count: ramos
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}