import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as asegurados from "../controllers/asegurado.controller";

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
// /api/empresas/
router.post('/', asegurados.createAsegurado);
router.get('/', asegurados.getAsegurados);

// /api/empresas/:empresaID
router.get('/:id', asegurados.getOneAsegurado);
router.delete('/:id', asegurados.deleteAsegurado);
router.put('/:id', asegurados.updateAsegurado);
router.put('/baja/:id', asegurados.bajaAsegurado);
router.get('/aseguradosPorSucursal/:sucuesalid', asegurados.aseguradosPorSucursal);
router.get('/aseguradosPorSucursalYTipo/:sucursalid/:tipoasegurado', asegurados.aseguradosPorSucursalYTipo);
router.get('/aseguradosPorEmpresaYTipo/:empresaid/:tipoasegurado', asegurados.aseguradosPorEmpresaYTipo);

router.get('/todoLosAseguradosPorSucursal/:sucursalid', asegurados.todoLosAseguradosPorSucursal);
router.get('/todoLosAseguradosPorEmpresa/:empresaid', asegurados.todoLosAseguradosPorEmpresa);
router.get('/aseguradosPorSucursals/:sucursalid', asegurados.aseguradosPorSucursals);
router.get('/aseguradosPorEmpresas/:empresaid', asegurados.aseguradosPorEmpresas);

export default router;