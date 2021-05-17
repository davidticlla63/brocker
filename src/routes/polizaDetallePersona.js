import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as polizaDetallePersonas from "../controllers/polizaDetallePersona.controller";

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/', polizaDetallePersonas.createPolizaDetallePersona);
router.get('/', polizaDetallePersonas.getPolizaDetallePersonas);

router.get('/polizaDetallesPorPoliza/:polizaid', polizaDetallePersonas.polizaDetallePersonasPorPoliza);

export default router;