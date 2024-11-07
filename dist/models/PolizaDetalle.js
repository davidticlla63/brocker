"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
var _database = require("../database/database");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var PolizaDetalle = _database.sequelize.define('PolizaDetalle', {
  id: {
    //defaultValue: Sequelize.literal('uuid_generate_v4()'),
    type: _sequelize["default"].STRING,
    primaryKey: true
  },
  /*     nropoliza: Sequelize.STRING,
      nrocertificado: Sequelize.STRING,    
    
      fechainclusion:Sequelize.DATE,
      prima:Sequelize.DECIMAL,
      porcentajeprima:Sequelize.DECIMAL,
      primaneta:Sequelize.DECIMAL,
      porcentajecomision:Sequelize.DECIMAL,
      detalle:Sequelize.STRING, */

  titular: _sequelize["default"].STRING,
  nrocertificado: _sequelize["default"].STRING,
  placa: _sequelize["default"].STRING,
  tipovehiculo: _sequelize["default"].STRING,
  marcavehiculo: _sequelize["default"].STRING,
  colorvehiculo: _sequelize["default"].STRING,
  aniovehiculo: _sequelize["default"].STRING,
  modelo: _sequelize["default"].STRING,
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
  tableName: 'poliza_detalle_automotor'
});
/* PolizaDetalle.hasMany(PaginaPolizaDetalle, { foreignKey: 'accionid', sourceKey: 'id' });
PaginaPolizaDetalle.belongsTo(PolizaDetalle, { foreignKey: 'accionid', sourceKey: 'id' }); */
var _default = exports["default"] = PolizaDetalle;