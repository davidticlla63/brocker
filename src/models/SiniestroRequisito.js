import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const SiniestroRequisito = sequelize.define('SiniestroRequisito', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.STRING,
        primaryKey: true
    },
    usuarioregistro: Sequelize.STRING,
    usuariomodificacion: Sequelize.STRING,
    fecharegistro: Sequelize.DATE(6),
    fechamodificacion: Sequelize.DATE(6),
    estado: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    siniestroid: Sequelize.STRING,
    requisitoid: Sequelize.STRING


}, {
    timestamps: false,
    tableName: 'siniestro_requisito'
});
/* Siniestro.hasMany(PaginaSiniestro, { foreignKey: 'accionid', sourceKey: 'id' });
PaginaSiniestro.belongsTo(Siniestro, { foreignKey: 'accionid', sourceKey: 'id' }); */

export default SiniestroRequisito;