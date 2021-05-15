import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as polizaDetalleGenerals from "../controllers/polizaDetalleGeneral.controller";

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/', polizaDetalleGenerals.createPolizaDetalleGeneral);
router.get('/', polizaDetalleGenerals.getPolizaDetalleGenerals);

// /api/empresas/:empresaID
router.get('/polizaDetalleGeneralsPorPoliza/:polizaid', polizaDetalleGenerals.polizaDetalleGeneralsPorPoliza);

export default router;