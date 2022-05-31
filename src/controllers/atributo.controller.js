
import Atributo from "../models/Atributo";

export async function getAtributo(req, res) {
    try {
        const atributos = await Atributo.findAll({ where: { estado: 'ACT' } });
        res.json({
            data: atributos
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getAtributoPorEmpresa(req, res) {
    const {
        empresaid } = req.params;
    try {
        const atributos = await Atributo.findAll({ where: { estado: 'ACT', empresaid } });
        res.json({
            data: atributos
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function createAtributo(req, res) {
    const {
        nombre,
        tipo,
        obligatorio,
        valordefecto,
        tipopoliza,
        descripcion,
        usuarioregistro,
        usuariomodificacion,
        tiporamoid,
        empresaid } = req.body;
    try {
        //const transaction= sequelize.transaction;
        let newAtributo = await Atributo.create({
            nombre,
            tipo,
            obligatorio,
            valordefecto,
            tipopoliza,
            descripcion,
            usuarioregistro,
            usuariomodificacion,
            estado:'ACT',
            fecharegistro:new Date(),
            fechamodificacion:new Date(),
            tiporamoid,
            empresaid
        }, {
            fields: ['nombre',
                'tipo',
                'obligatorio',
                'valordefecto',
                'tipopoliza',
                'descripcion',
                'usuarioregistro',
                'usuariomodificacion',
                'estado',
                'fecharegistro',
                'fechamodificacion',
                'tiporamoid',
                'empresaid']
        });
        if (newAtributo) {
            return res.json({
                message: 'Atributo created successfully',
                data: newAtributo
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function updateAtributo(req, res) {
    const { id } = req.params;
    const {  nombre,
        tipo,
        obligatorio,
        valordefecto,
        tipopoliza,
        descripcion,
        usuarioregistro,
        usuariomodificacion,
        tiporamoid,
        empresaid} = req.body;
    try {
        const updateRowCount = await Atributo.update({
            nombre,
            tipo,
            obligatorio,
            valordefecto,
            tipopoliza,
            descripcion,
            usuarioregistro,
            usuariomodificacion,
            fechamodificacion:new Date(),
            tiporamoid,
            empresaid
        }, {
            where: {
                id
            }
        });

        const atributos = await Atributo.findOne({
            where: {
                id
            }
        }
        );
        res.json({
            message: 'Atributo update successfully',
            count: atributos
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getOneAtributo(req, res) {
    try {
        const { id } = req.params;
        const usuario = await Atributo.findOne({
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

export async function deleteAtributo(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await Atributo.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Atributo deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}



export async function bajaAtributo(req, res) {
    const { id } = req.params;

    console.log("bajaAtributo");
    const {
        //    id,
        usuariomodificacion
    } = req.body;
    try {
        // var moment = require('moment');
        const updateRowCount = await Atributo.update({
            usuariomodificacion,
            /*  fechamodificacion:moment().format(), */
            fechamodificacion: new Date(),
            estado: 'BAJ'
        }, {
            where: {
                id
            }
        });

        const atributos = await Atributo.findOne({
            where: {
                id
            }
        }
        );

        res.json({
            message: 'Atributo baja successfully',
            count: atributos
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getAtributoPorTipoRamoYTipoPoliza(req, res) {
    const {
        empresaid,tiporamoid,tipopoliza } = req.params;
    try {
        const atributos = await Atributo.findAll({ where: { estado: 'ACT', empresaid,tiporamoid,tipopoliza } });
        res.json({
            data: atributos
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}