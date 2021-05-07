"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Sucursal = _interopRequireDefault(require("./Sucursal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Departamento = _database.sequelize.define('Departamento', {
  id: {
    //defaultValue: Sequelize.literal('uuid_generate_v4()'),
    type: _sequelize["default"].STRING,
    primaryKey: true
  },
  nombre: _sequelize["default"].STRING,
  descripcion: _sequelize["default"].STRING,
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
  tableName: 'departamento'
});

Departamento.hasMany(_Sucursal["default"], {
  foreignKey: 'departamentoid',
  sourceKey: 'id'
});

_Sucursal["default"].belongsTo(Departamento, {
  foreignKey: 'departamentoid',
  sourceKey: 'id'
});

var _default = Departamento;
exports["default"] = _default;