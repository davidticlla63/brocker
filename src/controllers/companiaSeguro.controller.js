
import CompaniaSeguro from "../models/CompaniaSeguro";

export async function getCompaniaSeguros(req, res) {
    try {
        const companiaSeguros = await CompaniaSeguro.findAll({ where: { estado: 'ACT' } });
        res.json({
            data: companiaSeguros
        });
    } catch (e) {
        console.log(e);
    }
}

export async function getCompaniaSegurosPorEmpresa(req, res) {
    const {
        empresaid } = req.params;
    try {
        const companiaSeguros = await CompaniaSeguro.findAll({ where: { estado: 'ACT', empresaid } });
        res.json({
            data: companiaSeguros
        });
    } catch (e) {
        console.log(e);
    }
}

export async function createCompaniaSeguro(req, res) {
    const {
        nombre,
        descripcion,
        nit,
        representanteLegal,
        direccion,
        telefono1,
        telefono2,
        web,
        ciaSpvs,
        nrocuenta,
        banco1,
        tipomoneda1,
        nrocuenta2,
        banco2,
        tipomoneda2,
        empresaid,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro = new Date(),
        fechamodificacion,
        estado } = req.body;
    try {
        //const transaction= sequelize.transaction;
        let newCompaniaSeguro = await CompaniaSeguro.create({
            nombre,
            descripcion,
            nit,
            representanteLegal,
            direccion,
            telefono1,
            telefono2,
            web,
            ciaSpvs,
            nrocuenta,
            banco1,
            tipomoneda1,
            nrocuenta2,
            banco2,
            tipomoneda2,
            empresaid,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion,
            estado
        }, {
            fields: ['nombre', 'descripcion', 'nit',
                'representanteLegal',
                'direccion',
                'telefono1',
                'telefono2',
                'web',
                'ciaSpvs',
                'nrocuenta',
                'banco1',
                'tipomoneda1',
                'nrocuenta2',
                'banco2',
                'tipomoneda2',
                'empresaid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                'fechamodificacion', 'estado']
        });
        if (newCompaniaSeguro) {
            return res.json({
                message: 'CompaniaSeguro created successfully',
                data: newCompaniaSeguro
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

export async function getOneCompaniaSeguro(req, res) {
    try {
        const { id } = req.params;
        const usuario = await CompaniaSeguro.findOne({
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

export async function deleteCompaniaSeguro(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await CompaniaSeguro.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'CompaniaSeguro deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
    }
}

export async function updateCompaniaSeguro(req, res) {
    const { id } = req.params;
    const { nombre,
        descripcion,
        nit,
        representanteLegal,
        direccion,
        telefono1,
        telefono2,
        web,
        ciaSpvs,
        nrocuenta,
        banco1,
        tipomoneda1,
        nrocuenta2,
        banco2,
        tipomoneda2,
        empresaid,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        fechamodificacion,
        estado } = req.body;
    try {
        const updateRowCount = await CompaniaSeguro.update({
            nombre,
            descripcion,
            nit,
            representanteLegal,
            direccion,
            telefono1,
            telefono2,
            web,
            ciaSpvs,
            nrocuenta,
            banco1,
            tipomoneda1,
            nrocuenta2,
            banco2,
            tipomoneda2,
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

        const companiaSeguros = await CompaniaSeguro.findOne({
            where: {
                id
            }
        }
        );
        res.json({
            message: 'CompaniaSeguro update successfully',
            count: companiaSeguros
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}


export async function bajaCompaniaSeguro(req, res) {
    const { id } = req.params;

    console.log("bajaCompaniaSeguro");
    const {
        //    id,
        usuariomodificacion
    } = req.body;
    try {
        // var moment = require('moment');
        const updateRowCount = await CompaniaSeguro.update({
            usuariomodificacion,
            /*  fechamodificacion:moment().format(), */
            fechamodificacion: new Date(),
            estado: 'BAJ'
        }, {
            where: {
                id
            }
        });

        const companiaSeguros = await CompaniaSeguro.findOne({
            where: {
                id
            }
        }
        );

        res.json({
            message: 'CompaniaSeguro baja successfully',
            count: companiaSeguros
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}