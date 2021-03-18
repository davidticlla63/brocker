import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import Personal from "./Personal";

const AreaTrabajo = sequelize.define('AreaTrabajo', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.STRING,
        primaryKey: true
    },
    nombre: Sequelize.STRING,
    descripcion: Sequelize.STRING,
    empresaid:Sequelize.STRING,
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
    tableName: 'area_trabajo'
});

AreaTrabajo.hasMany(Personal, { foreignKey: 'areatrabajoid', sourceKey: 'id' });
Personal.belongsTo(AreaTrabajo, { foreignKey: 'areatrabajoid', sourceKey: 'id' });
/* 
Accion.hasMany(PaginaAccion, { foreignKey: 'paginaid', sourceKey: 'id' });
PaginaAccion.belongsTo(Accion, { foreignKey: 'paginaid', sourceKey: 'id' }); */

export default AreaTrabajo;