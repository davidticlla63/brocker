import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as control from "../controllers/requisito.controller";
import * as tokenVerificacion  from '../jwt/jwtVerificacion'
router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/',tokenVerificacion.ensureToken, control.createRequisito);
router.get('/',tokenVerificacion.ensureToken, control.getRequisitos);
router.get('/requisitosPorEmpresa/:empresaid',tokenVerificacion.ensureToken, control.getRequisitosPorEmpresa);
router.get('/requisitosPorSiniestro/:siniestroid',tokenVerificacion.ensureToken, control.getRequisitoPorSiniestro);
// /api/empresas/:empresaID
router.get('/:id',tokenVerificacion.ensureToken, control.getOneRequisito);
router.delete('/:id',tokenVerificacion.ensureToken, control.deleteRequisito);
router.put('/:id', tokenVerificacion.ensureToken,control.updateRequisito);
router.put('/baja/:id', tokenVerificacion.ensureToken,control.bajaRequisito);

export default router;