import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as control from "../controllers/polizaDetalleAdicional.controller";
import * as tokenVerificacion  from '../jwt/jwtVerificacion'
router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());



router.get('/control/:polizadetalleid',tokenVerificacion.ensureToken, control.getPolizaDetalleAdicionalesPorDetalle);

export default router;