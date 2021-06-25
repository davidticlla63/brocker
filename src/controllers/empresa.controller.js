//import { Sequelize } from "sequelize/types";
//import { sequelize } from "../database/database";
import Empresa from "../models/Empresa";
import Sucursal from "../models/Sucursal";

export async function getEmpresas(req, res) {
    try {
        // const empresas = await Empresa.findAll({estado:'ACT', include:Sucursal});
        //const empresas = await Empresa.findAll({ where: { estado: 'ACT' }, include: Sucursal, as: 'sucursals' });
        const empresas = await Empresa.findAll({ where: { estado: 'ACT' } });
        res.json({
            data: empresas
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function createEmpresa(req, res) {
    const {razonsocial,
        descripcion,
        telefono,
        nit,
        representante,
        logo,
        fecharegistro = new Date(),
        fechamodificacion, estado } = req.body;
    try {
        //const transaction= sequelize.transaction;
        let newEmpresa = await Empresa.create({
            razonsocial,
            descripcion,
            telefono,
            nit,
            representante,
            logo,
            fecharegistro,
            fechamodificacion,
            estado
        }, {
            fields: ['razonsocial',
                'descripcion',
                'telefono',
                'nit',
                'representante',
                'logo',
                'fecharegistro',
                'fechamodificacion', 'estado']
        }, { include: Sucursal });
        if (newEmpresa) {
            return res.json({
                message: 'Empresa created successfully',
                data: newEmpresa
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getOneEmpresa(req, res) {
    try {
        const { id } = req.params;
        const empresa = await Empresa.findOne({ include: Sucursal }, {
            where: {
                id
            }
        });
        res.json({
            data: empresa
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function deleteEmpresa(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await Empresa.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Empresa deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function updateEmpresa(req, res) {
    const { id } = req.params;
    const { razonsocial,
        descripcion,
        telefono,
        nit,
        representante,
        logo,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        fechamodificacion } = req.body;
    try {


        const cant = await Empresa.update({
            razonsocial,
            descripcion,
            telefono,
            nit,
            representante,
            logo,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion
        }, { where: { id } });


        const empresas = await Empresa.findOne({
            where: {
                id
            }
        }//,{ include: Sucursal } 
        );



        /* const empresas = await Empresa.findAll({
            attributes: ['id',
                'razonsocial',
                'descripcion',
                'telefono',
                'nit',
                'representante',
                'logo',
                'usuarioregistro',
                'usuariomodificacion',
                'fecharegistro',
                'fechamodificacion'
            ],
            where: {
                id
            }
        });

        if (empresas.length > 0) {
            empresas.forEach(async empresa => {
                await empresa.update({
                    razonsocial,
                    descripcion,
                    telefono,
                    nit,
                    representante,
                    logo,
                    usuarioregistro,
                    usuariomodificacion,
                    fecharegistro,
                    fechamodificacion
                });
            });
        } */

        return res.json({
            message: 'Empresa updated successfully',
            data: empresas
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function bajaEmpresa(req, res) {
    const { id } = req.params;
    const {
        //id,
        usuariomodificacion
    } = req.body;
    try {
        const updateRowCount = await Empresa.update({
            usuariomodificacion,
            fechamodificacion:new Date(),
            estado: "BAJ"
        }, {
            where: {
                id
            }
        });

        const empresas = await Empresa.findOne({
            where: {
                id
            }
        }//,{ include: Sucursal } 
        );
        res.json({
            message: 'Empresa baja successfully',
            count: empresas
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}