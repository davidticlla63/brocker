
import PolizaDetallePersonaTitular from "../models/PolizaDetallePersonaTitular";

export async function getPolizaDetallePersonaTitulars(req, res) {
    try {
        const polizaDetallePersonaTitulars = await PolizaDetallePersonaTitular.findAll({ where: { estado: 'ACT' } });
        res.json({
            data: polizaDetallePersonaTitulars
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function createPolizaDetallePersonaTitular(req, res) {
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
        let newPolizaDetallePersonaTitular;
    try {
        //const transaction= sequelize.transaction;
         newPolizaDetallePersonaTitular = await PolizaDetallePersonaTitular.create({
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
            await PolizaDetallePersonaTitularAdicional.create({
                polizadetalleid: newPolizaDetallePersonaTitular.id,
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
        if (newPolizaDetallePersonaTitular) {
            return res.json({
                message: 'PolizaDetallePersonaTitular created successfully',
                data: newPolizaDetallePersonaTitular
            });
        }
    } catch (e) {
        if (t) {
            await t.rollback();
            //await newUsuario.destroy();
            if (newPolizaDetallePersonaTitular) {
                await Poliza.destroy({ where: { id: newPoliza.id } })
            }
        }
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}


export async function updatePolizaDetallePersonaTitular(req, res) {
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
        const updateRowCount = await PolizaDetallePersonaTitular.update({
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

        const polizaDetallePersonaTitulars = await PolizaDetallePersonaTitular.findOne({
            where: {
                id
            }
        }
        );
        res.json({
            message: 'PolizaDetallePersonaTitular update successfully',
            count: polizaDetallePersonaTitulars
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}


export async function bajaPolizaDetallePersonaTitular(req, res) {
    const { id } = req.params;

    console.log("bajaPolizaDetallePersonaTitular");
    const {
        //    id,
        usuariomodificacion
    } = req.body;
    try {
        // var moment = require('moment');
        const updateRowCount = await PolizaDetallePersonaTitular.update({
            usuariomodificacion,
            /*  fechamodificacion:moment().format(), */
            fechamodificacion: new Date(),
            estado: 'BAJ'
        }, {
            where: {
                id
            }
        });

        const polizaDetallePersonaTitulars = await PolizaDetallePersonaTitular.findOne({
            where: {
                id
            }
        }
        );

        res.json({
            message: 'PolizaDetallePersonaTitular baja successfully',
            count: polizaDetallePersonaTitulars
        });




    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function getPolizaDetallePersonaTitularPorPoliza(req, res) {
    try {
        const { polizadetallepersonaid } = req.params;
        const usuario = await PolizaDetallePersonaTitular.findAll({
            where: {
                polizadetallepersonaid, estado: 'ACT'
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

export async function polizaDetallePersonaTitularsPorPoliza(req, res) {
    const {
        polizadetallepersonaid } = req.params;
    try {
        console.log(req.params)
        const polizaDetallePersonaTitulars = await PolizaDetallePersonaTitular.findAll({ where: { estado: 'ACT', polizadetallepersonaid } });
        res.json({
            data: polizaDetallePersonaTitulars
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}

export async function deletePolizaDetallePersonaTitular(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await PolizaDetallePersonaTitular.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'PolizaDetallePersonaTitular deleted successfully',
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}
