import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const PolizaDetalle = sequelize.define('PolizaDetalle', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.STRING,
        primaryKey: true
    },
    /*     nropoliza: Sequelize.STRING,
        nrocertificado: Sequelize.STRING,    
      
        fechainclusion:Sequelize.DATE,
        prima:Sequelize.DECIMAL,
        porcentajeprima:Sequelize.DECIMAL,
        primaneta:Sequelize.DECIMAL,
        porcentajecomision:Sequelize.DECIMAL,
        detalle:Sequelize.STRING, */

    titular: Sequelize.STRING,
    nrocertificado: Sequelize.STRING,
    placa: Sequelize.STRING,
    tipovehiculo: Sequelize.STRING,
    marcavehiculo: Sequelize.STRING,
    colorvehiculo: Sequelize.STRING,
    aniovehiculo: Sequelize.STRING,

    primaindividual: Sequelize.DECIMAL,
    primanetaindividualbs: Sequelize.DECIMAL,
    primanetaindividualusd: Sequelize.DECIMAL,

    usuarioregistro: Sequelize.STRING,
    usuariomodificacion: Sequelize.STRING,
    fecharegistro: Sequelize.DATE(6),
    fechamodificacion: Sequelize.DATE(6),
    estado: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    //sucursalid:Sequelize.STRING,
    polizaid: Sequelize.STRING
}, {
    timestamps: false,
    //tableName: 'poliza_detalle'
    tableName: 'poliza_detalle_automotor'
});
/* PolizaDetalle.hasMany(PaginaPolizaDetalle, { foreignKey: 'accionid', sourceKey: 'id' });
PaginaPolizaDetalle.belongsTo(PolizaDetalle, { foreignKey: 'accionid', sourceKey: 'id' }); */

export default PolizaDetalle;