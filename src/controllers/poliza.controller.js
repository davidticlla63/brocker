import { sequelize } from "../database/database";
const { QueryTypes, Promise } = require('sequelize');
import Archivo from "../models/Archivo";
import Poliza from "../models/Poliza";
import PolizaDetalleAdicional from "../models/PolizaDetalleAdicionales";
import PolizaDetalle from '../models/PolizaDetalle'
import PolizaDetallePersona from "../models/PolizaDetallePersona";
import PolizaDetallePersonaTitular from "../models/PolizaDetallePersonaTitular";
import PolizaDetalleGeneral from "../models/PolizaDetalleGeneral";

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
        fecharegistro = new Date(),
        fechamodificacion = new Date(),
        estado = 'ACT',
        sucursalid,
        planid,
        polizaid } = req.body;
    let newPoliza;
    let t;
    try {
        t = await sequelize.transaction();
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
            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion,
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

                titular: automotores[i].titular,
                placa: automotores[i].placa,
                tipovehiculo: automotores[i].tipovehiculo,
                marcavehiculo: automotores[i].marcavehiculo,
                colorvehiculo: automotores[i].colorvehiculo,
                aniovehiculo: automotores[i].aniovehiculo,

                primaindividual: automotores[i].primaindividual,
                primanetaindividualbs: automotores[i].primanetaindividualbs,
                primanetaindividualusd: automotores[i].primanetaindividualusd,

                usuarioregistro,
                usuariomodificacion,
                fecharegistro: new Date(),
                fechamodificacion: new Date(),
                estado: 'ACT',
                polizaid: newPoliza.id
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
        if (newPoliza) {
            return res.json({
                message: 'Poliza created successfully',
                data: newPoliza
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
        fechamodificacion = new Date(),
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
            fechamodificacion,
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

                    titular: automotores[i].titular,
                    placa: automotores[i].placa,
                    tipovehiculo: automotores[i].tipovehiculo,
                    marcavehiculo: automotores[i].marcavehiculo,
                    colorvehiculo: automotores[i].colorvehiculo,
                    aniovehiculo: automotores[i].aniovehiculo,

                    primaindividual: automotores[i].primaindividual,
                    primanetaindividualbs: automotores[i].primanetaindividualbs,
                    primanetaindividualusd: automotores[i].primanetaindividualusd,

                    usuarioregistro,
                    usuariomodificacion,
                    fecharegistro: new Date(),
                    fechamodificacion: new Date(),
                    estado: 'ACT',
                    polizaid: id
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
        fecharegistro = new Date(),
        fechamodificacion = new Date(),
        estado = 'ACT',
        sucursalid,
        planid ,
        polizaid} = req.body;
    let newPoliza;
    let t;
    try {
        t = await sequelize.transaction();
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
            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion,
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
                titular: personas[i].titular,
                cobertura: personas[i].coberturamaternidad,
                fechanacimiento: personas[i].fechanacimiento,
                sexo: personas[i].sexo,
                ambitogeografico: personas[i].ambitogeografico,
                sistemaatencion: personas[i].sistemaatencion,

                primaindividual: personas[i].primaindividual,
                primanetaindividualbs: personas[i].primanetaindividualbs,
                primanetaindividualusd: personas[i].primanetaindividualusd,

                usuarioregistro,
                usuariomodificacion,
                fecharegistro: new Date(),
                fechamodificacion: new Date(),
                estado: 'ACT',
                polizaid: newPoliza.id
            }, {
                fields: [

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
        if (newPoliza) {
            return res.json({
                message: 'Poliza created successfully',
                data: newPoliza
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
        fechamodificacion = new Date(),
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
            fechamodificacion,
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

                await PolizaDetalle.update({
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
                    titular: personas[i].titular,
                    cobertura: personas[i].coberturamaternidad,
                    fechanacimiento: personas[i].fechanacimiento,
                    sexo: personas[i].sexo,
                    ambitogeografico: personas[i].ambitogeografico,
                    sistemaatencion: personas[i].sistemaatencion,

                    primaindividual: personas[i].primaindividual,
                    primanetaindividualbs: personas[i].primanetaindividualbs,
                    primanetaindividualusd: personas[i].primanetaindividualusd,

                    usuarioregistro,
                    usuariomodificacion,
                    fecharegistro: new Date(),
                    fechamodificacion: new Date(),
                    estado: 'ACT',
                    polizaid: id
                }, {
                    fields: [

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
        fecharegistro = new Date(),
        fechamodificacion = new Date(),
        estado = 'ACT',
        sucursalid,
        planid,
        polizaid } = req.body;
    let newPoliza;
    let t;
    try {
        t = await sequelize.transaction();
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
            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion,
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
                titular: generales[i].titular,
                tipopolizageneral: generales[i].tipopolizageneral,
                direccion: generales[i].direccion,

                primaindividual: generales[i].primaindividual,
                primanetaindividualbs: generales[i].primanetaindividualbs,
                primanetaindividualusd: generales[i].primanetaindividualusd,

                usuarioregistro,
                usuariomodificacion,
                fecharegistro: new Date(),
                fechamodificacion: new Date(),
                estado: 'ACT',
                polizaid: newPoliza.id
            }, {
                fields: [
                    'titular',
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
        await t.commit();
        if (newPoliza) {
            return res.json({
                message: 'Poliza created successfully',
                data: newPoliza
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
        fechamodificacion = new Date(),
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
            fechamodificacion,
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
                    titular: generales[i].titular,
                    tipopolizageneral: generales[i].tipopolizageneral,
                    direccion: generales[i].direccion,

                    primaindividual: generales[i].primaindividual,
                    primanetaindividualbs: generales[i].primanetaindividualbs,
                    primanetaindividualusd: generales[i].primanetaindividualusd,

                    usuarioregistro,
                    usuariomodificacion,
                    fechamodificacion: new Date(),
                    estado: 'ACT',
                    polizaid: id
                }, {
                    fields: [
                        'titular',
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


export async function getPolizaPorTipoYSucursal(req, res) {
    const { tipopolizaid, sucursalid } = req.params;
    try {

        //const polizas = await Poliza.findAll({ where: { tipopolizaid, sucursalid, estado: 'ACT' } });
        const polizas = await Poliza.findAll({ where: { tpoliza: tipopolizaid, sucursalid, estado: 'ACT' } });

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

        const polizas = await sequelize.query("select p.* " +
            "from poliza p " +
            "inner join sucursal s on s.id=p.sucursalid  " +
            //"where s.empresaid= '" + empresaid + "' and p.tipopolizaid='" + tipopolizaid + "' order by p.id "
            "where s.empresaid= '" + empresaid + "' and p.tpoliza='" + tipopolizaid + "' order by p.fechamodificacion desc "
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
    const { tiporamoid, empresaid } = req.params;
    try {

        const polizas = await sequelize.query("select p.* ,sr.nombre nombresubramo,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania " +
            "from poliza p " +
            "inner join sucursal s on s.id=p.sucursalid  " +
            "inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid " +
            "inner join sub_ramo sr on sr.id=rc.subramoid " +
            "inner join ramo r on r.id=rc.ramoid " +
            "inner join asegurado a on a.id=p.tomadorid " +
            "inner join compania_seguro cs on cs.id=p.companiaseguroid " +
            //"where s.empresaid= '" + empresaid + "' and p.tiporamoid='" + tiporamoid + "' order by p.id "
            "where s.empresaid= '" + empresaid + "' and p.tpoliza='" + tiporamoid + "' and p.estado='ACT' order by p.id "
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
    const { tiporamoid, sucursalid } = req.params;
    try {

        const polizas = await sequelize.query("select p.* ,sr.nombre nombresubramo,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania  " +
            /*       "from poliza p " +
                  "inner join sucursal s on s.id=p.sucursalid  " + */
            "from poliza p " +
            "inner join sucursal s on s.id=p.sucursalid  " +
            "inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid " +
            "inner join sub_ramo sr on sr.id=rc.subramoid " +
            "inner join ramo r on r.id=rc.ramoid " +
            "inner join asegurado a on a.id=p.tomadorid " +
            "inner join compania_seguro cs on cs.id=p.companiaseguroid " +
            "where s.id='" + sucursalid + "'  and p.tpoliza='" + tiporamoid + "' and p.estado='ACT' order by p.id "
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


export async function getPolizasPorTomadorYEmpresa(req, res) {
    const { tomadorid, empresaid } = req.params;
    try {
        //console.log(tomadorid, empresaid );
        let query = "select p.* ,sr.nombre nombresubramo,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania " +
            "from poliza p " +
            "inner join sucursal s on s.id=p.sucursalid  " +
            "inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid " +
            "inner join sub_ramo sr on sr.id=rc.subramoid " +
            "inner join ramo r on r.id=rc.ramoid " +
            "inner join asegurado a on a.id=p.tomadorid " +
            "inner join compania_seguro cs on cs.id=p.companiaseguroid " +
            //"where s.empresaid= '" + empresaid + "' and p.tiporamoid='" + tiporamoid + "' order by p.id "
            "where s.empresaid= '" + empresaid + "' and a.id='" + tomadorid + "' and p.estado='ACT' order by p.fechamodificacion desc ";
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

        const polizas = await sequelize.query("select p.* ,sr.nombre nombresubramo,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania  " +
            /*       "from poliza p " +
                  "inner join sucursal s on s.id=p.sucursalid  " + */
            "from poliza p " +
            "inner join sucursal s on s.id=p.sucursalid  " +
            "inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid " +
            "inner join sub_ramo sr on sr.id=rc.subramoid " +
            "inner join ramo r on r.id=rc.ramoid " +
            "inner join asegurado a on a.id=p.tomadorid " +
            "inner join compania_seguro cs on cs.id=p.companiaseguroid " +
            "where s.id='" + sucursalid + "'  and a.id='" + tomadorid + "' and p.estado='ACT'  order by p.fechamodificacion desc "
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

        const polizas = await sequelize.query("select p.* ,sr.nombre nombresubramo,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania " +
            "from poliza p " +
            "inner join sucursal s on s.id=p.sucursalid  " +
            "inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid " +
            "inner join sub_ramo sr on sr.id=rc.subramoid " +
            "inner join ramo r on r.id=rc.ramoid " +
            "inner join asegurado a on a.id=p.tomadorid " +
            "inner join compania_seguro cs on cs.id=p.companiaseguroid " +
            "left join memo m on m.polizaid=p.id and m.estado='ACT' " +
            "where m.polizaid is null and  s.empresaid= '" + empresaid + "'  and p.estado='ACT' order by p.fechamodificacion desc "
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
    const { tiporamoid, sucursalid } = req.params;
    try {

        const polizas = await sequelize.query("select p.* ,sr.nombre nombresubramo,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania  " +
            /*       "from poliza p " +
                  "inner join sucursal s on s.id=p.sucursalid  " + */
            "from poliza p " +
            "inner join sucursal s on s.id=p.sucursalid  " +
            "inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid " +
            "inner join sub_ramo sr on sr.id=rc.subramoid " +
            "inner join ramo r on r.id=rc.ramoid " +
            "inner join asegurado a on a.id=p.tomadorid " +
            "inner join compania_seguro cs on cs.id=p.companiaseguroid " +
            "left join memo m on m.polizaid=p.id and m.estado='ACT' " +
            "where m.polizaid is null and s.id='" + sucursalid + "'  and p.tpoliza='" + tiporamoid + "' and p.estado='ACT' order by p.fechamodificacion desc "
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
