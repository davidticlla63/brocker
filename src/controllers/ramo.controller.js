import { sequelize } from "../database/database";
const { QueryTypes } = require('sequelize');
import Ramo from "../models/Ramo";



export async function createRamo(req, res) {
    const {
        nombre,
        descripcion,
        spvs,
        tiporamoid,
        empresaid,
        ramoid,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro = new Date(),
        fechamodificacion,
        estado } = req.body;
    try {
        //const transaction= sequelize.transaction;
        let newRamo = await Ramo.create({
            nombre,
            descripcion,
            spvs,
            tiporamoid,
            empresaid,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion,
            estado,
            ramoid
        }, {
            fields: ['nombre', 'descripcion', 'spvs',
                'tiporamoid',
                'empresaid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                'fechamodificacion', 'estado','ramoid']
        });
        if (newRamo) {
            return res.json({
                message: 'Ramo created successfully',
                data: newRamo
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getOneRamo(req, res) {
    try {
        const { id } = req.params;
        const usuario = await Ramo.findOne({
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

export async function deleteRamo(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await Ramo.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Ramo deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function updateRamo(req, res) {
    const { id } = req.params;
    const { nombre,
        descripcion,
        spvs,
        tiporamoid,
        empresaid,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        fechamodificacion,
        estado,ramoid } = req.body;
    try {
        const updateRowCount = await Ramo.update({
            nombre,
            descripcion,
            spvs,
            tiporamoid,
            empresaid,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion,
            estado,
            ramoid
        }, {
            where: {
                id
            }
        });

        const ramos = await Ramo.findOne({
            where: {
                id
            }
        }
        );
        res.json({
            message: 'Ramo update successfully',
            count: ramos
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getRamos(req, res) {
    try {
        const ramos = await Ramo.findAll({
            where: { estado: 'ACT' }, order: [
                ['fechamodificacion', 'DESC']
            ]
        });
        res.json({
            data: ramos
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getSubRamos(req, res) {
    const {
        ramoid } = req.params;
    try {
        const ramos = await Ramo.findAll({
            where: { ramoid,estado: 'ACT' }, order: [
                ['fechamodificacion', 'DESC']
            ]
        });
        res.json({
            data: ramos
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}
export async function getRamosPorEmpresa(req, res) {
    const {
        empresaid } = req.params;
    try {


        const ramos = await sequelize.query("select r.* ,tr.nombre as tiporamo " +
            "from ramo r " +
            "inner join tipo_ramo tr on tr.id=r.tiporamoid " +
            "where r.empresaid= '" + empresaid + "' and r.estado='ACT' and r.ramoid is null order by r.fechamodificacion desc "
            , {
                type: QueryTypes.SELECT
            });
        //const ramos = await Ramo.findAll({ where: { estado: 'ACT', empresaid } });
        res.json({
            data: ramos
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function bajaRamo(req, res) {
    const { id } = req.params;

    console.log("bajaRamo");
    const {
        //    id,
        usuariomodificacion
    } = req.body;
    try {
        // var moment = require('moment');
        const updateRowCount = await Ramo.update({
            usuariomodificacion,
            /*  fechamodificacion:moment().format(), */
            fechamodificacion: new Date(),
            estado: 'BAJ'
        }, {
            where: {
                id
            }
        });

        const ramos = await Ramo.findOne({
            where: {
                id
            }
        }
        );

        res.json({
            message: 'Ramo baja successfully',
            count: ramos
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getRamosPorEmpresas(req, res) {
    const {
        empresaid } = req.params;
    try {
        
        const sql="select tr.id,tr.nombre as tipo,tr.spvs tipospvs,r.id ramoid,r.nombre as ramo,r.spvs ramospvs,sr.id subramoid,sr.nombre as subramo, case when sr.spvs is null then '00' else sr.spvs end subramospvs "+
        " from tipo_ramo tr "+
        " inner join ramo r on r.tiporamoid=tr.id and r.ramoid is null and r.estado='ACT' "+
        " left join ramo sr on sr.ramoid=r.id and sr.estado='ACT'  "+
        " where  tr.empresaid= '" + empresaid + "' and r.ramoid is null order by r.fechamodificacion desc ,sr.fechamodificacion desc ";

        const tiporamos = await sequelize.query(sql
            , {
                type: QueryTypes.SELECT
            });

       /*  const ramos = await sequelize.query("select r.* ,tr.nombre as tiporamo " +
            "from ramo r " +
            "inner join tipo_ramo tr on tr.id=r.tiporamoid " +
            "where r.empresaid= '" + empresaid + "' and r.estado='ACT' order by r.fechamodificacion desc "
            , {
                type: QueryTypes.SELECT
            });


        const tiporamos = await sequelize.query("select tr.* " +
            "from tipo_ramo tr  " +
            "where tr.empresaid= '" + empresaid + "' and tr.estado='ACT' order by tr.fechamodificacion desc "
            , {
                type: QueryTypes.SELECT
            });
        for (let i = 0; i < tiporamos.length; i++) {

            const ramos = await sequelize.query("select r.* " +
                "from ramo r  " +
                "where r.empresaid= '" + empresaid + "' and r.tiporamoid='" + tiporamos[i].id + "' and r.ramoid is null and r.estado='ACT' order by r.fechamodificacion desc "
                , {
                    type: QueryTypes.SELECT
                });
            for (let j = 0; j < ramos.length; i++) {

                const subramos = await sequelize.query("select r.* " +
                    "from ramo r  " +
                    "where r.ramo='" + ramos[j].id + "' and r.estado='ACT' order by r.fechamodificacion desc "
                    , {
                        type: QueryTypes.SELECT
                    });

                    res.json({
                         tiporamos:tiporamos[i],  tiporamos:tiporamos[i]
                    });

            }
        } */
        res.json({
            data: tiporamos
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function obtenerRamosPorEmpresa(req, res) {
    const {
        empresaid } = req.params;
    try {


        const ramos = await sequelize.query("select t.id,t.nombre tipo,t.spvs spvstipo,r.id ramoid,r.nombre ramo,r.spvs spvsramo,s.id subramoid, s.nombre subramo,case when s.spvs is null then '00' else s.spvs end spvssubramo " +
            " from tipo_ramo t " +
            "inner join ramo r on r.tiporamoid=t.id and r.ramoid is null " +
            " left join ramo s on s.ramoid=r.id and s.estado='ACT' "+
            " where  r.estado ='ACT'and r.empresaid= '" + empresaid + "' order by r.fechamodificacion desc "
            , {
                type: QueryTypes.SELECT
            });
        //const ramos = await Ramo.findAll({ where: { estado: 'ACT', empresaid } });
        res.json({
            data: ramos
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}



export async function ramoPorEmpresa(req, res) {
    const {
        empresaid } = req.params;
    try {
        const subRamoCompania = await sequelize.query(";with consulta as ( "+
            "select t.id,t.spvs, t.nombre as tipo,r.id ramoid, r.spvs spvsramo ,r.nombre ramo from tipo_ramo t  "+
            "inner join ramo r on r.tiporamoid=t.id and r.empresaid=t.empresaid "+
            "where r.estado='ACT' and r.ramoid is null and t.empresaid='"+empresaid+"'  "+
            "    ) "+
            "    select c.*,sr.id subramoid,sr.nombre subramo,sr.spvs spvsubramo from consulta c "+
            "    left join ramo sr on sr.ramoid=c.ramoid and sr.estado='ACT' "
            , {
                type: QueryTypes.SELECT
            });
        res.json({
            data: subRamoCompania
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

