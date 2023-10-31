import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

/* import { createArchivo, getArchivos, getOneArchivo, deleteArchivo, updateArchivo ,getArchivoByEmpresa,createArchivoPermisos} from "../controllers/control.controller"; */
import * as control from "../controllers/archivo.controller";
import * as tokenVerificacion  from '../jwt/jwtVerificacion'
router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/archivos/
router.post('/',tokenVerificacion.ensureToken,control. createArchivo);
router.get('/',tokenVerificacion.ensureToken, control.getArchivos);
router.get('/:codigo',tokenVerificacion.ensureToken, control.getArchivosCodigo);
router.get('/archivosXAsegurado/:aseguradoid',tokenVerificacion.ensureToken, control.getArchivosXAsegurado);
// /api/archivos/:archivoID
router.get('/:id',tokenVerificacion.ensureToken, control.getOneArchivo);
router.delete('/:id',tokenVerificacion.ensureToken, control.deleteArchivo);
router.put('/:id',tokenVerificacion.ensureToken, control.updateArchivo);

export default router;