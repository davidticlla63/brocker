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
    .use(compression());
// /api/empresas/
router.post('/',tokenVerificacion.ensureToken, control.createCompaniaSeguro);
router.get('/',tokenVerificacion.ensureToken, control.getCompaniaSeguros);

// /api/empresas/:empresaID
router.get('/:id',tokenVerificacion.ensureToken, control.getOneCompaniaSeguro);
router.delete('/:id',tokenVerificacion.ensureToken, control.deleteCompaniaSeguro);
router.put('/:id',tokenVerificacion.ensureToken, control.updateCompaniaSeguro);
router.put('/baja/:id',tokenVerificacion.ensureToken, control.bajaCompaniaSeguro);
router.get('/companiaSegurosPorEmpresa/:empresaid',tokenVerificacion.ensureToken, control.getCompaniaSegurosPorEmpresa);

export default router;