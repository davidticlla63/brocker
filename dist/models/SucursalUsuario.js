"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var uuid = require('uuid/v4');

var SucursalUsuario = _database.sequelize.define('SucursalUsuario', {
  id: {
    //defaultValue: Sequelize.literal('uuid_generate_v4()'),
    primaryKey: true,
    type: _sequelize["default"].UUID
  },
  usuarioid: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
  sucursalid: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
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
  tableName: 'sucursal_usuario'
});

SucursalUsuario.beforeCreate(function (sucursalUsuario) {
  return sucursalUsuario.id = uuid();
});
var _default = SucursalUsuario;
exports["default"] = _default;