import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import Ramo from "./Ramo";

const TipoRamo = sequelize.define('TipoRamo', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.STRING,
        primaryKey: true
    },
    nombre: Sequelize.STRING,
    descripcion: Sequelize.STRING,
    //empresaid:Sequelize.STRING,
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
    tableName: 'tipo_ramo'
});
TipoRamo.hasMany(Ramo, { foreignKey: 'tiporamoid', sourceKey: 'id' });
Ramo.belongsTo(TipoRamo, { foreignKey: 'tiporamoid', sourceKey: 'id' });

export default TipoRamo;