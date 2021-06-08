import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as cobranzaMotivos from "../controllers/cobranzaMotivo.controller";

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/', cobranzaMotivos.createCobranzaMotivo);
router.get('/', cobranzaMotivos.getCobranzaMotivos);

// /api/empresas/:empresaID
router.get('/:id', cobranzaMotivos.getOneCobranzaMotivo);
router.delete('/:id', cobranzaMotivos.deleteCobranzaMotivo);
router.put('/:id', cobranzaMotivos.updateCobranzaMotivo);
router.put('/baja/:id', cobranzaMotivos.bajaCobranzaMotivo);
router.put('/cobranzaMotivoPorPlanPago/:planpagoid', cobranzaMotivos.getCobranzaMotivosPorPlanPago);

export default router;