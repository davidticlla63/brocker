import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import Permiso from "./Permiso";

const Accion = sequelize.define('Accion', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.STRING,
        primaryKey: true
    },
    nombre: Sequelize.STRING,
    descripcion: Sequelize.STRING,
    paginaid:Sequelize.STRING,
    usuarioregistro:Sequelize.STRING,
    usuariomodificacion:Sequelize.STRING,

    fecharegistro: Sequelize.DATE(6),
    fechamodificacion: Sequelize.DATE(6),
     estado: {
        type: Sequelize.STRING,
        allowNull: false,
    }


}, {
    timestamps: false,
    tableName: 'accion'
});

Accion.hasMany(Permiso, { foreignKey: 'accionid', sourceKey: 'id' });
Permiso.belongsTo(Accion, { foreignKey: 'accionid', sourceKey: 'id' });
/* 
Accion.hasMany(PaginaAccion, { foreignKey: 'paginaid', sourceKey: 'id' });
PaginaAccion.belongsTo(Accion, { foreignKey: 'paginaid', sourceKey: 'id' }); */

export default Accion;