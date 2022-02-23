import Sequelize from "sequelize";
import { sequelize } from "../database/database";
const { v4: uuidv4 } = require('uuid');

const UsuarioPerfil = sequelize.define('UsuarioPerfil', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.STRING,
        primaryKey: true
    },
    usuarioid: {
        type: Sequelize.STRING,
        allowNull: false
    },
    perfilid: {
        type: Sequelize.STRING,
        allowNull: false
    },
    usuarioregistro: Sequelize.STRING,
    usuariomodificacion: Sequelize.STRING,
    fecharegistro: Sequelize.DATE(6),
    fechamodificacion: Sequelize.DATE(6),
    estado: {
        type: Sequelize.STRING,
        allowNull: false,
    }


}, {
    timestamps: false,
    tableName: 'usuario_perfil'
});

UsuarioPerfil.beforeCreate(usuarioPerfil => usuarioPerfil.id = uuidv4());

export default UsuarioPerfil;