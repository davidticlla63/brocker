import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as ramoCompanias from "../controllers/ramoCompania.controller";

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
router.post('/', ramoCompanias.createRamoCompania);
//router.get('/', ramoCompanias.getRamoCompanias);

// /api/empresas/:empresaID
router.get('/:id', ramoCompanias.getOneRamoCompania);
router.delete('/:id', ramoCompanias.deleteRamoCompania);
router.put('/:id', ramoCompanias.updateRamoCompania);
router.put('/baja/:id', ramoCompanias.bajaRamoCompania);
router.get('/ramoCompaniasPorRamo/:ramoid', ramoCompanias.ramoCompaniaPorRamo);
router.get('/ramoCompaniasPorCompania/:companiaseguroid', ramoCompanias.ramoCompaniaPorCompania);
router.get('/ramoCompaniaPorEmpresa/:empresaid', ramoCompanias.ramoCompaniaPorEmpresa);

export default router;