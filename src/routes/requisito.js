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
    .use(compression())
     .use(tokenVerificacion.ensureToken); // ✅ Middleware global para el router;
// /api/empresas/
router.post('/', control.createRequisito);
router.get('/', control.getRequisitos);
router.get('/requisitosPorEmpresa/:empresaid', control.getRequisitosPorEmpresa);
router.get('/requisitosPorSiniestro/:siniestroid', control.getRequisitoPorSiniestro);
// /api/empresas/:empresaID
router.get('/:id', control.getOneRequisito);
router.delete('/:id', control.deleteRequisito);
router.put('/:id', control.updateRequisito);
router.put('/baja/:id', control.bajaRequisito);

export default router;