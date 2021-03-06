"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var personal = _interopRequireWildcard(require("../controllers/personal.controller"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var bodyParser = require("body-parser");

var cors = require("cors");

var compression = require("compression");

var router = (0, _express.Router)();
/* import { createPersonal, getPersonals, getOnePersonal, deletePersonal, updatePersonal,bajaPersonal,personalByAreaTrabajo ,personalBySucursal,
personalByEmpresa} from "../controllers/personal.controller"; */

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

router.post('/', personal.createPersonal);
router.get('/', personal.getPersonals); // /api/empresas/:empresaID

router.get('/:id', personal.getOnePersonal);
router["delete"]('/:id', personal.deletePersonal);
router.put('/:id', personal.updatePersonal);
router.put('/baja/:id', personal.bajaPersonal);
router.get('/personalBySucursal/:sucursalid', personal.personalBySucursal);
router.get('/personalByAreaTrabajo/:areatrabajoid', personal.personalByAreaTrabajo);
router.get('/personalByEmpresa/:empresaid', personal.personalByEmpresa); //router.get('/personalByEmpresa/:empresaid', personal.personalByEmpresa);

router.get('/personalByAreaTrabajoYSucursal/:areatrabajoid/:sucursalid', personal.personalByAreaTrabajoYSucursal);
router.get('/personalByAreaTrabajoYEmpresa/:areatrabajoid/:empresaid', personal.personalByAreaTrabajoYEmpresa);
var _default = router;
exports["default"] = _default;