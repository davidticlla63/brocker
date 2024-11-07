"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
var _database = require("../database/database");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Pagos = _database.sequelize.define('Pagos', {
  id: {
    //defaultValue: Sequelize.literal('uuid_generate_v4()'),
    type: _sequelize["default"].STRING,
    primaryKey: true
  },
  tipo: _sequelize["default"].STRING,
  montobs: _sequelize["default"].DECIMAL,
  montousd: _sequelize["default"].DECIMAL,
  comisionbs: _sequelize["default"].DECIMAL,
  comisionusd: _sequelize["default"].DECIMAL,
  numerofactura: _sequelize["default"].STRING,
  usuarioregistro: _sequelize["default"].STRING,
  usuariomodificacion: _sequelize["default"].STRING,
  fecharegistro: _sequelize["default"].DATE(6),
  fechamodificacion: _sequelize["default"].DATE(6),
  estado: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
  planpagoid: _sequelize["default"].STRING,
  sucursalid: _sequelize["default"].STRING
}, {
  timestamps: false,
  tableName: 'pagos'
});
var _default = exports["default"] = Pagos;