import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import Sucursal from "./Sucursal";

const Empresa = sequelize.define('empresa', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.BIGINT,
        primaryKey: true    
    },
    razonsocial:Sequelize.STRING,
    descripcion:Sequelize.STRING,
    telefono:Sequelize.STRING,
    nit:Sequelize.STRING,
    representante:Sequelize.STRING,
    logo:Sequelize.BLOB,
    fecharegistro:Sequelize.DATE(6),
    fechamodificacion:Sequelize.DATE(6),
    estado:Sequelize.STRING,
    
}, {
    timestamps: false
});


Empresa.hasMany(Sucursal, { foreignKey: 'empresaid', sourceKey: 'id' });
Sucursal.belongsTo(Empresa, { foreignKey: 'empresaid', sourceKey: 'id' });
export default Empresa;