import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import  * as control from "../controllers/sucursalUsuario.controller";
import * as tokenVerificacion  from '../jwt/jwtVerificacion'
router
    .use(cors())
    .use(bodyParser.json())
    .use(compression())
     .use(tokenVerificacion.ensureToken); // ✅ Middleware global para el router;
// /api/sucursalUsuarios/
router.post('/', control.createSucursalUsuario);
router.get('/', control.getSucursalUsuarios);

// /api/sucursalUsuarios/:sucursalUsuarioID
router.get('/:id', control.getOneSucursalUsuario);
router.delete('/:id', control.deleteSucursalUsuario);
router.put('/:id', control.updateSucursalUsuario);

export default router;