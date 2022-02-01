"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PolizaDetallePersonaTitular = _database.sequelize.define('PolizaDetallePersonaTitularTitular', {
  id: {
    //defaultValue: Sequelize.literal('uuid_generate_v4()'),
    type: _sequelize["default"].STRING,
    primaryKey: true
  },
  nombre: _sequelize["default"].STRING,
  parentezco: _sequelize["default"].STRING,
  fechanacimiento: _sequelize["default"].DATE,
  sexo: _sequelize["default"].STRING,
  primaindividual: _sequelize["default"].DECIMAL,
  primanetaindividualbs: _sequelize["default"].DECIMAL,
  primanetaindividualusd: _sequelize["default"].DECIMAL,
  usuarioregistro: _sequelize["default"].STRING,
  usuariomodificacion: _sequelize["default"].STRING,
  fecharegistro: _sequelize["default"].DATE(6),
  fechamodificacion: _sequelize["default"].DATE(6),
  estado: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
  //sucursalid:Sequelize.STRING,
  polizadetallepersonaid: _sequelize["default"].STRING
}, {
  timestamps: false,
  //tableName: 'poliza_detalle'
  tableName: 'poliza_detalle_persona_titular'
});
/* PolizaDetallePersonaTitular.hasMany(PaginaPolizaDetallePersonaTitular, { foreignKey: 'accionid', sourceKey: 'id' });
PaginaPolizaDetallePersonaTitular.belongsTo(PolizaDetallePersonaTitular, { foreignKey: 'accionid', sourceKey: 'id' }); */


var _default = PolizaDetallePersonaTitular;
exports["default"] = _default;