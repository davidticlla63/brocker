"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPolizaDetallePersonaTitulars = getPolizaDetallePersonaTitulars;
exports.createPolizaDetallePersonaTitular = createPolizaDetallePersonaTitular;
exports.updatePolizaDetallePersonaTitular = updatePolizaDetallePersonaTitular;
exports.bajaPolizaDetallePersonaTitular = bajaPolizaDetallePersonaTitular;
exports.getPolizaDetallePersonaTitularPorPoliza = getPolizaDetallePersonaTitularPorPoliza;
exports.polizaDetallePersonaTitularsPorPoliza = polizaDetallePersonaTitularsPorPoliza;
exports.deletePolizaDetallePersonaTitular = deletePolizaDetallePersonaTitular;

var _PolizaDetallePersonaTitular = _interopRequireDefault(require("../models/PolizaDetallePersonaTitular"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getPolizaDetallePersonaTitulars(_x, _x2) {
  return _getPolizaDetallePersonaTitulars.apply(this, arguments);
}

function _getPolizaDetallePersonaTitulars() {
  _getPolizaDetallePersonaTitulars = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var polizaDetallePersonaTitulars;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _PolizaDetallePersonaTitular["default"].findAll({
              where: {
                estado: 'ACT'
              }
            });

          case 3:
            polizaDetallePersonaTitulars = _context.sent;
            res.json({
              data: polizaDetallePersonaTitulars
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
  return _getPolizaDetallePersonaTitulars.apply(this, arguments);
}

function createPolizaDetallePersonaTitular(_x3, _x4) {
  return _createPolizaDetallePersonaTitular.apply(this, arguments);
}

function _createPolizaDetallePersonaTitular() {
  _createPolizaDetallePersonaTitular = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, titular, placa, tipovehiculo, marcavehiculo, colorvehiculo, aniovehiculo, primaindividual, primanetaindividualbs, primanetaindividualusd, usuarioregistro, usuariomodificacion, _req$body$fecharegist, fecharegistro, _req$body$fechamodifi, fechamodificacion, estado, polizaid, adicionales, t, newPolizaDetallePersonaTitular, i;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, titular = _req$body.titular, placa = _req$body.placa, tipovehiculo = _req$body.tipovehiculo, marcavehiculo = _req$body.marcavehiculo, colorvehiculo = _req$body.colorvehiculo, aniovehiculo = _req$body.aniovehiculo, primaindividual = _req$body.primaindividual, primanetaindividualbs = _req$body.primanetaindividualbs, primanetaindividualusd = _req$body.primanetaindividualusd, usuarioregistro = _req$body.usuarioregistro, usuariomodificacion = _req$body.usuariomodificacion, _req$body$fecharegist = _req$body.fecharegistro, fecharegistro = _req$body$fecharegist === void 0 ? new Date() : _req$body$fecharegist, _req$body$fechamodifi = _req$body.fechamodificacion, fechamodificacion = _req$body$fechamodifi === void 0 ? new Date() : _req$body$fechamodifi, estado = _req$body.estado, polizaid = _req$body.polizaid, adicionales = _req$body.adicionales;
            _context2.next = 3;
            return sequelize.transaction();

          case 3:
            t = _context2.sent;
            _context2.prev = 4;
            _context2.next = 7;
            return _PolizaDetallePersonaTitular["default"].create({
              /*   nropoliza,
                nrocertificado,
                fechainiciovigencia,
                fechafinvigencia,
                fechainclusion,
                prima,
                porcentajeprima,
                primaneta,
                porcentajecomision,
                detalle, */
              titular: titular,
              placa: placa,
              tipovehiculo: tipovehiculo,
              marcavehiculo: marcavehiculo,
              colorvehiculo: colorvehiculo,
              aniovehiculo: aniovehiculo,
              primaindividual: primaindividual,
              primanetaindividualbs: primanetaindividualbs,
              primanetaindividualusd: primanetaindividualusd,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: fecharegistro,
              fechamodificacion: fechamodificacion,
              estado: estado,
              polizaid: polizaid
            }, {
              fields: [
              /*  'nropoliza',
               'nrocertificado',
               'fechainiciovigencia',
               'fechafinvigencia',
               'fechainclusion',
               'prima',
               'porcentajeprima',
               'primaneta',
               'porcentajecomision',
               'detalle', */
              'titular', 'placa', 'tipovehiculo', 'marcavehiculo', 'colorvehiculo', 'aniovehiculo', 'primaindividual', 'primanetaindividualbs', 'primanetaindividualusd', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado', 'polizaid']
            }, {
              transaction: t
            });

          case 7:
            newPolizaDetallePersonaTitular = _context2.sent;
            i = 0;

          case 9:
            if (!(i < adicionales.length)) {
              _context2.next = 15;
              break;
            }

            _context2.next = 12;
            return PolizaDetallePersonaTitularAdicional.create({
              polizadetalleid: newPolizaDetallePersonaTitular.id,
              valor: adicionales[i].valor,
              dato: adicionales[i].dato,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuarioregistro,
              fecharegistro: new Date(),
              fechamodificacion: new Date(),
              estado: 'ACT'
            }, {
              fields: ['polizadetalleid', 'valor', 'dato', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado']
            }, {
              transaction: t
            });

          case 12:
            i++;
            _context2.next = 9;
            break;

          case 15:
            _context2.next = 17;
            return t.commit();

          case 17:
            if (!newPolizaDetallePersonaTitular) {
              _context2.next = 19;
              break;
            }

            return _context2.abrupt("return", res.json({
              message: 'PolizaDetallePersonaTitular created successfully',
              data: newPolizaDetallePersonaTitular
            }));

          case 19:
            _context2.next = 30;
            break;

          case 21:
            _context2.prev = 21;
            _context2.t0 = _context2["catch"](4);

            if (!t) {
              _context2.next = 29;
              break;
            }

            _context2.next = 26;
            return t.rollback();

          case 26:
            if (!newPolizaDetallePersonaTitular) {
              _context2.next = 29;
              break;
            }

            _context2.next = 29;
            return Poliza.destroy({
              where: {
                id: newPoliza.id
              }
            });

          case 29:
            res.status(500).json({
              data: {
                estado: false,
                "error": _context2.t0.message
              }
            });

          case 30:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[4, 21]]);
  }));
  return _createPolizaDetallePersonaTitular.apply(this, arguments);
}

function updatePolizaDetallePersonaTitular(_x5, _x6) {
  return _updatePolizaDetallePersonaTitular.apply(this, arguments);
}

function _updatePolizaDetallePersonaTitular() {
  _updatePolizaDetallePersonaTitular = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, _req$body2, titular, placa, tipovehiculo, marcavehiculo, colorvehiculo, aniovehiculo, primaindividual, primanetaindividualbs, primanetaindividualusd, usuarioregistro, usuariomodificacion, fecharegistro, _req$body2$fechamodif, fechamodificacion, estado, updateRowCount, polizaDetallePersonaTitulars;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, titular = _req$body2.titular, placa = _req$body2.placa, tipovehiculo = _req$body2.tipovehiculo, marcavehiculo = _req$body2.marcavehiculo, colorvehiculo = _req$body2.colorvehiculo, aniovehiculo = _req$body2.aniovehiculo, primaindividual = _req$body2.primaindividual, primanetaindividualbs = _req$body2.primanetaindividualbs, primanetaindividualusd = _req$body2.primanetaindividualusd, usuarioregistro = _req$body2.usuarioregistro, usuariomodificacion = _req$body2.usuariomodificacion, fecharegistro = _req$body2.fecharegistro, _req$body2$fechamodif = _req$body2.fechamodificacion, fechamodificacion = _req$body2$fechamodif === void 0 ? new Date() : _req$body2$fechamodif, estado = _req$body2.estado;
            _context3.prev = 2;
            _context3.next = 5;
            return _PolizaDetallePersonaTitular["default"].update({
              /*  nropoliza,
               nrocertificado,
               fechainiciovigencia,
               fechafinvigencia,
               fechainclusion,
               prima,
               porcentajeprima,
               primaneta,
               porcentajecomision,
               detalle, */
              titular: titular,
              placa: placa,
              tipovehiculo: tipovehiculo,
              marcavehiculo: marcavehiculo,
              colorvehiculo: colorvehiculo,
              aniovehiculo: aniovehiculo,
              primaindividual: primaindividual,
              primanetaindividualbs: primanetaindividualbs,
              primanetaindividualusd: primanetaindividualusd,
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
            updateRowCount = _context3.sent;
            _context3.next = 8;
            return _PolizaDetallePersonaTitular["default"].findOne({
              where: {
                id: id
              }
            });

          case 8:
            polizaDetallePersonaTitulars = _context3.sent;
            res.json({
              message: 'PolizaDetallePersonaTitular update successfully',
              count: polizaDetallePersonaTitulars
            });
            _context3.next = 16;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](2);
            console.log(_context3.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context3.t0.message
              }
            });

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 12]]);
  }));
  return _updatePolizaDetallePersonaTitular.apply(this, arguments);
}

function bajaPolizaDetallePersonaTitular(_x7, _x8) {
  return _bajaPolizaDetallePersonaTitular.apply(this, arguments);
}

function _bajaPolizaDetallePersonaTitular() {
  _bajaPolizaDetallePersonaTitular = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, usuariomodificacion, updateRowCount, polizaDetallePersonaTitulars;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            console.log("bajaPolizaDetallePersonaTitular");
            usuariomodificacion = req.body.usuariomodificacion;
            _context4.prev = 3;
            _context4.next = 6;
            return _PolizaDetallePersonaTitular["default"].update({
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
            updateRowCount = _context4.sent;
            _context4.next = 9;
            return _PolizaDetallePersonaTitular["default"].findOne({
              where: {
                id: id
              }
            });

          case 9:
            polizaDetallePersonaTitulars = _context4.sent;
            res.json({
              message: 'PolizaDetallePersonaTitular baja successfully',
              count: polizaDetallePersonaTitulars
            });
            _context4.next = 17;
            break;

          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4["catch"](3);
            console.log(_context4.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context4.t0.message
              }
            });

          case 17:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[3, 13]]);
  }));
  return _bajaPolizaDetallePersonaTitular.apply(this, arguments);
}

function getPolizaDetallePersonaTitularPorPoliza(_x9, _x10) {
  return _getPolizaDetallePersonaTitularPorPoliza.apply(this, arguments);
}

function _getPolizaDetallePersonaTitularPorPoliza() {
  _getPolizaDetallePersonaTitularPorPoliza = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var polizadetallepersonaid, usuario;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            polizadetallepersonaid = req.params.polizadetallepersonaid;
            _context5.next = 4;
            return _PolizaDetallePersonaTitular["default"].findAll({
              where: {
                polizadetallepersonaid: polizadetallepersonaid,
                estado: 'ACT'
              }
            });

          case 4:
            usuario = _context5.sent;
            res.json({
              data: usuario
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
  return _getPolizaDetallePersonaTitularPorPoliza.apply(this, arguments);
}

function polizaDetallePersonaTitularsPorPoliza(_x11, _x12) {
  return _polizaDetallePersonaTitularsPorPoliza.apply(this, arguments);
}

function _polizaDetallePersonaTitularsPorPoliza() {
  _polizaDetallePersonaTitularsPorPoliza = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var polizadetallepersonaid, polizaDetallePersonaTitulars;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            polizadetallepersonaid = req.params.polizadetallepersonaid;
            _context6.prev = 1;
            console.log(req.params);
            _context6.next = 5;
            return _PolizaDetallePersonaTitular["default"].findAll({
              where: {
                estado: 'ACT',
                polizadetallepersonaid: polizadetallepersonaid
              }
            });

          case 5:
            polizaDetallePersonaTitulars = _context6.sent;
            res.json({
              data: polizaDetallePersonaTitulars
            });
            _context6.next = 13;
            break;

          case 9:
            _context6.prev = 9;
            _context6.t0 = _context6["catch"](1);
            console.log(_context6.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context6.t0.message
              }
            });

          case 13:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 9]]);
  }));
  return _polizaDetallePersonaTitularsPorPoliza.apply(this, arguments);
}

function deletePolizaDetallePersonaTitular(_x13, _x14) {
  return _deletePolizaDetallePersonaTitular.apply(this, arguments);
}

function _deletePolizaDetallePersonaTitular() {
  _deletePolizaDetallePersonaTitular = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            id = req.params.id;
            _context7.next = 4;
            return _PolizaDetallePersonaTitular["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context7.sent;
            res.json({
              message: 'PolizaDetallePersonaTitular deleted successfully',
              count: deleteRowCount
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
  return _deletePolizaDetallePersonaTitular.apply(this, arguments);
}