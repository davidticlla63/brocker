"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _empresa = require("../controllers/empresa.controller");

var bodyParser = require("body-parser");

var cors = require("cors");

var compression = require("compression");

var router = (0, _express.Router)();
router.use(cors()).use(bodyParser.json())
/*   .use(bodyParser.json({ limit: '500mb' }))
  .use(bodyParser.urlencoded({
      limit: '500mb',
      extended: true,
      parameterLimit: 50000
  })) */
//.use(bodyParser.json({limit: '50mb'}))
//.use(bodyParser.urlencoded({limit: '50mb', extended: true}))
//.use(limit(100000000))
.use(compression()); // /api/empresas/

router.post('/', _empresa.createEmpresa);
router.get('/', _empresa.getEmpresas); // /api/empresas/:empresaID

router.get('/:id', _empresa.getOneEmpresa);
router["delete"]('/:id', _empresa.deleteEmpresa);
router.put('/:id', _empresa.updateEmpresa);
router.put('/baja/:id', _empresa.bajaEmpresa);
var _default = router;
exports["default"] = _default;