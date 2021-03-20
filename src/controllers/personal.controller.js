

import AreaTrabajo from "../models/AreaTrabajo";
import Personal from "../models/Personal";
import Sucursal from "../models/Sucursal";

export async function getPersonals(req, res) {
    try {

        const usuarios = await Personal.findAll({ where: { estado: 'ACT' }, include: AreaTrabajo,include: Sucursal });
        res.json({
            data: usuarios
        });
    } catch (e) {
        console.log(e);
    }
}

export async function createPersonal(req, res) {
    const {
        nombrecompleto,
        sexo,
        fechanacimiento,
        ci,
        telefono1,
        telefono2,  
        correo1,
        correo2,
        areatrabajoid,
        sucursalid,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro= new Date(),
        fechamodificacion,
        estado } = req.body;
    try {
        //const transaction= sequelize.transaction;
        let newPersonal = await Personal.create({
            nombrecompleto,
            sexo,
            fechanacimiento,
            ci,
            telefono1,
            telefono2,  
            correo1,
            correo2,
            areatrabajoid,
            sucursalid,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion,
            estado
        }, {
            fields: ['nombrecompleto',
                'sexo',
                'fechanacimiento',
                'ci',
                'telefono1',
                'telefono2',  
                'correo1',
                'correo2',
                'areatrabajoid', 'sucursalid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                'fechamodificacion', 'estado']
        });
        if (newPersonal) {
            return res.json({
                message: 'Personal created successfully',
                data: newPersonal
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

export async function getOnePersonal(req, res) {
    try {
        const { id } = req.params;
        const usuario = await Personal.findOne({
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

export async function deletePersonal(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await Personal.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Personal deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
    }
}

export async function updatePersonal(req, res) {
    const { id } = req.params;
    const {  nombrecompleto,
        sexo,
        fechanacimiento,
        ci,
        telefono1,
        telefono2,  
        correo1,
        correo2,
        areatrabajoid,
        sucursalid,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        fechamodificacion=new Date(),
        estado } = req.body;
    try {
        const updateRowCount = await Personal.update({
            nombrecompleto,
            sexo,
            fechanacimiento,
            ci,
            telefono1,
            telefono2,  
            correo1,
            correo2,
            areatrabajoid,
            sucursalid,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion,
            estado
        },{
            where: {
                id
            }
        });

        const personals = await Personal.findOne({
            where: {
                id
            }
        } 
        );
        res.json({
            message: 'Personal update successfully',
            count: personals
        });
       

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}


export async function bajaPersonal(req, res) {
    const { id } = req.params;
    const { 
        usuariomodificacion,
        fechamodificacion=new Date(),
        estado="BAJ" } = req.body;
    try {
        const updateRowCount = await Personal.update({   
            usuariomodificacion,
            fechamodificacion,
            estado
        },{
            where: {
                id
            }
        });

        const personals = await Personal.findOne({
            where: {
                id
            }
        } 
        );
        res.json({
            message: 'Personal update successfully',
            count: personals
        });
       


     

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

export async function personalBySucursal(req, res) {
    try {
        const { sucursalid } = req.params;
        const perfils = await Personal.findAll({
         /*    attributes: ['id', 'nombre', 'descripcion', 'telefono', 'actividad','fecharegistro',
            'fechamodificacion','estado','sucursalid'], */
            where: {
                sucursalid ,estado:'ACT'
            }
        }); 
        res.json({ perfils });
    } catch (e) {
        console.log(e);
    }
}

export async function personalByEmpresa(req, res) {
    try {
        const { empresaid } = req.params;
        const personals = await Personal.findAll( {where:{estado:'ACT'}, 
        include:[{model:AreaTrabajo, attributes: ['nombre'],require:true },
            {
              model: Sucursal,attributes: ['nombre'],require:true,
              where: {
                empresaid
              }
            }]
          });
        res.json({ personals });
    } catch (e) {
        console.log(e);
    }
}

export async function personalByAreaTrabajo(req, res) {
    try {
        const { areaTrabajoid } = req.params;
        const perfils = await Personal.findAll({
           /*  attributes: ['id', 'nombre', 'descripcion', 'telefono', 'actividad','fecharegistro',
            'fechamodificacion','estado','sucursalid'], */
            where: {
                areaTrabajoid ,estado:'ACT'
            }
        }); 
        res.json({ perfils });
    } catch (e) {
        console.log(e);
    }
}