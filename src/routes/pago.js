import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as control from "../controllers/pagos.controller";
import * as tokenVerificacion from '../jwt/jwtVerificacion'

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

  // Aplica el middleware globalmente para todas las rutas del router
  .use(tokenVerificacion.ensureToken);


  // Ahora todas estas rutas ya están protegidas por el token:
router.post('/', control.createPagos);
router.post('/crear/', control.crearPagos);
router.get('/', control.getPagoss);

router.get('/:id', control.getOnePagos);
router.delete('/:id', control.deletePagos);
router.put('/:id', control.updatePagos);
router.put('/baja/:id', control.bajaPagos);

router.get('/generalPorSucursal/:sucursalid', control.getPagosGeneralesPorSucursal);
router.get('/actualesPorSucursal/:sucursalid', control.getPagosActualesPorSucursal);
router.get('/pendientesPorSucursal/:sucursalid', control.getPagosPendientesPorSucursal);
router.get('/moraPorSucursal/:sucursalid', control.getPagosMoraPorSucursal);

router.get('/actualesPorEmpresa/:empresaid', control.getPagosActualesPorEmpresa);
router.get('/pendientesPorEmpresa/:empresaid', control.getPagosPendientesPorEmpresa);
router.get('/moraPorEmpresa/:empresaid', control.getPagosMoraPorEmpresa);

router.get('/pagosPorSucursalYCI/:sucursalid/:cinit', control.getPagosPorSucursalyCi);
router.get('/pagosPorEmpresaYCI/:empresaid/:cinit', control.getPagosPorEmpresayCi);

router.post('/pagoPorSucursal/:sucursalid', control.getPagosPorSucursal);
router.post('/pagoPorEmpresa/:empresaid', control.getPagosPorEmpresa);

// Dashboard
router.get('/totalPagosPorEmpresa/:empresaid', control.getTotalPagosPorEmpresa);
router.get('/totalPagosPorSucursal/:sucursalid', control.getTotalPagosPorSucursal);
//router.post('/', tokenVerificacion.ensureToken, control.createPagos);
//router.post('/crear/', tokenVerificacion.ensureToken, control.crearPagos);
//router.get('/', tokenVerificacion.ensureToken, control.getPagoss);
//
//// /api/empresas/:empresaID
//router.get('/:id', tokenVerificacion.ensureToken, control.getOnePagos);
//router.delete('/:id', tokenVerificacion.ensureToken, control.deletePagos);
//router.put('/:id', tokenVerificacion.ensureToken, control.updatePagos);
//router.put('/baja/:id', tokenVerificacion.ensureToken, control.bajaPagos);
//router.get('/generalPorSucursal/:sucursalid', tokenVerificacion.ensureToken, control.getPagosGeneralesPorSucursal);
//
//router.get('/actualesPorSucursal/:sucursalid', tokenVerificacion.ensureToken, control.getPagosActualesPorSucursal);
//router.get('/pendientesPorSucursal/:sucursalid', tokenVerificacion.ensureToken, control.getPagosPendientesPorSucursal);
//router.get('/moraPorSucursal/:sucursalid', tokenVerificacion.ensureToken, control.getPagosMoraPorSucursal);
//
//router.get('/actualesPorEmpresa/:empresaid', tokenVerificacion.ensureToken, control.getPagosActualesPorEmpresa);
//router.get('/pendientesPorEmpresa/:empresaid', tokenVerificacion.ensureToken, control.getPagosPendientesPorEmpresa);
//router.get('/moraPorEmpresa/:empresaid', tokenVerificacion.ensureToken, control.getPagosMoraPorEmpresa);
//
//router.get('/pagosPorSucursalYCI/:sucursalid/:cinit', tokenVerificacion.ensureToken, control.getPagosPorSucursalyCi);
//router.get('/pagosPorEmpresaYCI/:empresaid/:cinit', tokenVerificacion.ensureToken, control.getPagosPorEmpresayCi);
//
//router.post('/pagoPorSucursal/:sucursalid', tokenVerificacion.ensureToken, control.getPagosPorSucursal);
//router.post('/pagoPorEmpresa/:empresaid', tokenVerificacion.ensureToken, control.getPagosPorEmpresa);
//
//
//
///**dashoboard */
//router.get('/totalPagosPorEmpresa/:empresaid', tokenVerificacion.ensureToken, control.getTotalPagosPorEmpresa);
//router.get('/totalPagosPorSucursal/:sucursalid', tokenVerificacion.ensureToken, control.getTotalPagosPorSucursal);
export default router;