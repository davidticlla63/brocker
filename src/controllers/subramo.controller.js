
import SubRamo from "../models/SubRamo";

export async function getSubRamos(req, res) {
    try {
        const subRamos = await SubRamo.findAll({ where: { estado: 'ACT' } , order: [
            ['fechamodificacion', 'DESC']
        ]});
        res.json({
            data: subRamos
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

/* export async function subRamosPorRamo(req, res) {
    const {
        ramoid } = req.params;
    try {
        console.log(req.params)
        const subRamos = await SubRamo.findAll({ where: { estado: 'ACT', ramoid } });
        res.json({
            data: subRamos
        });
    } catch (e) {
        console.log(e);
    }
} */

export async function subRamosPorRamo(req, res) {
    const {
        ramoid } = req.params;
    try {
        console.log(req.params)
        const subRamos = await SubRamo.findAll({ where: { estado: 'ACT', ramoid }, order: [
            ['fechamodificacion', 'DESC']
        ] });
        res.json({
            data: subRamos
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function createSubRamo(req, res) {
    const {
        nombre,
        descripcion,
        spvs,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro = new Date(),
        fechamodificacion,
        estado,
        ramoid } = req.body;
    try {
        //const transaction= sequelize.transaction;
        let newSubRamo = await SubRamo.create({
            nombre,
            descripcion,
            spvs,

            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion,
            estado,
            ramoid
        }, {
            fields: ['nombre', 'descripcion','spvs', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                'fechamodificacion', 'estado',
                'ramoid']
        });
        if (newSubRamo) {
            return res.json({
                message: 'SubRamo created successfully',
                data: newSubRamo
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getOneSubRamo(req, res) {
    try {
        const { id } = req.params;
        const usuario = await SubRamo.findOne({
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

export async function deleteSubRamo(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await SubRamo.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'SubRamo deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function updateSubRamo(req, res) {
    const { id } = req.params;
    const { nombre,
        descripcion,
        spvs,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        fechamodificacion,
        estado } = req.body;
    try {
        const updateRowCount = await SubRamo.update({
            nombre,
            descripcion,
            spvs,
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

        const subRamos = await SubRamo.findOne({
            where: {
                id
            }
        }
        );
        res.json({
            message: 'SubRamo update successfully',
            count: subRamos
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}


export async function bajaSubRamo(req, res) {
    const { id } = req.params;

    console.log("bajaSubRamo");
    const {
        //    id,
        usuariomodificacion
    } = req.body;
    try {
        // var moment = require('moment');
        const updateRowCount = await SubRamo.update({
            usuariomodificacion,
            /*  fechamodificacion:moment().format(), */
            fechamodificacion: new Date(),
            estado: 'BAJ'
        }, {
            where: {
                id
            }
        });

        const subRamos = await SubRamo.findOne({
            where: {
                id
            }
        }
        );

        res.json({
            message: 'SubRamo baja successfully',
            count: subRamos
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}