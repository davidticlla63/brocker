import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import { createSucursalUsuario, getSucursalUsuarios, getOneSucursalUsuario, deleteSucursalUsuario, updateSucursalUsuario } from "../controllers/sucursalUsuario.controller";
router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/sucursalUsuarios/
router.post('/', createSucursalUsuario);
router.get('/', getSucursalUsuarios);

// /api/sucursalUsuarios/:sucursalUsuarioID
router.get('/:id', getOneSucursalUsuario);
router.delete('/:id', deleteSucursalUsuario);
router.put('/:id', updateSucursalUsuario);

export default router;