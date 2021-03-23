import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();
//{ createSucursal, getSucursals, getOneSucursal, deleteSucursal, updateSucursal,getSucursalByEmpresa,bajaSucursal }
import * as sucursal from "../controllers/sucursal.controller";
router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/sucursals/
router.post('/', sucursal.createSucursal);
router.get('/',  sucursal.getSucursals);

// /api/sucursals/:sucursalID
router.get('/:id',  sucursal.getOneSucursal);
router.delete('/:id',  sucursal.deleteSucursal);
router.put('/:id',  sucursal.updateSucursal);
router.put('/baja/:id',  sucursal.bajaSucursal);
router.get('/susursalesPorEmpresa/:empresaid',  sucursal.getSucursalByEmpresa);

export default router;