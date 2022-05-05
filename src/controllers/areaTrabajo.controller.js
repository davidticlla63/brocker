
import Empresa from "../models/Empresa";
import AreaTrabajo from "../models/AreaTrabajo";
import Personal from "../models/Personal";

export async function getAreaTrabajos(req, res) {
    try {

        /* const usuarios = await AreaTrabajo.findAll({ where: { estado: 'ACT' }, include: Personal,include: Empresa }); */
        const usuarios = await AreaTrabajo.findAll({ where: { estado: 'ACT' }, order: [
            ['fechamodificacion', 'DESC']
        ], include: Personal});
        res.json({
            data: usuarios
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function createAreaTrabajo(req, res) {
    const {
        nombre,
        descripcion,
        empresaid,
        usuarioregistro,
        usuariomodificacion,
        estado } = req.body;
    try {
        //const transaction= sequelize.transaction;
        let newAreaTrabajo = await AreaTrabajo.create({
            nombre,
            descripcion,
            empresaid,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro:new Date(),
            fechamodificacion:new Date(),
            estado
        }, {
            fields: ['nombre', 'descripcion', 'empresaid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                'fechamodificacion', 'estado']
        });
        if (newAreaTrabajo) {
            return res.json({
                message: 'AreaTrabajo created successfully',
                data: newAreaTrabajo
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getOneAreaTrabajo(req, res) {
    try {
        const { id } = req.params;
        const usuario = await AreaTrabajo.findOne({
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

export async function deleteAreaTrabajo(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await AreaTrabajo.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'AreaTrabajo deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function updateAreaTrabajo(req, res) {
    const { id } = req.params;
    const { nombre,
        descripcion,
        empresaid,
        usuarioregistro,
        usuariomodificacion,
        estado } = req.body;
    try {
        const updateRowCount = await AreaTrabajo.update({
            nombre,
            descripcion,
            empresaid,
            usuarioregistro,
            usuariomodificacion,
            fechamodificacion:new Date(),
            estado
        },{
            where: {
                id
            }
        });

        const areaTrabajos = await AreaTrabajo.findOne({
            where: {
                id
            }
        }
        );
        res.json({
            message: 'AreaTrabajo update successfully',
            count: areaTrabajos
        });
       



    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}


export async function bajaAreaTrabajo(req, res) {
    const { id } = req.params;

   console.log("bajaAreaTrabajo");
    const { 
   //    id,
        usuariomodificacion
         } = req.body;
    try {
       // var moment = require('moment');
        const updateRowCount = await AreaTrabajo.update({   
            usuariomodificacion,
           /*  fechamodificacion:moment().format(), */
           fechamodificacion:new Date(),
            estado:'BAJ'
        },{
            where: {
                id
            }
        });

        const areaTrabajos = await AreaTrabajo.findOne({
            where: {
                id
            }
        } 
        );
        
        res.json({
            message: 'AreaTrabajo baja successfully',
            count: areaTrabajos
        });
       



    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function areaTrabajoByEmpresa(req, res) {
    try {
        const { empresaid } = req.params;
        const areaTrabajos = await AreaTrabajo.findAll({
         /*    attributes: ['','nombre', 'descripcion', 'empresaid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
            'fechamodificacion', 'estado'], */
            where: {
                empresaid ,estado:'ACT'
            }, order: [
                ['fechamodificacion', 'DESC']
            ]
        }); 
        res.json({ areaTrabajos });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}