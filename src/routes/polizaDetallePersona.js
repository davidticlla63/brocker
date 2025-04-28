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
    .use(compression())
     .use(tokenVerificacion.ensureToken); // ✅ Middleware global para el router;
// /api/empresas/
router.post('/', control.createPolizaDetallePersona);
router.get('/', control.getPolizaDetallePersonas);

router.get('/polizaDetallesPorPoliza/:polizaid', control.polizaDetallePersonasPorPoliza);

export default router;