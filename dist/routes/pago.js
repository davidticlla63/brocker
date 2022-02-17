"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var pagos = _interopRequireWildcard(require("../controllers/pagos.controller"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var bodyParser = require("body-parser");

var cors = require("cors");

var compression = require("compression");

var router = (0, _express.Router)();
router.use(cors()).use(bodyParser.json()).use(compression());
router.post('/', pagos.createPagos);
router.post('/crear/', pagos.crearPagos);
router.get('/', pagos.getPagoss); // /api/empresas/:empresaID

router.get('/:id', pagos.getOnePagos);
router["delete"]('/:id', pagos.deletePagos);
router.put('/:id', pagos.updatePagos);
router.put('/baja/:id', pagos.bajaPagos);
router.get('/generalPorSucursal/:sucursalid', pagos.getPagosGeneralesPorSucursal);
router.get('/actualesPorSucursal/:sucursalid', pagos.getPagosActualesPorSucursal);
router.get('/pendientesPorSucursal/:sucursalid', pagos.getPagosPendientesPorSucursal);
router.get('/moraPorSucursal/:sucursalid', pagos.getPagosMoraPorSucursal);
router.get('/actualesPorEmpresa/:empresaid', pagos.getPagosActualesPorEmpresa);
router.get('/pendientesPorEmpresa/:empresaid', pagos.getPagosPendientesPorEmpresa);
router.get('/moraPorEmpresa/:empresaid', pagos.getPagosMoraPorEmpresa);
router.get('/pagosPorSucursalYCI/:sucursalid/:cinit', pagos.getPagosPorSucursalyCi);
router.get('/pagosPorEmpresaYCI/:empresaid/:cinit', pagos.getPagosPorEmpresayCi);
router.post('/pagoPorSucursal/:sucursalid', pagos.getPagosPorSucursal);
router.post('/pagoPorEmpresa/:empresaid', pagos.getPagosPorEmpresa);
/**dashoboard */

router.get('/totalPagosPorEmpresa/:empresaid', pagos.getTotalPagosPorEmpresa);
router.get('/totalPagosPorSucursal/:sucursalid', pagos.getTotalPagosPorSucursal);
var _default = router;
exports["default"] = _default;