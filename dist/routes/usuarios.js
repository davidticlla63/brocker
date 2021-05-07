"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var user = _interopRequireWildcard(require("../controllers/usuario.controller"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

router.get('/usuarioByEmpresa/:empresaid', user.usuarioByEmpresa);
router.get('/usuarioBySucursal/:sucursalid', user.usuarioBySucursal);
router.get('/usuariosBySucursal/:sucursalid', user.usuariosBySucursal);
router.get('/baja/:id', user.bajaUsuario);
var _default = router;
exports["default"] = _default;