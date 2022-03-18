"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var ramoCompanias = _interopRequireWildcard(require("../controllers/ramoCompania.controller"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
})); // /api/empresas/

router.post('/', ramoCompanias.createRamoCompania); //router.get('/', ramoCompanias.getRamoCompanias);
// /api/empresas/:empresaID

router.get('/:id', ramoCompanias.getOneRamoCompania);
router["delete"]('/:id', ramoCompanias.deleteRamoCompania);
router.put('/:id', ramoCompanias.updateRamoCompania);
router.put('/baja/:id', ramoCompanias.bajaRamoCompania);
router.get('/ramoCompaniasPorRamo/:ramoid', ramoCompanias.ramoCompaniaPorRamo);
router.get('/ramoCompaniasPorCompania/:companiaseguroid', ramoCompanias.ramoCompaniaPorCompania);
router.get('/ramoCompaniaPorEmpresa/:empresaid', ramoCompanias.ramoCompaniaPorEmpresa);
var _default = router;
exports["default"] = _default;