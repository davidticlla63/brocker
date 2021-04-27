import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const PolizaDetalle = sequelize.define('PolizaDetalle', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.STRING,
        primaryKey: true
    },
    nropoliza: Sequelize.STRING,
    nrocertificado: Sequelize.STRING,    
    //detalle poliza
  /*   fechainiciovigencia:Sequelize.DATE,
    fechafinvigencia:Sequelize.DATE, */
    fechainclusion:Sequelize.DATE,
    prima:Sequelize.DECIMAL,
    porcentajeprima:Sequelize.DECIMAL,
    primaneta:Sequelize.DECIMAL,
    porcentajecomision:Sequelize.DECIMAL,
    detalle:Sequelize.STRING,

    usuarioregistro:Sequelize.STRING,
    usuariomodificacion:Sequelize.STRING,
    fecharegistro: Sequelize.DATE(6),
    fechamodificacion: Sequelize.DATE(6),
     estado: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    //sucursalid:Sequelize.STRING,
    polizaid:Sequelize.STRING
}, {
    timestamps: false,
    tableName: 'poliza_detalle'
});
/* PolizaDetalle.hasMany(PaginaPolizaDetalle, { foreignKey: 'accionid', sourceKey: 'id' });
PaginaPolizaDetalle.belongsTo(PolizaDetalle, { foreignKey: 'accionid', sourceKey: 'id' }); */

export default PolizaDetalle;