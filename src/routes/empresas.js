import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

const swaggerUI = require('swagger-ui-express')
const swaggerJSDoc = require('swagger-jsdoc')

import * as control from "../controllers/empresa.controller";
import * as tokenVerificacion  from '../jwt/jwtVerificacion'

router
  .use(cors())
  .use(bodyParser.json())
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

const options = {
  definition: {
    info: {
      title: 'Swagger api broker',
      version: '1.0.0',
      description: '06/23/2021 demo'
    }
  },
  apis: ['src/routes/empresas.js']
}

const swaggerSpec = swaggerJSDoc(options)
// console.log(swaggerSpec)

router.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
var corsOptions = {
  origin: 'http://localhost.com',
  optionSuccessStatus: 200
}


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
router.post('/', control.createEmpresa);

// /api/empresas/
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
router.get('/', control.getEmpresas);

// /api/empresas/:empresaID
router.get('/:id', control.getOneEmpresa);
router.delete('/:id', control.deleteEmpresa);
router.put('/:id', control.updateEmpresa);
router.put('/baja/:id', control.bajaEmpresa);
export default router;