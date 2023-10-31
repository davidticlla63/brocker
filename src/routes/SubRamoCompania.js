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
    .use(compression());
// /api/empresas/
router.post('/',tokenVerificacion.ensureToken, control.createSubRamoCompania);
//router.get('/', control.getRamoCompanias);

// /api/empresas/:empresaID
router.get('/:id',tokenVerificacion.ensureToken, control.getOneSubRamoCompania);
router.delete('/:id',tokenVerificacion.ensureToken, control.deleteSubRamoCompania);
router.put('/:id', tokenVerificacion.ensureToken,control.updateSubRamoCompania);
router.put('/baja/:id',tokenVerificacion.ensureToken, control.bajaSubRamoCompania);
router.get('/subRamoCompaniasPorRamo/:ramoid', tokenVerificacion.ensureToken,control.subRamoCompaniaPorRamo);
router.get('/subRamoCompaniasPorCompania/:companiaseguroid',tokenVerificacion.ensureToken, control.subRamoCompaniaPorCompania);
router.get('/subRamoCompaniaPorCompaniaYSucursal/:companiaseguroid/:sucursalid',tokenVerificacion.ensureToken, control.subRamoCompaniaPorCompaniaYSucursal);
//nueva metodo que se aumento
router.get('/subRamoCompaniaYCompaniaPorEmpresa/:empresaid',tokenVerificacion.ensureToken, control.subRamoCompaniaYCompaniaPorEmpresa);
router.get('/subRamoCompaniaYCompaniaPorSucursal/:sucursalid',tokenVerificacion.ensureToken, control.subRamoCompaniaYCompaniaPorSucursal);
router.get('/subRamoCompaniaPorEmpresa/:empresaid',tokenVerificacion.ensureToken, control.subRamoCompaniaPorEmpresa);

export default router;