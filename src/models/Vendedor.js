import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Vendedor = sequelize.define('Vendedor', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.STRING,
        primaryKey: true
    },
    nombre: Sequelize.STRING,
    contratranteid: Sequelize.STRING,
    sucursalid: Sequelize.STRING,
    departamentoid: Sequelize.STRING,
    comisionvendedor: Sequelize.DECIMAL,
    comisionvendedor2: Sequelize.DECIMAL,
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
    tableName: 'vendedor'
});
/* Vendedor.hasMany(PaginaVendedor, { foreignKey: 'vendedorid', sourceKey: 'id' });
PaginaVendedor.belongsTo(Vendedor, { foreignKey: 'vendedorid', sourceKey: 'id' }); */

export default Vendedor;