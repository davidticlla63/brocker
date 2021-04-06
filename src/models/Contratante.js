import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Contratante = sequelize.define('Contratante', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.STRING,
        primaryKey: true
    },
    nombre: Sequelize.STRING,
    nit:Sequelize.STRING,
    ejecutivoencargado:Sequelize.STRING,
    direccion:Sequelize.STRING,
    telefono:Sequelize.STRING,
    telefonoejecutivo:Sequelize.STRING,
    correoejecutivo:Sequelize.STRING,
    porcentajecomison:Sequelize.DECIMAL,
    porcentajecomison2:Sequelize.DECIMAL,
    sucursalid:Sequelize.STRING,
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
    tableName: 'contratante'
});
/* Contratante.hasMany(PaginaContratante, { foreignKey: 'accionid', sourceKey: 'id' });
PaginaContratante.belongsTo(Contratante, { foreignKey: 'accionid', sourceKey: 'id' }); */

export default Contratante;