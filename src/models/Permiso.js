import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Permiso = sequelize.define('Permiso', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true
    },
   
    /* accionid: Sequelize.STRING,
    paginaid: Sequelize.STRING, */
    paginaaccionid:Sequelize.STRING,
    perfilid: Sequelize.STRING,
    usuarioregistro:Sequelize.STRING,
    usuariomodificacion: Sequelize.STRING,
    fecharegistro: Sequelize.DATE(6),
    fechamodificacion: Sequelize.DATE(6),
    estado: {
        type: Sequelize.STRING,
        allowNull: false,
    }

}, {
    timestamps: false,
    tableName: 'permiso'
});



export default Permiso;

