"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var polizas = _interopRequireWildcard(require("../controllers/poliza.controller"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var bodyParser = require("body-parser");

var cors = require("cors");

var compression = require("compression");

var router = (0, _express.Router)();
router.use(cors()).use(bodyParser.json()).use(compression()); // /api/empresas/
//polizas de automotor

router.post('/', polizas.createPoliza);
router.put('/:id', polizas.updatePoliza); //polizas de salud

router.post('/salud/', polizas.createPolizaSalud);
router.put('/salud/:id', polizas.updatePolizaSalud); //polizas de proposito general

router.post('/general/', polizas.createPolizaGeneral);
router.put('/general/:id', polizas.updatePolizaGeneral);
router.get('/', polizas.getPolizas);
router.get('/polizasPorSucursal/:sucursalid', polizas.polizasPorSucursal);
router.get('/polizasPorTipoYSucursal/:tipopolizaid/:sucursalid', polizas.getPolizaPorTipoYSucursal);
router.get('/polizasPorTipoYEmpresa/:tipopolizaid/:empresaid', polizas.getPolizasPorTipoYEmpresa);
router.post('/polizasPorTipoRamoYEmpresa/:tiporamoid/:empresaid', polizas.getPolizasPorTipoRamoYEmpresa);
router.post('/polizasPorTipoRamoYSucursal/:tiporamoid/:sucursalid', polizas.getPolizasPorTipoRamoYSucursal);
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
router.get('/polizasPorSucursalsYTipo/:sucursalid/:tipopolizaid', polizas.getPolizasPorSucursalYTipo);
router.get('/polizasPorEmpresasYTipo/:empresaid/:tipopolizaid', polizas.getPolizasPorEmpresaYTipo);
var _default = router;
exports["default"] = _default;