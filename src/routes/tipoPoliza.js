import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as tipoPolizas from "../controllers/tipoPoliza.controller";

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/', tipoPolizas.createTipoPoliza);
router.get('/', tipoPolizas.getTipoPolizas);

// /api/empresas/:empresaID
router.get('/:id', tipoPolizas.getOneTipoPoliza);
router.delete('/:id', tipoPolizas.deleteTipoPoliza);
router.put('/:id', tipoPolizas.updateTipoPoliza);
router.put('/baja/:id', tipoPolizas.bajaTipoPoliza);

export default router;