import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as polizaDetallePersonaTitulars from "../controllers/polizaDetallePersonaTitular.controller";

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/', polizaDetallePersonaTitulars.createPolizaDetallePersonaTitular);
router.get('/', polizaDetallePersonaTitulars.getPolizaDetallePersonaTitulars);

router.get('/dependedientePorDetallePersona/:polizadetallepersonaid', polizaDetallePersonaTitulars.polizaDetallePersonaTitularsPorPoliza);

export default router;