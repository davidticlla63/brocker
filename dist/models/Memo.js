"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
var _database = require("../database/database");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Memo = _database.sequelize.define('Memo', {
  id: {
    //defaultValue: Sequelize.literal('uuid_generate_v4()'),
    type: _sequelize["default"].STRING,
    primaryKey: true
  },
  /* memoid:Sequelize.STRING,
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
  aseguradoid:Sequelize.STRING,
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
  nroplaca:Sequelize.STRING, */

  /*   fechamemo: Sequelize.DATE(6),
    fechapago: Sequelize.DATE(6), */
  fechamemo: _sequelize["default"].STRING,
  fechapago: _sequelize["default"].STRING,
  nrocuotas: _sequelize["default"].DECIMAL,
  cuotainicial: _sequelize["default"].DECIMAL,
  pagocada: _sequelize["default"].DECIMAL,
  diapago: _sequelize["default"].DECIMAL,
  impuesto: _sequelize["default"].STRING,
  fechaproduccion: _sequelize["default"].STRING,
  mesproduccion: _sequelize["default"].DECIMAL,
  anioproduccion: _sequelize["default"].DECIMAL,
  usuarioregistro: _sequelize["default"].STRING,
  usuariomodificacion: _sequelize["default"].STRING,
  fecharegistro: _sequelize["default"].DATE(6),
  fechamodificacion: _sequelize["default"].DATE(6),
  nro: _sequelize["default"].INTEGER,
  estado: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
  sucursalid: _sequelize["default"].STRING,
  polizaid: _sequelize["default"].STRING
}, {
  timestamps: false,
  tableName: 'memo'
});
/* Memo.hasMany(PaginaMemo, { foreignKey: 'accionid', sourceKey: 'id' });
PaginaMemo.belongsTo(Memo, { foreignKey: 'accionid', sourceKey: 'id' }); */
var _default = Memo;
exports["default"] = _default;