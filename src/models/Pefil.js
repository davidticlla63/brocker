import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import Permiso from "./permiso";

const Pefil = sequelize.define('Pefil', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.BIGINT,
        primaryKey: true
    },
    nombre: Sequelize.STRING,
    descripcion: Sequelize.STRING,
    sucursalid:Sequelize.BIGINT,
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
    tableName: 'perfil'
});

Pefil.hasMany(Permiso, { foreignKey: 'perfilid', sourceKey: 'id' });
Permiso.belongsTo(Pefil, { foreignKey: 'perfilid', sourceKey: 'id' });

export default Pefil;