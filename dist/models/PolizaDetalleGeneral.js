"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PolizaDetalleGeneral = _database.sequelize.define('PolizaDetalleGeneral', {
  id: {
    //defaultValue: Sequelize.literal('uuid_generate_v4()'),
    type: _sequelize["default"].STRING,
    primaryKey: true
  },
  //titular:Sequelize.STRING,
  nrocertificado: _sequelize["default"].STRING,
  tipopolizageneral: _sequelize["default"].STRING,
  direccion: _sequelize["default"].STRING,
  primaindividual: _sequelize["default"].DECIMAL,
  primanetaindividualbs: _sequelize["default"].DECIMAL,
  primanetaindividualusd: _sequelize["default"].DECIMAL,
  usuarioregistro: _sequelize["default"].STRING,
  usuariomodificacion: _sequelize["default"].STRING,
  fecharegistro: _sequelize["default"].DATE(6),
  fechamodificacion: _sequelize["default"].DATE(6),
  estado: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
  //sucursalid:Sequelize.STRING,
  polizaid: _sequelize["default"].STRING
}, {
  timestamps: false,
  //tableName: 'poliza_detalle'
  tableName: 'poliza_detalle_general'
});
/* PolizaDetalleGeneral.hasMany(PaginaPolizaDetalleGeneral, { foreignKey: 'accionid', sourceKey: 'id' });
PaginaPolizaDetalleGeneral.belongsTo(PolizaDetalleGeneral, { foreignKey: 'accionid', sourceKey: 'id' }); */


var _default = PolizaDetalleGeneral;
exports["default"] = _default;