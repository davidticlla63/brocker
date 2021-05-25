import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as pagos from "../controllers/pagos.controller";

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
    
router.post('/', pagos.createPagos);
router.get('/', pagos.getPagoss);

// /api/empresas/:empresaID
router.get('/:id', pagos.getOnePagos);
router.delete('/:id', pagos.deletePagos);
router.put('/:id', pagos.updatePagos);
router.put('/baja/:id', pagos.bajaPagos);
router.get('/generalPorSucursal/:sucursalid', pagos.getPagosGeneralesPorSucursal);
router.get('/actualesPorSucursal/:sucursalid', pagos.getPagosActualesPorSucursal);
router.get('/pendientesPorSucursal/:sucursalid', pagos.getPagosPendientesPorSucursal);
router.get('/moraPorSucursal/:sucursalid', pagos.getPagosMoraPorSucursal);

export default router;