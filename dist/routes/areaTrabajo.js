"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _areaTrabajo = require("../controllers/areaTrabajo.controller");

var bodyParser = require("body-parser");

var cors = require("cors");

var compression = require("compression");

var router = (0, _express.Router)();
router.use(cors()).use(bodyParser.json()).use(compression()); // /api/empresas/

router.post('/', _areaTrabajo.createAreaTrabajo);
router.get('/', _areaTrabajo.getAreaTrabajos); // /api/empresas/:empresaID

router.get('/:id', _areaTrabajo.getOneAreaTrabajo);
router["delete"]('/:id', _areaTrabajo.deleteAreaTrabajo);
router.put('/:id', _areaTrabajo.updateAreaTrabajo);
router.get('/areaTrabajoPorEmpresa/:empresaid', _areaTrabajo.areaTrabajoByEmpresa);
router.put('/baja/:id', _areaTrabajo.bajaAreaTrabajo);
var _default = router;
exports["default"] = _default;