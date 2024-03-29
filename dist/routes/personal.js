"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var control = _interopRequireWildcard(require("../controllers/personal.controller"));
var tokenVerificacion = _interopRequireWildcard(require("../jwt/jwtVerificacion"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var bodyParser = require("body-parser");
var cors = require("cors");
var compression = require("compression");
var router = (0, _express.Router)();

/* import { createPersonal, getPersonals, getOnePersonal, deletePersonal, updatePersonal,bajaPersonal,personalByAreaTrabajo ,personalBySucursal,
personalByEmpresa} from "../controllers/personal.controller"; */

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
router.post('/', tokenVerificacion.ensureToken, control.createPersonal);
router.get('/', tokenVerificacion.ensureToken, control.getPersonals);

// /api/empresas/:empresaID
router.get('/:id', tokenVerificacion.ensureToken, control.getOnePersonal);
router["delete"]('/:id', tokenVerificacion.ensureToken, control.deletePersonal);
router.put('/:id', tokenVerificacion.ensureToken, control.updatePersonal);
router.put('/baja/:id', tokenVerificacion.ensureToken, control.bajaPersonal);
router.get('/personalBySucursal/:sucursalid', tokenVerificacion.ensureToken, control.personalBySucursal);
router.get('/personalByAreaTrabajo/:areatrabajoid', tokenVerificacion.ensureToken, control.personalByAreaTrabajo);
router.get('/personalByEmpresa/:empresaid', tokenVerificacion.ensureToken, control.personalByEmpresa);
//router.get('/personalByEmpresa/:empresaid', personal.personalByEmpresa);
router.get('/personalByAreaTrabajoYSucursal/:areatrabajoid/:sucursalid', tokenVerificacion.ensureToken, control.personalByAreaTrabajoYSucursal);
router.get('/personalByAreaTrabajoYEmpresa/:areatrabajoid/:empresaid', tokenVerificacion.ensureToken, control.personalByAreaTrabajoYEmpresa);
router.get('/personalByTipoCarteraYSucursal/:tipocartera/:sucursalid', tokenVerificacion.ensureToken, control.personalByTipoCarteraYSucursal);
router.get('/personalByTipoCarteraYEmpresa/:tipocartera/:empresaid', tokenVerificacion.ensureToken, control.personalByTipoCarteraYEmpresa);
var _default = router;
exports["default"] = _default;