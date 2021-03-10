import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import Permiso from "./permiso";

const Accion = sequelize.define('Accion', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.BIGINT,
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
    }


}, {
    timestamps: false,
    tableName: 'accion'
});

Accion.hasMany(Permiso, { foreignKey: 'accionid', sourceKey: 'id' });
Permiso.belongsTo(Accion, { foreignKey: 'accionid', sourceKey: 'id' });

export default Accion;