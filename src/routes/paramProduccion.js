import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

//import { createParamProduccions, getParamProduccionss, getOneParamProduccions, deleteParamProduccions, updateParamProduccions,bajaParamProduccions,ParamProduccionsByEmpresa } from "../controllers/ParamProduccions.controller";
import * as control from "../controllers/paramProduccion.controller";
import * as tokenVerificacion  from '../jwt/jwtVerificacion'

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/',tokenVerificacion.ensureToken,control.createParamProduccion);
router.get('/', tokenVerificacion.ensureToken,control.getParamProduccions);

// /api/empresas/:empresaID
router.get('/:id',tokenVerificacion.ensureToken,control. getOneParamProduccion);
router.delete('/:id',tokenVerificacion.ensureToken, control.deleteParamProduccion);
router.put('/:id',tokenVerificacion.ensureToken, control.updateParamProduccion);
router.get('/ParamProduccionsPorSucursal/:sucursalid',tokenVerificacion.ensureToken, control.ParamProduccionBySucursal);
router.put('/baja/:id',tokenVerificacion.ensureToken, control.bajaParamProduccion);

export default router;