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
    .use(compression())
     .use(tokenVerificacion.ensureToken); // ✅ Middleware global para el router;
// /api/empresas/
router.post('/',control.createDepartamento);
router.get('/', control.getDepartamentos);

// /api/empresas/:empresaID
router.get('/:id', control.getOneDepartamento);
router.delete('/:id', control.deleteDepartamento);
router.put('/:id', control.updateDepartamento);
router.get('/departamentoPorEmpresa/:empresaid', control.departamentoByEmpresa);
router.put('/baja/:id', control.bajaDepartamento);

export default router;