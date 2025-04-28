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
    .use(compression())
     .use(tokenVerificacion.ensureToken); // ✅ Middleware global para el router;
// /api/empresas/
router.post('/',control.createParamProduccion);
router.get('/', control.getParamProduccions);

// /api/empresas/:empresaID
router.get('/:id',control. getOneParamProduccion);
router.delete('/:id', control.deleteParamProduccion);
router.put('/:id', control.updateParamProduccion);
router.get('/ParamProduccionsPorSucursal/:sucursalid', control.ParamProduccionBySucursal);
router.put('/baja/:id', control.bajaParamProduccion);

export default router;