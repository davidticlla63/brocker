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
    .use(compression());
// /api/empresas/
router.post('/',tokenVerificacion.ensureToken, control.createPeriodo);
router.get('/', tokenVerificacion.ensureToken,control.getPeriodos);

// /api/empresas/:empresaID
router.get('/:id',tokenVerificacion.ensureToken,control. getOnePeriodo);
router.delete('/:id',tokenVerificacion.ensureToken, control.deletePeriodo);
router.put('/:id', tokenVerificacion.ensureToken,control.updatePeriodo);
router.get('/periodoPorEmpresa/:empresaid',tokenVerificacion.ensureToken, control.PeriodoByEmpresa);
router.put('/baja/:id',tokenVerificacion.ensureToken, control.bajaPeriodo);

export default router;