import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as atributos from "../controllers/atributo.controller";

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/empresas/
/* 
router.post('/', atributos.createAtributo);
router.put('/:id', atributos.updateAtributo); 
*/

router.post('/', atributos.createAtributos);
router.put('/:id', atributos.updateAtributos);
router.get('/', atributos.getAtributo);
router.get('/:empresaid/:tipopolizaid', atributos.getAtributoPorTipoPoliza);

// /api/empresas/:empresaID
router.get('/:id', atributos.getOneAtributo);
router.delete('/:id', atributos.deleteAtributo);

router.put('/baja/:id', atributos.bajaAtributo);
router.get('/atributosPorEmpresa/:empresaid', atributos.getAtributoPorEmpresa);
export default router;