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
    .use(compression())
     .use(tokenVerificacion.ensureToken); // ✅ Middleware global para el router;
// /api/empresas/
router.post('/', control.createSubRamo);
router.get('/', control.getSubRamos);

// /api/empresas/:empresaID
router.get('/:id', control.getOneSubRamo);
router.delete('/:id', control.deleteSubRamo);
router.put('/:id', control.updateSubRamo);
router.put('/baja/:id', control.bajaSubRamo);
router.get('/subRamosPorRamo/:ramoid', control.subRamosPorRamo);

export default router;