import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as departamento from "../controllers/departamento.controller";

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/',departamento.createDepartamento);
router.get('/', departamento.getDepartamentos);

// /api/empresas/:empresaID
router.get('/:id', departamento.getOneDepartamento);
router.delete('/:id', departamento.deleteDepartamento);
router.put('/:id', departamento.updateDepartamento);
router.get('/departamentoPorEmpresa/:empresaid', departamento.departamentoByEmpresa);
router.put('/baja/:id', departamento.bajaDepartamento);

export default router;