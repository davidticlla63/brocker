import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

/* import { createArchivo, getArchivos, getOneArchivo, deleteArchivo, updateArchivo ,getArchivoByEmpresa,createArchivoPermisos} from "../controllers/archivo.controller"; */
import * as archivo from "../controllers/archivo.controller";
router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/archivos/
router.post('/',archivo. createArchivo);
router.get('/', archivo.getArchivos);
router.get('/:codigo', archivo.getArchivosCodigo);

// /api/archivos/:archivoID
router.get('/:id', archivo.getOneArchivo);
router.delete('/:id', archivo.deleteArchivo);
router.put('/:id', archivo.updateArchivo);

export default router;