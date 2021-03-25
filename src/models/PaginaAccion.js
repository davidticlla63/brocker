import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import Permiso from "./permiso";

const PaginaAccion = sequelize.define('PaginaAccion', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.STRING,
        primaryKey: true
    },
    paginaid: {
        type: Sequelize.STRING,
        allowNull: false
    },
    accionid: {
        type: Sequelize.STRING,
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


 PaginaAccion.hasMany(Permiso, { foreignKey: 'paginaaccionid', sourceKey: 'id' });
Permiso.belongsTo(PaginaAccion, { foreignKey: 'paginaaccionid', sourceKey: 'id' }); 
export default PaginaAccion;