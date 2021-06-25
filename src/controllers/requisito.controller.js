import { sequelize } from "../database/database";
const { QueryTypes } = require('sequelize');
import Requisito from "../models/Requesito";

export async function getRequisitos(req, res) {
    try {
        const requisitos = await Requisito.findAll({ where: { estado: 'ACT' } });
        res.json({
            data: requisitos
        });
    } catch (e) {
        console.log(e);
    }
}

export async function getRequisitosPorEmpresa(req, res) {
    const { empresaid } = req.params;
    try {
        const requisitos = await Requisito.findAll({ where: {empresaid, estado: 'ACT' } });
        res.json({
            data: requisitos
        });
    } catch (e) {
        console.log(e);
    }
}

export async function createRequisito(req, res) {
    const {
        nombre,
        descripcion,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro = new Date(),
        fechamodificacion,
        estado,
        empresaid } = req.body;
    try {
        //const transaction= sequelize.transaction;
        let newRequisito = await Requisito.create({
            nombre,
            descripcion,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion,
            estado, empresaid
        }, {
            fields: ['nombre', 'descripcion', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                'fechamodificacion', 'estado', 'empresaid']
        });
        if (newRequisito) {
            return res.json({
                message: 'Requisito created successfully',
                data: newRequisito
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function updateRequisito(req, res) {
    const { id } = req.params;
    const { nombre,
        descripcion,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        fechamodificacion,
        estado } = req.body;
    try {
        const updateRowCount = await Requisito.update({
            nombre,
            descripcion,
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

        const requisitos = await Requisito.findOne({
            where: {
                id
            }
        }
        );
        res.json({
            message: 'Requisito update successfully',
            count: requisitos
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getOneRequisito(req, res) {
    try {
        const { id } = req.params;
        const usuario = await Requisito.findOne({
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

export async function deleteRequisito(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await Requisito.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Requisito deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}



export async function bajaRequisito(req, res) {
    const { id } = req.params;

    console.log("bajaRequisito");
    const {
        //    id,
        usuariomodificacion
    } = req.body;
    try {
        // var moment = require('moment');
        const updateRowCount = await Requisito.update({
            usuariomodificacion,
            /*  fechamodificacion:moment().format(), */
            fechamodificacion: new Date(),
            estado: 'BAJ'
        }, {
            where: {
                id
            }
        });

        const requisitos = await Requisito.findOne({
            where: {
                id
            }
        }
        );

        res.json({
            message: 'Requisito baja successfully',
            count: requisitos
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getRequisitoPorSiniestro(req, res) {
    const { siniestroid } = req.params;
    try {

        const siniestros = await sequelize.query("select case when sr.requisitoid is null then false else true end estado,r.id,r.nombre from requisito r "+
        " left join siniestro_requisito sr on sr.requisitoid=r.id and sr.estado='ACT' AND sr.siniestroid='"+siniestroid+"' "+
        " WHERE r.estado='ACT' "
            , {
                type: QueryTypes.SELECT
            });
        //console.log(JSON.stringify(usuarios[0], null, 2));

        res.json({ siniestros });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}