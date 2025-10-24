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
})).use(tokenVerificacion.ensureToken); // ✅ Middleware global para el router;

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
router["delete"]('/:id', control.deletePoliza);
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
var _default = exports["default"] = router;