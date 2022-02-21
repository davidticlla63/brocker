"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSucursalUsuario = createSucursalUsuario;
exports.deleteSucursalUsuario = deleteSucursalUsuario;
exports.getOneSucursalUsuario = getOneSucursalUsuario;
exports.getSucursalUsuarioByEmpresa = getSucursalUsuarioByEmpresa;
exports.getSucursalUsuarios = getSucursalUsuarios;
exports.updateSucursalUsuario = updateSucursalUsuario;

var _SucursalUsuario = _interopRequireDefault(require("../models/SucursalUsuario"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var atributos = ['usuarioid', 'sucursalid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado']; // const atributo={  
//     usuarioid,
//     sucursalid,
//     usuarioregistro,
//     usuariomodificacion,
//     fecharegistro,
//     fechamodificacion,
//     estado
// } 

function getSucursalUsuarios(_x, _x2) {
  return _getSucursalUsuarios.apply(this, arguments);
}

function _getSucursalUsuarios() {
  _getSucursalUsuarios = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var sucursalUsuarios;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _SucursalUsuario["default"].findAll({
              where: {
                estado: 'ACT'
              }
            });

          case 3:
            sucursalUsuarios = _context.sent;
            res.json({
              data: sucursalUsuarios
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
  return _getSucursalUsuarios.apply(this, arguments);
}

function createSucursalUsuario(_x3, _x4) {
  return _createSucursalUsuario.apply(this, arguments);
}

function _createSucursalUsuario() {
  _createSucursalUsuario = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, usuarioid, sucursalid, usuarioregistro, usuariomodificacion, fecharegistro, fechamodificacion, estado, newSucursalUsuario;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, usuarioid = _req$body.usuarioid, sucursalid = _req$body.sucursalid, usuarioregistro = _req$body.usuarioregistro, usuariomodificacion = _req$body.usuariomodificacion, fecharegistro = _req$body.fecharegistro, fechamodificacion = _req$body.fechamodificacion, estado = _req$body.estado;
            _context2.prev = 1;
            _context2.next = 4;
            return _SucursalUsuario["default"].create({
              usuarioid: usuarioid,
              sucursalid: sucursalid,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: fecharegistro,
              fechamodificacion: fechamodificacion,
              estado: estado
            }, {
              fields: ['usuarioid', 'sucursalid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado']
            });

          case 4:
            newSucursalUsuario = _context2.sent;

            if (!newSucursalUsuario) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.json({
              message: 'SucursalUsuario created successfully',
              data: newSucursalUsuario
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
  return _createSucursalUsuario.apply(this, arguments);
}

function getOneSucursalUsuario(_x5, _x6) {
  return _getOneSucursalUsuario.apply(this, arguments);
}

function _getOneSucursalUsuario() {
  _getOneSucursalUsuario = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, sucursalUsuario;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _SucursalUsuario["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            sucursalUsuario = _context3.sent;
            res.json({
              data: sucursalUsuario
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
  return _getOneSucursalUsuario.apply(this, arguments);
}

function deleteSucursalUsuario(_x7, _x8) {
  return _deleteSucursalUsuario.apply(this, arguments);
}

function _deleteSucursalUsuario() {
  _deleteSucursalUsuario = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _SucursalUsuario["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context4.sent;
            res.json({
              message: 'SucursalUsuario deleted successfully',
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
  return _deleteSucursalUsuario.apply(this, arguments);
}

function updateSucursalUsuario(_x9, _x10) {
  return _updateSucursalUsuario.apply(this, arguments);
}

function _updateSucursalUsuario() {
  _updateSucursalUsuario = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, usuarioid, sucursalid, usuarioregistro, usuariomodificacion, fecharegistro, fechamodificacion, estado, sucursalUsuarios;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, usuarioid = _req$body2.usuarioid, sucursalid = _req$body2.sucursalid, usuarioregistro = _req$body2.usuarioregistro, usuariomodificacion = _req$body2.usuariomodificacion, fecharegistro = _req$body2.fecharegistro, fechamodificacion = _req$body2.fechamodificacion, estado = _req$body2.estado;
            _context6.prev = 2;
            _context6.next = 5;
            return _SucursalUsuario["default"].findAll({
              attributes: atributos,
              where: {
                id: id
              }
            });

          case 5:
            sucursalUsuarios = _context6.sent;

            if (sucursalUsuarios.length > 0) {
              sucursalUsuarios.forEach( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(sucursalUsuario) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return sucursalUsuario.update({
                            usuarioid: usuarioid,
                            sucursalid: sucursalid,
                            usuarioregistro: usuarioregistro,
                            usuariomodificacion: usuariomodificacion,
                            fecharegistro: fecharegistro,
                            fechamodificacion: fechamodificacion,
                            estado: estado
                          });

                        case 2:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));

                return function (_x13) {
                  return _ref.apply(this, arguments);
                };
              }());
            }

            return _context6.abrupt("return", res.json({
              message: 'SucursalUsuario updated successfully',
              data: sucursalUsuarios
            }));

          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](2);
            console.log(_context6.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context6.t0.message
              }
            });

          case 14:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[2, 10]]);
  }));
  return _updateSucursalUsuario.apply(this, arguments);
}

function getSucursalUsuarioByEmpresa(_x11, _x12) {
  return _getSucursalUsuarioByEmpresa.apply(this, arguments);
}

function _getSucursalUsuarioByEmpresa() {
  _getSucursalUsuarioByEmpresa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var empresaid, sucursalUsuario;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            empresaid = req.params.empresaid;
            _context7.next = 4;
            return _SucursalUsuario["default"].findAll({
              attributes: atributos,
              where: {
                empresaid: empresaid //,estado:'ACT'

              }
            });

          case 4:
            sucursalUsuario = _context7.sent;
            res.json({
              sucursalUsuario: sucursalUsuario
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
  return _getSucursalUsuarioByEmpresa.apply(this, arguments);
}