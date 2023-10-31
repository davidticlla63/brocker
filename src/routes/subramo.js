import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as control from "../controllers/subRamo.controller";
import * as tokenVerificacion  from '../jwt/jwtVerificacion'
router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/', tokenVerificacion.ensureToken,control.createSubRamo);
router.get('/',tokenVerificacion.ensureToken, control.getSubRamos);

// /api/empresas/:empresaID
router.get('/:id',tokenVerificacion.ensureToken, control.getOneSubRamo);
router.delete('/:id',tokenVerificacion.ensureToken, control.deleteSubRamo);
router.put('/:id',tokenVerificacion.ensureToken, control.updateSubRamo);
router.put('/baja/:id', tokenVerificacion.ensureToken,control.bajaSubRamo);
router.get('/subRamosPorRamo/:ramoid',tokenVerificacion.ensureToken, control.subRamosPorRamo);

export default router;