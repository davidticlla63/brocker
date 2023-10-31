import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import Personal from "./Personal";

const Periodo = sequelize.define('Periodo', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.STRING,
        primaryKey: true
    },
    //nombre: Sequelize.STRING,
    fechainicio: Sequelize.DATE(6),
    fechafin: Sequelize.DATE(6),
    mes:Sequelize.INTEGER,
    gestion:Sequelize.INTEGER,
    sucursalid:Sequelize.STRING,
    empresaid:Sequelize.STRING,
    usuarioregistro:Sequelize.STRING,
    usuariomodificacion:Sequelize.STRING,
    usuariomodificacion:Sequelize.STRING,
   
    fecharegistro: Sequelize.DATE(6),
    fechamodificacion: Sequelize.DATE(6),
     estado: {
        type: Sequelize.STRING,
        allowNull: false,
    }


}, {
    timestamps: false,
    tableName: 'periodo'
});

/* Periodo.hasMany(Personal, { foreignKey: 'Periodoid', sourceKey: 'id' });
Personal.belongsTo(Periodo, { foreignKey: 'Periodoid', sourceKey: 'id' }); */
/* 
Accion.hasMany(PaginaAccion, { foreignKey: 'paginaid', sourceKey: 'id' });
PaginaAccion.belongsTo(Accion, { foreignKey: 'paginaid', sourceKey: 'id' }); */

export default Periodo;