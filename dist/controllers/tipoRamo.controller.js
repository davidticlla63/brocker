"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTipoRamos = getTipoRamos;
exports.getTipoRamosPorEmpresa = getTipoRamosPorEmpresa;
exports.createTipoRamo = createTipoRamo;
exports.getOneTipoRamo = getOneTipoRamo;
exports.deleteTipoRamo = deleteTipoRamo;
exports.updateTipoRamo = updateTipoRamo;
exports.bajaTipoRamo = bajaTipoRamo;

var _TipoRamo = _interopRequireDefault(require("../models/TipoRamo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getTipoRamos(_x, _x2) {
  return _getTipoRamos.apply(this, arguments);
}

function _getTipoRamos() {
  _getTipoRamos = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var tipoRamos;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _TipoRamo["default"].findAll({
              where: {
                estado: 'ACT'
              }
            });

          case 3:
            tipoRamos = _context.sent;
            res.json({
              data: tipoRamos
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
  return _getTipoRamos.apply(this, arguments);
}

function getTipoRamosPorEmpresa(_x3, _x4) {
  return _getTipoRamosPorEmpresa.apply(this, arguments);
}

function _getTipoRamosPorEmpresa() {
  _getTipoRamosPorEmpresa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var empresaid, tipoRamos;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            empresaid = req.params.empresaid;
            _context2.prev = 1;
            _context2.next = 4;
            return _TipoRamo["default"].findAll({
              where: {
                estado: 'ACT',
                empresaid: empresaid
              }
            });

          case 4:
            tipoRamos = _context2.sent;
            res.json({
              data: tipoRamos
            });
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
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
    }, _callee2, null, [[1, 8]]);
  }));
  return _getTipoRamosPorEmpresa.apply(this, arguments);
}

function createTipoRamo(_x5, _x6) {
  return _createTipoRamo.apply(this, arguments);
}

function _createTipoRamo() {
  _createTipoRamo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, nombre, descripcion, usuarioregistro, usuariomodificacion, _req$body$fecharegist, fecharegistro, fechamodificacion, estado, empresaid, newTipoRamo;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, nombre = _req$body.nombre, descripcion = _req$body.descripcion, usuarioregistro = _req$body.usuarioregistro, usuariomodificacion = _req$body.usuariomodificacion, _req$body$fecharegist = _req$body.fecharegistro, fecharegistro = _req$body$fecharegist === void 0 ? new Date() : _req$body$fecharegist, fechamodificacion = _req$body.fechamodificacion, estado = _req$body.estado, empresaid = _req$body.empresaid;
            _context3.prev = 1;
            _context3.next = 4;
            return _TipoRamo["default"].create({
              nombre: nombre,
              descripcion: descripcion,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: fecharegistro,
              fechamodificacion: fechamodificacion,
              estado: estado,
              empresaid: empresaid
            }, {
              fields: ['nombre', 'descripcion', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado', 'empresaid']
            });

          case 4:
            newTipoRamo = _context3.sent;

            if (!newTipoRamo) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.json({
              message: 'TipoRamo created successfully',
              data: newTipoRamo
            }));

          case 7:
            _context3.next = 13;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context3.t0.message
              }
            });

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 9]]);
  }));
  return _createTipoRamo.apply(this, arguments);
}

function getOneTipoRamo(_x7, _x8) {
  return _getOneTipoRamo.apply(this, arguments);
}

function _getOneTipoRamo() {
  _getOneTipoRamo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, usuario;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _TipoRamo["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            usuario = _context4.sent;
            res.json({
              data: usuario
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
  return _getOneTipoRamo.apply(this, arguments);
}

function deleteTipoRamo(_x9, _x10) {
  return _deleteTipoRamo.apply(this, arguments);
}

function _deleteTipoRamo() {
  _deleteTipoRamo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return _TipoRamo["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context5.sent;
            res.json({
              message: 'TipoRamo deleted successfully',
              count: deleteRowCount
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
  return _deleteTipoRamo.apply(this, arguments);
}

function updateTipoRamo(_x11, _x12) {
  return _updateTipoRamo.apply(this, arguments);
}

function _updateTipoRamo() {
  _updateTipoRamo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, nombre, descripcion, usuarioregistro, usuariomodificacion, fecharegistro, fechamodificacion, estado, updateRowCount, tipoRamos;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, nombre = _req$body2.nombre, descripcion = _req$body2.descripcion, usuarioregistro = _req$body2.usuarioregistro, usuariomodificacion = _req$body2.usuariomodificacion, fecharegistro = _req$body2.fecharegistro, fechamodificacion = _req$body2.fechamodificacion, estado = _req$body2.estado;
            _context6.prev = 2;
            _context6.next = 5;
            return _TipoRamo["default"].update({
              nombre: nombre,
              descripcion: descripcion,
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
            return _TipoRamo["default"].findOne({
              where: {
                id: id
              }
            });

          case 8:
            tipoRamos = _context6.sent;
            res.json({
              message: 'TipoRamo update successfully',
              count: tipoRamos
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
  return _updateTipoRamo.apply(this, arguments);
}

function bajaTipoRamo(_x13, _x14) {
  return _bajaTipoRamo.apply(this, arguments);
}

function _bajaTipoRamo() {
  _bajaTipoRamo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var id, usuariomodificacion, updateRowCount, tipoRamos;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id = req.params.id;
            console.log("bajaTipoRamo");
            usuariomodificacion = req.body.usuariomodificacion;
            _context7.prev = 3;
            _context7.next = 6;
            return _TipoRamo["default"].update({
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
            return _TipoRamo["default"].findOne({
              where: {
                id: id
              }
            });

          case 9:
            tipoRamos = _context7.sent;
            res.json({
              message: 'TipoRamo baja successfully',
              count: tipoRamos
            });
            _context7.next = 17;
            break;

          case 13:
            _context7.prev = 13;
            _context7.t0 = _context7["catch"](3);
            console.log(_context7.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context7.t0.message
              }
            });

          case 17:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[3, 13]]);
  }));
  return _bajaTipoRamo.apply(this, arguments);
}