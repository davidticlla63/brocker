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
    .use(compression())
      .use(tokenVerificacion.ensureToken); // ✅ Middleware global para el router;
// /api/empresas/
router.post('/', control.createVendedor);
router.get('/', control.getVendedors);

// /api/empresas/:empresaID
router.get('/:id', control.getOneVendedor);
router.delete('/:id', control.deleteVendedor);
router.put('/:id', control.updateVendedor);
router.put('/baja/:id', control.bajaVendedor);

export default router;