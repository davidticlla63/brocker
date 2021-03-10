import { Router } from "express";
const router = Router();

import { createUsuario, getUsuarios, getOneUsuario, deleteUsuario, updateUsuario } from "../controllers/usuario.controller";

// /api/usuarios/
router.post('/', createUsuario);
router.get('/', getUsuarios);

// /api/usuarios/:usuarioID
router.get('/:id', getOneUsuario);
router.delete('/:id', deleteUsuario);
router.put('/:id', updateUsuario);

export default router;