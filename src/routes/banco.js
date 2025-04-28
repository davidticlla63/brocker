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
    .use(compression())
     .use(tokenVerificacion.ensureToken); // ✅ Middleware global para el router;
// /api/empresas/
router.post('/', control.createBanco);
router.get('/', control.getBancos);

// /api/empresas/:empresaID
router.get('/:id', control.getOneBanco);
router.delete('/:id', control.deleteBanco);
router.put('/:id', control.updateBanco);
router.put('/baja/:id', control.bajaBanco);
router.get('/bancosPorEmpresa/:empresaid', control.bancosPorEmpresa);

export default router;