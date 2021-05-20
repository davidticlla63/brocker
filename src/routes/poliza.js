import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as polizas from "../controllers/poliza.controller";

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/', polizas.createPoliza);
router.put('/:id', polizas.updatePoliza);
router.post('/salud/', polizas.createPolizaSalud);
router.put('/salud/:id', polizas.updatePolizaSalud);
router.post('/general/', polizas.createPolizaGeneral);
router.put('/general/:id', polizas.updatePolizaGeneral);

router.get('/', polizas.getPolizas);
router.get('/polizasPorSucursal/:sucursalid', polizas.polizasPorSucursal);
router.get('/polizasPorTipoYSucursal/:tipopolizaid/:sucursalid', polizas.getPolizaPorTipoYSucursal);
router.get('/polizasPorTipoYEmpresa/:tipopolizaid/:empresaid', polizas.getPolizasPorTipoYEmpresa);
router.get('/polizasPorTipoRamoYEmpresa/:tiporamoid/:empresaid', polizas.getPolizasPorTipoRamoYEmpresa);
router.get('/polizasPorTipoRamoYSucursal/:tiporamoid/:sucursalid', polizas.getPolizasPorTipoRamoYSucursal);

router.get('/polizasPorTomadorYEmpresa/:tomadorid/:empresaid', polizas.getPolizasPorTomadorYEmpresa);
router.get('/polizasPorTomadorYSucursal/:tomadorid/:sucursalid', polizas.getPolizasPorTomadorYSucursal);

router.get('/polizasPorEmpresaSinMemo/:empresaid', polizas.getPolizasPorEmpresaSinMemo);
router.get('/polizasPorSucursalSinMemo/:sucursalid', polizas.getPolizasPorSucursalSinMemo);
// /api/empresas/:empresaID
router.get('/:id', polizas.getOnePoliza);
router.delete('/:id', polizas.deletePoliza);

router.put('/baja/:id', polizas.bajaPoliza);



export default router;