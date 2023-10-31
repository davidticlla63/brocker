import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as control from "../controllers/cobranzaMotivo.controller";
import * as tokenVerificacion  from '../jwt/jwtVerificacion'

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/',tokenVerificacion.ensureToken, control.createCobranzaMotivo);
router.get('/',tokenVerificacion.ensureToken, control.getCobranzaMotivos);

// /api/empresas/:empresaID
router.get('/:id',tokenVerificacion.ensureToken, control.getOneCobranzaMotivo);
router.delete('/:id',tokenVerificacion.ensureToken, control.deleteCobranzaMotivo);
router.put('/:id',tokenVerificacion.ensureToken, control.updateCobranzaMotivo);
router.put('/baja/:id',tokenVerificacion.ensureToken, control.bajaCobranzaMotivo);
router.put('/cobranzaMotivoPorPlanPago/:planpagoid',tokenVerificacion.ensureToken, control.getCobranzaMotivosPorPlanPago);

export default router;