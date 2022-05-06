//import { Sequelize } from "sequelize/types";
//import { sequelize } from "../database/database";
import Empresa from "../models/Empresa";
import ParamProduccion from "../models/ParamProduccion";
import Sucursal from "../models/Sucursal";
import { sequelize } from "../database/database";
const { QueryTypes } = require('sequelize');

export async function getSucursals(req, res) {
    try {
        
        const sucursals = await Sucursal.findAll({where:{estado:'ACT'}, order: [
            ['fechamodificacion', 'DESC']
        ]});
        res.json({
            data: sucursals
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function createSucursal(req, res) {
    const {  nombre,
        descripcion,
        telefono,
        actividad,
        representante,
        departamentoid,
        direccion,
        usuarioregistro,
        fecharegistro=new Date(),
        fechamodificacion,
        estado,
        empresaid} = req.body;
        const transaction = await sequelize.transaction();
    try {

        let result = await sequelize.transaction( async (t) => {
            // step 1

            let newSucursal = await Sucursal.create({
                nombre,
                descripcion,
                telefono,
                actividad,
                representante,
                departamentoid,
                direccion,
                usuarioregistro,
                fecharegistro,
                fechamodificacion,
                estado,
                empresaid
            }, {
                fields: ['nombre', 'descripcion', 'telefono', 'actividad',  'representante',
                'departamentoid','direccion','usuarioregistro','fecharegistro',
                'fechamodificacion','estado','empresaid']
            }, {t});
    
            //await Model.destroy({where: {id:id}, transaction: t});
    
            // Cause rollback
            if( false ){
                throw new Error('Rollback initiated');
            }
    

            let newParamProducion = await ParamProduccion.create({
                diaproduccion:1,
                sucursalid:newSucursal.id,
                usuarioregistro,
                fecharegistro:new Date(),
                fechamodificacion:new Date(),
                estado:'ACT'
            }, {
                fields: ['diaproduccion', 'sucursalid','usuarioregistro','fecharegistro',
                'fechamodificacion','estado']
            }, {t});
            // step 2
            //return await Model.create({}, {transaction: t});

            if (newSucursal) {
                return res.json({
                    message: 'Sucursal created successfully',
                    data: newSucursal
                });
            }
        });
        //const transaction= sequelize.transaction;
        
      
 /*        if (newSucursal) {
            return res.json({
                message: 'Sucursal created successfully',
                data: newSucursal
            });
        } */
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getOneSucursal(req, res) {
    try {
        const { id } = req.params;
        const sucursal = await Sucursal.findOne({
            where: {
                id
            }
        });
        res.json({
            data: sucursal
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function deleteSucursal(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await Sucursal.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Sucursal deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function updateSucursal(req, res) {
    const { id } = req.params;
    const { nombre,
        descripcion,
        telefono,
        actividad,
        representante,
        departamentoid,
        direccion,
        fecharegistro,
        estado,
        empresaid } = req.body;
    try {


        const cant= await Sucursal.update({
            nombre:nombre,
            descripcion:descripcion,
            telefono:telefono,
            actividad:actividad,
            representante:representante,
            departamentoid:departamentoid,
            direccion:direccion,
            fecharegistro:fecharegistro,
            fechamodificacion:new Date(),
            estado:estado,
            empresaid:empresaid 
        },{where:{id}});


            const sucursals = await Sucursal.findOne({
                where: {
                    id
                }
            },{ include: Empresa } );


        /* const sucursals = await Sucursal.findAll({
            attributes: ['id', 'nombre', 'descripcion', 'telefono', 'actividad','fecharegistro',
            'fechamodificacion','estado','empresaid'],
            where: {
                id
            }
        });

        if (sucursals.length > 0) {
            sucursals.forEach(async sucursal => {
                await sucursal.update({
                    nombre,
                    descripcion,
                    telefono,
                    actividad,
                    fecharegistro,
                    fechamodificacion,
                    estado,
                    empresaid
                });
            });
        } */

        return res.json({
            message: 'Sucursal updated successfully',
            data: sucursals
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }

   
}

export async function getSucursalByEmpresa(req, res) {
    try {
        const { empresaid } = req.params;
        const sucursal = await Sucursal.findAll({
            attributes: ['id', 'nombre', 'descripcion','representante', 'departamentoid','direccion', 'telefono', 'actividad','usuarioregistro','fecharegistro',
            'fechamodificacion','estado','empresaid'],
            where: {
                empresaid ,estado:'ACT'
            }, order: [
                ['fechamodificacion', 'DESC']
            ]
        }); 
        res.json({ sucursal });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}


export async function bajaSucursal(req, res) {
    const { id } = req.params;
    const { 
        //id,
        usuariomodificacion
         } = req.body;
    try {
        const updateRowCount = await Sucursal.update({   
            usuariomodificacion,            
        fechamodificacion:new Date(),
            estado:"BAJ"
        },{
            where: {
                id
            }
        });

        const sucursals = await Sucursal.findOne({
           where: {
               id
           }
       }//,{ include: Sucursal } 
       );
        res.json({
            message: 'Sucursal baja successfully',
            count: sucursals
        });
       



    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

