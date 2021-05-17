import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as polizaDetalleAdicionales from "../controllers/polizaDetalleAdicional.controller";

router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());



router.get('/polizaDetalleAdicionales/:polizadetalleid', polizaDetalleAdicionales.getPolizaDetalleAdicionalesPorDetalle);

export default router;