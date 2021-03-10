import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import SucursalUsuario from "./SucursalUsuario";

const Usuario = sequelize.define('Usuario', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.BIGINT,
        primaryKey: true
    },
    nombrecompleto: Sequelize.STRING,
    nick: Sequelize.STRING,
    password: Sequelize.STRING,
    usuarioregistro:Sequelize.STRING,
    usuariomodificacion:Sequelize.STRING,
    fecharegistro: Sequelize.DATE(6),
    fechamodificacion: Sequelize.DATE(6),
    estado: Sequelize.STRING,

}, {
    timestamps: false,
    tableName: 'usuario'
});
Usuario.hasMany(SucursalUsuario, { foreignKey: 'usuarioid', sourceKey: 'id' });
SucursalUsuario.belongsTo(Usuario, { foreignKey: 'usuarioid', sourceKey: 'id' });
export default Usuario;