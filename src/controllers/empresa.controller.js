//import { Sequelize } from "sequelize/types";
//import { sequelize } from "../database/database";
import Empresa from "../models/Empresa";
import Sucursal from "../models/Sucursal";

export async function getEmpresas(req, res) {
    try {
       // const empresas = await Empresa.findAll({estado:'ACT', include:Sucursal});
        const empresas = await Empresa.findAll({where :{estado:'ACT'},include:Sucursal });
        res.json({
            data: empresas
        });
    } catch (e) {
        console.log(e);
    }
}

export async function createEmpresa(req, res) {
    const { razonsocial,
        descripcion,
        telefono,
        logo,
        fecharegistro,
        fechamodificacion,estado } = req.body;
    try {
        //const transaction= sequelize.transaction;
        let newEmpresa = await Empresa.create({
            razonsocial,
            descripcion,
            telefono,
            logo,
            fecharegistro,
            fechamodificacion,
            estado
        }, {
            fields: ['razonsocial',
            'descripcion',
            'telefono',
            'logo',
            'fecharegistro',
            'fechamodificacion','estado']
        },{include:Sucursal});
        if (newEmpresa) {
            return res.json({
                message: 'Empresa created successfully',
                data: newEmpresa
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

export async function getOneEmpresa(req, res) {
    try {
        const { id } = req.params;
        const empresa = await Empresa.findOne({include:Sucursal},{
            where: {
                id
            }
        });
        res.json({
            data: empresa
        });
    } catch (e) {
        console.log(e);
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
    }
}

export async function updateEmpresa(req, res) {
    const { id } = req.params;
    const { razonsocial,
        descripcion,
        telefono,
        logo,
        fecharegistro,
        fechamodificacion } = req.body;
    try {

        const empresas = await Empresa.findAll({
            attributes: ['id',
                'razonsocial',
            'descripcion',
            'telefono',
            'logo',
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
                    logo,
                    fecharegistro,
                    fechamodificacion
                });
            });
        }

        return res.json({
            message: 'Empresa updated successfully',
            data: empresas
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}