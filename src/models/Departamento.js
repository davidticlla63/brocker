import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import Sucursal from "./Sucursal";

const Departamento = sequelize.define('Departamento', {
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
    tableName: 'departamento'
});

Departamento.hasMany(Sucursal, { foreignKey: 'departamentoid', sourceKey: 'id' });
Sucursal.belongsTo(Departamento, { foreignKey: 'departamentoid', sourceKey: 'id' });

export default Departamento;