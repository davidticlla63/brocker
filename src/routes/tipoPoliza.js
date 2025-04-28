import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as control from "../controllers/tipoPoliza.controller";
import * as tokenVerificacion  from '../jwt/jwtVerificacion'
router
    .use(cors())
    .use(bodyParser.json())
    .use(compression())
     .use(tokenVerificacion.ensureToken); // ✅ Middleware global para el router;
// /api/empresas/
router.post('/', control.createTipoPoliza);
router.get('/', control.getTipoPolizas);

// /api/empresas/:empresaID
router.get('/:id', control.getOneTipoPoliza);
router.delete('/:id', control.deleteTipoPoliza);
router.put('/:id', control.updateTipoPoliza);
router.put('/baja/:id', control.bajaTipoPoliza);

export default router;