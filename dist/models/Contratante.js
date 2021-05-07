"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Contratante = _database.sequelize.define('Contratante', {
  id: {
    //defaultValue: Sequelize.literal('uuid_generate_v4()'),
    type: _sequelize["default"].STRING,
    primaryKey: true
  },
  nombre: _sequelize["default"].STRING,
  nit: _sequelize["default"].STRING,
  ejecutivoencargado: _sequelize["default"].STRING,
  direccion: _sequelize["default"].STRING,
  telefono: _sequelize["default"].STRING,
  telefonoejecutivo: _sequelize["default"].STRING,
  correoejecutivo: _sequelize["default"].STRING,
  porcentajecomison: _sequelize["default"].DECIMAL,
  porcentajecomison2: _sequelize["default"].DECIMAL,
  sucursalid: _sequelize["default"].STRING,
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
  tableName: 'contratante'
});
/* Contratante.hasMany(PaginaContratante, { foreignKey: 'accionid', sourceKey: 'id' });
PaginaContratante.belongsTo(Contratante, { foreignKey: 'accionid', sourceKey: 'id' }); */


var _default = Contratante;
exports["default"] = _default;