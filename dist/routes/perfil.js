"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var perfil = _interopRequireWildcard(require("../controllers/perfil.controller"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var bodyParser = require("body-parser");

var cors = require("cors");

var compression = require("compression");

var router = (0, _express.Router)();
/* import { createPerfil, getPerfils, getOnePerfil, deletePerfil, updatePerfil ,getPerfilByEmpresa,createPerfilPermisos} from "../controllers/perfil.controller"; */

router.use(cors()).use(bodyParser.json()).use(compression()); // /api/perfils/

router.post('/', perfil.createPerfil);
router.get('/', perfil.getPerfils); // /api/perfils/:perfilID

router.get('/:id', perfil.getOnePerfil);
router["delete"]('/:id', perfil.deletePerfil);
router.put('/:id', perfil.updatePerfil);
router.get('/perfilPorEmpresa/:empresaid', perfil.getPerfilByEmpresa);
router.get('/perfilPorSucursal/:sucursalid', perfil.getPerfilBySucursal);
router.post('/createPermisos/:perfilid', perfil.createPerfilPermisos);
router.get('/obtenerPermisosXPerfil/:perfilid', perfil.getPermisosPorPerfil);
var _default = router;
exports["default"] = _default;