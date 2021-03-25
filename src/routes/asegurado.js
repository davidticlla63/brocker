import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as asegurados from "../controllers/asegurado.controller";

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/', asegurados.createAsegurado);
router.get('/', asegurados.getAsegurados);

// /api/empresas/:empresaID
router.get('/:id', asegurados.getOneAsegurado);
router.delete('/:id', asegurados.deleteAsegurado);
router.put('/:id', asegurados.updateAsegurado);
router.put('/baja/:id', asegurados.bajaAsegurado);

export default router;