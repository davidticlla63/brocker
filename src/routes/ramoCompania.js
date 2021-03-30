import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as ramoCompanias from "../controllers/ramoCompania.controller";

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/', ramoCompanias.createRamoCompania);
//router.get('/', ramoCompanias.getRamoCompanias);

// /api/empresas/:empresaID
router.get('/:id', ramoCompanias.getOneRamoCompania);
router.delete('/:id', ramoCompanias.deleteRamoCompania);
router.put('/:id', ramoCompanias.updateRamoCompania);
router.put('/baja/:id', ramoCompanias.bajaRamoCompania);
router.get('/ramoCompaniasPorRamo/:ramoid', ramoCompanias.ramoCompaniaPorRamo);
router.get('/ramoCompaniasPorCompania/:companiaseguroid', ramoCompanias.ramoCompaniaPorCompania);

export default router;