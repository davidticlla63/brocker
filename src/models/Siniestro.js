import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Siniestro = sequelize.define('Siniestro', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.STRING,
        primaryKey: true
    },
    //nombre: Sequelize.STRING,

    fechanotificacion: Sequelize.STRING,
    fechasiniestro: Sequelize.STRING,
    comentarioinicial: Sequelize.STRING,
    resumenejecutivo: Sequelize.STRING,
    resumenfinalsiniestro: Sequelize.STRING,
    montoindemnizar: Sequelize.DECIMAL,
    fecharecordatorio: Sequelize.DATE,
    notarecordatorio: Sequelize.STRING,
    tipo: Sequelize.STRING,
    estadosiniestro:Sequelize.STRING,
    encargadoid:Sequelize.STRING,
    usuarioregistro: Sequelize.STRING,
    usuariomodificacion: Sequelize.STRING,
    fecharegistro: Sequelize.DATE(6),
    fechamodificacion: Sequelize.DATE(6),
    estado: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    idpolizadetalle: Sequelize.STRING,
    polizaid: Sequelize.STRING,
    sucursalid: Sequelize.STRING


}, {
    timestamps: false,
    tableName: 'siniestro'
});
/* Siniestro.hasMany(PaginaSiniestro, { foreignKey: 'accionid', sourceKey: 'id' });
PaginaSiniestro.belongsTo(Siniestro, { foreignKey: 'accionid', sourceKey: 'id' }); */

export default Siniestro;