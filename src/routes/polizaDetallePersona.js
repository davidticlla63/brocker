import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as control from "../controllers/polizaDetallePersona.controller";
import * as tokenVerificacion  from '../jwt/jwtVerificacion'
router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/',tokenVerificacion.ensureToken, control.createPolizaDetallePersona);
router.get('/',tokenVerificacion.ensureToken, control.getPolizaDetallePersonas);

router.get('/polizaDetallesPorPoliza/:polizaid',tokenVerificacion.ensureToken, control.polizaDetallePersonasPorPoliza);

export default router;