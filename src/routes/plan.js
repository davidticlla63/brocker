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
    .use(compression());
// /api/empresas/
router.post('/', tokenVerificacion.ensureToken,control.createPlan);
router.get('/',tokenVerificacion.ensureToken, control.getPlans);
router.get('/planesPorCompania/:companiaseguroid',tokenVerificacion.ensureToken, control.getPlansPorCompania);
// /api/empresas/:empresaID
router.get('/:id',tokenVerificacion.ensureToken, control.getOnePlan);
router.delete('/:id',tokenVerificacion.ensureToken, control.deletePlan);
router.put('/:id',tokenVerificacion.ensureToken, control.updatePlan);
router.put('/baja/:id',tokenVerificacion.ensureToken, control.bajaPlan);

export default router;