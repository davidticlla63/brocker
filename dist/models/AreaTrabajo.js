"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Personal = _interopRequireDefault(require("./Personal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var AreaTrabajo = _database.sequelize.define('AreaTrabajo', {
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
  tableName: 'area_trabajo'
});

AreaTrabajo.hasMany(_Personal["default"], {
  foreignKey: 'areatrabajoid',
  sourceKey: 'id'
});

_Personal["default"].belongsTo(AreaTrabajo, {
  foreignKey: 'areatrabajoid',
  sourceKey: 'id'
});
/* 
Accion.hasMany(PaginaAccion, { foreignKey: 'paginaid', sourceKey: 'id' });
PaginaAccion.belongsTo(Accion, { foreignKey: 'paginaid', sourceKey: 'id' }); */


var _default = AreaTrabajo;
exports["default"] = _default;