import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const PolizaDetallePersonaTitular = sequelize.define('PolizaDetallePersonaTitularTitular', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.STRING,
        primaryKey: true
    },
   
    nombre: Sequelize.STRING,
    parentezco: Sequelize.STRING,
    fechanacimiento: Sequelize.DATE,
    sexo: Sequelize.STRING,

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
    polizadetallepersonaid: Sequelize.STRING
}, {
    timestamps: false,
    //tableName: 'poliza_detalle'
    tableName:'poliza_detalle_persona_titular'
});
/* PolizaDetallePersonaTitular.hasMany(PaginaPolizaDetallePersonaTitular, { foreignKey: 'accionid', sourceKey: 'id' });
PaginaPolizaDetallePersonaTitular.belongsTo(PolizaDetallePersonaTitular, { foreignKey: 'accionid', sourceKey: 'id' }); */

export default PolizaDetallePersonaTitular;