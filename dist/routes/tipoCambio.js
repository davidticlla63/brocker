"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _tipoCambio = require("../controllers/tipoCambio.controller");

var bodyParser = require("body-parser");

var cors = require("cors");

var compression = require("compression");

var router = (0, _express.Router)();
router.use(cors()).use(bodyParser.json()).use(compression()); // /api/empresas/

router.post('/', _tipoCambio.createTipoCambio);
router.get('/', _tipoCambio.getTipoCambios); // /api/empresas/:empresaID

router.get('/:id', _tipoCambio.getOneTipoCambio);
router["delete"]('/:id', _tipoCambio.deleteTipoCambio);
router.put('/:id', _tipoCambio.updateTipoCambio);
router.get('/tipoCambioPorEmpresa/:empresaid', _tipoCambio.tipoCambioByEmpresa);
router.put('/baja/:id', _tipoCambio.bajaTipoCambio);
var _default = router;
exports["default"] = _default;