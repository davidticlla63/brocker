"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAsegurados = getAsegurados;
exports.createAsegurado = createAsegurado;
exports.getOneAsegurado = getOneAsegurado;
exports.deleteAsegurado = deleteAsegurado;
exports.updateAsegurado = updateAsegurado;
exports.bajaAsegurado = bajaAsegurado;
exports.aseguradosPorSucursal = aseguradosPorSucursal;
exports.aseguradosPorSucursalYTipo = aseguradosPorSucursalYTipo;
exports.aseguradosPorEmpresaYTipo = aseguradosPorEmpresaYTipo;
exports.aseguradosPorSucursals = aseguradosPorSucursals;
exports.aseguradosPorEmpresas = aseguradosPorEmpresas;

var _database = require("../database/database");

var _Archivo = _interopRequireDefault(require("../models/Archivo"));

var _Asegurado = _interopRequireDefault(require("../models/Asegurado"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require('sequelize'),
    QueryTypes = _require.QueryTypes;

function getAsegurados(_x, _x2) {
  return _getAsegurados.apply(this, arguments);
}

function _getAsegurados() {
  _getAsegurados = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var asegurados;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Asegurado["default"].findAll({
              where: {
                estado: 'ACT'
              }
            });

          case 3:
            asegurados = _context.sent;
            res.json({
              data: asegurados
            });
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context.t0.message
              }
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _getAsegurados.apply(this, arguments);
}

function createAsegurado(_x3, _x4) {
  return _createAsegurado.apply(this, arguments);
}

function _createAsegurado() {
  _createAsegurado = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, tipoasegurado, apellidopaterno, apellidomaterno, nombres, nombrecompleto, ci, nit, sexo, telefonoasegurado, telefonodomicilio, telefonotrabajo, correo, fotografia, direccionasegurado, fechanacimiento, fechavencimientocarnet, fechavencimientobrevet, fechavencimientofundempresa, relacionasegurado, cargorepresentante, apellidopaternocobranza, apellidomaternocobranza, nombrescobranza, nombrecompletocobranza, telefonocobranza, direccioncobranza, apellidopaternorepresentante, apellidomaternorepresentante, nombresrepresentante, nombrecompletorepresentante, direccionrepresentante, emailrepresentante, telefonorepresentante, celularrepresentante, departamentoid, sucursalid, ejecutivoid, carteraid, usuarioregistro, usuariomodificacion, archivos, t, newAsegurado, i;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, tipoasegurado = _req$body.tipoasegurado, apellidopaterno = _req$body.apellidopaterno, apellidomaterno = _req$body.apellidomaterno, nombres = _req$body.nombres, nombrecompleto = _req$body.nombrecompleto, ci = _req$body.ci, nit = _req$body.nit, sexo = _req$body.sexo, telefonoasegurado = _req$body.telefonoasegurado, telefonodomicilio = _req$body.telefonodomicilio, telefonotrabajo = _req$body.telefonotrabajo, correo = _req$body.correo, fotografia = _req$body.fotografia, direccionasegurado = _req$body.direccionasegurado, fechanacimiento = _req$body.fechanacimiento, fechavencimientocarnet = _req$body.fechavencimientocarnet, fechavencimientobrevet = _req$body.fechavencimientobrevet, fechavencimientofundempresa = _req$body.fechavencimientofundempresa, relacionasegurado = _req$body.relacionasegurado, cargorepresentante = _req$body.cargorepresentante, apellidopaternocobranza = _req$body.apellidopaternocobranza, apellidomaternocobranza = _req$body.apellidomaternocobranza, nombrescobranza = _req$body.nombrescobranza, nombrecompletocobranza = _req$body.nombrecompletocobranza, telefonocobranza = _req$body.telefonocobranza, direccioncobranza = _req$body.direccioncobranza, apellidopaternorepresentante = _req$body.apellidopaternorepresentante, apellidomaternorepresentante = _req$body.apellidomaternorepresentante, nombresrepresentante = _req$body.nombresrepresentante, nombrecompletorepresentante = _req$body.nombrecompletorepresentante, direccionrepresentante = _req$body.direccionrepresentante, emailrepresentante = _req$body.emailrepresentante, telefonorepresentante = _req$body.telefonorepresentante, celularrepresentante = _req$body.celularrepresentante, departamentoid = _req$body.departamentoid, sucursalid = _req$body.sucursalid, ejecutivoid = _req$body.ejecutivoid, carteraid = _req$body.carteraid, usuarioregistro = _req$body.usuarioregistro, usuariomodificacion = _req$body.usuariomodificacion, archivos = _req$body.archivos;
            _context2.next = 3;
            return _database.sequelize.transaction();

          case 3:
            t = _context2.sent;
            _context2.prev = 4;
            _context2.next = 7;
            return _Asegurado["default"].create({
              tipoasegurado: tipoasegurado,
              apellidopaterno: apellidopaterno,
              apellidomaterno: apellidomaterno,
              nombres: nombres,
              nombrecompleto: nombrecompleto,
              ci: ci,
              nit: nit,
              sexo: sexo,
              telefonoasegurado: telefonoasegurado,
              telefonodomicilio: telefonodomicilio,
              telefonotrabajo: telefonotrabajo,
              correo: correo,
              fotografia: fotografia,
              direccionasegurado: direccionasegurado,
              fechanacimiento: fechanacimiento,
              //fechavencimientocarnet:fechavencimientocarnet==null?null:fechavencimientocarnet,
              fechavencimientocarnet: fechavencimientocarnet,
              fechavencimientobrevet: fechavencimientobrevet,
              fechavencimientofundempresa: fechavencimientofundempresa,
              relacionasegurado: relacionasegurado,
              cargorepresentante: cargorepresentante,
              //personalcobranza,
              apellidopaternocobranza: apellidopaternocobranza,
              apellidomaternocobranza: apellidomaternocobranza,
              nombrescobranza: nombrescobranza,
              nombrecompletocobranza: nombrecompletocobranza,
              telefonocobranza: telefonocobranza,
              direccioncobranza: direccioncobranza,
              //nombrerepresentante,
              apellidopaternorepresentante: apellidopaternorepresentante,
              apellidomaternorepresentante: apellidomaternorepresentante,
              nombresrepresentante: nombresrepresentante,
              nombrecompletorepresentante: nombrecompletorepresentante,
              direccionrepresentante: direccionrepresentante,
              emailrepresentante: emailrepresentante,
              telefonorepresentante: telefonorepresentante,
              celularrepresentante: celularrepresentante,
              departamentoid: departamentoid,
              sucursalid: sucursalid,
              ejecutivoid: ejecutivoid,
              carteraid: carteraid,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: new Date(),
              fechamodificacion: new Date(),
              estado: 'ACT'
            }, {
              fields: ['tipoasegurado', 'apellidopaterno', 'apellidomaterno', 'nombres', 'nombrecompleto', 'ci', 'nit', 'sexo', 'telefonoasegurado', 'telefonodomicilio', 'telefonotrabajo', 'correo', 'fotografia', 'direccionasegurado', 'fechanacimiento', 'fechavencimientocarnet', 'fechavencimientobrevet', 'fechavencimientofundempresa', 'relacionasegurado', 'cargorepresentante', //personalcobranza,
              'apellidopaternocobranza', 'apellidomaternocobranza', 'nombrescobranza', 'nombrecompletocobranza', 'telefonocobranza', 'direccioncobranza', //nombrerepresentante,
              'apellidopaternorepresentante', 'apellidomaternorepresentante', 'nombresrepresentante', 'nombrecompletorepresentante', 'direccionrepresentante', 'emailrepresentante', 'telefonorepresentante', 'celularrepresentante', 'departamentoid', 'sucursalid', 'ejecutivoid', 'carteraid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado']
            }, {
              transaction: t
            });

          case 7:
            newAsegurado = _context2.sent;
            i = 0;

          case 9:
            if (!(i < archivos.length)) {
              _context2.next = 15;
              break;
            }

            _context2.next = 12;
            return _Archivo["default"].create({
              codigo: newAsegurado.id,
              nombre: archivos[i].nombre,
              descripcion: archivos[i].nombre,
              extension: archivos[i].extension,
              archivo: archivos[i].archivo,
              aseguradoid: newAsegurado.id,
              sucursalid: sucursalid,
              carpetaid: archivos[i].carpetaid,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuarioregistro,
              fecharegistro: new Date(),
              fechamodificacion: new Date(),
              estado: 'ACT'
            }, {
              fields: ['codigo', 'nombre', 'descripcion', 'extension', 'archivo', 'aseguradoid', 'sucursalid', 'carpetaid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado']
            }, {
              transaction: t
            });

          case 12:
            i++;
            _context2.next = 9;
            break;

          case 15:
            _context2.next = 17;
            return t.commit();

          case 17:
            if (!newAsegurado) {
              _context2.next = 19;
              break;
            }

            return _context2.abrupt("return", res.json({
              message: 'Asegurado created successfully',
              data: newAsegurado
            }));

          case 19:
            _context2.next = 31;
            break;

          case 21:
            _context2.prev = 21;
            _context2.t0 = _context2["catch"](4);
            console.log(_context2.t0);

            if (!t) {
              _context2.next = 30;
              break;
            }

            _context2.next = 27;
            return t.rollback();

          case 27:
            if (!newAsegurado) {
              _context2.next = 30;
              break;
            }

            _context2.next = 30;
            return _Asegurado["default"].destroy({
              where: {
                id: newAsegurado.id
              }
            });

          case 30:
            res.status(500).json({
              data: {
                estado: false,
                "error": _context2.t0.message
              }
            });

          case 31:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[4, 21]]);
  }));
  return _createAsegurado.apply(this, arguments);
}

function getOneAsegurado(_x5, _x6) {
  return _getOneAsegurado.apply(this, arguments);
}

function _getOneAsegurado() {
  _getOneAsegurado = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, asegurado;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _Asegurado["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            asegurado = _context3.sent;
            res.json({
              data: asegurado
            });
            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context3.t0.message
              }
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return _getOneAsegurado.apply(this, arguments);
}

function deleteAsegurado(_x7, _x8) {
  return _deleteAsegurado.apply(this, arguments);
}

function _deleteAsegurado() {
  _deleteAsegurado = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _Asegurado["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context4.sent;
            res.json({
              message: 'Asegurado deleted successfully',
              count: deleteRowCount
            });
            _context4.next = 12;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context4.t0.message
              }
            });

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 8]]);
  }));
  return _deleteAsegurado.apply(this, arguments);
}

function updateAsegurado(_x9, _x10) {
  return _updateAsegurado.apply(this, arguments);
}

function _updateAsegurado() {
  _updateAsegurado = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, _req$body2, tipoasegurado, apellidopaterno, apellidomaterno, nombres, nombrecompleto, ci, nit, sexo, telefonoasegurado, telefonodomicilio, telefonotrabajo, correo, fotografia, direccionasegurado, fechanacimiento, fechavencimientocarnet, fechavencimientobrevet, fechavencimientofundempresa, relacionasegurado, cargorepresentante, apellidopaternocobranza, apellidomaternocobranza, nombrescobranza, nombrecompletocobranza, telefonocobranza, direccioncobranza, apellidopaternorepresentante, apellidomaternorepresentante, nombresrepresentante, nombrecompletorepresentante, direccionrepresentante, emailrepresentante, telefonorepresentante, celularrepresentante, departamentoid, sucursalid, ejecutivoid, carteraid, usuariomodificacion, estado, archivos, archivoseliminados, t, updateRowCount, i, _i, asegurados;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, tipoasegurado = _req$body2.tipoasegurado, apellidopaterno = _req$body2.apellidopaterno, apellidomaterno = _req$body2.apellidomaterno, nombres = _req$body2.nombres, nombrecompleto = _req$body2.nombrecompleto, ci = _req$body2.ci, nit = _req$body2.nit, sexo = _req$body2.sexo, telefonoasegurado = _req$body2.telefonoasegurado, telefonodomicilio = _req$body2.telefonodomicilio, telefonotrabajo = _req$body2.telefonotrabajo, correo = _req$body2.correo, fotografia = _req$body2.fotografia, direccionasegurado = _req$body2.direccionasegurado, fechanacimiento = _req$body2.fechanacimiento, fechavencimientocarnet = _req$body2.fechavencimientocarnet, fechavencimientobrevet = _req$body2.fechavencimientobrevet, fechavencimientofundempresa = _req$body2.fechavencimientofundempresa, relacionasegurado = _req$body2.relacionasegurado, cargorepresentante = _req$body2.cargorepresentante, apellidopaternocobranza = _req$body2.apellidopaternocobranza, apellidomaternocobranza = _req$body2.apellidomaternocobranza, nombrescobranza = _req$body2.nombrescobranza, nombrecompletocobranza = _req$body2.nombrecompletocobranza, telefonocobranza = _req$body2.telefonocobranza, direccioncobranza = _req$body2.direccioncobranza, apellidopaternorepresentante = _req$body2.apellidopaternorepresentante, apellidomaternorepresentante = _req$body2.apellidomaternorepresentante, nombresrepresentante = _req$body2.nombresrepresentante, nombrecompletorepresentante = _req$body2.nombrecompletorepresentante, direccionrepresentante = _req$body2.direccionrepresentante, emailrepresentante = _req$body2.emailrepresentante, telefonorepresentante = _req$body2.telefonorepresentante, celularrepresentante = _req$body2.celularrepresentante, departamentoid = _req$body2.departamentoid, sucursalid = _req$body2.sucursalid, ejecutivoid = _req$body2.ejecutivoid, carteraid = _req$body2.carteraid, usuariomodificacion = _req$body2.usuariomodificacion, estado = _req$body2.estado, archivos = _req$body2.archivos, archivoseliminados = _req$body2.archivoseliminados;
            _context5.next = 4;
            return _database.sequelize.transaction();

          case 4:
            t = _context5.sent;
            _context5.prev = 5;
            _context5.next = 8;
            return _Asegurado["default"].update({
              tipoasegurado: tipoasegurado,
              apellidopaterno: apellidopaterno,
              apellidomaterno: apellidomaterno,
              nombres: nombres,
              nombrecompleto: nombrecompleto,
              ci: ci,
              nit: nit,
              sexo: sexo,
              telefonoasegurado: telefonoasegurado,
              telefonodomicilio: telefonodomicilio,
              telefonotrabajo: telefonotrabajo,
              correo: correo,
              fotografia: fotografia,
              direccionasegurado: direccionasegurado,
              fechanacimiento: fechanacimiento,
              fechavencimientocarnet: fechavencimientocarnet,
              fechavencimientobrevet: fechavencimientobrevet,
              fechavencimientofundempresa: fechavencimientofundempresa,
              relacionasegurado: relacionasegurado,
              cargorepresentante: cargorepresentante,
              //personalcobranza,
              apellidopaternocobranza: apellidopaternocobranza,
              apellidomaternocobranza: apellidomaternocobranza,
              nombrescobranza: nombrescobranza,
              nombrecompletocobranza: nombrecompletocobranza,
              telefonocobranza: telefonocobranza,
              direccioncobranza: direccioncobranza,
              //nombrerepresentante,
              apellidopaternorepresentante: apellidopaternorepresentante,
              apellidomaternorepresentante: apellidomaternorepresentante,
              nombresrepresentante: nombresrepresentante,
              nombrecompletorepresentante: nombrecompletorepresentante,
              direccionrepresentante: direccionrepresentante,
              emailrepresentante: emailrepresentante,
              telefonorepresentante: telefonorepresentante,
              celularrepresentante: celularrepresentante,
              departamentoid: departamentoid,
              sucursalid: sucursalid,
              ejecutivoid: ejecutivoid,
              carteraid: carteraid,
              usuariomodificacion: usuariomodificacion,
              fechamodificacion: new Date(),
              estado: estado
            }, {
              where: {
                id: id
              }
            }, {
              transaction: t
            });

          case 8:
            updateRowCount = _context5.sent;
            i = 0;

          case 10:
            if (!(i < archivoseliminados.length)) {
              _context5.next = 16;
              break;
            }

            _context5.next = 13;
            return _Archivo["default"].update({
              estado: 'BAJ',
              fechamodificacion: new Date()
            }, {
              where: {
                id: archivoseliminados[i].id
              }
            }, {
              transaction: t
            });

          case 13:
            i++;
            _context5.next = 10;
            break;

          case 16:
            _i = 0;

          case 17:
            if (!(_i < archivos.length)) {
              _context5.next = 23;
              break;
            }

            _context5.next = 20;
            return _Archivo["default"].create({
              codigo: id,
              nombre: archivos[_i].nombre,
              descripcion: archivos[_i].nombre,
              extension: archivos[_i].extension,
              archivo: archivos[_i].archivo,
              aseguradoid: id,
              sucursalid: sucursalid,
              carpetaid: archivos[_i].carpetaid,
              usuarioregistro: usuariomodificacion,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: new Date(),
              fechamodificacion: new Date(),
              estado: 'ACT'
            }, {
              fields: ['codigo', 'nombre', 'descripcion', 'extension', 'archivo', 'aseguradoid', 'sucursalid', 'carpetaid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado']
            }, {
              transaction: t
            });

          case 20:
            _i++;
            _context5.next = 17;
            break;

          case 23:
            _context5.next = 25;
            return t.commit();

          case 25:
            _context5.next = 27;
            return _Asegurado["default"].findOne({
              where: {
                id: id
              }
            });

          case 27:
            asegurados = _context5.sent;
            res.json({
              message: 'Asegurado update successfully',
              count: asegurados
            });
            _context5.next = 38;
            break;

          case 31:
            _context5.prev = 31;
            _context5.t0 = _context5["catch"](5);
            console.log(_context5.t0);

            if (!t) {
              _context5.next = 37;
              break;
            }

            _context5.next = 37;
            return t.rollback();

          case 37:
            res.status(500).json({
              data: {
                estado: false,
                "error": _context5.t0.message
              }
            });

          case 38:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[5, 31]]);
  }));
  return _updateAsegurado.apply(this, arguments);
}

function bajaAsegurado(_x11, _x12) {
  return _bajaAsegurado.apply(this, arguments);
}

function _bajaAsegurado() {
  _bajaAsegurado = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, usuariobaja, updateRowCount, asegurados;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            usuariobaja = req.body.usuariobaja;
            _context6.prev = 2;
            _context6.next = 5;
            return _Asegurado["default"].update({
              usuariobaja: usuariobaja,

              /*  fechamodificacion:moment().format(), */
              fechambaja: new Date(),
              estado: 'BAJ'
            }, {
              where: {
                id: id
              }
            });

          case 5:
            updateRowCount = _context6.sent;
            _context6.next = 8;
            return _Asegurado["default"].findOne({
              where: {
                id: id
              }
            });

          case 8:
            asegurados = _context6.sent;
            res.json({
              message: 'Asegurado baja successfully',
              count: asegurados
            });
            _context6.next = 16;
            break;

          case 12:
            _context6.prev = 12;
            _context6.t0 = _context6["catch"](2);
            console.log(_context6.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context6.t0.message
              }
            });

          case 16:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[2, 12]]);
  }));
  return _bajaAsegurado.apply(this, arguments);
}

function aseguradosPorSucursal(_x13, _x14) {
  return _aseguradosPorSucursal.apply(this, arguments);
}

function _aseguradosPorSucursal() {
  _aseguradosPorSucursal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var sucursalid, asegurados;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            sucursalid = req.params.sucursalid;
            _context7.next = 4;
            return _Asegurado["default"].findAll({
              where: {
                estado: 'ACT',
                sucursalid: sucursalid
              }
            });

          case 4:
            asegurados = _context7.sent;
            res.json({
              data: asegurados
            });
            _context7.next = 12;
            break;

          case 8:
            _context7.prev = 8;
            _context7.t0 = _context7["catch"](0);
            console.log(_context7.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context7.t0.message
              }
            });

          case 12:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 8]]);
  }));
  return _aseguradosPorSucursal.apply(this, arguments);
}

function aseguradosPorSucursalYTipo(_x15, _x16) {
  return _aseguradosPorSucursalYTipo.apply(this, arguments);
}

function _aseguradosPorSucursalYTipo() {
  _aseguradosPorSucursalYTipo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
    var _req$params, sucursalid, tipoasegurado, string, asegurados;

    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _req$params = req.params, sucursalid = _req$params.sucursalid, tipoasegurado = _req$params.tipoasegurado;
            string = "select a.*, e.nombrecompleto as ejecutivo, c.nombrecompleto as cartera, d.nombre departamento " + " from asegurado a " + "inner join personal e on e.id=a.ejecutivoid " + "inner join personal c on c.id = a.carteraid " + "inner join departamento d on d.id = a.departamentoid " + " where a.sucursalid='" + sucursalid + "' and a.tipoasegurado='" + tipoasegurado + "' and a.estado='ACT' order by a.nombrecompleto "; //console.log(string)

            _context8.next = 5;
            return _database.sequelize.query(string, {
              type: QueryTypes.SELECT
            });

          case 5:
            asegurados = _context8.sent;
            res.json(asegurados);
            _context8.next = 13;
            break;

          case 9:
            _context8.prev = 9;
            _context8.t0 = _context8["catch"](0);
            console.log(_context8.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context8.t0.message
              }
            });

          case 13:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 9]]);
  }));
  return _aseguradosPorSucursalYTipo.apply(this, arguments);
}

function aseguradosPorEmpresaYTipo(_x17, _x18) {
  return _aseguradosPorEmpresaYTipo.apply(this, arguments);
}

function _aseguradosPorEmpresaYTipo() {
  _aseguradosPorEmpresaYTipo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(req, res) {
    var _req$params2, empresaid, tipoasegurado, query, asegurados;

    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _req$params2 = req.params, empresaid = _req$params2.empresaid, tipoasegurado = _req$params2.tipoasegurado; //const asegurados = await Asegurado.findAll({ where: { estado: 'ACT',sucursalid,tipoasegurado }});

            query = "select a.*, ej.nombrecompleto as ejecutivo, c.nombrecompleto as cartera, d.nombre departamento " + "from asegurado a " + "inner join sucursal s on s.id=a.sucursalid " + " inner join empresa e on e.id=s.empresaid " + "inner join personal ej on ej.id=a.ejecutivoid " + "inner join personal c on c.id = a.carteraid " + "inner join departamento d on d.id = a.departamentoid " + "where e.id='" + empresaid + "' and a.tipoasegurado='" + tipoasegurado + "' and a.estado='ACT' order by a.nombrecompleto ";
            console.log(query);
            _context9.next = 6;
            return _database.sequelize.query(query, {
              type: QueryTypes.SELECT
            });

          case 6:
            asegurados = _context9.sent;
            res.json(asegurados);
            _context9.next = 14;
            break;

          case 10:
            _context9.prev = 10;
            _context9.t0 = _context9["catch"](0);
            console.log(_context9.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context9.t0.message
              }
            });

          case 14:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[0, 10]]);
  }));
  return _aseguradosPorEmpresaYTipo.apply(this, arguments);
}

function aseguradosPorSucursals(_x19, _x20) {
  return _aseguradosPorSucursals.apply(this, arguments);
}

function _aseguradosPorSucursals() {
  _aseguradosPorSucursals = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(req, res) {
    var sucursalid, string, asegurados;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            sucursalid = req.params.sucursalid;
            string = "select a.id,a.nombrecompleto,a.tipoasegurado,e.id as ejecutivoid, e.nombrecompleto as ejecutivo,c.id as carteraid, c.nombrecompleto as cartera,d.id as departamentoid, d.nombre departamento " + " from asegurado a " + "inner join personal e on e.id=a.ejecutivoid " + "inner join personal c on c.id = a.carteraid " + "inner join departamento d on d.id = a.departamentoid " + " where a.sucursalid='" + sucursalid + "' and a.estado='ACT' order by a.nombrecompleto "; //console.log(string)

            _context10.next = 5;
            return _database.sequelize.query(string, {
              type: QueryTypes.SELECT
            });

          case 5:
            asegurados = _context10.sent;
            res.json(asegurados);
            _context10.next = 13;
            break;

          case 9:
            _context10.prev = 9;
            _context10.t0 = _context10["catch"](0);
            console.log(_context10.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context10.t0.message
              }
            });

          case 13:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[0, 9]]);
  }));
  return _aseguradosPorSucursals.apply(this, arguments);
}

function aseguradosPorEmpresas(_x21, _x22) {
  return _aseguradosPorEmpresas.apply(this, arguments);
}

function _aseguradosPorEmpresas() {
  _aseguradosPorEmpresas = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(req, res) {
    var empresaid, query, asegurados;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            empresaid = req.params.empresaid; //const asegurados = await Asegurado.findAll({ where: { estado: 'ACT',sucursalid,tipoasegurado }});

            query = "select a.id,a.nombrecompleto,a.tipoasegurado,ej.id as ejecutivoid, ej.nombrecompleto as ejecutivo,c.id as carteraid, c.nombrecompleto as cartera,d.id as departamentoid, d.nombre departamento " + "from asegurado a " + "inner join sucursal s on s.id=a.sucursalid " + " inner join empresa e on e.id=s.empresaid " + "inner join personal ej on ej.id=a.ejecutivoid " + "inner join personal c on c.id = a.carteraid " + "inner join departamento d on d.id = a.departamentoid " + "where e.id='" + empresaid + "' and a.estado='ACT' order by a.nombrecompleto ";
            console.log(query);
            _context11.next = 6;
            return _database.sequelize.query(query, {
              type: QueryTypes.SELECT
            });

          case 6:
            asegurados = _context11.sent;
            res.json(asegurados);
            _context11.next = 14;
            break;

          case 10:
            _context11.prev = 10;
            _context11.t0 = _context11["catch"](0);
            console.log(_context11.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context11.t0.message
              }
            });

          case 14:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[0, 10]]);
  }));
  return _aseguradosPorEmpresas.apply(this, arguments);
}