import { sequelize } from "../database/database";
const { QueryTypes } = require('sequelize');
import SiniestroRequisito from "../models/SiniestroRequisito";

export async function getSiniestroRequisitos(req, res) {
    try {
        const siniestroRequisitos = await SiniestroRequisito.findAll({ where: { estado: 'ACT' } });
        res.json({
            data: siniestroRequisitos
        });
    } catch (e) {
        console.log(e);
    }
}

export async function createSiniestroRequisitos(req, res) {
    const {
        siniestroRequisitoseliminados,
        siniestroRequisitos } = req.body;
        let t;
    try {
        t = await sequelize.transaction();
        if (siniestroRequisitoseliminados) {
            for (let i = 0; i < siniestroRequisitoseliminados.length; i++) {

                await SiniestroRequisito.update({
                    estado: 'BAJ',
                    fechamodificacion: new Date()
                }, { where: { id: siniestroRequisitoseliminados[i].id } }, { transaction: t });

            }
        }
        if (siniestroRequisitos) {
            for (let i = 0; i < siniestroRequisitos.length; i++) {
                await SiniestroRequisito.create({
                    usuarioregistro: siniestroRequisitos[i].usuarioregistro,
                    usuariomodificacion: siniestroRequisitos[i].usuariomodificacion,
                    fecharegistro: new Date(),
                    fechamodificacion: new Date(),
                    estado: 'ACT',
                    siniestroid: siniestroRequisitos[i].siniestroid,
                    requisitoid: siniestroRequisitos[i].requisitoid
                }, {
                    fields: [
                        'usuarioregistro',
                        'usuariomodificacion',
                        'fecharegistro',
                        'fechamodificacion',
                        'estado',
                        'siniestroid',
                        'requisitoid']
                }, { transaction: t });

                /*  await Archivo.update({
                     estado: 'BAJ',
                     fechamodificacion: new Date()
                 }, { where: { id: archivoseliminados[i].id } }, { transaction: t }); */

            }
        }
        await t.commit();

        if (siniestroRequisitos) {
            return res.json({
                message: 'SiniestroRequisito created successfully',
                data: siniestroRequisitos
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function createSiniestroRequisito(req, res) {
    const {
        usuarioregistro,
        usuariomodificacion,
        siniestroid,
        requisitoid } = req.body;
    try {
        //const transaction= sequelize.transaction;
        let newSiniestroRequisito = await SiniestroRequisito.create({

            usuarioregistro,
            usuariomodificacion,
            fecharegistro: new Date(),
            fechamodificacion: new Date(),
            estado: 'ACT',
            siniestroid,
            requisitoid
        }, {
            fields: [
                'usuarioregistro',
                'usuariomodificacion',
                'fecharegistro',
                'fechamodificacion',
                'estado',
                'siniestroid',
                'requisitoid']
        });
        if (newSiniestroRequisito) {
            return res.json({
                message: 'SiniestroRequisito created successfully',
                data: newSiniestroRequisito
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function updateSiniestroRequisito(req, res) {
    const { id } = req.params;
    const { usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        estado,
        siniestroid,
        requisitoid } = req.body;
    try {
        const updateRowCount = await SiniestroRequisito.update({
            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion: new Date(),
            estado,
            siniestroid,
            requisitoid
        }, {
            where: {
                id
            }
        });

        const siniestroRequisitos = await SiniestroRequisito.findOne({
            where: {
                id
            }
        }
        );
        res.json({
            message: 'SiniestroRequisito update successfully',
            count: siniestroRequisitos
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getOneSiniestroRequisito(req, res) {
    try {
        const { id } = req.params;
        const usuario = await SiniestroRequisito.findOne({
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

export async function deleteSiniestroRequisito(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await SiniestroRequisito.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'SiniestroRequisito deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function bajaSiniestroRequisito(req, res) {
    const { id } = req.params;

    console.log("bajaSiniestroRequisito");
    const {
        //    id,
        usuariomodificacion
    } = req.body;
    try {
        // var moment = require('moment');
        const updateRowCount = await SiniestroRequisito.update({
            usuariomodificacion,
            /*  fechamodificacion:moment().format(), */
            fechamodificacion: new Date(),
            estado: 'BAJ'
        }, {
            where: {
                id
            }
        });

        const siniestroRequisitos = await SiniestroRequisito.findOne({
            where: {
                id
            }
        }
        );

        res.json({
            message: 'SiniestroRequisito baja successfully',
            count: siniestroRequisitos
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getSiniestroRequisitosPorSiniestro(req, res) {
    const { siniestroid } = req.params;
    try {
        const requisitos = await Requisito.findAll({ where: { siniestroid, estado: 'ACT' } });
        res.json({
            data: requisitos
        });
    } catch (e) {
        console.log(e);
    }
}

