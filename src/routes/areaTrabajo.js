import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as control from "../controllers/areaTrabajo.controller";
import * as tokenVerificacion  from '../jwt/jwtVerificacion'

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/',tokenVerificacion.ensureToken, control.createAreaTrabajo);
router.get('/',tokenVerificacion.ensureToken, control.getAreaTrabajos);

// /api/empresas/:empresaID
router.get('/:id',tokenVerificacion.ensureToken, control.getOneAreaTrabajo);
router.delete('/:id',tokenVerificacion.ensureToken,control. deleteAreaTrabajo);
router.put('/:id',tokenVerificacion.ensureToken,control. updateAreaTrabajo);
router.get('/areaTrabajoPorEmpresa/:empresaid',tokenVerificacion.ensureToken,control. areaTrabajoByEmpresa);
router.put('/baja/:id',tokenVerificacion.ensureToken,control. bajaAreaTrabajo);

export default router;