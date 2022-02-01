import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const SiniestroSeguimiento = sequelize.define('SiniestroSeguimiento', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.STRING,
        primaryKey: true
    },
    //nombre: Sequelize.STRING,
    fecha: Sequelize.DATE(6),
    comentario: Sequelize.STRING,

    usuarioregistro: Sequelize.STRING,
    usuariomodificacion: Sequelize.STRING,
    fecharegistro: Sequelize.DATE(6),
    fechamodificacion: Sequelize.DATE(6),
    estado: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    siniestroid: Sequelize.STRING
}, {
    timestamps: false,
    tableName: 'siniestro_seguimiento'
});
/* Siniestro.hasMany(PaginaSiniestro, { foreignKey: 'accionid', sourceKey: 'id' });
PaginaSiniestro.belongsTo(Siniestro, { foreignKey: 'accionid', sourceKey: 'id' }); */

export default SiniestroSeguimiento;