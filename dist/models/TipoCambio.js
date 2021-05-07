"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TipoCambio = _database.sequelize.define('TipoCambio', {
  id: {
    //defaultValue: Sequelize.literal('uuid_generate_v4()'),
    type: _sequelize["default"].STRING,
    primaryKey: true
  },
  fecha: _sequelize["default"].DATE,
  tipocambioventa: _sequelize["default"].DECIMAL,
  tipocambiocompra: _sequelize["default"].DECIMAL,
  usuarioregistro: _sequelize["default"].STRING,
  usuariomodificacion: _sequelize["default"].STRING,
  fecharegistro: _sequelize["default"].DATE(6),
  fechamodificacion: _sequelize["default"].DATE(6),
  estado: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
  empresaid: _sequelize["default"].STRING
}, {
  timestamps: false,
  tableName: 'tipo_cambio'
});
/* TipoCambio.hasMany(PaginaTipoCambio, { foreignKey: 'accionid', sourceKey: 'id' });
PaginaTipoCambio.belongsTo(TipoCambio, { foreignKey: 'accionid', sourceKey: 'id' }); */


var _default = TipoCambio;
exports["default"] = _default;