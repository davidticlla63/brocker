"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
var _database = require("../database/database");
var _Personal = _interopRequireDefault(require("./Personal"));
var _SucursalUsuario = _interopRequireDefault(require("./SucursalUsuario"));
var _Perfil = _interopRequireDefault(require("./Perfil"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Sucursal = _database.sequelize.define('sucursal', {
  id: {
    //defaultValue: Sequelize.literal('uuid_generate_v4()'),
    type: _sequelize["default"].STRING,
    primaryKey: true
  },
  nombre: {
    type: _sequelize["default"].STRING,
    allowNull: false,
    length: 3000
  },
  descripcion: {
    type: _sequelize["default"].STRING,
    length: 3000
  },
  telefono: _sequelize["default"].STRING,
  actividad: _sequelize["default"].STRING,
  representante: _sequelize["default"].STRING,
  direccion: _sequelize["default"].STRING,
  usuarioregistro: _sequelize["default"].STRING,
  usuariomodificacion: _sequelize["default"].STRING,
  fecharegistro: _sequelize["default"].DATE(6),
  fechamodificacion: _sequelize["default"].DATE(6),
  estado: _sequelize["default"].STRING,
  empresaid: _sequelize["default"].STRING,
  departamentoid: _sequelize["default"].STRING
}, {
  timestamps: false,
  tableName: 'sucursal'
});
Sucursal.hasMany(_SucursalUsuario["default"], {
  foreignKey: 'sucursalid',
  sourceKey: 'id'
});
_SucursalUsuario["default"].belongsTo(Sucursal, {
  foreignKey: 'sucursalid',
  sourceKey: 'id'
});
Sucursal.hasMany(_Personal["default"], {
  foreignKey: 'sucursalid',
  sourceKey: 'id'
});
_Personal["default"].belongsTo(Sucursal, {
  foreignKey: 'sucursalid',
  sourceKey: 'id'
});
Sucursal.hasMany(_Perfil["default"], {
  foreignKey: 'sucursalid',
  sourceKey: 'id'
});
_Perfil["default"].belongsTo(Sucursal, {
  foreignKey: 'sucursalid',
  sourceKey: 'id'
});
var _default = exports["default"] = Sucursal;