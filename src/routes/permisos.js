import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import { createPermiso, getPermisos, getOnePermiso, deletePermiso, updatePermiso } from "../controllers/permiso.controller";
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
router.post('/', createPermiso);
router.get('/', getPermisos);

// /api/perfils/:perfilID
router.get('/:id', getOnePermiso);
router.delete('/:id', deletePermiso);
router.put('/:id', updatePermiso);
//router.post('/createPermiso/:perfilid', createPermiso);

export default router;