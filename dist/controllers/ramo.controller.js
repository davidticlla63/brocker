"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRamos = getRamos;
exports.getRamosPorEmpresa = getRamosPorEmpresa;
exports.createRamo = createRamo;
exports.getOneRamo = getOneRamo;
exports.deleteRamo = deleteRamo;
exports.updateRamo = updateRamo;
exports.bajaRamo = bajaRamo;

var _database = require("../database/database");

var _Ramo = _interopRequireDefault(require("../models/Ramo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require('sequelize'),
    QueryTypes = _require.QueryTypes;

function getRamos(_x, _x2) {
  return _getRamos.apply(this, arguments);
}

function _getRamos() {
  _getRamos = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var ramos;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Ramo["default"].findAll({
              where: {
                estado: 'ACT'
              }
            });

          case 3:
            ramos = _context.sent;
            res.json({
              data: ramos
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
  return _getRamos.apply(this, arguments);
}

function getRamosPorEmpresa(_x3, _x4) {
  return _getRamosPorEmpresa.apply(this, arguments);
}

function _getRamosPorEmpresa() {
  _getRamosPorEmpresa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var empresaid, ramos;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            empresaid = req.params.empresaid;
            _context2.prev = 1;
            _context2.next = 4;
            return _database.sequelize.query("select r.* ,tr.nombre as tiporamo " + "from ramo r " + "inner join tipo_ramo tr on tr.id=r.tiporamoid " + "where r.empresaid= '" + empresaid + "' and r.estado='ACT' order by r.id ", {
              type: QueryTypes.SELECT
            });

          case 4:
            ramos = _context2.sent;
            //const ramos = await Ramo.findAll({ where: { estado: 'ACT', empresaid } });
            res.json({
              data: ramos
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
  return _getRamosPorEmpresa.apply(this, arguments);
}

function createRamo(_x5, _x6) {
  return _createRamo.apply(this, arguments);
}

function _createRamo() {
  _createRamo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, nombre, descripcion, spvs, tiporamoid, empresaid, usuarioregistro, usuariomodificacion, _req$body$fecharegist, fecharegistro, fechamodificacion, estado, newRamo;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, nombre = _req$body.nombre, descripcion = _req$body.descripcion, spvs = _req$body.spvs, tiporamoid = _req$body.tiporamoid, empresaid = _req$body.empresaid, usuarioregistro = _req$body.usuarioregistro, usuariomodificacion = _req$body.usuariomodificacion, _req$body$fecharegist = _req$body.fecharegistro, fecharegistro = _req$body$fecharegist === void 0 ? new Date() : _req$body$fecharegist, fechamodificacion = _req$body.fechamodificacion, estado = _req$body.estado;
            _context3.prev = 1;
            _context3.next = 4;
            return _Ramo["default"].create({
              nombre: nombre,
              descripcion: descripcion,
              spvs: spvs,
              tiporamoid: tiporamoid,
              empresaid: empresaid,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: fecharegistro,
              fechamodificacion: fechamodificacion,
              estado: estado
            }, {
              fields: ['nombre', 'descripcion', 'spvs', 'tiporamoid', 'empresaid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado']
            });

          case 4:
            newRamo = _context3.sent;

            if (!newRamo) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.json({
              message: 'Ramo created successfully',
              data: newRamo
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
  return _createRamo.apply(this, arguments);
}

function getOneRamo(_x7, _x8) {
  return _getOneRamo.apply(this, arguments);
}

function _getOneRamo() {
  _getOneRamo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, usuario;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _Ramo["default"].findOne({
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
  return _getOneRamo.apply(this, arguments);
}

function deleteRamo(_x9, _x10) {
  return _deleteRamo.apply(this, arguments);
}

function _deleteRamo() {
  _deleteRamo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return _Ramo["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context5.sent;
            res.json({
              message: 'Ramo deleted successfully',
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
  return _deleteRamo.apply(this, arguments);
}

function updateRamo(_x11, _x12) {
  return _updateRamo.apply(this, arguments);
}

function _updateRamo() {
  _updateRamo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, nombre, descripcion, spvs, tiporamoid, empresaid, usuarioregistro, usuariomodificacion, fecharegistro, fechamodificacion, estado, updateRowCount, ramos;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, nombre = _req$body2.nombre, descripcion = _req$body2.descripcion, spvs = _req$body2.spvs, tiporamoid = _req$body2.tiporamoid, empresaid = _req$body2.empresaid, usuarioregistro = _req$body2.usuarioregistro, usuariomodificacion = _req$body2.usuariomodificacion, fecharegistro = _req$body2.fecharegistro, fechamodificacion = _req$body2.fechamodificacion, estado = _req$body2.estado;
            _context6.prev = 2;
            _context6.next = 5;
            return _Ramo["default"].update({
              nombre: nombre,
              descripcion: descripcion,
              spvs: spvs,
              tiporamoid: tiporamoid,
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
            return _Ramo["default"].findOne({
              where: {
                id: id
              }
            });

          case 8:
            ramos = _context6.sent;
            res.json({
              message: 'Ramo update successfully',
              count: ramos
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
  return _updateRamo.apply(this, arguments);
}

function bajaRamo(_x13, _x14) {
  return _bajaRamo.apply(this, arguments);
}

function _bajaRamo() {
  _bajaRamo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var id, usuariomodificacion, updateRowCount, ramos;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id = req.params.id;
            console.log("bajaRamo");
            usuariomodificacion = req.body.usuariomodificacion;
            _context7.prev = 3;
            _context7.next = 6;
            return _Ramo["default"].update({
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
            return _Ramo["default"].findOne({
              where: {
                id: id
              }
            });

          case 9:
            ramos = _context7.sent;
            res.json({
              message: 'Ramo baja successfully',
              count: ramos
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
  return _bajaRamo.apply(this, arguments);
}