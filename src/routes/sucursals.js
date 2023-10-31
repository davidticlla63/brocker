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
    .use(compression());
// /api/sucursals/
router.post('/',tokenVerificacion.ensureToken, control.createSucursal);
router.get('/',tokenVerificacion.ensureToken,  control.getSucursals);

// /api/sucursals/:sucursalID
router.get('/:id', tokenVerificacion.ensureToken, control.getOneSucursal);
router.delete('/:id', tokenVerificacion.ensureToken, control.deleteSucursal);
router.put('/:id', tokenVerificacion.ensureToken, control.updateSucursal);
router.put('/baja/:id',tokenVerificacion.ensureToken,  control.bajaSucursal);
router.get('/susursalesPorEmpresa/:empresaid',tokenVerificacion.ensureToken,  control.getSucursalByEmpresa);

export default router;