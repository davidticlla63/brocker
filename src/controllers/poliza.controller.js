import { sequelize } from "../database/database";
const { QueryTypes } = require('sequelize');
import Archivo from "../models/Archivo";
import Poliza from "../models/Poliza";
import PolizaAdicional from "../models/PolizaAdicionales";

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
        broker,
        notas,
        companiaseguroid,
        subramocompaniaid,
        tiporamoid,
        contratanteid,
        aseguradoid,
        ejecutivoid,
        colocacionid,
        ciaspvs,
        tipopolizaid,
        tpoliza,
        tipocontrato,
        menoid,
        llamadoid,
        vendedorid,
        nroplaca,
        tipoemision,

        /*   fechainiciovigencia,
          fechafinvigencia,
          fechainclusion,
          prima,
          porcentajeprima,
          primaneta,
          porcentajecomision,
          detalle, */
        placa,
        tipovehiculo,
        marca,
        anio,
        color,

        archivos,
        adicionales,
        detalle,

        usuarioregistro,
        usuariomodificacion,
        fecharegistro = new Date(),
        fechamodificacion = new Date(),
        estado = 'ACT',
        sucursalid } = req.body;
    let t = await sequelize.transaction();
    let newPoliza;
    try {
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
            broker,
            notas,
            companiaseguroid,
            subramocompaniaid,
            tiporamoid,
            contratanteid,
            aseguradoid,
            ejecutivoid,
            colocacionid,
            ciaspvs,
            tipopolizaid,
            tpoliza,
            tipocontrato,
            menoid,
            llamadoid,
            vendedorid,
            nroplaca,
            tipoemision,

            /*     fechainiciovigencia,
                fechafinvigencia,
                fechainclusion,
                prima,
                porcentajeprima,
                primaneta,
                porcentajecomision,
                detalle, */
            placa,
            tipovehiculo,
            marca,
            anio,
            color,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion,
            estado,
            sucursalid
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

                'broker',
                'notas',
                'companiaseguroid',
                'subramocompaniaid',
                'tiporamoid',
                'contratanteid',
                'aseguradoid',
                'ejecutivoid',
                'colocacionid',
                'ciaspvs',
                'tipopolizaid',
                'tpoliza',
                'tipocontrato',
                'menoid',
                'llamadoid',
                'vendedorid',
                'nroplaca',
                'tipoemision',

                /*     'fechainiciovigencia',
                    'fechafinvigencia',
                    'fechainclusion',
                    'prima',
                    'porcentajeprima',
                    'primaneta',
                    'porcentajecomision',
                    'detalle', */

                'placa',
                'tipovehiculo',
                'marca',
                'anio',
                'color',
                'usuarioregistro',
                'usuariomodificacion',
                'fecharegistro',
                'fechamodificacion',
                'estado',
                'sucursalid']
        }, { transaction: t });

        // step 2  archivos
        for (let i = 0; i < archivos.length; i++) {
            // listaPermisos.push( 
            await Archivo.create({
                codigo: newPoliza.id,
                nombre: archivos[i].nombre,
                descripcion: archivos[i].nombre,
                extension: archivos[i].extension,
                archivo: archivos[i].archivo,
                aseguradoid: aseguradoid,
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


        for (let i = 0; i < adicionales.length; i++) {
            // listaPermisos.push( 
            await PolizaAdicional.create({
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
        broker,
        notas,
        companiaseguroid,
        subramocompaniaid,
        contratanteid,
        aseguradoid,
        ejecutivoid,
        colocacionid,
        ciaspvs,
        tipopolizaid,
        tpoliza,
        tipocontrato,
        menoid,
        llamadoid,
        vendedorid,
        nroplaca,
        tipoemision,

        /*         fechainiciovigencia,
                fechafinvigencia,
                fechainclusion,
                prima,
                porcentajeprima,
                primaneta,
                porcentajecomision,
                detalle, */

        placa,
        tipovehiculo,
        marca,
        anio,
        color,

        usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        fechamodificacion = new Date(),
        estado,
        sucursalid, archivos, archivoseliminados } = req.body;
    let t = await sequelize.transaction();
    try {
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
            broker,
            notas,
            companiaseguroid,
            subramocompaniaid,
            tiporamoid,
            contratanteid,
            aseguradoid,
            ejecutivoid,
            colocacionid,
            ciaspvs,
            tipopolizaid,
            tpoliza,
            tipocontrato,
            menoid,
            llamadoid,
            vendedorid,
            nroplaca,
            tipoemision,

            /*    fechainiciovigencia,
               fechafinvigencia,
               fechainclusion,
               prima,
               porcentajeprima,
               primaneta,
               porcentajecomision,
               detalle, */

            placa,
            tipovehiculo,
            marca,
            anio,
            color,

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
                aseguradoid: aseguradoid,
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


export async function bajaPoliza(req, res) {
    const { id } = req.params;

    console.log("bajaPoliza");
    const {
        //    id,
        usuariomodificacion
    } = req.body;
    try {
        // var moment = require('moment');
        const updateRowCount = await Poliza.update({
            usuariomodificacion,
            /*  fechamodificacion:moment().format(), */
            fechamodificacion: new Date(),
            estado: 'BAJ'
        }, {
            where: {
                id
            }
        });

        const polizas = await Poliza.findOne({
            where: {
                id
            }
        }
        );

        res.json({
            message: 'Poliza baja successfully',
            count: polizas
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

        const polizas = await Poliza.findAll({ where: { tipopolizaid, sucursalid, estado: 'ACT' } });

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
            "where s.empresaid= '" + empresaid + "' and p.tipopolizaid='" + tipopolizaid + "' order by p.id "
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

        const polizas = await sequelize.query("select p.* ,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania " +
            "from poliza p " +
            "inner join sucursal s on s.id=p.sucursalid  " +
            "inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid " +
            "inner join ramo r on r.id=rc.ramoid " +
            "inner join asegurado a on a.id=p.aseguradoid " +
            "inner join compania_seguro cs on cs.id=p.companiaseguroid " +
            "where s.empresaid= '" + empresaid + "' and p.tiporamoid='" + tiporamoid + "' order by p.id "
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

        const polizas = await sequelize.query("select p.* ,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania  " +
            /*       "from poliza p " +
                  "inner join sucursal s on s.id=p.sucursalid  " + */
            "from poliza p " +
            "inner join sucursal s on s.id=p.sucursalid  " +
            "inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid " +
            "inner join ramo r on r.id=rc.ramoid " +
            "inner join asegurado a on a.id=p.aseguradoid " +
            "inner join compania_seguro cs on cs.id=p.companiaseguroid " +
            "where s.empresaid= '" + empresaid + "' and s.id='" + sucursalid + "' order by p.id "
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