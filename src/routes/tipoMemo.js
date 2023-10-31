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
    .use(compression());
// /api/empresas/
router.post('/',tokenVerificacion.ensureToken, control.createTipoMemo);
router.get('/', tokenVerificacion.ensureToken,control.getTipoMemos);

// /api/empresas/:empresaID
router.get('/:id',tokenVerificacion.ensureToken, control.getOneTipoMemo);
router.delete('/:id',tokenVerificacion.ensureToken, control.deleteTipoMemo);
router.put('/:id',tokenVerificacion.ensureToken, control.updateTipoMemo);
router.put('/baja/:id',tokenVerificacion.ensureToken, control.bajaTipoMemo);

export default router;