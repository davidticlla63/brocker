import express, { json } from "express";
import morgan from "morgan";
//const helmet = require('helmet');

// importing routes
import empresaRoutes from "./routes/empresas";
import sucursalRoutes from "./routes/sucursals";
import usuarioRoutes from "./routes/usuarios";
import sucursalUsuarioRoutes from "./routes/sucursalUsuarios";
import perfilRoutes from "./routes/perfil";
import paginaRoutes from "./routes/paginas";
import areaTrabajoRoutes from "./routes/areaTrabajo";
import personalRoutes from "./routes/personal";
import permisoRoutes from "./routes/permisos";
import departamentoRoutes from "./routes/departamento";
import accionRoutes from "./routes/accion"
import asegusadoRoutes from './routes/asegurado'
import companiaRoutes from './routes/companiaSeguro'
import tiporamoRoutes from './routes/tipoRamo'
import ramoRoutes from './routes/ramo'
import bancoRoutes from './routes/banco'
import subramoRoutes from './routes/subramo'
import subRamoCompaniaRoutes from './routes/SubRamoCompania'
import tipoPolizaRoutes from './routes/tipoPoliza'
import polizaRoutes from './routes/poliza'
import archivoRoutes from './routes/archivo'
import tipomemoRoutes from './routes/tipomemo'
import contratanteRoutes from './routes/contratante'
import vendedorRoutes from './routes/vendedor'
import carpetaRoutes from './routes/carpeta'
import tipoCambioRoutes from './routes/tipoCambio'
import plansRoutes from './routes/plan'
import polizaDetalleRoutes from './routes/polizaDetalle'
import polizaDetalleGeneralRoutes from './routes/polizaDetalleGeneral'
import polizaDetallePersonaRoutes from './routes/polizaDetallePersona'
import polizaDetallePersonaTitularRoutes from './routes/polizaDetallePersonaTitular'
import polizaDetalleAdicionalRoutes from './routes/polizaDetalleAdicional'
import memoRoutes from './routes/memo'
import pagoRoutes from './routes/pago'
import siniestroRoutes from './routes/siniestro'
import requisitoRoutes from './routes/requisito'
import siniestroSeguimientoRoutes from './routes/siniestroSeguimiento'
import cobranzaMotivoRoutes from './routes/cobranzaMotivo'
import ramoCompaniaRoutes from './routes/ramoCompania'
import reporteRoutes from './routes/reportes'
import siniestroRequisitoRoutes from './routes/siniestroRequisito'
import paramProduccionRoutes from './routes/paramProduccion'
import atributoRoutes from './routes/atributo'
import periodoRoutes from './routes/periodo'
import documentoRoutes from './routes/documento'

const http = require('http');

const bodyParser = require("body-parser");
var jsonParser = bodyParser.json({ limit: 1024 * 1024 * 50, type: 'application/json' });
var urlencodedParser = bodyParser.urlencoded({ extended: true, limit: 1024 * 1024 * 50, type: 'application/x-www-form-urlencoded' })


//const app = express();

const app = express();
/* const shouldCompress = (req, res) => {
  if (req.headers['x-no-compression']) {
    // Will not compress responses, if this header is present
    return false;
  }
  // Resort to standard compression
  return compression.filter(req, res);
};

// Compress all HTTP responses
app.use(compression({
  level:100,
  // filter: Decide if the answer should be compressed or not,
  // depending on the 'shouldCompress' function above
  filter: shouldCompress,
  // threshold: It is the byte threshold for the response 
  // body size before considering compression, the default is 1 kB
  threshold: 10*1000
})); */

// middlewares
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', 'upgrade-insecure-requests');
  next();
});

app.use(jsonParser);
app.use(urlencodedParser);

//app.use(express.bodyParser({limit: '50mb'}));

app.use(morgan('dev'));
app.use(json());


/* 
var rdlc = require('../index.js')
rdlc ({ report: 'test.rdl' }, function (err, result) {
  if (!!err) throw err;
  var fs = require('fs')
  fs.writeFileSync('test.pdf', result)
})
 */

app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "default-src 'self'");
  next();
});


app.use('/api/empresas', empresaRoutes);
app.use('/api/sucursals', sucursalRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/sucursalUsuarios', sucursalUsuarioRoutes);
app.use('/api/perfils', perfilRoutes);
app.use('/api/paginas', paginaRoutes);
app.use('/api/permisos', permisoRoutes);
app.use('/api/accions', accionRoutes);
app.use('/api/tipocambios', tipoCambioRoutes);

//sistema asegurado
app.use('/api/areaTrabajos', areaTrabajoRoutes);
app.use('/api/personals', personalRoutes);
app.use('/api/departamentos', departamentoRoutes);
app.use('/api/asegurados', asegusadoRoutes);
//
app.use('/api/companias', companiaRoutes);
app.use('/api/tiporamos', tiporamoRoutes);
app.use('/api/ramos', ramoRoutes);
app.use('/api/bancos', bancoRoutes);
app.use('/api/subramos', subramoRoutes);
app.use('/api/subRamoCompanias', subRamoCompaniaRoutes);
app.use('/api/plans', plansRoutes);
app.use('/api/tipomemos', tipomemoRoutes);
app.use('/api/contratantes', contratanteRoutes);
app.use('/api/vendedors', vendedorRoutes);
//polizas
app.use('/api/atributo', atributoRoutes);
app.use('/api/tipoPolizas', tipoPolizaRoutes);
app.use('/api/polizas', polizaRoutes);
app.use('/api/polizas/automotor', polizaDetalleRoutes);
app.use('/api/polizas/generals', polizaDetalleGeneralRoutes);
app.use('/api/polizas/personas', polizaDetallePersonaRoutes);
app.use('/api/polizas/dependientes', polizaDetallePersonaTitularRoutes);
app.use('/api/polizas/adicionales', polizaDetalleAdicionalRoutes);

//archivos
app.use('/api/carpetas', carpetaRoutes);
app.use('/api/archivos', archivoRoutes);
//memos
app.use('/api/memos', memoRoutes);
app.use('/api/paramProduccion',paramProduccionRoutes)
//pagos
app.use('/api/pago',pagoRoutes);
//cobranza
app.use('/api/cobranzaMotivo',cobranzaMotivoRoutes);

app.use('/api/ramoCompania',ramoCompaniaRoutes);
//siniestro
app.use('/api/siniestro',siniestroRoutes);
app.use('/api/requisito',requisitoRoutes);
app.use('/api/siniestroRequisito',siniestroRequisitoRoutes);
app.use('/api/seguimiento',siniestroSeguimientoRoutes);


//reportes
app.use('/api/reporte',reporteRoutes);

//parametrizacion
app.use('/api/periodo', periodoRoutes);

//documento Word
app.use('/api/documento', documentoRoutes);



//protocolo de biometrico ZKTECO G3

/*
 Nº	Campo	Descripción	Ejemplo
1	PIN	ID del usuario en el reloj	10
2	Fecha	Fecha de la marcación	2025-08-15
3	Hora	Hora de la marcación	09:39:29
4	Verificación	Método de verificación (0=Password, 1=Huella, 15=Tarjeta, etc.)	0
5	Estado	Tipo de marcación (0=Entrada, 1=Salida, 2=Break, etc.)	1
6	WorkCode	Código de trabajo asignado	0
7	Reservado1	Usado en algunos modelos para áreas especiales	0
8	Reservado2	Usado en algunos modelos para GPS o datos adicionales	0
9	Reservado3	Otro dato interno	0
10	Reservado4	Otro dato interno	0 
*/

// Middleware para capturar texto crudo
app.use('/iclock/cdata', express.text({ type: '*/*' }));

const DEVICE_SN = 'AEH2232960135';
const DEVICE_IP = '192.168.241.157';

// Cuando el dispositivo te pregunta si hay algo que hacer
/* app.get('/iclock/getrequest', (req, res) => {
    console.log('Solicitud GETREQUEST:', req.query);

    // Aquí podrías indicar que envíe toda la tabla de usuarios
    // usando un comando especial, pero si solo quieres recibir cuando él envíe, responde vacío.
    res.send('');
}); */

// Cuando el dispositivo envía datos de usuarios
/* app.post('/iclock/cdata', async (req, res) => {
  const raw = req.body.trim();
  console.log('ATTLOG recibido:\n', raw);

  const campos = raw.split(/\s+/);
  const pin = campos[0];
  const fechaHora = campos[1] + ' ' + campos[2];
  const tipoVerificacion = campos[3];
  const estado = campos[4];

  const usuarios = await obtenerUsuarios();
  console.log('Usuarios:', usuarios);
  const infoUsuario = usuarios[pin] || { nombre: 'Desconocido' };

  console.log({
    pin,
    usuario: infoUsuario,
    fechaHora,
    tipoVerificacion,
    estado
  });

  res.send('OK');
}); */


/* function obtenerUsuarios() {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: DEVICE_IP,
      port: 80,
      path: `/iclock/cdata?SN=${DEVICE_SN}&table=USER`,
      method: 'POST'
    };

    const req = http.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        const lineas = data.trim().split('\n');
        const usuarios = {};

        lineas.forEach(line => {
          const campos = line.split(/\s+/);
          const pin = campos[0];
          const nombre = campos[1]; // depende de cómo venga el nombre
          usuarios[pin] = { nombre };
        });

        resolve(usuarios);
      });
    });

    req.on('error', (err) => {
      console.error('Error al obtener usuarios:', err.message);
      resolve({});
    });

    req.end();
  });
}
 */

app.get('/iclock/getrequest', (req, res) => {
    console.log("Solicitud GET desde el biométrico:", req.query);

    // Si quieres que el biométrico te devuelva los usuarios:
    // Le envías un "CMD=DATA QUERY USERINFO"
    const sn = req.query.SN;

    const response = `GET OPTION FROM:${sn}\n` +
                     `Content-Length: 27\n\n` +
                     `CMD=DATA QUERY USERINFO\tTable=USER`;

    res.type('text/plain');
    res.send(response);
});



app.post('/iclock/cdata', (req, res) => {
    const raw = req.body.trim();
    console.log('Evento recibido RAW:', raw);

    const parts = raw.split(/\s+/);

    const data = {
        pin: parts[0] || null,
        fecha: parts[1] || null,
        hora: parts[2] || null,
        verificacion: parts[3] || null,
        estado: parts[4] || null,
        workCode: parts[5] || null,
        reservado1: parts[6] || null,
        reservado2: parts[7] || null,
        reservado3: parts[8] || null,
        reservado4: parts[9] || null
    };

    console.log('Parseado:', data);

    res.status(200).send('OK');
});



/* app.get('/iclock/getrequest', (req, res) => {
    res.status(200).send('');
}); */
export default app;
