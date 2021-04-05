import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import Poliza from "./Poliza";

const TipoPoliza = sequelize.define('TipoPoliza', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.STRING,
        primaryKey: true
    },
    nombre: Sequelize.STRING,
    descripcion: Sequelize.STRING,
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
    tableName: 'tipo_poliza'
});
TipoPoliza.hasMany(Poliza, { foreignKey: 'companiaseguroid', sourceKey: 'id' });
Poliza.belongsTo(TipoPoliza, { foreignKey: 'companiaseguroid', sourceKey: 'id' });

export default TipoPoliza;