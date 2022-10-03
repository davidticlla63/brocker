import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();
//{ createUsuario, getUsuarios, getOneUsuario, deleteUsuario, updateUsuario,usuarioByEmpresa,usuarioBySucursal,bajaUsuario,login } 
import * as user from "../controllers/usuario.controller";
import * as tokenVerificacion  from '../jwt/jwtVerificacion'

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/usuarios/
router.post('/', user.createUsuario);
router.get('/', user.getUsuarios);

// /api/usuarios/:usuarioID
router.get('/:id', user.getOneUsuario);
router.delete('/:id',user. deleteUsuario);
router.put('/:id', user.updateUsuario);
router.post('/login', user.login);
//router.put('/login', login);
/* router.get('/usuarioByEmpresa/:empresaid',tokenVerificacion.ensureToken, user.usuarioByEmpresa);
router.get('/usuarioBySucursal/:sucursalid',tokenVerificacion.ensureToken, user.usuarioBySucursal);
router.get('/usuariosBySucursal/:sucursalid',tokenVerificacion.ensureToken, user.usuariosBySucursal); */

router.get('/usuarioByEmpresa/:empresaid', user.usuarioByEmpresa);
router.get('/usuarioBySucursal/:sucursalid', user.usuarioBySucursal);
router.get('/usuariosBySucursal/:sucursalid', user.usuariosBySucursal);
router.put('/baja/:id', user.bajaUsuario);

export default router;