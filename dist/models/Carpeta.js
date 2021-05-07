"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Archivo = _interopRequireDefault(require("./Archivo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Carpeta = _database.sequelize.define('Carpeta', {
  id: {
    //defaultValue: Sequelize.literal('uuid_generate_v4()'),
    type: _sequelize["default"].STRING,
    primaryKey: true
  },
  nombre: _sequelize["default"].STRING,
  descripcion: _sequelize["default"].STRING,
  empresaid: _sequelize["default"].STRING,
  carpetaid: _sequelize["default"].STRING,
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
  tableName: 'carpeta'
});

Carpeta.hasMany(_Archivo["default"], {
  foreignKey: 'carpetaid',
  sourceKey: 'id'
});

_Archivo["default"].belongsTo(Carpeta, {
  foreignKey: 'carpetaid',
  sourceKey: 'id'
});

var _default = Carpeta;
exports["default"] = _default;