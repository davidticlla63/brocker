import { sequelize } from "../database/database";
const { QueryTypes } = require('sequelize');
import SiniestroSeguimiento from "../models/SiniestroSeguimiento";

export async function getSiniestroSeguimientos(req, res) {

    const { siniestroid } = req.params;
    try {

        const siniestros = await sequelize.query(`select s.*  
            from siniestro_seguimiento s 
            where  s.siniestroid= '` + siniestroid + `'  and s.estado IN ('ACT') order by s.fechamodificacion desc `
            , {
                type: QueryTypes.SELECT
            });
        //console.log(JSON.stringify(usuarios[0], null, 2));
        res.json({
            data: siniestros
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }

    /*   try {
          const { siniestroid } = req.params;
          const siniestros = await SiniestroSeguimiento.findAll({ where: { estado: 'ACT', siniestroid } });
          res.json({
              data: siniestros
          });
      } catch (e) {
          console.log(e);
      } */
}

export async function createSiniestroSeguimiento(req, res) {
    const {
        fecha,
        comentario,
        usuarioregistro,
        usuariomodificacion,
        siniestroid
    } = req.body;
    try {
        //const transaction= sequelize.transaction;
        let newSiniestroSeguimiento = await SiniestroSeguimiento.create({
            fecha,
            comentario,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro: new Date(),
            fechamodificacion: new Date(),
            estado: 'ACT',
            siniestroid
        }, {
            fields: ['fecha',
                'fechasiniestro',
                'comentario',
                'usuarioregistro',
                'usuariomodificacion',
                'fecharegistro',
                'fechamodificacion',
                'estado',
                'siniestroid',]
        });
        if (newSiniestroSeguimiento) {
            return res.json({
                message: 'SiniestroSeguimiento created successfully',
                data: newSiniestroSeguimiento
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function updateSiniestroSeguimiento(req, res) {
    const { id } = req.params;
    const { fecha,
        comentario,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        fechamodificacion,
        estado,
        siniestroid } = req.body;
    try {
        const updateRowCount = await SiniestroSeguimiento.update({
            fecha,
            comentario,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion: new Date(),
            estado,
            siniestroid
        }, {
            where: {
                id
            }
        });

        const siniestros = await SiniestroSeguimiento.findOne({
            where: {
                id
            }
        }
        );
        res.json({
            message: 'SiniestroSeguimiento update successfully',
            count: siniestros
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getOneSiniestroSeguimiento(req, res) {
    try {
        const { id } = req.params;
        const usuario = await SiniestroSeguimiento.findOne({
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

export async function deleteSiniestroSeguimiento(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await SiniestroSeguimiento.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'SiniestroSeguimiento deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function bajaSiniestroSeguimiento(req, res) {
    const { id } = req.params;

    console.log("bajaSiniestroSeguimiento");
    const {
        //    id,
        usuariomodificacion
    } = req.body;
    try {
        // var moment = require('moment');
        const updateRowCount = await SiniestroSeguimiento.update({
            usuariomodificacion,
            /*  fechamodificacion:moment().format(), */
            fechamodificacion: new Date(),
            estado: 'BAJ'
        }, {
            where: {
                id
            }
        });

        const siniestros = await SiniestroSeguimiento.findOne({
            where: {
                id
            }
        }
        );

        res.json({
            message: 'SiniestroSeguimiento baja successfully',
            count: siniestros
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getSiniestroSeguimientoPorSucursal(req, res) {
    const { sucursalid } = req.params;
    try {

        const siniestros = await sequelize.query(`select ss.* ,p.nropoliza,p.valorasegurado,c.nombre contratante 
             ,sr.nombre nombresubramo,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal 
            from siniestro ss 
            inner join poliza p on p.id = ss.polizaid 
            inner join sucursal s on s.id=p.sucursalid  
            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid 
            inner join sub_ramo sr on sr.id=rc.subramoid 
            inner join ramo r on r.id=rc.ramoid 
            left join ramo rp on r.ramoid=rp.id 
            inner join asegurado a on a.id=p.tomadorid 
            inner join contratante c on c.id=p.contratanteid 
            inner join compania_seguro cs on cs.id=p.companiaseguroid 
            inner join memo m on m.polizaid=p.id --and m.estado='ACT' 
            where  s.id= '` + sucursalid + `'  and ss.estado IN ('ACT') order by ss.fechamodificacion desc `
            , {
                type: QueryTypes.SELECT
            });
        //console.log(JSON.stringify(usuarios[0], null, 2));

        res.json({ siniestros });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}
