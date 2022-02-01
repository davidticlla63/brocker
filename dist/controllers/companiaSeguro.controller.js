"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCompaniaSeguros = getCompaniaSeguros;
exports.getCompaniaSegurosPorEmpresa = getCompaniaSegurosPorEmpresa;
exports.createCompaniaSeguro = createCompaniaSeguro;
exports.getOneCompaniaSeguro = getOneCompaniaSeguro;
exports.deleteCompaniaSeguro = deleteCompaniaSeguro;
exports.updateCompaniaSeguro = updateCompaniaSeguro;
exports.bajaCompaniaSeguro = bajaCompaniaSeguro;

var _CompaniaSeguro = _interopRequireDefault(require("../models/CompaniaSeguro"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getCompaniaSeguros(_x, _x2) {
  return _getCompaniaSeguros.apply(this, arguments);
}

function _getCompaniaSeguros() {
  _getCompaniaSeguros = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var companiaSeguros;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _CompaniaSeguro["default"].findAll({
              where: {
                estado: 'ACT'
              },
              order: [['fechamodificacion', 'DESC']]
            });

          case 3:
            companiaSeguros = _context.sent;
            res.json({
              data: companiaSeguros
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _getCompaniaSeguros.apply(this, arguments);
}

function getCompaniaSegurosPorEmpresa(_x3, _x4) {
  return _getCompaniaSegurosPorEmpresa.apply(this, arguments);
}

function _getCompaniaSegurosPorEmpresa() {
  _getCompaniaSegurosPorEmpresa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var empresaid, companiaSeguros;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            empresaid = req.params.empresaid;
            _context2.prev = 1;
            _context2.next = 4;
            return _CompaniaSeguro["default"].findAll({
              where: {
                estado: 'ACT',
                empresaid: empresaid
              },
              order: [['fechamodificacion', 'DESC']]
            });

          case 4:
            companiaSeguros = _context2.sent;
            res.json({
              data: companiaSeguros
            });
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return _getCompaniaSegurosPorEmpresa.apply(this, arguments);
}

function createCompaniaSeguro(_x5, _x6) {
  return _createCompaniaSeguro.apply(this, arguments);
}

function _createCompaniaSeguro() {
  _createCompaniaSeguro = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, nombre, descripcion, nit, representanteLegal, direccion, telefono1, telefono2, web, ciaSpvs, nrocuenta, banco1, tipomoneda1, nrocuenta2, banco2, tipomoneda2, empresaid, usuarioregistro, usuariomodificacion, _req$body$fecharegist, fecharegistro, fechamodificacion, estado, newCompaniaSeguro;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, nombre = _req$body.nombre, descripcion = _req$body.descripcion, nit = _req$body.nit, representanteLegal = _req$body.representanteLegal, direccion = _req$body.direccion, telefono1 = _req$body.telefono1, telefono2 = _req$body.telefono2, web = _req$body.web, ciaSpvs = _req$body.ciaSpvs, nrocuenta = _req$body.nrocuenta, banco1 = _req$body.banco1, tipomoneda1 = _req$body.tipomoneda1, nrocuenta2 = _req$body.nrocuenta2, banco2 = _req$body.banco2, tipomoneda2 = _req$body.tipomoneda2, empresaid = _req$body.empresaid, usuarioregistro = _req$body.usuarioregistro, usuariomodificacion = _req$body.usuariomodificacion, _req$body$fecharegist = _req$body.fecharegistro, fecharegistro = _req$body$fecharegist === void 0 ? new Date() : _req$body$fecharegist, fechamodificacion = _req$body.fechamodificacion, estado = _req$body.estado;
            _context3.prev = 1;
            _context3.next = 4;
            return _CompaniaSeguro["default"].create({
              nombre: nombre,
              descripcion: descripcion,
              nit: nit,
              representanteLegal: representanteLegal,
              direccion: direccion,
              telefono1: telefono1,
              telefono2: telefono2,
              web: web,
              ciaSpvs: ciaSpvs,
              nrocuenta: nrocuenta,
              banco1: banco1,
              tipomoneda1: tipomoneda1,
              nrocuenta2: nrocuenta2,
              banco2: banco2,
              tipomoneda2: tipomoneda2,
              empresaid: empresaid,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: fecharegistro,
              fechamodificacion: fechamodificacion,
              estado: estado
            }, {
              fields: ['nombre', 'descripcion', 'nit', 'representanteLegal', 'direccion', 'telefono1', 'telefono2', 'web', 'ciaSpvs', 'nrocuenta', 'banco1', 'tipomoneda1', 'nrocuenta2', 'banco2', 'tipomoneda2', 'empresaid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado']
            });

          case 4:
            newCompaniaSeguro = _context3.sent;

            if (!newCompaniaSeguro) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.json({
              message: 'CompaniaSeguro created successfully',
              data: newCompaniaSeguro
            }));

          case 7:
            _context3.next = 13;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            res.status(500).json({
              message: 'Something goes wrong',
              data: {}
            });

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 9]]);
  }));
  return _createCompaniaSeguro.apply(this, arguments);
}

function getOneCompaniaSeguro(_x7, _x8) {
  return _getOneCompaniaSeguro.apply(this, arguments);
}

function _getOneCompaniaSeguro() {
  _getOneCompaniaSeguro = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, usuario;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _CompaniaSeguro["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            usuario = _context4.sent;
            res.json({
              data: usuario
            });
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 8]]);
  }));
  return _getOneCompaniaSeguro.apply(this, arguments);
}

function deleteCompaniaSeguro(_x9, _x10) {
  return _deleteCompaniaSeguro.apply(this, arguments);
}

function _deleteCompaniaSeguro() {
  _deleteCompaniaSeguro = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return _CompaniaSeguro["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context5.sent;
            res.json({
              message: 'CompaniaSeguro deleted successfully',
              count: deleteRowCount
            });
            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 8]]);
  }));
  return _deleteCompaniaSeguro.apply(this, arguments);
}

function updateCompaniaSeguro(_x11, _x12) {
  return _updateCompaniaSeguro.apply(this, arguments);
}

function _updateCompaniaSeguro() {
  _updateCompaniaSeguro = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, nombre, descripcion, nit, representanteLegal, direccion, telefono1, telefono2, web, ciaSpvs, nrocuenta, banco1, tipomoneda1, nrocuenta2, banco2, tipomoneda2, empresaid, usuarioregistro, usuariomodificacion, fecharegistro, fechamodificacion, estado, updateRowCount, companiaSeguros;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, nombre = _req$body2.nombre, descripcion = _req$body2.descripcion, nit = _req$body2.nit, representanteLegal = _req$body2.representanteLegal, direccion = _req$body2.direccion, telefono1 = _req$body2.telefono1, telefono2 = _req$body2.telefono2, web = _req$body2.web, ciaSpvs = _req$body2.ciaSpvs, nrocuenta = _req$body2.nrocuenta, banco1 = _req$body2.banco1, tipomoneda1 = _req$body2.tipomoneda1, nrocuenta2 = _req$body2.nrocuenta2, banco2 = _req$body2.banco2, tipomoneda2 = _req$body2.tipomoneda2, empresaid = _req$body2.empresaid, usuarioregistro = _req$body2.usuarioregistro, usuariomodificacion = _req$body2.usuariomodificacion, fecharegistro = _req$body2.fecharegistro, fechamodificacion = _req$body2.fechamodificacion, estado = _req$body2.estado;
            _context6.prev = 2;
            _context6.next = 5;
            return _CompaniaSeguro["default"].update({
              nombre: nombre,
              descripcion: descripcion,
              nit: nit,
              representanteLegal: representanteLegal,
              direccion: direccion,
              telefono1: telefono1,
              telefono2: telefono2,
              web: web,
              ciaSpvs: ciaSpvs,
              nrocuenta: nrocuenta,
              banco1: banco1,
              tipomoneda1: tipomoneda1,
              nrocuenta2: nrocuenta2,
              banco2: banco2,
              tipomoneda2: tipomoneda2,
              empresaid: empresaid,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: fecharegistro,
              fechamodificacion: fechamodificacion,
              estado: estado
            }, {
              where: {
                id: id
              }
            });

          case 5:
            updateRowCount = _context6.sent;
            _context6.next = 8;
            return _CompaniaSeguro["default"].findOne({
              where: {
                id: id
              }
            });

          case 8:
            companiaSeguros = _context6.sent;
            res.json({
              message: 'CompaniaSeguro update successfully',
              count: companiaSeguros
            });
            _context6.next = 16;
            break;

          case 12:
            _context6.prev = 12;
            _context6.t0 = _context6["catch"](2);
            console.log(_context6.t0);
            res.status(500).json({
              message: 'Something goes wrong',
              data: {}
            });

          case 16:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[2, 12]]);
  }));
  return _updateCompaniaSeguro.apply(this, arguments);
}

function bajaCompaniaSeguro(_x13, _x14) {
  return _bajaCompaniaSeguro.apply(this, arguments);
}

function _bajaCompaniaSeguro() {
  _bajaCompaniaSeguro = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var id, usuariomodificacion, updateRowCount, companiaSeguros;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id = req.params.id;
            console.log("bajaCompaniaSeguro");
            usuariomodificacion = req.body.usuariomodificacion;
            _context7.prev = 3;
            _context7.next = 6;
            return _CompaniaSeguro["default"].update({
              usuariomodificacion: usuariomodificacion,

              /*  fechamodificacion:moment().format(), */
              fechamodificacion: new Date(),
              estado: 'BAJ'
            }, {
              where: {
                id: id
              }
            });

          case 6:
            updateRowCount = _context7.sent;
            _context7.next = 9;
            return _CompaniaSeguro["default"].findOne({
              where: {
                id: id
              }
            });

          case 9:
            companiaSeguros = _context7.sent;
            res.json({
              message: 'CompaniaSeguro baja successfully',
              count: companiaSeguros
            });
            _context7.next = 17;
            break;

          case 13:
            _context7.prev = 13;
            _context7.t0 = _context7["catch"](3);
            console.log(_context7.t0);
            res.status(500).json({
              message: 'Something goes wrong',
              data: {}
            });

          case 17:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[3, 13]]);
  }));
  return _bajaCompaniaSeguro.apply(this, arguments);
}