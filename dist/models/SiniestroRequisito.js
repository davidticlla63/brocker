"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SiniestroRequisito = _database.sequelize.define('SiniestroRequisito', {
  id: {
    //defaultValue: Sequelize.literal('uuid_generate_v4()'),
    type: _sequelize["default"].STRING,
    primaryKey: true
  },
  usuarioregistro: _sequelize["default"].STRING,
  usuariomodificacion: _sequelize["default"].STRING,
  fecharegistro: _sequelize["default"].DATE(6),
  fechamodificacion: _sequelize["default"].DATE(6),
  estado: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
  siniestroid: _sequelize["default"].STRING,
  requisitoid: _sequelize["default"].STRING
}, {
  timestamps: false,
  tableName: 'siniestro_requisito'
});
/* Siniestro.hasMany(PaginaSiniestro, { foreignKey: 'accionid', sourceKey: 'id' });
PaginaSiniestro.belongsTo(Siniestro, { foreignKey: 'accionid', sourceKey: 'id' }); */


var _default = SiniestroRequisito;
exports["default"] = _default;