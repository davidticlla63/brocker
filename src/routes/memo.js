import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as memos from "../controllers/memo.controller";

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
router.post('/', memos.createMemo);
router.get('/', memos.getMemos);

// /api/empresas/:empresaID
router.get('/:id', memos.getOneMemo);
router.delete('/:id', memos.deleteMemo);
router.put('/:id', memos.updateMemo);
router.put('/baja/:id', memos.bajaMemo);
router.post('/memosPorEmpresa/:empresaid', memos.memosPorEmpresa);
router.post('/memosPorSucursal/:sucursalid', memos.memosPorSucursal);

/**dashoboard */
router.get('/totalProduccionPorEmpresa/:empresaid', memos.getTotalProduccionMemoPorEmpresa);
router.get('/totalProduccionPorSucursal/:sucursalid', memos.getTotalProduccionMemoPorSucursal);

/**dashoboard */
router.post('/produccionMensualTxt/', memos.listarProduccionMesualTXT);

export default router;