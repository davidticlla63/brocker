"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
var _database = require("../database/database");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var PolizaDetallePersona = _database.sequelize.define('PolizaDetallePersona', {
  id: {
    //defaultValue: Sequelize.literal('uuid_generate_v4()'),
    type: _sequelize["default"].STRING,
    primaryKey: true
  },
  nrocertificado: _sequelize["default"].STRING,
  //asegurado: Sequelize.STRING,
  tipoasegurado: _sequelize["default"].STRING,
  titular: _sequelize["default"].STRING,
  cobertura: _sequelize["default"].BOOLEAN,
  fechanacimiento: _sequelize["default"].DATE,
  sexo: _sequelize["default"].STRING,
  ambitogeografico: _sequelize["default"].STRING,
  sistemaatencion: _sequelize["default"].STRING,
  primaindividual: _sequelize["default"].DECIMAL,
  primanetaindividualbs: _sequelize["default"].DECIMAL,
  primanetaindividualusd: _sequelize["default"].DECIMAL,
  franquicia: _sequelize["default"].DECIMAL,
  valorasegurado: _sequelize["default"].DECIMAL,
  usuarioregistro: _sequelize["default"].STRING,
  usuariomodificacion: _sequelize["default"].STRING,
  fecharegistro: _sequelize["default"].DATE(6),
  fechamodificacion: _sequelize["default"].DATE(6),
  estado: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
  //sucursalid:Sequelize.STRING,
  polizaid: _sequelize["default"].STRING
}, {
  timestamps: false,
  //tableName: 'poliza_detalle'
  tableName: 'poliza_detalle_persona'
});
/* PolizaDetallePersona.hasMany(PaginaPolizaDetallePersona, { foreignKey: 'accionid', sourceKey: 'id' });
PaginaPolizaDetallePersona.belongsTo(PolizaDetallePersona, { foreignKey: 'accionid', sourceKey: 'id' }); */
var _default = exports["default"] = PolizaDetallePersona;