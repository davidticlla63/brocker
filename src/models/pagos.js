import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Pagos = sequelize.define('Pagos', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.STRING,
        primaryKey: true
    },
    tipo:Sequelize.STRING,
    montobs: Sequelize.DECIMAL,
    montousd: Sequelize.DECIMAL,
    comisionbs: Sequelize.DECIMAL,
    comisionusd: Sequelize.DECIMAL,
    numerofactura:Sequelize.STRING,
    usuarioregistro:Sequelize.STRING,
    usuariomodificacion:Sequelize.STRING,
    fecharegistro: Sequelize.DATE(6),
    fechamodificacion: Sequelize.DATE(6),
     estado: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    planpagoid:Sequelize.STRING,
    sucursalid:Sequelize.STRING

}, {
    timestamps: false,
    tableName: 'pagos'
});

export default Pagos;