import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as control from "../controllers/subRamoCompania.controller";
import * as tokenVerificacion  from '../jwt/jwtVerificacion'
router
    .use(cors())
    .use(bodyParser.json())
    .use(compression())
     .use(tokenVerificacion.ensureToken); // ✅ Middleware global para el router;
// /api/empresas/
router.post('/', control.createSubRamoCompania);
//router.get('/', control.getRamoCompanias);

// /api/empresas/:empresaID
router.get('/:id', control.getOneSubRamoCompania);
router.delete('/:id', control.deleteSubRamoCompania);
router.put('/:id', control.updateSubRamoCompania);
router.put('/baja/:id', control.bajaSubRamoCompania);
router.get('/subRamoCompaniasPorRamo/:ramoid', control.subRamoCompaniaPorRamo);
router.get('/subRamoCompaniasPorCompania/:companiaseguroid', control.subRamoCompaniaPorCompania);
router.get('/subRamoCompaniaPorCompaniaYSucursal/:companiaseguroid/:sucursalid', control.subRamoCompaniaPorCompaniaYSucursal);
//nueva metodo que se aumento
router.get('/subRamoCompaniaYCompaniaPorEmpresa/:empresaid', control.subRamoCompaniaYCompaniaPorEmpresa);
router.get('/subRamoCompaniaYCompaniaPorSucursal/:sucursalid', control.subRamoCompaniaYCompaniaPorSucursal);
router.get('/subRamoCompaniaPorEmpresa/:empresaid', control.subRamoCompaniaPorEmpresa);

export default router;