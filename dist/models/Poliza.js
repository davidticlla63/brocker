"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Poliza = _database.sequelize.define('Poliza', {
  id: {
    //defaultValue: Sequelize.literal('uuid_generate_v4()'),
    type: _sequelize["default"].STRING,
    primaryKey: true
  },
  nropoliza: _sequelize["default"].STRING,
  nrocertificado: _sequelize["default"].STRING,
  fechainicio: _sequelize["default"].STRING,
  fechafin: _sequelize["default"].STRING,
  fechaexpedicion: _sequelize["default"].STRING,
  fecharecepcion: _sequelize["default"].STRING,
  tipomoneda: _sequelize["default"].STRING,
  primatotal: _sequelize["default"].DECIMAL,
  formapago: _sequelize["default"].STRING,
  encargadoid: _sequelize["default"].STRING,
  // nombreencargado:Sequelize.STRING,
  bancoid: _sequelize["default"].STRING,
  //banco nombresubrogacion
  ciudadexpedicion: _sequelize["default"].STRING,
  //broker:Sequelize.STRING,//quitado
  notas: _sequelize["default"].STRING,
  companiaseguroid: _sequelize["default"].STRING,
  subramocompaniaid: _sequelize["default"].STRING,
  tiporamoid: _sequelize["default"].STRING,
  valorasegurado: _sequelize["default"].DECIMAL,
  //agregado
  contratanteid: _sequelize["default"].STRING,
  //aseguradoid:Sequelize.STRING,//quitado
  tomadorid: _sequelize["default"].STRING,
  //agregado
  ejecutivoid: _sequelize["default"].STRING,
  colocacionid: _sequelize["default"].STRING,
  ciaspvs: _sequelize["default"].STRING,
  tipopolizaid: _sequelize["default"].STRING,
  tpoliza: _sequelize["default"].STRING,
  tipocontrato: _sequelize["default"].STRING,
  memoid: _sequelize["default"].STRING,
  vendedorid: _sequelize["default"].STRING,
  tipoemision: _sequelize["default"].STRING,
  franquicia: _sequelize["default"].DECIMAL,
  //agregar
  comisionbs: _sequelize["default"].DECIMAL,
  comisionusd: _sequelize["default"].DECIMAL,
  tipocambio: _sequelize["default"].DECIMAL,
  porcentajeprima: _sequelize["default"].DECIMAL,
  primaneta: _sequelize["default"].DECIMAL,
  porcentajecomision: _sequelize["default"].DECIMAL,
  ingresoegreso: _sequelize["default"].STRING,
  usuarioregistro: _sequelize["default"].STRING,
  usuariomodificacion: _sequelize["default"].STRING,
  fecharegistro: _sequelize["default"].DATE(6),
  fechamodificacion: _sequelize["default"].DATE(6),
  estado: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
  sucursalid: _sequelize["default"].STRING,
  planid: _sequelize["default"].STRING,
  polizaid: _sequelize["default"].STRING
}, {
  timestamps: false,
  tableName: 'poliza'
});
/* Poliza.hasMany(PaginaPoliza, { foreignKey: 'accionid', sourceKey: 'id' });
PaginaPoliza.belongsTo(Poliza, { foreignKey: 'accionid', sourceKey: 'id' }); */


var _default = Poliza;
exports["default"] = _default;