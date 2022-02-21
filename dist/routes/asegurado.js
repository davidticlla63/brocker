"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var asegurados = _interopRequireWildcard(require("../controllers/asegurado.controller"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var bodyParser = require("body-parser");

var cors = require("cors");

var compression = require("compression");

var router = (0, _express.Router)();
router.use(cors()).use(bodyParser.json()).use(compression()); // /api/empresas/

router.post('/', asegurados.createAsegurado);
router.get('/', asegurados.getAsegurados); // /api/empresas/:empresaID

router.get('/:id', asegurados.getOneAsegurado);
router["delete"]('/:id', asegurados.deleteAsegurado);
router.put('/:id', asegurados.updateAsegurado);
router.put('/baja/:id', asegurados.bajaAsegurado);
router.get('/aseguradosPorSucursal/:sucuesalid', asegurados.aseguradosPorSucursal);
router.get('/aseguradosPorSucursalYTipo/:sucursalid/:tipoasegurado', asegurados.aseguradosPorSucursalYTipo);
router.get('/aseguradosPorEmpresaYTipo/:empresaid/:tipoasegurado', asegurados.aseguradosPorEmpresaYTipo);
router.get('/todoLosAseguradosPorSucursal/:sucursalid', asegurados.todoLosAseguradosPorSucursal);
router.get('/todoLosAseguradosPorEmpresa/:empresaid', asegurados.todoLosAseguradosPorEmpresa);
router.get('/aseguradosPorSucursals/:sucursalid', asegurados.aseguradosPorSucursals);
router.get('/aseguradosPorEmpresas/:empresaid', asegurados.aseguradosPorEmpresas);
var _default = router;
exports["default"] = _default;