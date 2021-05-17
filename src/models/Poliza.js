import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Poliza = sequelize.define('Poliza', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.STRING,
        primaryKey: true
    },
    nropoliza: Sequelize.STRING,
    nrocertificado: Sequelize.STRING,
    fechainicio: Sequelize.DATE,
    fechafin: Sequelize.DATE,
    fechaexpedicion: Sequelize.DATE,
    fecharecepcion: Sequelize.DATE,
    tipomoneda: Sequelize.STRING,
    primatotal: Sequelize.DECIMAL,
    formapago: Sequelize.STRING,
    encargadoid: Sequelize.STRING,// nombreencargado:Sequelize.STRING,
    bancoid: Sequelize.STRING,//banco nombresubrogacion
    ciudadexpedicion: Sequelize.STRING,
    //broker:Sequelize.STRING,//quitado
    notas: Sequelize.STRING,
    companiaseguroid: Sequelize.STRING,
    subramocompaniaid: Sequelize.STRING,
    tiporamoid: Sequelize.STRING,
    valorasegurado: Sequelize.DECIMAL,//agregado
    contratanteid: Sequelize.STRING,
    //aseguradoid:Sequelize.STRING,//quitado
    tomadorid: Sequelize.STRING,//agregado
    ejecutivoid: Sequelize.STRING,
    colocacionid: Sequelize.STRING,
    ciaspvs: Sequelize.STRING,
    tipopolizaid: Sequelize.STRING,
    tpoliza: Sequelize.STRING,
    tipocontrato: Sequelize.STRING,
    memoid: Sequelize.STRING,
    vendedorid: Sequelize.STRING,
    tipoemision: Sequelize.STRING,

    franquicia: Sequelize.DECIMAL,//agregar

  

    comisionbs: Sequelize.DECIMAL,
    comisionusd: Sequelize.DECIMAL,
    tipocambio: Sequelize.DECIMAL,
    porcentajeprima: Sequelize.DECIMAL,
    primaneta: Sequelize.DECIMAL,
    porcentajecomision: Sequelize.DECIMAL,

    usuarioregistro: Sequelize.STRING,
    usuariomodificacion: Sequelize.STRING,
    fecharegistro: Sequelize.DATE(6),
    fechamodificacion: Sequelize.DATE(6),
    estado: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    sucursalid: Sequelize.STRING,
    planid: Sequelize.STRING

}, {
    timestamps: false,
    tableName: 'poliza'
});
/* Poliza.hasMany(PaginaPoliza, { foreignKey: 'accionid', sourceKey: 'id' });
PaginaPoliza.belongsTo(Poliza, { foreignKey: 'accionid', sourceKey: 'id' }); */

export default Poliza;