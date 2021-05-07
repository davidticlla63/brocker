import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Plan = sequelize.define('Plan', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.STRING,
        primaryKey: true
    },
    nombre: Sequelize.STRING,
    descripcion: Sequelize.STRING,
    ///companiasegurosubramoid:Sequelize.STRING,
    companiaseguroid:Sequelize.STRING,
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
    tableName: 'plan'
});
/* Plan.hasMany(PaginaPlan, { foreignKey: 'accionid', sourceKey: 'id' });
PaginaPlan.belongsTo(Plan, { foreignKey: 'accionid', sourceKey: 'id' }); */

export default Plan;