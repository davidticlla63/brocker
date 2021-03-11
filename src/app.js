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


// initialization
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(json());

// routes
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/empresas', empresaRoutes);
app.use('/api/sucursals', sucursalRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/sucursalUsuarios', sucursalUsuarioRoutes);
app.use('/api/perfils', perfilRoutes);

export default app;