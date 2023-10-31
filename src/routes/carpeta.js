import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as control from "../controllers/carpeta.controller";
import * as tokenVerificacion  from '../jwt/jwtVerificacion'

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/',tokenVerificacion.ensureToken, control.createCarpeta);
router.get('/', tokenVerificacion.ensureToken,control.getCarpetas);

// /api/empresas/:empresaID
router.get('/:id',tokenVerificacion.ensureToken, control.getOneCarpeta);
router.delete('/:id',tokenVerificacion.ensureToken, control.deleteCarpeta);
router.put('/:id',tokenVerificacion.ensureToken, control.updateCarpeta);
router.put('/baja/:id',tokenVerificacion.ensureToken, control.bajaCarpeta);

export default router;