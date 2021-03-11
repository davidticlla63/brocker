import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import { createSucursal, getSucursals, getOneSucursal, deleteSucursal, updateSucursal } from "../controllers/sucursal.controller";
router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/sucursals/
router.post('/', createSucursal);
router.get('/', getSucursals);

// /api/sucursals/:sucursalID
router.get('/:id', getOneSucursal);
router.delete('/:id', deleteSucursal);
router.put('/:id', updateSucursal);

export default router;