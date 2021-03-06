import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import { createEmpresa, getEmpresas, getOneEmpresa, deleteEmpresa, updateEmpresa,bajaEmpresa } from "../controllers/empresa.controller";

router
    .use(cors())
    .use(bodyParser.json())
  /*   .use(bodyParser.json({ limit: '500mb' }))
    .use(bodyParser.urlencoded({
        limit: '500mb',
        extended: true,
        parameterLimit: 50000
    })) */
    //.use(bodyParser.json({limit: '50mb'}))
    //.use(bodyParser.urlencoded({limit: '50mb', extended: true}))
    //.use(limit(100000000))
    .use(compression());
// /api/empresas/
router.post('/', createEmpresa);
router.get('/', getEmpresas);

// /api/empresas/:empresaID
router.get('/:id', getOneEmpresa);
router.delete('/:id', deleteEmpresa);
router.put('/:id', updateEmpresa);
router.put('/baja/:id', bajaEmpresa);
export default router;