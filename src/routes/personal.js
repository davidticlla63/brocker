import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

/* import { createPersonal, getPersonals, getOnePersonal, deletePersonal, updatePersonal,bajaPersonal,personalByAreaTrabajo ,personalBySucursal,
personalByEmpresa} from "../controllers/personal.controller"; */
import * as personal from "../controllers/personal.controller";

const shouldCompress = (req, res) => {
  if (req.headers['x-no-compression']) {
    // No comprimira las respuestas, si este encabezado 
    // está presente.
    return false;
  }
  // Recurrir a la compresión estándar
  return compression.filter(req, res);
};

router
  .use(cors())
  .use(bodyParser.json())
  .use(compression({
      // filter: Decide si la respuesta debe comprimirse o no,
      // en función de la función 'shouldCompress' anterior
      filter: shouldCompress,
      // threshold: Es el umbral de bytes para el tamaño del cuerpo
      // de la respuesta antes de considerar la compresión,
      // el valor predeterminado es 1 kB
      threshold: 0
    }));
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