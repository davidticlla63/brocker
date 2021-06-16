import { sequelize } from "../database/database";
const { QueryTypes, Promise } = require('sequelize');
import Pagos from "../models/Pagos";

export async function getPagoss(req, res) {
    try {
        const pagoss = await Pagos.findAll({ where: { estado: 'ACT' }});
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
        sucursalid,
        usuarioregistro,
        usuariomodificacion,
        estado } = req.body;
    try {
        //const transaction= sequelize.transaction;
        let newPagos = await Pagos.create({
            montobs:monto,
            montousd:0,
            comisionbs:0,
            comisionusd:0,
            tipo,
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
    try {
        //const transaction= sequelize.transaction;
        let newPagos
        t = await sequelize.transaction();
        for (let i = 0; i < pagos.length; i++) {
            newPagos = await Pagos.create({
                //titular: pagos[i].titular,

                montobs:pagos[i].monto,
                montousd: pagos[i].monto,
                comisionbs: 0,
                comisionusd: 0,
                planpagoid: pagos[i].planpagoid,
                sucursalid: pagos[i].sucursalid,
                usuarioregistro:pagos[i].usuarioregistro,
                fecharegistro: new Date(),
                fechamodificacion: new Date(),
                estado: 'ACT',
                tipo:pagos[i].tipo
            }, {
                fields:  ['montobs',
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
        }
        await t.commit();
        if (newPagos) {
            return res.json({
                message: 'Pagos created successfully',
                data: newPagos
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
        fechamodificacion= new Date(),
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
            fechamodificacion,
            estado
        },{
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
           fechamodificacion:new Date(),
            estado:'BAJ'
        },{
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
    const {  sucursalid } = req.params;
    try {

        const pagos = await sequelize.query("select pp.*,p.nropoliza, case when a.tipoasegurado='individual' then a.ci else a.nit end cinit,a.nombrecompleto "+
        ",case when to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER then 'Actuales' "+
        " when to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER then 'Pendientes' "+
        " when to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER then 'Mora' end Estado,(select  string_agg(to_char(fecharegistro, 'DD/MM/YYYY') || ' ' || descripcion, ', ' order by descripcion) "+
        "from cobranza_motivo "+
        "where estado='ACT' AND planpagoid=pp.id "+
         "group by planpagoid) as Motivos,case when p.tipoemision='Anexo Conclusión' then 'E' when p.tipoemision='Anexo Exclusión' then 'E' else 'I' end tipo,p.tipoemision  from poliza p "+
        " inner join memo m on m.polizaid=p.id "+
        " inner join plan_pago pp on pp.memoid=m.id "+
        "inner join asegurado a on a.id=p.tomadorid "+
        " where p.estado='ACT' and p.sucursalid='"+sucursalid+"'  AND  P.estado in ('ACT','CER') "+
        " --and to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER "+
        " and (pp.montocuota >(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id)) order by pp.fechapago asc"
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
    const {  sucursalid } = req.params;
    try {

        const pagos = await sequelize.query("select pp.*,p.nropoliza, case when a.tipoasegurado='individual' then a.ci else a.nit end cinit,a.nombrecompleto "+
        ",pp.montocuota-(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id) as saldo"+
        ",case when to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER then 'Actuales' "+
        " when to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER then 'Pendientes' "+
        " when to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER then 'Mora' end Estado,(select  string_agg(to_char(fecharegistro, 'DD/MM/YYYY') || ' ' || descripcion, ', ' order by descripcion) "+
        "from cobranza_motivo "+
        "where estado='ACT' AND planpagoid=pp.id "+
         "group by planpagoid) as Motivos,case when p.tipoemision='Anexo Conclusión' then 'E' when p.tipoemision='Anexo Exclusión' then 'E' else 'I' end tipo,p.tipoemision  from poliza p "+
        " inner join memo m on m.polizaid=p.id "+
        " inner join plan_pago pp on pp.memoid=m.id "+
        "inner join asegurado a on a.id=p.tomadorid "+
        " where p.estado='ACT' and p.sucursalid='"+sucursalid+"'  AND  P.estado in ('ACT','CER') "+
        " and to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER "+
        " and (pp.montocuota >(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id)) order by pp.fechapago asc"
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
    const {  sucursalid } = req.params;
    try {

        const pagos = await sequelize.query("select pp.*,p.nropoliza, case when a.tipoasegurado='individual' then a.ci else a.nit end cinit,a.nombrecompleto "+
        ",pp.montocuota-(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id) as saldo"+
        ",case when to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER then 'Actuales' "+
        " when to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER then 'Pendientes' "+
        " when to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER then 'Mora' end Estado,(select  string_agg(to_char(fecharegistro, 'DD/MM/YYYY') || ' ' || descripcion, ', ' order by descripcion) "+
        "from cobranza_motivo "+
        "where estado='ACT' AND planpagoid=pp.id "+
         "group by planpagoid) as Motivos,case when p.tipoemision='Anexo Conclusión' then 'E' when p.tipoemision='Anexo Exclusión' then 'E' else 'I' end tipo,p.tipoemision  from poliza p "+
        " inner join memo m on m.polizaid=p.id "+
        " inner join plan_pago pp on pp.memoid=m.id "+
        "inner join asegurado a on a.id=p.tomadorid "+
        " where p.estado='ACT' and p.sucursalid='"+sucursalid+"' "+
        " and to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER "+
        " and (pp.montocuota >(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id)) order by pp.fechapago asc"
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
    const {  sucursalid } = req.params;
    try {

        const pagos = await sequelize.query("select pp.*,p.nropoliza, case when a.tipoasegurado='individual' then a.ci else a.nit end cinit,a.nombrecompleto "+
        ",pp.montocuota-(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id) as saldo"+
        ",case when to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER then 'Actuales' "+
        " when to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER then 'Pendientes' "+
        " when to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER then 'Mora' end Estado from poliza p "+
        " inner join memo m on m.polizaid=p.id "+
        " inner join plan_pago pp on pp.memoid=m.id "+
        "inner join asegurado a on a.id=p.tomadorid "+
        " where p.estado='ACT' and p.sucursalid='"+sucursalid+"'  AND  P.estado in ('ACT','CER') "+
        " and to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER "+
        " and (pp.montocuota >(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id)) order by pp.fechapago asc"
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
    const {  empresaid } = req.params;
    try {

        const pagos = await sequelize.query("select pp.*,p.nropoliza, case when a.tipoasegurado='individual' then a.ci else a.nit end cinit,a.nombrecompleto "+
        ",pp.montocuota-(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id) as saldo"+
        ",case when to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER then 'Actuales' "+
        " when to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER then 'Pendientes' "+
        " when to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER then 'Mora' end Estado,(select  string_agg(to_char(fecharegistro, 'DD/MM/YYYY') || ' ' || descripcion, ', ' order by descripcion) "+
        "from cobranza_motivo "+
        "where estado='ACT' AND planpagoid=pp.id "+
         "group by planpagoid) as Motivos,case when p.tipoemision='Anexo Conclusión' then 'E' when p.tipoemision='Anexo Exclusión' then 'E' else 'I' end tipo,p.tipoemision  from poliza p "+
        " inner join memo m on m.polizaid=p.id "+
        " inner join plan_pago pp on pp.memoid=m.id "+
        " inner join sucursal s on s.id= p.sucursalid "+
        " inner join empresa e on e.id= s.empresaid "+
        "inner join asegurado a on a.id=p.tomadorid "+
        " where p.estado='ACT' and e.id='"+empresaid+"'  AND  P.estado in ('ACT','CER') "+
        " and to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER "+
        " and (pp.montocuota >(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id)) order by pp.fechapago asc"
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
    const {  empresaid } = req.params;
    try {

        const pagos = await sequelize.query("select pp.*,p.nropoliza, case when a.tipoasegurado='individual' then a.ci else a.nit end cinit,a.nombrecompleto "+
        ",pp.montocuota-(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id) as saldo"+
        ",case when to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER then 'Actuales' "+
        " when to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER then 'Pendientes' "+
        " when to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER then 'Mora' end Estado,(select  string_agg(to_char(fecharegistro, 'DD/MM/YYYY') || ' ' || descripcion, ', ' order by descripcion) "+
        "from cobranza_motivo "+
        "where estado='ACT' AND planpagoid=pp.id "+
         "group by planpagoid) as Motivos,case when p.tipoemision='Anexo Conclusión' then 'E' when p.tipoemision='Anexo Exclusión' then 'E' else 'I' end tipo,p.tipoemision  from poliza p "+
        " inner join memo m on m.polizaid=p.id "+
        " inner join plan_pago pp on pp.memoid=m.id "+
        " inner join sucursal s on s.id= p.sucursalid "+
        " inner join empresa e on e.id= s.empresaid "+
        "inner join asegurado a on a.id=p.tomadorid "+
        " where p.estado='ACT' and e.id='"+empresaid+"'  AND  P.estado in ('ACT','CER') "+
        " and to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER "+
        " and (pp.montocuota >(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id)) order by pp.fechapago asc"
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

export async function getPagosMoraPorEmpresa(req, res) {
    const {  empresaid } = req.params;
    try {

        const pagos = await sequelize.query("select pp.*,p.nropoliza, case when a.tipoasegurado='individual' then a.ci else a.nit end cinit,a.nombrecompleto "+
        ",pp.montocuota-(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id) as saldo"+
        " ,case when to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER then 'Actuales' "+
        " when to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER then 'Pendientes' "+
        " when to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER then 'Mora' end Estado,(select  string_agg(to_char(fecharegistro, 'DD/MM/YYYY') || ' ' || descripcion, ', ' order by descripcion) "+
        "from cobranza_motivo "+
        "where estado='ACT' AND planpagoid=pp.id "+
         "group by planpagoid) as Motivos,case when p.tipoemision='Anexo Conclusión' then 'E' when p.tipoemision='Anexo Exclusión' then 'E' else 'I' end tipo,p.tipoemision  from poliza p "+
        " inner join memo m on m.polizaid=p.id "+
        " inner join plan_pago pp on pp.memoid=m.id "+
        " inner join sucursal s on s.id= p.sucursalid "+
        " inner join empresa e on e.id= s.empresaid "+
        "inner join asegurado a on a.id=p.tomadorid "+
        " where p.estado='ACT' and e.id='"+empresaid+"'  AND  P.estado in ('ACT','CER') "+
        " and to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER "+
        " and (pp.montocuota >(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id)) order by pp.fechapago asc"
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


export async function getPagosPorSucursalyCi(req, res) {
    const {  sucursalid,cinit } = req.params;
    try {

        const pagos = await sequelize.query("select  pp.id ,pp.nro,pp.fechapago fechacuota,pp.montocuota,pp.primaneta,pp.comision,pp.memoid,pp.usuarioregistro,pp.usuariomodificacion," +
        " p.nropoliza,a.nombrecompleto,p.tipomoneda,pp.montocuota-(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id) as saldo,case when to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER then 'Actuales' "+
        "when to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER then 'Pendientes' "+
        "when to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER then 'Mora' end Estado,(select  string_agg(to_char(fecharegistro, 'DD/MM/YYYY') || ' ' || descripcion, ', ' order by descripcion) "+
        "from cobranza_motivo "+
        "where estado='ACT' AND planpagoid=pp.id "+
         "group by planpagoid) as Motivos,case when p.tipoemision='Anexo Conclusión' then 'E' when p.tipoemision='Anexo Exclusión' then 'E' else 'I' end tipo,p.tipoemision from poliza p "+
        "inner join memo m on m.polizaid=p.id "+
        "inner join plan_pago pp on pp.memoid=m.id "+
        "inner join asegurado a on a.id=p.tomadorid "+
        "where p.estado='ACT' and p.sucursalid='"+sucursalid+"'  AND  P.estado in ('ACT','CER') "+
       // "--and to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER "+
        "and (pp.montocuota >(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id)) "+
        " and  case when a.tipoasegurado='corporativo' then a.nit ='"+cinit+"' else a.ci ='"+cinit+"' end "+
       // " and (a.ci='"+cinit+"' or a.nit ='"+cinit+"' ) "+
       " order by pp.fechapago asc"
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

export async function getPagosPorEmpresayCi(req, res) {
    const {  empresaid,cinit } = req.params;
    try {
let query="select  pp.id,pp.nro,pp.fechapago fechacuota,pp.montocuota,pp.primaneta,pp.comision,pp.memoid,pp.usuarioregistro,pp.usuariomodificacion," +
" p.nropoliza,a.nombrecompleto,p.tipomoneda,pp.montocuota-(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id) as saldo,case when to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER then 'Actuales' "+
"when to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER then 'Pendientes' "+
"when to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER then 'Mora' end Estado,(select  string_agg(to_char(fecharegistro, 'DD/MM/YYYY') || ' ' || descripcion, ', ' order by descripcion) "+
"from cobranza_motivo "+
"where estado='ACT' AND planpagoid=pp.id "+
 "group by planpagoid) as Motivos,case when p.tipoemision='Anexo Conclusion' then 'E' when p.tipoemision='Anexo Exclusion' then 'E' else 'I' end tipo,p.tipoemision from poliza p "+
"inner join memo m on m.polizaid=p.id "+
"inner join plan_pago pp on pp.memoid=m.id "+
"inner join asegurado a on a.id=p.tomadorid "+
" inner join sucursal s on s.id= p.sucursalid "+
" inner join empresa e on e.id= s.empresaid "+
"where p.estado='ACT' and e.id='"+empresaid+"' AND  P.estado in ('ACT','CER') "+
//"--and to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER "+
" and  case when a.tipoasegurado='corporativo' then a.nit ='"+cinit+"' else a.ci ='"+cinit+"' end "+
"and (pp.montocuota >(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id)) "+

//" and (a.ci='"+cinit+"' or a.nit ='"+cinit+"' ) "+
" order by pp.fechapago asc";

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