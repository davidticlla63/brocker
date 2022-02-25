import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as pagos from "../controllers/pagos.controller";

const shouldCompress = (req, res) => {
    if (req.headers['x-no-compression']) {
      // No comprimira las respuestas, si este encabezado 
      // está presente.
      return false;
    }
    // Recurrir a la compresión estándar
    return compression.filter(req, res);
  };

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression({
        // filter: Decide si la respuesta debe comprimirse o no,
        // en función de la función 'shouldCompress' anterior
        filter: shouldCompress,
        // threshold: Es el umbral de bytes para el tamaño del cuerpo
        // de la respuesta antes de considerar la compresión,
        // el valor predeterminado es 1 kB
        threshold: 0
      }));
    
router.post('/', pagos.createPagos);
router.post('/crear/', pagos.crearPagos);
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

router.get('/actualesPorEmpresa/:empresaid', pagos.getPagosActualesPorEmpresa);
router.get('/pendientesPorEmpresa/:empresaid', pagos.getPagosPendientesPorEmpresa);
router.get('/moraPorEmpresa/:empresaid', pagos.getPagosMoraPorEmpresa);

router.get('/pagosPorSucursalYCI/:sucursalid/:cinit', pagos.getPagosPorSucursalyCi);
router.get('/pagosPorEmpresaYCI/:empresaid/:cinit', pagos.getPagosPorEmpresayCi);

router.post('/pagoPorSucursal/:sucursalid', pagos.getPagosPorSucursal);
router.post('/pagoPorEmpresa/:empresaid', pagos.getPagosPorEmpresa);



/**dashoboard */
router.get('/totalPagosPorEmpresa/:empresaid', pagos.getTotalPagosPorEmpresa);
router.get('/totalPagosPorSucursal/:sucursalid', pagos.getTotalPagosPorSucursal);
export default router;