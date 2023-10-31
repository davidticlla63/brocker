import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as control from "../controllers/siniestroRequisito.controller";
import * as tokenVerificacion  from '../jwt/jwtVerificacion'
router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/',tokenVerificacion.ensureToken, control.createSiniestroRequisito);
router.post('/createSiniestroRequisitos/',tokenVerificacion.ensureToken, control.createSiniestroRequisitos);
router.get('/',tokenVerificacion.ensureToken, control.getSiniestroRequisitos);
router.get('/siniestroRequisitosPorSiniestro/:siniestroid',tokenVerificacion.ensureToken, control.getSiniestroRequisitosPorSiniestro);
// /api/empresas/:empresaID
router.get('/:id',tokenVerificacion.ensureToken, control.getOneSiniestroRequisito);
router.delete('/:id',tokenVerificacion.ensureToken, control.deleteSiniestroRequisito);
router.put('/:id',tokenVerificacion.ensureToken, control.updateSiniestroRequisito);
router.put('/baja/:id',tokenVerificacion.ensureToken, control.bajaSiniestroRequisito);

export default router;