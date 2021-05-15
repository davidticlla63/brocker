
import PolizaDetalleGeneral from "../models/PolizaDetalleGeneral";

export async function getPolizaDetalleGenerals(req, res) {
    try {
        const polizaDetalleGenerals = await PolizaDetalleGeneral.findAll({ where: { estado: 'ACT' } });
        res.json({
            data: polizaDetalleGenerals
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function createPolizaDetalleGeneral(req, res) {
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
        let newPolizaDetalleGeneral;
    try {
        //const transaction= sequelize.transaction;
         newPolizaDetalleGeneral = await PolizaDetalleGeneral.create({
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
            await PolizaDetalleGeneralAdicional.create({
                polizadetalleid: newPolizaDetalleGeneral.id,
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
        if (newPolizaDetalleGeneral) {
            return res.json({
                message: 'PolizaDetalleGeneral created successfully',
                data: newPolizaDetalleGeneral
            });
        }
    } catch (e) {
        if (t) {
            await t.rollback();
            //await newUsuario.destroy();
            if (newPolizaDetalleGeneral) {
                await Poliza.destroy({ where: { id: newPoliza.id } })
            }
        }
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}


export async function updatePolizaDetalleGeneral(req, res) {
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
        const updateRowCount = await PolizaDetalleGeneral.update({
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

        const polizaDetalleGenerals = await PolizaDetalleGeneral.findOne({
            where: {
                id
            }
        }
        );
        res.json({
            message: 'PolizaDetalleGeneral update successfully',
            count: polizaDetalleGenerals
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}


export async function bajaPolizaDetalleGeneral(req, res) {
    const { id } = req.params;

    console.log("bajaPolizaDetalleGeneral");
    const {
        //    id,
        usuariomodificacion
    } = req.body;
    try {
        // var moment = require('moment');
        const updateRowCount = await PolizaDetalleGeneral.update({
            usuariomodificacion,
            /*  fechamodificacion:moment().format(), */
            fechamodificacion: new Date(),
            estado: 'BAJ'
        }, {
            where: {
                id
            }
        });

        const polizaDetalleGenerals = await PolizaDetalleGeneral.findOne({
            where: {
                id
            }
        }
        );

        res.json({
            message: 'PolizaDetalleGeneral baja successfully',
            count: polizaDetalleGenerals
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getPolizaDetalleGeneralPorPoliza(req, res) {
    try {
        const { polizaid } = req.params;
        const usuario = await PolizaDetalleGeneral.findAll({
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

export async function polizaDetalleGeneralsPorPoliza(req, res) {
    const {
        polizaid } = req.params;
    try {
        console.log(req.params)
        const polizaDetalleGenerals = await PolizaDetalleGeneral.findAll({ where: { estado: 'ACT', polizaid } });
        res.json({
            data: polizaDetalleGenerals
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function deletePolizaDetalleGeneral(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await PolizaDetalleGeneral.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'PolizaDetalleGeneral deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}
