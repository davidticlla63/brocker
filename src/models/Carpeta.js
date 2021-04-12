import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import Archivo from "./Archivo";

const Carpeta = sequelize.define('Carpeta', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.STRING,
        primaryKey: true
    },
    nombre: Sequelize.STRING,
    descripcion: Sequelize.STRING,
    empresaid:Sequelize.STRING,
    carpetaid: Sequelize.STRING,
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
    tableName: 'carpeta'
});
Carpeta.hasMany(Archivo, { foreignKey: 'carpetaid', sourceKey: 'id' });
Archivo.belongsTo(Carpeta, { foreignKey: 'carpetaid', sourceKey: 'id' });

export default Carpeta;