import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import { createEmpresa, getEmpresas, getOneEmpresa, deleteEmpresa, updateEmpresa } from "../controllers/empresa.controller";

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/', createEmpresa);
router.get('/', getEmpresas);

// /api/empresas/:empresaID
router.get('/:id', getOneEmpresa);
router.delete('/:id', deleteEmpresa);
router.put('/:id', updateEmpresa);

export default router;