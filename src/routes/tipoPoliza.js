import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as control from "../controllers/tipoPoliza.controller";
import * as tokenVerificacion  from '../jwt/jwtVerificacion'
router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/', tokenVerificacion.ensureToken,control.createTipoPoliza);
router.get('/',tokenVerificacion.ensureToken, control.getTipoPolizas);

// /api/empresas/:empresaID
router.get('/:id',tokenVerificacion.ensureToken, control.getOneTipoPoliza);
router.delete('/:id',tokenVerificacion.ensureToken, control.deleteTipoPoliza);
router.put('/:id',tokenVerificacion.ensureToken, control.updateTipoPoliza);
router.put('/baja/:id',tokenVerificacion.ensureToken, control.bajaTipoPoliza);

export default router;