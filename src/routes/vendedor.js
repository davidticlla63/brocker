import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as control from "../controllers/vendedor.controller";
import * as tokenVerificacion  from '../jwt/jwtVerificacion'

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/',tokenVerificacion.ensureToken, control.createVendedor);
router.get('/',tokenVerificacion.ensureToken, control.getVendedors);

// /api/empresas/:empresaID
router.get('/:id',tokenVerificacion.ensureToken, control.getOneVendedor);
router.delete('/:id',tokenVerificacion.ensureToken, control.deleteVendedor);
router.put('/:id',tokenVerificacion.ensureToken, control.updateVendedor);
router.put('/baja/:id', tokenVerificacion.ensureToken,control.bajaVendedor);

export default router;