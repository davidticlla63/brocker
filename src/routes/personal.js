import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

/* import { createPersonal, getPersonals, getOnePersonal, deletePersonal, updatePersonal,bajaPersonal,personalByAreaTrabajo ,personalBySucursal,
personalByEmpresa} from "../controllers/personal.controller"; */
import * as personal from "../controllers/personal.controller";

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
router.post('/', personal.createPersonal);
router.get('/',personal. getPersonals);

// /api/empresas/:empresaID
router.get('/:id', personal.getOnePersonal);
router.delete('/:id', personal.deletePersonal);
router.put('/:id', personal.updatePersonal);
router.put('/baja/:id', personal.bajaPersonal);
router.get('/personalBySucursal/:sucursalid', personal.personalBySucursal);
router.get('/personalByAreaTrabajo/:areatrabajoid', personal.personalByAreaTrabajo);
router.get('/personalByEmpresa/:empresaid', personal.personalByEmpresa);
//router.get('/personalByEmpresa/:empresaid', personal.personalByEmpresa);
router.get('/personalByAreaTrabajoYSucursal/:areatrabajoid/:sucursalid', personal.personalByAreaTrabajoYSucursal);
router.get('/personalByAreaTrabajoYEmpresa/:areatrabajoid/:empresaid', personal.personalByAreaTrabajoYEmpresa);

export default router;