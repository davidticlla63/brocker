import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Archivo = sequelize.define('Archivo', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.STRING,
        primaryKey: true
    },
    nombre: Sequelize.STRING,
    descripcion: Sequelize.STRING,
    extension: Sequelize.STRING,
    archivo:Sequelize.BLOB,
    tipo: Sequelize.STRING,
    codigo: Sequelize.STRING,
    aseguradoid: Sequelize.STRING,
    sucursalid:Sequelize.STRING,
    carpetaid:Sequelize.STRING,
    usuarioregistro:Sequelize.STRING,
    usuariomodificacion:Sequelize.STRING,
    fecharegistro: Sequelize.DATE(6),
    fechamodificacion: Sequelize.DATE(6),
     estado: {
        type: Sequelize.STRING,
        allowNull: false,
    }


}, {
    timestamps: false,
    tableName: 'archivo'
});

/* Archivo.hasMany(Permiso, { foreignKey: 'perfilid', sourceKey: 'id' });
Permiso.belongsTo(Archivo, { foreignKey: 'perfilid', sourceKey: 'id' });


Archivo.hasMany(UsuarioArchivo, { foreignKey: 'perfilid', sourceKey: 'id' });
UsuarioArchivo.belongsTo(Archivo, { foreignKey: 'perfilid', sourceKey: 'id' }); */

export default Archivo;