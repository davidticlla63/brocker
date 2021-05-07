import { sequelize } from "../database/database";
const { QueryTypes } = require('sequelize');
import AreaTrabajo from "../models/AreaTrabajo";
import Personal from "../models/Personal";
import Sucursal from "../models/Sucursal";

export async function getPersonals(req, res) {
    try {

        const usuarios = await Personal.findAll({ where: { estado: 'ACT' }, include: AreaTrabajo, include: Sucursal });
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

export async function createPersonal(req, res) {
    const {
        nombrecompleto,
        sexo,
        fechanacimiento,
        ci,
        telefono1,
        telefono2,
        correo1,
        correo2,
        fotoperfil,
        areatrabajoid,
        sucursalid,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro = new Date(),
        fechamodificacion,
        estado } = req.body;
    try {
        //const transaction= sequelize.transaction;
        let newPersonal = await Personal.create({
            nombrecompleto,
            sexo,
            fechanacimiento,
            ci,
            telefono1,
            telefono2,
            correo1,
            correo2,
            fotoperfil,
            areatrabajoid,
            sucursalid,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion,
            estado
        }, {
            fields: ['nombrecompleto',
                'sexo',
                'fechanacimiento',
                'ci',
                'telefono1',
                'telefono2',
                'correo1',
                'correo2',
                'fotoperfil',
                'areatrabajoid', 'sucursalid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                'fechamodificacion', 'estado']
        });
        if (newPersonal) {
            return res.json({
                message: 'Personal created successfully',
                data: newPersonal
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getOnePersonal(req, res) {
    try {
        const { id } = req.params;
        const usuario = await Personal.findOne({
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

export async function deletePersonal(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await Personal.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Personal deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function updatePersonal(req, res) {
    const { id } = req.params;
    const { nombrecompleto,
        sexo,
        fechanacimiento,
        ci,
        telefono1,
        telefono2,
        correo1,
        correo2,
        fotoperfil,
        areatrabajoid,
        sucursalid,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        fechamodificacion = new Date(),
        estado } = req.body;
    try {
        const updateRowCount = await Personal.update({
            nombrecompleto,
            sexo,
            fechanacimiento,
            ci,
            telefono1,
            telefono2,
            correo1,
            correo2,
            fotoperfil,
            areatrabajoid,
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

        const personals = await Personal.findOne({
            where: {
                id
            }
        }
        );
        res.json({
            message: 'Personal update successfully',
            count: personals
        });


    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}


export async function bajaPersonal(req, res) {
    const { id } = req.params;
    const {
        usuariomodificacion,
        fechamodificacion = new Date(),
        estado = "BAJ" } = req.body;
    try {
        const updateRowCount = await Personal.update({
            usuariomodificacion,
            fechamodificacion,
            estado
        }, {
            where: {
                id
            }
        });

        const personals = await Personal.findOne({
            where: {
                id
            }
        }
        );
        res.json({
            message: 'Personal update successfully',
            count: personals
        });





    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function personalBySucursal(req, res) {
    try {
        const { sucursalid } = req.params;
        const personals = await Personal.findAll({
            /*    attributes: ['id', 'nombre', 'descripcion', 'telefono', 'actividad','fecharegistro',
               'fechamodificacion','estado','sucursalid'], */
            where: {
                sucursalid, estado: 'ACT'
            },
            include: [{ model: AreaTrabajo, attributes: ['nombre'], require: true },
            {
                model: Sucursal, attributes: ['nombre'], require: true
            }]
        });
        res.json({ personals });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function personalByEmpresa(req, res) {
    try {
        const { empresaid } = req.params;
        const personals = await Personal.findAll({
            where: { estado: 'ACT' },
            include: [{ model: AreaTrabajo, attributes: ['nombre'], require: true },
            {
                model: Sucursal, attributes: ['nombre'], require: true,
                where: {
                    empresaid
                }
            }]
        });
        res.json({ personals });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function personalByAreaTrabajo(req, res) {
    try {
        const { areatrabajoid } = req.params;
        const personals = await Personal.findAll({
            attributes: ['id', 'nombrecompleto', 'sexo', 'fechanacimiento', 'ci', 'telefono1', 'telefono2', 'correo1', 'correo2', 'sucursalid', 'areatrabajoid'
            , 'fecharegistro', 'fechamodificacion', 'estado'],
            where: {
                areatrabajoid, estado: 'ACT'
            }
        });
        res.json({ personals });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}


export async function personalByAreaTrabajoYSucursal(req, res) {
    try {
        const { areatrabajoid, sucursalid } = req.params;
     /*    const personals = await Personal.findAll({
            attributes: ['id', 'nombrecompleto', 'sexo', 'fechanacimiento', 'ci', 'telefono1', 'telefono2', 'correo1', 'correo2', 'sucursalid', 'areatrabajoid'
                , 'fecharegistro', 'fechamodificacion', 'estado'],
            where: {
                areatrabajoid, sucursalid, estado: 'ACT'
            }
        });
        res.json({personals }); */
      

        const personals = await sequelize.query(" select p.id, p.nombrecompleto,p.sexo, p.fechanacimiento, p.ci,p.telefono1,p.telefono2,p.correo1,p.correo2, p.sucursalid,p.areatrabajoid " +
        ",p.fecharegistro,p.fechamodificacion,p.estado " +
        "from personal p " +
        "inner join area_trabajo a on a.id=p.areatrabajoid " +
        "inner join sucursal s on s.id=p.sucursalid " +
        //"inner join empresa e on e.id=s.empresaid " +
        "where a.id in ('" + areatrabajoid + "') and s.id='" + sucursalid + "' and p.estado='ACT' order by p.nombrecompleto "
        , {
            type: QueryTypes.SELECT
        });

   
    res.json({ personals });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}


export async function personalByAreaTrabajoYEmpresa(req, res) {
    try {
        const { areatrabajoid, empresaid } = req.params;


        const personals = await sequelize.query(" select p.id, p.nombrecompleto,p.sexo, p.fechanacimiento, p.ci,p.telefono1,p.telefono2,p.correo1,p.correo2, p.sucursalid,p.areatrabajoid " +
            ",p.fecharegistro,p.fechamodificacion,p.estado " +
            "from personal p " +
            "inner join area_trabajo a on a.id=p.areatrabajoid " +
            "inner join sucursal s on s.id=p.sucursalid " +
            "inner join empresa e on e.id=s.empresaid " +
            "where a.id in ('" + areatrabajoid + "') and e.id='" + empresaid + "' and p.estado='ACT' order by p.nombrecompleto "
            , {
                type: QueryTypes.SELECT
            });

       
        res.json({ personals });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}