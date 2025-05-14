import { sequelize } from "../database/database";
const { QueryTypes, Promise } = require('sequelize');
import Pagos from "../models/Pagos";
import CobranzaMotivo from "../models/CobranzaMotivo";

export async function getPagoss(req, res) {
    try {
        const pagoss = await Pagos.findAll({ where: { estado: 'ACT' } });
        res.json({
            data: pagoss
        });
    } catch (e) {
        console.log(e);
    }
}

export async function createPagos(req, res) {
    const {
        monto,
        /*  montousd,
         comisionbs,
         comisionusd, */
        tipo,
        planpagoid,
        numerofactura,
        sucursalid,
        usuarioregistro,
        usuariomodificacion,
        estado } = req.body;
    try {
        //const transaction= sequelize.transaction;
        let newPagos = await Pagos.create({
            montobs: monto,
            montousd: 0,
            comisionbs: 0,
            comisionusd: 0,
            tipo,
            numerofactura,
            planpagoid,
            sucursalid,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro: new Date(),
            fechamodificacion: new Date(),
            estado
        }, {
            fields: ['montobs',
                'montousd',
                'comisionbs',
                'comisionusd',
                'tipo',
                'numerofactura',
                'planpagoid',
                'sucursalid',
                'usuarioregistro',
                'usuariomodificacion',
                'fecharegistro',
                'fechamodificacion',
                'estado']
        });
        if (newPagos) {
            return res.json({
                message: 'Pagos created successfully',
                data: newPagos
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function crearPagos(req, res) {
    const {
        pagos } = req.body;
    let t;
    const listaPagos = []
    try {
        //const transaction= sequelize.transaction;
        let newPagos
        t = await sequelize.transaction();
        for (let i = 0; i < pagos.length; i++) {
            if (pagos[i].monto > 0) {
                newPagos = await Pagos.create({
                    //titular: pagos[i].titular,
                    montobs: pagos[i].monto,
                    montousd: pagos[i].monto,
                    comisionbs: 0,
                    comisionusd: 0,
                    planpagoid: pagos[i].planpagoid,
                    sucursalid: pagos[i].sucursalid,
                    usuarioregistro: pagos[i].usuarioregistro,
                    fecharegistro: new Date(),
                    fechamodificacion: new Date(),
                    estado: 'ACT',
                    tipo: pagos[i].tipo
                }, {
                    fields: ['montobs',
                        'montousd',
                        'comisionbs',
                        'comisionusd',
                        'planpagoid',
                        'sucursalid',
                        'usuarioregistro',
                        'fecharegistro',
                        'fechamodificacion',
                        'estado',
                        'tipo'
                    ]
                }, { transaction: t });

                listaPagos.push(newPagos);
            }

        }
        for (let i = 0; i < pagos.length; i++) {
            if (pagos[i].notallamada) {
                let newCobranzaMotivo = await CobranzaMotivo.create({
                    nombre: pagos[i].notallamada,
                    descripcion: pagos[i].notallamada,
                    usuarioregistro: pagos[i].usuarioregistro,
                    fecharegistro: new Date(),
                    fechamodificacion: new Date(),
                    estado: 'ACT',
                    planpagoid: pagos[i].planpagoid
                }, {
                    fields: ['nombre', 'descripcion', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                        'fechamodificacion', 'estado', 'planpagoid']
                }, { transaction: t });
            }

        }
        await t.commit();
        if (listaPagos) {
            return res.json({
                message: 'Pagos created successfully',
                data: listaPagos
            });
        }
    } catch (e) {
        console.log(e);
        if (t) {
            await t.rollback();

        }
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}
export async function updatePagos(req, res) {
    const { id } = req.params;
    const {
        montobs,
        montousd,
        comisionbs,
        comisionusd,
        planpagoid,
        sucursalid,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        estado } = req.body;
    try {
        const updateRowCount = await Pagos.update({
            montobs,
            montousd,
            comisionbs,
            comisionusd,
            planpagoid,
            sucursalid,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion: new Date(),
            estado
        }, {
            where: {
                id
            }
        });

        const pagoss = await Pagos.findOne({
            where: {
                id
            }
        }
        );
        res.json({
            message: 'Pagos update successfully',
            count: pagoss
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}
export async function getOnePagos(req, res) {
    try {
        const { id } = req.params;
        const pagos = await Pagos.findOne({
            where: {
                id
            }
        });
        res.json({
            data: pagos
        });
    } catch (e) {
        console.log(e);
    }
}

export async function deletePagos(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await Pagos.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Pagos deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}




export async function bajaPagos(req, res) {
    const { id } = req.params;

    console.log("bajaPagos");
    const {
        //    id,
        usuariomodificacion
    } = req.body;
    try {
        // var moment = require('moment');
        const updateRowCount = await Pagos.update({
            usuariomodificacion,
            /*  fechamodificacion:moment().format(), */
            fechamodificacion: new Date(),
            estado: 'BAJ'
        }, {
            where: {
                id
            }
        });

        const pagoss = await Pagos.findOne({
            where: {
                id
            }
        }
        );

        res.json({
            message: 'Pagos baja successfully',
            count: pagoss
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getPagosGeneralesPorSucursal(req, res) {
    const { sucursalid } = req.params;
    try {

        const pagos = await sequelize.query(`select pp.*,p.nropoliza, case when a.tipoasegurado='individual' then a.ci else a.nit end cinit,a.nombrecompleto 
            ,case when to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER then 'Actuales' 
             when to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER then 'Pendientes' 
             when to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER then 'Mora' end Estado,(select  string_agg(to_char(fecharegistro, 'DD/MM/YYYY') || ' ' || descripcion, ', ' order by descripcion) 
            from cobranza_motivo 
            where estado='ACT' AND planpagoid=pp.id 
            group by planpagoid) as Motivos,case when p.tipoemision='Anexo Conclusión' then 'E' when p.tipoemision='Anexo Exclusión' then 'E' else 'I' end tipo,p.tipoemision,s.nombre as sucursal   from poliza p 
             inner join memo m on m.polizaid=p.id 
             inner join sucursal s on s.id=m.sucursalid 
             inner join plan_pago pp on pp.memoid=m.id 
            inner join asegurado a on a.id=p.tomadorid 
             where  p.sucursalid='` + sucursalid + `'  AND  P.estado in ('ACT','CER')  and m.estado='ACT'           
             and (pp.montocuota >(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id)) order by pp.fechapago asc`
            , {
                type: QueryTypes.SELECT
            });
        res.json({ pagos });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getPagosActualesPorSucursal(req, res) {
    const { sucursalid } = req.params;
    try {

        const pagos = await sequelize.query(`select pp.*,p.nropoliza, case when a.tipoasegurado='individual' then a.ci else a.nit end cinit,a.nombrecompleto 
            ,pp.montocuota-(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id) as saldo
            ,case when to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER then 'Actuales' 
             when to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER then 'Pendientes' 
             when to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER then 'Mora' end Estado,(select  string_agg(to_char(fecharegistro, 'DD/MM/YYYY') || ' ' || descripcion, ', ' order by descripcion) 
            from cobranza_motivo 
            where estado='ACT' AND planpagoid=pp.id 
            group by planpagoid) as Motivos,case when p.tipoemision='Anexo Conclusión' then 'E' when p.tipoemision='Anexo Exclusión' then 'E' else 'I' end tipo,p.tipoemision,s.nombre sucursal  from poliza p 
             inner join memo m on m.polizaid=p.id 
             inner join sucursal s on s.id=m.sucursalid 
             inner join plan_pago pp on pp.memoid=m.id 
            inner join asegurado a on a.id=p.tomadorid 
             where  p.sucursalid='` + sucursalid + `'  AND  P.estado in ('ACT','CER')  and m.estado='ACT'
             and to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER 
             and (pp.montocuota >(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id)) order by pp.fechapago asc`
            , {
                type: QueryTypes.SELECT
            });
        res.json({ pagos });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getPagosPendientesPorSucursal(req, res) {
    const { sucursalid } = req.params;
    try {

        const pagos = await sequelize.query(`select pp.*,p.nropoliza, case when a.tipoasegurado='individual' then a.ci else a.nit end cinit,a.nombrecompleto 
            ,pp.montocuota-(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id) as saldo
            ,case when to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER then 'Actuales' 
             when to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER then 'Pendientes' 
             when to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER then 'Mora' end Estado,(select  string_agg(to_char(fecharegistro, 'DD/MM/YYYY') || ' ' || descripcion, ', ' order by descripcion) 
            from cobranza_motivo 
            where estado='ACT' AND planpagoid=pp.id 
            group by planpagoid) as Motivos,case when p.tipoemision='Anexo Conclusión' then 'E' when p.tipoemision='Anexo Exclusión' then 'E' else 'I' end tipo,p.tipoemision,s.nombre as sucursal  from poliza p 
             inner join memo m on m.polizaid=p.id 
             inner join sucursal s on s.id=m.sucursalid 
             inner join plan_pago pp on pp.memoid=m.id 
            inner join asegurado a on a.id=p.tomadorid 
             where  P.estado in ('ACT','CER')  and p.sucursalid='` + sucursalid + `'   and m.estado='ACT'
             and to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER 
             and (pp.montocuota >(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id)) order by pp.fechapago asc`
            , {
                type: QueryTypes.SELECT
            });
        res.json({ pagos });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getPagosMoraPorSucursal(req, res) {
    const { sucursalid } = req.params;
    try {

        const pagos = await sequelize.query(`select pp.*,p.nropoliza, case when a.tipoasegurado='individual' then a.ci else a.nit end cinit,a.nombrecompleto 
            ,pp.montocuota-(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id) as saldo
            ,case when to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER then 'Actuales' 
             when to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER then 'Pendientes' 
             when to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER then 'Mora' end Estado,s.nombre as sucursal from poliza p 
             inner join memo m on m.polizaid=p.id 
             inner join sucursal s on s.id=m.sucursalid 
             inner join plan_pago pp on pp.memoid=m.id 
            inner join asegurado a on a.id=p.tomadorid 
             where  p.sucursalid='` + sucursalid + `'  AND  P.estado in ('ACT','CER')  and m.estado='ACT'
             and to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER 
             and (pp.montocuota >(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id)) order by pp.fechapago asc`
            , {
                type: QueryTypes.SELECT
            });
        res.json({ pagos });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}


export async function getPagosActualesPorEmpresa(req, res) {
    const { empresaid } = req.params;
    try {

        /* const pagos = await sequelize.query(`select pp.*,p.nropoliza, case when a.tipoasegurado='individual' then a.ci else a.nit end cinit,a.nombrecompleto 
            ,pp.montocuota-(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id) as saldo
            ,case when to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER then 'Actuales' 
             when to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER then 'Pendientes' 
             when to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER then 'Mora' end Estado,(select  string_agg(to_char(fecharegistro, 'DD/MM/YYYY') || ' ' || descripcion, ', ' order by descripcion) 
            from cobranza_motivo 
            where estado='ACT' AND planpagoid=pp.id 
            group by planpagoid) as Motivos,case when p.tipoemision='Anexo Conclusión' then 'E' when p.tipoemision='Anexo Exclusión' then 'E' else 'I' end tipo,p.tipoemision,s.nombre as sucursal 
              from poliza p 
             inner join memo m on m.polizaid=p.id 
             inner join plan_pago pp on pp.memoid=m.id 
             inner join sucursal s on s.id= p.sucursalid 
             inner join empresa e on e.id= s.empresaid 
            inner join asegurado a on a.id=p.tomadorid 
             where  e.id='` + empresaid + `'  AND  P.estado in ('ACT','CER')  and m.estado='ACT'
             and to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER 
             and (pp.montocuota >(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id)) order by pp.fechapago asc`
            , {
                type: QueryTypes.SELECT
            }); */
        const pagos = await sequelize.query(`SELECT pp.*,
       p.nropoliza,
       CASE WHEN a.tipoasegurado = 'individual' THEN a.ci ELSE a.nit END AS cinit,
       a.nombrecompleto,
       pp.montocuota - COALESCE(pagos.saldo, 0) AS saldo,
       CASE 
           WHEN DATE_TRUNC('month', pp.fechapago) = DATE_TRUNC('month', CURRENT_DATE) THEN 'Actuales'
           WHEN pp.fechapago > CURRENT_DATE THEN 'Pendientes'
           ELSE 'Mora'
       END AS Estado,
       motivos.motivos,
       CASE 
           WHEN p.tipoemision IN ('Anexo Conclusión', 'Anexo Exclusión') THEN 'E' 
           ELSE 'I' 
       END AS tipo,
       p.tipoemision,
       s.nombre AS sucursal
FROM poliza p
INNER JOIN memo m ON m.polizaid = p.id
INNER JOIN plan_pago pp ON pp.memoid = m.id
INNER JOIN sucursal s ON s.id = p.sucursalid
INNER JOIN empresa e ON e.id = s.empresaid
INNER JOIN asegurado a ON a.id = p.tomadorid
LEFT JOIN (
    SELECT pa.planpagoid, COALESCE(SUM(pa.montousd), 0) AS saldo
    FROM pagos pa
    WHERE pa.estado = 'ACT'
    GROUP BY pa.planpagoid
) pagos ON pagos.planpagoid = pp.id
LEFT JOIN LATERAL (
    SELECT string_agg(to_char(fecharegistro, 'DD/MM/YYYY') || ' ' || descripcion, ', ' ORDER BY descripcion) AS motivos
    FROM cobranza_motivo
    WHERE estado = 'ACT' AND planpagoid = pp.id
) motivos ON true
WHERE e.id = '` + empresaid + `'
  AND p.estado IN ('ACT', 'CER')
  AND m.estado = 'ACT'
  AND DATE_TRUNC('month', pp.fechapago) = DATE_TRUNC('month', CURRENT_DATE)
  AND pp.montocuota > COALESCE(pagos.saldo, 0)
ORDER BY pp.fechapago ASC;
`
            , {
                type: QueryTypes.SELECT
            });
        res.json({ pagos });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getPagosPendientesPorEmpresa(req, res) {
    const { empresaid } = req.params;
    const body = JSON.stringify(req.params);
    console.log(body)
    try {

        /*     const pagos = await sequelize.query(`select pp.*,p.nropoliza, case when a.tipoasegurado='individual' then a.ci else a.nit end cinit,a.nombrecompleto 
                ,pp.montocuota-(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id) as saldo
                ,case when to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER then 'Actuales' 
                 when to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER then 'Pendientes' 
                 when to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER then 'Mora' end Estado,(select  string_agg(to_char(fecharegistro, 'DD/MM/YYYY') || ' ' || descripcion, ', ' order by descripcion) 
                from cobranza_motivo 
                where estado='ACT' AND planpagoid=pp.id 
                group by planpagoid) as Motivos,case when p.tipoemision='Anexo Conclusión' then 'E' when p.tipoemision='Anexo Exclusión' then 'E' else 'I' end tipo,p.tipoemision,s.nombre as sucursal  from poliza p 
                 inner join memo m on m.polizaid=p.id 
                 inner join plan_pago pp on pp.memoid=m.id 
                 inner join sucursal s on s.id= p.sucursalid 
                 inner join empresa e on e.id= s.empresaid 
                inner join asegurado a on a.id=p.tomadorid 
                 where  e.id='` + empresaid + `'  AND  P.estado in ('ACT','CER')  and m.estado='ACT'
                 and to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER 
                 and (pp.montocuota >(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id)) order by pp.fechapago asc`
                , {
                    type: QueryTypes.SELECT
                }); */

        const rawResult = await sequelize.query(`select * from  fn_obtener_planes_pago_pendientes('` + body + `');  `
            , {
                type: QueryTypes.SELECT
            });
        const pagos = rawResult[0].fn_obtener_planes_pago_pendientes;
        res.json({ pagos });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getPagosMoraPorEmpresa(req, res) {
    const { empresaid } = req.params;
    const body = JSON.stringify(req.params);
    try {

        /*    const pagos = await sequelize.query(`select pp.*,p.nropoliza, case when a.tipoasegurado='individual' then a.ci else a.nit end cinit,a.nombrecompleto 
               ,pp.montocuota-(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id) as saldo
                ,case when to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER then 'Actuales' 
                when to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER then 'Pendientes' 
                when to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER then 'Mora' end Estado,(select  string_agg(to_char(fecharegistro, 'DD/MM/YYYY') || ' ' || descripcion, ', ' order by descripcion) 
               from cobranza_motivo 
               where estado='ACT' AND planpagoid=pp.id 
               group by planpagoid) as Motivos,case when p.tipoemision='Anexo Conclusión' then 'E' when p.tipoemision='Anexo Exclusión' then 'E' else 'I' end tipo,p.tipoemision,s.nombre as sucursal  from poliza p 
                inner join memo m on m.polizaid=p.id 
                inner join plan_pago pp on pp.memoid=m.id 
                inner join sucursal s on s.id= p.sucursalid 
                inner join empresa e on e.id= s.empresaid 
               inner join asegurado a on a.id=p.tomadorid 
                where  e.id='` + empresaid + `'  AND  P.estado in ('ACT','CER')  and m.estado='ACT'
                and to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER 
                and (pp.montocuota >(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id)) order by pp.fechapago asc`
               , {
                   type: QueryTypes.SELECT
               }); */

        const rawResult = await sequelize.query(`select * from  fn_obtener_planes_pago_mora('` + body + `');  `
            , {
                type: QueryTypes.SELECT
            });
        const pagos = rawResult[0].fn_obtener_planes_pago_mora;
        res.json({ pagos });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}





/* export async function getPagosPorSucursalyCi(req, res) {
    const { sucursalid, cinit } = req.params;
    try {

        const pagos = await sequelize.query(`select  pp.id ,pp.nro,pp.fechapago fechacuota,pp.montocuota,pp.primaneta,pp.comision,pp.memoid,pp.usuarioregistro,pp.usuariomodificacion,
        p.nropoliza,a.nombrecompleto,p.tipomoneda,pp.montocuota-(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id) as saldo,case when to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER then 'Actuales'
        when to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER then 'Pendientes'
        when to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER then 'Mora' end Estado,(select  string_agg(to_char(fecharegistro, 'DD/MM/YYYY') || ' ' || descripcion, ', ' order by descripcion)
        from cobranza_motivo
        where estado='ACT' AND planpagoid=pp.id
        group by planpagoid) as Motivos,case when p.tipoemision='Anexo Conclusión' then 'E' when p.tipoemision='Anexo Exclusión' then 'E' else 'I' end tipo,p.tipoemision,s.nombre as sucursal from poliza p
        inner join memo m on m.polizaid=p.id
        inner join sucursal s on s.id=m.sucursalid
        inner join plan_pago pp on pp.memoid=m.id
        inner join asegurado a on a.id=p.tomadorid
        where p.sucursalid='` + sucursalid + `'  AND  P.estado in ('ACT','CER')  and m.estado='ACT'
        and (pp.montocuota >(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id))
        and  case when a.tipoasegurado='corporativo' then a.nit ='` + cinit + `' else a.ci ='` + cinit + `' end 
        order by pp.fechapago asc`
            , {
                type: QueryTypes.SELECT
            });
        res.json({ pagos });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}
 */

export async function getPagosPorSucursalyCi(req, res) {
    const { sucursalid, cinit } = req.params;

    try {
        const pagos = await sequelize.query(`
            WITH pagos_sum AS (
                SELECT planpagoid, SUM(montousd) AS totalpagado
                FROM pagos
                WHERE estado = 'ACT'
                GROUP BY planpagoid
            ),
            motivos_agg AS (
                SELECT planpagoid, string_agg(
                    TO_CHAR(fecharegistro, 'DD/MM/YYYY') || ' ' || descripcion,
                    ', ' ORDER BY descripcion
                ) AS motivos
                FROM cobranza_motivo
                WHERE estado = 'ACT'
                GROUP BY planpagoid
            )
            SELECT 
                pp.id,
                pp.nro,
                pp.fechapago AS fechacuota,
                pp.montocuota,
                pp.primaneta,
                pp.comision,
                pp.memoid,
                pp.usuarioregistro,
                pp.usuariomodificacion,
                p.nropoliza,
                a.nombrecompleto,
                p.tipomoneda,
                COALESCE(pp.montocuota - ps.totalpagado, pp.montocuota) AS saldo,
                CASE 
                    WHEN date_trunc('month', pp.fechapago) = date_trunc('month', CURRENT_DATE) THEN 'Actuales'
                    WHEN date_trunc('month', pp.fechapago) > date_trunc('month', CURRENT_DATE) THEN 'Pendientes'
                    ELSE 'Mora'
                END AS estado,
                mo.motivos AS motivos,
                CASE 
                    WHEN p.tipoemision IN ('Anexo Conclusión', 'Anexo Exclusión') THEN 'E'
                    ELSE 'I'
                END AS tipo,
                p.tipoemision,
                s.nombre AS sucursal
            FROM plan_pago pp
            JOIN memo m ON pp.memoid = m.id
            JOIN poliza p ON m.polizaid = p.id
            JOIN sucursal s ON s.id = m.sucursalid
            JOIN asegurado a ON a.id = p.tomadorid
            LEFT JOIN pagos_sum ps ON ps.planpagoid = pp.id
            LEFT JOIN motivos_agg mo ON mo.planpagoid = pp.id
            WHERE p.sucursalid = :sucursalid
                AND p.estado IN ('ACT', 'CER')
                AND m.estado = 'ACT'
                AND (pp.montocuota > COALESCE(ps.totalpagado, 0))
                AND (
                    (a.tipoasegurado = 'corporativo' AND a.nit = :cinit)
                    OR (a.tipoasegurado <> 'corporativo' AND a.ci = :cinit)
                )
            ORDER BY pp.fechapago ASC;
        `, {
            replacements: { sucursalid, cinit },
            type: QueryTypes.SELECT
        });

        res.json({ pagos });

    } catch (e) {
        console.error(e);
        res.status(500).json({
            data: { estado: false, error: e.message }
        });
    }
}
export async function getPagosPorEmpresayCi(req, res) {
    const { empresaid, cinit } = req.params;
    try {
        /*     let query = `select  pp.id,pp.nro,pp.fechapago fechacuota,pp.montocuota,pp.primaneta,pp.comision,pp.memoid,pp.usuarioregistro,pp.usuariomodificacion,
             p.nropoliza,a.nombrecompleto,p.tipomoneda,pp.montocuota-(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id) as saldo,case when to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER then 'Actuales' 
            when to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER then 'Pendientes' 
            when to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER then 'Mora' end Estado,(select  string_agg(to_char(fecharegistro, 'DD/MM/YYYY') || ' ' || descripcion, ', ' order by descripcion) 
            from cobranza_motivo 
            where estado='ACT' AND planpagoid=pp.id 
            group by planpagoid) as Motivos,case when p.tipoemision='Anexo Conclusion' then 'E' when p.tipoemision='Anexo Exclusion' then 'E' else 'I' end tipo,p.tipoemision,s.nombre as sucursal from poliza p 
            inner join memo m on m.polizaid=p.id 
            inner join plan_pago pp on pp.memoid=m.id 
            inner join asegurado a on a.id=p.tomadorid 
             inner join sucursal s on s.id= p.sucursalid 
             inner join empresa e on e.id= s.empresaid 
            where e.id='` + empresaid + `' AND  P.estado in ('ACT','CER')  and m.estado='ACT'
             and  case when a.tipoasegurado='corporativo' then a.nit ='` + cinit + `' else a.ci ='` + cinit + `' end 
            and (pp.montocuota >(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id)) 
             order by pp.fechapago  asc,p.nropoliza asc`; */

        let query = `WITH saldo_cte AS (
    SELECT 
        pa.planpagoid, 
        COALESCE(SUM(pa.montousd), 0) AS saldo_pagado
    FROM pagos pa
    WHERE pa.estado = 'ACT'
    GROUP BY pa.planpagoid
),
motivos_cte AS (
    SELECT 
        planpagoid, 
        string_agg(to_char(fecharegistro, 'DD/MM/YYYY') || ' ' || descripcion, ', ' ORDER BY descripcion) AS Motivos
    FROM cobranza_motivo
    WHERE estado = 'ACT'
    GROUP BY planpagoid
)
SELECT  
    pp.id,
    pp.nro,
    pp.fechapago AS fechacuota,
    pp.montocuota,
    pp.primaneta,
    pp.comision,
    pp.memoid,
    pp.usuarioregistro,
    pp.usuariomodificacion,
    p.nropoliza,
    a.nombrecompleto,
    p.tipomoneda,
    pp.montocuota - COALESCE(saldo_cte.saldo_pagado, 0) AS saldo,
    CASE 
        WHEN EXTRACT(YEAR FROM pp.fechapago) = EXTRACT(YEAR FROM NOW()) 
             AND EXTRACT(MONTH FROM pp.fechapago) = EXTRACT(MONTH FROM NOW()) THEN 'Actuales'
        WHEN pp.fechapago > NOW() THEN 'Pendientes'
        ELSE 'Mora'
    END AS Estado,
    motivos_cte.Motivos,
    CASE 
        WHEN p.tipoemision IN ('Anexo Conclusion', 'Anexo Exclusion') THEN 'E' 
        ELSE 'I' 
    END AS tipo,
    p.tipoemision,
    s.nombre AS sucursal
FROM poliza p
INNER JOIN memo m ON m.polizaid = p.id
INNER JOIN plan_pago pp ON pp.memoid = m.id
INNER JOIN asegurado a ON a.id = p.tomadorid
INNER JOIN sucursal s ON s.id = p.sucursalid
INNER JOIN empresa e ON e.id = s.empresaid
LEFT JOIN saldo_cte ON saldo_cte.planpagoid = pp.id
LEFT JOIN motivos_cte ON motivos_cte.planpagoid = pp.id
WHERE 
    e.id = '` + empresaid + `'
    AND p.estado IN ('ACT', 'CER')
    AND m.estado = 'ACT'
    AND (
        (a.tipoasegurado = 'corporativo' AND a.nit = '` + cinit + `') 
        OR (a.tipoasegurado <> 'corporativo' AND a.ci = '` + cinit + `')
    )
    AND pp.montocuota > COALESCE(saldo_cte.saldo_pagado, 0)
ORDER BY 
    pp.fechapago ASC,
    p.nropoliza ASC;`;

        const pagos = await sequelize.query(query
            , {
                type: QueryTypes.SELECT
            });
        res.json({ pagos });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}


export async function getPagosPorSucursal(req, res) {
    const { sucursalid } = req.params;
    const { fechainicio, fechafin } = req.body;
    console.log(sucursalid);
    try {
        const query = `SELECT pa.montobs,pa.montousd,pa.fecharegistro,pa.fechamodificacion,p.nropoliza, case when a.tipoasegurado='individual' then a.ci else a.nit end cinit,a.nombrecompleto ,case when pa.tipo='I' then 'Ingreso'  else 'Egreso' end tipo,p.tipoemision,s.nombre as sucursal
        from pagos pa
        inner join plan_pago pp on pp.id=pa.planpagoid
        inner join memo m on m.id=pp.memoid
        inner join poliza p on p.id=m.polizaid
        inner join sucursal s on s.id=m.sucursalid
        inner join asegurado a on a.id=p.tomadorid
        where pa.estado='ACT'  and m.estado='ACT' and pa.montousd>0 and to_char(pa.fecharegistro, 'YYYYMMDD')::integer>=  `+ fechainicio + `  and to_char(pa.fecharegistro, 'YYYYMMDD'):: integer <= ` + fechafin + `  and s.id='` + sucursalid + `'  order by pa.fechamodificacion asc`;
        console.log(query);
        const pagos = await sequelize.query(query
            , {
                type: QueryTypes.SELECT
            });
        res.json({ pagos });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getPagosPorEmpresa(req, res) {
    const { empresaid } = req.params;
    const { fechainicio, fechafin } = req.body;
    try {
        const query = `SELECT pa.montobs,pa.montousd,pa.fecharegistro,pa.fechamodificacion,p.nropoliza, case when a.tipoasegurado='individual' then a.ci else a.nit end cinit,a.nombrecompleto ,case when pa.tipo='I' then 'Ingreso'  else 'Egreso' end tipo,p.tipoemision,s.nombre as sucursal
        from pagos pa
        inner join plan_pago pp on pp.id=pa.planpagoid
        inner join memo m on m.id=pp.memoid
        inner join poliza p on p.id=m.polizaid
        inner join sucursal s on s.id=m.sucursalid
        inner join asegurado a on a.id=p.tomadorid
        where pa.estado='ACT'  and m.estado='ACT' and pa.montousd>0 and to_char(pa.fecharegistro, 'YYYYMMDD')::integer>=  `+ fechainicio + `  and to_char(pa.fecharegistro, 'YYYYMMDD'):: integer <= ` + fechafin + `  and s.empresaid='` + empresaid + `'  order by pa.fechamodificacion asc`;
        //console.log(query);
        const pagos = await sequelize.query(query
            , {
                type: QueryTypes.SELECT
            });
        res.json({ pagos });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

/**MONTOS TOTALES PARA DASHBOARD  POR EMPRESA*/
export async function getTotalPagosPorEmpresa(req, res) {
    const { empresaid } = req.params;
    try {
        let query = `select  COUNT(*) cantidad,coalesce(SUM(p.montobs),0) montobs from pagos p
        inner join plan_pago pp on pp.id=p.planpagoid
        inner join memo m on m.id=pp.memoid
        inner join sucursal s on s.id =p.sucursalid
        inner join empresa e on e.id =s.empresaid
        where to_char(p.fecharegistro, 'YYYY-MM')= to_char(now(), 'YYYY-MM') and p.estado ='ACT'  and m.estado='ACT' and e.id ='` + empresaid + `'`;

        const pagos = await sequelize.query(query
            , {
                type: QueryTypes.SELECT
            });
        res.json({
            data: pagos
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

/** MONTOS TOTALES PARA DASHBOARD  POR SUCURSAL*/
export async function getTotalPagosPorSucursal(req, res) {
    const { sucursalid } = req.params;
    try {
        let query = `select  COUNT(*) cantidad,coalesce(SUM(p.montobs),0)montobs from pagos p
        inner join plan_pago pp on pp.id=p.planpagoid
        inner join memo m on m.id=pp.memoid
        where to_char(p.fecharegistro, 'YYYY-MM')= to_char(now(), 'YYYY-MM') and p.estado ='ACT' and m.estado='ACT' and p.sucursalid ='` + sucursalid + `'`;

        const pagos = await sequelize.query(query
            , {
                type: QueryTypes.SELECT
            });
        res.json({
            data: pagos
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}
