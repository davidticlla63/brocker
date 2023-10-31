import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

/* import { createPerfil, getPerfils, getOnePerfil, deletePerfil, updatePerfil ,getPerfilByEmpresa,createPerfilPermisos} from "../controllers/perfil.controller"; */
import * as control from "../controllers/perfil.controller";
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
// /api/perfils/
router.post('/',control. createPerfil);
router.get('/', control.getPerfils);

// /api/perfils/:perfilID
router.get('/:id', control.getOnePerfil);
router.delete('/:id', control.deletePerfil);
router.put('/:id', control.updatePerfil);
router.get('/perfilPorEmpresa/:empresaid', control.getPerfilByEmpresa);
router.get('/perfilPorSucursal/:sucursalid', control.getPerfilBySucursal);
router.post('/createPermisos/:perfilid', control.createPerfilPermisos);
router.get('/obtenerPermisosXPerfil/:perfilid', control.getPermisosPorPerfil);
router.put('/baja/:id', control.bajaPerfil);

export default router;