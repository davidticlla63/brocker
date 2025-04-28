import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as control from "../controllers/archivo.controller";
import * as tokenVerificacion from '../jwt/jwtVerificacion';

router
  .use(cors())
  .use(bodyParser.json())
  .use(compression())
  .use(tokenVerificacion.ensureToken); // ✅ Middleware global para el router

// /api/archivos/
router.post('/', control.createArchivo);
router.get('/', control.getArchivos);
router.get('/:codigo', control.getArchivosCodigo);
router.get('/archivosXAsegurado/:aseguradoid', control.getArchivosXAsegurado);
// /api/archivos/:archivoID
router.get('/:id', control.getOneArchivo);
router.delete('/:id', control.deleteArchivo);
router.put('/:id', control.updateArchivo);

export default router;


/* import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();


import * as control from "../controllers/archivo.controller";
import * as tokenVerificacion  from '../jwt/jwtVerificacion'
router
    .use(cors())
    .use(bodyParser.json())
    .use(compression())
    ;
// /api/archivos/
router.post('/',tokenVerificacion.ensureToken,control. createArchivo);
router.get('/',tokenVerificacion.ensureToken, control.getArchivos);
router.get('/:codigo',tokenVerificacion.ensureToken, control.getArchivosCodigo);
router.get('/archivosXAsegurado/:aseguradoid',tokenVerificacion.ensureToken, control.getArchivosXAsegurado);
// /api/archivos/:archivoID
router.get('/:id',tokenVerificacion.ensureToken, control.getOneArchivo);
router.delete('/:id',tokenVerificacion.ensureToken, control.deleteArchivo);
router.put('/:id',tokenVerificacion.ensureToken, control.updateArchivo);

export default router; */