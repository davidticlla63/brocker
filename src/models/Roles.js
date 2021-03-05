import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Roles = sequelize.define('roles', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.BIGINT,
        primaryKey: true
    },
    nombre:Sequelize.STRING,
    descripcion:Sequelize.STRING,
    fecharegistro:Sequelize.DATE(6),
    fechamodificacion:Sequelize.DATE(6),
    estado:Sequelize.STRING,
    
}, {
    timestamps: false
});

export default Roles;