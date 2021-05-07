"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPolizaAdicionals = getPolizaAdicionals;
exports.createPolizaAdicional = createPolizaAdicional;
exports.getOnePolizaAdicional = getOnePolizaAdicional;
exports.deletePolizaAdicional = deletePolizaAdicional;
exports.updatePolizaAdicional = updatePolizaAdicional;
exports.bajaPolizaAdicional = bajaPolizaAdicional;

var _PolizaAdicional = _interopRequireDefault(require("../models/PolizaAdicional"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getPolizaAdicionals(_x, _x2) {
  return _getPolizaAdicionals.apply(this, arguments);
}

function _getPolizaAdicionals() {
  _getPolizaAdicionals = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var polizaAdicionals;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _PolizaAdicional["default"].findAll({
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
  return _getPolizaAdicionals.apply(this, arguments);
}

function createPolizaAdicional(_x3, _x4) {
  return _createPolizaAdicional.apply(this, arguments);
}

function _createPolizaAdicional() {
  _createPolizaAdicional = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, valor, dato, usuarioregistro, usuariomodificacion, _req$body$fecharegist, fecharegistro, fechamodificacion, polizaid, estado, newPolizaAdicional;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, valor = _req$body.valor, dato = _req$body.dato, usuarioregistro = _req$body.usuarioregistro, usuariomodificacion = _req$body.usuariomodificacion, _req$body$fecharegist = _req$body.fecharegistro, fecharegistro = _req$body$fecharegist === void 0 ? new Date() : _req$body$fecharegist, fechamodificacion = _req$body.fechamodificacion, polizaid = _req$body.polizaid, estado = _req$body.estado;
            _context2.prev = 1;
            _context2.next = 4;
            return _PolizaAdicional["default"].create({
              valor: valor,
              dato: dato,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: fecharegistro,
              fechamodificacion: fechamodificacion,
              polizaid: polizaid,
              estado: estado
            }, {
              fields: [' valor', 'dato', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'polizaid', 'estado']
            });

          case 4:
            newPolizaAdicional = _context2.sent;

            if (!newPolizaAdicional) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.json({
              message: 'PolizaAdicional created successfully',
              data: newPolizaAdicional
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
  return _createPolizaAdicional.apply(this, arguments);
}

function getOnePolizaAdicional(_x5, _x6) {
  return _getOnePolizaAdicional.apply(this, arguments);
}

function _getOnePolizaAdicional() {
  _getOnePolizaAdicional = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, usuario;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _PolizaAdicional["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            usuario = _context3.sent;
            res.json({
              data: usuario
            });
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return _getOnePolizaAdicional.apply(this, arguments);
}

function deletePolizaAdicional(_x7, _x8) {
  return _deletePolizaAdicional.apply(this, arguments);
}

function _deletePolizaAdicional() {
  _deletePolizaAdicional = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _PolizaAdicional["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context4.sent;
            res.json({
              message: 'PolizaAdicional deleted successfully',
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
  return _deletePolizaAdicional.apply(this, arguments);
}

function updatePolizaAdicional(_x9, _x10) {
  return _updatePolizaAdicional.apply(this, arguments);
}

function _updatePolizaAdicional() {
  _updatePolizaAdicional = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, _req$body2, valor, dato, usuarioregistro, usuariomodificacion, fecharegistro, fechamodificacion, estado, updateRowCount, polizaAdicionals;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, valor = _req$body2.valor, dato = _req$body2.dato, usuarioregistro = _req$body2.usuarioregistro, usuariomodificacion = _req$body2.usuariomodificacion, fecharegistro = _req$body2.fecharegistro, fechamodificacion = _req$body2.fechamodificacion, estado = _req$body2.estado;
            _context5.prev = 2;
            _context5.next = 5;
            return _PolizaAdicional["default"].update({
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
            updateRowCount = _context5.sent;
            _context5.next = 8;
            return _PolizaAdicional["default"].findOne({
              where: {
                id: id
              }
            });

          case 8:
            polizaAdicionals = _context5.sent;
            res.json({
              message: 'PolizaAdicional update successfully',
              count: polizaAdicionals
            });
            _context5.next = 16;
            break;

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
  return _updatePolizaAdicional.apply(this, arguments);
}

function bajaPolizaAdicional(_x11, _x12) {
  return _bajaPolizaAdicional.apply(this, arguments);
}

function _bajaPolizaAdicional() {
  _bajaPolizaAdicional = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, usuariomodificacion, updateRowCount, polizaAdicionals;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            console.log("bajaPolizaAdicional");
            usuariomodificacion = req.body.usuariomodificacion;
            _context6.prev = 3;
            _context6.next = 6;
            return _PolizaAdicional["default"].update({
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
            updateRowCount = _context6.sent;
            _context6.next = 9;
            return _PolizaAdicional["default"].findOne({
              where: {
                id: id
              }
            });

          case 9:
            polizaAdicionals = _context6.sent;
            res.json({
              message: 'PolizaAdicional baja successfully',
              count: polizaAdicionals
            });
            _context6.next = 17;
            break;

          case 13:
            _context6.prev = 13;
            _context6.t0 = _context6["catch"](3);
            console.log(_context6.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context6.t0.message
              }
            });

          case 17:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[3, 13]]);
  }));
  return _bajaPolizaAdicional.apply(this, arguments);
}