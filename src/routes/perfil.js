import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

/* import { createPerfil, getPerfils, getOnePerfil, deletePerfil, updatePerfil ,getPerfilByEmpresa,createPerfilPermisos} from "../controllers/perfil.controller"; */
import * as perfil from "../controllers/perfil.controller";
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
router.post('/',perfil. createPerfil);
router.get('/', perfil.getPerfils);

// /api/perfils/:perfilID
router.get('/:id', perfil.getOnePerfil);
router.delete('/:id', perfil.deletePerfil);
router.put('/:id', perfil.updatePerfil);
router.get('/perfilPorEmpresa/:empresaid', perfil.getPerfilByEmpresa);
router.get('/perfilPorSucursal/:sucursalid', perfil.getPerfilBySucursal);
router.post('/createPermisos/:perfilid', perfil.createPerfilPermisos);
router.get('/obtenerPermisosXPerfil/:perfilid', perfil.getPermisosPorPerfil);
router.put('/baja/:id', perfil.bajaPerfil);

export default router;