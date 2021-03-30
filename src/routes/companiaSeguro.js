import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as companiaSeguros from "../controllers/companiaSeguro.controller";

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/', companiaSeguros.createCompaniaSeguro);
router.get('/', companiaSeguros.getCompaniaSeguros);

// /api/empresas/:empresaID
router.get('/:id', companiaSeguros.getOneCompaniaSeguro);
router.delete('/:id', companiaSeguros.deleteCompaniaSeguro);
router.put('/:id', companiaSeguros.updateCompaniaSeguro);
router.put('/baja/:id', companiaSeguros.bajaCompaniaSeguro);
router.get('/companiaSegurosPorEmpresa/:empresaid', companiaSeguros.getCompaniaSegurosPorEmpresa);

export default router;