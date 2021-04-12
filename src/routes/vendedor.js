import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as vendedors from "../controllers/vendedor.controller";

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/', vendedors.createVendedor);
router.get('/', vendedors.getVendedors);

// /api/empresas/:empresaID
router.get('/:id', vendedors.getOneVendedor);
router.delete('/:id', vendedors.deleteVendedor);
router.put('/:id', vendedors.updateVendedor);
router.put('/baja/:id', vendedors.bajaVendedor);

export default router;