import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const PolizaDetalleGeneral = sequelize.define('PolizaDetalleGeneral', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.STRING,
        primaryKey: true
    },
    //titular:Sequelize.STRING,
    objetoasegurado:Sequelize.STRING,
    nrocertificado:Sequelize.STRING,
    tipopolizageneral: Sequelize.STRING,
    direccion: Sequelize.STRING,

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
    tableName:'poliza_detalle_general'
});
/* PolizaDetalleGeneral.hasMany(PaginaPolizaDetalleGeneral, { foreignKey: 'accionid', sourceKey: 'id' });
PaginaPolizaDetalleGeneral.belongsTo(PolizaDetalleGeneral, { foreignKey: 'accionid', sourceKey: 'id' }); */

export default PolizaDetalleGeneral;