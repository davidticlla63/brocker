import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as control from "../controllers/memo.controller";
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
router.post('/', control.createMemo);
router.get('/', control.getMemos);

// /api/empresas/:empresaID
router.get('/:id', control.getOneMemo);
router.delete('/:id', control.deleteMemo);
router.put('/:id', control.updateMemo);
router.put('/baja/:id', control.bajaMemo);
router.post('/memosPorEmpresa/:empresaid', control.memosPorEmpresa);
router.post('/memosPorSucursal/:sucursalid', control.memosPorSucursal);

/**dashoboard */
router.get('/totalProduccionPorEmpresa/:empresaid', control.getTotalProduccionMemoPorEmpresa);
router.get('/totalProduccionPorSucursal/:sucursalid', control.getTotalProduccionMemoPorSucursal);

/**dashoboard */
router.post('/produccionMensualTxt/', control.listarProduccionMesualTXT);
//router.post('/produccionMensualTxt/', control.listarProduccionMesualTXT);

export default router;