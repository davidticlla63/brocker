import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const RamoCompania = sequelize.define('RamoCompania', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.STRING,
        primaryKey: true
    },
    ramoid:Sequelize.STRING,
    companiaseguroid:Sequelize.STRING,
    porcentajecomision:Sequelize.DECIMAL,
    porcentajecomisioncredito:Sequelize.DECIMAL,
    porcentajeprima:Sequelize.DECIMAL,
    porcentajeprimacredito:Sequelize.DECIMAL,
    nota:Sequelize.STRING,
    notacredito:Sequelize.STRING,
    usuarioregistro:Sequelize.STRING,
    usuariomodificacion:Sequelize.STRING,
    fecharegistro: Sequelize.DATE(6),
    fechamodificacion: Sequelize.DATE(6),
     estado: {
        type: Sequelize.STRING,
        allowNull: false,
    }


}, {
    timestamps: false,
    tableName: 'ramo_compania'
});

export default RamoCompania;