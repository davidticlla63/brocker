
import Vendedor from "../models/Vendedor";

export async function getVendedors(req, res) {
    try {
        const vendedors = await Vendedor.findAll({ where: { estado: 'ACT' } });
        res.json({
            data: vendedors
        });
    } catch (e) {
        console.log(e);
    }
}

export async function createVendedor(req, res) {
    const {
        nombre,
        contratranteid,
        sucursalid,
        departamentoid,
        comisionvendedor,
        comisionvendedor2,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro = new Date(),
        fechamodificacion,
        estado } = req.body;
    try {
        //const transaction= sequelize.transaction;
        let newVendedor = await Vendedor.create({
            nombre,
            contratranteid,
            sucursalid,
            departamentoid,
            comisionvendedor,
            comisionvendedor2,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion,
            estado
        }, {
            fields: ['nombre', 'contratranteid', 'sucursalid',
                'departamentoid',
                'comisionvendedor',
                'comisionvendedor2', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                'fechamodificacion', 'estado']
        });
        if (newVendedor) {
            return res.json({
                message: 'Vendedor created successfully',
                data: newVendedor
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getOneVendedor(req, res) {
    try {
        const { id } = req.params;
        const usuario = await Vendedor.findOne({
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

export async function deleteVendedor(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await Vendedor.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Vendedor deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function updateVendedor(req, res) {
    const { id } = req.params;
    const { nombre,
        contratranteid,
        sucursalid,
        departamentoid,
        comisionvendedor,
        comisionvendedor2,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        fechamodificacion,
        estado } = req.body;
    try {
        const updateRowCount = await Vendedor.update({
            nombre,
            contratranteid,
            sucursalid,
            departamentoid,
            comisionvendedor,
            comisionvendedor2,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion,
            estado
        }, {
            where: {
                id
            }
        });

        const vendedors = await Vendedor.findOne({
            where: {
                id
            }
        }
        );
        res.json({
            message: 'Vendedor update successfully',
            count: vendedors
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}


export async function bajaVendedor(req, res) {
    const { id } = req.params;

    console.log("bajaVendedor");
    const {
        //    id,
        usuariomodificacion
    } = req.body;
    try {
        // var moment = require('moment');
        const updateRowCount = await Vendedor.update({
            usuariomodificacion,
            /*  fechamodificacion:moment().format(), */
            fechamodificacion: new Date(),
            estado: 'BAJ'
        }, {
            where: {
                id
            }
        });

        const vendedors = await Vendedor.findOne({
            where: {
                id
            }
        }
        );

        res.json({
            message: 'Vendedor baja successfully',
            count: vendedors
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}