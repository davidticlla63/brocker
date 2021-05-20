import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const PlanPago = sequelize.define('PlanPago', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.STRING,
        primaryKey: true
    },
    /*   fechapago:Sequelize.DATE,
      montobs:Sequelize.DECIMAL,
      montousd:Sequelize.DECIMAL,
      porcentaje:Sequelize.DECIMAL,
      comisionbs:Sequelize.DECIMAL,
      comisionusd:Sequelize.DECIMAL,
      primaneta:Sequelize.DECIMAL, */

    nro: Sequelize.DECIMAL,
    fechapago: Sequelize.DATE,
    montocuota: Sequelize.DECIMAL,
    primaneta: Sequelize.DECIMAL,
    comision: Sequelize.DECIMAL,
    memoid: Sequelize.STRING,
    
    usuarioregistro: Sequelize.STRING,
    usuariomodificacion: Sequelize.STRING,
    fecharegistro: Sequelize.DATE(6),
    fechamodificacion: Sequelize.DATE(6),
    estado: {
        type: Sequelize.STRING,
        allowNull: false,
    }


}, {
    timestamps: false,
    tableName: 'plan_pago'
});
/* PlanPago.hasMany(PaginaPlanPago, { foreignKey: 'accionid', sourceKey: 'id' });
PaginaPlanPago.belongsTo(PlanPago, { foreignKey: 'accionid', sourceKey: 'id' }); */

export default PlanPago;