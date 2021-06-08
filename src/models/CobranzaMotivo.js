import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const CobranzaMotivo = sequelize.define('CobranzaMotivo', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.STRING,
        primaryKey: true
    },
    descripcion: Sequelize.STRING,
    usuarioregistro:Sequelize.STRING,
    usuariomodificacion:Sequelize.STRING,
    fecharegistro: Sequelize.DATE(6),
    fechamodificacion: Sequelize.DATE(6),
     estado: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    planpagoid:Sequelize.STRING


}, {
    timestamps: false,
    tableName: 'cobranza_motivo'
});

export default CobranzaMotivo;