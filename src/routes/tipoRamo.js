import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as control from "../controllers/tipoRamo.controller";
import * as tokenVerificacion  from '../jwt/jwtVerificacion'

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression())
     .use(tokenVerificacion.ensureToken); // ✅ Middleware global para el router;
// /api/empresas/
router.post('/', control.createTipoRamo);
router.get('/', control.getTipoRamos);

// /api/empresas/:empresaID
router.get('/:id', control.getOneTipoRamo);
router.delete('/:id', control.deleteTipoRamo);
router.put('/:id', control.updateTipoRamo);
router.put('/baja/:id', control.bajaTipoRamo);
router.get('/tipoRamosPorEmpresa/:empresaid', control.getTipoRamosPorEmpresa);
export default router;