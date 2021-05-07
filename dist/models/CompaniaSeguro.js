"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Poliza = _interopRequireDefault(require("./Poliza"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CompaniaSeguro = _database.sequelize.define('CompaniaSeguro', {
  id: {
    //defaultValue: Sequelize.literal('uuid_generate_v4()'),
    type: _sequelize["default"].STRING,
    primaryKey: true
  },
  nombre: _sequelize["default"].STRING,
  descripcion: _sequelize["default"].STRING,
  nit: _sequelize["default"].STRING,
  representanteLegal: {
    type: _sequelize["default"].STRING,
    field: 'representante_legal'
  },
  direccion: _sequelize["default"].STRING,
  telefono1: _sequelize["default"].STRING,
  telefono2: _sequelize["default"].STRING,
  web: _sequelize["default"].STRING,
  ciaSpvs: {
    type: _sequelize["default"].STRING,
    field: 'cia_spvs'
  },
  nrocuenta: _sequelize["default"].STRING,
  banco1: _sequelize["default"].STRING,
  tipomoneda1: _sequelize["default"].STRING,
  nrocuenta2: _sequelize["default"].STRING,
  banco2: _sequelize["default"].STRING,
  tipomoneda2: _sequelize["default"].STRING,
  empresaid: _sequelize["default"].STRING,
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
  tableName: 'compania_seguro'
});

CompaniaSeguro.hasMany(_Poliza["default"], {
  foreignKey: 'accionid',
  sourceKey: 'id'
});

_Poliza["default"].belongsTo(CompaniaSeguro, {
  foreignKey: 'accionid',
  sourceKey: 'id'
});

var _default = CompaniaSeguro;
exports["default"] = _default;