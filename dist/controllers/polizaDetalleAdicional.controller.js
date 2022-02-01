"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPolizaDetalleAdicionales = getPolizaDetalleAdicionales;
exports.deletePolizaDetalleAdicionales = deletePolizaDetalleAdicionales;
exports.updatePolizaDetalleAdicionales = updatePolizaDetalleAdicionales;
exports.bajaPolizaDetalleAdicionales = bajaPolizaDetalleAdicionales;
exports.getPolizaDetalleAdicionalesPorDetalle = getPolizaDetalleAdicionalesPorDetalle;
exports.polizaDetalleAdicionalessPorPoliza = polizaDetalleAdicionalessPorPoliza;

var _PolizaDetalleAdicionales = _interopRequireDefault(require("../models/PolizaDetalleAdicionales"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getPolizaDetalleAdicionales(_x, _x2) {
  return _getPolizaDetalleAdicionales.apply(this, arguments);
}

function _getPolizaDetalleAdicionales() {
  _getPolizaDetalleAdicionales = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var polizaAdicionals;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _PolizaDetalleAdicionales["default"].findAll({
              where: {
                estado: 'ACT'
              }
            });

          case 3:
            polizaAdicionals = _context.sent;
            res.json({
              data: polizaAdicionals
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
  return _getPolizaDetalleAdicionales.apply(this, arguments);
}

function deletePolizaDetalleAdicionales(_x3, _x4) {
  return _deletePolizaDetalleAdicionales.apply(this, arguments);
}

function _deletePolizaDetalleAdicionales() {
  _deletePolizaDetalleAdicionales = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            _context2.next = 4;
            return _PolizaDetalleAdicionales["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context2.sent;
            res.json({
              message: 'PolizaDetalleAdicionales deleted successfully',
              count: deleteRowCount
            });
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context2.t0.message
              }
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return _deletePolizaDetalleAdicionales.apply(this, arguments);
}

function updatePolizaDetalleAdicionales(_x5, _x6) {
  return _updatePolizaDetalleAdicionales.apply(this, arguments);
}

function _updatePolizaDetalleAdicionales() {
  _updatePolizaDetalleAdicionales = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, _req$body, valor, dato, usuarioregistro, usuariomodificacion, fecharegistro, fechamodificacion, estado, updateRowCount, polizaAdicionals;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _req$body = req.body, valor = _req$body.valor, dato = _req$body.dato, usuarioregistro = _req$body.usuarioregistro, usuariomodificacion = _req$body.usuariomodificacion, fecharegistro = _req$body.fecharegistro, fechamodificacion = _req$body.fechamodificacion, estado = _req$body.estado;
            _context3.prev = 2;
            _context3.next = 5;
            return _PolizaDetalleAdicionales["default"].update({
              valor: valor,
              dato: dato,
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
            updateRowCount = _context3.sent;
            _context3.next = 8;
            return _PolizaDetalleAdicionales["default"].findOne({
              where: {
                id: id
              }
            });

          case 8:
            polizaAdicionals = _context3.sent;
            res.json({
              message: 'PolizaDetalleAdicionales update successfully',
              count: polizaAdicionals
            });
            _context3.next = 16;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](2);
            console.log(_context3.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context3.t0.message
              }
            });

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 12]]);
  }));
  return _updatePolizaDetalleAdicionales.apply(this, arguments);
}

function bajaPolizaDetalleAdicionales(_x7, _x8) {
  return _bajaPolizaDetalleAdicionales.apply(this, arguments);
}

function _bajaPolizaDetalleAdicionales() {
  _bajaPolizaDetalleAdicionales = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, usuariomodificacion, updateRowCount, polizaAdicionals;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            console.log("bajaPolizaDetalleAdicionales");
            usuariomodificacion = req.body.usuariomodificacion;
            _context4.prev = 3;
            _context4.next = 6;
            return _PolizaDetalleAdicionales["default"].update({
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
            updateRowCount = _context4.sent;
            _context4.next = 9;
            return _PolizaDetalleAdicionales["default"].findOne({
              where: {
                id: id
              }
            });

          case 9:
            polizaAdicionals = _context4.sent;
            res.json({
              message: 'PolizaDetalleAdicionales baja successfully',
              count: polizaAdicionals
            });
            _context4.next = 17;
            break;

          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4["catch"](3);
            console.log(_context4.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context4.t0.message
              }
            });

          case 17:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[3, 13]]);
  }));
  return _bajaPolizaDetalleAdicionales.apply(this, arguments);
}

function getPolizaDetalleAdicionalesPorDetalle(_x9, _x10) {
  return _getPolizaDetalleAdicionalesPorDetalle.apply(this, arguments);
}

function _getPolizaDetalleAdicionalesPorDetalle() {
  _getPolizaDetalleAdicionalesPorDetalle = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var polizadetalleid, polizaDetalleAdicionaless;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            polizadetalleid = req.params.polizadetalleid;
            _context5.next = 4;
            return _PolizaDetalleAdicionales["default"].findAll({
              where: {
                polizadetalleid: polizadetalleid,
                estado: 'ACT'
              }
            });

          case 4:
            polizaDetalleAdicionaless = _context5.sent;
            res.json({
              data: polizaDetalleAdicionaless
            });
            _context5.next = 12;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context5.t0.message
              }
            });

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 8]]);
  }));
  return _getPolizaDetalleAdicionalesPorDetalle.apply(this, arguments);
}

function polizaDetalleAdicionalessPorPoliza(_x11, _x12) {
  return _polizaDetalleAdicionalessPorPoliza.apply(this, arguments);
}

function _polizaDetalleAdicionalessPorPoliza() {
  _polizaDetalleAdicionalessPorPoliza = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var polizaid, polizaDetalleAdicionaless;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            polizaid = req.params.polizaid;
            _context6.prev = 1;
            console.log(req.params);
            _context6.next = 5;
            return _PolizaDetalleAdicionales["default"].findAll({
              where: {
                estado: 'ACT',
                polizaid: polizaid
              }
            });

          case 5:
            polizaDetalleAdicionaless = _context6.sent;
            res.json({
              data: polizaDetalleAdicionaless
            });
            _context6.next = 13;
            break;

          case 9:
            _context6.prev = 9;
            _context6.t0 = _context6["catch"](1);
            console.log(_context6.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context6.t0.message
              }
            });

          case 13:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 9]]);
  }));
  return _polizaDetalleAdicionalessPorPoliza.apply(this, arguments);
}