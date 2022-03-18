"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bajaRamoCompania = bajaRamoCompania;
exports.createRamoCompania = createRamoCompania;
exports.deleteRamoCompania = deleteRamoCompania;
exports.getOneRamoCompania = getOneRamoCompania;
exports.getRamoCompania = getRamoCompania;
exports.ramoCompaniaPorCompania = ramoCompaniaPorCompania;
exports.ramoCompaniaPorEmpresa = ramoCompaniaPorEmpresa;
exports.ramoCompaniaPorRamo = ramoCompaniaPorRamo;
exports.updateRamoCompania = updateRamoCompania;

var _database = require("../database/database");

var _RamoCompania = _interopRequireDefault(require("../models/RamoCompania"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require('sequelize'),
    QueryTypes = _require.QueryTypes;

function getRamoCompania(_x, _x2) {
  return _getRamoCompania.apply(this, arguments);
}

function _getRamoCompania() {
  _getRamoCompania = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var ramoCompania;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _RamoCompania["default"].findAll({
              where: {
                estado: 'ACT'
              }
            });

          case 3:
            ramoCompania = _context.sent;
            res.json({
              data: ramoCompania
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
  return _getRamoCompania.apply(this, arguments);
}

function createRamoCompania(_x3, _x4) {
  return _createRamoCompania.apply(this, arguments);
}

function _createRamoCompania() {
  _createRamoCompania = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, porcentajecomision, porcentajecomisioncredito, porcentajeprima, porcentajeprimacredito, nota, notacredito, usuarioregistro, usuariomodificacion, _req$body$fecharegist, fecharegistro, fechamodificacion, estado, ramoid, subramoid, companiaseguroid, regRamoCompanias, newRamoCompania;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, porcentajecomision = _req$body.porcentajecomision, porcentajecomisioncredito = _req$body.porcentajecomisioncredito, porcentajeprima = _req$body.porcentajeprima, porcentajeprimacredito = _req$body.porcentajeprimacredito, nota = _req$body.nota, notacredito = _req$body.notacredito, usuarioregistro = _req$body.usuarioregistro, usuariomodificacion = _req$body.usuariomodificacion, _req$body$fecharegist = _req$body.fecharegistro, fecharegistro = _req$body$fecharegist === void 0 ? new Date() : _req$body$fecharegist, fechamodificacion = _req$body.fechamodificacion, estado = _req$body.estado, ramoid = _req$body.ramoid, subramoid = _req$body.subramoid, companiaseguroid = _req$body.companiaseguroid;
            _context2.prev = 1;
            _context2.next = 4;
            return _RamoCompania["default"].findAll({
              where: {
                subramoid: subramoid,
                companiaseguroid: companiaseguroid,
                estado: 'ACT'
              }
            });

          case 4:
            regRamoCompanias = _context2.sent;
            console.log(regRamoCompanias);

            if (!(regRamoCompanias.length > 0)) {
              _context2.next = 8;
              break;
            }

            throw new Error("Ya existe Ramo asignado a la Compania!!");

          case 8:
            _context2.next = 10;
            return _RamoCompania["default"].create({
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
            newRamoCompania = _context2.sent;

            if (!newRamoCompania) {
              _context2.next = 13;
              break;
            }

            return _context2.abrupt("return", res.json({
              message: 'RamoCompania created successfully',
              data: newRamoCompania
            }));

          case 13:
            _context2.next = 19;
            break;

          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            res.json({
              data: {
                estado: false,
                "error": _context2.t0.message
              }
            });

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 15]]);
  }));
  return _createRamoCompania.apply(this, arguments);
}

function getOneRamoCompania(_x5, _x6) {
  return _getOneRamoCompania.apply(this, arguments);
}

function _getOneRamoCompania() {
  _getOneRamoCompania = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, usuario;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _RamoCompania["default"].findOne({
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
  return _getOneRamoCompania.apply(this, arguments);
}

function deleteRamoCompania(_x7, _x8) {
  return _deleteRamoCompania.apply(this, arguments);
}

function _deleteRamoCompania() {
  _deleteRamoCompania = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _RamoCompania["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context4.sent;
            res.json({
              message: 'RamoCompania deleted successfully',
              count: deleteRowCount
            });
            _context4.next = 12;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            res.json({
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
  return _deleteRamoCompania.apply(this, arguments);
}

function updateRamoCompania(_x9, _x10) {
  return _updateRamoCompania.apply(this, arguments);
}

function _updateRamoCompania() {
  _updateRamoCompania = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, _req$body2, porcentajecomision, porcentajecomisioncredito, porcentajeprima, porcentajeprimacredito, nota, notacredito, usuarioregistro, usuariomodificacion, fecharegistro, fechamodificacion, estado, ramoid, subramoid, companiaseguroid, updateRowCount, ramoCompania;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, porcentajecomision = _req$body2.porcentajecomision, porcentajecomisioncredito = _req$body2.porcentajecomisioncredito, porcentajeprima = _req$body2.porcentajeprima, porcentajeprimacredito = _req$body2.porcentajeprimacredito, nota = _req$body2.nota, notacredito = _req$body2.notacredito, usuarioregistro = _req$body2.usuarioregistro, usuariomodificacion = _req$body2.usuariomodificacion, fecharegistro = _req$body2.fecharegistro, fechamodificacion = _req$body2.fechamodificacion, estado = _req$body2.estado, ramoid = _req$body2.ramoid, subramoid = _req$body2.subramoid, companiaseguroid = _req$body2.companiaseguroid;
            _context5.prev = 2;
            _context5.next = 5;
            return _RamoCompania["default"].update({
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
            updateRowCount = _context5.sent;
            _context5.next = 8;
            return _RamoCompania["default"].findOne({
              where: {
                id: id
              }
            });

          case 8:
            ramoCompania = _context5.sent;
            res.json({
              message: 'RamoCompania update successfully',
              count: ramoCompania
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
  return _updateRamoCompania.apply(this, arguments);
}

function bajaRamoCompania(_x11, _x12) {
  return _bajaRamoCompania.apply(this, arguments);
}

function _bajaRamoCompania() {
  _bajaRamoCompania = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, usuariomodificacion, updateRowCount, ramoCompania;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            console.log("bajaRamoCompania");
            usuariomodificacion = req.body.usuariomodificacion;
            _context6.prev = 3;
            _context6.next = 6;
            return _RamoCompania["default"].update({
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
            return _RamoCompania["default"].findOne({
              where: {
                id: id
              }
            });

          case 9:
            ramoCompania = _context6.sent;
            res.json({
              message: 'RamoCompania baja successfully',
              count: ramoCompania
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
  return _bajaRamoCompania.apply(this, arguments);
}

function ramoCompaniaPorEmpresa(_x13, _x14) {
  return _ramoCompaniaPorEmpresa.apply(this, arguments);
}

function _ramoCompaniaPorEmpresa() {
  _ramoCompaniaPorEmpresa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var empresaid, ramoCompania;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            empresaid = req.params.empresaid;
            _context7.prev = 1;
            console.log(req.params); //const ramoCompania = await RamoCompania.findAll({ where: { estado: 'ACT', subramoid } });

            _context7.next = 5;
            return _database.sequelize.query("\tselect rc.*,r.nombre nombreramo \n        from ramo_compania  rc \n        inner join ramo r on r.id=rc.ramoid \n        where r.empresaid= '" + empresaid + "' and rc.estado ='ACT' order by  r.nombre ", {
              type: QueryTypes.SELECT
            });

          case 5:
            ramoCompania = _context7.sent;
            res.json({
              data: ramoCompania
            });
            _context7.next = 13;
            break;

          case 9:
            _context7.prev = 9;
            _context7.t0 = _context7["catch"](1);
            console.log(_context7.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context7.t0.message
              }
            });

          case 13:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[1, 9]]);
  }));
  return _ramoCompaniaPorEmpresa.apply(this, arguments);
}

function ramoCompaniaPorRamo(_x15, _x16) {
  return _ramoCompaniaPorRamo.apply(this, arguments);
}

function _ramoCompaniaPorRamo() {
  _ramoCompaniaPorRamo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
    var ramoid, ramoCompania;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            ramoid = req.params.ramoid;
            _context8.prev = 1;
            console.log(req.params);
            _context8.next = 5;
            return _database.sequelize.query("\tselect rc.*,r.nombre nombreramo \n        from ramo_compania  rc \n        inner join ramo r on r.id=rc.ramoid \n        where r.id= '" + ramoid + "' and rc.estado ='ACT' order by r.nombre ", {
              type: QueryTypes.SELECT
            });

          case 5:
            ramoCompania = _context8.sent;
            res.json({
              data: ramoCompania
            });
            _context8.next = 13;
            break;

          case 9:
            _context8.prev = 9;
            _context8.t0 = _context8["catch"](1);
            console.log(_context8.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context8.t0.message
              }
            });

          case 13:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[1, 9]]);
  }));
  return _ramoCompaniaPorRamo.apply(this, arguments);
}

function ramoCompaniaPorCompania(_x17, _x18) {
  return _ramoCompaniaPorCompania.apply(this, arguments);
}

function _ramoCompaniaPorCompania() {
  _ramoCompaniaPorCompania = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(req, res) {
    var companiaseguroid, ramoCompania;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            companiaseguroid = req.params.companiaseguroid;
            _context9.prev = 1;
            _context9.next = 4;
            return _database.sequelize.query("\tselect rc.*,s.nombre as nombresubramo,r.nombre nombreramo,r.tiporamoid,r.spvs spvsramo,s.spvs spvsubramo,t.spvs spvstiporamo \n        from ramo_compania  rc  \n        inner join ramo r on r.id=s.ramoid \n        left join ramo s on s.ramoid=r.id  \n        inner join tipo_ramo t on t.id=r.tiporamoid \n        where rc.companiaseguroid= '" + companiaseguroid + "' and rc.estado ='ACT' order by t.nombre,r.nombre ", {
              type: QueryTypes.SELECT
            });

          case 4:
            ramoCompania = _context9.sent;
            res.json({
              data: ramoCompania
            });
            _context9.next = 12;
            break;

          case 8:
            _context9.prev = 8;
            _context9.t0 = _context9["catch"](1);
            console.log(_context9.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context9.t0.message
              }
            });

          case 12:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[1, 8]]);
  }));
  return _ramoCompaniaPorCompania.apply(this, arguments);
}