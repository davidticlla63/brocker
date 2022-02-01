"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PlanPago = _database.sequelize.define('PlanPago', {
  id: {
    //defaultValue: Sequelize.literal('uuid_generate_v4()'),
    type: _sequelize["default"].STRING,
    primaryKey: true
  },

  /*   fechapago:Sequelize.DATE,
    montobs:Sequelize.DECIMAL,
    montousd:Sequelize.DECIMAL,
    porcentaje:Sequelize.DECIMAL,
    comisionbs:Sequelize.DECIMAL,
    comisionusd:Sequelize.DECIMAL,
    primaneta:Sequelize.DECIMAL, */
  nro: _sequelize["default"].DECIMAL,
  fechapago: _sequelize["default"].DATE,
  montocuota: _sequelize["default"].DECIMAL,
  primaneta: _sequelize["default"].DECIMAL,
  comision: _sequelize["default"].DECIMAL,
  memoid: _sequelize["default"].STRING,
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
  tableName: 'plan_pago'
});
/* PlanPago.hasMany(PaginaPlanPago, { foreignKey: 'accionid', sourceKey: 'id' });
PaginaPlanPago.belongsTo(PlanPago, { foreignKey: 'accionid', sourceKey: 'id' }); */


var _default = PlanPago;
exports["default"] = _default;