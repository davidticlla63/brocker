import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Memo = sequelize.define('Memo', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.STRING,
        primaryKey: true
    },
    memoid:Sequelize.STRING,
    tipomemoid: Sequelize.STRING,
    fechamemo:Sequelize.DATE,
    tipomoneda:Sequelize.STRING,
    tipocambiodolares:Sequelize.DECIMAL,
    polizaid:Sequelize.STRING,
    nropoliza:Sequelize.STRING,
    nrocertificado:Sequelize.STRING,
    fechavigenciainicial:Sequelize.DATE,
    fechavigenciafinal:Sequelize.DATE,
    fechapago:Sequelize.DATE,
    formapago:Sequelize.STRING,
    primatotal:Sequelize.DECIMAL,
    primaneta:Sequelize.DECIMAL,
    montocomision:Sequelize.DECIMAL,
    porcentajeprima:Sequelize.DECIMAL,
    porcentajecomision:Sequelize.DECIMAL,
    primatotalbolivianos:Sequelize.DECIMAL,
    primanetabolivianos:Sequelize.DECIMAL,
    montocomisionbolivianos:Sequelize.DECIMAL,    
    descripcion: Sequelize.STRING,
    tipocomision:Sequelize.STRING,
    seguradoid:Sequelize.STRING,
    companiaseguroid:Sequelize.STRING,
    ciaspvs:Sequelize.STRING,
    tiporamoid:Sequelize.STRING,
    ramoid:Sequelize.STRING,
    ramospvs:Sequelize.STRING,
    subramoid:Sequelize.STRING,
    subramospvs:Sequelize.STRING,
    spvs:Sequelize.STRING,
    contratanteid:Sequelize.STRING,
    ejecutivoid:Sequelize.STRING,
    sucursalid:Sequelize.STRING,
    ciudadorigen:Sequelize.STRING,
    cuotainicial:Sequelize.DECIMAL,
    nrocuotas:Sequelize.DECIMAL,
    cantidadcuotas:Sequelize.DECIMAL,
    periodopago:Sequelize.STRING,
    impuesto:Sequelize.STRING,
    fechaspago:Sequelize.DATE,
    fechaemision:Sequelize.DATE,
    fechaproduccion:Sequelize.DATE,
    mesproduccion:Sequelize.STRING,
    tipocontrato:Sequelize.STRING,
    cuotainicialliteral:Sequelize.STRING,
    anioproduccion:Sequelize.STRING,
    vendedorid:Sequelize.STRING,
    comisionvendedor:Sequelize.DECIMAL,
    comisioncontratante:Sequelize.DECIMAL,
    depositoinicial:Sequelize.DECIMAL,
    montocomisionvendedor:Sequelize.DECIMAL,
    montocomisioncontratante:Sequelize.DECIMAL,
    comisionvendedor:Sequelize.DECIMAL,
    nombresobrogacion:Sequelize.STRING,
    agente:Sequelize.STRING,
    porcentajeagente:Sequelize.DECIMAL,
    saldocomisionbroker:Sequelize.DECIMAL,
    comisionvendedor:Sequelize.DECIMAL,
    carteraid:Sequelize.STRING,
    nroplaca:Sequelize.STRING,

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
    tableName: 'accion'
});
Memo.hasMany(PaginaMemo, { foreignKey: 'accionid', sourceKey: 'id' });
PaginaMemo.belongsTo(Memo, { foreignKey: 'accionid', sourceKey: 'id' });

export default Memo;