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
      }))
       .use(tokenVerificacion.ensureToken); // ✅ Middleware global para el router;
// /api/empresas/
router.post('/', control.createRamo);
router.get('/', control.getRamos);

// /api/empresas/:empresaID
router.get('/:id', control.getOneRamo);
router.delete('/:id', control.deleteRamo);
router.put('/:id', control.updateRamo);
router.put('/baja/:id', control.bajaRamo);
router.get('/ramosPorEmpresa/:empresaid', control.getRamosPorEmpresa);
router.get('/ramosPorEmpresas/:empresaid', control.getRamosPorEmpresas);
router.get('/obtenerRamosPorEmpresas/:empresaid', control.obtenerRamosPorEmpresa);
router.get('/subRamos/:ramoid', control.getSubRamos);

router.get('/ramoPorEmpresa/:empresaid', control.ramoPorEmpresa);
export default router;