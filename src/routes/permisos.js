import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as control from "../controllers/permiso.controller";
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
// /api/perfils/
router.post('/',tokenVerificacion.ensureToken,control. createPermiso);
router.get('/',tokenVerificacion.ensureToken,control. getPermisos);

// /api/perfils/:perfilID
router.get('/:id',tokenVerificacion.ensureToken,control. getOnePermiso);
router.delete('/:id', tokenVerificacion.ensureToken,control.deletePermiso);
router.put('/:id', tokenVerificacion.ensureToken,control.updatePermiso);
//router.post('/createPermiso/:perfilid', createPermiso);

export default router;