import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import Permiso from "./Permiso";
import UsuarioPerfil from "./UsuarioPerfil";

const Perfil = sequelize.define('Perfil', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.STRING,
        primaryKey: true
    },
    nombre: Sequelize.STRING,
    descripcion: Sequelize.STRING,
    /* sucursalid:Sequelize.BIGINT, */
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
    tableName: 'perfil'
});

Perfil.hasMany(Permiso, { foreignKey: 'perfilid', sourceKey: 'id' });
Permiso.belongsTo(Perfil, { foreignKey: 'perfilid', sourceKey: 'id' });


Perfil.hasMany(UsuarioPerfil, { foreignKey: 'perfilid', sourceKey: 'id' });
UsuarioPerfil.belongsTo(Perfil, { foreignKey: 'perfilid', sourceKey: 'id' });

export default Perfil;