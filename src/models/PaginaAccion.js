import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import Permiso from "./permiso";

const PaginaAccion = sequelize.define('PaginaAccion', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.BIGINT,
        primaryKey: true
    },
    paginaid: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    accionid: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
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
    tableName: 'pagina_accion'
});


/* PaginaAccion.hasMany(Permiso, { foreignKey: 'paginaAccionId', sourceKey: 'id' });
Permiso.belongsTo(PaginaAccion, { foreignKey: 'paginaAccionId', sourceKey: 'id' }); */
export default PaginaAccion;