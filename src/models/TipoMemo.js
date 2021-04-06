import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const TipoMemo = sequelize.define('TipoMemo', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.STRING,
        primaryKey: true
    },
    nombre: Sequelize.STRING,
    descripcion: Sequelize.STRING,
    usuarioregistro:Sequelize.STRING,
    usuariomodificacion:Sequelize.STRING,
    empresaid:Sequelize.STRING,
    fecharegistro: Sequelize.DATE(6),
    fechamodificacion: Sequelize.DATE(6),
     estado: {
        type: Sequelize.STRING,
        allowNull: false,
    }


}, {
    timestamps: false,
    tableName: 'tipo_memo'
});
/* TipoMemo.hasMany(PaginaTipoMemo, { foreignKey: 'accionid', sourceKey: 'id' });
PaginaTipoMemo.belongsTo(TipoMemo, { foreignKey: 'accionid', sourceKey: 'id' }); */

export default TipoMemo;