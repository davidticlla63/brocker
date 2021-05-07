"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Accion = _interopRequireDefault(require("./Accion"));

var _PaginaAccion = _interopRequireDefault(require("./PaginaAccion"));

var _Permiso = _interopRequireDefault(require("./Permiso"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//  import PaginaAccion from "./PaginaAccion";
var Pagina = _database.sequelize.define('Pagina', {
  id: {
    //defaultValue: Sequelize.literal('uuid_generate_v4()'),
    type: _sequelize["default"].STRING,
    primaryKey: true
  },
  nombre: _sequelize["default"].STRING,
  descripcion: _sequelize["default"].STRING,
  url: _sequelize["default"].STRING,
  icon: _sequelize["default"].STRING,
  badgestyleclass: _sequelize["default"].STRING,
  badge: _sequelize["default"].STRING,
  tipo: _sequelize["default"].STRING,
  orden: _sequelize["default"].INTEGER,
  paginaid: _sequelize["default"].STRING,
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
  tableName: 'pagina'
});

Pagina.hasMany(Pagina, {
  foreignKey: 'paginaid',
  sourceKey: 'id'
});
Pagina.belongsTo(Pagina, {
  foreignKey: 'paginaid',
  sourceKey: 'id'
});
/* Pagina.hasMany(Accion, { foreignKey: 'paginaid', sourceKey: 'id' });
Accion.belongsTo(Pagina, { foreignKey: 'paginaid', sourceKey: 'id' }); */

/* Pagina.hasMany(Permiso, { foreignKey: 'paginaid', sourceKey: 'id' });
Permiso.belongsTo(Pagina, { foreignKey: 'paginaid', sourceKey: 'id' }); */

Pagina.hasMany(_PaginaAccion["default"], {
  foreignKey: 'paginaid',
  sourceKey: 'id'
});

_PaginaAccion["default"].belongsTo(Pagina, {
  foreignKey: 'paginaid',
  sourceKey: 'id'
});

var _default = Pagina;
exports["default"] = _default;