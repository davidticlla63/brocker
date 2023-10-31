import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as control from "../controllers/polizaDetallePersonaTitular.controller";
import * as tokenVerificacion  from '../jwt/jwtVerificacion'

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/',tokenVerificacion.ensureToken, control.createPolizaDetallePersonaTitular);
router.get('/', tokenVerificacion.ensureToken,control.getPolizaDetallePersonaTitulars);

router.get('/dependedientePorDetallePersona/:polizadetallepersonaid', tokenVerificacion.ensureToken,control.polizaDetallePersonaTitularsPorPoliza);

export default router;