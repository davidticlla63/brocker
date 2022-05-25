"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Siniestro = _database.sequelize.define('Siniestro', {
  id: {
    //defaultValue: Sequelize.literal('uuid_generate_v4()'),
    type: _sequelize["default"].STRING,
    primaryKey: true
  },
  //nombre: Sequelize.STRING,
  fechanotificacion: _sequelize["default"].STRING,
  fechasiniestro: _sequelize["default"].STRING,
  comentarioinicial: _sequelize["default"].STRING,
  resumenejecutivo: _sequelize["default"].STRING,
  resumenfinalsiniestro: _sequelize["default"].STRING,
  montoindemnizar: _sequelize["default"].DECIMAL,
  fecharecordatorio: _sequelize["default"].DATE,
  notarecordatorio: _sequelize["default"].STRING,
  tipo: _sequelize["default"].STRING,
  estadosiniestro: _sequelize["default"].STRING,
  encargadoid: _sequelize["default"].STRING,
  usuarioregistro: _sequelize["default"].STRING,
  usuariomodificacion: _sequelize["default"].STRING,
  fecharegistro: _sequelize["default"].DATE(6),
  fechamodificacion: _sequelize["default"].DATE(6),
  estado: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
  idpolizadetalle: _sequelize["default"].STRING,
  polizaid: _sequelize["default"].STRING,
  sucursalid: _sequelize["default"].STRING
}, {
  timestamps: false,
  tableName: 'siniestro'
});
/* Siniestro.hasMany(PaginaSiniestro, { foreignKey: 'accionid', sourceKey: 'id' });
PaginaSiniestro.belongsTo(Siniestro, { foreignKey: 'accionid', sourceKey: 'id' }); */


var _default = Siniestro;
exports["default"] = _default;