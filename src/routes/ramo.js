import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as ramos from "../controllers/ramo.controller";

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
router.post('/', ramos.createRamo);
router.get('/', ramos.getRamos);

// /api/empresas/:empresaID
router.get('/:id', ramos.getOneRamo);
router.delete('/:id', ramos.deleteRamo);
router.put('/:id', ramos.updateRamo);
router.put('/baja/:id', ramos.bajaRamo);
router.get('/ramosPorEmpresa/:empresaid', ramos.getRamosPorEmpresa);
router.get('/ramosPorEmpresas/:empresaid', ramos.getRamosPorEmpresas);
router.get('/obtenerRamosPorEmpresas/:empresaid', ramos.obtenerRamosPorEmpresa);
router.get('/subRamos/:ramoid', ramos.getSubRamos);

router.get('/ramoPorEmpresa/:empresaid', ramos.ramoPorEmpresa);
export default router;