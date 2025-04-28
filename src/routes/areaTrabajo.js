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
    .use(compression()) 
    .use(tokenVerificacion.ensureToken); // ✅ Middleware global para el router;
// /api/empresas/
router.post('/', control.createAreaTrabajo);
router.get('/', control.getAreaTrabajos);

// /api/empresas/:empresaID
router.get('/:id', control.getOneAreaTrabajo);
router.delete('/:id',control. deleteAreaTrabajo);
router.put('/:id',control. updateAreaTrabajo);
router.get('/areaTrabajoPorEmpresa/:empresaid',control. areaTrabajoByEmpresa);
router.put('/baja/:id',control. bajaAreaTrabajo);

export default router;