
import TipoPoliza from "../models/TipoPoliza";

export async function getTipoPolizas(req, res) {
    try {
        const tipoPolizas = await TipoPoliza.findAll({ where: { estado: 'ACT' }});
        res.json({
            data: tipoPolizas
        });
    } catch (e) {
        console.log(e);
    }
}

export async function createTipoPoliza(req, res) {
    const {
        nombre,
        descripcion,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro= new Date(),
        fechamodificacion,
        estado='ACT' } = req.body;
    try {
        //const transaction= sequelize.transaction;
        let newTipoPoliza = await TipoPoliza.create({
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
        if (newTipoPoliza) {
            return res.json({
                message: 'TipoPoliza created successfully',
                data: newTipoPoliza
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

export async function getOneTipoPoliza(req, res) {
    try {
        const { id } = req.params;
        const usuario = await TipoPoliza.findOne({
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

export async function deleteTipoPoliza(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await TipoPoliza.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'TipoPoliza deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
    }
}

export async function updateTipoPoliza(req, res) {
    const { id } = req.params;
    const { nombre,
        descripcion,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        fechamodificacion,
        estado } = req.body;
    try {
        const updateRowCount = await TipoPoliza.update({
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

        const tipoPolizas = await TipoPoliza.findOne({
            where: {
                id
            }
        }
        );
        res.json({
            message: 'TipoPoliza update successfully',
            count: tipoPolizas
        });
       



    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}


export async function bajaTipoPoliza(req, res) {
    const { id } = req.params;

   console.log("bajaTipoPoliza");
    const { 
   //    id,
        usuariomodificacion
         } = req.body;
    try {
       // var moment = require('moment');
        const updateRowCount = await TipoPoliza.update({   
            usuariomodificacion,
           /*  fechamodificacion:moment().format(), */
           fechamodificacion:new Date(),
            estado:'BAJ'
        },{
            where: {
                id
            }
        });

        const tipoPolizas = await TipoPoliza.findOne({
            where: {
                id
            }
        } 
        );
        
        res.json({
            message: 'TipoPoliza baja successfully',
            count: tipoPolizas
        });
       



    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}