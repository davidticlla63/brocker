import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const SubRamo = sequelize.define('SubRamo', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.STRING,
        primaryKey: true
    },
    nombre: Sequelize.STRING,
    descripcion: Sequelize.STRING,
    ramoSpvs:{
        type:Sequelize.STRING,
        field:'ramo_spvs'
    },
    ramoid:Sequelize.STRING,
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
    tableName: 'sub_ramo'
});
/* SubRamo.hasMany(PaginaSubRamo, { foreignKey: 'accionid', sourceKey: 'id' });
PaginaSubRamo.belongsTo(SubRamo, { foreignKey: 'accionid', sourceKey: 'id' }); */

export default SubRamo;