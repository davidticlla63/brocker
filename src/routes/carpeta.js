import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as control from "../controllers/carpeta.controller";
import * as tokenVerificacion  from '../jwt/jwtVerificacion'

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression())
     .use(tokenVerificacion.ensureToken); // ✅ Middleware global para el router;
// /api/empresas/
router.post('/', control.createCarpeta);
router.get('/', control.getCarpetas);

// /api/empresas/:empresaID
router.get('/:id', control.getOneCarpeta);
router.delete('/:id', control.deleteCarpeta);
router.put('/:id', control.updateCarpeta);
router.put('/baja/:id', control.bajaCarpeta);

export default router;