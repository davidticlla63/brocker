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
    .use(compression());
// /api/empresas/
router.post('/',tokenVerificacion.ensureToken, control.createTipoRamo);
router.get('/', tokenVerificacion.ensureToken,control.getTipoRamos);

// /api/empresas/:empresaID
router.get('/:id',tokenVerificacion.ensureToken, control.getOneTipoRamo);
router.delete('/:id', tokenVerificacion.ensureToken,control.deleteTipoRamo);
router.put('/:id', tokenVerificacion.ensureToken,control.updateTipoRamo);
router.put('/baja/:id', tokenVerificacion.ensureToken,control.bajaTipoRamo);
router.get('/tipoRamosPorEmpresa/:empresaid',tokenVerificacion.ensureToken, control.getTipoRamosPorEmpresa);
export default router;