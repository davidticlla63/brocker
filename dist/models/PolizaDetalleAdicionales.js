"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PolizaDetalleAdicional = _database.sequelize.define('PolizaDetalleAdicional', {
  id: {
    //defaultValue: Sequelize.literal('uuid_generate_v4()'),
    type: _sequelize["default"].STRING,
    primaryKey: true
  },
  valor: _sequelize["default"].STRING,
  dato: _sequelize["default"].STRING,
  // polizaid: Sequelize.STRING,   
  polizadetalleid: _sequelize["default"].STRING,
  usuarioregistro: _sequelize["default"].STRING,
  usuariomodificacion: _sequelize["default"].STRING,
  fecharegistro: _sequelize["default"].DATE(6),
  fechamodificacion: _sequelize["default"].DATE(6),
  estado: {
    type: _sequelize["default"].STRING,
    allowNull: false
  } //,
  //sucursalid:Sequelize.STRING,

}, {
  timestamps: false,
  tableName: 'poliza_detalle_adicional'
});
/* PolizaAdicional.hasMany(PaginaPolizaAdicional, { foreignKey: 'accionid', sourceKey: 'id' });
PaginaPolizaAdicional.belongsTo(PolizaAdicional, { foreignKey: 'accionid', sourceKey: 'id' }); */


var _default = PolizaDetalleAdicional;
exports["default"] = _default;