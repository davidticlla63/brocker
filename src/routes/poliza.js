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
      }));
// /api/empresas/
//control de automotor
router.post('/', tokenVerificacion.ensureToken,control.createPoliza);
router.put('/:id',tokenVerificacion.ensureToken, control.updatePoliza);
//control de salud
router.post('/salud/',tokenVerificacion.ensureToken, control.createPolizaSalud);
router.put('/salud/:id',tokenVerificacion.ensureToken, control.updatePolizaSalud);
//control de proposito general
router.post('/general/',tokenVerificacion.ensureToken, control.createPolizaGeneral);
router.put('/general/:id',tokenVerificacion.ensureToken, control.updatePolizaGeneral);

//control de generico
router.post('/generico/', tokenVerificacion.ensureToken,control.createPolizaGenerica);
router.put('/generico/:id',tokenVerificacion.ensureToken, control.updatePolizaGenerica);
//obtener detalle generico
router.get('/detalle/:id',tokenVerificacion.ensureToken, control.obtenerDetallesPorPoliza);

router.get('/',tokenVerificacion.ensureToken, control.getPolizas);
router.get('/polizasPorSucursal/:sucursalid',tokenVerificacion.ensureToken, control.polizasPorSucursal);
router.get('/polizasPorTipoYSucursal/:tipopolizaid/:sucursalid',tokenVerificacion.ensureToken, control.getPolizaPorTipoYSucursal);
router.get('/polizasPorTipoYEmpresa/:tipopolizaid/:empresaid',tokenVerificacion.ensureToken, control.getPolizasPorTipoYEmpresa);
router.post('/polizasPorTipoRamoYEmpresa/:tipopoliza/:tiporamoid/:empresaid',tokenVerificacion.ensureToken, control.getPolizasPorTipoRamoYEmpresa);
router.post('/polizasPorTipoRamoYSucursal/:tipopoliza/:tiporamoid/:sucursalid',tokenVerificacion.ensureToken, control.getPolizasPorTipoRamoYSucursal);

router.get('/polizasHijo/:polizaid',tokenVerificacion.ensureToken, control.getPolizaHijo);

router.post('/polizasPorEmpresaGeneral/:empresaid',tokenVerificacion.ensureToken, control.polizasPorEmpresaGeneral);
router.post('/polizasPorSucursalGeneral/:sucursalid',tokenVerificacion.ensureToken, control.polizasPorSucursalGeneral);

router.post('/polizasPorEmpresaYVencimiento/:empresaid',tokenVerificacion.ensureToken, control.getPolizasPorEmpresaFechaVencimiento);
router.post('/polizasPorSucursalYVencimiento/:sucursalid',tokenVerificacion.ensureToken, control.getPolizasPorSucursalVencimiento);

router.get('/polizasPorTomadorYEmpresa/:tomadorid/:empresaid',tokenVerificacion.ensureToken, control.getPolizasPorTomadorYEmpresa);
router.get('/polizasPorTomadorYSucursal/:tomadorid/:sucursalid',tokenVerificacion.ensureToken, control.getPolizasPorTomadorYSucursal);

router.get('/polizasPorEmpresaSinMemo/:empresaid',tokenVerificacion.ensureToken, control.getPolizasPorEmpresaSinMemo);
router.get('/polizasPorSucursalSinMemo/:sucursalid',tokenVerificacion.ensureToken, control.getPolizasPorSucursalSinMemo);
// /api/empresas/:empresaID
router.get('/:id',tokenVerificacion.ensureToken, control.getOnePoliza);
router.delete('/:id',tokenVerificacion.ensureToken, control.deletePoliza);

router.put('/baja/:id',tokenVerificacion.ensureToken, control.bajaPoliza);

//siniestro  tipopolizaid
router.get('/polizasPorSucursals/:sucursalid',tokenVerificacion.ensureToken, control.getPolizasPorSucursal);
router.get('/polizasPorEmpresas/:empresaid',tokenVerificacion.ensureToken, control.getPolizasPorEmpresa);

router.get('/polizasPorSucursalsYTipo/:sucursalid/:tipopolizaid/:tiporamoid',tokenVerificacion.ensureToken, control.getPolizasPorSucursalYTipo);
router.get('/polizasPorEmpresasYTipo/:empresaid/:tipopolizaid/:tiporamoid',tokenVerificacion.ensureToken, control.getPolizasPorEmpresaYTipo);
/**busquedas por detalle  */
router.post('/buscarPolizasDetallePorSucursal/:sucursalid',tokenVerificacion.ensureToken, control.getBuscarPolizasDetallePorSucursal); //GENRAL SOLO UNA CONSULTA
router.post('/buscarPolizasDetallePorEmpresa/:empresaid',tokenVerificacion.ensureToken, control.getBuscarPolizasDetallePorEmpresa); //GENRAL SOLO UNA CONSULTA
/**busquedas por detalle   no sera usado*/
router.get('/polizasDetalleAutomotorPorEmpresaYTipo/:dato/:empresaid/:tipopolizaid',tokenVerificacion.ensureToken, control.getPolizasDetalleAutomotorPorEmpresaYTipo);
router.get('/polizasDetalleAutomotorPorSucursalYTipo/:dato/:sucursalid/:tipopolizaid',tokenVerificacion.ensureToken, control.getPolizasDetalleAutomotorPorSucursalYTipo);

router.get('/polizasDetalleGeneralPorEmpresaYTipo/:dato/:empresaid/:tipopolizaid',tokenVerificacion.ensureToken, control.getPolizasDetalleGeneralPorEmpresaYTipo);
router.get('/polizasDetalleGeneralPorSucursalYTipo/:dato/:sucursalid/:tipopolizaid',tokenVerificacion.ensureToken, control.getPolizasDetalleGeneralPorSucursalYTipo);

router.get('/polizasDetalleSaludPorEmpresaYTipo/:dato/:empresaid/:tipopolizaid',tokenVerificacion.ensureToken, control.getPolizasDetalleSaludPorEmpresaYTipo);
router.get('/polizasDetalleSaludPorSucursalYTipo/:dato/:sucursalid/:tipopolizaid',tokenVerificacion.ensureToken, control.getPolizasDetalleSaludPorSucursalYTipo);


/** envio de correo */
router.get('/vencimientoPoliza/:id',tokenVerificacion.ensureToken, control.vencimientoPoliza);


router.get('/obtenerPoliza/:id',tokenVerificacion.ensureToken, control.obtenerPoliza);
export default router;