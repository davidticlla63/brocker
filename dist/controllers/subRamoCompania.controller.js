"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSubRamoCompania = getSubRamoCompania;
exports.subRamoCompaniaPorEmpresa = subRamoCompaniaPorEmpresa;
exports.subRamoCompaniaPorRamo = subRamoCompaniaPorRamo;
exports.subRamoCompaniaPorCompania = subRamoCompaniaPorCompania;
exports.createSubRamoCompania = createSubRamoCompania;
exports.getOneSubRamoCompania = getOneSubRamoCompania;
exports.deleteSubRamoCompania = deleteSubRamoCompania;
exports.updateSubRamoCompania = updateSubRamoCompania;
exports.bajaSubRamoCompania = bajaSubRamoCompania;

var _database = require("../database/database");

var _SubRamoCompania = _interopRequireDefault(require("../models/SubRamoCompania"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require('sequelize'),
    QueryTypes = _require.QueryTypes;

function getSubRamoCompania(_x, _x2) {
  return _getSubRamoCompania.apply(this, arguments);
}

function _getSubRamoCompania() {
  _getSubRamoCompania = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var subRamoCompania;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _SubRamoCompania["default"].findAll({
              where: {
                estado: 'ACT'
              }
            });

          case 3:
            subRamoCompania = _context.sent;
            res.json({
              data: subRamoCompania
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
  return _getSubRamoCompania.apply(this, arguments);
}

function subRamoCompaniaPorEmpresa(_x3, _x4) {
  return _subRamoCompaniaPorEmpresa.apply(this, arguments);
}

function _subRamoCompaniaPorEmpresa() {
  _subRamoCompaniaPorEmpresa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var empresaid, subRamoCompania;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            empresaid = req.params.empresaid;
            _context2.prev = 1;
            console.log(req.params); //const subRamoCompania = await SubRamoCompania.findAll({ where: { estado: 'ACT', subramoid } });

            _context2.next = 5;
            return _database.sequelize.query("select rc.*,r.nombre nombreramo from sub_ramo_compania  rc " + "inner join ramo r on r.id=rc.ramoid " + "where r.empresaid= '" + empresaid + "' and rc.estado ='ACT' order by rc.id ", {
              type: QueryTypes.SELECT
            });

          case 5:
            subRamoCompania = _context2.sent;
            res.json({
              data: subRamoCompania
            });
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
  return _subRamoCompaniaPorEmpresa.apply(this, arguments);
}

function subRamoCompaniaPorRamo(_x5, _x6) {
  return _subRamoCompaniaPorRamo.apply(this, arguments);
}

function _subRamoCompaniaPorRamo() {
  _subRamoCompaniaPorRamo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var subramoid, subRamoCompania;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            subramoid = req.params.subramoid;
            _context3.prev = 1;
            console.log(req.params);
            _context3.next = 5;
            return _database.sequelize.query("select rc.*,r.nombre nombreramo from sub_ramo_compania  rc " + "inner join ramo r on r.id=rc.ramoid " + "where r.id= '" + subramoid + "' and rc.estado ='ACT' order by rc.id ", {
              type: QueryTypes.SELECT
            });

          case 5:
            subRamoCompania = _context3.sent;
            res.json({
              data: subRamoCompania
            });
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
  return _subRamoCompaniaPorRamo.apply(this, arguments);
}

function subRamoCompaniaPorCompania(_x7, _x8) {
  return _subRamoCompaniaPorCompania.apply(this, arguments);
}

function _subRamoCompaniaPorCompania() {
  _subRamoCompaniaPorCompania = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var companiaseguroid, subRamoCompania;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            companiaseguroid = req.params.companiaseguroid;
            _context4.prev = 1;
            _context4.next = 4;
            return _database.sequelize.query("select rc.*,s.nombre as nombresubramo,r.nombre nombreramo from sub_ramo_compania  rc  " + "inner join sub_ramo s on s.id=rc.subramoid " + "inner join ramo r on r.id=s.ramoid " + "where rc.companiaseguroid= '" + companiaseguroid + "' and rc.estado ='ACT' order by rc.id ", {
              type: QueryTypes.SELECT
            });

          case 4:
            subRamoCompania = _context4.sent;
            res.json({
              data: subRamoCompania
            });
            _context4.next = 12;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
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
    }, _callee4, null, [[1, 8]]);
  }));
  return _subRamoCompaniaPorCompania.apply(this, arguments);
}

function createSubRamoCompania(_x9, _x10) {
  return _createSubRamoCompania.apply(this, arguments);
}

function _createSubRamoCompania() {
  _createSubRamoCompania = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var _req$body, porcentajecomision, porcentajecomisioncredito, porcentajeprima, porcentajeprimacredito, nota, notacredito, usuarioregistro, usuariomodificacion, _req$body$fecharegist, fecharegistro, fechamodificacion, estado, ramoid, subramoid, companiaseguroid, regSubRamoCompanias, newSubRamoCompania;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body = req.body, porcentajecomision = _req$body.porcentajecomision, porcentajecomisioncredito = _req$body.porcentajecomisioncredito, porcentajeprima = _req$body.porcentajeprima, porcentajeprimacredito = _req$body.porcentajeprimacredito, nota = _req$body.nota, notacredito = _req$body.notacredito, usuarioregistro = _req$body.usuarioregistro, usuariomodificacion = _req$body.usuariomodificacion, _req$body$fecharegist = _req$body.fecharegistro, fecharegistro = _req$body$fecharegist === void 0 ? new Date() : _req$body$fecharegist, fechamodificacion = _req$body.fechamodificacion, estado = _req$body.estado, ramoid = _req$body.ramoid, subramoid = _req$body.subramoid, companiaseguroid = _req$body.companiaseguroid;
            _context5.prev = 1;
            _context5.next = 4;
            return _SubRamoCompania["default"].findAll({
              where: {
                subramoid: subramoid,
                companiaseguroid: companiaseguroid,
                estado: 'ACT'
              }
            });

          case 4:
            regSubRamoCompanias = _context5.sent;
            console.log(regSubRamoCompanias);

            if (!(regSubRamoCompanias.length > 0)) {
              _context5.next = 8;
              break;
            }

            throw new Error("Ya existe Ramo asignado a la Compania!!");

          case 8:
            _context5.next = 10;
            return _SubRamoCompania["default"].create({
              porcentajecomision: porcentajecomision,
              porcentajecomisioncredito: porcentajecomisioncredito,
              porcentajeprima: porcentajeprima,
              porcentajeprimacredito: porcentajeprimacredito,
              nota: nota,
              notacredito: notacredito,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: fecharegistro,
              fechamodificacion: fechamodificacion,
              estado: estado,
              ramoid: ramoid,
              subramoid: subramoid,
              companiaseguroid: companiaseguroid
            }, {
              fields: ['porcentajecomision', 'porcentajecomisioncredito', 'porcentajeprima', 'porcentajeprimacredito', 'nota', 'notacredito', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado', 'ramoid', 'subramoid', 'companiaseguroid']
            });

          case 10:
            newSubRamoCompania = _context5.sent;

            if (!newSubRamoCompania) {
              _context5.next = 13;
              break;
            }

            return _context5.abrupt("return", res.json({
              message: 'SubRamoCompania created successfully',
              data: newSubRamoCompania
            }));

          case 13:
            _context5.next = 19;
            break;

          case 15:
            _context5.prev = 15;
            _context5.t0 = _context5["catch"](1);
            console.log(_context5.t0);
            res.json({
              data: {
                estado: false,
                "error": _context5.t0.message
              }
            });

          case 19:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 15]]);
  }));
  return _createSubRamoCompania.apply(this, arguments);
}

function getOneSubRamoCompania(_x11, _x12) {
  return _getOneSubRamoCompania.apply(this, arguments);
}

function _getOneSubRamoCompania() {
  _getOneSubRamoCompania = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, usuario;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            id = req.params.id;
            _context6.next = 4;
            return _SubRamoCompania["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            usuario = _context6.sent;
            res.json({
              data: usuario
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
  return _getOneSubRamoCompania.apply(this, arguments);
}

function deleteSubRamoCompania(_x13, _x14) {
  return _deleteSubRamoCompania.apply(this, arguments);
}

function _deleteSubRamoCompania() {
  _deleteSubRamoCompania = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            id = req.params.id;
            _context7.next = 4;
            return _SubRamoCompania["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context7.sent;
            res.json({
              message: 'SubRamoCompania deleted successfully',
              count: deleteRowCount
            });
            _context7.next = 12;
            break;

          case 8:
            _context7.prev = 8;
            _context7.t0 = _context7["catch"](0);
            console.log(_context7.t0);
            res.json({
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
  return _deleteSubRamoCompania.apply(this, arguments);
}

function updateSubRamoCompania(_x15, _x16) {
  return _updateSubRamoCompania.apply(this, arguments);
}

function _updateSubRamoCompania() {
  _updateSubRamoCompania = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
    var id, _req$body2, porcentajecomision, porcentajecomisioncredito, porcentajeprima, porcentajeprimacredito, nota, notacredito, usuarioregistro, usuariomodificacion, fecharegistro, fechamodificacion, estado, ramoid, subramoid, companiaseguroid, updateRowCount, subRamoCompania;

    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, porcentajecomision = _req$body2.porcentajecomision, porcentajecomisioncredito = _req$body2.porcentajecomisioncredito, porcentajeprima = _req$body2.porcentajeprima, porcentajeprimacredito = _req$body2.porcentajeprimacredito, nota = _req$body2.nota, notacredito = _req$body2.notacredito, usuarioregistro = _req$body2.usuarioregistro, usuariomodificacion = _req$body2.usuariomodificacion, fecharegistro = _req$body2.fecharegistro, fechamodificacion = _req$body2.fechamodificacion, estado = _req$body2.estado, ramoid = _req$body2.ramoid, subramoid = _req$body2.subramoid, companiaseguroid = _req$body2.companiaseguroid;
            _context8.prev = 2;
            _context8.next = 5;
            return _SubRamoCompania["default"].update({
              porcentajecomision: porcentajecomision,
              porcentajecomisioncredito: porcentajecomisioncredito,
              porcentajeprima: porcentajeprima,
              porcentajeprimacredito: porcentajeprimacredito,
              nota: nota,
              notacredito: notacredito,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: fecharegistro,
              fechamodificacion: fechamodificacion,
              estado: estado,
              ramoid: ramoid,
              subramoid: subramoid,
              companiaseguroid: companiaseguroid
            }, {
              where: {
                id: id
              }
            });

          case 5:
            updateRowCount = _context8.sent;
            _context8.next = 8;
            return _SubRamoCompania["default"].findOne({
              where: {
                id: id
              }
            });

          case 8:
            subRamoCompania = _context8.sent;
            res.json({
              message: 'SubRamoCompania update successfully',
              count: subRamoCompania
            });
            _context8.next = 16;
            break;

          case 12:
            _context8.prev = 12;
            _context8.t0 = _context8["catch"](2);
            console.log(_context8.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context8.t0.message
              }
            });

          case 16:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[2, 12]]);
  }));
  return _updateSubRamoCompania.apply(this, arguments);
}

function bajaSubRamoCompania(_x17, _x18) {
  return _bajaSubRamoCompania.apply(this, arguments);
}

function _bajaSubRamoCompania() {
  _bajaSubRamoCompania = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(req, res) {
    var id, usuariomodificacion, updateRowCount, subRamoCompania;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            id = req.params.id;
            console.log("bajaSubRamoCompania");
            usuariomodificacion = req.body.usuariomodificacion;
            _context9.prev = 3;
            _context9.next = 6;
            return _SubRamoCompania["default"].update({
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
            updateRowCount = _context9.sent;
            _context9.next = 9;
            return _SubRamoCompania["default"].findOne({
              where: {
                id: id
              }
            });

          case 9:
            subRamoCompania = _context9.sent;
            res.json({
              message: 'SubRamoCompania baja successfully',
              count: subRamoCompania
            });
            _context9.next = 17;
            break;

          case 13:
            _context9.prev = 13;
            _context9.t0 = _context9["catch"](3);
            console.log(_context9.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context9.t0.message
              }
            });

          case 17:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[3, 13]]);
  }));
  return _bajaSubRamoCompania.apply(this, arguments);
}