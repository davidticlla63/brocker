"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _require = require('uuid'),
    uuidv4 = _require.v4;

var UsuarioPerfil = _database.sequelize.define('UsuarioPerfil', {
  id: {
    //defaultValue: Sequelize.literal('uuid_generate_v4()'),
    type: _sequelize["default"].STRING,
    primaryKey: true
  },
  usuarioid: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
  perfilid: {
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
  tableName: 'usuario_perfil'
});

UsuarioPerfil.beforeCreate(function (usuarioPerfil) {
  return usuarioPerfil.id = uuidv4();
});
var _default = UsuarioPerfil;
exports["default"] = _default;