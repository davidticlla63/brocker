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
    .use(compression());
// /api/empresas/
/* 
router.post('/', control.createAtributo);
router.put('/:id', control.updateAtributo); 
*/

router.post('/',tokenVerificacion.ensureToken, control.createAtributos);
router.put('/',tokenVerificacion.ensureToken, control.updateAtributos);
router.get('/', tokenVerificacion.ensureToken,control.getAtributo);
router.get('/:empresaid/:tipopolizaid',tokenVerificacion.ensureToken, control.getAtributoPorTipoPoliza);

// /api/empresas/:empresaID
router.get('/:id',tokenVerificacion.ensureToken, control.getOneAtributo);
router.delete('/:id',tokenVerificacion.ensureToken, control.deleteAtributo);

router.put('/baja/:id',tokenVerificacion.ensureToken, control.bajaAtributo);
router.get('/atributosPorEmpresa/:empresaid',tokenVerificacion.ensureToken, control.getAtributoPorEmpresa);
export default router;