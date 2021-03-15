import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import SucursalUsuario from "./SucursalUsuario";
import Perfil from "./Perfil";

const Sucursal = sequelize.define('sucursal', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.BIGINT,
        primaryKey: true
    },
    nombre:{
        type: Sequelize.STRING,
        allowNull: false,
        length:3000
    },
    descripcion:{
        type:Sequelize.STRING,
    length:3000
    },
   
    telefono:Sequelize.STRING,
    actividad:Sequelize.STRING,
    usuarioregistro:Sequelize.STRING,
    usuariomodificacion:Sequelize.STRING,
    fecharegistro:Sequelize.DATE(6),
    fechamodificacion:Sequelize.DATE(6),
    estado:Sequelize.STRING,
    empresaid:Sequelize.BIGINT,
    
}, {
    timestamps: false,
    tableName:'sucursal'
});

Sucursal.hasMany(SucursalUsuario, { foreignKey: 'sucursalid', sourceKey: 'id' });
SucursalUsuario.belongsTo(Sucursal, { foreignKey: 'sucursalid', sourceKey: 'id' });

Sucursal.hasMany(Perfil, { foreignKey: 'sucursalid', sourceKey: 'id' });
Perfil.belongsTo(Sucursal, { foreignKey: 'sucursalid', sourceKey: 'id' });
export default Sucursal;