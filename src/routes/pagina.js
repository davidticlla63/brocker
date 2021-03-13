import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import { createPagina, getPaginas, getOnePagina, deletePagina, updatePagina } from "../controllers/pagina.controller";
router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
// /api/paginas/
router.post('/', createPagina);
router.get('/', getPaginas);

// /api/paginas/:paginaID
router.get('/:id', getOnePagina);
router.delete('/:id', deletePagina);
router.put('/:id', updatePagina);

export default router;