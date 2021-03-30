import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as tipoRamos from "../controllers/tipoRamo.controller";

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/', tipoRamos.createTipoRamo);
router.get('/', tipoRamos.getTipoRamos);

// /api/empresas/:empresaID
router.get('/:id', tipoRamos.getOneTipoRamo);
router.delete('/:id', tipoRamos.deleteTipoRamo);
router.put('/:id', tipoRamos.updateTipoRamo);
router.put('/baja/:id', tipoRamos.bajaTipoRamo);
router.get('/tipoRamosPorEmpresa/:empresaid', tipoRamos.getTipoRamosPorEmpresa);
export default router;