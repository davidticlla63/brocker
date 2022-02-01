"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Requesito = _database.sequelize.define('Requesito', {
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
  },
  empresaid: _sequelize["default"].STRING
}, {
  timestamps: false,
  tableName: 'requisito'
});
/* Requesito.hasMany(PaginaRequesito, { foreignKey: 'accionid', sourceKey: 'id' });
PaginaRequesito.belongsTo(Requesito, { foreignKey: 'accionid', sourceKey: 'id' }); */


var _default = Requesito;
exports["default"] = _default;