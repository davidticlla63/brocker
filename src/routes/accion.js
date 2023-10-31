import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as control from "../controllers/accion.controller";
import * as tokenVerificacion  from '../jwt/jwtVerificacion'

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/', control.createAccion);
router.get('/', control.getAccions);

// /api/empresas/:empresaID
router.get('/:id', control.getOneAccion);
router.delete('/:id', control.deleteAccion);
router.put('/:id', control.updateAccion);
router.put('/baja/:id', control.bajaAccion);

export default router;