import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import { createPerfil, getPerfils, getOnePerfil, deletePerfil, updatePerfil ,getPerfilByEmpresa,createPerfilPermisos} from "../controllers/perfil.controller";
router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/perfils/
router.post('/', createPerfil);
router.get('/', getPerfils);

// /api/perfils/:perfilID
router.get('/:id', getOnePerfil);
router.delete('/:id', deletePerfil);
router.put('/:id', updatePerfil);
router.get('/perfilPorEmpresa/:empresaid', getPerfilByEmpresa);
router.post('/createPermisos/:perfilid', createPerfilPermisos);

export default router;