"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
var _database = require("../database/database");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Archivo = _database.sequelize.define('Archivo', {
  id: {
    //defaultValue: Sequelize.literal('uuid_generate_v4()'),
    type: _sequelize["default"].STRING,
    primaryKey: true
  },
  nombre: _sequelize["default"].STRING,
  descripcion: _sequelize["default"].STRING,
  extension: _sequelize["default"].STRING,
  archivo: _sequelize["default"].BLOB,
  tipo: _sequelize["default"].STRING,
  codigo: _sequelize["default"].STRING,
  aseguradoid: _sequelize["default"].STRING,
  sucursalid: _sequelize["default"].STRING,
  carpetaid: _sequelize["default"].STRING,
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
  tableName: 'archivo'
});

/* Archivo.hasMany(Permiso, { foreignKey: 'perfilid', sourceKey: 'id' });
Permiso.belongsTo(Archivo, { foreignKey: 'perfilid', sourceKey: 'id' });


Archivo.hasMany(UsuarioArchivo, { foreignKey: 'perfilid', sourceKey: 'id' });
UsuarioArchivo.belongsTo(Archivo, { foreignKey: 'perfilid', sourceKey: 'id' }); */
var _default = Archivo;
exports["default"] = _default;