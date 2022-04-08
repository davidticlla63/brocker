"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Asegurado = _interopRequireDefault(require("./Asegurado"));

var _Usuario = _interopRequireDefault(require("./Usuario"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Personal = _database.sequelize.define('Personal', {
  id: {
    //defaultValue: Sequelize.literal('uuid_generate_v4()'),
    type: _sequelize["default"].STRING,
    primaryKey: true
  },
  nombrecompleto: _sequelize["default"].STRING,
  sexo: _sequelize["default"].STRING,
  fechanacimiento: _sequelize["default"].DATE,
  ci: _sequelize["default"].STRING,
  telefono1: _sequelize["default"].STRING,
  telefono2: _sequelize["default"].STRING,
  correo1: _sequelize["default"].STRING,
  correo2: _sequelize["default"].STRING,
  fotoperfil: _sequelize["default"].BLOB,
  sucursalid: _sequelize["default"].STRING,
  areatrabajoid: _sequelize["default"].STRING,
  usuarioregistro: _sequelize["default"].STRING,
  usuariomodificacion: _sequelize["default"].STRING,
  tipocartera: _sequelize["default"].STRING,
  fecharegistro: _sequelize["default"].DATE(6),
  fechamodificacion: _sequelize["default"].DATE(6),
  estado: {
    type: _sequelize["default"].STRING,
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'personal'
});
/* 
Personal.hasMany(Permiso, { foreignKey: 'accionId', sourceKey: 'id' });
Permiso.belongsTo(AreaTrabajo, { foreignKey: 'accionId', sourceKey: 'id' }); */

/* 
Accion.hasMany(PaginaAccion, { foreignKey: 'paginaid', sourceKey: 'id' });
PaginaAccion.belongsTo(Accion, { foreignKey: 'paginaid', sourceKey: 'id' }); */


Personal.hasMany(_Usuario["default"], {
  foreignKey: 'personalid',
  sourceKey: 'id'
});

_Usuario["default"].belongsTo(Personal, {
  foreignKey: 'personalid',
  sourceKey: 'id'
});

Personal.hasMany(_Asegurado["default"], {
  foreignKey: 'ejecutivoid',
  sourceKey: 'id'
});

_Asegurado["default"].belongsTo(Personal, {
  foreignKey: 'ejecutivoid',
  sourceKey: 'id'
});

Personal.hasMany(_Asegurado["default"], {
  foreignKey: 'carteraid',
  sourceKey: 'id'
});

_Asegurado["default"].belongsTo(Personal, {
  foreignKey: 'carteraid',
  sourceKey: 'id'
});

var _default = Personal;
exports["default"] = _default;