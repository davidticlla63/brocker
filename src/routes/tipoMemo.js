import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as control from "../controllers/tipoMemo.controller";
import * as tokenVerificacion  from '../jwt/jwtVerificacion'
router
    .use(cors())
    .use(bodyParser.json())
    .use(compression())
     .use(tokenVerificacion.ensureToken); // ✅ Middleware global para el router;
// /api/empresas/
router.post('/', control.createTipoMemo);
router.get('/', control.getTipoMemos);

// /api/empresas/:empresaID
router.get('/:id', control.getOneTipoMemo);
router.delete('/:id', control.deleteTipoMemo);
router.put('/:id', control.updateTipoMemo);
router.put('/baja/:id', control.bajaTipoMemo);

export default router;