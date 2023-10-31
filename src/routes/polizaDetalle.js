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
    .use(compression());
// /api/empresas/
router.post('/', tokenVerificacion.ensureToken,control.createPolizaDetalle);
router.get('/', tokenVerificacion.ensureToken,control.getPolizaDetalles);

// /api/empresas/:empresaID
//router.get('/:id', control.getOnePolizaDetalle);
router.delete('/:id',tokenVerificacion.ensureToken, control.deletePolizaDetalle);
router.put('/:id', tokenVerificacion.ensureToken,control.updatePolizaDetalle);
router.put('/baja/:id',tokenVerificacion.ensureToken, control.bajaPolizaDetalle);
router.get('/polizaDetallesPorPoliza/:polizaid', tokenVerificacion.ensureToken,control.polizaDetallesPorPoliza);

export default router;