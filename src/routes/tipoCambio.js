import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import { createTipoCambio, getTipoCambios, getOneTipoCambio, deleteTipoCambio, updateTipoCambio,bajaTipoCambio,tipoCambioByEmpresa } from "../controllers/tipoCambio.controller";

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/', createTipoCambio);
router.get('/', getTipoCambios);

// /api/empresas/:empresaID
router.get('/:id', getOneTipoCambio);
router.delete('/:id', deleteTipoCambio);
router.put('/:id', updateTipoCambio);
router.get('/tipoCambioPorEmpresa/:empresaid', tipoCambioByEmpresa);
router.put('/baja/:id', bajaTipoCambio);

export default router;