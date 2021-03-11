import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import { createUsuario, getUsuarios, getOneUsuario, deleteUsuario, updateUsuario } from "../controllers/usuario.controller";

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/usuarios/
router.post('/', createUsuario);
router.get('/', getUsuarios);

// /api/usuarios/:usuarioID
router.get('/:id', getOneUsuario);
router.delete('/:id', deleteUsuario);
router.put('/:id', updateUsuario);

export default router;