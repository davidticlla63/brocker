//import { Sequelize } from "sequelize/types";
//import { sequelize } from "../database/database";
import Empresa from "../models/Empresa";
import Sucursal from "../models/Sucursal";

export async function getSucursals(req, res) {
    try {
        
        const sucursals = await Sucursal.findAll({where:{estado:'ACT'}});
        res.json({
            data: sucursals
        });
    } catch (e) {
        console.log(e);
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
    try {
        //const transaction= sequelize.transaction;
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
        });
        if (newSucursal) {
            return res.json({
                message: 'Sucursal created successfully',
                data: newSucursal
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
            message: 'Something goes wrong',
            data: {}
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
            }
        }); 
        res.json({ sucursal });
    } catch (e) {
        console.log(e);
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
            message: 'Something goes wrong',
            data: {}
        });
    }
}

