import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as bancos from "../controllers/banco.controller";

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/', bancos.createBanco);
router.get('/', bancos.getBancos);

// /api/empresas/:empresaID
router.get('/:id', bancos.getOneBanco);
router.delete('/:id', bancos.deleteBanco);
router.put('/:id', bancos.updateBanco);
router.put('/baja/:id', bancos.bajaBanco);
router.get('/bancosPorEmpresa/:empresaid', bancos.bancosPorEmpresa);

export default router;