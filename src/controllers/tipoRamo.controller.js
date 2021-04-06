
import TipoRamo from "../models/TipoRamo";

export async function getTipoRamos(req, res) {
    try {
        const tipoRamos = await TipoRamo.findAll({ where: { estado: 'ACT' }});
        res.json({
            data: tipoRamos
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getTipoRamosPorEmpresa(req, res) {
    const {
        empresaid } = req.params;
    try {
        const tipoRamos = await TipoRamo.findAll({ where: { estado: 'ACT' ,empresaid}});
        res.json({
            data: tipoRamos
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function createTipoRamo(req, res) {
    const {
        nombre,
        descripcion,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro= new Date(),
        fechamodificacion,
        estado,
        empresaid} = req.body;
    try {
        //const transaction= sequelize.transaction;
        let newTipoRamo = await TipoRamo.create({
            nombre,
            descripcion,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion,
            estado,
            empresaid
        }, {
            fields: ['nombre', 'descripcion', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                'fechamodificacion', 'estado',
                'empresaid']
        });
        if (newTipoRamo) {
            return res.json({
                message: 'TipoRamo created successfully',
                data: newTipoRamo
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getOneTipoRamo(req, res) {
    try {
        const { id } = req.params;
        const usuario = await TipoRamo.findOne({
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

export async function deleteTipoRamo(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await TipoRamo.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'TipoRamo deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function updateTipoRamo(req, res) {
    const { id } = req.params;
    const { nombre,
        descripcion,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        fechamodificacion,
        estado } = req.body;
    try {
        const updateRowCount = await TipoRamo.update({
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

        const tipoRamos = await TipoRamo.findOne({
            where: {
                id
            }
        }
        );
        res.json({
            message: 'TipoRamo update successfully',
            count: tipoRamos
        });
       



    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}


export async function bajaTipoRamo(req, res) {
    const { id } = req.params;

   console.log("bajaTipoRamo");
    const { 
   //    id,
        usuariomodificacion
         } = req.body;
    try {
       // var moment = require('moment');
        const updateRowCount = await TipoRamo.update({   
            usuariomodificacion,
           /*  fechamodificacion:moment().format(), */
           fechamodificacion:new Date(),
            estado:'BAJ'
        },{
            where: {
                id
            }
        });

        const tipoRamos = await TipoRamo.findOne({
            where: {
                id
            }
        } 
        );
        
        res.json({
            message: 'TipoRamo baja successfully',
            count: tipoRamos
        });
       



    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}