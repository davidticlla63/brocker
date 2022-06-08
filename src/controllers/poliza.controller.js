import { sequelize } from "../database/database";
const { QueryTypes, Promise } = require('sequelize');
import Archivo from "../models/Archivo";
import Poliza from "../models/Poliza";
import PolizaDetalleAdicional from "../models/PolizaDetalleAdicionales";
import PolizaDetalle from '../models/PolizaDetalle'
import PolizaDetallePersona from "../models/PolizaDetallePersona";
import PolizaDetalleGeneral from "../models/PolizaDetalleGeneral";
import EnvioCorreo from "../models/EnvioCorreo";
import { transporter } from "../mailers";
import PolizaDetalles from "../models/PolizaDetalles";
var request = require("request");

export async function getPolizas(req, res) {
    try {
        const polizas = await Poliza.findAll({ where: { estado: 'ACT' } });
        res.json({
            data: polizas
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function createPolizaGenerica(req, res) {
    const {
        nropoliza,
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
        tipopolizaid,
        tpoliza,
        tipocontrato,
        menoid,
        vendedorid,
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
        detalle,
        usuarioregistro,
        usuariomodificacion,
        estado = 'ACT',
        sucursalid,
        planid,
        polizaid } = req.body;
    let newPoliza;
    let t;
    try {
        t = await sequelize.transaction();
        let ingresoegreso = 'I';
        if (tipoemision == 'Anexo Exclusion' || tipoemision == 'Anexo Anulacion') {
            ingresoegreso = 'E'
        } else {
            ingresoegreso = 'I'
        }
        //const transaction= sequelize.transaction;
        newPoliza = await Poliza.create({
            nropoliza,
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
            tiporamoid,
            contratanteid,
            tomadorid,
            ejecutivoid,
            colocacionid,
            ciaspvs,
            tipopolizaid,
            tpoliza,
            tipocontrato,
            menoid,
            vendedorid,
            tipoemision,
            franquicia,
            valorasegurado,
            comisionbs,
            comisionusd,
            tipocambio,
            porcentajeprima,
            primaneta,
            porcentajecomision,
            ingresoegreso,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro: new Date(),
            fechamodificacion: new Date(),
            estado,
            sucursalid,
            planid,
            polizaid
        }, {
            fields: ['nropoliza',
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

                //'broker',
                'notas',
                'companiaseguroid',
                'subramocompaniaid',
                'tiporamoid',
                'contratanteid',
                'tomadorid',
                'ejecutivoid',
                'colocacionid',
                'ciaspvs',
                'tipopolizaid',
                'tpoliza',
                'tipocontrato',
                'menoid',
                'vendedorid',
                'tipoemision',
                'franquicia',
                'valorasegurado',
                'comisionbs',
                'comisionusd',
                'tipocambio',
                'porcentajeprima',
                'primaneta',
                'porcentajecomision',
                'ingresoegreso',
                'usuarioregistro',
                'usuariomodificacion',
                'fecharegistro',
                'fechamodificacion',
                'estado',
                'sucursalid',
                'planid',
                'polizaid']
        }, { transaction: t });
        // step 2  archivos
        // if( archivos!) 
        for (let i = 0; i < archivos.length; i++) {
            // listaPermisos.push( 
            await Archivo.create({
                codigo: newPoliza.id,
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
        //DETALLE GENERAL
        if (detalle) {
            for (let i = 0; i < detalle.length; i++) {
              await PolizaDetalles.create({
                    numerodetalle: detalle[i].numerodetalle,
                    valor: detalle[i].valor,
                    usuarioregistro:newPoliza.usuarioregistro,
                    fecharegistro: new Date(),
                    fechamodificacion: new Date(),
                    estado: 'ACT',
                    polizaid: newPoliza.id,
                    atributoid: detalle[i].atributoid,

                },
                {
                    fields: [
                        'numerodetalle',
                        'valor',
                        'usuarioregistro',
                        'fecharegistro',
                        'fechamodificacion',
                        'estado',
                        'polizaid',
                        'atributoid'
                    ],
                },

                { transaction: t });
            }

        }
        await t.commit();


        const QUERY = `select p.id, p.nropoliza, p.nrocertificado, p.fechainicio, p.fechafin, p.fechaexpedicion, p.fecharecepcion, p.tipomoneda, p.primatotal, p.formapago, p.encargadoid, p.bancoid, p.ciudadexpedicion, p.notas, p.companiaseguroid, p.subramocompaniaid, p.tiporamoid, p.contratanteid, p.tomadorid, p.ejecutivoid, p.colocacionid, p.ciaspvs, p.tipopolizaid, p.tpoliza, p.tipocontrato, p.memoid, p.vendedorid, null tipoemision, p.franquicia, p.valorasegurado, p.comisionbs, p.comisionusd, p.tipocambio, p.porcentajeprima, p.primaneta, p.porcentajecomision, p.usuarioregistro, p.usuariomodificacion, p.fecharegistro, p.fechamodificacion, p.estado, p.sucursalid, p.planid, p.polizaid 
        ,sr.nombre nombreramopadre,case when sr.id is null then r.nombre else sr.nombre end nombreramo,case when  sr.id is null then null else r.nombre end nombresubramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania ,s.nombre as sucursal,t.nombre tiporamo,pe.nombrecompleto ejecutivo,car.nombrecompleto cartera
        from poliza p
        inner join sucursal s on s.id=p.sucursalid
        inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid
        inner join ramo r on r.id=rc.ramoid
        left join ramo sr on sr.id=rc.ramopadreid
        inner join asegurado a on a.id=p.tomadorid
        inner join compania_seguro cs on cs.id=p.companiaseguroid
        inner join tipo_ramo t on t.id=p.tiporamoid
        inner join personal pe on pe.id=p.ejecutivoid
        inner join personal car on car.id=a.carteraid
        where p.id='` + newPoliza.id + `'   `;

        //console.log(QUERY);
        const poliza = await sequelize.query(QUERY
            , {
                type: QueryTypes.SELECT
            });

        if (newPoliza) {
            return res.json({
                message: 'Poliza created successfully',
                data: poliza[0]
            });
        }
    } catch (e) {
        console.log(e);
        if (t) {
            await t.rollback();
            //await newUsuario.destroy();
            if (newPoliza) {
                await Poliza.destroy({ where: { id: newPoliza.id } })
            }
        }
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function updatePolizaGenerica(req, res) {
    const { id } = req.params;
    const { nropoliza,
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
        tipopolizaid,
        tpoliza,
        tipocontrato,
        menoid,
        vendedorid,
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
        estado,
        sucursalid, planid, archivos, archivoseliminados,
        detalle, eliminadosdetalle } = req.body;
    let t;
    try {
        t = await sequelize.transaction();
        const updateRowCount = await Poliza.update({
            nropoliza,
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
            tipopolizaid,
            tpoliza,
            tipocontrato,
            menoid,
            vendedorid,
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
            fechamodificacion: new Date(),
            estado,
            sucursalid,
            planid
        }, {
            where: {
                id
            }
        }, { transaction: t });

        //ARCHIVOS ELIMINADOS
        for (let i = 0; i < archivoseliminados.length; i++) {

            await Archivo.update({
                estado: 'BAJ',
                fechamodificacion: new Date()
            }, { where: { id: archivoseliminados[i].id } }, { transaction: t });

        }
        // REGISTRO DE ARCHIVOS NUEVOS
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
        if (eliminadosdetalle) {
            //DETALLE  ELIMINADOS
            for (let i = 0; i < eliminadosdetalle.length; i++) {

                await PolizaDetalles.update({
                    estado: 'BAJ',
                    fechamodificacion: new Date()
                }, { where: { numerodetalle: eliminadosdetalle[i].numerodetalle,id:eliminadosdetalle[i].id } }, { transaction: t });

            }
        }
        if (detalle) {
            //DETALLE AUTOMOTORES
            let newPolizaDetalle;
            for (let i = 0; i < detalle.length; i++) {
                newPolizaDetalle = await PolizaDetalles.create({
                    numerodetalle: detalle[i].numerodetalle,
                    valor: detalle[i].valor,
                    usuarioregistro,
                    usuariomodificacion,
                    fecharegistro: new Date(),
                    fechamodificacion: new Date(),
                    estado: 'ACT',
                    atributoid: detalle[i].atributoid,
                    polizaid: id,

                }, {
                    fields: ['numerodetalle',
                        'valor',
                        'usuarioregistro',
                        'usuariomodificacion',
                        'fecharegistro',
                        'fechamodificacion',
                        'estado',
                        'atributoid',
                        'polizaid']
                }, { transaction: t });
            }
        }


        await t.commit();
        const polizas = await Poliza.findOne({
            where: {
                id
            }
        }
        );
        res.json({
            message: 'Poliza update successfully',
            count: polizas
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

/** automotor */
export async function createPoliza(req, res) {
    const {
        nropoliza,
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
        tipopolizaid,
        tpoliza,
        tipocontrato,
        menoid,
        //llamadoid,
        vendedorid,
        //nroplaca,
        tipoemision,
        franquicia,
        valorasegurado,
        /*   fechainiciovigencia,
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
        archivos,
        //adicionales,
        automotores,

        usuarioregistro,
        usuariomodificacion,
        estado = 'ACT',
        sucursalid,
        planid,
        polizaid } = req.body;
    let newPoliza;
    let t;
    try {
        t = await sequelize.transaction();
        let ingresoegreso = 'I';
        if (tipoemision == 'Anexo Exclusion' || tipoemision == 'Anexo Anulacion') {
            ingresoegreso = 'E'
        } else {
            ingresoegreso = 'I'
        }
        //const transaction= sequelize.transaction;
        newPoliza = await Poliza.create({
            nropoliza,
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
            tiporamoid,
            contratanteid,
            tomadorid,
            ejecutivoid,
            colocacionid,
            ciaspvs,
            tipopolizaid,
            tpoliza,
            tipocontrato,
            menoid,
            // llamadoid,
            vendedorid,
            //nroplaca,
            tipoemision,
            franquicia,
            valorasegurado,
            /*     fechainiciovigencia,
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
            ingresoegreso,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro: new Date(),
            fechamodificacion: new Date(),
            estado,
            sucursalid,
            planid,
            polizaid
        }, {
            fields: ['nropoliza',
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

                //'broker',
                'notas',
                'companiaseguroid',
                'subramocompaniaid',
                'tiporamoid',
                'contratanteid',
                'tomadorid',
                'ejecutivoid',
                'colocacionid',
                'ciaspvs',
                'tipopolizaid',
                'tpoliza',
                'tipocontrato',
                'menoid',
                // 'llamadoid',
                'vendedorid',
                //'nroplaca',
                'tipoemision',
                'franquicia',
                'valorasegurado',

                /*     'fechainiciovigencia',
                    'fechafinvigencia',
                    'fechainclusion',
                    'prima',
                    'porcentajeprima',
                    'primaneta',
                    'porcentajecomision',
                    'detalle', */

                'comisionbs',
                'comisionusd',
                'tipocambio',
                'porcentajeprima',
                'primaneta',
                'porcentajecomision',
                'ingresoegreso',
                'usuarioregistro',
                'usuariomodificacion',
                'fecharegistro',
                'fechamodificacion',
                'estado',
                'sucursalid',
                'planid',
                'polizaid']
        }, { transaction: t });
        // step 2  archivos
        // if( archivos!) 
        for (let i = 0; i < archivos.length; i++) {
            // listaPermisos.push( 
            await Archivo.create({
                codigo: newPoliza.id,
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
        //DETALLE AUTOMOTORES
        for (let i = 0; i < automotores.length; i++) {
            let newPolizaDetalle = await PolizaDetalle.create({
                nrocertificado: automotores[i].nrocertificado,
                //titular: automotores[i].titular,
                placa: automotores[i].placa,
                tipovehiculo: automotores[i].tipovehiculo,
                marcavehiculo: automotores[i].marcavehiculo,
                colorvehiculo: automotores[i].colorvehiculo,
                aniovehiculo: automotores[i].aniovehiculo,
                modelo: automotores[i].modelo,
                primaindividual: automotores[i].primaindividual,
                primanetaindividualbs: automotores[i].primanetaindividualbs,
                primanetaindividualusd: automotores[i].primanetaindividualusd,

                franquicia: automotores[i].franquicia,
                valorasegurado: automotores[i].valorasegurado,

                usuarioregistro,
                usuariomodificacion,
                fecharegistro: new Date(),
                fechamodificacion: new Date(),
                estado: 'ACT',
                polizaid: newPoliza.id
            }, {
                fields: [

                    'nrocertificado',
                    'placa',
                    'tipovehiculo',
                    'marcavehiculo',
                    'colorvehiculo',
                    'aniovehiculo',
                    'modelo',
                    'primaindividual',
                    'primanetaindividualbs',
                    'primanetaindividualusd',
                    'franquicia',
                    'valorasegurado',
                    'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                    'fechamodificacion', 'estado',
                    'polizaid']
            }, { transaction: t });
            let campos = automotores[i].campos;
            for (let j = 0; j < campos.length; j++) {
                // listaPermisos.push( 
                await PolizaDetalleAdicional.create({
                    polizadetalleid: newPolizaDetalle.id,
                    valor: campos[j].valor,
                    dato: campos[j].dato,
                    usuarioregistro,
                    usuariomodificacion: usuarioregistro,
                    fecharegistro: new Date(),
                    fechamodificacion: new Date(),
                    estado: 'ACT'
                }, {
                    fields: [
                        'polizadetalleid',
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



        await t.commit();


        const QUERY = `select p.id, p.nropoliza, p.nrocertificado, p.fechainicio, p.fechafin, p.fechaexpedicion, p.fecharecepcion, p.tipomoneda, p.primatotal, p.formapago, p.encargadoid, p.bancoid, p.ciudadexpedicion, p.notas, p.companiaseguroid, p.subramocompaniaid, p.tiporamoid, p.contratanteid, p.tomadorid, p.ejecutivoid, p.colocacionid, p.ciaspvs, p.tipopolizaid, p.tpoliza, p.tipocontrato, p.memoid, p.vendedorid, null tipoemision, p.franquicia, p.valorasegurado, p.comisionbs, p.comisionusd, p.tipocambio, p.porcentajeprima, p.primaneta, p.porcentajecomision, p.usuarioregistro, p.usuariomodificacion, p.fecharegistro, p.fechamodificacion, p.estado, p.sucursalid, p.planid, p.polizaid 
        ,sr.nombre nombreramopadre,case when sr.id is null then r.nombre else sr.nombre end nombreramo,case when  sr.id is null then null else r.nombre end nombresubramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania ,s.nombre as sucursal,t.nombre tiporamo,pe.nombrecompleto ejecutivo,car.nombrecompleto cartera
        from poliza p
        inner join sucursal s on s.id=p.sucursalid
        inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid
        inner join ramo r on r.id=rc.ramoid
        left join ramo sr on sr.id=rc.ramopadreid
        inner join asegurado a on a.id=p.tomadorid
        inner join compania_seguro cs on cs.id=p.companiaseguroid
        inner join tipo_ramo t on t.id=p.tiporamoid
        inner join personal pe on pe.id=p.ejecutivoid
        inner join personal car on car.id=a.carteraid
        where p.id='` + newPoliza.id + `'   `;

        //console.log(QUERY);
        const poliza = await sequelize.query(QUERY
            , {
                type: QueryTypes.SELECT
            });

        if (newPoliza) {
            return res.json({
                message: 'Poliza created successfully',
                data: poliza[0]
            });
        }
    } catch (e) {
        console.log(e);
        if (t) {
            await t.rollback();
            //await newUsuario.destroy();
            if (newPoliza) {
                await Poliza.destroy({ where: { id: newPoliza.id } })
            }
        }
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function updatePoliza(req, res) {
    const { id } = req.params;
    const { nropoliza,
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
        tipopolizaid,
        tpoliza,
        tipocontrato,
        menoid,
        // llamadoid,
        vendedorid,
        //nroplaca,
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
        estado,
        sucursalid, planid, archivos, archivoseliminados,
        automotores, eliminadosautomotores } = req.body;
    let t;
    try {
        t = await sequelize.transaction();
        const updateRowCount = await Poliza.update({
            nropoliza,
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
            tipopolizaid,
            tpoliza,
            tipocontrato,
            menoid,
            //llamadoid,
            vendedorid,
            //nroplaca,
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
            fechamodificacion: new Date(),
            estado,
            sucursalid,
            planid
        }, {
            where: {
                id
            }
        }, { transaction: t });

        //ARCHIVOS ELIMINADOS
        for (let i = 0; i < archivoseliminados.length; i++) {

            await Archivo.update({
                estado: 'BAJ',
                fechamodificacion: new Date()
            }, { where: { id: archivoseliminados[i].id } }, { transaction: t });

        }
        // REGISTRO DE ARCHIVOS NUEVOS
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
        if (eliminadosautomotores) {
            //DETALLE  ELIMINADOS
            for (let i = 0; i < eliminadosautomotores.length; i++) {

                await PolizaDetalle.update({
                    estado: 'BAJ',
                    fechamodificacion: new Date()
                }, { where: { id: eliminadosautomotores[i].id } }, { transaction: t });

            }
        }
        if (automotores) {
            //DETALLE AUTOMOTORES
            for (let i = 0; i < automotores.length; i++) {
                let newPolizaDetalle = await PolizaDetalle.create({
                    nrocertificado: automotores[i].nrocertificado,
                    //titular: automotores[i].titular,
                    placa: automotores[i].placa,
                    tipovehiculo: automotores[i].tipovehiculo,
                    marcavehiculo: automotores[i].marcavehiculo,
                    colorvehiculo: automotores[i].colorvehiculo,
                    aniovehiculo: automotores[i].aniovehiculo,
                    modelo: automotores[i].modelo,
                    primaindividual: automotores[i].primaindividual,
                    primanetaindividualbs: automotores[i].primanetaindividualbs,
                    primanetaindividualusd: automotores[i].primanetaindividualusd,

                    franquicia: automotores[i].franquicia,
                    valorasegurado: automotores[i].valorasegurado,
                    usuarioregistro,
                    usuariomodificacion,
                    fecharegistro: new Date(),
                    fechamodificacion: new Date(),
                    estado: 'ACT',
                    polizaid: id
                }, {
                    fields: [

                        'nrocertificado',
                        'placa',
                        'tipovehiculo',
                        'marcavehiculo',
                        'colorvehiculo',
                        'aniovehiculo',
                        'modelo',
                        'primaindividual',
                        'primanetaindividualbs',
                        'primanetaindividualusd',
                        'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                        'fechamodificacion', 'estado',
                        'polizaid']
                }, { transaction: t });
                let campos = automotores[i].campos;
                for (let j = 0; j < campos.length; j++) {
                    // listaPermisos.push( 
                    await PolizaDetalleAdicional.create({
                        polizadetalleid: id,
                        valor: campos[j].valor,
                        dato: campos[j].dato,
                        usuarioregistro,
                        usuariomodificacion: usuarioregistro,
                        fecharegistro: new Date(),
                        fechamodificacion: new Date(),
                        estado: 'ACT'
                    }, {
                        fields: [
                            'polizadetalleid',
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
        }


        await t.commit();
        const polizas = await Poliza.findOne({
            where: {
                id
            }
        }
        );
        res.json({
            message: 'Poliza update successfully',
            count: polizas
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
/** salud */
export async function createPolizaSalud(req, res) {
    const {
        nropoliza,
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
        tipopolizaid,
        tpoliza,
        tipocontrato,
        menoid,
        //llamadoid,
        vendedorid,
        //nroplaca,
        tipoemision,
        franquicia,
        valorasegurado,
        /*   fechainiciovigencia,
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
        archivos,
        //adicionales,
        personas,

        usuarioregistro,
        usuariomodificacion,
        estado = 'ACT',
        sucursalid,
        planid,
        polizaid } = req.body;
    let newPoliza;
    let t;
    try {
        t = await sequelize.transaction();
        let ingresoegreso = 'I';
        if (tipoemision == 'Anexo Exclusion' || tipoemision == 'Anexo Anulacion') {
            ingresoegreso = 'E'
        } else {
            ingresoegreso = 'I'
        }
        //const transaction= sequelize.transaction;
        newPoliza = await Poliza.create({
            nropoliza,
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
            tiporamoid,
            contratanteid,
            tomadorid,
            ejecutivoid,
            colocacionid,
            ciaspvs,
            tipopolizaid,
            tpoliza,
            tipocontrato,
            menoid,
            //llamadoid,
            vendedorid,
            //nroplaca,
            tipoemision,
            franquicia,
            valorasegurado,
            /*     fechainiciovigencia,
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
            ingresoegreso,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro: new Date(),
            fechamodificacion: new Date(),
            estado,
            sucursalid,
            planid,
            polizaid
        }, {
            fields: ['nropoliza',
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

                //'broker',
                'notas',
                'companiaseguroid',
                'subramocompaniaid',
                'tiporamoid',
                'contratanteid',
                'tomadorid',
                'ejecutivoid',
                'colocacionid',
                'ciaspvs',
                'tipopolizaid',
                'tpoliza',
                'tipocontrato',
                'menoid',
                //'llamadoid',
                'vendedorid',
                //'nroplaca',
                'tipoemision',
                'franquicia',
                'valorasegurado',

                /*     'fechainiciovigencia',
                    'fechafinvigencia',
                    'fechainclusion',
                    'prima',
                    'porcentajeprima',
                    'primaneta',
                    'porcentajecomision',
                    'detalle', */

                'comisionbs',
                'comisionusd',
                'tipocambio',
                'porcentajeprima',
                'primaneta',
                'porcentajecomision',
                'ingresoegreso',
                'usuarioregistro',
                'usuariomodificacion',
                'fecharegistro',
                'fechamodificacion',
                'estado',
                'sucursalid',
                'planid',
                'polizaid']
        }, { transaction: t });
        // step 2  archivos
        // if( archivos!) 
        for (let i = 0; i < archivos.length; i++) {
            // listaPermisos.push( 
            await Archivo.create({
                codigo: newPoliza.id,
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
        //DETALLE PERSONA
        for (let i = 0; i < personas.length; i++) {
            let newPolizaDetalle = await PolizaDetallePersona.create({
                nrocertificado: personas[i].nrocertificado,
                tipoasegurado: personas[i].tipoasegurado,
                titular: personas[i].asegurado,
                cobertura: personas[i].coberturamaternidad,
                fechanacimiento: personas[i].fechanacimiento,
                sexo: personas[i].sexo,
                ambitogeografico: personas[i].ambitogeografico,
                sistemaatencion: personas[i].sistemaatencion,

                primaindividual: personas[i].primaindividual,
                primanetaindividualbs: personas[i].primanetaindividualbs,
                primanetaindividualusd: personas[i].primanetaindividualusd,
                franquicia: personas[i].franquicia,
                valorasegurado: personas[i].valorasegurado,
                usuarioregistro,
                usuariomodificacion,
                fecharegistro: new Date(),
                fechamodificacion: new Date(),
                estado: 'ACT',
                polizaid: newPoliza.id
            }, {
                fields: [
                    'nrocertificado',
                    'tipoasegurado',
                    'titular',
                    'cobertura',
                    'fechanacimiento',
                    'sexo',
                    'ambitogeografico',
                    'sistemaatencion',

                    'primaindividual',
                    'primanetaindividualbs',
                    'primanetaindividualusd',
                    'franquicia',
                    'valorasegurado',
                    'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                    'fechamodificacion', 'estado',
                    'polizaid']
            }, { transaction: t });

            /*   //SUB DETALLE PERSONA
              let dependientes = personas[i].dependientes;
              for (let j = 0; j < dependientes.length; j++) {
                  // listaPermisos.push( 
                  await PolizaDetallePersonaTitular.create({
                      polizadetallepersonaid: newPolizaDetalle.id,
                      nombre: dependientes[j].nombre,
                      parentezco: dependientes[j].parentezco,
                      fechanacimiento: dependientes[j].fechanacimiento,
                      sexo: dependientes[j].sexo,
                      usuarioregistro,
                      usuariomodificacion: usuarioregistro,
                      fecharegistro: new Date(),
                      fechamodificacion: new Date(),
                      estado: 'ACT'
                  }, {
                      fields: [
                          'polizadetallepersonaid',
                          'nombre',
                          'parentezco',
                          'fechanacimiento',
                          'sexo',
                          'usuarioregistro',
                          'usuariomodificacion',
                          'fecharegistro',
                          'fechamodificacion',
                          'estado']
                  }, { transaction: t });
              } */

        }

        /* for (let i = 0; i < adicionales.length; i++) {
            // listaPermisos.push( 
            await PolizaDetalleAdicional.create({
                polizaid: newPoliza.id,
                valor: adicionales[i].valor,
                dato: adicionales[i].dato,
                usuarioregistro,
                usuariomodificacion: usuarioregistro,
                fecharegistro: new Date(),
                fechamodificacion: new Date(),
                estado: 'ACT'
            }, {
                fields: [
                    'polizaid',
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
        const QUERY = `select p.id, p.nropoliza, p.nrocertificado, p.fechainicio, p.fechafin, p.fechaexpedicion, p.fecharecepcion, p.tipomoneda, p.primatotal, p.formapago, p.encargadoid, p.bancoid, p.ciudadexpedicion, p.notas, p.companiaseguroid, p.subramocompaniaid, p.tiporamoid, p.contratanteid, p.tomadorid, p.ejecutivoid, p.colocacionid, p.ciaspvs, p.tipopolizaid, p.tpoliza, p.tipocontrato, p.memoid, p.vendedorid, null tipoemision, p.franquicia, p.valorasegurado, p.comisionbs, p.comisionusd, p.tipocambio, p.porcentajeprima, p.primaneta, p.porcentajecomision, p.usuarioregistro, p.usuariomodificacion, p.fecharegistro, p.fechamodificacion, p.estado, p.sucursalid, p.planid, p.polizaid 
        ,sr.nombre nombreramopadre,case when sr.id is null then r.nombre else sr.nombre end nombreramo,case when  sr.id is null then null else r.nombre end nombresubramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania ,s.nombre as sucursal,t.nombre tiporamo,pe.nombrecompleto ejecutivo,car.nombrecompleto cartera
        from poliza p
        inner join sucursal s on s.id=p.sucursalid
        inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid
        inner join ramo r on r.id=rc.ramoid
        left join ramo sr on sr.id=rc.ramopadreid
        inner join asegurado a on a.id=p.tomadorid
        inner join compania_seguro cs on cs.id=p.companiaseguroid
        inner join tipo_ramo t on t.id=p.tiporamoid
        inner join personal pe on pe.id=p.ejecutivoid
        inner join personal car on car.id=a.carteraid
        where p.id='` + newPoliza.id + `'   `;

        //console.log(QUERY);
        const poliza = await sequelize.query(QUERY
            , {
                type: QueryTypes.SELECT
            });

        if (newPoliza) {
            return res.json({
                message: 'Poliza created successfully',
                data: poliza[0]
            });
        }
    } catch (e) {
        console.log(e);
        if (t) {
            await t.rollback();
            //await newUsuario.destroy();
            if (newPoliza) {
                await Poliza.destroy({ where: { id: newPoliza.id } })
            }
        }
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function updatePolizaSalud(req, res) {
    const { id } = req.params;
    const { nropoliza,
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
        tipopolizaid,
        tpoliza,
        tipocontrato,
        menoid,
        //llamadoid,
        vendedorid,
        //nroplaca,
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
        estado,
        sucursalid, planid, archivos, archivoseliminados,
        personas, eliminadospersonas } = req.body;
    let t;
    try {
        t = await sequelize.transaction();
        const updateRowCount = await Poliza.update({
            nropoliza,
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
            tipopolizaid,
            tpoliza,
            tipocontrato,
            menoid,
            //llamadoid,
            vendedorid,
            //nroplaca,
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
            fechamodificacion: new Date(),
            estado,
            sucursalid,
            planid
        }, {
            where: {
                id
            }
        }, { transaction: t });

        //ARCHIVOS ELIMINADOS
        for (let i = 0; i < archivoseliminados.length; i++) {

            await Archivo.update({
                estado: 'BAJ',
                fechamodificacion: new Date()
            }, { where: { id: archivoseliminados[i].id } }, { transaction: t });

        }
        // REGISTRO DE ARCHIVOS NUEVOS
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
        if (eliminadospersonas) {
            //DETALLE  ELIMINADOS
            for (let i = 0; i < eliminadospersonas.length; i++) {

                await PolizaDetallePersona.update({
                    estado: 'BAJ',
                    fechamodificacion: new Date()
                }, { where: { id: eliminadospersonas[i].id } }, { transaction: t });

            }
        }
        if (personas) {
            //DETALLE PERSONA
            for (let i = 0; i < personas.length; i++) {
                let newPolizaDetalle = await PolizaDetallePersona.create({
                    nrocertificado: personas[i].nrocertificado,
                    tipoasegurado: personas[i].tipoasegurado,
                    titular: personas[i].asegurado,
                    cobertura: personas[i].coberturamaternidad,
                    fechanacimiento: personas[i].fechanacimiento,
                    sexo: personas[i].sexo,
                    ambitogeografico: personas[i].ambitogeografico,
                    sistemaatencion: personas[i].sistemaatencion,

                    primaindividual: personas[i].primaindividual,
                    primanetaindividualbs: personas[i].primanetaindividualbs,
                    primanetaindividualusd: personas[i].primanetaindividualusd,

                    franquicia: personas[i].franquicia,
                    valorasegurado: personas[i].valorasegurado,

                    usuarioregistro,
                    usuariomodificacion,
                    fecharegistro: new Date(),
                    fechamodificacion: new Date(),
                    estado: 'ACT',
                    polizaid: id
                }, {
                    fields: [
                        'nrocertificado',
                        'tipoasegurado',
                        'titular',
                        'cobertura',
                        'fechanacimiento',
                        'sexo',
                        'ambitogeografico',
                        'sistemaatencion',

                        'primaindividual',
                        'primanetaindividualbs',
                        'primanetaindividualusd',
                        'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                        'fechamodificacion', 'estado',
                        'polizaid']
                }, { transaction: t });

                /*  //SUB DETALLE PERSONA
                 let dependientes = personas[i].dependientes;
                 for (let j = 0; j < dependientes.length; j++) {
                     // listaPermisos.push( 
                     await PolizaDetallePersonaTitular.create({
                         polizadetallepersonaid: newPolizaDetalle.id,
                         nombre: dependientes[j].nombre,
                         parentezco: dependientes[j].parentezco,
                         fechanacimiento: dependientes[j].fechanacimiento,
                         sexo: dependientes[j].sexo,
                         usuarioregistro,
                         usuariomodificacion: usuarioregistro,
                         fecharegistro: new Date(),
                         fechamodificacion: new Date(),
                         estado: 'ACT'
                     }, {
                         fields: [
                             'polizadetallepersonaid',
                             'nombre',
                             'parentezco',
                             'fechanacimiento',
                             'sexo',
                             'usuarioregistro',
                             'usuariomodificacion',
                             'fecharegistro',
                             'fechamodificacion',
                             'estado']
                     }, { transaction: t });
                 } */

            }
        }
        await t.commit();
        const polizas = await Poliza.findOne({
            where: {
                id
            }
        }
        );
        res.json({
            message: 'Poliza update successfully',
            count: polizas
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
/** automotor */
export async function createPolizaGeneral(req, res) {
    const {
        nropoliza,
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
        tipopolizaid,
        tpoliza,
        tipocontrato,
        menoid,
        //llamadoid,
        vendedorid,
        //nroplaca,
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
        //adicionales,
        generales,

        usuarioregistro,
        usuariomodificacion,
        estado = 'ACT',
        sucursalid,
        planid,
        polizaid } = req.body;
    let newPoliza;
    let t;
    try {
        t = await sequelize.transaction();

        let ingresoegreso = 'I';
        if (tipoemision == 'Anexo Exclusion' || tipoemision == 'Anexo Anulacion') {
            ingresoegreso = 'E'
        } else {
            ingresoegreso = 'I'
        }
        //const transaction= sequelize.transaction;
        newPoliza = await Poliza.create({
            nropoliza,
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
            tiporamoid,
            contratanteid,
            tomadorid,
            ejecutivoid,
            colocacionid,
            ciaspvs,
            tipopolizaid,
            tpoliza,
            tipocontrato,
            menoid,
            //llamadoid,
            vendedorid,
            //nroplaca,
            tipoemision,
            franquicia,
            valorasegurado,
            /*     fechainiciovigencia,
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
            ingresoegreso,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro: new Date(),
            fechamodificacion: new Date(),
            estado,
            sucursalid,
            planid,
            polizaid
        }, {
            fields: ['nropoliza',
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

                //'broker',
                'notas',
                'companiaseguroid',
                'subramocompaniaid',
                'tiporamoid',
                'contratanteid',
                'tomadorid',
                'ejecutivoid',
                'colocacionid',
                'ciaspvs',
                'tipopolizaid',
                'tpoliza',
                'tipocontrato',
                'menoid',
                //'llamadoid',
                'vendedorid',
                //'nroplaca',
                'tipoemision',
                'franquicia',
                'valorasegurado',

                /*     'fechainiciovigencia',
                    'fechafinvigencia',
                    'fechainclusion',
                    'prima',
                    'porcentajeprima',
                    'primaneta',
                    'porcentajecomision',
                    'detalle', */

                'comisionbs',
                'comisionusd',
                'tipocambio',
                'porcentajeprima',
                'primaneta',
                'porcentajecomision',
                'ingresoegreso',
                'usuarioregistro',
                'usuariomodificacion',
                'fecharegistro',
                'fechamodificacion',
                'estado',
                'sucursalid',
                'planid',
                'polizaid']
        }, { transaction: t });
        // step 2  archivos
        // if( archivos!) 
        for (let i = 0; i < archivos.length; i++) {
            // listaPermisos.push( 
            await Archivo.create({
                codigo: newPoliza.id,
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
        //DETALLE GENERAL
        for (let i = 0; i < generales.length; i++) {
            let newPolizaDetalle = await PolizaDetalleGeneral.create({
                //titular: generales[i].titular,
                objetoasegurado: generales[i].objetoasegurado,
                nrocertificado: generales[i].nrocertificado,
                tipopolizageneral: generales[i].tipopolizageneral,
                direccion: generales[i].direccion,

                primaindividual: generales[i].primaindividual,
                /*     primanetaindividualbs: generales[i].primanetaindividualbs,
                    primanetaindividualusd: generales[i].primanetaindividualusd, */

                franquicia: generales[i].franquicia,
                valorasegurado: generales[i].valorasegurado,

                usuarioregistro,
                usuariomodificacion,
                fecharegistro: new Date(),
                fechamodificacion: new Date(),
                estado: 'ACT',
                polizaid: newPoliza.id
            }, {
                fields: [
                    'objetoasegurado',
                    'nrocertificado',
                    'tipopolizageneral',
                    'direccion',

                    'primaindividual',
                    'primanetaindividualbs',
                    'primanetaindividualusd',
                    'franquicia',
                    'valorasegurado',
                    'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                    'fechamodificacion', 'estado',
                    'polizaid']
            }, { transaction: t });


        }
        await t.commit();
        const QUERY = `select p.id, p.nropoliza, p.nrocertificado, p.fechainicio, p.fechafin, p.fechaexpedicion, p.fecharecepcion, p.tipomoneda, p.primatotal, p.formapago, p.encargadoid, p.bancoid, p.ciudadexpedicion, p.notas, p.companiaseguroid, p.subramocompaniaid, p.tiporamoid, p.contratanteid, p.tomadorid, p.ejecutivoid, p.colocacionid, p.ciaspvs, p.tipopolizaid, p.tpoliza, p.tipocontrato, p.memoid, p.vendedorid, null tipoemision, p.franquicia, p.valorasegurado, p.comisionbs, p.comisionusd, p.tipocambio, p.porcentajeprima, p.primaneta, p.porcentajecomision, p.usuarioregistro, p.usuariomodificacion, p.fecharegistro, p.fechamodificacion, p.estado, p.sucursalid, p.planid, p.polizaid 
        ,sr.nombre nombreramopadre,case when sr.id is null then r.nombre else sr.nombre end nombreramo,case when  sr.id is null then null else r.nombre end nombresubramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania ,s.nombre as sucursal,t.nombre tiporamo,pe.nombrecompleto ejecutivo,car.nombrecompleto cartera
        from poliza p
        inner join sucursal s on s.id=p.sucursalid
        inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid
        inner join ramo r on r.id=rc.ramoid
        left join ramo sr on sr.id=rc.ramopadreid
        inner join asegurado a on a.id=p.tomadorid
        inner join compania_seguro cs on cs.id=p.companiaseguroid
        inner join tipo_ramo t on t.id=p.tiporamoid
        inner join personal pe on pe.id=p.ejecutivoid
        inner join personal car on car.id=a.carteraid
        where p.id='` + newPoliza.id + `'   `;

        //console.log(QUERY);
        const poliza = await sequelize.query(QUERY
            , {
                type: QueryTypes.SELECT
            });

        if (newPoliza) {
            return res.json({
                message: 'Poliza created successfully',
                data: poliza[0]
            });
        }
    } catch (e) {
        console.log(e);
        if (t) {
            await t.rollback();
            //await newUsuario.destroy();
            if (newPoliza) {
                await Poliza.destroy({ where: { id: newPoliza.id } })
            }
        }
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function updatePolizaGeneral(req, res) {
    const { id } = req.params;
    const { nropoliza,
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
        tipopolizaid,
        tpoliza,
        tipocontrato,
        menoid,
        //llamadoid,
        vendedorid,
        //nroplaca,
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
        estado,
        sucursalid, planid, archivos, archivoseliminados,
        generales, eliminadosgenerales } = req.body;
    let t;
    try {
        t = await sequelize.transaction();
        const updateRowCount = await Poliza.update({
            nropoliza,
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
            tipopolizaid,
            tpoliza,
            tipocontrato,
            menoid,
            //llamadoid,
            vendedorid,
            //nroplaca,
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
            fechamodificacion: new Date(),
            estado,
            sucursalid,
            planid
        }, {
            where: {
                id
            }
        }, { transaction: t });

        //ARCHIVOS ELIMINADOS
        for (let i = 0; i < archivoseliminados.length; i++) {

            await Archivo.update({
                estado: 'BAJ',
                fechamodificacion: new Date()
            }, { where: { id: archivoseliminados[i].id } }, { transaction: t });

        }
        // REGISTRO DE ARCHIVOS NUEVOS
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
        if (eliminadosgenerales) {
            //DETALLE  ELIMINADOS
            for (let i = 0; i < eliminadosgenerales.length; i++) {

                await PolizaDetalleGeneral.update({
                    estado: 'BAJ',
                    fechamodificacion: new Date()
                }, { where: { id: eliminadosgenerales[i].id } }, { transaction: t });

            }
        }

        if (generales) {
            //DETALLE GENERAL
            for (let i = 0; i < generales.length; i++) {
                let newPolizaDetalle = await PolizaDetalleGeneral.create({
                    //titular: generales[i].titular,
                    objetoasegurado: generales[i].objetoasegurado,
                    nrocertificado: generales[i].nrocertificado,
                    tipopolizageneral: generales[i].tipopolizageneral,
                    direccion: generales[i].direccion,

                    primaindividual: generales[i].primaindividual,

                    franquicia: generales[i].franquicia,
                    valorasegurado: generales[i].valorasegurado,
                    /*  primanetaindividualbs: generales[i].primanetaindividualbs,
                     primanetaindividualusd: generales[i].primanetaindividualusd, */

                    usuarioregistro,
                    usuariomodificacion,
                    fechamodificacion: new Date(),
                    estado: 'ACT',
                    polizaid: id
                }, {
                    fields: [
                        'objetoasegurado',
                        'nrocertificado',
                        'tipopolizageneral',
                        'direccion',

                        'primaindividual',
                        'primanetaindividualbs',
                        'primanetaindividualusd',
                        'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                        'fechamodificacion', 'estado',
                        'polizaid']
                }, { transaction: t });


            }
        }


        await t.commit();
        const polizas = await Poliza.findOne({
            where: {
                id
            }
        }
        );
        res.json({
            message: 'Poliza update successfully',
            count: polizas
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

export async function getOnePoliza(req, res) {
    try {
        const { id } = req.params;
        const poliza = await Poliza.findOne({
            where: {
                id
            }
        });
        res.json({
            data: poliza
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function polizasPorSucursal(req, res) {
    try {
        const { sucursalid } = req.params;
        const poliza = await Poliza.findOne({
            where: {
                sucursalid, estado: 'ACT'
            }
        });
        res.json({
            data: poliza
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function deletePoliza(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await Poliza.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Poliza deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function bajaPoliza(req, res) {
    const { id } = req.params;

    console.log("bajaPoliza");
    const {
        usuariomodificacion
    } = req.body;
    try {
        const updateRowCount = await Poliza.update({
            usuariomodificacion,
            fechamodificacion: new Date(),
            estado: 'BAJ'
        }, {
            where: {
                id
            }
        });
        const poliza = await Poliza.findOne({
            where: {
                id
            }
        });
        res.json({
            message: 'Poliza baja successfully',
            data: poliza
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}


/**consultas de polizas */

export async function getPolizaPorTipoYSucursal(req, res) {
    const { tipopolizaid, sucursalid } = req.params;
    try {

        let query = `select p.*,t.nombre tiporamo,s.nombre as sucursal 
            from poliza p 
            inner join sucursal s on s.id=p.sucursalid  
             inner join tipo_ramo t on t.id=p.tiporamoid  "
            where s.id= '` + sucursalid + `' and p.tpoliza='` + tipopolizaid + `' order by p.fechamodificacion desc `;
        const polizas = await sequelize.query(query
            , {
                type: QueryTypes.SELECT
            });
        res.json({ polizas });

        //const polizas = await Poliza.findAll({ where: { tipopolizaid, sucursalid, estado: 'ACT' } });
        //const polizas = await Poliza.findAll({ where: { tpoliza: tipopolizaid, sucursalid, estado: 'ACT' } });

        res.json({ polizas });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getPolizasPorTipoYEmpresa(req, res) {
    const { tipopolizaid, empresaid } = req.params;
    try {
        let query = `select p.*,t.nombre tiporamo,s.nombre as sucursal 
            from poliza p 
            inner join sucursal s on s.id=p.sucursalid  
            inner join tipo_ramo t on t.id=p.tiporamoid  
            where s.empresaid= '` + empresaid + `' and p.tpoliza='` + tipopolizaid + `' order by p.fechamodificacion desc `;
        const polizas = await sequelize.query(query
            , {
                type: QueryTypes.SELECT
            });
        res.json({ polizas });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getPolizasPorTipoRamoYEmpresa(req, res) {
    const { tipopoliza, tiporamoid, empresaid } = req.params;
    const { fechainicio, fechafin } = req.body;
    try {
        let query = `select p.* ,t.nombre tiporamo,sr.nombre nombreramopadre,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal 
            from poliza p 
            inner join sucursal s on s.id=p.sucursalid  
            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid 
            inner join ramo r on r.id=rc.ramoid 
            left join ramo sr on sr.id=rc.ramopadreid 
            inner join asegurado a on a.id=p.tomadorid 
            inner join compania_seguro cs on cs.id=p.companiaseguroid 
            inner join tipo_ramo t on t.id=p.tiporamoid  
            where s.empresaid= '` + empresaid + `' and p.tpoliza='` + tipopoliza + `' and p.tiporamoid='` + tiporamoid + `'  
            and to_char(p.fecharegistro, 'YYYYMMDD')::integer>= `+ fechainicio + ` and to_char(p.fecharegistro, 'YYYYMMDD')::integer<= ` + fechafin + ` and p.estado  NOT IN ('BAJ') order by p.fechamodificacion desc `;
        //   console.log(query);
        const polizas = await sequelize.query(query
            , {
                type: QueryTypes.SELECT
            });
        //console.log(JSON.stringify(usuarios[0], null, 2));

        res.json({ polizas });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getPolizasPorTipoRamoYSucursal(req, res) {
    const { tipopoliza, tiporamoid, sucursalid } = req.params;
    const { fechainicio, fechafin } = req.body;
    try {
        let query = `select p.* ,t.nombre tiporamo,sr.nombre nombreramopadre,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal
        from poliza p
        inner join sucursal s on s.id=p.sucursalid
        inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid
        inner join ramo r on r.id=rc.ramoid
        left join ramo sr on sr.id=rc.ramopadreid
        inner join asegurado a on a.id=p.tomadorid
        inner join compania_seguro cs on cs.id=p.companiaseguroid
        inner join tipo_ramo t on t.id=p.tiporamoid
        where s.id='` + sucursalid + `'  and p.tpoliza='` + tipopoliza + `' and p.tiporamoid='` + tiporamoid + `'  and to_char(p.fecharegistro, 'YYYYMMDD')::integer>= ` + fechainicio + ` and to_char(p.fecharegistro, 'YYYYMMDD')::integer<= ` + fechafin + ` and p.estado NOT IN ('BAJ') order by p.fechamodificacion desc `;
        const polizas = await sequelize.query(query
            , {
                type: QueryTypes.SELECT
            });
        //console.log(JSON.stringify(usuarios[0], null, 2));
        //console.log(query);
        res.json({ polizas });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getPolizaHijo(req, res) {
    const { polizaid } = req.params;
    try {
        let query = `select p.* ,t.nombre tiporamo,sr.nombre nombreramopadre,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal
        from poliza p
        inner join sucursal s on s.id=p.sucursalid
        inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid
        inner join ramo r on r.id=rc.ramoid
        left join ramo sr on sr.id=rc.ramopadreid
        inner join asegurado a on a.id=p.tomadorid
        inner join compania_seguro cs on cs.id=p.companiaseguroid
        inner join tipo_ramo t on t.id=p.tiporamoid
        where p.polizaid='` + polizaid + `'   and p.estado NOT IN ('BAJ') order by p.fechamodificacion desc `;
        const polizas = await sequelize.query(query
            , {
                type: QueryTypes.SELECT
            });
        //console.log(JSON.stringify(usuarios[0], null, 2));
        //console.log(query);
        res.json({ polizas });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function polizasPorEmpresaGeneral(req, res) {
    const { empresaid } = req.params;
    const { fechainicio, fechafin } = req.body;
    try {
        let query = `select p.* ,t.nombre tiporamo,sr.nombre nombreramopadre,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal 
            from poliza p 
            inner join sucursal s on s.id=p.sucursalid  
            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid 
            inner join ramo r on r.id=rc.ramoid 
            left join ramo sr on sr.id=rc.ramopadreid 
            inner join asegurado a on a.id=p.tomadorid 
            inner join compania_seguro cs on cs.id=p.companiaseguroid 
            inner join tipo_ramo t on t.id=p.tiporamoid  
            where s.empresaid= '` + empresaid + `' 
            and to_char(p.fecharegistro, 'YYYYMMDD')::integer>= `+ fechainicio + ` and to_char(p.fecharegistro, 'YYYYMMDD')::integer<= ` + fechafin + ` and p.estado  NOT IN ('BAJ') order by p.fechamodificacion desc `;
        //   console.log(query);
        const polizas = await sequelize.query(query
            , {
                type: QueryTypes.SELECT
            });
        //console.log(JSON.stringify(usuarios[0], null, 2));

        res.json({ polizas });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function polizasPorSucursalGeneral(req, res) {
    const { tipopoliza, tiporamoid, sucursalid } = req.params;
    const { fechainicio, fechafin } = req.body;
    try {
        let query = `select p.* ,t.nombre tiporamo,sr.nombre nombreramopadre,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal
        from poliza p
        inner join sucursal s on s.id=p.sucursalid
        inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid
        inner join ramo r on r.id=rc.ramoid
        left join ramo sr on sr.id=rc.ramopadreid
        inner join asegurado a on a.id=p.tomadorid
        inner join compania_seguro cs on cs.id=p.companiaseguroid
        inner join tipo_ramo t on t.id=p.tiporamoid
        where s.id='` + sucursalid + `'  and to_char(p.fecharegistro, 'YYYYMMDD')::integer>= ` + fechainicio + ` and to_char(p.fecharegistro, 'YYYYMMDD')::integer<= ` + fechafin + ` and p.estado NOT IN ('BAJ') order by p.fechamodificacion desc `;
        const polizas = await sequelize.query(query
            , {
                type: QueryTypes.SELECT
            });
        //console.log(JSON.stringify(usuarios[0], null, 2));
        //console.log(query);
        res.json({ polizas });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}



export async function getPolizasPorEmpresaFechaVencimiento(req, res) {
    const { empresaid } = req.params;
    const { fechainicio, fechafin } = req.body;
    try {
        let query = `select p.* ,t.nombre tiporamo,sr.nombre nombreramopadre,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal 
            from poliza p
            inner join sucursal s on s.id=p.sucursalid
            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid
            inner join ramo r on r.id=rc.ramoid
            left join ramo sr on sr.id=rc.ramopadreid
            inner join asegurado a on a.id=p.tomadorid
            inner join compania_seguro cs on cs.id=p.companiaseguroid
             inner join tipo_ramo t on t.id=p.tiporamoid 
            where s.empresaid= '` + empresaid + `'   and to_char(p.fechafin, 'YYYYMMDD')::integer>= ` + fechainicio + ` and to_char(p.fechafin, 'YYYYMMDD')::integer<= ` + fechafin + ` and p.estado NOT IN ('BAJ') order by p.fechamodificacion desc `;
        //console.log(query);
        const polizas = await sequelize.query(query
            , {
                type: QueryTypes.SELECT
            });
        //console.log(JSON.stringify(usuarios[0], null, 2));

        res.json({ polizas });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getPolizasPorSucursalVencimiento(req, res) {
    const { sucursalid } = req.params;
    const { fechainicio, fechafin } = req.body;
    try {
        let query = `select p.*,t.nombre tiporamo ,sr.nombre nombreramopadre,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal  
          
            from poliza p 
            inner join sucursal s on s.id=p.sucursalid  
            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid 
            inner join ramo r on r.id=rc.ramoid 
            left join ramo sr on sr.id=rc.ramopadreid 
            inner join asegurado a on a.id=p.tomadorid 
            inner join compania_seguro cs on cs.id=p.companiaseguroid 
            inner join tipo_ramo t on t.id=p.tiporamoid  "
            where s.id='` + sucursalid + `'    and to_char(p.fechafin, 'YYYYMMDD')::integer>= ` + fechainicio + ` and to_char(p.fechafin, 'YYYYMMDD')::integer<= ` + fechafin + ` and p.estado NOT IN ('BAJ') order by p.fechamodificacion desc `;
        const polizas = await sequelize.query(query
            , {
                type: QueryTypes.SELECT
            });
        //console.log(JSON.stringify(usuarios[0], null, 2));
        //console.log(query);
        res.json({ polizas });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}


export async function getPolizasPorTomadorYEmpresa(req, res) {
    const { tomadorid, empresaid } = req.params;
    try {
        //console.log(tomadorid, empresaid );
        let query = `select p.* ,t.nombre tiporamo,sr.nombre nombreramopadre,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal 
            from poliza p 
            inner join sucursal s on s.id=p.sucursalid  
            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid 
            inner join ramo r on r.id=rc.ramoid 
            left join ramo sr on sr.id=rc.ramopadreid 
            inner join asegurado a on a.id=p.tomadorid 
            inner join compania_seguro cs on cs.id=p.companiaseguroid 
            inner join tipo_ramo t on t.id=p.tiporamoid  
            where s.empresaid= '` + empresaid + `' and a.id='` + tomadorid + `' and p.estado NOT IN ('BAJ') order by p.fechamodificacion desc `;
        //console.log(query );
        const polizas = await sequelize.query(query
            , {
                type: QueryTypes.SELECT
            });
        //console.log(JSON.stringify(usuarios[0], null, 2));

        res.json({ polizas });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getPolizasPorTomadorYSucursal(req, res) {
    const { tomadorid, sucursalid } = req.params;
    try {

        const polizas = await sequelize.query(`select p.* t.nombre tiporamo,sr.nombre nombreramopadre,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania ,s.nombre as sucursal 
           
            from poliza p 
            inner join sucursal s on s.id=p.sucursalid  
            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid 
            inner join ramo r on r.id=rc.ramoid 
            left join ramo sr on sr.id=rc.ramopadreid 
            inner join asegurado a on a.id=p.tomadorid 
            inner join compania_seguro cs on cs.id=p.companiaseguroid 
            inner join tipo_ramo t on t.id=p.tiporamoid  
            where s.id='` + sucursalid + `'  and a.id='` + tomadorid + `' and p.estado NOT IN ('BAJ')  order by p.fechamodificacion desc `
            , {
                type: QueryTypes.SELECT
            });
        //console.log(JSON.stringify(usuarios[0], null, 2));

        res.json({ polizas });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getPolizasPorEmpresaSinMemo(req, res) {
    const { empresaid } = req.params;
    try {

        const polizas = await sequelize.query(`select p.id, p.nropoliza, p.nrocertificado, p.fechainicio, p.fechafin, p.fechaexpedicion, p.fecharecepcion, p.tipomoneda, p.primatotal, p.formapago, p.encargadoid, p.bancoid, p.ciudadexpedicion, p.notas, p.companiaseguroid, p.subramocompaniaid, p.tiporamoid, p.contratanteid, p.tomadorid, p.ejecutivoid, p.colocacionid, p.ciaspvs, p.tipopolizaid, p.tpoliza, p.tipocontrato, p.memoid, p.vendedorid, null tipoemision, p.franquicia, p.valorasegurado, p.comisionbs, p.comisionusd, p.tipocambio, p.porcentajeprima, p.primaneta, p.porcentajecomision, p.usuarioregistro, p.usuariomodificacion, p.fecharegistro, p.fechamodificacion, p.estado, p.sucursalid, p.planid, p.polizaid 
            ,sr.nombre nombreramopadre,case when sr.id is null then r.nombre else sr.nombre end nombreramo,case when  sr.id is null then null else r.nombre end nombresubramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal ,t.nombre tiporamo,pe.nombrecompleto ejecutivo,car.nombrecompleto cartera
            from poliza p
            inner join sucursal s on s.id=p.sucursalid
            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid
            inner join ramo r on r.id=rc.ramoid
            left join ramo sr on sr.id=rc.ramopadreid
            inner join asegurado a on a.id=p.tomadorid
            inner join tipo_ramo t on t.id=p.tiporamoid
            inner join compania_seguro cs on cs.id=p.companiaseguroid
            inner join personal pe on pe.id=p.ejecutivoid
            inner join personal car on car.id=a.carteraid 
            left join memo m on m.polizaid=p.id and m.estado='ACT' 
            where m.polizaid is null and  s.empresaid= '` + empresaid + `' AND p.estado IN ('ACT','CER') order by p.fechamodificacion desc `
            , {
                type: QueryTypes.SELECT
            });
        //console.log(JSON.stringify(usuarios[0], null, 2));

        res.json({ polizas });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getPolizasPorSucursalSinMemo(req, res) {
    const { sucursalid } = req.params;
    try {

        const QUERY = `select p.id, p.nropoliza, p.nrocertificado, p.fechainicio, p.fechafin, p.fechaexpedicion, p.fecharecepcion, p.tipomoneda, p.primatotal, p.formapago, p.encargadoid, p.bancoid, p.ciudadexpedicion, p.notas, p.companiaseguroid, p.subramocompaniaid, p.tiporamoid, p.contratanteid, p.tomadorid, p.ejecutivoid, p.colocacionid, p.ciaspvs, p.tipopolizaid, p.tpoliza, p.tipocontrato, p.memoid, p.vendedorid, null tipoemision, p.franquicia, p.valorasegurado, p.comisionbs, p.comisionusd, p.tipocambio, p.porcentajeprima, p.primaneta, p.porcentajecomision, p.usuarioregistro, p.usuariomodificacion, p.fecharegistro, p.fechamodificacion, p.estado, p.sucursalid, p.planid, p.polizaid 
            ,sr.nombre nombreramopadre,case when sr.id is null then r.nombre else sr.nombre end nombreramo,case when  sr.id is null then null else r.nombre end nombresubramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania ,s.nombre as sucursal,t.nombre tiporamo ,pe.nombrecompleto ejecutivo,car.nombrecompleto cartera
            from poliza p 
            inner join sucursal s on s.id=p.sucursalid  
            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid
            inner join ramo r on r.id=rc.ramoid 
            left join ramo sr on sr.id=rc.ramopadreid 
            inner join asegurado a on a.id=p.tomadorid 
            inner join compania_seguro cs on cs.id=p.companiaseguroid 
            left join memo m on m.polizaid=p.id and m.estado='ACT' 
            inner join tipo_ramo t on t.id=p.tiporamoid 
            inner join personal pe on pe.id=p.ejecutivoid
            inner join personal car on car.id=a.carteraid
            where m.polizaid is null and s.id='` + sucursalid + `'   and p.estado IN ('ACT','CON','CER') order by p.fechamodificacion desc `;

        //console.log(QUERY);
        const polizas = await sequelize.query(QUERY
            , {
                type: QueryTypes.SELECT
            });
        //console.log(JSON.stringify(usuarios[0], null, 2));

        res.json({ polizas });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

/** metodos de siniestro */

export async function getPolizasPorSucursal(req, res) {
    const { sucursalid } = req.params;
    try {

        const polizas = await sequelize.query(`select p.id,p.nropoliza,p.nrocertificado,p.fechainicio,p.fechafin,p.fechaexpedicion 
            ,p.primatotal,p.valorasegurado,p.tpoliza,c.nombre as nombrecontratante,p.fecharegistro 
             ,sr.nombre nombreramopadre,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal,t.nombre tiporamo 
            from poliza p 
            inner join sucursal s on s.id=p.sucursalid  
            inner join contratante c on c.id=p.contratanteid  
            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid 
            inner join ramo r on r.id=rc.ramoid 
            left join ramo sr on sr.id=rc.ramopadreid 
            inner join asegurado a on a.id=p.tomadorid 
            inner join compania_seguro cs on cs.id=p.companiaseguroid 
            inner join memo m on m.polizaid=p.id and m.estado='ACT' 
             inner join tipo_ramo t on t.id=p.tiporamoid  
            where  s.id= '` + sucursalid + `'  and p.estado IN ('ACT','CER') order by p.fechamodificacion desc `
            , {
                type: QueryTypes.SELECT
            });


        /*            const polizas = await sequelize.query("call pa_polizas_por_sucursal(:params) ", { replacements: {params : [sucursalid]} }
                       , {
                           type: QueryTypes.SELECT
                       }); */

        /*   const polizas = await sequelize.query("select * from pa_polizas_por_sucursal('`+sucursalid+`') ", {
              type: QueryTypes.SELECT
          }); */
        //console.log(JSON.stringify(usuarios[0], null, 2));

        res.json({ polizas });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getPolizasPorEmpresa(req, res) {
    const { empresaid } = req.params;
    try {

        const polizas = await sequelize.query(`select p.id,p.nropoliza,p.nrocertificado,p.fechainicio,p.fechafin,p.fechaexpedicion 
            ,p.primatotal ,p.valorasegurado,p.tpoliza,c.nombre as nombrecontratante,p.fecharegistro 
             ,sr.nombre nombreramopadre,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal, t.nombre tiporamo 
            from poliza p 
            inner join sucursal s on s.id=p.sucursalid  
            inner join contratante c on c.id=p.contratanteid  
            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid 
            inner join ramo r on r.id=rc.ramoid 
            left join ramo sr on sr.id=rc.ramopadreid 
            inner join asegurado a on a.id=p.tomadorid 
            inner join compania_seguro cs on cs.id=p.companiaseguroid 
            inner join memo m on m.polizaid=p.id and m.estado='ACT' 
             inner join tipo_ramo t on t.id=p.tiporamoid  
            where  s.empresaid= '` + empresaid + `'  and p.estado IN ('ACT','CER') order by p.fechamodificacion desc `
            , {
                type: QueryTypes.SELECT
            });
        //console.log(JSON.stringify(usuarios[0], null, 2));

        res.json({ polizas });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getPolizasPorSucursalYTipo(req, res) {
    const { sucursalid, tipopolizaid, tiporamoid } = req.params;
    try {

        const polizas = await sequelize.query(`select p.id,p.nropoliza,p.nrocertificado,p.fechainicio,p.fechafin,p.fechaexpedicion 
            ,p.primatotal,p.valorasegurado,p.tpoliza,c.nombre as nombrecontratante,p.fecharegistro 
             ,sr.nombre nombreramopadre,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal ,t.nombre tiporamo 
            from poliza p 
            inner join sucursal s on s.id=p.sucursalid  
            inner join contratante c on c.id=p.contratanteid  
            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid 
            inner join ramo r on r.id=rc.ramoid 
            left join ramo sr on sr.id=rc.ramopadreid 
            inner join asegurado a on a.id=p.tomadorid 
            inner join compania_seguro cs on cs.id=p.companiaseguroid 
            inner join memo m on m.polizaid=p.id and m.estado='ACT' 
             inner join tipo_ramo t on t.id=p.tiporamoid  
            where  s.id= '` + sucursalid + `'  and p.estado IN ('ACT','CER')  and  p.tpoliza='` + tipopolizaid + `' and p.tiporamoid='` + tiporamoid + `'  order by p.fechamodificacion desc `
            , {
                type: QueryTypes.SELECT
            });


        /*            const polizas = await sequelize.query("call pa_polizas_por_sucursal(:params) ", { replacements: {params : [sucursalid]} }
                       , {
                           type: QueryTypes.SELECT
                       }); */

        /*   const polizas = await sequelize.query("select * from pa_polizas_por_sucursal('`+sucursalid+`') ", {
              type: QueryTypes.SELECT
          }); */
        //console.log(JSON.stringify(usuarios[0], null, 2));

        res.json({ polizas });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getPolizasPorEmpresaYTipo(req, res) {
    const { empresaid, tipopolizaid, tiporamoid } = req.params;
    try {

        const polizas = await sequelize.query(`select p.id,p.nropoliza,p.nrocertificado,p.fechainicio,p.fechafin,p.fechaexpedicion 
            ,p.primatotal ,p.valorasegurado,p.tpoliza,c.nombre as nombrecontratante,p.fecharegistro 
             ,sr.nombre nombreramopadre,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal ,t.nombre tiporamo 
            from poliza p 
            inner join sucursal s on s.id=p.sucursalid  
            inner join contratante c on c.id=p.contratanteid  
            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid 
            inner join ramo r on r.id=rc.ramoid 
            left join ramo sr on sr.id=rc.ramopadreid 
            inner join asegurado a on a.id=p.tomadorid 
            inner join compania_seguro cs on cs.id=p.companiaseguroid 
            inner join memo m on m.polizaid=p.id and m.estado='ACT' 
             inner join tipo_ramo t on t.id=p.tiporamoid  
            where  s.empresaid= '` + empresaid + `'  and p.estado IN ('ACT','CER') and  p.tpoliza='` + tipopolizaid + `' and p.tiporamoid='` + tiporamoid + `' order by p.fechamodificacion desc `
            , {
                type: QueryTypes.SELECT
            });
        //console.log(JSON.stringify(usuarios[0], null, 2));

        res.json({ polizas });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}


/**busquedas por detalle */

export async function getBuscarPolizasDetallePorSucursal(req, res) {
    const { sucursalid } = req.params;
    const { dato } = req.body;
    try {

        const polizas = await sequelize.query(`	select p.*
        from poliza p 
        inner join poliza_detalle_automotor pda2 on pda2 .polizaid =p.id  
        inner join sucursal s on s.id=p.sucursalid  
        where (pda2.placa like '%`+ dato + `%' or pda2.colorvehiculo like '%` + dato + `%' or pda2.marcavehiculo like '%` + dato + `%' or pda2.titular like '%` + dato + `%') 
        and  s.id= '` + sucursalid + `'  and p.estado IN ('ACT','CER')  
        
        union 
        
        select p.*
        from poliza p 
       inner join poliza_detalle_general pda2 on pda2 .polizaid =p.id  
        inner join sucursal s on s.id=p.sucursalid  
        where (pda2.direccion like '%`+ dato + `%' or pda2.nrocertificado like '%` + dato + `%' ) 
        and  s.id= '` + sucursalid + `'  and p.estado IN ('ACT','CER') 
        
        union 
        
        select p.*
        from poliza p 
       inner join poliza_detalle_persona pda2 on pda2 .polizaid =p.id  
        inner join sucursal s on s.id=p.sucursalid  
        where (pda2.tipoasegurado like '%`+ dato + `%' or pda2.titular like '%` + dato + `%' ) 
        and  s.id= '` + sucursalid + `'  and p.estado IN ('ACT','CER')

        order by p.fechamodificacion desc  `
            //where (pda2.placa like '%`+dato+`%' or pda2.colorvehiculo like '%`+dato+`%' or pda2.marcavehiculo like '%`+dato+`%' or pda2.titular like '%`+dato+`%') s.id= '` + sucursalid + `'  and p.estado IN ('ACT','CER')  and  p.tpoliza='` + tipopolizaid + `'  order by p.fechamodificacion desc `
            , {
                type: QueryTypes.SELECT
            });


        res.json({ data: polizas });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getBuscarPolizasDetallePorEmpresa(req, res) {
    const { empresaid } = req.params;
    //console.log( req.body)
    const { dato } = req.body;
    try {

        const polizas = await sequelize.query(`	select p.*,s.nombre sucursal,r.nombre ramo,cs.nombre companiaseguro
        from poliza p 
        inner join poliza_detalle_automotor pda2 on pda2 .polizaid =p.id  
        inner join sucursal s on s.id=p.sucursalid  
        inner join sub_ramo_compania sr on sr.id=subramocompaniaid
        inner join ramo r on r.id=sr.ramoid       
        inner join compania_seguro cs  on cs.id=p.companiaseguroid 
        where (pda2.placa like '%`+ dato + `%' or pda2.colorvehiculo like '%` + dato + `%' or pda2.marcavehiculo like '%` + dato + `%' or pda2.titular like '%` + dato + `%'
        or pda2.nrocertificado like '%`+ dato + `%') 
        and  s.empresaid= '` + empresaid + `'  and p.estado IN ('ACT','CER')  
        
        union 
        
        select p.*,s.nombre sucursal,r.nombre ramo,cs.nombre companiaseguro
        from poliza p 
       inner join poliza_detalle_general pda2 on pda2 .polizaid =p.id  
        inner join sucursal s on s.id=p.sucursalid  
        inner join sub_ramo_compania sr on sr.id=subramocompaniaid
        inner join ramo r on r.id=sr.ramoid       
        inner join compania_seguro cs  on cs.id=p.companiaseguroid 
        where (pda2.direccion like '%`+ dato + `%' or pda2.nrocertificado like '%` + dato + `%' ) 
        and  s.empresaid= '` + empresaid + `'  and p.estado IN ('ACT','CER') 
        
        union 
        
        select p.*,s.nombre sucursal,r.nombre ramo,cs.nombre companiaseguro
        from poliza p 
       inner join poliza_detalle_persona pda2 on pda2 .polizaid =p.id  
        inner join sucursal s on s.id=p.sucursalid  
        inner join sub_ramo_compania sr on sr.id=subramocompaniaid
        inner join ramo r on r.id=sr.ramoid       
        inner join compania_seguro cs  on cs.id=p.companiaseguroid 
        where (pda2.tipoasegurado like '%`+ dato + `%' or pda2.titular like '%` + dato + `%' or pda2.nrocertificado like '%` + dato + `%' ) 
        and  s.empresaid= '` + empresaid + `'  and p.estado IN ('ACT','CER')


        order by fechamodificacion desc  `
            //where (pda2.placa like '%`+dato+`%' or pda2.colorvehiculo like '%`+dato+`%' or pda2.marcavehiculo like '%`+dato+`%' or pda2.titular like '%`+dato+`%') s.id= '` + sucursalid + `'  and p.estado IN ('ACT','CER')  and  p.tpoliza='` + tipopolizaid + `'  order by p.fechamodificacion desc `
            , {
                type: QueryTypes.SELECT
            });


        res.json({ data: polizas });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getPolizasDetalleAutomotorPorSucursalYTipo(req, res) {
    const { dato, sucursalid, tipopolizaid } = req.params;
    try {

        const polizas = await sequelize.query(`select p.*
            from poliza p 
            inner join poliza_detalle_automotor pda2 on pda2 .polizaid =p.id  
            inner join sucursal s on s.id=p.sucursalid  
            where (pda2.placa like '%`+ dato + `%' or pda2.colorvehiculo like '%` + dato + `%' or pda2.marcavehiculo like '%` + dato + `%' or pda2.titular like '%` + dato + `%') s.id= '` + sucursalid + `'  and p.estado IN ('ACT','CER')  and  p.tpoliza='` + tipopolizaid + `'  order by p.fechamodificacion desc `
            , {
                type: QueryTypes.SELECT
            });


        res.json({ data: polizas });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getPolizasDetalleAutomotorPorEmpresaYTipo(req, res) {
    const { dato, empresaid, tipopolizaid } = req.params;
    try {

        const polizas = await sequelize.query(`select p.*
        from poliza p 
        inner join poliza_detalle_automotor pda2 on pda2 .polizaid =p.id  
        inner join sucursal s on s.id=p.sucursalid  
        inner join empresa e on e.id =s.empresaid  
        where (pda2.placa like '%`+ dato + `%' or pda2.colorvehiculo like '%` + dato + `%' or pda2.marcavehiculo like '%` + dato + `%' or pda2.titular like '%` + dato + `%') e.id= '` + empresaid + `'  and p.estado IN ('ACT','CER')  and  p.tpoliza='` + tipopolizaid + `'  order by p.fechamodificacion desc `
            , {
                type: QueryTypes.SELECT
            });


        res.json({ data: polizas });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getPolizasDetalleGeneralPorSucursalYTipo(req, res) {
    const { dato, sucursalid, tipopolizaid } = req.params;
    try {

        const polizas = await sequelize.query(`select p.*
            from poliza p 
            inner join poliza_detalle_general pda2 on pda2 .polizaid =p.id  
            inner join sucursal s on s.id=p.sucursalid  
            where (pda2.direccion like '%`+ dato + `%' or pda2.nrocertificado like '%` + dato + `%' ) s.id= '` + sucursalid + `'  and p.estado IN ('ACT','CER')  and  p.tpoliza='` + tipopolizaid + `'  order by p.fechamodificacion desc `
            , {
                type: QueryTypes.SELECT
            });


        res.json({ data: polizas });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getPolizasDetalleGeneralPorEmpresaYTipo(req, res) {
    const { dato, empresaid, tipopolizaid } = req.params;
    try {

        const polizas = await sequelize.query(`select p.*
        from poliza p 
        inner join poliza_detalle_general pda2 on pda2 .polizaid =p.id  
        inner join sucursal s on s.id=p.sucursalid  
        inner join empresa e on e.id =s.empresaid  
        where (pda2.direccion like '%`+ dato + `%' or pda2.nrocertificado like '%` + dato + `%' ) e.id= '` + empresaid + `'  and p.estado IN ('ACT','CER')  and  p.tpoliza='` + tipopolizaid + `'  order by p.fechamodificacion desc `
            , {
                type: QueryTypes.SELECT
            });


        res.json({ data: polizas });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getPolizasDetalleSaludPorSucursalYTipo(req, res) {
    const { dato, sucursalid, tipopolizaid } = req.params;
    try {

        const polizas = await sequelize.query(`select p.*
            from poliza p 
            inner join poliza_detalle_persona pda2 on pda2 .polizaid =p.id  
            inner join sucursal s on s.id=p.sucursalid  
            where (pda2.tipoasegurado like '%`+ dato + `%' or pda2.titular like '%` + dato + `%' ) s.id= '` + sucursalid + `'  and p.estado IN ('ACT','CER')  and  p.tpoliza='` + tipopolizaid + `'  order by p.fechamodificacion desc `
            , {
                type: QueryTypes.SELECT
            });


        res.json({ data: polizas });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getPolizasDetalleSaludPorEmpresaYTipo(req, res) {
    const { dato, empresaid, tipopolizaid } = req.params;
    try {

        const polizas = await sequelize.query(`select p.*
        from poliza p 
        inner join poliza_detalle_persona pda2 on pda2 .polizaid =p.id  
        inner join sucursal s on s.id=p.sucursalid  
        inner join empresa e on e.id =s.empresaid  
        where (pda2.tipoasegurado like '%`+ dato + `%' or pda2.titular like '%` + dato + `%' ) e.id= '` + empresaid + `'  and p.estado IN ('ACT','CER')  and  p.tpoliza='` + tipopolizaid + `'  order by p.fechamodificacion desc `
            , {
                type: QueryTypes.SELECT
            });


        res.json({ data: polizas });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}


export async function vencimientoPoliza(req, res) {
    const { id } = req.params;
    try {

        const personals = await sequelize.query(`  select cs.nombre nombrecompania,a.correocobranza,a.direccionasegurado,a.nombrecompleto as nombreasegurado,a.telefonoasegurado,a.telefonodomicilio,r.nombre nombreramo,s.nombre as sucursal,p.nropoliza ,p.valorasegurado ,p.fechafin 
        from poliza p 
        inner join sucursal s on s.id=p.sucursalid 
        inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid 
        inner join ramo r on r.id=rc.ramoid
        inner join asegurado a on a.id=p.tomadorid 
        inner join compania_seguro cs on cs.id=p.companiaseguroid 
        where 
        p.id= '`+ id + `'
        order by cs.nombre,a.nombrecompleto,p.fechamodificacion desc `
            , {
                type: QueryTypes.SELECT
            });


        let NewEnvioCorreo = await EnvioCorreo.create({
            nombre: 'poliza vencimiento',
            descripcion: 'envio de certificados de vencimiento',
            usuarioregistro: 'system',
            usuariomodificacion: 'system',
            fecharegistro: new Date(),
            fechamodificacion: new Date(),
            estado: 'ACT',
            polizaid: id
        }, {
            fields: ['nombre', 'descripcion', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                'fechamodificacion', 'estado', 'polizaid']
        });

        const dir = "http://3.99.76.226:8080/broker/rest/reporte/vencimientoPoliza/" + id;
        request.get({
            url: dir
        }, function (err, response, body) {
            const data = response.body;
            var mensaje = "Poliza vencida por favor apersonarse a las oficinas de su Broker...";

            var mailOptions = {
                from: 'gamsc@gmsantacruz.gob.bo',
                // to: 'david.ticlla@gmail.com',
                to: personals[0].correocobranza,
                subject: 'Vencimiento de Poliza nro.-' + personals[0].nropoliza + ' - ' + personals[0].nombreasegurado,
                //subject: 'Vencimiento de Poliza',
                text: mensaje,
                html: '',
                attachments: [{
                    filename: 'poliza-' + personals[0].nombreasegurado + '-' + personals[0].nropoliza + '.pdf',
                    path: 'data:application/pdf;base64,' + data
                }
                ],
            };
            //envio de correo
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    res.json({
                        data: 'Error al enviar: ' + error
                    });
                    console.log('mensaje: ' + error);
                } else {
                    res.json({
                        data: 'Email enviado: ' + info.response
                    });
                    console.log('Email enviado: ' + info.response);

                }
                transporter.close();
            });
        });
        //res.json({ data: personals });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function obtenerPoliza(req, res) {
    const { id } = req.params;
    try {

        const personals = await sequelize.query(` select * from obtenerPoliza('` + id + `')  `
            , {
                type: QueryTypes.SELECT
            });

        res.json({
            data: personals
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function obtenerDetallesPorPoliza(req, res) {
    const { id } = req.params;
    try {

        const detalle = await sequelize.query(` select * from pa_listar_detalle('` + id + `')  `
            , {
                type: QueryTypes.SELECT
            });

        res.json({
            data: detalle[0]._row
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}