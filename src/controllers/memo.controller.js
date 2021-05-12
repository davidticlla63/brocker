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
        nromemo,
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
        archivos,
        planpagos,

        usuarioregistro,
        usuariomodificacion,
        fecharegistro = new Date(),
        fechamodificacion = new Date(),
        estado = 'ACT',
        sucursalid } = req.body;
    let t = await sequelize.transaction();
    let newMemo;
    try {
        newMemo = await Memo.create({
            nromemo,
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
            sucursalid
        }, {
            fields: ['nromemo',
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
                'sucursalid']
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
        for (let i = 0; i < planpagos.length; i++) {
            let newPlanPago = await PlanPago.create({

                fechapago: planpagos[i].fechapago,
                montobs: planpagos[i].montobs,
                montousd: planpagos[i].montousd,
                porcentaje: planpagos[i].porcentaje,
                comisionbs: planpagos[i].comisionbs,
                comisionusd: planpagos[i].comisionusd,

                usuarioregistro,
                usuariomodificacion,
                fecharegistro: new Date(),
                fechamodificacion: new Date(),
                estado: 'ACT',
                memoid: newMemo.id
            }, {
                fields: [

                    'titular',
                    'placa',
                    'tipovehiculo',
                    'marcavehiculo',
                    'colorvehiculo',
                    'aniovehiculo',

                    'primaindividual',
                    'primanetaindividualbs',
                    'primanetaindividualusd',
                    'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                    'fechamodificacion', 'estado',
                    'memoid']
            }, { transaction: t });
            let campos = planpagos[i].campos;
            for (let j = 0; j < campos.length; j++) {
                // listaPermisos.push( 
                await PlanPagoAdicional.create({
                    memodetalleid: newPlanPago.id,
                    valor: campos[j].valor,
                    dato: campos[j].dato,
                    usuarioregistro,
                    usuariomodificacion: usuarioregistro,
                    fecharegistro: new Date(),
                    fechamodificacion: new Date(),
                    estado: 'ACT'
                }, {
                    fields: [
                        'memodetalleid',
                        'valor',
                        'dato',
                        'usuarioregistro',
                        'usuariomodificacion',
                        'fecharegistro',
                        'fechamodificacion',
                        'estado']
                }, { transaction: t });
            }

        }

        /* for (let i = 0; i < adicionales.length; i++) {
            // listaPermisos.push( 
            await PlanPagoAdicional.create({
                memoid: newMemo.id,
                valor: adicionales[i].valor,
                dato: adicionales[i].dato,
                usuarioregistro,
                usuariomodificacion: usuarioregistro,
                fecharegistro: new Date(),
                fechamodificacion: new Date(),
                estado: 'ACT'
            }, {
                fields: [
                    'memoid',
                    'valor',
                    'dato',
                    'usuarioregistro',
                    'usuariomodificacion',
                    'fecharegistro',
                    'fechamodificacion',
                    'estado']
            }, { transaction: t });
        } */



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
        const memo = await Memo.findOne({
            where: {
                sucursalid, estado: 'ACT'
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

export async function updateMemo(req, res) {
    const { id } = req.params;
    const { nromemo,
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
        // broker,
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
        /*         fechainiciovigencia,
                fechafinvigencia,
                fechainclusion,
                prima,
                porcentajeprima,
                primaneta,
                porcentajecomision,
                detalle, */

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
        estado,
        sucursalid, archivos, archivoseliminados } = req.body;
    let t = await sequelize.transaction();
    try {
        const updateRowCount = await Memo.update({
            nromemo,
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
            //broker,
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
            /*    fechainiciovigencia,
               fechafinvigencia,
               fechainclusion,
               prima,
               porcentajeprima,
               primaneta,
               porcentajecomision,
               detalle, */

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
            sucursalid
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

        //const memos = await Memo.findAll({ where: { tipomemoid, sucursalid, estado: 'ACT' } });
        const memos = await Memo.findAll({ where: { tmemo: tipomemoid, sucursalid, estado: 'ACT' } });

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

        const memos = await sequelize.query("select p.* " +
            "from memo p " +
            "inner join sucursal s on s.id=p.sucursalid  " +
            //"where s.empresaid= '" + empresaid + "' and p.tipomemoid='" + tipomemoid + "' order by p.id "
            "where s.empresaid= '" + empresaid + "' and p.tmemo='" + tipomemoid + "' order by p.id "
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

        const memos = await sequelize.query("select p.* ,sr.nombre nombresubramo,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania " +
            "from memo p " +
            "inner join sucursal s on s.id=p.sucursalid  " +
            "inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid " +
            "inner join sub_ramo sr on sr.id=rc.subramoid " +
            "inner join ramo r on r.id=rc.ramoid " +
            "inner join asegurado a on a.id=p.tomadorid " +
            "inner join compania_seguro cs on cs.id=p.companiaseguroid " +
            //"where s.empresaid= '" + empresaid + "' and p.tiporamoid='" + tiporamoid + "' order by p.id "
            "where s.empresaid= '" + empresaid + "' and p.tmemo='" + tiporamoid + "' order by p.id "
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

        const memos = await sequelize.query("select p.* ,sr.nombre nombresubramo,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania  " +
            /*       "from memo p " +
                  "inner join sucursal s on s.id=p.sucursalid  " + */
            "from memo p " +
            "inner join sucursal s on s.id=p.sucursalid  " +
            "inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid " +
            "inner join sub_ramo sr on sr.id=rc.subramoid " +
            "inner join ramo r on r.id=rc.ramoid " +
            "inner join asegurado a on a.id=p.tomadorid " +
            "inner join compania_seguro cs on cs.id=p.companiaseguroid " +
            "where s.id='" + sucursalid + "'  and p.tmemo='" + tiporamoid + "'  order by p.id "
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