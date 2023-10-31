import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as control from "../controllers/ramo.controller";
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
router.post('/',tokenVerificacion.ensureToken, control.createRamo);
router.get('/',tokenVerificacion.ensureToken, control.getRamos);

// /api/empresas/:empresaID
router.get('/:id',tokenVerificacion.ensureToken, control.getOneRamo);
router.delete('/:id',tokenVerificacion.ensureToken, control.deleteRamo);
router.put('/:id',tokenVerificacion.ensureToken, control.updateRamo);
router.put('/baja/:id',tokenVerificacion.ensureToken, control.bajaRamo);
router.get('/ramosPorEmpresa/:empresaid',tokenVerificacion.ensureToken, control.getRamosPorEmpresa);
router.get('/ramosPorEmpresas/:empresaid',tokenVerificacion.ensureToken, control.getRamosPorEmpresas);
router.get('/obtenerRamosPorEmpresas/:empresaid',tokenVerificacion.ensureToken, control.obtenerRamosPorEmpresa);
router.get('/subRamos/:ramoid', tokenVerificacion.ensureToken,control.getSubRamos);

router.get('/ramoPorEmpresa/:empresaid',tokenVerificacion.ensureToken, control.ramoPorEmpresa);
export default router;