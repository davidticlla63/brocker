"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var control = _interopRequireWildcard(require("../controllers/sucursal.controller"));
var tokenVerificacion = _interopRequireWildcard(require("../jwt/jwtVerificacion"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var bodyParser = require("body-parser");
var cors = require("cors");
var compression = require("compression");
var router = (0, _express.Router)();
//{ createSucursal, getSucursals, getOneSucursal, deleteSucursal, updateSucursal,getSucursalByEmpresa,bajaSucursal }

router.use(cors()).use(bodyParser.json()).use(compression());
// /api/sucursals/
router.post('/', tokenVerificacion.ensureToken, control.createSucursal);
router.get('/', tokenVerificacion.ensureToken, control.getSucursals);

// /api/sucursals/:sucursalID
router.get('/:id', tokenVerificacion.ensureToken, control.getOneSucursal);
router["delete"]('/:id', tokenVerificacion.ensureToken, control.deleteSucursal);
router.put('/:id', tokenVerificacion.ensureToken, control.updateSucursal);
router.put('/baja/:id', tokenVerificacion.ensureToken, control.bajaSucursal);
router.get('/susursalesPorEmpresa/:empresaid', tokenVerificacion.ensureToken, control.getSucursalByEmpresa);
var _default = router;
exports["default"] = _default;