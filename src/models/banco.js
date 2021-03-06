import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import Poliza from "./Poliza";

const Banco = sequelize.define('Banco', {
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
    tableName: 'banco'
});
Banco.hasMany(Poliza, { foreignKey: 'bancoid', sourceKey: 'id' });
Poliza.belongsTo(Banco, { foreignKey: 'bancoid', sourceKey: 'id' });

export default Banco;