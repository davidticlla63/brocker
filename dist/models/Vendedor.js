"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
var _database = require("../database/database");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Vendedor = _database.sequelize.define('Vendedor', {
  id: {
    //defaultValue: Sequelize.literal('uuid_generate_v4()'),
    type: _sequelize["default"].STRING,
    primaryKey: true
  },
  nombre: _sequelize["default"].STRING,
  contratranteid: _sequelize["default"].STRING,
  sucursalid: _sequelize["default"].STRING,
  departamentoid: _sequelize["default"].STRING,
  comisionvendedor: _sequelize["default"].DECIMAL,
  comisionvendedor2: _sequelize["default"].DECIMAL,
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
  tableName: 'vendedor'
});
/* Vendedor.hasMany(PaginaVendedor, { foreignKey: 'vendedorid', sourceKey: 'id' });
PaginaVendedor.belongsTo(Vendedor, { foreignKey: 'vendedorid', sourceKey: 'id' }); */
var _default = exports["default"] = Vendedor;