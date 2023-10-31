"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
var _database = require("../database/database");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var RamoCompania = _database.sequelize.define('RamoCompania', {
  id: {
    //defaultValue: Sequelize.literal('uuid_generate_v4()'),
    type: _sequelize["default"].STRING,
    primaryKey: true
  },
  ramoid: _sequelize["default"].STRING,
  companiaseguroid: _sequelize["default"].STRING,
  porcentajecomision: _sequelize["default"].DECIMAL,
  porcentajecomisioncredito: _sequelize["default"].DECIMAL,
  porcentajeprima: _sequelize["default"].DECIMAL,
  porcentajeprimacredito: _sequelize["default"].DECIMAL,
  nota: _sequelize["default"].STRING,
  notacredito: _sequelize["default"].STRING,
  usuarioregistro: _sequelize["default"].STRING,
  usuariomodificacion: _sequelize["default"].STRING,
  fecharegistro: _sequelize["default"].DATE(6),
  fechamodificacion: _sequelize["default"].DATE(6),
  estado: {
    type: _sequelize["default"].STRING,
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'ramo_compania'
});
var _default = RamoCompania;
exports["default"] = _default;