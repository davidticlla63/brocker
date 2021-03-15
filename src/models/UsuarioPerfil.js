import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const UsuarioPerfil = sequelize.define('UsuarioPerfil', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.BIGINT,
        primaryKey: true
    },
    usuarioid: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    perfilid: {
        type: Sequelize.BIGINT,
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

export default UsuarioPerfil;