import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import { createPermiso, getPermisos, getOnePermiso, deletePermiso, updatePermiso } from "../controllers/permiso.controller";
router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/perfils/
router.post('/', createPermiso);
router.get('/', getPermisos);

// /api/perfils/:perfilID
router.get('/:id', getOnePermiso);
router.delete('/:id', deletePermiso);
router.put('/:id', updatePermiso);
//router.post('/createPermiso/:perfilid', createPermiso);

export default router;