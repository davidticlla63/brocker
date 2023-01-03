"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var user = _interopRequireWildcard(require("../controllers/usuario.controller"));

var tokenVerificacion = _interopRequireWildcard(require("../jwt/jwtVerificacion"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var bodyParser = require("body-parser");

var cors = require("cors");

var compression = require("compression");

var router = (0, _express.Router)(); //{ createUsuario, getUsuarios, getOneUsuario, deleteUsuario, updateUsuario,usuarioByEmpresa,usuarioBySucursal,bajaUsuario,login } 

router.use(cors()).use(bodyParser.json()).use(compression()); // /api/usuarios/

router.post('/', user.createUsuario);
router.get('/', user.getUsuarios); // /api/usuarios/:usuarioID

router.get('/:id', user.getOneUsuario);
router["delete"]('/:id', user.deleteUsuario);
router.put('/:id', user.updateUsuario);
router.post('/login', user.login); //router.put('/login', login);

/* router.get('/usuarioByEmpresa/:empresaid',tokenVerificacion.ensureToken, user.usuarioByEmpresa);
router.get('/usuarioBySucursal/:sucursalid',tokenVerificacion.ensureToken, user.usuarioBySucursal);
router.get('/usuariosBySucursal/:sucursalid',tokenVerificacion.ensureToken, user.usuariosBySucursal); */

router.get('/usuarioByEmpresa/:empresaid', user.usuarioByEmpresa);
router.get('/usuarioBySucursal/:sucursalid', user.usuarioBySucursal);
router.get('/usuariosBySucursal/:sucursalid', user.usuariosBySucursal);
router.put('/baja/:id', user.bajaUsuario);
var _default = router;
exports["default"] = _default;