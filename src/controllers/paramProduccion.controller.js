
import Empresa from "../models/Empresa";
import ParamProduccion from "../models/ParamProduccion";
import Personal from "../models/Personal";

export async function getParamProduccions(req, res) {
    try {

        /* const ParamProduccionss = await ParamProduccion.findAll({ where: { estado: 'ACT' }, include: Personal,include: Empresa }); */
        const ParamProduccionss = await ParamProduccion.findAll({ where: { estado: 'ACT' }});
        res.json({
            data: ParamProduccionss
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function createParamProduccion(req, res) {
    const {
        diaproduccion,
        sucursalid,
        usuarioregistro,
        usuariomodificacion,
        estado } = req.body;
    try {
        //const transaction= sequelize.transaction;
        let newParamProduccion = await ParamProduccion.create({
            diaproduccion,
            sucursalid,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro :new Date(),
            fechamodificacion:new Date(),
            estado
        }, {
            fields: ['diaproduccion',
            'sucursalid',
            'usuarioregistro',
            'usuariomodificacion',
            'fecharegistro' ,
            'fechamodificacion',
            'estado']
        });
        if (newParamProduccion) {
            return res.json({
                message: 'ParamProduccion created successfully',
                data: newParamProduccion
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getOneParamProduccion(req, res) {
    try {
        const { id } = req.params;
        const ParamProduccions = await ParamProduccion.findOne({
            where: {
                id
            }
        });
        res.json({
            data: ParamProduccions
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function deleteParamProduccion(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await ParamProduccion.destroy({
            where: {
                id
            }
        });
        res.json({data:{
            message: 'ParamProduccion deleted successfully',
            count: deleteRowCount
        }});
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function updateParamProduccion(req, res) {
    const { id } = req.params;
    const { diaproduccion,
        usuariomodificacion,
        estado} = req.body;
    try {
        const updateRowCount = await ParamProduccion.update({
            diaproduccion,
            usuariomodificacion,
            fechamodificacion:new Date(),
            estado
        }, {
            where: {
                id
            }
        });

        const ParamProduccions = await ParamProduccion.findOne({
            where: {
                id
            }
        }
        );
        res.json({data:{
            message: 'ParamProduccion update successfully',
            count: ParamProduccions
        }});




    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function bajaParamProduccion(req, res) {
    const { id } = req.params;

    console.log("bajaParamProduccion");
    const {
        //    id,
        ParamProduccionsmodificacion
    } = req.body;
    try {
        // var moment = require('moment');
        const updateRowCount = await ParamProduccion.update({
            ParamProduccionsmodificacion,
            /*  fechamodificacion:moment().format(), */
            fechamodificacion: new Date(),
            estado: 'BAJ'
        }, {
            where: {
                id
            }
        });

        const ParamProduccions = await ParamProduccion.findOne({
            where: {
                id
            }
        }
        );

        res.json({data:{
            message: 'ParamProduccion baja successfully',
            count: ParamProduccions
        }});




    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function ParamProduccionBySucursal(req, res) {
    try {
        const { sucursalid } = req.params;
        const ParamProduccions = await ParamProduccion.findAll({
            /*    attributes: ['','nombre', 'descripcion', 'empresaid', 'ParamProduccionsregistro', 'ParamProduccionsmodificacion', 'fecharegistro',
               'fechamodificacion', 'estado'], */
            where: {
                sucursalid, estado: 'ACT'
            }
        });
        res.json({data:{ ParamProduccions }});
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}