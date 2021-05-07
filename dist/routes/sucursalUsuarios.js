"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _sucursalUsuario = require("../controllers/sucursalUsuario.controller");

var bodyParser = require("body-parser");

var cors = require("cors");

var compression = require("compression");

var router = (0, _express.Router)();
router.use(cors()).use(bodyParser.json()).use(compression()); // /api/sucursalUsuarios/

router.post('/', _sucursalUsuario.createSucursalUsuario);
router.get('/', _sucursalUsuario.getSucursalUsuarios); // /api/sucursalUsuarios/:sucursalUsuarioID

router.get('/:id', _sucursalUsuario.getOneSucursalUsuario);
router["delete"]('/:id', _sucursalUsuario.deleteSucursalUsuario);
router.put('/:id', _sucursalUsuario.updateSucursalUsuario);
var _default = router;
exports["default"] = _default;