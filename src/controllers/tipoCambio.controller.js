
import Empresa from "../models/Empresa";
import TipoCambio from "../models/TipoCambio";
import Personal from "../models/Personal";

export async function getTipoCambios(req, res) {
    try {

        /* const usuarios = await TipoCambio.findAll({ where: { estado: 'ACT' }, include: Personal,include: Empresa }); */
        const usuarios = await TipoCambio.findAll({ where: { estado: 'ACT' }, include: Personal });
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

export async function createTipoCambio(req, res) {
    const {
        fecha,
        tipocambioventa,
        tipocambiocompra,
        empresaid,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro = new Date(),
        fechamodificacion=new Date(),
        estado } = req.body;
    try {
        //const transaction= sequelize.transaction;
        let newTipoCambio = await TipoCambio.create({
            fecha,
            tipocambioventa,
            tipocambiocompra,
            empresaid,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion,
            estado
        }, {
            fields: ['fecha',
                'tipocambioventa',
                'tipocambiocompra', 'empresaid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                'fechamodificacion', 'estado']
        });
        if (newTipoCambio) {
            return res.json({
                message: 'TipoCambio created successfully',
                data: newTipoCambio
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getOneTipoCambio(req, res) {
    try {
        const { id } = req.params;
        const usuario = await TipoCambio.findOne({
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

export async function deleteTipoCambio(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await TipoCambio.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'TipoCambio deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function updateTipoCambio(req, res) {
    const { id } = req.params;
    const {  fecha,
        tipocambioventa,
        tipocambiocompra,
        empresaid,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        fechamodificacion=new Date(),
        estado } = req.body;
    try {
        const updateRowCount = await TipoCambio.update({
            fecha,
            tipocambioventa,
            tipocambiocompra,
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

        const tipoCambios = await TipoCambio.findOne({
            where: {
                id
            }
        }
        );
        res.json({
            message: 'TipoCambio update successfully',
            count: tipoCambios
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}


export async function bajaTipoCambio(req, res) {
    const { id } = req.params;

    console.log("bajaTipoCambio");
    const {
        //    id,
        usuariomodificacion
    } = req.body;
    try {
        // var moment = require('moment');
        const updateRowCount = await TipoCambio.update({
            usuariomodificacion,
            /*  fechamodificacion:moment().format(), */
            fechamodificacion: new Date(),
            estado: 'BAJ'
        }, {
            where: {
                id
            }
        });

        const tipoCambios = await TipoCambio.findOne({
            where: {
                id
            }
        }
        );

        res.json({
            message: 'TipoCambio baja successfully',
            count: tipoCambios
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function tipoCambioByEmpresa(req, res) {
    try {
        const { empresaid } = req.params;
        const tipoCambios = await TipoCambio.findAll({
            /*    attributes: ['','nombre', 'descripcion', 'empresaid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
               'fechamodificacion', 'estado'], */
            where: {
                empresaid, estado: 'ACT'
            }
        });
        res.json({ tipoCambios });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}