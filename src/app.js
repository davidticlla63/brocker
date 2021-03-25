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

const bodyParser = require("body-parser");
var jsonParser       = bodyParser.json({limit:1024*1024*20, type:'application/json'});
  var urlencodedParser = bodyParser.urlencoded({ extended:true,limit:1024*1024*20,type:'application/x-www-form-urlencoded' })

/*   var moment = require('moment'); // require
moment().format();  */

/* console.log(moment().format('YYYY-MM-DD h:mm:ss a')); */
//console.log(moment().format());
// initialization
const app = express();

// middlewares

app.use(jsonParser);
app.use(urlencodedParser);

app.use(morgan('dev'));
app.use(json());

/* const bodyParser = require('body-parser')
const multer = require('multer');
app.use(bodyParser.urlencoded({ extended: true })) */

//app.use(limit(100000000));

// routes
//seguridad
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/empresas', empresaRoutes);
app.use('/api/sucursals', sucursalRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/sucursalUsuarios', sucursalUsuarioRoutes);
app.use('/api/perfils', perfilRoutes);
app.use('/api/paginas', paginaRoutes);
app.use('/api/permisos', permisoRoutes);
//sistema
app.use('/api/areaTrabajos', areaTrabajoRoutes);
app.use('/api/personals', personalRoutes);
app.use('/api/departamentos', departamentoRoutes);
app.use('/api/accions', accionRoutes);
export default app;