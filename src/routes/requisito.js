import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as requisitos from "../controllers/requisito.controller";

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/', requisitos.createRequisito);
router.get('/', requisitos.getRequisitos);
router.get('/requisitosPorEmpresa/:empresaid', requisitos.getRequisitosPorEmpresa);
router.get('/requisitosPorSiniestro/:siniestroid', requisitos.getRequisitoPorSiniestro);
// /api/empresas/:empresaID
router.get('/:id', requisitos.getOneRequisito);
router.delete('/:id', requisitos.deleteRequisito);
router.put('/:id', requisitos.updateRequisito);
router.put('/baja/:id', requisitos.bajaRequisito);

export default router;