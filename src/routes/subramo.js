import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as subRamos from "../controllers/subRamo.controller";

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/', subRamos.createSubRamo);
router.get('/', subRamos.getSubRamos);

// /api/empresas/:empresaID
router.get('/:id', subRamos.getOneSubRamo);
router.delete('/:id', subRamos.deleteSubRamo);
router.put('/:id', subRamos.updateSubRamo);
router.put('/baja/:id', subRamos.bajaSubRamo);
router.get('/subRamosPorRamo/:ramoid', subRamos.subRamosPorRamo);

export default router;