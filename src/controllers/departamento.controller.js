
import Departamento from "../models/Departamento";
import Empresa from "../models/Empresa";

export async function getDepartamentos(req, res) {
    try {

        /* const departamentos = await Departamento.findAll({ where: { estado: 'ACT' }, include: Personal,include: Empresa }); */
        const departamentos = await Departamento.findAll({ where: { estado: 'ACT' }});
        res.json({
            data: departamentos
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function createDepartamento(req, res) {
    const {
        nombre,
        descripcion,
        empresaid,
        usuarioregistro,
        usuariomodificacion,
        estado } = req.body;
    try {
        //const transaction= sequelize.transaction;
        let newDepartamento = await Departamento.create({
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
        if (newDepartamento) {
            return res.json({
                message: 'Departamento created successfully',
                data: newDepartamento
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getOneDepartamento(req, res) {
    try {
        const { id } = req.params;
        const usuario = await Departamento.findOne({
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

export async function deleteDepartamento(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await Departamento.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Departamento deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function updateDepartamento(req, res) {
    const { id } = req.params;
    const { nombre,
        descripcion,
        empresaid,
        usuarioregistro,
        usuariomodificacion,
        estado } = req.body;
    try {
        const updateRowCount = await Departamento.update({
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

        const departamentos = await Departamento.findOne({
            where: {
                id
            }
        }
        );
        res.json({
            message: 'Departamento update successfully',
            count: departamentos
        });
       



    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}


export async function bajaDepartamento(req, res) {
    const { id } = req.params;

   console.log("bajaDepartamento");
    const { 
   //    id,
        usuariomodificacion
         } = req.body;
    try {
       // var moment = require('moment');
        const updateRowCount = await Departamento.update({   
            usuariomodificacion,
           /*  fechamodificacion:moment().format(), */
           fechamodificacion:new Date(),
            estado:'BAJ'
        },{
            where: {
                id
            }
        });

        const departamentos = await Departamento.findOne({
            where: {
                id
            }
        } 
        );
        
        res.json({
            message: 'Departamento baja successfully',
            count: departamentos
        });
       



    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function departamentoByEmpresa(req, res) {
    try {
        const { empresaid } = req.params;
        const departamentos = await Departamento.findAll({
         /*    attributes: ['','nombre', 'descripcion', 'empresaid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
            'fechamodificacion', 'estado'], */
            where: {
                empresaid ,estado:'ACT'
            }
        }); 
        res.json({ departamentos });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}