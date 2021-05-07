import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as plans from "../controllers/plan.controller";

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/', plans.createPlan);
router.get('/', plans.getPlans);
router.get('/planesPorCompania/:companiaseguroid', plans.getPlansPorCompania);
// /api/empresas/:empresaID
router.get('/:id', plans.getOnePlan);
router.delete('/:id', plans.deletePlan);
router.put('/:id', plans.updatePlan);
router.put('/baja/:id', plans.bajaPlan);

export default router;