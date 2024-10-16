const fs = require('fs');
const PizZip = require('pizzip');
const Docxtemplater = require('docxtemplater');
const path = require('path');



// Función para leer y modificar un documento Word
export function processWordDocument(filePath, data) {
    try {
        // Leer el documento original (plantilla)
        const content = fs.readFileSync(filePath, 'binary');

        // Crear una copia del archivo utilizando PizZip
        const zip = new PizZip(content);

        // Inicializar Docxtemplater con el archivo zip (que contiene el documento Word)
        const doc = new Docxtemplater(zip);

        // Reemplazar las etiquetas en el documento con los datos
        doc.render(data);

        // Guardar la copia modificada en buffer
        const buf = doc.getZip().generate({ type: 'nodebuffer' });


         // Obtener la fecha y la hora actual
        const now = new Date();
        const formattedDate = now.toISOString().split('T')[0]; // Formato: YYYY-MM-DD
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const formattedDateTime = `${formattedDate}_${hours}-${minutes}-${seconds}`; // Combinar fecha y hora
           const copyFileName = `plantilla_copy_${formattedDateTime}.docx`;
        // Crear un nuevo archivo de copia
        const copyPath = filePath.replace('.docx', copyFileName);
        fs.writeFileSync(copyPath, buf);

        // Convertir el documento modificado a base64
        const base64Document = buf.toString('base64');

         /* // Eliminar el archivo de copia después de la conversión a base64
         fs.unlinkSync(copyPath); */

        // Retornar el documento en formato base64
        return base64Document;
    } catch (error) {
        console.error('Error procesando el documento:', error);
        throw error;
    }
}


/* // Obtener la ruta absoluta a partir del archivo actual
const filePath2 = path.join(__dirname, '../../doc/plantilla.docx');

console.log('Ruta absoluta:', filePath2); */
// Ejemplo de uso
/* const filePath = './src/doc/plantilla.docx'; // Ruta del documento Word original
const data = {
    nombre: 'Juan Pérez',
    numero_poliza: '123456789',
    fecha_vencimiento: '2024-12-31',
};

const base64Document = processWordDocument(filePath, data);
console.log('Documento en base64:', base64Document); */


// Exportar la función para que pueda ser utilizada en otros módulos
module.exports = {
    processWordDocument,
};