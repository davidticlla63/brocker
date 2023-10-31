
import Empresa from "../models/Empresa";
import Periodo from "../models/Periodo";
import Personal from "../models/Personal";

export async function getPeriodos(req, res) {
    try {

        /* const usuarios = await Periodo.findAll({ where: { estado: 'ACT' }, include: Personal,include: Empresa }); */
        const usuarios = await Periodo.findAll({
            where: { estado: 'ACT' }, order: [
                ['fechamodificacion', 'DESC']
            ], include: Personal
        });
        res.json({
            data: usuarios
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function createPeriodo(req, res) {
    const {
        nombre,
        fechainicio,
        fechafin,
        empresaid,
        usuarioregistro,
        usuariomodificacion,
        estado } = req.body;
    try {
        //const transaction= sequelize.transaction;
        let newPeriodo = await Periodo.create({
            fechainicio,
            fechafin,
            mes,gestion,
            sucursalid,
            empresaid,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro: new Date(),
            fechamodificacion: new Date(),
            estado
        }, {
            fields: ['fechainicio', 'fechafin',  'mes','gestion', 'sucursalid', 'empresaid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                'fechamodificacion', 'estado']
        });
        if (newPeriodo) {
            return res.json({
                message: 'Periodo created successfully',
                data: newPeriodo
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getOnePeriodo(req, res) {
    try {
        const { id } = req.params;
        const usuario = await Periodo.findOne({
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

export async function deletePeriodo(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await Periodo.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Periodo deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function updatePeriodo(req, res) {
    const { id } = req.params;
    const { nombre,
        fechainicio,
        fechafin,
        mes, gestion,
        sucursalid,
        empresaid,
        usuarioregistro,
        usuariomodificacion,
        estado } = req.body;
    try {
        const updateRowCount = await Periodo.update({
            nombre,
            fechainicio,
            fechafin,
            mes, gestion,
            sucursalid,
            empresaid,
            usuarioregistro,
            usuariomodificacion,
            fechamodificacion: new Date(),
            estado
        }, {
            where: {
                id
            }
        });

        const Periodos = await Periodo.findOne({
            where: {
                id
            }
        }
        );
        res.json({
            message: 'Periodo update successfully',
            count: Periodos
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}


export async function bajaPeriodo(req, res) {
    const { id } = req.params;

    console.log("bajaPeriodo");
    const {
        //    id,
        usuariomodificacion
    } = req.body;
    try {
        // var moment = require('moment');
        const updateRowCount = await Periodo.update({
            usuariomodificacion,
            /*  fechamodificacion:moment().format(), */
            fechamodificacion: new Date(),
            estado: 'BAJ'
        }, {
            where: {
                id
            }
        });

        const Periodos = await Periodo.findOne({
            where: {
                id
            }
        }
        );

        res.json({
            message: 'Periodo baja successfully',
            count: Periodos
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function PeriodoByEmpresa(req, res) {
    try {
        const { empresaid } = req.params;
        const Periodos = await Periodo.findAll({
            /*    attributes: ['','nombre', 'fechainicio', 'empresaid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
               'fechamodificacion', 'estado'], */
            where: {
                empresaid, estado: 'ACT'
            }, order: [
                ['fechamodificacion', 'DESC']
            ]
        });
        res.json({ Periodos });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}