import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Sucursal = sequelize.define('sucursal', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.BIGINT,
        primaryKey: true
    },
    nombre:Sequelize.STRING,
    descripcion:Sequelize.STRING,
    telefono:Sequelize.STRING,
    actividad:Sequelize.STRING,
    fecharegistro:Sequelize.DATE(6),
    fechamodificacion:Sequelize.DATE(6),
    estado:Sequelize.STRING,
    empresaid:Sequelize.BIGINT
    
}, {
    timestamps: false
});

export default Sucursal;