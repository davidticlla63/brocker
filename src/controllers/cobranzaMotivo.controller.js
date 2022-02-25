
import CobranzaMotivo from "../models/CobranzaMotivo";

export async function getCobranzaMotivos(req, res) {
    try {
        const cobranzaMotivos = await CobranzaMotivo.findAll({ where: { estado: 'ACT' } });
        res.json({
            data: cobranzaMotivos
        });
    } catch (e) {
        console.log(e);
    }
}

export async function createCobranzaMotivo(req, res) {
    const {
        nombre,
        descripcion,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro = new Date(),
        fechamodificacion,
        estado } = req.body;
    try {
        //const transaction= sequelize.transaction;
        let newCobranzaMotivo = await CobranzaMotivo.create({
            nombre,
            descripcion,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion,
            estado
        }, {
            fields: ['nombre', 'descripcion', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                'fechamodificacion', 'estado']
        });
        if (newCobranzaMotivo) {
            return res.json({
                message: 'CobranzaMotivo created successfully',
                data: newCobranzaMotivo
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getOneCobranzaMotivo(req, res) {
    try {
        const { id } = req.params;
        const usuario = await CobranzaMotivo.findOne({
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

export async function deleteCobranzaMotivo(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await CobranzaMotivo.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'CobranzaMotivo deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function updateCobranzaMotivo(req, res) {
    const { id } = req.params;
    const { nombre,
        descripcion,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        fechamodificacion,
        estado } = req.body;
    try {
        const updateRowCount = await CobranzaMotivo.update({
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

        const cobranzaMotivos = await CobranzaMotivo.findOne({
            where: {
                id
            }
        }
        );
        res.json({
            message: 'CobranzaMotivo update successfully',
            count: cobranzaMotivos
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function bajaCobranzaMotivo(req, res) {
    const { id } = req.params;

    console.log("bajaCobranzaMotivo");
    const {
        //    id,
        usuariomodificacion
    } = req.body;
    try {
        // var moment = require('moment');
        const updateRowCount = await CobranzaMotivo.update({
            usuariomodificacion,
            /*  fechamodificacion:moment().format(), */
            fechamodificacion: new Date(),
            estado: 'BAJ'
        }, {
            where: {
                id
            }
        });

        const cobranzaMotivos = await CobranzaMotivo.findOne({
            where: {
                id
            }
        }
        );

        res.json({
            message: 'CobranzaMotivo baja successfully',
            count: cobranzaMotivos
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}


export async function getCobranzaMotivosPorPlanPago(req, res) {
    const { planpagoid } = req.params;
    try {

        const siniestros = await sequelize.query(`select planpagoid, string_agg(to_char(fecharegistro, 'DD/MM/YYYY') || ' ' || descripcion, ', ' order by descripcion) 
            from cobranza_motivo 
            where estado='ACT' AND planpagoid='` + planpagoid +`' 
             group by planpagoid  `
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