import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const PolizaDetalles = sequelize.define('PolizaDetalles', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.STRING,
        primaryKey: true
    },
    numerodetalle:Sequelize.STRING,
    valor: Sequelize.STRING,
    usuarioregistro:Sequelize.STRING,
    usuariomodificacion:Sequelize.STRING,
    fecharegistro: Sequelize.DATE(6),
    fechamodificacion: Sequelize.DATE(6),
     estado: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    polizaid:Sequelize.STRING,
    atributoid:Sequelize.STRING,
}, {
    timestamps: false,
    tableName: 'poliza_detalles'
});


export default PolizaDetalles;