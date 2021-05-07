
import PolizaDetalle from "../models/PolizaDetalle";
import PolizaDetalleAdicional from '../models/PolizaDetalleAdicionales'

export async function getPolizaDetalles(req, res) {
    try {
        const polizaDetalles = await PolizaDetalle.findAll({ where: { estado: 'ACT' } });
        res.json({
            data: polizaDetalles
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

/* export async function polizaDetallesPorRamo(req, res) {
    const {
        ramoid } = req.params;
    try {
        console.log(req.params)
        const polizaDetalles = await PolizaDetalle.findAll({ where: { estado: 'ACT', ramoid } });
        res.json({
            data: polizaDetalles
        });
    } catch (e) {
        console.log(e);
    }
} */



export async function createPolizaDetalle(req, res) {
    const {
        /*   nropoliza,
          nrocertificado,
          fechainiciovigencia,
          fechafinvigencia,
          fechainclusion,
          prima,
          porcentajeprima,
          primaneta,
          porcentajecomision,
          detalle, */
        titular,
        placa,
        tipovehiculo,
        marcavehiculo,
        colorvehiculo,
        aniovehiculo,

        primaindividual,
        primanetaindividualbs,
        primanetaindividualusd,
        usuarioregistro,
        usuariomodificacion,
        fecharegistro = new Date(),
        fechamodificacion = new Date(),
        estado,
        polizaid ,adicionales} = req.body;
        let t = await sequelize.transaction();
        let newPolizaDetalle;
    try {
        //const transaction= sequelize.transaction;
         newPolizaDetalle = await PolizaDetalle.create({
            /*   nropoliza,
              nrocertificado,
              fechainiciovigencia,
              fechafinvigencia,
              fechainclusion,
              prima,
              porcentajeprima,
              primaneta,
              porcentajecomision,
              detalle, */
            titular,
            placa,
            tipovehiculo,
            marcavehiculo,
            colorvehiculo,
            aniovehiculo,

            primaindividual,
            primanetaindividualbs,
            primanetaindividualusd,

            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion,
            estado,
            polizaid
        }, {
            fields: [
                /*  'nropoliza',
                 'nrocertificado',
                 'fechainiciovigencia',
                 'fechafinvigencia',
                 'fechainclusion',
                 'prima',
                 'porcentajeprima',
                 'primaneta',
                 'porcentajecomision',
                 'detalle', */
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




        for (let i = 0; i < adicionales.length; i++) {
            // listaPermisos.push( 
            await PolizaDetalleAdicional.create({
                polizadetalleid: newPolizaDetalle.id,
                valor: adicionales[i].valor,
                dato: adicionales[i].dato,
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

        await t.commit();
        if (newPolizaDetalle) {
            return res.json({
                message: 'PolizaDetalle created successfully',
                data: newPolizaDetalle
            });
        }
    } catch (e) {
        if (t) {
            await t.rollback();
            //await newUsuario.destroy();
            if (newPolizaDetalle) {
                await Poliza.destroy({ where: { id: newPoliza.id } })
            }
        }
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}


export async function updatePolizaDetalle(req, res) {
    const { id } = req.params;
    const {
        /*  nropoliza,
         nrocertificado,
         fechainiciovigencia,
         fechafinvigencia,
         fechainclusion,
         prima,
         porcentajeprima,
         primaneta,
         porcentajecomision,
         detalle, */
        titular,
        placa,
        tipovehiculo,
        marcavehiculo,
        colorvehiculo,
        aniovehiculo,

        primaindividual,
        primanetaindividualbs,
        primanetaindividualusd,

        usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        fechamodificacion = new Date(),
        estado } = req.body;
    try {
        const updateRowCount = await PolizaDetalle.update({
            /*  nropoliza,
             nrocertificado,
             fechainiciovigencia,
             fechafinvigencia,
             fechainclusion,
             prima,
             porcentajeprima,
             primaneta,
             porcentajecomision,
             detalle, */
            titular,
            placa,
            tipovehiculo,
            marcavehiculo,
            colorvehiculo,
            aniovehiculo,

            primaindividual,
            primanetaindividualbs,
            primanetaindividualusd,

            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion,
            estado
        }, {
            where: {
                id
            }
        });

        const polizaDetalles = await PolizaDetalle.findOne({
            where: {
                id
            }
        }
        );
        res.json({
            message: 'PolizaDetalle update successfully',
            count: polizaDetalles
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}


export async function bajaPolizaDetalle(req, res) {
    const { id } = req.params;

    console.log("bajaPolizaDetalle");
    const {
        //    id,
        usuariomodificacion
    } = req.body;
    try {
        // var moment = require('moment');
        const updateRowCount = await PolizaDetalle.update({
            usuariomodificacion,
            /*  fechamodificacion:moment().format(), */
            fechamodificacion: new Date(),
            estado: 'BAJ'
        }, {
            where: {
                id
            }
        });

        const polizaDetalles = await PolizaDetalle.findOne({
            where: {
                id
            }
        }
        );

        res.json({
            message: 'PolizaDetalle baja successfully',
            count: polizaDetalles
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getPolizaDetallePorPoliza(req, res) {
    try {
        const { polizaid } = req.params;
        const usuario = await PolizaDetalle.findAll({
            where: {
                polizaid, estado: 'ACT'
            }
        });
        res.json({
            data: usuario
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function polizaDetallesPorPoliza(req, res) {
    const {
        polizaid } = req.params;
    try {
        console.log(req.params)
        const polizaDetalles = await PolizaDetalle.findAll({ where: { estado: 'ACT', polizaid } });
        res.json({
            data: polizaDetalles
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function deletePolizaDetalle(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await PolizaDetalle.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'PolizaDetalle deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}
