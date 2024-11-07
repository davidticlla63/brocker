"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
var _database = require("../database/database");
var _permiso = _interopRequireDefault(require("./permiso"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var PaginaAccion = _database.sequelize.define('PaginaAccion', {
  id: {
    //defaultValue: Sequelize.literal('uuid_generate_v4()'),
    type: _sequelize["default"].STRING,
    primaryKey: true
  },
  paginaid: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
  accionid: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
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
  tableName: 'pagina_accion'
});
PaginaAccion.hasMany(_permiso["default"], {
  foreignKey: 'paginaaccionid',
  sourceKey: 'id'
});
_permiso["default"].belongsTo(PaginaAccion, {
  foreignKey: 'paginaaccionid',
  sourceKey: 'id'
});
var _default = exports["default"] = PaginaAccion;