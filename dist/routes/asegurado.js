"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var control = _interopRequireWildcard(require("../controllers/asegurado.controller"));
var tokenVerificacion = _interopRequireWildcard(require("../jwt/jwtVerificacion"));
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
// /api/empresas/
router.post('/', tokenVerificacion.ensureToken, control.createAsegurado);
router.get('/', tokenVerificacion.ensureToken, control.getAsegurados);

// /api/empresas/:empresaID
router.get('/:id', tokenVerificacion.ensureToken, control.getOneAsegurado);
router["delete"]('/:id', tokenVerificacion.ensureToken, control.deleteAsegurado);
router.put('/:id', tokenVerificacion.ensureToken, control.updateAsegurado);
router.put('/baja/:id', tokenVerificacion.ensureToken, control.bajaAsegurado);
router.get('/aseguradosPorSucursal/:sucuesalid', tokenVerificacion.ensureToken, control.aseguradosPorSucursal);
router.get('/aseguradosPorSucursalYTipo/:sucursalid/:tipoasegurado', tokenVerificacion.ensureToken, control.aseguradosPorSucursalYTipo);
router.get('/aseguradosPorEmpresaYTipo/:empresaid/:tipoasegurado', tokenVerificacion.ensureToken, control.aseguradosPorEmpresaYTipo);
router.get('/todoLosAseguradosPorSucursal/:sucursalid', tokenVerificacion.ensureToken, control.todoLosAseguradosPorSucursal);
router.get('/todoLosAseguradosPorEmpresa/:empresaid', tokenVerificacion.ensureToken, control.todoLosAseguradosPorEmpresa);
router.get('/aseguradosPorSucursals/:sucursalid', tokenVerificacion.ensureToken, control.aseguradosPorSucursals);
router.get('/aseguradosPorEmpresas/:empresaid', tokenVerificacion.ensureToken, control.aseguradosPorEmpresas);
var _default = router;
exports["default"] = _default;