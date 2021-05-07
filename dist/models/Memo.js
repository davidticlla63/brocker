"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _sequelize$define;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Memo = _database.sequelize.define('Memo', (_sequelize$define = {
  id: {
    //defaultValue: Sequelize.literal('uuid_generate_v4()'),
    type: _sequelize["default"].STRING,
    primaryKey: true
  },
  memoid: _sequelize["default"].STRING,
  tipomemoid: _sequelize["default"].STRING,
  fechamemo: _sequelize["default"].DATE,
  tipomoneda: _sequelize["default"].STRING,
  tipocambiodolares: _sequelize["default"].DECIMAL,
  polizaid: _sequelize["default"].STRING,
  nropoliza: _sequelize["default"].STRING,
  nrocertificado: _sequelize["default"].STRING,
  fechavigenciainicial: _sequelize["default"].DATE,
  fechavigenciafinal: _sequelize["default"].DATE,
  fechapago: _sequelize["default"].DATE,
  formapago: _sequelize["default"].STRING,
  primatotal: _sequelize["default"].DECIMAL,
  primaneta: _sequelize["default"].DECIMAL,
  montocomision: _sequelize["default"].DECIMAL,
  porcentajeprima: _sequelize["default"].DECIMAL,
  porcentajecomision: _sequelize["default"].DECIMAL,
  primatotalbolivianos: _sequelize["default"].DECIMAL,
  primanetabolivianos: _sequelize["default"].DECIMAL,
  montocomisionbolivianos: _sequelize["default"].DECIMAL,
  descripcion: _sequelize["default"].STRING,
  tipocomision: _sequelize["default"].STRING,
  aseguradoid: _sequelize["default"].STRING,
  companiaseguroid: _sequelize["default"].STRING,
  ciaspvs: _sequelize["default"].STRING,
  tiporamoid: _sequelize["default"].STRING,
  ramoid: _sequelize["default"].STRING,
  ramospvs: _sequelize["default"].STRING,
  subramoid: _sequelize["default"].STRING,
  subramospvs: _sequelize["default"].STRING,
  spvs: _sequelize["default"].STRING,
  contratanteid: _sequelize["default"].STRING,
  ejecutivoid: _sequelize["default"].STRING,
  sucursalid: _sequelize["default"].STRING,
  ciudadorigen: _sequelize["default"].STRING,
  cuotainicial: _sequelize["default"].DECIMAL,
  nrocuotas: _sequelize["default"].DECIMAL,
  cantidadcuotas: _sequelize["default"].DECIMAL,
  periodopago: _sequelize["default"].STRING,
  impuesto: _sequelize["default"].STRING,
  fechaspago: _sequelize["default"].DATE,
  fechaemision: _sequelize["default"].DATE,
  fechaproduccion: _sequelize["default"].DATE,
  mesproduccion: _sequelize["default"].STRING,
  tipocontrato: _sequelize["default"].STRING,
  cuotainicialliteral: _sequelize["default"].STRING,
  anioproduccion: _sequelize["default"].STRING,
  vendedorid: _sequelize["default"].STRING,
  comisionvendedor: _sequelize["default"].DECIMAL,
  comisioncontratante: _sequelize["default"].DECIMAL,
  depositoinicial: _sequelize["default"].DECIMAL,
  montocomisionvendedor: _sequelize["default"].DECIMAL,
  montocomisioncontratante: _sequelize["default"].DECIMAL
}, _defineProperty(_sequelize$define, "comisionvendedor", _sequelize["default"].DECIMAL), _defineProperty(_sequelize$define, "nombresobrogacion", _sequelize["default"].STRING), _defineProperty(_sequelize$define, "agente", _sequelize["default"].STRING), _defineProperty(_sequelize$define, "porcentajeagente", _sequelize["default"].DECIMAL), _defineProperty(_sequelize$define, "saldocomisionbroker", _sequelize["default"].DECIMAL), _defineProperty(_sequelize$define, "comisionvendedor", _sequelize["default"].DECIMAL), _defineProperty(_sequelize$define, "carteraid", _sequelize["default"].STRING), _defineProperty(_sequelize$define, "nroplaca", _sequelize["default"].STRING), _defineProperty(_sequelize$define, "usuarioregistro", _sequelize["default"].STRING), _defineProperty(_sequelize$define, "usuariomodificacion", _sequelize["default"].STRING), _defineProperty(_sequelize$define, "fecharegistro", _sequelize["default"].DATE(6)), _defineProperty(_sequelize$define, "fechamodificacion", _sequelize["default"].DATE(6)), _defineProperty(_sequelize$define, "estado", {
  type: _sequelize["default"].STRING,
  allowNull: false
}), _sequelize$define), {
  timestamps: false,
  tableName: 'memo'
});
/* Memo.hasMany(PaginaMemo, { foreignKey: 'accionid', sourceKey: 'id' });
PaginaMemo.belongsTo(Memo, { foreignKey: 'accionid', sourceKey: 'id' }); */


var _default = Memo;
exports["default"] = _default;