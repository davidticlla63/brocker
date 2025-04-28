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
    .use(compression())
     .use(tokenVerificacion.ensureToken); // ✅ Middleware global para el router;
// /api/empresas/
router.post('/', control.createTipoCambio);
router.get('/', control.getTipoCambios);

// /api/empresas/:empresaID
router.get('/:id', control.getOneTipoCambio);
router.delete('/:id', control.deleteTipoCambio);
router.put('/:id',control. updateTipoCambio);
router.get('/tipoCambioPorEmpresa/:empresaid', control.tipoCambioByEmpresa);
router.put('/baja/:id', control.bajaTipoCambio);

export default router;