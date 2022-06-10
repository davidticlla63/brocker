"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var polizas = _interopRequireWildcard(require("../controllers/poliza.controller"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var bodyParser = require("body-parser");

var cors = require("cors");

var compression = require("compression");

var router = (0, _express.Router)();

var shouldCompress = function shouldCompress(req, res) {
  if (req.headers['x-no-compression']) {
    // No comprimira las respuestas, si este encabezado 
    // está presente.
    return false;
  } // Recurrir a la compresión estándar


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
})); // /api/empresas/
//polizas de automotor

router.post('/', polizas.createPoliza);
router.put('/:id', polizas.updatePoliza); //polizas de salud

router.post('/salud/', polizas.createPolizaSalud);
router.put('/salud/:id', polizas.updatePolizaSalud); //polizas de proposito general

router.post('/general/', polizas.createPolizaGeneral);
router.put('/general/:id', polizas.updatePolizaGeneral); //polizas de generico

router.post('/generico/', polizas.createPolizaGenerica);
router.put('/generico/:id', polizas.updatePolizaGenerica); //obtener detalle generico

router.get('/detalle/:id', polizas.obtenerDetallesPorPoliza);
router.get('/', polizas.getPolizas);
router.get('/polizasPorSucursal/:sucursalid', polizas.polizasPorSucursal);
router.get('/polizasPorTipoYSucursal/:tipopolizaid/:sucursalid', polizas.getPolizaPorTipoYSucursal);
router.get('/polizasPorTipoYEmpresa/:tipopolizaid/:empresaid', polizas.getPolizasPorTipoYEmpresa);
router.post('/polizasPorTipoRamoYEmpresa/:tipopoliza/:tiporamoid/:empresaid', polizas.getPolizasPorTipoRamoYEmpresa);
router.post('/polizasPorTipoRamoYSucursal/:tipopoliza/:tiporamoid/:sucursalid', polizas.getPolizasPorTipoRamoYSucursal);
router.get('/polizasHijo/:polizaid', polizas.getPolizaHijo);
router.post('/polizasPorEmpresaGeneral/:empresaid', polizas.polizasPorEmpresaGeneral);
router.post('/polizasPorSucursalGeneral/:sucursalid', polizas.polizasPorSucursalGeneral);
router.post('/polizasPorEmpresaYVencimiento/:empresaid', polizas.getPolizasPorEmpresaFechaVencimiento);
router.post('/polizasPorSucursalYVencimiento/:sucursalid', polizas.getPolizasPorSucursalVencimiento);
router.get('/polizasPorTomadorYEmpresa/:tomadorid/:empresaid', polizas.getPolizasPorTomadorYEmpresa);
router.get('/polizasPorTomadorYSucursal/:tomadorid/:sucursalid', polizas.getPolizasPorTomadorYSucursal);
router.get('/polizasPorEmpresaSinMemo/:empresaid', polizas.getPolizasPorEmpresaSinMemo);
router.get('/polizasPorSucursalSinMemo/:sucursalid', polizas.getPolizasPorSucursalSinMemo); // /api/empresas/:empresaID

router.get('/:id', polizas.getOnePoliza);
router["delete"]('/:id', polizas.deletePoliza);
router.put('/baja/:id', polizas.bajaPoliza); //siniestro  tipopolizaid

router.get('/polizasPorSucursals/:sucursalid', polizas.getPolizasPorSucursal);
router.get('/polizasPorEmpresas/:empresaid', polizas.getPolizasPorEmpresa);
router.get('/polizasPorSucursalsYTipo/:sucursalid/:tipopolizaid/:tiporamoid', polizas.getPolizasPorSucursalYTipo);
router.get('/polizasPorEmpresasYTipo/:empresaid/:tipopolizaid/:tiporamoid', polizas.getPolizasPorEmpresaYTipo);
/**busquedas por detalle  */

router.post('/buscarPolizasDetallePorSucursal/:sucursalid', polizas.getBuscarPolizasDetallePorSucursal); //GENRAL SOLO UNA CONSULTA

router.post('/buscarPolizasDetallePorEmpresa/:empresaid', polizas.getBuscarPolizasDetallePorEmpresa); //GENRAL SOLO UNA CONSULTA

/**busquedas por detalle   no sera usado*/

router.get('/polizasDetalleAutomotorPorEmpresaYTipo/:dato/:empresaid/:tipopolizaid', polizas.getPolizasDetalleAutomotorPorEmpresaYTipo);
router.get('/polizasDetalleAutomotorPorSucursalYTipo/:dato/:sucursalid/:tipopolizaid', polizas.getPolizasDetalleAutomotorPorSucursalYTipo);
router.get('/polizasDetalleGeneralPorEmpresaYTipo/:dato/:empresaid/:tipopolizaid', polizas.getPolizasDetalleGeneralPorEmpresaYTipo);
router.get('/polizasDetalleGeneralPorSucursalYTipo/:dato/:sucursalid/:tipopolizaid', polizas.getPolizasDetalleGeneralPorSucursalYTipo);
router.get('/polizasDetalleSaludPorEmpresaYTipo/:dato/:empresaid/:tipopolizaid', polizas.getPolizasDetalleSaludPorEmpresaYTipo);
router.get('/polizasDetalleSaludPorSucursalYTipo/:dato/:sucursalid/:tipopolizaid', polizas.getPolizasDetalleSaludPorSucursalYTipo);
/** envio de correo */

router.get('/vencimientoPoliza/:id', polizas.vencimientoPoliza);
router.get('/obtenerPoliza/:id', polizas.obtenerPoliza);
var _default = router;
exports["default"] = _default;