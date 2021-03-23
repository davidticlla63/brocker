import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

/* import { createPerfil, getPerfils, getOnePerfil, deletePerfil, updatePerfil ,getPerfilByEmpresa,createPerfilPermisos} from "../controllers/perfil.controller"; */
import * as perfil from "../controllers/perfil.controller";
router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/perfils/
router.post('/',perfil. createPerfil);
router.get('/', perfil.getPerfils);

// /api/perfils/:perfilID
router.get('/:id', perfil.getOnePerfil);
router.delete('/:id', perfil.deletePerfil);
router.put('/:id', perfil.updatePerfil);
router.get('/perfilPorEmpresa/:empresaid', perfil.getPerfilByEmpresa);
router.post('/createPermisos/:perfilid', perfil.createPerfilPermisos);

export default router;