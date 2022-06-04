import { sequelize } from "../database/database";
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
        usuarioregistro,
        usuariomodificacion,
        tipopolizaid,
        empresaid } = req.body;
    try {
        //const transaction= sequelize.transaction;
        let newAtributo = await Atributo.create({
            nombre,
            tipo,
            obligatorio,
            valordefecto,
            usuarioregistro,
            usuariomodificacion,
            estado: 'ACT',
            fecharegistro: new Date(),
            fechamodificacion: new Date(),
            tipopolizaid,
            empresaid
        }, {
            fields: ['nombre',
                'tipo',
                'obligatorio',
                'valordefecto',
                'usuarioregistro',
                'usuariomodificacion',
                'estado',
                'fecharegistro',
                'fechamodificacion',
                'tipopolizaid',
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
    const { nombre,
        tipo,
        obligatorio,
        valordefecto,
        usuarioregistro,
        usuariomodificacion,
        tipopolizaid,
        empresaid } = req.body;
    try {
        const updateRowCount = await Atributo.update({
            nombre,
            tipo,
            obligatorio,
            valordefecto,
            usuarioregistro,
            usuariomodificacion,
            fechamodificacion: new Date(),
            tipopolizaid,
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


export async function createAtributos(req, res) {
    const {
        atributos } = req.body;
    let t;
    let newAtributo;
    try {
        t = await sequelize.transaction();
        for (let i = 0; i < atributos.length; i++) {
            newAtributo = await Atributo.create({
                nombre: atributos[i].nombre,
                tipo: atributos[i].tipo,
                obligatorio: atributos[i].obligatorio,
                valordefecto: atributos[i].valordefecto,
                usuarioregistro: atributos[i].usuarioregistro,
                estado: 'ACT',
                fecharegistro: new Date(),
                fechamodificacion: new Date(),
                tipopolizaid: atributos[i].tipopolizaid,
                empresaid: atributos[i].empresaid
            }, {
                fields: ['nombre',
                    'tipo',
                    'obligatorio',
                    'valordefecto',
                    'usuarioregistro',
                    'estado',
                    'fecharegistro',
                    'fechamodificacion',
                    'tipopolizaid',
                    'empresaid']
            }, { transaction: t });

            //atributos[i] = newAtributo;
        }

        await t.commit();
        if (newAtributo) {
            return res.json({
                message: 'Atributo created successfully',
                data: atributos
            });
        }
    } catch (e) {
        console.log(e);

        if (t) {
            await t.rollback();
        }
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function updateAtributos(req, res) {
    //const { id } = req.params;
    const { atributos, atributoseliminados } = req.body;
    let t;
    let updateRowCount;
    let newAtributo;
    try {
        t = await sequelize.transaction();

        //ARCHIVOS ELIMINADOS
       /*  for (let i = 0; i < atributoseliminados.length; i++) {

            await Atributo.update({
                estado: 'BAJ',
                fechamodificacion: new Date()
            }, { where: { id: atributoseliminados[i].id } }, { transaction: t });

        } */
        for (let i = 0; i < atributos.length; i++) {
            if (!atributos[i].id) {
                newAtributo = await Atributo.create({
                    nombre: atributos[i].nombre,
                    tipo: atributos[i].tipo,
                    obligatorio: atributos[i].obligatorio,
                    valordefecto: atributos[i].valordefecto,
                    usuarioregistro: atributos[i].usuarioregistro,
                    estado: 'ACT',
                    fecharegistro: new Date(),
                    fechamodificacion: new Date(),
                    tipopolizaid: atributos[i].tipopolizaid,
                    empresaid: atributos[i].empresaid
                }, {
                    fields: ['nombre',
                        'tipo',
                        'obligatorio',
                        'valordefecto',
                        'usuarioregistro',
                        'estado',
                        'fecharegistro',
                        'fechamodificacion',
                        'tipopolizaid',
                        'empresaid']
                }, { transaction: t });
                atributos[i] = newAtributo;
            } else {
                updateRowCount = await Atributo.update({
                    nombre: atributos[i].nombre,
                    tipo: atributos[i].tipo,
                    obligatorio: atributos[i].obligatorio,
                    valordefecto: atributos[i].valordefecto,
                    usuariomodificacion: atributos[i].usuariomodificacion,
                    fechamodificacion: new Date(),
                    tipopolizaid: atributos[i].tipopolizaid,
                    empresaid: atributos[i].empresaid
                }, {
                    where: {
                        id: atributos[i].id
                    }
                }, { transaction: t });

                atributos[i] = updateRowCount;
            }

        }
        res.json({
            message: 'Atributo update successfully',
            count: atributos
        });

    } catch (e) {
        console.log(e);
        if (t) {
            await t.rollback();
        }
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

export async function getAtributoPorTipoPoliza(req, res) {
    const {
        empresaid, tipopolizaid } = req.params;
    try {
        const atributos = await Atributo.findAll({ where: { estado: 'ACT', empresaid, tipopolizaid } });
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