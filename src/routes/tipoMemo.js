import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as tipoMemos from "../controllers/tipoMemo.controller";

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/', tipoMemos.createTipoMemo);
router.get('/', tipoMemos.getTipoMemos);

// /api/empresas/:empresaID
router.get('/:id', tipoMemos.getOneTipoMemo);
router.delete('/:id', tipoMemos.deleteTipoMemo);
router.put('/:id', tipoMemos.updateTipoMemo);
router.put('/baja/:id', tipoMemos.bajaTipoMemo);

export default router;