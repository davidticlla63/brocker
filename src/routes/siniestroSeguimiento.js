import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as control from "../controllers/siniestroSeguimiento.controller";
import * as tokenVerificacion  from '../jwt/jwtVerificacion'
router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/', tokenVerificacion.ensureToken,control.createSiniestroSeguimiento);
router.get('/:siniestroid',tokenVerificacion.ensureToken, control.getSiniestroSeguimientos);

// /api/empresas/:empresaID
router.get('/:id', tokenVerificacion.ensureToken,control.getOneSiniestroSeguimiento);
router.delete('/:id', tokenVerificacion.ensureToken,control.deleteSiniestroSeguimiento);
router.put('/:id', tokenVerificacion.ensureToken,control.updateSiniestroSeguimiento);
router.put('/baja/:id', tokenVerificacion.ensureToken,control.bajaSiniestroSeguimiento);


export default router;