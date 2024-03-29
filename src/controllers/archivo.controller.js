import { sequelize } from "../database/database";
const { QueryTypes } = require('sequelize');
import Archivo from "../models/Archivo";

export async function getArchivos(req, res) {
    //console.log('getArchivos');
    const { codigo } = req.params;
    try {
        if (codigo) {
            const archivos = await Archivo.findAll({ where: { estado: 'ACT', codigo } });
            res.json({
                data: archivos
            });
        }
    } catch (e) {
        console.log(e);
    }
}



export async function getArchivosCodigo(req, res) {
    try {
        //console.log('getArchivosCodigo');
        const { codigo } = req.params;
        //const archivos = await Archivo.findAll({ where: { codigo,estado: 'ACT' }});

        if (codigo) {
            let query = "select a.*" +
                "from archivo a " +
                "where a.codigo='" + codigo + "' and a.estado='ACT' order by a.nombre ";
            console.log(query)
            const archivos = await sequelize.query(query
                , {
                    type: QueryTypes.SELECT
                });
            res.json({
                data: archivos
            });
        }
    } catch (e) {
        console.log(e);
    }
}
export async function getArchivosXAsegurado(req, res) {
    try {
        const { aseguradoid } = req.params;
        const archivos = await Archivo.findAll({ where: { aseguradoid, estado: 'ACT' } });
        res.json({
            data: archivos
        });
    } catch (e) {
        console.log(e);
    }
}
export async function createArchivo(req, res) {


    const {
        nombre,
        descripcion,
        extension,
        archivo,
        tipo,
        codigo,
        aseguradoid,
        sucursalid,
        carpetaid,
        usuarioregistro,
        usuariomodificacion,
        estado = 'ACT' } = req.body;


    try {
        //const transaction= sequelize.transaction;
        let newArchivo = await Archivo.create({
            nombre,
            descripcion,
            extension,
            archivo,
            tipo,
            codigo,
            aseguradoid,
            sucursalid,
            carpetaid,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro:new Date(),
            fechamodificacion:new Date(),
            estado
        }, {
            fields: ['nombre', 'descripcion', 'extension',
                'archivo',
                'tipo',
                'codigo',
                'aseguradoid',
                'carpetaid',
                'sucursalid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                'fechamodificacion', 'estado']
        });
        if (newArchivo) {
            return res.json({
                message: 'Archivo created successfully',
                data: newArchivo
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getOneArchivo(req, res) {
    try {
        const { id } = req.params;
        const usuario = await Archivo.findOne({
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

export async function deleteArchivo(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await Archivo.update({ estado: 'ACT' }, {

            where: {
                id
            }
        });
        res.json({
            message: 'Archivo deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function updateArchivo(req, res) {
    const { id } = req.params;
    const { nombre,
        descripcion,
        extension,
        archivo,
        tipo,
        codigo,
        aseguradoid,
        sucursalid,
        carpetaid,
        usuarioregistro,
        usuariomodificacion,
        estado } = req.body;
    try {
        const updateRowCount = await Archivo.update({
            nombre,
            descripcion,
            extension,
            archivo,
            tipo,
            codigo,
            aseguradoid,
            sucursalid,
            carpetaid,
            usuarioregistro,
            usuariomodificacion,
            fechamodificacion:new Date(),
            estado
        }, {
            where: {
                id
            }
        });

        const archivos = await Archivo.findOne({
            where: {
                id
            }
        }
        );
        res.json({
            message: 'Archivo update successfully',
            count: archivos
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}


export async function bajaArchivo(req, res) {
    const { id } = req.params;

    console.log("bajaArchivo");
    const {
        //    id,
        usuariomodificacion
    } = req.body;
    try {
        // var moment = require('moment');
        const updateRowCount = await Archivo.update({
            usuariomodificacion,
            /*  fechamodificacion:moment().format(), */
            fechamodificacion: new Date(),
            estado: 'BAJ'
        }, {
            where: {
                id
            }
        });

        const archivos = await Archivo.findOne({
            where: {
                id
            }
        }
        );

        res.json({
            message: 'Archivo baja successfully',
            count: archivos
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}