import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as contratantes from "../controllers/contratante.controller";

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/', contratantes.createContratante);
router.get('/', contratantes.getContratantes);
router.get('/contratantePorSucursal/:sucursalid', contratantes.getOneContratantePorSucursal);

// /api/empresas/:empresaID
router.get('/:id', contratantes.getOneContratante);
router.delete('/:id', contratantes.deleteContratante);
router.put('/:id', contratantes.updateContratante);
router.put('/baja/:id', contratantes.bajaContratante);

export default router;