import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import Sucursal from "./Sucursal"; 

import Perfil from "./Perfil";
import AreaTrabajo from "./AreaTrabajo";
import Usuario from "./Usuario";
import Departamento from "./Departamento";

const Empresa = sequelize.define('Empresa', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.STRING,
        primaryKey: true
        

    },
    razonsocial: {
        type: Sequelize.STRING,
        allowNull: false,
        length: 3000
    },
    descripcion: {
        type: Sequelize.STRING,
        length: 3000
    },
    telefono: Sequelize.STRING,
    nit: Sequelize.STRING,
    representante: Sequelize.STRING,
    //logo:Sequelize.STRING,
     logo:{
        type: Sequelize.BLOB,
       /*   get() {
            if  (this.getDataValue('logo'))

          
            return this.getDataValue('logo').toString('utf8'); // or whatever encoding is right
            else
            return null;
          },  */
    }, 
    usuarioregistro: Sequelize.STRING,
    usuariomodificacion: Sequelize.STRING,
    fecharegistro: Sequelize.DATE(6),
    fechamodificacion: Sequelize.DATE(6),
    estado: Sequelize.STRING,

}, {
    timestamps: false,
    tableName: 'empresa'
});


Empresa.hasMany(Sucursal, { foreignKey: 'empresaid', sourceKey: 'id' });
Sucursal.belongsTo(Empresa, { foreignKey: 'empresaid', sourceKey: 'id' });

Empresa.hasMany(Perfil, { foreignKey: 'empresaid', sourceKey: 'id' });
Perfil.belongsTo(Empresa, { foreignKey: 'empresaid', sourceKey: 'id' });

Empresa.hasMany(AreaTrabajo, { foreignKey: 'empresaid', sourceKey: 'id' });
AreaTrabajo.belongsTo(Empresa, { foreignKey: 'empresaid', sourceKey: 'id' });

Empresa.hasMany(Usuario, { foreignKey: 'empresaid', sourceKey: 'id' });
Usuario.belongsTo(Empresa, { foreignKey: 'empresaid', sourceKey: 'id' });

Empresa.hasMany(Departamento, { foreignKey: 'empresaid', sourceKey: 'id' });
Departamento.belongsTo(Empresa, { foreignKey: 'empresaid', sourceKey: 'id' });
export default Empresa;