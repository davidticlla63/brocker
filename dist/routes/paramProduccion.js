"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var ParamProduccion = _interopRequireWildcard(require("../controllers/paramProduccion.controller"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var bodyParser = require("body-parser");

var cors = require("cors");

var compression = require("compression");

var router = (0, _express.Router)(); //import { createParamProduccions, getParamProduccionss, getOneParamProduccions, deleteParamProduccions, updateParamProduccions,bajaParamProduccions,ParamProduccionsByEmpresa } from "../controllers/ParamProduccions.controller";

router.use(cors()).use(bodyParser.json()).use(compression()); // /api/empresas/

router.post('/', ParamProduccion.createParamProduccion);
router.get('/', ParamProduccion.getParamProduccions); // /api/empresas/:empresaID

router.get('/:id', ParamProduccion.getOneParamProduccion);
router["delete"]('/:id', ParamProduccion.deleteParamProduccion);
router.put('/:id', ParamProduccion.updateParamProduccion);
router.get('/ParamProduccionsPorSucursal/:sucursalid', ParamProduccion.ParamProduccionBySucursal);
router.put('/baja/:id', ParamProduccion.bajaParamProduccion);
var _default = router;
exports["default"] = _default;