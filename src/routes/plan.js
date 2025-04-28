import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as control from "../controllers/plan.controller";
import * as tokenVerificacion  from '../jwt/jwtVerificacion'
router
    .use(cors())
    .use(bodyParser.json())
    .use(compression())
     .use(tokenVerificacion.ensureToken); // ✅ Middleware global para el router;
// /api/empresas/
router.post('/', control.createPlan);
router.get('/', control.getPlans);
router.get('/planesPorCompania/:companiaseguroid', control.getPlansPorCompania);
// /api/empresas/:empresaID
router.get('/:id', control.getOnePlan);
router.delete('/:id', control.deletePlan);
router.put('/:id', control.updatePlan);
router.put('/baja/:id', control.bajaPlan);

export default router;