import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as subRamoCompanias from "../controllers/subRamoCompania.controller";

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/', subRamoCompanias.createSubRamoCompania);
//router.get('/', subRamoCompanias.getRamoCompanias);

// /api/empresas/:empresaID
router.get('/:id', subRamoCompanias.getOneSubRamoCompania);
router.delete('/:id', subRamoCompanias.deleteSubRamoCompania);
router.put('/:id', subRamoCompanias.updateSubRamoCompania);
router.put('/baja/:id', subRamoCompanias.bajaSubRamoCompania);
router.get('/subRamoCompaniasPorRamo/:ramoid', subRamoCompanias.subRamoCompaniaPorRamo);
router.get('/subRamoCompaniasPorCompania/:companiaseguroid', subRamoCompanias.subRamoCompaniaPorCompania);
//nueva metodo que se aumento
router.get('/subRamoCompaniaYCompaniaPorEmpresa/:empresaid', subRamoCompanias.subRamoCompaniaYCompaniaPorEmpresa);
router.get('/subRamoCompaniaYCompaniaPorSucursal/:sucursalid', subRamoCompanias.subRamoCompaniaYCompaniaPorSucursal);
router.get('/subRamoCompaniaPorEmpresa/:empresaid', subRamoCompanias.subRamoCompaniaPorEmpresa);

export default router;