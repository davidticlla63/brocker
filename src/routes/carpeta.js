import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as carpetas from "../controllers/carpeta.controller";

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/', carpetas.createCarpeta);
router.get('/', carpetas.getCarpetas);

// /api/empresas/:empresaID
router.get('/:id', carpetas.getOneCarpeta);
router.delete('/:id', carpetas.deleteCarpeta);
router.put('/:id', carpetas.updateCarpeta);
router.put('/baja/:id', carpetas.bajaCarpeta);

export default router;