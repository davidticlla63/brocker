import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const TipoCambio = sequelize.define('TipoCambio', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.STRING,
        primaryKey: true
    },
    fecha: Sequelize.DATE,
    tipocambioventa: Sequelize.DECIMAL,
    tipocambiocompra: Sequelize.DECIMAL,
    usuarioregistro:Sequelize.STRING,
    usuariomodificacion:Sequelize.STRING,
    fecharegistro: Sequelize.DATE(6),
    fechamodificacion: Sequelize.DATE(6),
     estado: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    empresaid:Sequelize.STRING


}, {
    timestamps: false,
    tableName: 'tipo_cambio'
});
/* TipoCambio.hasMany(PaginaTipoCambio, { foreignKey: 'accionid', sourceKey: 'id' });
PaginaTipoCambio.belongsTo(TipoCambio, { foreignKey: 'accionid', sourceKey: 'id' }); */

export default TipoCambio;