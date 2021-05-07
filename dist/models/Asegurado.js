"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Poliza = _interopRequireDefault(require("./Poliza"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Asegurado = _database.sequelize.define('Asegurado', {
  id: {
    //defaultValue: Sequelize.literal('uuid_generate_v4()'),
    type: _sequelize["default"].STRING,
    primaryKey: true
  },
  tipoasegurado: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
  apellidopaterno: _sequelize["default"].STRING,
  apellidomaterno: _sequelize["default"].STRING,
  nombres: _sequelize["default"].STRING,
  nombrecompleto: _sequelize["default"].STRING,
  ci: _sequelize["default"].STRING,
  nit: _sequelize["default"].STRING,
  sexo: _sequelize["default"].STRING,
  telefonoasegurado: _sequelize["default"].STRING,
  telefonodomicilio: _sequelize["default"].STRING,
  telefonotrabajo: _sequelize["default"].STRING,
  correo: _sequelize["default"].STRING,
  fotografia: _sequelize["default"].BLOB,
  direccionasegurado: _sequelize["default"].STRING,
  fechanacimiento: _sequelize["default"].DATE,
  fechavencimientocarnet: _sequelize["default"].DATE,
  fechavencimientobrevet: _sequelize["default"].DATE,
  fechavencimientofundempresa: _sequelize["default"].DATE,
  relacionasegurado: _sequelize["default"].STRING,
  cargorepresentante: _sequelize["default"].STRING,
  //personalcobranza:Sequelize.STRING,
  apellidopaternocobranza: _sequelize["default"].STRING,
  apellidomaternocobranza: _sequelize["default"].STRING,
  nombrescobranza: _sequelize["default"].STRING,
  nombrecompletocobranza: _sequelize["default"].STRING,
  telefonocobranza: _sequelize["default"].STRING,
  direccioncobranza: _sequelize["default"].STRING,
  //nombrerepresentante:Sequelize.STRING,
  apellidopaternorepresentante: _sequelize["default"].STRING,
  apellidomaternorepresentante: _sequelize["default"].STRING,
  nombresrepresentante: _sequelize["default"].STRING,
  nombrecompletorepresentante: _sequelize["default"].STRING,
  direccionrepresentante: _sequelize["default"].STRING,
  emailrepresentante: _sequelize["default"].STRING,
  telefonorepresentante: _sequelize["default"].STRING,
  celularrepresentante: _sequelize["default"].STRING,
  departamentoid: _sequelize["default"].STRING,
  sucursalid: _sequelize["default"].STRING,
  ejecutivoid: _sequelize["default"].STRING,
  carteraid: _sequelize["default"].STRING,
  usuarioregistro: _sequelize["default"].STRING,
  usuariomodificacion: _sequelize["default"].STRING,
  usuariobaja: _sequelize["default"].STRING,
  fecharegistro: _sequelize["default"].DATE(6),
  fechamodificacion: _sequelize["default"].DATE(6),
  fechabaja: _sequelize["default"].DATE(6),
  estado: {
    type: _sequelize["default"].STRING,
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'asegurado'
});

Asegurado.hasMany(_Poliza["default"], {
  foreignKey: 'aseguradoid',
  sourceKey: 'id'
});

_Poliza["default"].belongsTo(Asegurado, {
  foreignKey: 'aseguradoid',
  sourceKey: 'id'
});
/* 
Accion.hasMany(PaginaAccion, { foreignKey: 'paginaid', sourceKey: 'id' });
PaginaAccion.belongsTo(Accion, { foreignKey: 'paginaid', sourceKey: 'id' }); */

/* Asegurado.hasMany(Personal, { foreignKey: 'personalid', sourceKey: 'id' });
Personal.belongsTo(Asegurado, { foreignKey: 'personalid', sourceKey: 'id' }); */


var _default = Asegurado;
exports["default"] = _default;