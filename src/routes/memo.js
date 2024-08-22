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
      }));
// /api/empresas/
router.post('/',tokenVerificacion.ensureToken, control.createMemo);
router.get('/',tokenVerificacion.ensureToken, control.getMemos);

// /api/empresas/:empresaID
router.get('/:id',tokenVerificacion.ensureToken, control.getOneMemo);
router.delete('/:id',tokenVerificacion.ensureToken, control.deleteMemo);
router.put('/:id',tokenVerificacion.ensureToken, control.updateMemo);
router.put('/baja/:id', tokenVerificacion.ensureToken,control.bajaMemo);
router.post('/memosPorEmpresa/:empresaid',tokenVerificacion.ensureToken, control.memosPorEmpresa);
router.post('/memosPorSucursal/:sucursalid',tokenVerificacion.ensureToken, control.memosPorSucursal);

/**dashoboard */
router.get('/totalProduccionPorEmpresa/:empresaid',tokenVerificacion.ensureToken, control.getTotalProduccionMemoPorEmpresa);
router.get('/totalProduccionPorSucursal/:sucursalid',tokenVerificacion.ensureToken, control.getTotalProduccionMemoPorSucursal);

/**dashoboard */
router.post('/produccionMensualTxt/',tokenVerificacion.ensureToken, control.listarProduccionMesualTXT);
//router.post('/produccionMensualTxt/', control.listarProduccionMesualTXT);

export default router;