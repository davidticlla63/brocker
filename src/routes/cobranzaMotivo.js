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
    .use(compression())
     .use(tokenVerificacion.ensureToken); // ✅ Middleware global para el router;
// /api/empresas/
router.post('/', control.createCobranzaMotivo);
router.get('/', control.getCobranzaMotivos);

// /api/empresas/:empresaID
router.get('/:id', control.getOneCobranzaMotivo);
router.delete('/:id', control.deleteCobranzaMotivo);
router.put('/:id', control.updateCobranzaMotivo);
router.put('/baja/:id', control.bajaCobranzaMotivo);
router.put('/cobranzaMotivoPorPlanPago/:planpagoid', control.getCobranzaMotivosPorPlanPago);

export default router;