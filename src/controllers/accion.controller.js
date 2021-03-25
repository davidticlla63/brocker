
import Accion from "../models/Accion";

export async function getAccions(req, res) {
    try {
        const accions = await Accion.findAll({ where: { estado: 'ACT' }});
        res.json({
            data: accions
        });
    } catch (e) {
        console.log(e);
    }
}

export async function createAccion(req, res) {
    const {
        nombre,
        descripcion,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro= new Date(),
        fechamodificacion,
        estado } = req.body;
    try {
        //const transaction= sequelize.transaction;
        let newAccion = await Accion.create({
            nombre,
            descripcion,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion,
            estado
        }, {
            fields: ['nombre', 'descripcion', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                'fechamodificacion', 'estado']
        });
        if (newAccion) {
            return res.json({
                message: 'Accion created successfully',
                data: newAccion
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

export async function getOneAccion(req, res) {
    try {
        const { id } = req.params;
        const usuario = await Accion.findOne({
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

export async function deleteAccion(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await Accion.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Accion deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
    }
}

export async function updateAccion(req, res) {
    const { id } = req.params;
    const { nombre,
        descripcion,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        fechamodificacion,
        estado } = req.body;
    try {
        const updateRowCount = await Accion.update({
            nombre,
            descripcion,
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

        const accions = await Accion.findOne({
            where: {
                id
            }
        }
        );
        res.json({
            message: 'Accion update successfully',
            count: accions
        });
       



    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}


export async function bajaAccion(req, res) {
    const { id } = req.params;

   console.log("bajaAccion");
    const { 
   //    id,
        usuariomodificacion
         } = req.body;
    try {
       // var moment = require('moment');
        const updateRowCount = await Accion.update({   
            usuariomodificacion,
           /*  fechamodificacion:moment().format(), */
           fechamodificacion:new Date(),
            estado:'BAJ'
        },{
            where: {
                id
            }
        });

        const accions = await Accion.findOne({
            where: {
                id
            }
        } 
        );
        
        res.json({
            message: 'Accion baja successfully',
            count: accions
        });
       



    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}