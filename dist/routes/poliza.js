"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var control = _interopRequireWildcard(require("../controllers/poliza.controller"));
var tokenVerificacion = _interopRequireWildcard(require("../jwt/jwtVerificacion"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var bodyParser = require("body-parser");
var cors = require("cors");
var compression = require("compression");
var router = (0, _express.Router)();
var shouldCompress = function shouldCompress(req, res) {
  if (req.headers['x-no-compression']) {
    // No comprimira las respuestas, si este encabezado 
    // está presente.
    return false;
  }
  // Recurrir a la compresión estándar
  return compression.filter(req, res);
};
router.use(cors()).use(bodyParser.json()).use(compression({
  // filter: Decide si la respuesta debe comprimirse o no,
  // en función de la función 'shouldCompress' anterior
  filter: shouldCompress,
  // threshold: Es el umbral de bytes para el tamaño del cuerpo
  // de la respuesta antes de considerar la compresión,
  // el valor predeterminado es 1 kB
  threshold: 0
}));

//  router.use(tokenVerificacion.ensureToken)

// /api/empresas/
/* //control de automotor
router.post('/', tokenVerificacion.ensureToken,control.createPoliza);
router.put('/:id',tokenVerificacion.ensureToken, control.updatePoliza);
//control de salud
router.post('/salud/',tokenVerificacion.ensureToken, control.createPolizaSalud);
router.put('/salud/:id',tokenVerificacion.ensureToken, control.updatePolizaSalud);
//control de proposito general
router.post('/general/',tokenVerificacion.ensureToken, control.createPolizaGeneral);
router.put('/general/:id',tokenVerificacion.ensureToken, control.updatePolizaGeneral); */

//control de generico
router.post('/generico/', tokenVerificacion.ensureToken, control.createPolizaGenerica);
router.put('/generico/:id', tokenVerificacion.ensureToken, control.updatePolizaGenerica);
//obtener detalle generico
router.get('/detalle/:id', tokenVerificacion.ensureToken, control.obtenerDetallesPorPoliza);
router.get('/', tokenVerificacion.ensureToken, control.getPolizas);
router.get('/polizasPorSucursal/:sucursalid', tokenVerificacion.ensureToken, control.polizasPorSucursal);
router.get('/polizasPorTipoYSucursal/:tipopolizaid/:sucursalid', tokenVerificacion.ensureToken, control.getPolizaPorTipoYSucursal);
router.get('/polizasPorTipoYEmpresa/:tipopolizaid/:empresaid', tokenVerificacion.ensureToken, control.getPolizasPorTipoYEmpresa);
router.post('/polizasPorTipoRamoYEmpresa/:tipopoliza/:tiporamoid/:empresaid', tokenVerificacion.ensureToken, control.getPolizasPorTipoRamoYEmpresa);
router.post('/polizasPorTipoRamoYSucursal/:tipopoliza/:tiporamoid/:sucursalid', tokenVerificacion.ensureToken, control.getPolizasPorTipoRamoYSucursal);
router.get('/polizasHijo/:polizaid', tokenVerificacion.ensureToken, control.getPolizaHijo);
router.post('/polizasPorEmpresaGeneral/:empresaid', tokenVerificacion.ensureToken, control.polizasPorEmpresaGeneral);
router.post('/polizasPorSucursalGeneral/:sucursalid', tokenVerificacion.ensureToken, control.polizasPorSucursalGeneral);
router.post('/polizasPorEmpresaYVencimiento/:empresaid', tokenVerificacion.ensureToken, control.getPolizasPorEmpresaFechaVencimiento);
router.post('/polizasPorSucursalYVencimiento/:sucursalid', tokenVerificacion.ensureToken, control.getPolizasPorSucursalVencimiento);
router.get('/polizasPorTomadorYEmpresa/:tomadorid/:empresaid', tokenVerificacion.ensureToken, control.getPolizasPorTomadorYEmpresa);
router.get('/polizasPorTomadorYSucursal/:tomadorid/:sucursalid', tokenVerificacion.ensureToken, control.getPolizasPorTomadorYSucursal);
router.get('/polizasPorEmpresaSinMemo/:empresaid', tokenVerificacion.ensureToken, control.getPolizasPorEmpresaSinMemo);
router.get('/polizasPorSucursalSinMemo/:sucursalid', tokenVerificacion.ensureToken, control.getPolizasPorSucursalSinMemo);
// /api/empresas/:empresaID
router.get('/:id', tokenVerificacion.ensureToken, control.getOnePoliza);
router["delete"]('/:id', tokenVerificacion.ensureToken, control.deletePoliza);
router.put('/baja/:id', tokenVerificacion.ensureToken, control.bajaPoliza);

//siniestro  tipopolizaid
router.get('/polizasPorSucursals/:sucursalid', tokenVerificacion.ensureToken, control.getPolizasPorSucursal);
router.get('/polizasPorEmpresas/:empresaid', tokenVerificacion.ensureToken, control.getPolizasPorEmpresa);
router.get('/polizasPorSucursalsYTipo/:sucursalid/:tipopolizaid/:tiporamoid', tokenVerificacion.ensureToken, control.getPolizasPorSucursalYTipo);
router.get('/polizasPorEmpresasYTipo/:empresaid/:tipopolizaid/:tiporamoid', tokenVerificacion.ensureToken, control.getPolizasPorEmpresaYTipo);
/**busquedas por detalle  */
router.post('/buscarPolizasDetallePorSucursal/:sucursalid', tokenVerificacion.ensureToken, control.getBuscarPolizasDetallePorSucursal); //GENRAL SOLO UNA CONSULTA
router.post('/buscarPolizasDetallePorEmpresa/:empresaid', tokenVerificacion.ensureToken, control.getBuscarPolizasDetallePorEmpresa); //GENRAL SOLO UNA CONSULTA
/**busquedas por detalle   no sera usado*/
router.get('/polizasDetalleAutomotorPorEmpresaYTipo/:dato/:empresaid/:tipopolizaid', tokenVerificacion.ensureToken, control.getPolizasDetalleAutomotorPorEmpresaYTipo);
router.get('/polizasDetalleAutomotorPorSucursalYTipo/:dato/:sucursalid/:tipopolizaid', tokenVerificacion.ensureToken, control.getPolizasDetalleAutomotorPorSucursalYTipo);
router.get('/polizasDetalleGeneralPorEmpresaYTipo/:dato/:empresaid/:tipopolizaid', tokenVerificacion.ensureToken, control.getPolizasDetalleGeneralPorEmpresaYTipo);
router.get('/polizasDetalleGeneralPorSucursalYTipo/:dato/:sucursalid/:tipopolizaid', tokenVerificacion.ensureToken, control.getPolizasDetalleGeneralPorSucursalYTipo);
router.get('/polizasDetalleSaludPorEmpresaYTipo/:dato/:empresaid/:tipopolizaid', tokenVerificacion.ensureToken, control.getPolizasDetalleSaludPorEmpresaYTipo);
router.get('/polizasDetalleSaludPorSucursalYTipo/:dato/:sucursalid/:tipopolizaid', tokenVerificacion.ensureToken, control.getPolizasDetalleSaludPorSucursalYTipo);

/** envio de correo */
router.get('/vencimientoPoliza/:id', tokenVerificacion.ensureToken, control.vencimientoPoliza);
router.get('/obtenerPoliza/:id', tokenVerificacion.ensureToken, control.obtenerPoliza);
var _default = exports["default"] = router;