"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
var _database = require("../database/database");
var _SubRamo = _interopRequireDefault(require("./SubRamo"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Ramo = _database.sequelize.define('Ramo', {
  id: {
    //defaultValue: Sequelize.literal('uuid_generate_v4()'),
    type: _sequelize["default"].STRING,
    primaryKey: true
  },
  nombre: _sequelize["default"].STRING,
  descripcion: _sequelize["default"].STRING,
  spvs: {
    type: _sequelize["default"].STRING //,
    //field:'ramo_spvs'
  },
  tiporamoid: _sequelize["default"].STRING,
  //tipo de riesgo
  //companiaseguroid:Sequelize.STRING,//compañia
  //empresaid:Sequelize.STRING,
  usuarioregistro: _sequelize["default"].STRING,
  usuariomodificacion: _sequelize["default"].STRING,
  fecharegistro: _sequelize["default"].DATE(6),
  fechamodificacion: _sequelize["default"].DATE(6),
  estado: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
  ramoid: _sequelize["default"].STRING
}, {
  timestamps: false,
  tableName: 'ramo'
});
Ramo.hasMany(_SubRamo["default"], {
  foreignKey: 'ramoid',
  sourceKey: 'id'
});
_SubRamo["default"].belongsTo(Ramo, {
  foreignKey: 'ramoid',
  sourceKey: 'id'
});
var _default = exports["default"] = Ramo;