import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const PolizaDetallePersona = sequelize.define('PolizaDetallePersona', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.STRING,
        primaryKey: true
    },
   
    nrocertificado: Sequelize.STRING,
    tipoasegurado: Sequelize.STRING,
   // titular: Sequelize.STRING,
    cobertura: Sequelize.BOOLEAN,
    fechanacimiento: Sequelize.DATE,
    sexo: Sequelize.STRING,
    ambitogeografico: Sequelize.STRING,
    sistemaatencion: Sequelize.STRING,

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
    tableName:'poliza_detalle_persona'
});
/* PolizaDetallePersona.hasMany(PaginaPolizaDetallePersona, { foreignKey: 'accionid', sourceKey: 'id' });
PaginaPolizaDetallePersona.belongsTo(PolizaDetallePersona, { foreignKey: 'accionid', sourceKey: 'id' }); */

export default PolizaDetallePersona;