import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import Ramo from "./Ramo";

const Atributo = sequelize.define('Atributo', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.STRING,
        primaryKey: true
    },
    nombre: Sequelize.STRING,
    tipo:Sequelize.STRING,
    obligatorio:Sequelize.BOOLEAN,
    valordefecto:Sequelize.STRING,
    importante:Sequelize.BOOLEAN,
    //tipopoliza:Sequelize.STRING,
    usuarioregistro:Sequelize.STRING,
    usuariomodificacion:Sequelize.STRING,
    fecharegistro: Sequelize.DATE(6),
    fechamodificacion: Sequelize.DATE(6),
     estado: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    tipopolizaid:Sequelize.STRING,
    empresaid:Sequelize.STRING,


}, {
    timestamps: false,
    tableName: 'atributo'
});
/* TipoRamo.hasMany(Ramo, { foreignKey: 'tiporamoid', sourceKey: 'id' });
Ramo.belongsTo(TipoRamo, { foreignKey: 'tiporamoid', sourceKey: 'id' }); */

export default Atributo;