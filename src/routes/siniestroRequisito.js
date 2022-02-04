import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as siniestroRequisitos from "../controllers/siniestroRequisito.controller";

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/', siniestroRequisitos.createSiniestroRequisito);
router.post('/createSiniestroRequisitos/', siniestroRequisitos.createSiniestroRequisitos);
router.get('/', siniestroRequisitos.getSiniestroRequisitos);
router.get('/siniestroRequisitosPorSiniestro/:siniestroid', siniestroRequisitos.getSiniestroRequisitosPorSiniestro);
// /api/empresas/:empresaID
router.get('/:id', siniestroRequisitos.getOneSiniestroRequisito);
router.delete('/:id', siniestroRequisitos.deleteSiniestroRequisito);
router.put('/:id', siniestroRequisitos.updateSiniestroRequisito);
router.put('/baja/:id', siniestroRequisitos.bajaSiniestroRequisito);

export default router;