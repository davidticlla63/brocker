import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

/* import { createPersonal, getPersonals, getOnePersonal, deletePersonal, updatePersonal,bajaPersonal,personalByAreaTrabajo ,personalBySucursal,
personalByEmpresa} from "../controllers/personal.controller"; */
import * as control from "../controllers/personal.controller";
import * as tokenVerificacion  from '../jwt/jwtVerificacion'
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
    }))
     .use(tokenVerificacion.ensureToken); // ✅ Middleware global para el router;
// /api/empresas/
router.post('/', control.createPersonal);
router.get('/',control. getPersonals);

// /api/empresas/:empresaID
router.get('/:id', control.getOnePersonal);
router.delete('/:id', control.deletePersonal);
router.put('/:id', control.updatePersonal);
router.put('/baja/:id', control.bajaPersonal);
router.get('/personalBySucursal/:sucursalid', control.personalBySucursal);
router.get('/personalByAreaTrabajo/:areatrabajoid', control.personalByAreaTrabajo);
router.get('/personalByEmpresa/:empresaid', control.personalByEmpresa);
//router.get('/personalByEmpresa/:empresaid', personal.personalByEmpresa);
router.get('/personalByAreaTrabajoYSucursal/:areatrabajoid/:sucursalid', control.personalByAreaTrabajoYSucursal);
router.get('/personalByAreaTrabajoYEmpresa/:areatrabajoid/:empresaid', control.personalByAreaTrabajoYEmpresa);

router.get('/personalByTipoCarteraYSucursal/:tipocartera/:sucursalid', control.personalByTipoCarteraYSucursal);
router.get('/personalByTipoCarteraYEmpresa/:tipocartera/:empresaid', control.personalByTipoCarteraYEmpresa);

export default router;