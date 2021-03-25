import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import Personal from "./Personal";
import Usuario from "./Usuario";

const Asegurado = sequelize.define('Asegurado', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.STRING,
        primaryKey: true
    },
    tipoasegurado:{
        type:Sequelize.STRING,
        allowNull: false
    },
    apellidoparterno: Sequelize.STRING,
    apellidomaterno: Sequelize.STRING,
    nombres: Sequelize.STRING,
    nombrecompleto: Sequelize.STRING,
    ci: Sequelize.STRING,
    nit: Sequelize.STRING,
    telefonoasegurado: Sequelize.STRING,
    telefonodomicilio: Sequelize.STRING,
    telefonotrabajo: Sequelize.STRING,
    correo: Sequelize.STRING,
    fotografia:Sequelize.BLOB,
    direccionasegurado:Sequelize.STRING,

    //personalcobranza:Sequelize.STRING,
    apellidoparternocobranza: Sequelize.STRING,
    apellidomaternocobranza: Sequelize.STRING,
    nombrescobranza: Sequelize.STRING,
    nombrecompletocobranza: Sequelize.STRING,
    telefonocobranza:Sequelize.STRING,
    direccioncobranza:Sequelize.STRING,

    //nombrerepresentante:Sequelize.STRING,
    apellidoparternorepresentante: Sequelize.STRING,
    apellidomaternorepresentante: Sequelize.STRING,
    nombresrepresentante: Sequelize.STRING,
    nombrecompletorepresentante: Sequelize.STRING,
    direccionpresentante:Sequelize.STRING,
    emailpresentante:Sequelize.STRING,
    telefonopresentante:Sequelize.STRING,
    celularpresentante:Sequelize.STRING,

    sucursalid:Sequelize.STRING,
    ejecutivoid:Sequelize.STRING,
    carteraid:Sequelize.STRING,
    usuarioregistro:Sequelize.STRING,
    usuariomodificacion:Sequelize.STRING,
    usuariobaja:Sequelize.STRING,
    fecharegistro: Sequelize.DATE(6),
    fechamodificacion: Sequelize.DATE(6),
    fechabaja: Sequelize.DATE(6),
     estado: {
        type: Sequelize.STRING,
        allowNull: false,
    }


}, {
    timestamps: false,
    tableName: 'asegurado'
});
/* 
Asegurado.hasMany(Permiso, { foreignKey: 'accionId', sourceKey: 'id' });
Permiso.belongsTo(AreaTrabajo, { foreignKey: 'accionId', sourceKey: 'id' }); */
/* 
Accion.hasMany(PaginaAccion, { foreignKey: 'paginaid', sourceKey: 'id' });
PaginaAccion.belongsTo(Accion, { foreignKey: 'paginaid', sourceKey: 'id' }); */


/* Asegurado.hasMany(Personal, { foreignKey: 'personalid', sourceKey: 'id' });
Personal.belongsTo(Asegurado, { foreignKey: 'personalid', sourceKey: 'id' }); */

export default Asegurado;