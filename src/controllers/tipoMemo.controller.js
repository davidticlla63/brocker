
import TipoMemo from "../models/TipoMemo";

export async function getTipoMemos(req, res) {
    try {
        const tipoMemos = await TipoMemo.findAll({ where: { estado: 'ACT' }});
        res.json({
            data: tipoMemos
        });
    } catch (e) {
        console.log(e);
    }
}

export async function createTipoMemo(req, res) {
    const {
        nombre,
        descripcion,
        usuarioregistro,
        empresaid,
        usuariomodificacion,
        fecharegistro= new Date(),
        fechamodificacion= new Date(),
        estado= 'ACT' } = req.body;
    try {
        //const transaction= sequelize.transaction;
        let newTipoMemo = await TipoMemo.create({
            nombre,
            descripcion,
            empresaid,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion,
            estado
        }, {
            fields: ['nombre', 'descripcion','empresaid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                'fechamodificacion', 'estado']
        });
        if (newTipoMemo) {
            return res.json({
                message: 'TipoMemo created successfully',
                data: newTipoMemo
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getOneTipoMemo(req, res) {
    try {
        const { id } = req.params;
        const usuario = await TipoMemo.findOne({
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

export async function deleteTipoMemo(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await TipoMemo.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'TipoMemo deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function updateTipoMemo(req, res) {
    const { id } = req.params;
    const { nombre,
        descripcion,
        empresaid,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        fechamodificacion,
        estado } = req.body;
    try {
        const updateRowCount = await TipoMemo.update({
            nombre,
            descripcion,
            empresaid,
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

        const tipoMemos = await TipoMemo.findOne({
            where: {
                id
            }
        }
        );
        res.json({
            message: 'TipoMemo update successfully',
            count: tipoMemos
        });
       



    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}


export async function bajaTipoMemo(req, res) {
    const { id } = req.params;

   console.log("bajaTipoMemo");
    const { 
   //    id,
        usuariomodificacion
         } = req.body;
    try {
       // var moment = require('moment');
        const updateRowCount = await TipoMemo.update({   
            usuariomodificacion,
           /*  fechamodificacion:moment().format(), */
           fechamodificacion:new Date(),
            estado:'BAJ'
        },{
            where: {
                id
            }
        });

        const tipoMemos = await TipoMemo.findOne({
            where: {
                id
            }
        } 
        );
        
        res.json({
            message: 'TipoMemo baja successfully',
            count: tipoMemos
        });
       



    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}