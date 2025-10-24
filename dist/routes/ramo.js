"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var control = _interopRequireWildcard(require("../controllers/ramo.controller"));
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
// /api/empresas/
router.post('/', control.createRamo);
router.get('/', control.getRamos);

// /api/empresas/:empresaID
router.get('/:id', control.getOneRamo);
router["delete"]('/:id', control.deleteRamo);
router.put('/:id', control.updateRamo);
router.put('/baja/:id', control.bajaRamo);
router.get('/ramosPorEmpresa/:empresaid', control.getRamosPorEmpresa);
router.get('/ramosPorEmpresas/:empresaid', control.getRamosPorEmpresas);
router.get('/obtenerRamosPorEmpresas/:empresaid', control.obtenerRamosPorEmpresa);
router.get('/subRamos/:ramoid', control.getSubRamos);
router.get('/ramoPorEmpresa/:empresaid', control.ramoPorEmpresa);
var _default = exports["default"] = router;