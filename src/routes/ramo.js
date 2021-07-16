import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as ramos from "../controllers/ramo.controller";

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
router.post('/', ramos.createRamo);
router.get('/', ramos.getRamos);

// /api/empresas/:empresaID
router.get('/:id', ramos.getOneRamo);
router.delete('/:id', ramos.deleteRamo);
router.put('/:id', ramos.updateRamo);
router.put('/baja/:id', ramos.bajaRamo);
router.get('/ramosPorEmpresa/:empresaid', ramos.getRamosPorEmpresa);
router.get('/ramosPorEmpresas/:empresaid', ramos.getRamosPorEmpresas);
router.get('/obtenerRamosPorEmpresas/:empresaid', ramos.obtenerRamosPorEmpresa);
router.get('/subRamos/:ramoid', ramos.getSubRamos);

router.get('/ramoPorEmpresa/:empresaid', ramos.ramoPorEmpresa);
export default router;