import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as control from "../controllers/contratante.controller";
import * as tokenVerificacion  from '../jwt/jwtVerificacion'

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/',tokenVerificacion.ensureToken, control.createContratante);
router.get('/', tokenVerificacion.ensureToken,control.getContratantes);
router.get('/contratantePorSucursal/:sucursalid',tokenVerificacion.ensureToken, control.getOneContratantePorSucursal);
router.get('/contratantePorEmpresa/:empresaid',tokenVerificacion.ensureToken, control.getContratantesPorEmpresa);

// /api/empresas/:empresaID
router.get('/:id', tokenVerificacion.ensureToken,control.getOneContratante);
router.delete('/:id',tokenVerificacion.ensureToken, control.deleteContratante);
router.put('/:id',tokenVerificacion.ensureToken, control.updateContratante);
router.put('/baja/:id',tokenVerificacion.ensureToken, control.bajaContratante);

export default router;