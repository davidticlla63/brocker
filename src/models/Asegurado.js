import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import Poliza from "./Poliza";

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
    apellidopaterno: Sequelize.STRING,
    apellidomaterno: Sequelize.STRING,
    nombres: Sequelize.STRING,
    nombrecompleto: Sequelize.STRING,
    ci: Sequelize.STRING,
    nit: Sequelize.STRING,
    sexo: Sequelize.STRING,
    telefonoasegurado: Sequelize.STRING,
    telefonodomicilio: Sequelize.STRING,
    telefonotrabajo: Sequelize.STRING,
    correo: Sequelize.STRING,
    fotografia:Sequelize.BLOB,
    direccionasegurado:Sequelize.STRING,
    fechanacimiento:Sequelize.DATE,

    fechavencimientocarnet:Sequelize.DATE,
    fechavencimientobrevet:Sequelize.DATE,
    fechavencimientofundempresa:Sequelize.DATE,
    relacionasegurado:Sequelize.STRING,
    cargorepresentante:Sequelize.STRING,

    //personalcobranza:Sequelize.STRING,
    apellidopaternocobranza: Sequelize.STRING,
    apellidomaternocobranza: Sequelize.STRING,
    nombrescobranza: Sequelize.STRING,
    nombrecompletocobranza: Sequelize.STRING,
    telefonocobranza:Sequelize.STRING,
    direccioncobranza:Sequelize.STRING,

    //nombrerepresentante:Sequelize.STRING,
    apellidopaternorepresentante: Sequelize.STRING,
    apellidomaternorepresentante: Sequelize.STRING,
    nombresrepresentante: Sequelize.STRING,
    nombrecompletorepresentante: Sequelize.STRING,
    direccionrepresentante:Sequelize.STRING,
    emailrepresentante:Sequelize.STRING,
    telefonorepresentante:Sequelize.STRING,
    celularrepresentante:Sequelize.STRING,

    departamentoid:Sequelize.STRING,
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

Asegurado.hasMany(Poliza, { foreignKey: 'tomadorid', sourceKey: 'id' });
Poliza.belongsTo(Asegurado, { foreignKey: 'tomadorid', sourceKey: 'id' });
/* 
Accion.hasMany(PaginaAccion, { foreignKey: 'paginaid', sourceKey: 'id' });
PaginaAccion.belongsTo(Accion, { foreignKey: 'paginaid', sourceKey: 'id' }); */


/* Asegurado.hasMany(Personal, { foreignKey: 'personalid', sourceKey: 'id' });
Personal.belongsTo(Asegurado, { foreignKey: 'personalid', sourceKey: 'id' }); */

export default Asegurado;