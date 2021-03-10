import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Permiso = sequelize.define('Permiso', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.BIGINT,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false,
        length: 3000
    },
    descripcion: {
        type: Sequelize.STRING,
        length: 3000
    },

    perfilId: Sequelize.INTEGER,
    paginaId: Sequelize.INTEGER,
    accionId: Sequelize.INTEGER,
    accionRegistro: Sequelize.STRING,
    usuarioModificacion: Sequelize.STRING,
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

