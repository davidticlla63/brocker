import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as control from "../controllers/siniestro.controller";
import * as tokenVerificacion  from '../jwt/jwtVerificacion'
router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/',tokenVerificacion.ensureToken, control.createSiniestro);
router.get('/',tokenVerificacion.ensureToken, control.getSiniestros);

// /api/empresas/:empresaID
router.get('/:id',tokenVerificacion.ensureToken, control.getOneSiniestro);
router.delete('/:id',tokenVerificacion.ensureToken, control.deleteSiniestro);
router.put('/:id',tokenVerificacion.ensureToken, control.updateSiniestro);
router.put('/baja/:id',tokenVerificacion.ensureToken, control.bajaSiniestro);

router.get('/siniestroPorSucursal/:sucursalid',tokenVerificacion.ensureToken, control.getSiniestroPorSucursal);
router.get('/siniestroPorEmpresa/:empresaid',tokenVerificacion.ensureToken, control.getSiniestroPorEmpresa);

/**dashoboard */
router.get('/totalSiniestrosPorEmpresa/:empresaid', tokenVerificacion.ensureToken,control.getTotalSiniestrosPorEmpresa);
router.get('/totalSiniestrosPorSucursal/:sucursalid',tokenVerificacion.ensureToken, control.getTotalSiniestrosPorSucursal);

export default router;