import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as control from "../controllers/tipoCambio.controller";
import * as tokenVerificacion  from '../jwt/jwtVerificacion'
router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/',tokenVerificacion.ensureToken, control.createTipoCambio);
router.get('/',tokenVerificacion.ensureToken, control.getTipoCambios);

// /api/empresas/:empresaID
router.get('/:id',tokenVerificacion.ensureToken, control.getOneTipoCambio);
router.delete('/:id',tokenVerificacion.ensureToken, control.deleteTipoCambio);
router.put('/:id',tokenVerificacion.ensureToken,control. updateTipoCambio);
router.get('/tipoCambioPorEmpresa/:empresaid', tokenVerificacion.ensureToken,control.tipoCambioByEmpresa);
router.put('/baja/:id',tokenVerificacion.ensureToken, control.bajaTipoCambio);

export default router;