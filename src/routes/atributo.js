import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as control from "../controllers/atributo.controller";
import * as tokenVerificacion  from '../jwt/jwtVerificacion'

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression())
     .use(tokenVerificacion.ensureToken); // ✅ Middleware global para el router;
// /api/empresas/
/* 
router.post('/', control.createAtributo);
router.put('/:id', control.updateAtributo); 
*/

router.post('/', control.createAtributos);
router.put('/', control.updateAtributos);
router.get('/', control.getAtributo);
router.get('/:empresaid/:tipopolizaid', control.getAtributoPorTipoPoliza);

// /api/empresas/:empresaID
router.get('/:id', control.getOneAtributo);
router.delete('/:id', control.deleteAtributo);

router.put('/baja/:id', control.bajaAtributo);
router.get('/atributosPorEmpresa/:empresaid', control.getAtributoPorEmpresa);
export default router;