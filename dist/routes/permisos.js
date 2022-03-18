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

var shouldCompress = function shouldCompress(req, res) {
  if (req.headers['x-no-compression']) {
    // No comprimira las respuestas, si este encabezado 
    // está presente.
    return false;
  } // Recurrir a la compresión estándar


  return compression.filter(req, res);
};

router.use(cors()).use(bodyParser.json()).use(compression({
  // filter: Decide si la respuesta debe comprimirse o no,
  // en función de la función 'shouldCompress' anterior
  filter: shouldCompress,
  // threshold: Es el umbral de bytes para el tamaño del cuerpo
  // de la respuesta antes de considerar la compresión,
  // el valor predeterminado es 1 kB
  threshold: 0
})); // /api/perfils/

router.post('/', _permiso.createPermiso);
router.get('/', _permiso.getPermisos); // /api/perfils/:perfilID

router.get('/:id', _permiso.getOnePermiso);
router["delete"]('/:id', _permiso.deletePermiso);
router.put('/:id', _permiso.updatePermiso); //router.post('/createPermiso/:perfilid', createPermiso);

var _default = router;
exports["default"] = _default;