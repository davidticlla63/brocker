import { Router } from "express";
const router = Router();

import { createSucursal, getSucursals, getOneSucursal, deleteSucursal, updateSucursal } from "../controllers/sucursal.controller";

// /api/sucursals/
router.post('/', createSucursal);
router.get('/', getSucursals);

// /api/sucursals/:sucursalID
router.get('/:id', getOneSucursal);
router.delete('/:id', deleteSucursal);
router.put('/:id', updateSucursal);

export default router;