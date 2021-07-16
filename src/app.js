import express, { json } from "express";
import morgan from "morgan";

// importing routes
import projectRoutes from "./routes/projects";
import taskRoutes from "./routes/tasks";
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
import cobranzaMotivoRoutes from './routes/cobranzaMotivo'
import ramoCompaniaRoutes from './routes/ramoCompania'

const compression = require("compression");

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
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);
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

app.use('/api/tipoPolizas', tipoPolizaRoutes);
app.use('/api/polizas', polizaRoutes);
app.use('/api/polizas/automotor', polizaDetalleRoutes);
app.use('/api/polizas/generals', polizaDetalleGeneralRoutes);
app.use('/api/polizas/personas', polizaDetallePersonaRoutes);
app.use('/api/polizas/dependientes', polizaDetallePersonaTitularRoutes);
app.use('/api/polizas/adicionales', polizaDetalleAdicionalRoutes);

app.use('/api/archivos', archivoRoutes);
app.use('/api/tipomemos', tipomemoRoutes);
app.use('/api/contratantes', contratanteRoutes);
app.use('/api/vendedors', vendedorRoutes);
app.use('/api/carpetas', carpetaRoutes);

app.use('/api/memos', memoRoutes);

app.use('/api/pago',pagoRoutes);

app.use('/api/siniestro',siniestroRoutes);
app.use('/api/cobranzaMotivo',cobranzaMotivoRoutes);

app.use('/api/requisito',requisitoRoutes);


app.use('/api/ramoCompania',ramoCompaniaRoutes);
export default app;
