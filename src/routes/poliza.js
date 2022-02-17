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
//polizas de automotor
router.post('/', polizas.createPoliza);
router.put('/:id', polizas.updatePoliza);
//polizas de salud
router.post('/salud/', polizas.createPolizaSalud);
router.put('/salud/:id', polizas.updatePolizaSalud);
//polizas de proposito general
router.post('/general/', polizas.createPolizaGeneral);
router.put('/general/:id', polizas.updatePolizaGeneral);

router.get('/', polizas.getPolizas);
router.get('/polizasPorSucursal/:sucursalid', polizas.polizasPorSucursal);
router.get('/polizasPorTipoYSucursal/:tipopolizaid/:sucursalid', polizas.getPolizaPorTipoYSucursal);
router.get('/polizasPorTipoYEmpresa/:tipopolizaid/:empresaid', polizas.getPolizasPorTipoYEmpresa);
router.post('/polizasPorTipoRamoYEmpresa/:tiporamoid/:empresaid', polizas.getPolizasPorTipoRamoYEmpresa);
router.post('/polizasPorTipoRamoYSucursal/:tiporamoid/:sucursalid', polizas.getPolizasPorTipoRamoYSucursal);

router.post('/polizasPorEmpresaYVencimiento/:empresaid', polizas.getPolizasPorEmpresaFechaVencimiento);
router.post('/polizasPorSucursalYVencimiento/:sucursalid', polizas.getPolizasPorSucursalVencimiento);

router.get('/polizasPorTomadorYEmpresa/:tomadorid/:empresaid', polizas.getPolizasPorTomadorYEmpresa);
router.get('/polizasPorTomadorYSucursal/:tomadorid/:sucursalid', polizas.getPolizasPorTomadorYSucursal);

router.get('/polizasPorEmpresaSinMemo/:empresaid', polizas.getPolizasPorEmpresaSinMemo);
router.get('/polizasPorSucursalSinMemo/:sucursalid', polizas.getPolizasPorSucursalSinMemo);
// /api/empresas/:empresaID
router.get('/:id', polizas.getOnePoliza);
router.delete('/:id', polizas.deletePoliza);

router.put('/baja/:id', polizas.bajaPoliza);

//siniestro  tipopolizaid
router.get('/polizasPorSucursals/:sucursalid', polizas.getPolizasPorSucursal);
router.get('/polizasPorEmpresas/:empresaid', polizas.getPolizasPorEmpresa);

router.get('/polizasPorSucursalsYTipo/:sucursalid/:tipopolizaid', polizas.getPolizasPorSucursalYTipo);
router.get('/polizasPorEmpresasYTipo/:empresaid/:tipopolizaid', polizas.getPolizasPorEmpresaYTipo);
/**busquedas por detalle  */
router.get('/polizasDetalleAutomotorPorEmpresaYTipo/:dato/:empresaid/:tipopolizaid', polizas.getPolizasDetalleAutomotorPorEmpresaYTipo);
router.get('/polizasDetalleAutomotorPorSucursalYTipo/:dato/:sucursalid/:tipopolizaid', polizas.getPolizasDetalleAutomotorPorSucursalYTipo);

router.get('/polizasDetalleGeneralPorEmpresaYTipo/:dato/:empresaid/:tipopolizaid', polizas.getPolizasDetalleGeneralPorEmpresaYTipo);
router.get('/polizasDetalleGeneralPorSucursalYTipo/:dato/:sucursalid/:tipopolizaid', polizas.getPolizasDetalleGeneralPorSucursalYTipo);

router.get('/polizasDetalleSaludPorEmpresaYTipo/:dato/:empresaid/:tipopolizaid', polizas.getPolizasDetalleSaludPorEmpresaYTipo);
router.get('/polizasDetalleSaludPorSucursalYTipo/:dato/:sucursalid/:tipopolizaid', polizas.getPolizasDetalleSaludPorSucursalYTipo);
export default router;