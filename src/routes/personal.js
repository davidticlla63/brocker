import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import { createPersonal, getPersonals, getOnePersonal, deletePersonal, updatePersonal,bajaPersonal } from "../controllers/personal.controller";

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
router.post('/', createPersonal);
router.get('/', getPersonals);

// /api/empresas/:empresaID
router.get('/:id', getOnePersonal);
router.delete('/:id', deletePersonal);
router.put('/:id', updatePersonal);
router.put('/baja/:id', bajaPersonal);

export default router;