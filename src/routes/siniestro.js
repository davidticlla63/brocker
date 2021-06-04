import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as siniestros from "../controllers/siniestro.controller";

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/', siniestros.createSiniestro);
router.get('/', siniestros.getSiniestros);

// /api/empresas/:empresaID
router.get('/:id', siniestros.getOneSiniestro);
router.delete('/:id', siniestros.deleteSiniestro);
router.put('/:id', siniestros.updateSiniestro);
router.put('/baja/:id', siniestros.bajaSiniestro);

export default router;