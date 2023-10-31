import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as control from "../controllers/asegurado.controller";
import * as tokenVerificacion  from '../jwt/jwtVerificacion'

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
router.post('/',tokenVerificacion.ensureToken, control.createAsegurado);
router.get('/',tokenVerificacion.ensureToken, control.getAsegurados);

// /api/empresas/:empresaID
router.get('/:id',tokenVerificacion.ensureToken, control.getOneAsegurado);
router.delete('/:id',tokenVerificacion.ensureToken, control.deleteAsegurado);
router.put('/:id',tokenVerificacion.ensureToken, control.updateAsegurado);
router.put('/baja/:id', tokenVerificacion.ensureToken,control.bajaAsegurado);
router.get('/aseguradosPorSucursal/:sucuesalid',tokenVerificacion.ensureToken, control.aseguradosPorSucursal);
router.get('/aseguradosPorSucursalYTipo/:sucursalid/:tipoasegurado',tokenVerificacion.ensureToken, control.aseguradosPorSucursalYTipo);
router.get('/aseguradosPorEmpresaYTipo/:empresaid/:tipoasegurado',tokenVerificacion.ensureToken, control.aseguradosPorEmpresaYTipo);

router.get('/todoLosAseguradosPorSucursal/:sucursalid',tokenVerificacion.ensureToken, control.todoLosAseguradosPorSucursal);
router.get('/todoLosAseguradosPorEmpresa/:empresaid',tokenVerificacion.ensureToken, control.todoLosAseguradosPorEmpresa);
router.get('/aseguradosPorSucursals/:sucursalid',tokenVerificacion.ensureToken, control.aseguradosPorSucursals);
router.get('/aseguradosPorEmpresas/:empresaid',tokenVerificacion.ensureToken, control.aseguradosPorEmpresas);

export default router;