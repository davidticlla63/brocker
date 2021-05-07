"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _pagina = require("../controllers/pagina.controller");

var bodyParser = require("body-parser");

var cors = require("cors");

var compression = require("compression");

var router = (0, _express.Router)();
router.use(cors()).use(bodyParser.json()).use(compression()); // /api/perfils/

router.post('/', _pagina.createPagina);
router.get('/', _pagina.getPaginas); // /api/perfils/:perfilID

router.get('/:id', _pagina.getOnePagina);
router["delete"]('/:id', _pagina.deletePagina);
router.put('/:id', _pagina.updatePagina);
var _default = router;
exports["default"] = _default;