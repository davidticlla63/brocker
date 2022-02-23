import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

//import { createParamProduccions, getParamProduccionss, getOneParamProduccions, deleteParamProduccions, updateParamProduccions,bajaParamProduccions,ParamProduccionsByEmpresa } from "../controllers/ParamProduccions.controller";
import * as ParamProduccion from "../controllers/paramProduccion.controller";
router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/',ParamProduccion.createParamProduccion);
router.get('/', ParamProduccion.getParamProduccions);

// /api/empresas/:empresaID
router.get('/:id',ParamProduccion. getOneParamProduccion);
router.delete('/:id', ParamProduccion.deleteParamProduccion);
router.put('/:id', ParamProduccion.updateParamProduccion);
router.get('/ParamProduccionsPorSucursal/:sucursalid', ParamProduccion.ParamProduccionBySucursal);
router.put('/baja/:id', ParamProduccion.bajaParamProduccion);

export default router;