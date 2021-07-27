import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as memos from "../controllers/memo.controller";

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
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
export default router;