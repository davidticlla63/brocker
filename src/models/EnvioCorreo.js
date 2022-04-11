import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const CobranzaMotivo = sequelize.define('CobranzaMotivo', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.STRING,
        primaryKey: true
    },
    nro :Sequelize.BIGINT,
    descripcion: Sequelize.STRING,
    usuarioregistro:Sequelize.STRING,
    usuariomodificacion:Sequelize.STRING,
    fecharegistro: Sequelize.DATE(6),
    fechamodificacion: Sequelize.DATE(6),
     estado: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    polizaid:Sequelize.STRING


}, {
    timestamps: false,
    tableName: 'envio_correo'
});

export default CobranzaMotivo;