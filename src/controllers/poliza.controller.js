
import Poliza from "../models/Poliza";

export async function getPolizas(req, res) {
    try {
        const accions = await Poliza.findAll({ where: { estado: 'ACT' } });
        res.json({
            data: accions
        });
    } catch (e) {
        console.log(e);
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
        nombreencargado,
        nombresubrogacion,
        ciudadexpedicion,
        broker,
        notas,
        companiaseguroid,
        ramoid,
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

        fechainiciovigencia,
        fechafinvigencia,
        fechainclusion,
        prima,
        porcentajeprima,
        primaneta,
        porcentajecomision,
        detalle,

        usuarioregistro,
        usuariomodificacion,
        fecharegistro=new Date(),
        fechamodificacion = new Date(),
        estado='ACT',
        sucursalid } = req.body;
    try {
        //const transaction= sequelize.transaction;
        let newPoliza = await Poliza.create({
            nropoliza,
            nrocertificado,
            fechainicio,
            fechafin,
            fechaexpedicion,
            fecharecepcion,
            tipomoneda,
            primatotal,
            formapago,
            nombreencargado,
            nombresubrogacion,
            ciudadexpedicion,
            broker,
            notas,
            companiaseguroid,
            ramoid,
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

            fechainiciovigencia,
            fechafinvigencia,
            fechainclusion,
            prima,
            porcentajeprima,
            primaneta,
            porcentajecomision,
            detalle,

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
                'nombreencargado',
                'nombresubrogacion',
                'ciudadexpedicion',

                'broker',
                'notas',
                'companiaseguroid',
                'ramoid',
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

                'fechainiciovigencia',
                'fechafinvigencia',
                'fechainclusion',
                'prima',
                'porcentajeprima',
                'primaneta',
                'porcentajecomision',
                'detalle',

                'usuarioregistro',
                'usuariomodificacion',
                'fecharegistro',
                'fechamodificacion',
                'estado',
                'sucursalid']
        });
        if (newPoliza) {
            return res.json({
                message: 'Poliza created successfully',
                data: newPoliza
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

export async function getOnePoliza(req, res) {
    try {
        const { id } = req.params;
        const usuario = await Poliza.findOne({
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

export async function polizasPorSucursal(req, res) {
    try {
        const { sucursalid } = req.params;
        const usuario = await Poliza.findOne({
            where: {
                sucursalid,estado:'ACT'
            }
        });
        res.json({
            data: usuario
        });
    } catch (e) {
        console.log(e);
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
        nombreencargado,
        nombresubrogacion,
        ciudadexpedicion,
        broker,
        notas,
        companiaseguroid,
        ramoid,
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

        fechainiciovigencia,
        fechafinvigencia,
        fechainclusion,
        prima,
        porcentajeprima,
        primaneta,
        porcentajecomision,
        detalle,

        usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        fechamodificacion=new Date(),
        estado,
        sucursalid } = req.body;
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
            nombreencargado,
            nombresubrogacion,
            ciudadexpedicion,
            broker,
            notas,
            companiaseguroid,
            ramoid,
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

            fechainiciovigencia,
            fechafinvigencia,
            fechainclusion,
            prima,
            porcentajeprima,
            primaneta,
            porcentajecomision,
            detalle,

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
        });

        const accions = await Poliza.findOne({
            where: {
                id
            }
        }
        );
        res.json({
            message: 'Poliza update successfully',
            count: accions
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
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

        const accions = await Poliza.findOne({
            where: {
                id
            }
        }
        );

        res.json({
            message: 'Poliza baja successfully',
            count: accions
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}