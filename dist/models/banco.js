"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
var _database = require("../database/database");
var _Poliza = _interopRequireDefault(require("./Poliza"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Banco = _database.sequelize.define('Banco', {
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
  tableName: 'banco'
});
Banco.hasMany(_Poliza["default"], {
  foreignKey: 'bancoid',
  sourceKey: 'id'
});
_Poliza["default"].belongsTo(Banco, {
  foreignKey: 'bancoid',
  sourceKey: 'id'
});
var _default = exports["default"] = Banco;