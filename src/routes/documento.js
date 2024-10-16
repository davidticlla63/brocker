import { Router } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const router = Router();

import * as tokenVerificacion  from '../jwt/jwtVerificacion'
import * as processWordDocument  from '../lib/processWordDocument'
router
    .use(cors())
    .use(bodyParser.json())
    .use(compression());
/* // /api/empresas/
app.get('/documentoWord',tokenVerificacion.ensureToken, function (req, res, next) {
    const { filePath, data } = req.body;

    try {
        // Ejemplo de uso
        const filePath = './src/doc/plantilla.docx'; // Ruta del documento Word original
        const data = {
            nombre: 'Juan Pérez',
            numero_poliza: '123456789',
            fecha_vencimiento: '31/12/2024',
        };

        const base64Document = documentWord.docuprocessWordDocument(filePath, data);
        res.json({ document: base64Document });
    } catch (error) {
        res.status(500).json({ error: 'Error al generar el documento' });
    }
}); */


/* router.get('/documentoWord',tokenVerificacion.ensureToken, function (req, res, next) { */
router.get('/documentoWord',function (req, res, next) {
    const { id } = req.params;
    try {
      // Ejemplo de uso
      const filePath = './src/doc/plantilla.docx'; // Ruta del documento Word original
      const data = {
          nombre: 'Juan Pérez',
          numero_poliza: '123456789',
          fecha_vencimiento: '31/12/2024',
      };

      const base64Document = processWordDocument.processWordDocument(filePath, data);
      res.json({ data: base64Document });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        data: { estado: false, "error": error.message }
      });
    } 
  
  });

export default router;