import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import { createAreaTrabajo, getAreaTrabajos, getOneAreaTrabajo, deleteAreaTrabajo, updateAreaTrabajo,bajaAreaTrabajo,areaTrabajoByEmpresa } from "../controllers/areaTrabajo.controller";

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/', createAreaTrabajo);
router.get('/', getAreaTrabajos);

// /api/empresas/:empresaID
router.get('/:id', getOneAreaTrabajo);
router.delete('/:id', deleteAreaTrabajo);
router.put('/:id', updateAreaTrabajo);
router.get('/areaTrabajoPorEmpresa/:empresaid', areaTrabajoByEmpresa);
router.put('/baja/:id', bajaAreaTrabajo);

export default router;