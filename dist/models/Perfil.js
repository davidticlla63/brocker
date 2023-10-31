"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
var _database = require("../database/database");
var _Permiso = _interopRequireDefault(require("./Permiso"));
var _UsuarioPerfil = _interopRequireDefault(require("./UsuarioPerfil"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Perfil = _database.sequelize.define('Perfil', {
  id: {
    //defaultValue: Sequelize.literal('uuid_generate_v4()'),
    type: _sequelize["default"].STRING,
    primaryKey: true
  },
  nombre: _sequelize["default"].STRING,
  descripcion: _sequelize["default"].STRING,
  sucursalid: _sequelize["default"].STRING,
  empresaid: _sequelize["default"].STRING,
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
  tableName: 'perfil'
});
Perfil.hasMany(_Permiso["default"], {
  foreignKey: 'perfilid',
  sourceKey: 'id'
});
_Permiso["default"].belongsTo(Perfil, {
  foreignKey: 'perfilid',
  sourceKey: 'id'
});
Perfil.hasMany(_UsuarioPerfil["default"], {
  foreignKey: 'perfilid',
  sourceKey: 'id'
});
_UsuarioPerfil["default"].belongsTo(Perfil, {
  foreignKey: 'perfilid',
  sourceKey: 'id'
});
var _default = Perfil;
exports["default"] = _default;