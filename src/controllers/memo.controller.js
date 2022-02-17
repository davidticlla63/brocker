import { sequelize } from "../database/database";
const { QueryTypes } = require('sequelize');
import Archivo from "../models/Archivo";
import Memo from "../models/Memo";
import PlanPago from '../models/PlanPago'

export async function getMemos(req, res) {
    try {
        const memos = await Memo.findAll({ where: { estado: 'ACT' } });
        res.json({
            data: memos
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function createMemo(req, res) {
    const {
        /*    nromemo,
           nrocertificado,
           fechainicio,
           fechafin,
           fechaexpedicion,
           fecharecepcion,
           tipomoneda,
           primatotal,
           formapago,
           encargadoid,
           bancoid,
           ciudadexpedicion,
           notas,
           companiaseguroid,
           subramocompaniaid,
           tiporamoid,
           contratanteid,
           tomadorid,
           ejecutivoid,
           colocacionid,
           ciaspvs,
           tipomemoid,
           tmemo,
           tipocontrato,
           menoid,
           llamadoid,
           vendedorid,
           nroplaca,
           tipoemision,
           franquicia,
           valorasegurado,
   
           comisionbs,
           comisionusd,
           tipocambio,
           porcentajeprima,
           primaneta,
           porcentajecomision,
   
   
           usuarioregistro,
           usuariomodificacion,
           fecharegistro = new Date(),
           fechamodificacion = new Date(),
           estado = 'ACT',
           sucursalid, */
        fechamemo,
        fechapago,
        nrocuotas,
        cuotainicial,
        pagocada,
        diapago,
        impuesto,
        fechaproduccion,
        mesproduccion,
        anioproduccion,

        usuarioregistro,
        usuariomodificacion,
        fecharegistro = new Date(),
        fechamodificacion = new Date(),
        estado = 'ACT',
        sucursalid,
        polizaid,
        archivos,
        planpago } = req.body;
    let t = await sequelize.transaction();
    let newMemo;
    try {
        newMemo = await Memo.create({
            /*  nromemo,
             nrocertificado,
             fechainicio,
             fechafin,
             fechaexpedicion,
             fecharecepcion,
             tipomoneda,
             primatotal,
             formapago,
             encargadoid,
             bancoid,
             ciudadexpedicion,
             notas,
             companiaseguroid,
             subramocompaniaid,
             tiporamoid,
             contratanteid,
             tomadorid,
             ejecutivoid,
             colocacionid,
             ciaspvs,
             tipomemoid,
             tmemo,
             tipocontrato,
             menoid,
             llamadoid,
             vendedorid,
             nroplaca,
             tipoemision,
             franquicia,
             valorasegurado,
             comisionbs,
             comisionusd,
             tipocambio,
             porcentajeprima,
             primaneta,
             porcentajecomision,
             usuarioregistro,
             usuariomodificacion,
             fecharegistro,
             fechamodificacion,
             estado, */
            fechamemo,
            fechapago,
            nrocuotas,
            cuotainicial,
            pagocada,
            diapago,
            impuesto,
            fechaproduccion,
            mesproduccion,
            anioproduccion,

            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion,
            estado,
            sucursalid,
            polizaid
        }, {
            fields: [
                /*  'nromemo',
                 'nrocertificado',
                 'fechainicio',
                 'fechafin',
                 'fechaexpedicion',
                 'fecharecepcion',
                 'tipomoneda',
                 'primatotal',
                 'formapago',
                 'encargadoid',
                 'bancoid',
                 'ciudadexpedicion',
 
                 'broker',
                 'notas',
                 'companiaseguroid',
                 'subramocompaniaid',
                 'tiporamoid',
                 'contratanteid',
                 'tomadorid',
                 'ejecutivoid',
                 'colocacionid',
                 'ciaspvs',
                 'tipomemoid',
                 'tmemo',
                 'tipocontrato',
                 'menoid',
                 'llamadoid',
                 'vendedorid',
                 'nroplaca',
                 'tipoemision',
                 'franquicia',
                 'valorasegurado',
 
                 'comisionbs',
                 'comisionusd',
                 'tipocambio',
                 'porcentajeprima',
                 'primaneta',
                 'porcentajecomision',
 
                 'usuarioregistro',
                 'usuariomodificacion',
                 'fecharegistro',
                 'fechamodificacion',
                 'estado',
                 'sucursalid' */

                'fechamemo',
                'fechapago',
                'nrocuotas',
                'cuotainicial',
                'pagocada',
                'diapago',
                'impuesto',
                'fechaproduccion',
                'mesproduccion',
                'anioproduccion',

                'usuarioregistro',
                'usuariomodificacion',
                'fecharegistro',
                'fechamodificacion',
                'estado',
                'sucursalid',
                'polizaid'
            ]
        }, { transaction: t });
        // step 2  archivos
        // if( archivos!) 
        for (let i = 0; i < archivos.length; i++) {
            // listaPermisos.push( 
            await Archivo.create({
                codigo: newMemo.id,
                nombre: archivos[i].nombre,
                descripcion: archivos[i].nombre,
                extension: archivos[i].extension,
                archivo: archivos[i].archivo,
                aseguradoid: tomadorid,
                sucursalid: sucursalid,
                usuarioregistro,
                usuariomodificacion: usuarioregistro,
                fecharegistro: new Date(),
                fechamodificacion: new Date(),
                estado: 'ACT'
            }, {
                fields: [
                    'codigo',
                    'nombre',
                    'descripcion',
                    'extension',
                    'archivo',
                    'aseguradoid',
                    'sucursalid',
                    'usuarioregistro',
                    'usuariomodificacion',
                    'fecharegistro',
                    'fechamodificacion',
                    'estado']
            }, { transaction: t });


        }

        if (planpago) {//plan de pagos
            for (let i = 0; i < planpago.length; i++) {
                let newPlanPago = await PlanPago.create({

                    /*     fechapago: planpago[i].fechapago,
                        montobs: planpago[i].montobs,
                        montousd: planpago[i].montousd,
                        porcentaje: planpago[i].porcentaje,
                        comisionbs: planpago[i].comisionbs,
                        comisionusd: planpago[i].comisionusd, */
                    nro: planpago[i].nro,
                    fechapago: planpago[i].fechapago,
                    montocuota: planpago[i].montocuota,
                    primaneta: planpago[i].primaneta,
                    comision: planpago[i].comision,

                    usuarioregistro,
                    usuariomodificacion,
                    fecharegistro: new Date(),
                    fechamodificacion: new Date(),
                    estado: 'ACT',
                    memoid: newMemo.id
                }, {
                    fields: [

                        /*  'fechapago',
                         'montobs',
                         'montousd',
                         'porcentaje',
                         'comisionbs',
                         'comisionusd', */
                        'nro',
                        'fechapago',
                        'montocuota',
                        'primaneta',
                        'comision',

                        'usuarioregistro',
                        'usuariomodificacion',
                        'fecharegistro',
                        'fechamodificacion',
                        'estado',
                        'memoid']
                }, { transaction: t });


            }
        }


        await t.commit();
        if (newMemo) {
            return res.json({
                message: 'Memo created successfully',
                data: newMemo
            });
        }
    } catch (e) {
        console.log(e);
        if (t) {
            await t.rollback();
            //await newUsuario.destroy();
            if (newMemo) {
                await Memo.destroy({ where: { id: newMemo.id } })
            }
        }
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}
export async function updateMemo(req, res) {
    const { id } = req.params;
    const { /* nromemo,
        nrocertificado,
        fechainicio,
        fechafin,
        fechaexpedicion,
        fecharecepcion,
        tipomoneda,
        primatotal,
        formapago,
        encargadoid,
        bancoid,
        ciudadexpedicion,
        notas,
        companiaseguroid,
        subramocompaniaid,
        contratanteid,
        tomadorid,
        ejecutivoid,
        colocacionid,
        ciaspvs,
        tipomemoid,
        tmemo,
        tipocontrato,
        menoid,
        llamadoid,
        vendedorid,
        nroplaca,
        tipoemision,
        franquicia,
        valorasegurado,


        comisionbs,
        comisionusd,
        tipocambio,
        porcentajeprima,
        primaneta,
        porcentajecomision,

        usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        fechamodificacion = new Date(),
        estado, */
        // sucursalid,

        fechamemo,
        fechapago,
        nrocuotas,
        cuotainicial,
        pagocada,
        diapago,
        impuesto,
        fechaproduccion,
        mesproduccion,
        anioproduccion,

        usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        fechamodificacion,
        estado,
        sucursalid,
        polizaid,

        archivos, archivoseliminados,
        planpagoliminados,
        planpago } = req.body;
    let t = await sequelize.transaction();
    try {
        const updateRowCount = await Memo.update({
            /*  nromemo,
             nrocertificado,
             fechainicio,
             fechafin,
             fechaexpedicion,
             fecharecepcion,
             tipomoneda,
             primatotal,
             formapago,
             encargadoid,
             bancoid,
             ciudadexpedicion,
             notas,
             companiaseguroid,
             subramocompaniaid,
             tiporamoid,
             contratanteid,
             tomadorid,
             ejecutivoid,
             colocacionid,
             ciaspvs,
             tipomemoid,
             tmemo,
             tipocontrato,
             menoid,
             llamadoid,
             vendedorid,
             nroplaca,
             tipoemision,
             franquicia,
             valorasegurado,
 
             comisionbs,
             comisionusd,
             tipocambio,
             porcentajeprima,
             primaneta,
             porcentajecomision,
 
             usuarioregistro,
             usuariomodificacion,
             fecharegistro,
             fechamodificacion,
             estado,
             sucursalid */
             fechamodificacion:new Date(),
            fechamemo,
            fechapago,
            nrocuotas,
            cuotainicial,
            pagocada,
            diapago,
            impuesto,
            fechaproduccion,
            mesproduccion,
            anioproduccion,

            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion,
            estado,
            sucursalid,
            polizaid
        }, {
            where: {
                id
            }
        }, { transaction: t });


        for (let i = 0; i < archivoseliminados.length; i++) {

            await Archivo.update({
                estado: 'BAJ',
                fechamodificacion: new Date()
            }, { where: { id: archivoseliminados[i].id } }, { transaction: t });

        }
        // step 2  archivos
        for (let i = 0; i < archivos.length; i++) {

            await Archivo.create({
                codigo: id,
                nombre: archivos[i].nombre,
                descripcion: archivos[i].nombre,
                extension: archivos[i].extension,
                archivo: archivos[i].archivo,
                aseguradoid: tomadorid,
                sucursalid: sucursalid,
                usuarioregistro: usuariomodificacion,
                usuariomodificacion: usuariomodificacion,
                fecharegistro: new Date(),
                fechamodificacion: new Date(),
                estado: 'ACT'
            }, {
                fields: [
                    'codigo',
                    'nombre',
                    'descripcion',
                    'extension',
                    'archivo',
                    'aseguradoid',
                    'sucursalid',
                    'usuarioregistro',
                    'usuariomodificacion',
                    'fecharegistro',
                    'fechamodificacion',
                    'estado']
            }, { transaction: t });

        }
        // for (let i = 0; i < planpagoliminados.length; i++) {

        //     await PlanPago.update({
        //         estado: 'BAJ',
        //         fechamodificacion: new Date()
        //     }, { where: { memoid: planpagoliminados[i].id } }, { transaction: t });

        // }

        await PlanPago.update({
            estado: 'BAJ',
            fechamodificacion: new Date()
        }, { where: { memoid: id} }, { transaction: t });
        
        for (let i = 0; i < planpago.length; i++) {
            let newPlanPago = await PlanPago.create({

                /*    fechapago: planpago[i].fechapago,
                   montobs: planpago[i].montobs,
                   montousd: planpago[i].montousd,
                   porcentaje: planpago[i].porcentaje,
                   comisionbs: planpago[i].comisionbs,
                   comisionusd: planpago[i].comisionusd, */

                nro: planpago[i].nro,
                fechapago: planpago[i].fechapago,
                montocuota: planpago[i].montocuota,
                primaneta: planpago[i].primaneta,
                comision: planpago[i].comision,

                usuarioregistro,
                usuariomodificacion,
                fecharegistro: new Date(),
                fechamodificacion: new Date(),
                estado: 'ACT',
                memoid: id
            }, {
                fields: [

                    /*  'fechapago',
                     'montobs',
                     'montousd',
                     'porcentaje',
                     'comisionbs',
                     'comisionusd', */

                    'nro',
                    'fechapago',
                    'montocuota',
                    'primaneta',
                    'comision',

                    'usuarioregistro',
                    'usuariomodificacion',
                    'fecharegistro',
                    'fechamodificacion',
                    'estado',
                    'memoid']
            }, { transaction: t });


        }

        await t.commit();
        const memos = await Memo.findOne({
            where: {
                id
            }
        }
        );
        res.json({
            message: 'Memo update successfully',
            count: memos
        });




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

export async function getOneMemo(req, res) {
    try {
        const { id } = req.params;
        const memo = await Memo.findOne({
            where: {
                id
            }
        });
        res.json({
            data: memo
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function memosPorSucursal(req, res) {
    try {
        const { sucursalid } = req.params;
        const { fechainicio, fechafin } = req.body;
        /* const memo = await Memo.findOne({
            where: {
                sucursalid, estado: 'ACT'
            }
        }); */

        const memos = await sequelize.query("select po.ciaspvs,p.*,s.nombre as sucursal,a.nombrecompleto asegurado,c.nombre compania,r.nombre ramo,sr.nombre subramo,po.fechainicio,po.fechafin,po.valorasegurado,po.tipomoneda,po.nropoliza,po.nrocertificado,po.fechaexpedicion,po.franquicia,po.primatotal,po.formapago,po.notas observacion,po.fecharecepcion,  " +
        " d.nombre ciudad,co.nombre contratante,pl.nombre plan,b.nombre subrogado,e.nombrecompleto encargado,ej.nombrecompleto ejecutivo,po.tpoliza,po.comisionbs,po.comisionusd,po.porcentajeprima,po.primaneta,po.porcentajecomision ,po.formapago "+
            " from memo p " +
            "inner join sucursal s on s.id=p.sucursalid  " +
            "inner join poliza po on po.id=p.polizaid  " +

            "inner join asegurado a on a.id=po.tomadorid  " +
            "inner join sub_ramo_compania src on src.id=po.subramocompaniaid  " +
            "inner join ramo r on r.id=src.ramoid  " +
            "left join sub_ramo sr on sr.id=src.subramoid  " +
            "inner join departamento d on d.id=po.ciudadexpedicion " +
            "inner join contratante co on co.id=po.contratanteid " +
            "inner join plan pl on pl.id=po.planid " +
            "inner join banco b on b.id=po.bancoid " +
            "inner join personal e on e.id=po.encargadoid " +
            "inner join personal ej on ej.id=po.ejecutivoid " +
            "inner join compania_seguro c on c.id=po.companiaseguroid  " +
            //"where s.empresaid= '" + empresaid + "' and p.tipomemoid='" + tipomemoid + "' order by p.id "
            "where s.id= '" + sucursalid + "' and to_char(p.fecharegistro, 'YYYYMMDD')::integer>= " + fechainicio + " and to_char(p.fecharegistro, 'YYYYMMDD')::integer<= " + fechafin + " and p.estado='ACT' order by p.fechamodificacion desc "
            , {
                type: QueryTypes.SELECT
            })
        res.json({
            data: memos
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function memosPorEmpresa(req, res) {
    try {
        const { empresaid } = req.params;
        const { fechainicio, fechafin } = req.body;
        const query = "select po.ciaspvs,p.*,s.nombre as sucursal,a.nombrecompleto asegurado,c.nombre compania,r.nombre ramo,sr.nombre subramo,po.fechainicio,po.fechafin,po.valorasegurado,po.tipomoneda,po.nropoliza,po.nrocertificado,po.fechaexpedicion,po.franquicia,po.primatotal,po.formapago,po.notas observacion,po.fecharecepcion,  " +
        " d.nombre ciudad,co.nombre contratante,pl.nombre plan,b.nombre subrogado,e.nombrecompleto encargado,ej.nombrecompleto ejecutivo,po.tpoliza,po.comisionbs,po.comisionusd,po.porcentajeprima,po.primaneta,po.porcentajecomision ,po.formapago "+
            " from memo p " +
            "inner join sucursal s on s.id=p.sucursalid  " +
            "inner join poliza po on po.id=p.polizaid  " +
            "inner join asegurado a on a.id=po.tomadorid  " +
            "inner join sub_ramo_compania src on src.id=po.subramocompaniaid  " +
            "inner join ramo r on r.id=src.ramoid  " +
            "left join ramo sr on a.id=src.subramoid  " +

            "inner join departamento d on d.id=po.ciudadexpedicion " +
            "inner join contratante co on co.id=po.contratanteid " +
            "inner join plan pl on pl.id=po.planid " +
            "inner join banco b on b.id=po.bancoid " +
            "inner join personal e on e.id=po.encargadoid " +
            "inner join personal ej on ej.id=po.ejecutivoid " +
            "inner join compania_seguro c on c.id=po.companiaseguroid  " +
            //"where s.empresaid= '" + empresaid + "' and p.tipomemoid='" + tipomemoid + "' order by p.id "
            "where s.empresaid= '" + empresaid + "' and to_char(p.fecharegistro, 'YYYYMMDD')::integer>= " + fechainicio + " and to_char(p.fecharegistro, 'YYYYMMDD')::integer<= " + fechafin + " and p.estado='ACT' order by p.fechamodificacion desc ";
        //console.log(query);
        const memos = await sequelize.query(query
            , {
                type: QueryTypes.SELECT
            })
        //console.log(query);
        res.json({
            data: memos
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function deleteMemo(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await Memo.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Memo deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}



export async function bajaMemo(req, res) {
    const { id } = req.params;

    console.log("bajaMemo");
    const {
        //    id,
        usuariomodificacion
    } = req.body;
    try {
        // var moment = require('moment');
        const updateRowCount = await Memo.update({
            usuariomodificacion,
            /*  fechamodificacion:moment().format(), */
            fechamodificacion: new Date(),
            estado: 'BAJ'
        }, {
            where: {
                id
            }
        });

        const memos = await Memo.findOne({
            where: {
                id
            }
        }
        );

        res.json({
            message: 'Memo baja successfully',
            count: memos
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}


export async function getMemoPorTipoYSucursal(req, res) {
    const { tipomemoid, sucursalid } = req.params;
    try {

        const memos = await sequelize.query("select p.*,s.nombre as sucursal " +
            "from memo p " +
            "inner join sucursal s on s.id=p.sucursalid  " +
            //"where s.empresaid= '" + empresaid + "' and p.tipomemoid='" + tipomemoid + "' order by p.id "
            "where s.id= '" + empresaid + "' and p.tmemo='" + tipomemoid + "' order by p.fechamodificacion desc "
            , {
                type: QueryTypes.SELECT
            });
        //const memos = await Memo.findAll({ where: { tipomemoid, sucursalid, estado: 'ACT' } });
        //const memos = await Memo.findAll({ where: { tmemo: tipomemoid, sucursalid, estado: 'ACT' } });

        res.json({ memos });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getMemosPorTipoYEmpresa(req, res) {
    const { tipomemoid, empresaid } = req.params;
    try {

        const memos = await sequelize.query("select p.*,s.nombre as sucursal " +
            "from memo p " +
            "inner join sucursal s on s.id=p.sucursalid  " +
            //"where s.empresaid= '" + empresaid + "' and p.tipomemoid='" + tipomemoid + "' order by p.id "
            "where s.empresaid= '" + empresaid + "' and p.tmemo='" + tipomemoid + "' order by p.fechamodificacion desc "
            , {
                type: QueryTypes.SELECT
            });
        res.json({ memos });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}


export async function getMemosPorTipoRamoYEmpresa(req, res) {
    const { tiporamoid, empresaid } = req.params;
    try {

        const memos = await sequelize.query("select p.* ,sr.nombre nombresubramo,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal " +
            "from memo p " +
            "inner join sucursal s on s.id=p.sucursalid  " +
            "inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid " +
            "inner join sub_ramo sr on sr.id=rc.subramoid " +
            "inner join ramo r on r.id=rc.ramoid " +
            "inner join asegurado a on a.id=p.tomadorid " +
            "inner join compania_seguro cs on cs.id=p.companiaseguroid " +
            //"where s.empresaid= '" + empresaid + "' and p.tiporamoid='" + tiporamoid + "' order by p.id "
            "where s.empresaid= '" + empresaid + "' and p.tmemo='" + tiporamoid + "' order by p.fechamodificacion desc "
            , {
                type: QueryTypes.SELECT
            });
        //console.log(JSON.stringify(usuarios[0], null, 2));

        res.json({ memos });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}
export async function getMemosPorTipoRamoYSucursal(req, res) {
    const { tiporamoid, sucursalid } = req.params;
    try {

        const memos = await sequelize.query("select p.* ,sr.nombre nombresubramo,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania ,s.nombre as sucursal " +
            /*       "from memo p " +
                  "inner join sucursal s on s.id=p.sucursalid  " + */
            "from memo p " +
            "inner join sucursal s on s.id=p.sucursalid  " +
            "inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid " +
            "inner join sub_ramo sr on sr.id=rc.subramoid " +
            "inner join ramo r on r.id=rc.ramoid " +
            "inner join asegurado a on a.id=p.tomadorid " +
            "inner join compania_seguro cs on cs.id=p.companiaseguroid " +
            "where s.id='" + sucursalid + "'  and p.tmemo='" + tiporamoid + "'  order by p.fechamodificacion desc "
            , {
                type: QueryTypes.SELECT
            });
        //console.log(JSON.stringify(usuarios[0], null, 2));

        res.json({ memos });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}




/**MONTOS TOTALES PARA DASHBOARD  POR EMPRESA*/
export async function getTotalProduccionMemoPorEmpresa(req, res) {
    const { empresaid } = req.params;
    try {
        let query = "select count(*) cantidad,SUM(p.valorasegurado) totalvalorasegurado "+
            "from memo m  " +
            " inner join poliza p on p.id=m.polizaid  "
            "inner join sucursal s on s.id =si.sucursalid  " +
            "inner join empresa e on e.id =s.empresaid " +
            " where m.estado  in ('ACT') and e.id = '" + empresaid + "'";

        const pagos = await sequelize.query(query
            , {
                type: QueryTypes.SELECT
            });
        res.json({
            data: pagos
        }
        );
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

/** MONTOS TOTALES PARA DASHBOARD  POR SUCURSAL*/
export async function getTotalProduccionMemoPorSucursal(req, res) {
    const { sucursalid } = req.params;
    try {

            let query = "select count(*) cantidad,SUM(p.valorasegurado) totalvalorasegurado "+
            "from memo m  " +
            " inner join poliza p on p.id=m.polizaid  "
            " where m.estado  in ('ACT') and m.sucursalid = '" + sucursalid + "'";

        const pagos = await sequelize.query(query
            , {
                type: QueryTypes.SELECT
            });
            res.json({
                data: pagos
            })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}