"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
var _database = require("../database/database");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var SubRamo = _database.sequelize.define('SubRamo', {
  id: {
    //defaultValue: Sequelize.literal('uuid_generate_v4()'),
    type: _sequelize["default"].STRING,
    primaryKey: true
  },
  nombre: _sequelize["default"].STRING,
  descripcion: _sequelize["default"].STRING,
  spvs: {
    type: _sequelize["default"].STRING
    //field:'ramo_spvs'
  },

  ramoid: _sequelize["default"].STRING,
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
  tableName: 'sub_ramo'
});
/* SubRamo.hasMany(PaginaSubRamo, { foreignKey: 'accionid', sourceKey: 'id' });
PaginaSubRamo.belongsTo(SubRamo, { foreignKey: 'accionid', sourceKey: 'id' }); */
var _default = SubRamo;
exports["default"] = _default;