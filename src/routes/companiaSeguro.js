import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as control from "../controllers/companiaSeguro.controller";
import * as tokenVerificacion  from '../jwt/jwtVerificacion'

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression())
     .use(tokenVerificacion.ensureToken); // ✅ Middleware global para el router;
// /api/empresas/
router.post('/', control.createCompaniaSeguro);
router.get('/', control.getCompaniaSeguros);

// /api/empresas/:empresaID
router.get('/:id', control.getOneCompaniaSeguro);
router.delete('/:id', control.deleteCompaniaSeguro);
router.put('/:id', control.updateCompaniaSeguro);
router.put('/baja/:id', control.bajaCompaniaSeguro);
router.get('/companiaSegurosPorEmpresa/:empresaid', control.getCompaniaSegurosPorEmpresa);

export default router;