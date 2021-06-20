import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Requesito = sequelize.define('Requesito', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.STRING,
        primaryKey: true
    },
    nombre: Sequelize.STRING,
    descripcion: Sequelize.STRING,
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
    tableName: 'requisito'
});
/* Requesito.hasMany(PaginaRequesito, { foreignKey: 'accionid', sourceKey: 'id' });
PaginaRequesito.belongsTo(Requesito, { foreignKey: 'accionid', sourceKey: 'id' }); */

export default Requesito;