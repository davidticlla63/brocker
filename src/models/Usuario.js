import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Usuario = sequelize.define('usuario', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.BIGINT,
        primaryKey: true
    },
    nombrecompleto:Sequelize.STRING,
    usuario:Sequelize.STRING,
    password:Sequelize.STRING,
    fecharegistro:Sequelize.DATE(6),
    fechamodificacion:Sequelize.DATE(6),
    estado:Sequelize.STRING,
    
}, {
    timestamps: false
});

export default Usuario;