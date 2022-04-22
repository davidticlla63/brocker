import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const ParamProduccion = sequelize.define('ParamProduccion', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.STRING,
        primaryKey: true
    },
    diaproduccion:Sequelize.INTEGER,
    sucursalid:Sequelize.STRING,
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
    tableName: 'param_produccion'
});

/* 
Accion.hasMany(PaginaAccion, { foreignKey: 'paginaid', sourceKey: 'id' });
PaginaAccion.belongsTo(Accion, { foreignKey: 'paginaid', sourceKey: 'id' }); */


/* ParamProduccion.hasMany(Personal, { foreignKey: 'personalid', sourceKey: 'id' });
Personal.belongsTo(ParamProduccion, { foreignKey: 'personalid', sourceKey: 'id' }); */

export default ParamProduccion;