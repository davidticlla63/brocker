import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as control from "../controllers/poliza.controller";
import * as tokenVerificacion  from '../jwt/jwtVerificacion'
const shouldCompress = (req, res) => {
    if (req.headers['x-no-compression']) {
      // No comprimira las respuestas, si este encabezado 
      // está presente.
      return false;
    }
    // Recurrir a la compresión estándar
    return compression.filter(req, res);
  };

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression({
        // filter: Decide si la respuesta debe comprimirse o no,
        // en función de la función 'shouldCompress' anterior
        filter: shouldCompress,
        // threshold: Es el umbral de bytes para el tamaño del cuerpo
        // de la respuesta antes de considerar la compresión,
        // el valor predeterminado es 1 kB
        threshold: 0
      }))
       .use(tokenVerificacion.ensureToken); // ✅ Middleware global para el router;

    //  router.use(tokenVerificacion.ensureToken)


// /api/empresas/
/* //control de automotor
router.post('/', control.createPoliza);
router.put('/:id', control.updatePoliza);
//control de salud
router.post('/salud/', control.createPolizaSalud);
router.put('/salud/:id', control.updatePolizaSalud);
//control de proposito general
router.post('/general/', control.createPolizaGeneral);
router.put('/general/:id', control.updatePolizaGeneral); */

//control de generico
router.post('/generico/', control.createPolizaGenerica);
router.put('/generico/:id', control.updatePolizaGenerica);
//obtener detalle generico
router.get('/detalle/:id', control.obtenerDetallesPorPoliza);

router.get('/', control.getPolizas);
router.get('/polizasPorSucursal/:sucursalid', control.polizasPorSucursal);
router.get('/polizasPorTipoYSucursal/:tipopolizaid/:sucursalid', control.getPolizaPorTipoYSucursal);
router.get('/polizasPorTipoYEmpresa/:tipopolizaid/:empresaid', control.getPolizasPorTipoYEmpresa);
router.post('/polizasPorTipoRamoYEmpresa/:tipopoliza/:tiporamoid/:empresaid', control.getPolizasPorTipoRamoYEmpresa);
router.post('/polizasPorTipoRamoYSucursal/:tipopoliza/:tiporamoid/:sucursalid', control.getPolizasPorTipoRamoYSucursal);

router.get('/polizasHijo/:polizaid', control.getPolizaHijo);

router.post('/polizasPorEmpresaGeneral/:empresaid', control.polizasPorEmpresaGeneral);
router.post('/polizasPorSucursalGeneral/:sucursalid', control.polizasPorSucursalGeneral);

router.post('/polizasPorEmpresaYVencimiento/:empresaid', control.getPolizasPorEmpresaFechaVencimiento);
router.post('/polizasPorSucursalYVencimiento/:sucursalid', control.getPolizasPorSucursalVencimiento);

router.get('/polizasPorTomadorYEmpresa/:tomadorid/:empresaid', control.getPolizasPorTomadorYEmpresa);
router.get('/polizasPorTomadorYSucursal/:tomadorid/:sucursalid', control.getPolizasPorTomadorYSucursal);

router.get('/polizasPorEmpresaSinMemo/:empresaid', control.getPolizasPorEmpresaSinMemo);
router.get('/polizasPorSucursalSinMemo/:sucursalid', control.getPolizasPorSucursalSinMemo);
// /api/empresas/:empresaID
router.get('/:id', control.getOnePoliza);
router.delete('/:id', control.deletePoliza);

router.put('/baja/:id', control.bajaPoliza);

//siniestro  tipopolizaid
router.get('/polizasPorSucursals/:sucursalid', control.getPolizasPorSucursal);
router.get('/polizasPorEmpresas/:empresaid', control.getPolizasPorEmpresa);

router.get('/polizasPorSucursalsYTipo/:sucursalid/:tipopolizaid/:tiporamoid', control.getPolizasPorSucursalYTipo);
router.get('/polizasPorEmpresasYTipo/:empresaid/:tipopolizaid/:tiporamoid', control.getPolizasPorEmpresaYTipo);
/**busquedas por detalle  */
router.post('/buscarPolizasDetallePorSucursal/:sucursalid', control.getBuscarPolizasDetallePorSucursal); //GENRAL SOLO UNA CONSULTA
router.post('/buscarPolizasDetallePorEmpresa/:empresaid', control.getBuscarPolizasDetallePorEmpresa); //GENRAL SOLO UNA CONSULTA
/**busquedas por detalle   no sera usado*/
router.get('/polizasDetalleAutomotorPorEmpresaYTipo/:dato/:empresaid/:tipopolizaid', control.getPolizasDetalleAutomotorPorEmpresaYTipo);
router.get('/polizasDetalleAutomotorPorSucursalYTipo/:dato/:sucursalid/:tipopolizaid', control.getPolizasDetalleAutomotorPorSucursalYTipo);

router.get('/polizasDetalleGeneralPorEmpresaYTipo/:dato/:empresaid/:tipopolizaid', control.getPolizasDetalleGeneralPorEmpresaYTipo);
router.get('/polizasDetalleGeneralPorSucursalYTipo/:dato/:sucursalid/:tipopolizaid', control.getPolizasDetalleGeneralPorSucursalYTipo);

router.get('/polizasDetalleSaludPorEmpresaYTipo/:dato/:empresaid/:tipopolizaid', control.getPolizasDetalleSaludPorEmpresaYTipo);
router.get('/polizasDetalleSaludPorSucursalYTipo/:dato/:sucursalid/:tipopolizaid', control.getPolizasDetalleSaludPorSucursalYTipo);


/** envio de correo */
router.get('/vencimientoPoliza/:id', control.vencimientoPoliza);


router.get('/obtenerPoliza/:id', control.obtenerPoliza);
export default router;