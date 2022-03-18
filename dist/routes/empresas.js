"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var empresa = _interopRequireWildcard(require("../controllers/empresa.controller"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var bodyParser = require("body-parser");

var cors = require("cors");

var compression = require("compression");

var router = (0, _express.Router)();

var swaggerUI = require('swagger-ui-express');

var swaggerJSDoc = require('swagger-jsdoc');

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
.use(compression());
var options = {
  definition: {
    info: {
      title: 'Swagger api broker',
      version: '1.0.0',
      description: '06/23/2021 demo'
    }
  },
  apis: ['src/routes/empresas.js']
};
var swaggerSpec = swaggerJSDoc(options); // console.log(swaggerSpec)

router.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
var corsOptions = {
  origin: 'http://localhost.com',
  optionSuccessStatus: 200
};
/**
   * @swagger
   * definitions:
   *   empresa:
   *     required:
   *       - id
   *       - razonsocial
   *       - descripcion
   *       - telefono
   *       - nit
   *       - representante
   *     properties:
   *       id:
   *         type: string
   *       razonsocial:
   *         type: string
   *       descripcion:
   *         type: string
   *       telefono:
   *         type: string
   *       nit:
   *         type: string
   *       representante:
   *         type: string
   */
// /api/empresas/

/**
  * @swagger
  * /api/empresas:
  *  post:
  *   summary: create empresa
  *   description: create empresa for the organisation
  *   requestBody:
  *     required: true
  *     content:
  *       application/json:
  *         schema:
  *             $ref: '#/definitions/empresa' 
  *   responses:
  *    200:
  *     description: empresa created succesfully
  *    500:
  *     description: failure in creating empresa
 */

router.post('/', empresa.createEmpresa); // /api/empresas/

/**
  * @swagger
  * /api/empresas:
  *  get:
  *   summary: obtener
  *   description: create empresa for the organisation
  *   responses:
  *    200:
  *     description: empresa created succesfully
  *    500:
  *     description: failure in creating empresa
  *     content:
  *       application/json:
  *        schema:
  *             $ref: '#/definitions/empresa' 
  */

router.get('/', empresa.getEmpresas); // /api/empresas/:empresaID

router.get('/:id', empresa.getOneEmpresa);
router["delete"]('/:id', empresa.deleteEmpresa);
router.put('/:id', empresa.updateEmpresa);
router.put('/baja/:id', empresa.bajaEmpresa);
var _default = router;
exports["default"] = _default;