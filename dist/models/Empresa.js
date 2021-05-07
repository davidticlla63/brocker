"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Sucursal = _interopRequireDefault(require("./Sucursal"));

var _Perfil = _interopRequireDefault(require("./Perfil"));

var _AreaTrabajo = _interopRequireDefault(require("./AreaTrabajo"));

var _Usuario = _interopRequireDefault(require("./Usuario"));

var _Departamento = _interopRequireDefault(require("./Departamento"));

var _CompaniaSeguro = _interopRequireDefault(require("./CompaniaSeguro"));

var _Ramo = _interopRequireDefault(require("./Ramo"));

var _TipoRamo = _interopRequireDefault(require("./TipoRamo"));

var _Banco = _interopRequireDefault(require("./Banco"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Empresa = _database.sequelize.define('Empresa', {
  id: {
    //defaultValue: Sequelize.literal('uuid_generate_v4()'),
    type: _sequelize["default"].STRING,
    primaryKey: true
  },
  razonsocial: {
    type: _sequelize["default"].STRING,
    allowNull: false,
    length: 3000
  },
  descripcion: {
    type: _sequelize["default"].STRING,
    length: 3000
  },
  telefono: _sequelize["default"].STRING,
  nit: _sequelize["default"].STRING,
  representante: _sequelize["default"].STRING,
  //logo:Sequelize.STRING,
  logo: {
    type: _sequelize["default"].BLOB
    /*   get() {
         if  (this.getDataValue('logo'))
         
         return this.getDataValue('logo').toString('utf8'); // or whatever encoding is right
         else
         return null;
       },  */

  },
  usuarioregistro: _sequelize["default"].STRING,
  usuariomodificacion: _sequelize["default"].STRING,
  fecharegistro: _sequelize["default"].DATE(6),
  fechamodificacion: _sequelize["default"].DATE(6),
  estado: _sequelize["default"].STRING
}, {
  timestamps: false,
  tableName: 'empresa'
});

Empresa.hasMany(_Sucursal["default"], {
  foreignKey: 'empresaid',
  sourceKey: 'id'
});

_Sucursal["default"].belongsTo(Empresa, {
  foreignKey: 'empresaid',
  sourceKey: 'id'
});

Empresa.hasMany(_Perfil["default"], {
  foreignKey: 'empresaid',
  sourceKey: 'id'
});

_Perfil["default"].belongsTo(Empresa, {
  foreignKey: 'empresaid',
  sourceKey: 'id'
});

Empresa.hasMany(_AreaTrabajo["default"], {
  foreignKey: 'empresaid',
  sourceKey: 'id'
});

_AreaTrabajo["default"].belongsTo(Empresa, {
  foreignKey: 'empresaid',
  sourceKey: 'id'
});

Empresa.hasMany(_Usuario["default"], {
  foreignKey: 'empresaid',
  sourceKey: 'id'
});

_Usuario["default"].belongsTo(Empresa, {
  foreignKey: 'empresaid',
  sourceKey: 'id'
});

Empresa.hasMany(_Departamento["default"], {
  foreignKey: 'empresaid',
  sourceKey: 'id'
});

_Departamento["default"].belongsTo(Empresa, {
  foreignKey: 'empresaid',
  sourceKey: 'id'
});

Empresa.hasMany(_CompaniaSeguro["default"], {
  foreignKey: 'empresaid',
  sourceKey: 'id'
});

_CompaniaSeguro["default"].belongsTo(Empresa, {
  foreignKey: 'empresaid',
  sourceKey: 'id'
});

Empresa.hasMany(_Ramo["default"], {
  foreignKey: 'empresaid',
  sourceKey: 'id'
});

_Ramo["default"].belongsTo(Empresa, {
  foreignKey: 'empresaid',
  sourceKey: 'id'
});

Empresa.hasMany(_TipoRamo["default"], {
  foreignKey: 'empresaid',
  sourceKey: 'id'
});

_TipoRamo["default"].belongsTo(Empresa, {
  foreignKey: 'empresaid',
  sourceKey: 'id'
});

Empresa.hasMany(_Banco["default"], {
  foreignKey: 'empresaid',
  sourceKey: 'id'
});

_Banco["default"].belongsTo(Empresa, {
  foreignKey: 'empresaid',
  sourceKey: 'id'
});

var _default = Empresa;
exports["default"] = _default;