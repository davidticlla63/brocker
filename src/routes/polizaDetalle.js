import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as polizaDetalles from "../controllers/polizaDetalle.controller";

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/', polizaDetalles.createPolizaDetalle);
router.get('/', polizaDetalles.getPolizaDetalles);

// /api/empresas/:empresaID
//router.get('/:id', polizaDetalles.getOnePolizaDetalle);
router.delete('/:id', polizaDetalles.deletePolizaDetalle);
router.put('/:id', polizaDetalles.updatePolizaDetalle);
router.put('/baja/:id', polizaDetalles.bajaPolizaDetalle);
router.get('/polizaDetallesPorPoliza/:polizaid', polizaDetalles.polizaDetallesPorPoliza);

export default router;