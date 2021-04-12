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
import accionRoutes  from "./routes/accion"
import asegusadoRoutes from './routes/asegurado'
import companiaRoutes from './routes/companiaSeguro'
import tiporamoRoutes from './routes/tipoRamo'
import ramoRoutes from './routes/ramo'
import bancoRoutes from './routes/banco'
import subramoRoutes from './routes/subramo'
import ramoCompaniaRoutes from './routes/ramoCompania'
import tipoPolizaRoutes from './routes/tipoPoliza'
import polizaRoutes from './routes/poliza'
import archivoRoutes from './routes/archivo'
import tipomemoRoutes from './routes/tipomemo'
import contratanteRoutes from './routes/contratante'
import vendedorRoutes from './routes/vendedor'
import carpetaRoutes from './routes/carpeta'

const bodyParser = require("body-parser");
var jsonParser       = bodyParser.json({limit:1024*1024*20, type:'application/json'});
  var urlencodedParser = bodyParser.urlencoded({ extended:true,limit:1024*1024*20,type:'application/x-www-form-urlencoded' })


const app = express();



// middlewares

app.use(jsonParser);
app.use(urlencodedParser);

app.use(morgan('dev'));
app.use(json());

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
app.use('/api/ramoCompanias', ramoCompaniaRoutes);

app.use('/api/tipoPolizas', tipoPolizaRoutes);
app.use('/api/polizas',polizaRoutes);
app.use('/api/archivos',archivoRoutes);
app.use('/api/tipomemos',tipomemoRoutes);
app.use('/api/contratantes',contratanteRoutes);
app.use('/api/vendedors',vendedorRoutes);
app.use('/api/carpetas',carpetaRoutes);

export default app;
