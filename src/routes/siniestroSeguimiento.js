import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as siniestroSeguimientos from "../controllers/siniestroSeguimiento.controller";

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/', siniestroSeguimientos.createSiniestroSeguimiento);
router.get('/:siniestroid', siniestroSeguimientos.getSiniestroSeguimientos);

// /api/empresas/:empresaID
router.get('/:id', siniestroSeguimientos.getOneSiniestroSeguimiento);
router.delete('/:id', siniestroSeguimientos.deleteSiniestroSeguimiento);
router.put('/:id', siniestroSeguimientos.updateSiniestroSeguimiento);
router.put('/baja/:id', siniestroSeguimientos.bajaSiniestroSeguimiento);


export default router;