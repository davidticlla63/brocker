"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var control = _interopRequireWildcard(require("../controllers/archivo.controller"));
var tokenVerificacion = _interopRequireWildcard(require("../jwt/jwtVerificacion"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var bodyParser = require("body-parser");
var cors = require("cors");
var compression = require("compression");
var router = (0, _express.Router)();

/* import { createArchivo, getArchivos, getOneArchivo, deleteArchivo, updateArchivo ,getArchivoByEmpresa,createArchivoPermisos} from "../controllers/control.controller"; */

router.use(cors()).use(bodyParser.json()).use(compression());
// /api/archivos/
router.post('/', tokenVerificacion.ensureToken, control.createArchivo);
router.get('/', tokenVerificacion.ensureToken, control.getArchivos);
router.get('/:codigo', tokenVerificacion.ensureToken, control.getArchivosCodigo);
router.get('/archivosXAsegurado/:aseguradoid', tokenVerificacion.ensureToken, control.getArchivosXAsegurado);
// /api/archivos/:archivoID
router.get('/:id', tokenVerificacion.ensureToken, control.getOneArchivo);
router["delete"]('/:id', tokenVerificacion.ensureToken, control.deleteArchivo);
router.put('/:id', tokenVerificacion.ensureToken, control.updateArchivo);
var _default = router;
exports["default"] = _default;