import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import SubRamo from "./SubRamo";

const Ramo = sequelize.define('Ramo', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.STRING,
        primaryKey: true
    },
    nombre: Sequelize.STRING,
    descripcion: Sequelize.STRING,
    spvs:{
        type:Sequelize.STRING//,
        //field:'ramo_spvs'
    },
    tiporamoid:Sequelize.STRING,//tipo de riesgo
    //companiaseguroid:Sequelize.STRING,//compañia
    //empresaid:Sequelize.STRING,
    usuarioregistro:Sequelize.STRING,
    usuariomodificacion:Sequelize.STRING,
    fecharegistro: Sequelize.DATE(6),
    fechamodificacion: Sequelize.DATE(6),
     estado: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    ramoid:Sequelize.STRING,


}, {
    timestamps: false,
    tableName: 'ramo'
});
Ramo.hasMany(SubRamo, { foreignKey: 'ramoid', sourceKey: 'id' });
SubRamo.belongsTo(Ramo, { foreignKey: 'ramoid', sourceKey: 'id' });

export default Ramo;