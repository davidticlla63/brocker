import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const CompaniaSeguro = sequelize.define('CompaniaSeguro', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.STRING,
        primaryKey: true
    },
    nombre: Sequelize.STRING,
    descripcion: Sequelize.STRING,
    nit:Sequelize.STRING,
    representanteLegal:{
        type:Sequelize.STRING,
        field: 'representante_legal'
    },
    direccion:Sequelize.STRING,
    telefono1:Sequelize.STRING,
    telefono2:Sequelize.STRING,
    web:Sequelize.STRING,
    ciaSpvs:{
        type:Sequelize.STRING,
        field: 'cia_spvs'
    },
    nrocuenta:Sequelize.STRING,
    banco1:Sequelize.STRING,
    tipomoneda1:Sequelize.STRING,
    nrocuenta2:Sequelize.STRING,
    banco2:Sequelize.STRING,
    tipomoneda2:Sequelize.STRING,

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
    tableName: 'compania_seguro'
});

/* CompaniaSeguro.hasMany(Permiso, { foreignKey: 'accionid', sourceKey: 'id' });
Permiso.belongsTo(CompaniaSeguro, { foreignKey: 'accionid', sourceKey: 'id' }); */

export default CompaniaSeguro;