"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEmpresas = getEmpresas;
exports.createEmpresa = createEmpresa;
exports.getOneEmpresa = getOneEmpresa;
exports.deleteEmpresa = deleteEmpresa;
exports.updateEmpresa = updateEmpresa;
exports.bajaEmpresa = bajaEmpresa;

var _Empresa = _interopRequireDefault(require("../models/Empresa"));

var _Sucursal = _interopRequireDefault(require("../models/Sucursal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getEmpresas(_x, _x2) {
  return _getEmpresas.apply(this, arguments);
}

function _getEmpresas() {
  _getEmpresas = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var empresas;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Empresa["default"].findAll({
              where: {
                estado: 'ACT'
              }
            });

          case 3:
            empresas = _context.sent;
            res.json({
              data: empresas
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
  return _getEmpresas.apply(this, arguments);
}

function createEmpresa(_x3, _x4) {
  return _createEmpresa.apply(this, arguments);
}

function _createEmpresa() {
  _createEmpresa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, razonsocial, descripcion, telefono, nit, representante, logo, _req$body$fecharegist, fecharegistro, fechamodificacion, estado, newEmpresa;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, razonsocial = _req$body.razonsocial, descripcion = _req$body.descripcion, telefono = _req$body.telefono, nit = _req$body.nit, representante = _req$body.representante, logo = _req$body.logo, _req$body$fecharegist = _req$body.fecharegistro, fecharegistro = _req$body$fecharegist === void 0 ? new Date() : _req$body$fecharegist, fechamodificacion = _req$body.fechamodificacion, estado = _req$body.estado;
            _context2.prev = 1;
            _context2.next = 4;
            return _Empresa["default"].create({
              razonsocial: razonsocial,
              descripcion: descripcion,
              telefono: telefono,
              nit: nit,
              representante: representante,
              logo: logo,
              fecharegistro: fecharegistro,
              fechamodificacion: fechamodificacion,
              estado: estado
            }, {
              fields: ['razonsocial', 'descripcion', 'telefono', 'nit', 'representante', 'logo', 'fecharegistro', 'fechamodificacion', 'estado']
            }, {
              include: _Sucursal["default"]
            });

          case 4:
            newEmpresa = _context2.sent;

            if (!newEmpresa) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.json({
              message: 'Empresa created successfully',
              data: newEmpresa
            }));

          case 7:
            _context2.next = 13;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context2.t0.message
              }
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 9]]);
  }));
  return _createEmpresa.apply(this, arguments);
}

function getOneEmpresa(_x5, _x6) {
  return _getOneEmpresa.apply(this, arguments);
}

function _getOneEmpresa() {
  _getOneEmpresa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, empresa;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _Empresa["default"].findOne({
              include: _Sucursal["default"]
            }, {
              where: {
                id: id
              }
            });

          case 4:
            empresa = _context3.sent;
            res.json({
              data: empresa
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
  return _getOneEmpresa.apply(this, arguments);
}

function deleteEmpresa(_x7, _x8) {
  return _deleteEmpresa.apply(this, arguments);
}

function _deleteEmpresa() {
  _deleteEmpresa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _Empresa["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context4.sent;
            res.json({
              message: 'Empresa deleted successfully',
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
  return _deleteEmpresa.apply(this, arguments);
}

function updateEmpresa(_x9, _x10) {
  return _updateEmpresa.apply(this, arguments);
}

function _updateEmpresa() {
  _updateEmpresa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, _req$body2, razonsocial, descripcion, telefono, nit, representante, logo, usuarioregistro, usuariomodificacion, fecharegistro, fechamodificacion, cant, empresas;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, razonsocial = _req$body2.razonsocial, descripcion = _req$body2.descripcion, telefono = _req$body2.telefono, nit = _req$body2.nit, representante = _req$body2.representante, logo = _req$body2.logo, usuarioregistro = _req$body2.usuarioregistro, usuariomodificacion = _req$body2.usuariomodificacion, fecharegistro = _req$body2.fecharegistro, fechamodificacion = _req$body2.fechamodificacion;
            _context5.prev = 2;
            _context5.next = 5;
            return _Empresa["default"].update({
              razonsocial: razonsocial,
              descripcion: descripcion,
              telefono: telefono,
              nit: nit,
              representante: representante,
              logo: logo,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: fecharegistro,
              fechamodificacion: fechamodificacion
            }, {
              where: {
                id: id
              }
            });

          case 5:
            cant = _context5.sent;
            _context5.next = 8;
            return _Empresa["default"].findOne({
              where: {
                id: id
              }
            } //,{ include: Sucursal } 
            );

          case 8:
            empresas = _context5.sent;
            return _context5.abrupt("return", res.json({
              message: 'Empresa updated successfully',
              data: empresas
            }));

          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](2);
            console.log(_context5.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context5.t0.message
              }
            });

          case 16:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 12]]);
  }));
  return _updateEmpresa.apply(this, arguments);
}

function bajaEmpresa(_x11, _x12) {
  return _bajaEmpresa.apply(this, arguments);
}

function _bajaEmpresa() {
  _bajaEmpresa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, usuariomodificacion, updateRowCount, empresas;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            usuariomodificacion = req.body.usuariomodificacion;
            _context6.prev = 2;
            _context6.next = 5;
            return _Empresa["default"].update({
              usuariomodificacion: usuariomodificacion,
              fechamodificacion: new Date(),
              estado: "BAJ"
            }, {
              where: {
                id: id
              }
            });

          case 5:
            updateRowCount = _context6.sent;
            _context6.next = 8;
            return _Empresa["default"].findOne({
              where: {
                id: id
              }
            } //,{ include: Sucursal } 
            );

          case 8:
            empresas = _context6.sent;
            res.json({
              message: 'Empresa baja successfully',
              count: empresas
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
  return _bajaEmpresa.apply(this, arguments);
}