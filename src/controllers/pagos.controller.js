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
        montobs,
        montousd,
        comisionbs,
        comisionusd,
        planpagoid,
        sucursalid,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro= new Date(),
        fechamodificacion= new Date(),
        estado } = req.body;
    try {
        //const transaction= sequelize.transaction;
        let newPagos = await Pagos.create({
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
        }, {
            fields: ['montobs',
            'montousd',
            'comisionbs',
            'comisionusd',
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

        const pagos = await sequelize.query("select pp.*,case when to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER then 'Actuales' "+
        " when to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER then 'Pendientes' "+
        " when to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER then 'Mora' end Estado from poliza p "+
        " inner join memo m on m.polizaid=p.id "+
        " inner join plan_pago pp on pp.memoid=m.id "+
        " where p.estado='ACT' and p.sucursalid='"+sucursalid+"' "+
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

        const pagos = await sequelize.query("select pp.*,case when to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER then 'Actuales' "+
        " when to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER then 'Pendientes' "+
        " when to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER then 'Mora' end Estado from poliza p "+
        " inner join memo m on m.polizaid=p.id "+
        " inner join plan_pago pp on pp.memoid=m.id "+
        " where p.estado='ACT' and p.sucursalid='"+sucursalid+"' "+
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

        const pagos = await sequelize.query("select pp.*,case when to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER then 'Actuales' "+
        " when to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER then 'Pendientes' "+
        " when to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER then 'Mora' end Estado from poliza p "+
        " inner join memo m on m.polizaid=p.id "+
        " inner join plan_pago pp on pp.memoid=m.id "+
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

        const pagos = await sequelize.query("select pp.*,case when to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER then 'Actuales' "+
        " when to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER then 'Pendientes' "+
        " when to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER then 'Mora' end Estado from poliza p "+
        " inner join memo m on m.polizaid=p.id "+
        " inner join plan_pago pp on pp.memoid=m.id "+
        " where p.estado='ACT' and p.sucursalid='"+sucursalid+"' "+
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