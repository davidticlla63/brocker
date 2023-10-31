import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as control from "../controllers/departamento.controller";
import * as tokenVerificacion  from '../jwt/jwtVerificacion'

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/',tokenVerificacion.ensureToken,control.createDepartamento);
router.get('/',tokenVerificacion.ensureToken, control.getDepartamentos);

// /api/empresas/:empresaID
router.get('/:id',tokenVerificacion.ensureToken, control.getOneDepartamento);
router.delete('/:id',tokenVerificacion.ensureToken, control.deleteDepartamento);
router.put('/:id',tokenVerificacion.ensureToken, control.updateDepartamento);
router.get('/departamentoPorEmpresa/:empresaid',tokenVerificacion.ensureToken, control.departamentoByEmpresa);
router.put('/baja/:id',tokenVerificacion.ensureToken, control.bajaDepartamento);

export default router;