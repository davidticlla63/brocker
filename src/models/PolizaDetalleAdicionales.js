import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const PolizaDetalleAdicional = sequelize.define('PolizaDetalleAdicional', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.STRING,
        primaryKey: true
    },
    valor:Sequelize.STRING,
    dato:Sequelize.STRING,
    
   // polizaid: Sequelize.STRING,   
   polizadetalleid: Sequelize.STRING,   
    usuarioregistro:Sequelize.STRING,
    usuariomodificacion:Sequelize.STRING,
    fecharegistro: Sequelize.DATE(6),
    fechamodificacion: Sequelize.DATE(6),
     estado: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    sucursalid:Sequelize.STRING,

}, {
    timestamps: false,
    tableName: 'poliza_detalle_adicional'
});
/* PolizaAdicional.hasMany(PaginaPolizaAdicional, { foreignKey: 'accionid', sourceKey: 'id' });
PaginaPolizaAdicional.belongsTo(PolizaAdicional, { foreignKey: 'accionid', sourceKey: 'id' }); */

export default PolizaDetalleAdicional;