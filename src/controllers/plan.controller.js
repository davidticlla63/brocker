
import Plan from "../models/Plan";

export async function getPlans(req, res) {
    try {
        const plans = await Plan.findAll({ where: { estado: 'ACT' } });
        res.json({
            data: plans
        });
    } catch (e) {
        console.log(e);
    }
}

export async function getPlansPorCompania(req, res) {
    const { companiaseguroid } = req.params;
    try {
        const plans = await Plan.findAll({ where: {companiaseguroid, estado: 'ACT' } });
        res.json({
            data: plans
        });
    } catch (e) {
        console.log(e);
    }
}

export async function createPlan(req, res) {
    const {
        nombre,
        descripcion,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro = new Date(),
        fechamodificacion,
        estado,
        companiaseguroid } = req.body;
    try {
        //const transaction= sequelize.transaction;
        let newPlan = await Plan.create({
            nombre,
            descripcion,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion,
            estado, companiaseguroid
        }, {
            fields: ['nombre', 'descripcion', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                'fechamodificacion', 'estado', 'companiaseguroid']
        });
        if (newPlan) {
            return res.json({
                message: 'Plan created successfully',
                data: newPlan
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getOnePlan(req, res) {
    try {
        const { id } = req.params;
        const usuario = await Plan.findOne({
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

export async function deletePlan(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await Plan.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Plan deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function updatePlan(req, res) {
    const { id } = req.params;
    const { nombre,
        descripcion,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        fechamodificacion,
        estado } = req.body;
    try {
        const updateRowCount = await Plan.update({
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

        const plans = await Plan.findOne({
            where: {
                id
            }
        }
        );
        res.json({
            message: 'Plan update successfully',
            count: plans
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}


export async function bajaPlan(req, res) {
    const { id } = req.params;

    console.log("bajaPlan");
    const {
        //    id,
        usuariomodificacion
    } = req.body;
    try {
        // var moment = require('moment');
        const updateRowCount = await Plan.update({
            usuariomodificacion,
            /*  fechamodificacion:moment().format(), */
            fechamodificacion: new Date(),
            estado: 'BAJ'
        }, {
            where: {
                id
            }
        });

        const plans = await Plan.findOne({
            where: {
                id
            }
        }
        );

        res.json({
            message: 'Plan baja successfully',
            count: plans
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}