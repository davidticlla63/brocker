"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bajaRequisito = bajaRequisito;
exports.createRequisito = createRequisito;
exports.deleteRequisito = deleteRequisito;
exports.getOneRequisito = getOneRequisito;
exports.getRequisitoPorSiniestro = getRequisitoPorSiniestro;
exports.getRequisitos = getRequisitos;
exports.getRequisitosPorEmpresa = getRequisitosPorEmpresa;
exports.updateRequisito = updateRequisito;

var _database = require("../database/database");

var _Requesito = _interopRequireDefault(require("../models/Requesito"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require('sequelize'),
    QueryTypes = _require.QueryTypes;

function getRequisitos(_x, _x2) {
  return _getRequisitos.apply(this, arguments);
}

function _getRequisitos() {
  _getRequisitos = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var requisitos;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Requesito["default"].findAll({
              where: {
                estado: 'ACT'
              }
            });

          case 3:
            requisitos = _context.sent;
            res.json({
              data: requisitos
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
  return _getRequisitos.apply(this, arguments);
}

function getRequisitosPorEmpresa(_x3, _x4) {
  return _getRequisitosPorEmpresa.apply(this, arguments);
}

function _getRequisitosPorEmpresa() {
  _getRequisitosPorEmpresa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var empresaid, requisitos;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            empresaid = req.params.empresaid;
            _context2.prev = 1;
            _context2.next = 4;
            return _Requesito["default"].findAll({
              where: {
                empresaid: empresaid,
                estado: 'ACT'
              }
            });

          case 4:
            requisitos = _context2.sent;
            res.json({
              data: requisitos
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
  return _getRequisitosPorEmpresa.apply(this, arguments);
}

function createRequisito(_x5, _x6) {
  return _createRequisito.apply(this, arguments);
}

function _createRequisito() {
  _createRequisito = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, nombre, descripcion, usuarioregistro, usuariomodificacion, _req$body$fecharegist, fecharegistro, fechamodificacion, estado, empresaid, newRequisito;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, nombre = _req$body.nombre, descripcion = _req$body.descripcion, usuarioregistro = _req$body.usuarioregistro, usuariomodificacion = _req$body.usuariomodificacion, _req$body$fecharegist = _req$body.fecharegistro, fecharegistro = _req$body$fecharegist === void 0 ? new Date() : _req$body$fecharegist, fechamodificacion = _req$body.fechamodificacion, estado = _req$body.estado, empresaid = _req$body.empresaid;
            _context3.prev = 1;
            _context3.next = 4;
            return _Requesito["default"].create({
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
            newRequisito = _context3.sent;

            if (!newRequisito) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.json({
              message: 'Requisito created successfully',
              data: newRequisito
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
  return _createRequisito.apply(this, arguments);
}

function updateRequisito(_x7, _x8) {
  return _updateRequisito.apply(this, arguments);
}

function _updateRequisito() {
  _updateRequisito = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, _req$body2, nombre, descripcion, usuarioregistro, usuariomodificacion, fecharegistro, fechamodificacion, estado, updateRowCount, requisitos;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, nombre = _req$body2.nombre, descripcion = _req$body2.descripcion, usuarioregistro = _req$body2.usuarioregistro, usuariomodificacion = _req$body2.usuariomodificacion, fecharegistro = _req$body2.fecharegistro, fechamodificacion = _req$body2.fechamodificacion, estado = _req$body2.estado;
            _context4.prev = 2;
            _context4.next = 5;
            return _Requesito["default"].update({
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
            updateRowCount = _context4.sent;
            _context4.next = 8;
            return _Requesito["default"].findOne({
              where: {
                id: id
              }
            });

          case 8:
            requisitos = _context4.sent;
            res.json({
              message: 'Requisito update successfully',
              count: requisitos
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
  return _updateRequisito.apply(this, arguments);
}

function getOneRequisito(_x9, _x10) {
  return _getOneRequisito.apply(this, arguments);
}

function _getOneRequisito() {
  _getOneRequisito = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, usuario;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return _Requesito["default"].findOne({
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
  return _getOneRequisito.apply(this, arguments);
}

function deleteRequisito(_x11, _x12) {
  return _deleteRequisito.apply(this, arguments);
}

function _deleteRequisito() {
  _deleteRequisito = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            id = req.params.id;
            _context6.next = 4;
            return _Requesito["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context6.sent;
            res.json({
              message: 'Requisito deleted successfully',
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
  return _deleteRequisito.apply(this, arguments);
}

function bajaRequisito(_x13, _x14) {
  return _bajaRequisito.apply(this, arguments);
}

function _bajaRequisito() {
  _bajaRequisito = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var id, usuariomodificacion, updateRowCount, requisitos;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id = req.params.id;
            console.log("bajaRequisito");
            usuariomodificacion = req.body.usuariomodificacion;
            _context7.prev = 3;
            _context7.next = 6;
            return _Requesito["default"].update({
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
            return _Requesito["default"].findOne({
              where: {
                id: id
              }
            });

          case 9:
            requisitos = _context7.sent;
            res.json({
              message: 'Requisito baja successfully',
              count: requisitos
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
  return _bajaRequisito.apply(this, arguments);
}

function getRequisitoPorSiniestro(_x15, _x16) {
  return _getRequisitoPorSiniestro.apply(this, arguments);
}

function _getRequisitoPorSiniestro() {
  _getRequisitoPorSiniestro = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
    var siniestroid, siniestros;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            siniestroid = req.params.siniestroid;
            _context8.prev = 1;
            _context8.next = 4;
            return _database.sequelize.query("select case when sr.requisitoid is null then false else true end estado,r.id requisitoid,r.nombre,sr.id from requisito r \n         left join siniestro_requisito sr on sr.requisitoid=r.id and sr.estado='ACT' AND sr.siniestroid='" + siniestroid + "' \n         WHERE r.estado='ACT' ", {
              type: QueryTypes.SELECT
            });

          case 4:
            siniestros = _context8.sent;
            //console.log(JSON.stringify(usuarios[0], null, 2));
            res.json({
              siniestros: siniestros
            });
            _context8.next = 12;
            break;

          case 8:
            _context8.prev = 8;
            _context8.t0 = _context8["catch"](1);
            console.log(_context8.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context8.t0.message
              }
            });

          case 12:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[1, 8]]);
  }));
  return _getRequisitoPorSiniestro.apply(this, arguments);
}