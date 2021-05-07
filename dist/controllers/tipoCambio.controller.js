"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTipoCambios = getTipoCambios;
exports.createTipoCambio = createTipoCambio;
exports.getOneTipoCambio = getOneTipoCambio;
exports.deleteTipoCambio = deleteTipoCambio;
exports.updateTipoCambio = updateTipoCambio;
exports.bajaTipoCambio = bajaTipoCambio;
exports.tipoCambioByEmpresa = tipoCambioByEmpresa;

var _Empresa = _interopRequireDefault(require("../models/Empresa"));

var _TipoCambio = _interopRequireDefault(require("../models/TipoCambio"));

var _Personal = _interopRequireDefault(require("../models/Personal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getTipoCambios(_x, _x2) {
  return _getTipoCambios.apply(this, arguments);
}

function _getTipoCambios() {
  _getTipoCambios = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var usuarios;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _TipoCambio["default"].findAll({
              where: {
                estado: 'ACT'
              },
              include: _Personal["default"]
            });

          case 3:
            usuarios = _context.sent;
            res.json({
              data: usuarios
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
  return _getTipoCambios.apply(this, arguments);
}

function createTipoCambio(_x3, _x4) {
  return _createTipoCambio.apply(this, arguments);
}

function _createTipoCambio() {
  _createTipoCambio = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, fecha, tipocambioventa, tipocambiocompra, empresaid, usuarioregistro, usuariomodificacion, _req$body$fecharegist, fecharegistro, _req$body$fechamodifi, fechamodificacion, estado, newTipoCambio;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, fecha = _req$body.fecha, tipocambioventa = _req$body.tipocambioventa, tipocambiocompra = _req$body.tipocambiocompra, empresaid = _req$body.empresaid, usuarioregistro = _req$body.usuarioregistro, usuariomodificacion = _req$body.usuariomodificacion, _req$body$fecharegist = _req$body.fecharegistro, fecharegistro = _req$body$fecharegist === void 0 ? new Date() : _req$body$fecharegist, _req$body$fechamodifi = _req$body.fechamodificacion, fechamodificacion = _req$body$fechamodifi === void 0 ? new Date() : _req$body$fechamodifi, estado = _req$body.estado;
            _context2.prev = 1;
            _context2.next = 4;
            return _TipoCambio["default"].create({
              fecha: fecha,
              tipocambioventa: tipocambioventa,
              tipocambiocompra: tipocambiocompra,
              empresaid: empresaid,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: fecharegistro,
              fechamodificacion: fechamodificacion,
              estado: estado
            }, {
              fields: ['fecha', 'tipocambioventa', 'tipocambiocompra', 'empresaid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado']
            });

          case 4:
            newTipoCambio = _context2.sent;

            if (!newTipoCambio) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.json({
              message: 'TipoCambio created successfully',
              data: newTipoCambio
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
  return _createTipoCambio.apply(this, arguments);
}

function getOneTipoCambio(_x5, _x6) {
  return _getOneTipoCambio.apply(this, arguments);
}

function _getOneTipoCambio() {
  _getOneTipoCambio = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, usuario;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _TipoCambio["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            usuario = _context3.sent;
            res.json({
              data: usuario
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
  return _getOneTipoCambio.apply(this, arguments);
}

function deleteTipoCambio(_x7, _x8) {
  return _deleteTipoCambio.apply(this, arguments);
}

function _deleteTipoCambio() {
  _deleteTipoCambio = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _TipoCambio["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context4.sent;
            res.json({
              message: 'TipoCambio deleted successfully',
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
  return _deleteTipoCambio.apply(this, arguments);
}

function updateTipoCambio(_x9, _x10) {
  return _updateTipoCambio.apply(this, arguments);
}

function _updateTipoCambio() {
  _updateTipoCambio = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, _req$body2, fecha, tipocambioventa, tipocambiocompra, empresaid, usuarioregistro, usuariomodificacion, fecharegistro, _req$body2$fechamodif, fechamodificacion, estado, updateRowCount, tipoCambios;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, fecha = _req$body2.fecha, tipocambioventa = _req$body2.tipocambioventa, tipocambiocompra = _req$body2.tipocambiocompra, empresaid = _req$body2.empresaid, usuarioregistro = _req$body2.usuarioregistro, usuariomodificacion = _req$body2.usuariomodificacion, fecharegistro = _req$body2.fecharegistro, _req$body2$fechamodif = _req$body2.fechamodificacion, fechamodificacion = _req$body2$fechamodif === void 0 ? new Date() : _req$body2$fechamodif, estado = _req$body2.estado;
            _context5.prev = 2;
            _context5.next = 5;
            return _TipoCambio["default"].update({
              fecha: fecha,
              tipocambioventa: tipocambioventa,
              tipocambiocompra: tipocambiocompra,
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
            updateRowCount = _context5.sent;
            _context5.next = 8;
            return _TipoCambio["default"].findOne({
              where: {
                id: id
              }
            });

          case 8:
            tipoCambios = _context5.sent;
            res.json({
              message: 'TipoCambio update successfully',
              count: tipoCambios
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
  return _updateTipoCambio.apply(this, arguments);
}

function bajaTipoCambio(_x11, _x12) {
  return _bajaTipoCambio.apply(this, arguments);
}

function _bajaTipoCambio() {
  _bajaTipoCambio = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, usuariomodificacion, updateRowCount, tipoCambios;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            console.log("bajaTipoCambio");
            usuariomodificacion = req.body.usuariomodificacion;
            _context6.prev = 3;
            _context6.next = 6;
            return _TipoCambio["default"].update({
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
            return _TipoCambio["default"].findOne({
              where: {
                id: id
              }
            });

          case 9:
            tipoCambios = _context6.sent;
            res.json({
              message: 'TipoCambio baja successfully',
              count: tipoCambios
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
  return _bajaTipoCambio.apply(this, arguments);
}

function tipoCambioByEmpresa(_x13, _x14) {
  return _tipoCambioByEmpresa.apply(this, arguments);
}

function _tipoCambioByEmpresa() {
  _tipoCambioByEmpresa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var empresaid, tipoCambios;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            empresaid = req.params.empresaid;
            _context7.next = 4;
            return _TipoCambio["default"].findAll({
              /*    attributes: ['','nombre', 'descripcion', 'empresaid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                 'fechamodificacion', 'estado'], */
              where: {
                empresaid: empresaid,
                estado: 'ACT'
              }
            });

          case 4:
            tipoCambios = _context7.sent;
            res.json({
              tipoCambios: tipoCambios
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
  return _tipoCambioByEmpresa.apply(this, arguments);
}