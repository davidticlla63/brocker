
import Carpeta from "../models/Carpeta";

export async function getCarpetas(req, res) {
    try {
        const carpetas = await Carpeta.findAll({ where: { estado: 'ACT' }});
        res.json({
            data: carpetas
        });
    } catch (e) {
        console.log(e);
    }
}

export async function createCarpeta(req, res) {
    const {
        nombre,
        descripcion,
        empresaid,
        carpetaid,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro= new Date(),
        fechamodificacion,
        estado } = req.body;
    try {
        //const transaction= sequelize.transaction;
        let newCarpeta = await Carpeta.create({
            nombre,
            descripcion,
            empresaid,
            carpetaid,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion,
            estado
        }, {
            fields: ['nombre', 'descripcion',  'empresaid',
            'carpetaid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                'fechamodificacion', 'estado']
        });
        if (newCarpeta) {
            return res.json({
                message: 'Carpeta created successfully',
                data: newCarpeta
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getOneCarpeta(req, res) {
    try {
        const { id } = req.params;
        const usuario = await Carpeta.findOne({
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

export async function deleteCarpeta(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await Carpeta.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Carpeta deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function updateCarpeta(req, res) {
    const { id } = req.params;
    const { nombre,
        descripcion,
        empresaid,
        carpetaid,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        fechamodificacion,
        estado } = req.body;
    try {
        const updateRowCount = await Carpeta.update({
            nombre,
            descripcion,
            empresaid,
            carpetaid,
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

        const carpetas = await Carpeta.findOne({
            where: {
                id
            }
        }
        );
        res.json({
            message: 'Carpeta update successfully',
            count: carpetas
        });
       



    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}


export async function bajaCarpeta(req, res) {
    const { id } = req.params;

   console.log("bajaCarpeta");
    const { 
   //    id,
        usuariomodificacion
         } = req.body;
    try {
       // var moment = require('moment');
        const updateRowCount = await Carpeta.update({   
            usuariomodificacion,
           /*  fechamodificacion:moment().format(), */
           fechamodificacion:new Date(),
            estado:'BAJ'
        },{
            where: {
                id
            }
        });

        const carpetas = await Carpeta.findOne({
            where: {
                id
            }
        } 
        );
        
        res.json({
            message: 'Carpeta baja successfully',
            count: carpetas
        });
       



    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}