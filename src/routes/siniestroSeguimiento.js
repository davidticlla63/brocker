import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as control from "../controllers/siniestroSeguimiento.controller";
import * as tokenVerificacion  from '../jwt/jwtVerificacion'
router
    .use(cors())
    .use(bodyParser.json())
    .use(compression())
     .use(tokenVerificacion.ensureToken); // ✅ Middleware global para el router;
// /api/empresas/
router.post('/', control.createSiniestroSeguimiento);
router.get('/:siniestroid', control.getSiniestroSeguimientos);

// /api/empresas/:empresaID
router.get('/:id', control.getOneSiniestroSeguimiento);
router.delete('/:id', control.deleteSiniestroSeguimiento);
router.put('/:id', control.updateSiniestroSeguimiento);
router.put('/baja/:id', control.bajaSiniestroSeguimiento);


export default router;