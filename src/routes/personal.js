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
    }));
// /api/empresas/
router.post('/',tokenVerificacion.ensureToken, control.createPersonal);
router.get('/',tokenVerificacion.ensureToken,control. getPersonals);

// /api/empresas/:empresaID
router.get('/:id',tokenVerificacion.ensureToken, control.getOnePersonal);
router.delete('/:id',tokenVerificacion.ensureToken, control.deletePersonal);
router.put('/:id',tokenVerificacion.ensureToken, control.updatePersonal);
router.put('/baja/:id',tokenVerificacion.ensureToken, control.bajaPersonal);
router.get('/personalBySucursal/:sucursalid',tokenVerificacion.ensureToken, control.personalBySucursal);
router.get('/personalByAreaTrabajo/:areatrabajoid',tokenVerificacion.ensureToken, control.personalByAreaTrabajo);
router.get('/personalByEmpresa/:empresaid',tokenVerificacion.ensureToken, control.personalByEmpresa);
//router.get('/personalByEmpresa/:empresaid', personal.personalByEmpresa);
router.get('/personalByAreaTrabajoYSucursal/:areatrabajoid/:sucursalid',tokenVerificacion.ensureToken, control.personalByAreaTrabajoYSucursal);
router.get('/personalByAreaTrabajoYEmpresa/:areatrabajoid/:empresaid',tokenVerificacion.ensureToken, control.personalByAreaTrabajoYEmpresa);

router.get('/personalByTipoCarteraYSucursal/:tipocartera/:sucursalid',tokenVerificacion.ensureToken, control.personalByTipoCarteraYSucursal);
router.get('/personalByTipoCarteraYEmpresa/:tipocartera/:empresaid',tokenVerificacion.ensureToken, control.personalByTipoCarteraYEmpresa);

export default router;