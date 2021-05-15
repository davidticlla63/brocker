
import PolizaDetallePersona from "../models/PolizaDetallePersona";

export async function getPolizaDetallePersonas(req, res) {
    try {
        const polizaDetallePersonas = await PolizaDetallePersona.findAll({ where: { estado: 'ACT' } });
        res.json({
            data: polizaDetallePersonas
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function createPolizaDetallePersona(req, res) {
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
        let newPolizaDetallePersona;
    try {
        //const transaction= sequelize.transaction;
         newPolizaDetallePersona = await PolizaDetallePersona.create({
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
            await PolizaDetallePersonaAdicional.create({
                polizadetalleid: newPolizaDetallePersona.id,
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
        if (newPolizaDetallePersona) {
            return res.json({
                message: 'PolizaDetallePersona created successfully',
                data: newPolizaDetallePersona
            });
        }
    } catch (e) {
        if (t) {
            await t.rollback();
            //await newUsuario.destroy();
            if (newPolizaDetallePersona) {
                await Poliza.destroy({ where: { id: newPoliza.id } })
            }
        }
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}


export async function updatePolizaDetallePersona(req, res) {
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
        const updateRowCount = await PolizaDetallePersona.update({
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

        const polizaDetallePersonas = await PolizaDetallePersona.findOne({
            where: {
                id
            }
        }
        );
        res.json({
            message: 'PolizaDetallePersona update successfully',
            count: polizaDetallePersonas
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}


export async function bajaPolizaDetallePersona(req, res) {
    const { id } = req.params;

    console.log("bajaPolizaDetallePersona");
    const {
        //    id,
        usuariomodificacion
    } = req.body;
    try {
        // var moment = require('moment');
        const updateRowCount = await PolizaDetallePersona.update({
            usuariomodificacion,
            /*  fechamodificacion:moment().format(), */
            fechamodificacion: new Date(),
            estado: 'BAJ'
        }, {
            where: {
                id
            }
        });

        const polizaDetallePersonas = await PolizaDetallePersona.findOne({
            where: {
                id
            }
        }
        );

        res.json({
            message: 'PolizaDetallePersona baja successfully',
            count: polizaDetallePersonas
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getPolizaDetallePersonaPorPoliza(req, res) {
    try {
        const { polizaid } = req.params;
        const usuario = await PolizaDetallePersona.findAll({
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

export async function polizaDetallePersonasPorPoliza(req, res) {
    const {
        polizaid } = req.params;
    try {
        console.log(req.params)
        const polizaDetallePersonas = await PolizaDetallePersona.findAll({ where: { estado: 'ACT', polizaid } });
        res.json({
            data: polizaDetallePersonas
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function deletePolizaDetallePersona(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await PolizaDetallePersona.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'PolizaDetallePersona deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}
