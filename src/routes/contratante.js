import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as control from "../controllers/contratante.controller";
import * as tokenVerificacion  from '../jwt/jwtVerificacion'

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression()) 
    .use(tokenVerificacion.ensureToken); // ✅ Middleware global para el router;
// /api/empresas/
router.post('/', control.createContratante);
router.get('/', control.getContratantes);
router.get('/contratantePorSucursal/:sucursalid', control.getOneContratantePorSucursal);
router.get('/contratantePorEmpresa/:empresaid', control.getContratantesPorEmpresa);

// /api/empresas/:empresaID
router.get('/:id', control.getOneContratante);
router.delete('/:id', control.deleteContratante);
router.put('/:id', control.updateContratante);
router.put('/baja/:id', control.bajaContratante);

export default router;