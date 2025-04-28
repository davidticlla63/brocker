import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as control from "../controllers/periodo.controller";
import * as tokenVerificacion  from '../jwt/jwtVerificacion'

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression())
     .use(tokenVerificacion.ensureToken); // ✅ Middleware global para el router;
// /api/empresas/
router.post('/', control.createPeriodo);
router.get('/', control.getPeriodos);

// /api/empresas/:empresaID
router.get('/:id',control. getOnePeriodo);
router.delete('/:id', control.deletePeriodo);
router.put('/:id', control.updatePeriodo);
router.get('/periodoPorEmpresa/:empresaid', control.PeriodoByEmpresa);
router.put('/baja/:id', control.bajaPeriodo);

export default router;