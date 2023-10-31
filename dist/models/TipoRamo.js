"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
var _database = require("../database/database");
var _Ramo = _interopRequireDefault(require("./Ramo"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var TipoRamo = _database.sequelize.define('TipoRamo', {
  id: {
    //defaultValue: Sequelize.literal('uuid_generate_v4()'),
    type: _sequelize["default"].STRING,
    primaryKey: true
  },
  nombre: _sequelize["default"].STRING,
  descripcion: _sequelize["default"].STRING,
  spvs: _sequelize["default"].STRING,
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
  tableName: 'tipo_ramo'
});
TipoRamo.hasMany(_Ramo["default"], {
  foreignKey: 'tiporamoid',
  sourceKey: 'id'
});
_Ramo["default"].belongsTo(TipoRamo, {
  foreignKey: 'tiporamoid',
  sourceKey: 'id'
});
var _default = TipoRamo;
exports["default"] = _default;