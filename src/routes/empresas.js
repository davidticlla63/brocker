import { Router } from "express";
const router = Router();

import { createEmpresa, getEmpresas, getOneEmpresa, deleteEmpresa, updateEmpresa } from "../controllers/empresa.controller";

// /api/empresas/
router.post('/', createEmpresa);
router.get('/', getEmpresas);

// /api/empresas/:empresaID
router.get('/:id', getOneEmpresa);
router.delete('/:id', deleteEmpresa);
router.put('/:id', updateEmpresa);

export default router;