"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPermiso = createPermiso;
exports.deletePermiso = deletePermiso;
exports.getOnePermiso = getOnePermiso;
exports.getPermisos = getPermisos;
exports.updatePermiso = updatePermiso;

var _Accion = _interopRequireDefault(require("../models/Accion"));

var _Pagina = _interopRequireDefault(require("../models/Pagina"));

var _Permiso = _interopRequireDefault(require("../models/Permiso"));

var _Perfil = _interopRequireDefault(require("../models/Perfil"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getPermisos(_x, _x2) {
  return _getPermisos.apply(this, arguments);
}

function _getPermisos() {
  _getPermisos = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var permisos;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Permiso["default"].findAll({
              where: {
                estado: 'ACT'
              } //,include:Perfil
              ,
              include: [{
                model: _Pagina["default"],
                require: true
              }, {
                model: _Accion["default"],
                require: true
              }, {
                model: _Perfil["default"],
                require: true
              }]
            });

          case 3:
            permisos = _context.sent;
            res.json({
              data: permisos
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
  return _getPermisos.apply(this, arguments);
}

function createPermiso(_x3, _x4) {
  return _createPermiso.apply(this, arguments);
}

function _createPermiso() {
  _createPermiso = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, accionid, paginaid, perfilid, usuarioregistro, estado, newPermiso;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, accionid = _req$body.accionid, paginaid = _req$body.paginaid, perfilid = _req$body.perfilid, usuarioregistro = _req$body.usuarioregistro, estado = _req$body.estado;
            _context2.prev = 1;
            _context2.next = 4;
            return _Permiso["default"].create({
              paginaaccionid: paginaaccionid,
              perfilid: perfilid,
              usuarioregistro: usuarioregistro,
              fecharegistro: new Date(),
              fechamodificacion: new Date(),
              estado: estado
            }, {
              fields: ['paginaaccionid', 'perfilid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado']
            });

          case 4:
            newPermiso = _context2.sent;

            if (!newPermiso) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.json({
              message: 'Permiso created successfully',
              data: newPermiso
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
  return _createPermiso.apply(this, arguments);
}

function getOnePermiso(_x5, _x6) {
  return _getOnePermiso.apply(this, arguments);
}

function _getOnePermiso() {
  _getOnePermiso = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, permiso;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _Permiso["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            permiso = _context3.sent;
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
  return _getOnePermiso.apply(this, arguments);
}

function deletePermiso(_x7, _x8) {
  return _deletePermiso.apply(this, arguments);
}

function _deletePermiso() {
  _deletePermiso = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _Permiso["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context4.sent;
            res.json({
              message: 'Permiso deleted successfully',
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
  return _deletePermiso.apply(this, arguments);
}

function updatePermiso(_x9, _x10) {
  return _updatePermiso.apply(this, arguments);
}

function _updatePermiso() {
  _updatePermiso = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, _req$body2, paginaaccionid, perfilid, usuarioregistro, usuariomodificacion, fecharegistro, fechamodificacion, estado, cant, permisos;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, paginaaccionid = _req$body2.paginaaccionid, perfilid = _req$body2.perfilid, usuarioregistro = _req$body2.usuarioregistro, usuariomodificacion = _req$body2.usuariomodificacion, fecharegistro = _req$body2.fecharegistro, fechamodificacion = _req$body2.fechamodificacion, estado = _req$body2.estado;
            _context5.prev = 2;
            _context5.next = 5;
            return _Permiso["default"].update({
              paginaaccionid: paginaaccionid,
              perfilid: perfilid,
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
            cant = _context5.sent;
            _context5.next = 8;
            return _Permiso["default"].findOne({
              where: {
                id: id
              }
            });

          case 8:
            permisos = _context5.sent;
            return _context5.abrupt("return", res.json({
              message: 'Permiso updated successfully',
              data: permisos
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
  return _updatePermiso.apply(this, arguments);
}