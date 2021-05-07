"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _PaginaAccion = _interopRequireDefault(require("./PaginaAccion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Accion = _database.sequelize.define('Accion', {
  id: {
    //defaultValue: Sequelize.literal('uuid_generate_v4()'),
    type: _sequelize["default"].STRING,
    primaryKey: true
  },
  nombre: _sequelize["default"].STRING,
  descripcion: _sequelize["default"].STRING,
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
  tableName: 'accion'
});

Accion.hasMany(_PaginaAccion["default"], {
  foreignKey: 'accionid',
  sourceKey: 'id'
});

_PaginaAccion["default"].belongsTo(Accion, {
  foreignKey: 'accionid',
  sourceKey: 'id'
});

var _default = Accion;
exports["default"] = _default;