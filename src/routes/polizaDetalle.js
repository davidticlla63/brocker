import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as control from "../controllers/polizaDetalle.controller";
import * as tokenVerificacion  from '../jwt/jwtVerificacion'
router
    .use(cors())
    .use(bodyParser.json())
    .use(compression())
     .use(tokenVerificacion.ensureToken); // ✅ Middleware global para el router;
// /api/empresas/
router.post('/', control.createPolizaDetalle);
router.get('/', control.getPolizaDetalles);

// /api/empresas/:empresaID
//router.get('/:id', control.getOnePolizaDetalle);
router.delete('/:id', control.deletePolizaDetalle);
router.put('/:id', control.updatePolizaDetalle);
router.put('/baja/:id', control.bajaPolizaDetalle);
router.get('/polizaDetallesPorPoliza/:polizaid', control.polizaDetallesPorPoliza);

export default router;