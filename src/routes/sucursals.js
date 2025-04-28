import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();
//{ createSucursal, getSucursals, getOneSucursal, deleteSucursal, updateSucursal,getSucursalByEmpresa,bajaSucursal }
import * as control from "../controllers/sucursal.controller";
import * as tokenVerificacion  from '../jwt/jwtVerificacion'
router
    .use(cors())
    .use(bodyParser.json())
    .use(compression())
     .use(tokenVerificacion.ensureToken); // ✅ Middleware global para el router;
// /api/sucursals/
router.post('/', control.createSucursal);
router.get('/',  control.getSucursals);

// /api/sucursals/:sucursalID
router.get('/:id',  control.getOneSucursal);
router.delete('/:id',  control.deleteSucursal);
router.put('/:id',  control.updateSucursal);
router.put('/baja/:id',  control.bajaSucursal);
router.get('/susursalesPorEmpresa/:empresaid',  control.getSucursalByEmpresa);

export default router;