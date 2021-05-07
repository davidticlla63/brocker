"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _permiso = require("../controllers/permiso.controller");

var bodyParser = require("body-parser");

var cors = require("cors");

var compression = require("compression");

var router = (0, _express.Router)();
router.use(cors()).use(bodyParser.json()).use(compression()); // /api/perfils/

router.post('/', _permiso.createPermiso);
router.get('/', _permiso.getPermisos); // /api/perfils/:perfilID

router.get('/:id', _permiso.getOnePermiso);
router["delete"]('/:id', _permiso.deletePermiso);
router.put('/:id', _permiso.updatePermiso); //router.post('/createPermiso/:perfilid', createPermiso);

var _default = router;
exports["default"] = _default;