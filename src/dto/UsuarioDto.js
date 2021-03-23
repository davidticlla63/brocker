import Sequelize from "sequelize";
import { sequelize } from "../database/database";
const UsuarioDto = sequelize.define('UsuarioDto', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.STRING,
        primaryKey: true
    },
    //nombrecompleto: Sequelize.STRING,
    nick: Sequelize.STRING,
    password: Sequelize.STRING,
    usuarioregistro:Sequelize.STRING,
    usuariomodificacion:Sequelize.STRING,
    fecharegistro: Sequelize.DATE(6),
    fechamodificacion: Sequelize.DATE(6),
    estado: Sequelize.STRING,
    empresaid :Sequelize.STRING,
    personalid :Sequelize.STRING,
    sucursal:Sequelize.STRING,
    nombrecompleto:Sequelize.STRING,
    perfil:Sequelize.STRING

}, {
    timestamps: false
});
export default UsuarioDto;