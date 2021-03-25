import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as accions from "../controllers/accion.controller";

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/', accions.createAccion);
router.get('/', accions.getAccions);

// /api/empresas/:empresaID
router.get('/:id', accions.getOneAccion);
router.delete('/:id', accions.deleteAccion);
router.put('/:id', accions.updateAccion);
router.put('/baja/:id', accions.bajaAccion);

export default router;