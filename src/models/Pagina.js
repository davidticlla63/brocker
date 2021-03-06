import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import Accion from "./Accion";
import PaginaAccion from "./PaginaAccion";
import Permiso from "./Permiso";
//  import PaginaAccion from "./PaginaAccion";

const Pagina = sequelize.define('Pagina', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.STRING,
        primaryKey: true,

    },
    nombre: Sequelize.STRING,
    descripcion: Sequelize.STRING,
    url: Sequelize.STRING,
    icon:Sequelize.STRING,
    badgestyleclass:Sequelize.STRING,
    badge:Sequelize.STRING,
    tipo: Sequelize.STRING,
    orden: Sequelize.INTEGER,
    paginaid: Sequelize.STRING,
    usuarioregistro: Sequelize.STRING,
    usuariomodificacion: Sequelize.STRING,
    fecharegistro: Sequelize.DATE(6),
    fechamodificacion: Sequelize.DATE(6),
    estado: {
        type: Sequelize.STRING,
        allowNull: false,
    }


}, {
    timestamps: false,
    tableName: 'pagina'
});

Pagina.hasMany(Pagina, { foreignKey: 'paginaid', sourceKey: 'id' });
Pagina.belongsTo(Pagina, { foreignKey: 'paginaid', sourceKey: 'id' });

/* Pagina.hasMany(Accion, { foreignKey: 'paginaid', sourceKey: 'id' });
Accion.belongsTo(Pagina, { foreignKey: 'paginaid', sourceKey: 'id' }); */

/* Pagina.hasMany(Permiso, { foreignKey: 'paginaid', sourceKey: 'id' });
Permiso.belongsTo(Pagina, { foreignKey: 'paginaid', sourceKey: 'id' }); */

Pagina.hasMany(PaginaAccion, { foreignKey: 'paginaid', sourceKey: 'id' });
PaginaAccion.belongsTo(Pagina, { foreignKey: 'paginaid', sourceKey: 'id' });


export default Pagina;