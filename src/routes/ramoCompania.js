import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as control from "../controllers/ramoCompania.controller";
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
router.post('/', control.createRamoCompania);
//router.get('/', control.getRamoCompanias);

// /api/empresas/:empresaID
router.get('/:id', control.getOneRamoCompania);
router.delete('/:id', control.deleteRamoCompania);
router.put('/:id', control.updateRamoCompania);
router.put('/baja/:id', control.bajaRamoCompania);
router.get('/ramoCompaniasPorRamo/:ramoid', control.ramoCompaniaPorRamo);
router.get('/ramoCompaniasPorCompania/:companiaseguroid', control.ramoCompaniaPorCompania);
router.get('/ramoCompaniaPorEmpresa/:empresaid', control.ramoCompaniaPorEmpresa);

export default router;