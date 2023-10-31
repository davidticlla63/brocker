import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();
//{ createUsuario, getUsuarios, getOneUsuario, deleteUsuario, updateUsuario,usuarioByEmpresa,usuarioBySucursal,bajaUsuario,login } 
import * as control from "../controllers/usuario.controller";
import * as tokenVerificacion  from '../jwt/jwtVerificacion'

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/usuarios/
router.post('/',tokenVerificacion.ensureToken, control.createUsuario);
router.get('/', control.getUsuarios);

// /api/usuarios/:usuarioID
router.get('/:id',tokenVerificacion.ensureToken, control.getOneUsuario);
router.delete('/:id',tokenVerificacion.ensureToken,control. deleteUsuario);
router.put('/:id',tokenVerificacion.ensureToken, control.updateUsuario);
router.post('/login', control.login);
//router.put('/login', login);
/* router.get('/usuarioByEmpresa/:empresaid',tokenVerificacion.ensureToken, control.usuarioByEmpresa);
router.get('/usuarioBySucursal/:sucursalid',tokenVerificacion.ensureToken, control.usuarioBySucursal);
router.get('/usuariosBySucursal/:sucursalid',tokenVerificacion.ensureToken, control.usuariosBySucursal); */

router.get('/usuarioByEmpresa/:empresaid',tokenVerificacion.ensureToken, control.usuarioByEmpresa);
router.get('/usuarioBySucursal/:sucursalid',tokenVerificacion.ensureToken, control.usuarioBySucursal);
router.get('/usuariosBySucursal/:sucursalid',tokenVerificacion.ensureToken, control.usuariosBySucursal);
router.put('/baja/:id', control.bajaUsuario);

export default router;