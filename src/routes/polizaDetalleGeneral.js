import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as control from "../controllers/polizaDetalleGeneral.controller";
import * as tokenVerificacion  from '../jwt/jwtVerificacion'
router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/', tokenVerificacion.ensureToken,control.createPolizaDetalleGeneral);
router.get('/', tokenVerificacion.ensureToken,control.getPolizaDetalleGenerals);

// /api/empresas/:empresaID
router.get('/polizaDetallesPorPoliza/:polizaid',tokenVerificacion.ensureToken, control.polizaDetalleGeneralsPorPoliza);

export default router;