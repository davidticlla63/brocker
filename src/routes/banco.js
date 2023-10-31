import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as control from "../controllers/banco.controller";
import * as tokenVerificacion  from '../jwt/jwtVerificacion'

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/',tokenVerificacion.ensureToken, control.createBanco);
router.get('/',tokenVerificacion.ensureToken, control.getBancos);

// /api/empresas/:empresaID
router.get('/:id',tokenVerificacion.ensureToken, control.getOneBanco);
router.delete('/:id',tokenVerificacion.ensureToken, control.deleteBanco);
router.put('/:id',tokenVerificacion.ensureToken, control.updateBanco);
router.put('/baja/:id',tokenVerificacion.ensureToken, control.bajaBanco);
router.get('/bancosPorEmpresa/:empresaid',tokenVerificacion.ensureToken, control.bancosPorEmpresa);

export default router;