import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import Ramo from "./Ramo";

const PolizaDetalles = sequelize.define('PolizaDetalles', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.STRING,
        primaryKey: true
    },
    numerodetalle:Sequelize.BIGINT,
    valor: Sequelize.STRING,
    usuarioregistro:Sequelize.STRING,
    usuariomodificacion:Sequelize.STRING,
    fecharegistro: Sequelize.DATE(6),
    fechamodificacion: Sequelize.DATE(6),
     estado: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    atributoid:Sequelize.STRING,
    polizaid:Sequelize.STRING,
}, {
    timestamps: false,
    tableName: 'poliza_detalles'
});
/* TipoRamo.hasMany(Ramo, { foreignKey: 'tiporamoid', sourceKey: 'id' });
Ramo.belongsTo(TipoRamo, { foreignKey: 'tiporamoid', sourceKey: 'id' }); */

export default PolizaDetalles;