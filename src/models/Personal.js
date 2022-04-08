import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import Asegurado from "./Asegurado";
import Usuario from "./Usuario";

const Personal = sequelize.define('Personal', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.STRING,
        primaryKey: true
    },
    nombrecompleto: Sequelize.STRING,
    sexo: Sequelize.STRING,
    fechanacimiento: Sequelize.DATE,
    ci: Sequelize.STRING,
    telefono1: Sequelize.STRING,
    telefono2: Sequelize.STRING,
    correo1: Sequelize.STRING,
    correo2: Sequelize.STRING,
    fotoperfil:Sequelize.BLOB,
    sucursalid:Sequelize.STRING,
    areatrabajoid:Sequelize.STRING,
    usuarioregistro:Sequelize.STRING,
    usuariomodificacion:Sequelize.STRING,
    tipocartera:Sequelize.STRING,

    fecharegistro: Sequelize.DATE(6),
    fechamodificacion: Sequelize.DATE(6),
     estado: {
        type: Sequelize.STRING,
        allowNull: false,
    }


}, {
    timestamps: false,
    tableName: 'personal'
});
/* 
Personal.hasMany(Permiso, { foreignKey: 'accionId', sourceKey: 'id' });
Permiso.belongsTo(AreaTrabajo, { foreignKey: 'accionId', sourceKey: 'id' }); */
/* 
Accion.hasMany(PaginaAccion, { foreignKey: 'paginaid', sourceKey: 'id' });
PaginaAccion.belongsTo(Accion, { foreignKey: 'paginaid', sourceKey: 'id' }); */


Personal.hasMany(Usuario, { foreignKey: 'personalid', sourceKey: 'id' });
Usuario.belongsTo(Personal, { foreignKey: 'personalid', sourceKey: 'id' });

Personal.hasMany(Asegurado, { foreignKey: 'ejecutivoid', sourceKey: 'id' });
Asegurado.belongsTo(Personal, { foreignKey: 'ejecutivoid', sourceKey: 'id' });

Personal.hasMany(Asegurado, { foreignKey: 'carteraid', sourceKey: 'id' });
Asegurado.belongsTo(Personal, { foreignKey: 'carteraid', sourceKey: 'id' });


export default Personal;