"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
var _database = require("../database/database");
var _SucursalUsuario = _interopRequireDefault(require("./SucursalUsuario"));
var _UsuarioPerfil = _interopRequireDefault(require("./UsuarioPerfil"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Usuario = _database.sequelize.define('Usuario', {
  id: {
    //defaultValue: Sequelize.literal('uuid_generate_v4()'),
    type: _sequelize["default"].STRING,
    primaryKey: true
  },
  //nombrecompleto: Sequelize.STRING,
  nick: _sequelize["default"].STRING,
  password: _sequelize["default"].STRING,
  usuarioregistro: _sequelize["default"].STRING,
  usuariomodificacion: _sequelize["default"].STRING,
  fecharegistro: _sequelize["default"].DATE(6),
  fechamodificacion: _sequelize["default"].DATE(6),
  estado: _sequelize["default"].STRING,
  empresaid: _sequelize["default"].STRING,
  personalid: _sequelize["default"].STRING
}, {
  timestamps: false,
  tableName: 'usuario'
});
Usuario.hasMany(_SucursalUsuario["default"], {
  foreignKey: 'usuarioid',
  sourceKey: 'id'
});
_SucursalUsuario["default"].belongsTo(Usuario, {
  foreignKey: 'usuarioid',
  sourceKey: 'id'
});
Usuario.hasMany(_UsuarioPerfil["default"], {
  foreignKey: 'usuarioid',
  sourceKey: 'id'
});
_UsuarioPerfil["default"].belongsTo(Usuario, {
  foreignKey: 'usuarioid',
  sourceKey: 'id'
});

/* 
Usuario.prototype.generatePasswordHash = async function() {
    const saltRounds = 10;
    return await bcrypt.hash(this.password, saltRounds)
  };


  Usuario.prototype.validatePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
  };
 */
var _default = exports["default"] = Usuario;