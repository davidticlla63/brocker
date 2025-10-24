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
router.use(cors()).use(bodyParser.json()).use(compression()).use(tokenVerificacion.ensureToken); // ✅ Middleware global para el router;
// /api/empresas/
router.post('/', control.createSiniestro);
router.get('/', control.getSiniestros);

// /api/empresas/:empresaID
router.get('/:id', control.getOneSiniestro);
router["delete"]('/:id', control.deleteSiniestro);
router.put('/:id', control.updateSiniestro);
router.put('/baja/:id', control.bajaSiniestro);
router.get('/siniestroPorSucursal/:sucursalid', control.getSiniestroPorSucursal);
router.get('/siniestroPorEmpresa/:empresaid', control.getSiniestroPorEmpresa);

/**dashoboard */
router.get('/totalSiniestrosPorEmpresa/:empresaid', control.getTotalSiniestrosPorEmpresa);
router.get('/totalSiniestrosPorSucursal/:sucursalid', control.getTotalSiniestrosPorSucursal);
var _default = exports["default"] = router;