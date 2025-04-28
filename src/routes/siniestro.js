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
    .use(compression())
     .use(tokenVerificacion.ensureToken); // ✅ Middleware global para el router;
// /api/empresas/
router.post('/', control.createSiniestro);
router.get('/', control.getSiniestros);

// /api/empresas/:empresaID
router.get('/:id', control.getOneSiniestro);
router.delete('/:id', control.deleteSiniestro);
router.put('/:id', control.updateSiniestro);
router.put('/baja/:id', control.bajaSiniestro);

router.get('/siniestroPorSucursal/:sucursalid', control.getSiniestroPorSucursal);
router.get('/siniestroPorEmpresa/:empresaid', control.getSiniestroPorEmpresa);

/**dashoboard */
router.get('/totalSiniestrosPorEmpresa/:empresaid', control.getTotalSiniestrosPorEmpresa);
router.get('/totalSiniestrosPorSucursal/:sucursalid', control.getTotalSiniestrosPorSucursal);

export default router;