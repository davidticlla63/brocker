import { sequelize } from "../database/database";
const { QueryTypes } = require('sequelize');
import Contratante from "../models/Contratante";

export async function getContratantes(req, res) {
    try {
        const contratantes = await Contratante.findAll({ where: { estado: 'ACT' } });
        res.json({
            data: contratantes
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function createContratante(req, res) {
    const {
        nombre,
        nit,
        ejecutivoencargado,
        direccion,
        telefono,
        telefonoejecutivo,
        correoejecutivo,
        porcentajecomison,
        porcentajecomison2,
        sucursalid,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro = new Date(),
        fechamodificacion = new Date(),
        estado } = req.body;
    try {
        //const transaction= sequelize.transaction;
        let newContratante = await Contratante.create({
            nombre,
            nit,
            ejecutivoencargado,
            direccion,
            telefono,
            telefonoejecutivo,
            correoejecutivo,
            porcentajecomison,
            porcentajecomison2,
            sucursalid,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion,
            estado
        }, {
            fields: ['nombre', 'nit',
                'ejecutivoencargado',
                'direccion',
                'telefono',
                'telefonoejecutivo',
                'correoejecutivo',
                'porcentajecomison',
                'porcentajecomison2',
                'sucursalid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                'fechamodificacion', 'estado']
        });
        if (newContratante) {
            return res.json({
                message: 'Contratante created successfully',
                data: newContratante
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getOneContratante(req, res) {
    try {
        const { id } = req.params;
        const contratante = await Contratante.findOne({
            where: {
                id
            }
        });
        res.json({
            data: contratante
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getOneContratantePorSucursal(req, res) {
    try {
        const { sucursalid } = req.params;

        const contratantes = await sequelize.query("select c.* " +
            "from contratante c " +
            "inner join sucursal s on s.id=c.sucursalid  " +
            "where s.id= '" + sucursalid + "' order by c.fechamodificacion desc "
            , {
                type: QueryTypes.SELECT
            });
        /* const contratantes = await Contratante.findAll({
            where: {
                sucursalid, estado:'ACT'
            }
        }); */
        res.json({
            data: contratantes
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function deleteContratante(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await Contratante.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Contratante deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function updateContratante(req, res) {
    const { id } = req.params;
    const { nombre,
        nit,
        ejecutivoencargado,
        direccion,
        telefono,
        telefonoejecutivo,
        correoejecutivo,
        porcentajecomison,
        porcentajecomison2,
        sucursalid,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        fechamodificacion,
        estado } = req.body;
    try {
        const updateRowCount = await Contratante.update({
            nombre,
            nit,
            ejecutivoencargado,
            direccion,
            telefono,
            telefonoejecutivo,
            correoejecutivo,
            porcentajecomison,
            porcentajecomison2,
            sucursalid,
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

        const contratantes = await Contratante.findOne({
            where: {
                id
            }
        }
        );
        res.json({
            message: 'Contratante update successfully',
            count: contratantes
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}


export async function bajaContratante(req, res) {
    const { id } = req.params;

    console.log("bajaContratante");
    const {
        //    id,
        usuariomodificacion
    } = req.body;
    try {
        // var moment = require('moment');
        const updateRowCount = await Contratante.update({
            usuariomodificacion,
            /*  fechamodificacion:moment().format(), */
            fechamodificacion: new Date(),
            estado: 'BAJ'
        }, {
            where: {
                id
            }
        });

        const contratantes = await Contratante.findOne({
            where: {
                id
            }
        }
        );

        res.json({
            message: 'Contratante baja successfully',
            count: contratantes
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getContratantesPorEmpresa(req, res) {
    const { empresaid } = req.params;
    try {

        const contratantes = await sequelize.query("select c.* " +
            "from contratante c " +
            "inner join sucursal s on s.id=c.sucursalid  " +
            "where s.empresaid= '" + empresaid + "' order by c.fechamodificacion desc "
            , {
                type: QueryTypes.SELECT
            });
        //console.log(JSON.stringify(usuarios[0], null, 2));

        //res.json({ contratantes });

        res.json({
            data: contratantes
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}