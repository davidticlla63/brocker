"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
var _database = require("../database/database");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Permiso = _database.sequelize.define('Permiso', {
  id: {
    type: _sequelize["default"].STRING,
    primaryKey: true
  },
  /* accionid: Sequelize.STRING,
  paginaid: Sequelize.STRING, */
  paginaaccionid: _sequelize["default"].STRING,
  perfilid: _sequelize["default"].STRING,
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
  tableName: 'permiso'
});
var _default = Permiso;
exports["default"] = _default;