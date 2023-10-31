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
    .use(compression());
// /api/sucursalUsuarios/
router.post('/', tokenVerificacion.ensureToken,control.createSucursalUsuario);
router.get('/',tokenVerificacion.ensureToken, control.getSucursalUsuarios);

// /api/sucursalUsuarios/:sucursalUsuarioID
router.get('/:id',tokenVerificacion.ensureToken, control.getOneSucursalUsuario);
router.delete('/:id',tokenVerificacion.ensureToken, control.deleteSucursalUsuario);
router.put('/:id',tokenVerificacion.ensureToken, control.updateSucursalUsuario);

export default router;