"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var control = _interopRequireWildcard(require("../controllers/siniestro.controller"));
var tokenVerificacion = _interopRequireWildcard(require("../jwt/jwtVerificacion"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var bodyParser = require("body-parser");
var cors = require("cors");
var compression = require("compression");
var router = (0, _express.Router)();
router.use(cors()).use(bodyParser.json()).use(compression());
// /api/empresas/
router.post('/', tokenVerificacion.ensureToken, control.createSiniestro);
router.get('/', tokenVerificacion.ensureToken, control.getSiniestros);

// /api/empresas/:empresaID
router.get('/:id', tokenVerificacion.ensureToken, control.getOneSiniestro);
router["delete"]('/:id', tokenVerificacion.ensureToken, control.deleteSiniestro);
router.put('/:id', tokenVerificacion.ensureToken, control.updateSiniestro);
router.put('/baja/:id', tokenVerificacion.ensureToken, control.bajaSiniestro);
router.get('/siniestroPorSucursal/:sucursalid', tokenVerificacion.ensureToken, control.getSiniestroPorSucursal);
router.get('/siniestroPorEmpresa/:empresaid', tokenVerificacion.ensureToken, control.getSiniestroPorEmpresa);

/**dashoboard */
router.get('/totalSiniestrosPorEmpresa/:empresaid', tokenVerificacion.ensureToken, control.getTotalSiniestrosPorEmpresa);
router.get('/totalSiniestrosPorSucursal/:sucursalid', tokenVerificacion.ensureToken, control.getTotalSiniestrosPorSucursal);
var _default = exports["default"] = router;