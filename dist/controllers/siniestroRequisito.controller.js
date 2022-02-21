"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bajaSiniestroRequisito = bajaSiniestroRequisito;
exports.createSiniestroRequisito = createSiniestroRequisito;
exports.createSiniestroRequisitos = createSiniestroRequisitos;
exports.deleteSiniestroRequisito = deleteSiniestroRequisito;
exports.getOneSiniestroRequisito = getOneSiniestroRequisito;
exports.getSiniestroRequisitos = getSiniestroRequisitos;
exports.getSiniestroRequisitosPorSiniestro = getSiniestroRequisitosPorSiniestro;
exports.updateSiniestroRequisito = updateSiniestroRequisito;

var _database = require("../database/database");

var _SiniestroRequisito = _interopRequireDefault(require("../models/SiniestroRequisito"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require('sequelize'),
    QueryTypes = _require.QueryTypes;

function getSiniestroRequisitos(_x, _x2) {
  return _getSiniestroRequisitos.apply(this, arguments);
}

function _getSiniestroRequisitos() {
  _getSiniestroRequisitos = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var siniestroRequisitos;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _SiniestroRequisito["default"].findAll({
              where: {
                estado: 'ACT'
              }
            });

          case 3:
            siniestroRequisitos = _context.sent;
            res.json({
              data: siniestroRequisitos
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
  return _getSiniestroRequisitos.apply(this, arguments);
}

function createSiniestroRequisitos(_x3, _x4) {
  return _createSiniestroRequisitos.apply(this, arguments);
}

function _createSiniestroRequisitos() {
  _createSiniestroRequisitos = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, siniestroRequisitoseliminados, siniestroRequisitos, t, i, _i;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, siniestroRequisitoseliminados = _req$body.siniestroRequisitoseliminados, siniestroRequisitos = _req$body.siniestroRequisitos;
            _context2.prev = 1;
            _context2.next = 4;
            return _database.sequelize.transaction();

          case 4:
            t = _context2.sent;

            if (!siniestroRequisitoseliminados) {
              _context2.next = 13;
              break;
            }

            i = 0;

          case 7:
            if (!(i < siniestroRequisitoseliminados.length)) {
              _context2.next = 13;
              break;
            }

            _context2.next = 10;
            return _SiniestroRequisito["default"].update({
              estado: 'BAJ',
              fechamodificacion: new Date()
            }, {
              where: {
                id: siniestroRequisitoseliminados[i].id
              }
            }, {
              transaction: t
            });

          case 10:
            i++;
            _context2.next = 7;
            break;

          case 13:
            if (!siniestroRequisitos) {
              _context2.next = 21;
              break;
            }

            _i = 0;

          case 15:
            if (!(_i < siniestroRequisitos.length)) {
              _context2.next = 21;
              break;
            }

            _context2.next = 18;
            return _SiniestroRequisito["default"].create({
              usuarioregistro: siniestroRequisitos[_i].usuarioregistro,
              usuariomodificacion: siniestroRequisitos[_i].usuariomodificacion,
              fecharegistro: new Date(),
              fechamodificacion: new Date(),
              estado: 'ACT',
              siniestroid: siniestroRequisitos[_i].siniestroid,
              requisitoid: siniestroRequisitos[_i].requisitoid
            }, {
              fields: ['usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado', 'siniestroid', 'requisitoid']
            }, {
              transaction: t
            });

          case 18:
            _i++;
            _context2.next = 15;
            break;

          case 21:
            _context2.next = 23;
            return t.commit();

          case 23:
            if (!siniestroRequisitos) {
              _context2.next = 25;
              break;
            }

            return _context2.abrupt("return", res.json({
              message: 'SiniestroRequisito created successfully',
              data: siniestroRequisitos
            }));

          case 25:
            _context2.next = 31;
            break;

          case 27:
            _context2.prev = 27;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
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
    }, _callee2, null, [[1, 27]]);
  }));
  return _createSiniestroRequisitos.apply(this, arguments);
}

function createSiniestroRequisito(_x5, _x6) {
  return _createSiniestroRequisito.apply(this, arguments);
}

function _createSiniestroRequisito() {
  _createSiniestroRequisito = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body2, usuarioregistro, usuariomodificacion, siniestroid, requisitoid, newSiniestroRequisito;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body2 = req.body, usuarioregistro = _req$body2.usuarioregistro, usuariomodificacion = _req$body2.usuariomodificacion, siniestroid = _req$body2.siniestroid, requisitoid = _req$body2.requisitoid;
            _context3.prev = 1;
            _context3.next = 4;
            return _SiniestroRequisito["default"].create({
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: new Date(),
              fechamodificacion: new Date(),
              estado: 'ACT',
              siniestroid: siniestroid,
              requisitoid: requisitoid
            }, {
              fields: ['usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado', 'siniestroid', 'requisitoid']
            });

          case 4:
            newSiniestroRequisito = _context3.sent;

            if (!newSiniestroRequisito) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.json({
              message: 'SiniestroRequisito created successfully',
              data: newSiniestroRequisito
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
  return _createSiniestroRequisito.apply(this, arguments);
}

function updateSiniestroRequisito(_x7, _x8) {
  return _updateSiniestroRequisito.apply(this, arguments);
}

function _updateSiniestroRequisito() {
  _updateSiniestroRequisito = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, _req$body3, usuarioregistro, usuariomodificacion, fecharegistro, estado, siniestroid, requisitoid, updateRowCount, siniestroRequisitos;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _req$body3 = req.body, usuarioregistro = _req$body3.usuarioregistro, usuariomodificacion = _req$body3.usuariomodificacion, fecharegistro = _req$body3.fecharegistro, estado = _req$body3.estado, siniestroid = _req$body3.siniestroid, requisitoid = _req$body3.requisitoid;
            _context4.prev = 2;
            _context4.next = 5;
            return _SiniestroRequisito["default"].update({
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: fecharegistro,
              fechamodificacion: new Date(),
              estado: estado,
              siniestroid: siniestroid,
              requisitoid: requisitoid
            }, {
              where: {
                id: id
              }
            });

          case 5:
            updateRowCount = _context4.sent;
            _context4.next = 8;
            return _SiniestroRequisito["default"].findOne({
              where: {
                id: id
              }
            });

          case 8:
            siniestroRequisitos = _context4.sent;
            res.json({
              message: 'SiniestroRequisito update successfully',
              count: siniestroRequisitos
            });
            _context4.next = 16;
            break;

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](2);
            console.log(_context4.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context4.t0.message
              }
            });

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 12]]);
  }));
  return _updateSiniestroRequisito.apply(this, arguments);
}

function getOneSiniestroRequisito(_x9, _x10) {
  return _getOneSiniestroRequisito.apply(this, arguments);
}

function _getOneSiniestroRequisito() {
  _getOneSiniestroRequisito = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, usuario;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return _SiniestroRequisito["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            usuario = _context5.sent;
            res.json({
              data: usuario
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
  return _getOneSiniestroRequisito.apply(this, arguments);
}

function deleteSiniestroRequisito(_x11, _x12) {
  return _deleteSiniestroRequisito.apply(this, arguments);
}

function _deleteSiniestroRequisito() {
  _deleteSiniestroRequisito = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            id = req.params.id;
            _context6.next = 4;
            return _SiniestroRequisito["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context6.sent;
            res.json({
              message: 'SiniestroRequisito deleted successfully',
              count: deleteRowCount
            });
            _context6.next = 12;
            break;

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context6.t0.message
              }
            });

          case 12:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 8]]);
  }));
  return _deleteSiniestroRequisito.apply(this, arguments);
}

function bajaSiniestroRequisito(_x13, _x14) {
  return _bajaSiniestroRequisito.apply(this, arguments);
}

function _bajaSiniestroRequisito() {
  _bajaSiniestroRequisito = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var id, usuariomodificacion, updateRowCount, siniestroRequisitos;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id = req.params.id;
            console.log("bajaSiniestroRequisito");
            usuariomodificacion = req.body.usuariomodificacion;
            _context7.prev = 3;
            _context7.next = 6;
            return _SiniestroRequisito["default"].update({
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
            return _SiniestroRequisito["default"].findOne({
              where: {
                id: id
              }
            });

          case 9:
            siniestroRequisitos = _context7.sent;
            res.json({
              message: 'SiniestroRequisito baja successfully',
              count: siniestroRequisitos
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
  return _bajaSiniestroRequisito.apply(this, arguments);
}

function getSiniestroRequisitosPorSiniestro(_x15, _x16) {
  return _getSiniestroRequisitosPorSiniestro.apply(this, arguments);
}

function _getSiniestroRequisitosPorSiniestro() {
  _getSiniestroRequisitosPorSiniestro = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
    var siniestroid, requisitos;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            siniestroid = req.params.siniestroid;
            _context8.prev = 1;
            _context8.next = 4;
            return Requisito.findAll({
              where: {
                siniestroid: siniestroid,
                estado: 'ACT'
              }
            });

          case 4:
            requisitos = _context8.sent;
            res.json({
              data: requisitos
            });
            _context8.next = 11;
            break;

          case 8:
            _context8.prev = 8;
            _context8.t0 = _context8["catch"](1);
            console.log(_context8.t0);

          case 11:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[1, 8]]);
  }));
  return _getSiniestroRequisitosPorSiniestro.apply(this, arguments);
}