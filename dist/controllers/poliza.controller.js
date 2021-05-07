"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPolizas = getPolizas;
exports.createPoliza = createPoliza;
exports.getOnePoliza = getOnePoliza;
exports.polizasPorSucursal = polizasPorSucursal;
exports.deletePoliza = deletePoliza;
exports.updatePoliza = updatePoliza;
exports.bajaPoliza = bajaPoliza;
exports.getPolizaPorTipoYSucursal = getPolizaPorTipoYSucursal;
exports.getPolizasPorTipoYEmpresa = getPolizasPorTipoYEmpresa;
exports.getPolizasPorTipoRamoYEmpresa = getPolizasPorTipoRamoYEmpresa;
exports.getPolizasPorTipoRamoYSucursal = getPolizasPorTipoRamoYSucursal;

var _database = require("../database/database");

var _Archivo = _interopRequireDefault(require("../models/Archivo"));

var _Poliza = _interopRequireDefault(require("../models/Poliza"));

var _PolizaDetalleAdicionales = _interopRequireDefault(require("../models/PolizaDetalleAdicionales"));

var _PolizaDetalle = _interopRequireDefault(require("../models/PolizaDetalle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require('sequelize'),
    QueryTypes = _require.QueryTypes;

function getPolizas(_x, _x2) {
  return _getPolizas.apply(this, arguments);
}

function _getPolizas() {
  _getPolizas = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var polizas;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Poliza["default"].findAll({
              where: {
                estado: 'ACT'
              }
            });

          case 3:
            polizas = _context.sent;
            res.json({
              data: polizas
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
  return _getPolizas.apply(this, arguments);
}

function createPoliza(_x3, _x4) {
  return _createPoliza.apply(this, arguments);
}

function _createPoliza() {
  _createPoliza = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, nropoliza, nrocertificado, fechainicio, fechafin, fechaexpedicion, fecharecepcion, tipomoneda, primatotal, formapago, encargadoid, bancoid, ciudadexpedicion, broker, notas, companiaseguroid, subramocompaniaid, tiporamoid, contratanteid, tomadorid, ejecutivoid, colocacionid, ciaspvs, tipopolizaid, tpoliza, tipocontrato, menoid, llamadoid, vendedorid, nroplaca, tipoemision, franquicia, valorasegurado, comisionbs, comisionusd, tipocambio, porcentajeprima, primaneta, porcentajecomision, archivos, automotores, usuarioregistro, usuariomodificacion, _req$body$fecharegist, fecharegistro, _req$body$fechamodifi, fechamodificacion, _req$body$estado, estado, sucursalid, t, newPoliza, i, _i, newPolizaDetalle, campos, j;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, nropoliza = _req$body.nropoliza, nrocertificado = _req$body.nrocertificado, fechainicio = _req$body.fechainicio, fechafin = _req$body.fechafin, fechaexpedicion = _req$body.fechaexpedicion, fecharecepcion = _req$body.fecharecepcion, tipomoneda = _req$body.tipomoneda, primatotal = _req$body.primatotal, formapago = _req$body.formapago, encargadoid = _req$body.encargadoid, bancoid = _req$body.bancoid, ciudadexpedicion = _req$body.ciudadexpedicion, broker = _req$body.broker, notas = _req$body.notas, companiaseguroid = _req$body.companiaseguroid, subramocompaniaid = _req$body.subramocompaniaid, tiporamoid = _req$body.tiporamoid, contratanteid = _req$body.contratanteid, tomadorid = _req$body.tomadorid, ejecutivoid = _req$body.ejecutivoid, colocacionid = _req$body.colocacionid, ciaspvs = _req$body.ciaspvs, tipopolizaid = _req$body.tipopolizaid, tpoliza = _req$body.tpoliza, tipocontrato = _req$body.tipocontrato, menoid = _req$body.menoid, llamadoid = _req$body.llamadoid, vendedorid = _req$body.vendedorid, nroplaca = _req$body.nroplaca, tipoemision = _req$body.tipoemision, franquicia = _req$body.franquicia, valorasegurado = _req$body.valorasegurado, comisionbs = _req$body.comisionbs, comisionusd = _req$body.comisionusd, tipocambio = _req$body.tipocambio, porcentajeprima = _req$body.porcentajeprima, primaneta = _req$body.primaneta, porcentajecomision = _req$body.porcentajecomision, archivos = _req$body.archivos, automotores = _req$body.automotores, usuarioregistro = _req$body.usuarioregistro, usuariomodificacion = _req$body.usuariomodificacion, _req$body$fecharegist = _req$body.fecharegistro, fecharegistro = _req$body$fecharegist === void 0 ? new Date() : _req$body$fecharegist, _req$body$fechamodifi = _req$body.fechamodificacion, fechamodificacion = _req$body$fechamodifi === void 0 ? new Date() : _req$body$fechamodifi, _req$body$estado = _req$body.estado, estado = _req$body$estado === void 0 ? 'ACT' : _req$body$estado, sucursalid = _req$body.sucursalid;
            _context2.next = 3;
            return _database.sequelize.transaction();

          case 3:
            t = _context2.sent;
            _context2.prev = 4;
            _context2.next = 7;
            return _Poliza["default"].create({
              nropoliza: nropoliza,
              nrocertificado: nrocertificado,
              fechainicio: fechainicio,
              fechafin: fechafin,
              fechaexpedicion: fechaexpedicion,
              fecharecepcion: fecharecepcion,
              tipomoneda: tipomoneda,
              primatotal: primatotal,
              formapago: formapago,
              encargadoid: encargadoid,
              bancoid: bancoid,
              ciudadexpedicion: ciudadexpedicion,
              broker: broker,
              notas: notas,
              companiaseguroid: companiaseguroid,
              subramocompaniaid: subramocompaniaid,
              tiporamoid: tiporamoid,
              contratanteid: contratanteid,
              tomadorid: tomadorid,
              ejecutivoid: ejecutivoid,
              colocacionid: colocacionid,
              ciaspvs: ciaspvs,
              tipopolizaid: tipopolizaid,
              tpoliza: tpoliza,
              tipocontrato: tipocontrato,
              menoid: menoid,
              llamadoid: llamadoid,
              vendedorid: vendedorid,
              nroplaca: nroplaca,
              tipoemision: tipoemision,
              franquicia: franquicia,
              valorasegurado: valorasegurado,

              /*     fechainiciovigencia,
                  fechafinvigencia,
                  fechainclusion,
                  prima,
                  porcentajeprima,
                  primaneta,
                  porcentajecomision,
                  detalle, */
              comisionbs: comisionbs,
              comisionusd: comisionusd,
              tipocambio: tipocambio,
              porcentajeprima: porcentajeprima,
              primaneta: primaneta,
              porcentajecomision: porcentajecomision,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: fecharegistro,
              fechamodificacion: fechamodificacion,
              estado: estado,
              sucursalid: sucursalid
            }, {
              fields: ['nropoliza', 'nrocertificado', 'fechainicio', 'fechafin', 'fechaexpedicion', 'fecharecepcion', 'tipomoneda', 'primatotal', 'formapago', 'encargadoid', 'bancoid', 'ciudadexpedicion', 'broker', 'notas', 'companiaseguroid', 'subramocompaniaid', 'tiporamoid', 'contratanteid', 'tomadorid', 'ejecutivoid', 'colocacionid', 'ciaspvs', 'tipopolizaid', 'tpoliza', 'tipocontrato', 'menoid', 'llamadoid', 'vendedorid', 'nroplaca', 'tipoemision', 'franquicia', 'valorasegurado',
              /*     'fechainiciovigencia',
                  'fechafinvigencia',
                  'fechainclusion',
                  'prima',
                  'porcentajeprima',
                  'primaneta',
                  'porcentajecomision',
                  'detalle', */
              'comisionbs', 'comisionusd', 'tipocambio', 'porcentajeprima', 'primaneta', 'porcentajecomision', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado', 'sucursalid']
            }, {
              transaction: t
            });

          case 7:
            newPoliza = _context2.sent;
            i = 0;

          case 9:
            if (!(i < archivos.length)) {
              _context2.next = 15;
              break;
            }

            _context2.next = 12;
            return _Archivo["default"].create({
              codigo: newPoliza.id,
              nombre: archivos[i].nombre,
              descripcion: archivos[i].nombre,
              extension: archivos[i].extension,
              archivo: archivos[i].archivo,
              aseguradoid: tomadorid,
              sucursalid: sucursalid,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuarioregistro,
              fecharegistro: new Date(),
              fechamodificacion: new Date(),
              estado: 'ACT'
            }, {
              fields: ['codigo', 'nombre', 'descripcion', 'extension', 'archivo', 'aseguradoid', 'sucursalid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado']
            }, {
              transaction: t
            });

          case 12:
            i++;
            _context2.next = 9;
            break;

          case 15:
            _i = 0;

          case 16:
            if (!(_i < automotores.length)) {
              _context2.next = 31;
              break;
            }

            _context2.next = 19;
            return _PolizaDetalle["default"].create({
              titular: automotores[_i].titular,
              placa: automotores[_i].placa,
              tipovehiculo: automotores[_i].tipovehiculo,
              marcavehiculo: automotores[_i].marcavehiculo,
              colorvehiculo: automotores[_i].colorvehiculo,
              aniovehiculo: automotores[_i].aniovehiculo,
              primaindividual: automotores[_i].primaindividual,
              primanetaindividualbs: automotores[_i].primanetaindividualbs,
              primanetaindividualusd: automotores[_i].primanetaindividualusd,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: new Date(),
              fechamodificacion: new Date(),
              estado: 'ACT',
              polizaid: newPoliza.id
            }, {
              fields: ['titular', 'placa', 'tipovehiculo', 'marcavehiculo', 'colorvehiculo', 'aniovehiculo', 'primaindividual', 'primanetaindividualbs', 'primanetaindividualusd', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado', 'polizaid']
            }, {
              transaction: t
            });

          case 19:
            newPolizaDetalle = _context2.sent;
            campos = automotores[_i].campos;
            j = 0;

          case 22:
            if (!(j < campos.length)) {
              _context2.next = 28;
              break;
            }

            _context2.next = 25;
            return _PolizaDetalleAdicionales["default"].create({
              polizadetalleid: newPolizaDetalle.id,
              valor: campos[j].valor,
              dato: campos[j].dato,
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

          case 25:
            j++;
            _context2.next = 22;
            break;

          case 28:
            _i++;
            _context2.next = 16;
            break;

          case 31:
            _context2.next = 33;
            return t.commit();

          case 33:
            if (!newPoliza) {
              _context2.next = 35;
              break;
            }

            return _context2.abrupt("return", res.json({
              message: 'Poliza created successfully',
              data: newPoliza
            }));

          case 35:
            _context2.next = 47;
            break;

          case 37:
            _context2.prev = 37;
            _context2.t0 = _context2["catch"](4);
            console.log(_context2.t0);

            if (!t) {
              _context2.next = 46;
              break;
            }

            _context2.next = 43;
            return t.rollback();

          case 43:
            if (!newPoliza) {
              _context2.next = 46;
              break;
            }

            _context2.next = 46;
            return _Poliza["default"].destroy({
              where: {
                id: newPoliza.id
              }
            });

          case 46:
            res.status(500).json({
              data: {
                estado: false,
                "error": _context2.t0.message
              }
            });

          case 47:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[4, 37]]);
  }));
  return _createPoliza.apply(this, arguments);
}

function getOnePoliza(_x5, _x6) {
  return _getOnePoliza.apply(this, arguments);
}

function _getOnePoliza() {
  _getOnePoliza = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, poliza;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _Poliza["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            poliza = _context3.sent;
            res.json({
              data: poliza
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
  return _getOnePoliza.apply(this, arguments);
}

function polizasPorSucursal(_x7, _x8) {
  return _polizasPorSucursal.apply(this, arguments);
}

function _polizasPorSucursal() {
  _polizasPorSucursal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var sucursalid, poliza;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            sucursalid = req.params.sucursalid;
            _context4.next = 4;
            return _Poliza["default"].findOne({
              where: {
                sucursalid: sucursalid,
                estado: 'ACT'
              }
            });

          case 4:
            poliza = _context4.sent;
            res.json({
              data: poliza
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
  return _polizasPorSucursal.apply(this, arguments);
}

function deletePoliza(_x9, _x10) {
  return _deletePoliza.apply(this, arguments);
}

function _deletePoliza() {
  _deletePoliza = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return _Poliza["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context5.sent;
            res.json({
              message: 'Poliza deleted successfully',
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
  return _deletePoliza.apply(this, arguments);
}

function updatePoliza(_x11, _x12) {
  return _updatePoliza.apply(this, arguments);
}

function _updatePoliza() {
  _updatePoliza = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, nropoliza, nrocertificado, fechainicio, fechafin, fechaexpedicion, fecharecepcion, tipomoneda, primatotal, formapago, encargadoid, bancoid, ciudadexpedicion, notas, companiaseguroid, subramocompaniaid, contratanteid, tomadorid, ejecutivoid, colocacionid, ciaspvs, tipopolizaid, tpoliza, tipocontrato, menoid, llamadoid, vendedorid, nroplaca, tipoemision, franquicia, valorasegurado, comisionbs, comisionusd, tipocambio, porcentajeprima, primaneta, porcentajecomision, usuarioregistro, usuariomodificacion, fecharegistro, _req$body2$fechamodif, fechamodificacion, estado, sucursalid, archivos, archivoseliminados, t, updateRowCount, i, _i2, polizas;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, nropoliza = _req$body2.nropoliza, nrocertificado = _req$body2.nrocertificado, fechainicio = _req$body2.fechainicio, fechafin = _req$body2.fechafin, fechaexpedicion = _req$body2.fechaexpedicion, fecharecepcion = _req$body2.fecharecepcion, tipomoneda = _req$body2.tipomoneda, primatotal = _req$body2.primatotal, formapago = _req$body2.formapago, encargadoid = _req$body2.encargadoid, bancoid = _req$body2.bancoid, ciudadexpedicion = _req$body2.ciudadexpedicion, notas = _req$body2.notas, companiaseguroid = _req$body2.companiaseguroid, subramocompaniaid = _req$body2.subramocompaniaid, contratanteid = _req$body2.contratanteid, tomadorid = _req$body2.tomadorid, ejecutivoid = _req$body2.ejecutivoid, colocacionid = _req$body2.colocacionid, ciaspvs = _req$body2.ciaspvs, tipopolizaid = _req$body2.tipopolizaid, tpoliza = _req$body2.tpoliza, tipocontrato = _req$body2.tipocontrato, menoid = _req$body2.menoid, llamadoid = _req$body2.llamadoid, vendedorid = _req$body2.vendedorid, nroplaca = _req$body2.nroplaca, tipoemision = _req$body2.tipoemision, franquicia = _req$body2.franquicia, valorasegurado = _req$body2.valorasegurado, comisionbs = _req$body2.comisionbs, comisionusd = _req$body2.comisionusd, tipocambio = _req$body2.tipocambio, porcentajeprima = _req$body2.porcentajeprima, primaneta = _req$body2.primaneta, porcentajecomision = _req$body2.porcentajecomision, usuarioregistro = _req$body2.usuarioregistro, usuariomodificacion = _req$body2.usuariomodificacion, fecharegistro = _req$body2.fecharegistro, _req$body2$fechamodif = _req$body2.fechamodificacion, fechamodificacion = _req$body2$fechamodif === void 0 ? new Date() : _req$body2$fechamodif, estado = _req$body2.estado, sucursalid = _req$body2.sucursalid, archivos = _req$body2.archivos, archivoseliminados = _req$body2.archivoseliminados;
            _context6.next = 4;
            return _database.sequelize.transaction();

          case 4:
            t = _context6.sent;
            _context6.prev = 5;
            _context6.next = 8;
            return _Poliza["default"].update({
              nropoliza: nropoliza,
              nrocertificado: nrocertificado,
              fechainicio: fechainicio,
              fechafin: fechafin,
              fechaexpedicion: fechaexpedicion,
              fecharecepcion: fecharecepcion,
              tipomoneda: tipomoneda,
              primatotal: primatotal,
              formapago: formapago,
              encargadoid: encargadoid,
              bancoid: bancoid,
              ciudadexpedicion: ciudadexpedicion,
              //broker,
              notas: notas,
              companiaseguroid: companiaseguroid,
              subramocompaniaid: subramocompaniaid,
              tiporamoid: tiporamoid,
              contratanteid: contratanteid,
              tomadorid: tomadorid,
              ejecutivoid: ejecutivoid,
              colocacionid: colocacionid,
              ciaspvs: ciaspvs,
              tipopolizaid: tipopolizaid,
              tpoliza: tpoliza,
              tipocontrato: tipocontrato,
              menoid: menoid,
              llamadoid: llamadoid,
              vendedorid: vendedorid,
              nroplaca: nroplaca,
              tipoemision: tipoemision,
              franquicia: franquicia,
              valorasegurado: valorasegurado,

              /*    fechainiciovigencia,
                 fechafinvigencia,
                 fechainclusion,
                 prima,
                 porcentajeprima,
                 primaneta,
                 porcentajecomision,
                 detalle, */
              comisionbs: comisionbs,
              comisionusd: comisionusd,
              tipocambio: tipocambio,
              porcentajeprima: porcentajeprima,
              primaneta: primaneta,
              porcentajecomision: porcentajecomision,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: fecharegistro,
              fechamodificacion: fechamodificacion,
              estado: estado,
              sucursalid: sucursalid
            }, {
              where: {
                id: id
              }
            }, {
              transaction: t
            });

          case 8:
            updateRowCount = _context6.sent;
            i = 0;

          case 10:
            if (!(i < archivoseliminados.length)) {
              _context6.next = 16;
              break;
            }

            _context6.next = 13;
            return _Archivo["default"].update({
              estado: 'BAJ',
              fechamodificacion: new Date()
            }, {
              where: {
                id: archivoseliminados[i].id
              }
            }, {
              transaction: t
            });

          case 13:
            i++;
            _context6.next = 10;
            break;

          case 16:
            _i2 = 0;

          case 17:
            if (!(_i2 < archivos.length)) {
              _context6.next = 23;
              break;
            }

            _context6.next = 20;
            return _Archivo["default"].create({
              codigo: id,
              nombre: archivos[_i2].nombre,
              descripcion: archivos[_i2].nombre,
              extension: archivos[_i2].extension,
              archivo: archivos[_i2].archivo,
              aseguradoid: tomadorid,
              sucursalid: sucursalid,
              usuarioregistro: usuariomodificacion,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: new Date(),
              fechamodificacion: new Date(),
              estado: 'ACT'
            }, {
              fields: ['codigo', 'nombre', 'descripcion', 'extension', 'archivo', 'aseguradoid', 'sucursalid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado']
            }, {
              transaction: t
            });

          case 20:
            _i2++;
            _context6.next = 17;
            break;

          case 23:
            _context6.next = 25;
            return t.commit();

          case 25:
            _context6.next = 27;
            return _Poliza["default"].findOne({
              where: {
                id: id
              }
            });

          case 27:
            polizas = _context6.sent;
            res.json({
              message: 'Poliza update successfully',
              count: polizas
            });
            _context6.next = 38;
            break;

          case 31:
            _context6.prev = 31;
            _context6.t0 = _context6["catch"](5);
            console.log(_context6.t0);

            if (!t) {
              _context6.next = 37;
              break;
            }

            _context6.next = 37;
            return t.rollback();

          case 37:
            res.status(500).json({
              data: {
                estado: false,
                "error": _context6.t0.message
              }
            });

          case 38:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[5, 31]]);
  }));
  return _updatePoliza.apply(this, arguments);
}

function bajaPoliza(_x13, _x14) {
  return _bajaPoliza.apply(this, arguments);
}

function _bajaPoliza() {
  _bajaPoliza = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var id, usuariomodificacion, updateRowCount, polizas;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id = req.params.id;
            console.log("bajaPoliza");
            usuariomodificacion = req.body.usuariomodificacion;
            _context7.prev = 3;
            _context7.next = 6;
            return _Poliza["default"].update({
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
            return _Poliza["default"].findOne({
              where: {
                id: id
              }
            });

          case 9:
            polizas = _context7.sent;
            res.json({
              message: 'Poliza baja successfully',
              count: polizas
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
  return _bajaPoliza.apply(this, arguments);
}

function getPolizaPorTipoYSucursal(_x15, _x16) {
  return _getPolizaPorTipoYSucursal.apply(this, arguments);
}

function _getPolizaPorTipoYSucursal() {
  _getPolizaPorTipoYSucursal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
    var _req$params, tipopolizaid, sucursalid, polizas;

    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _req$params = req.params, tipopolizaid = _req$params.tipopolizaid, sucursalid = _req$params.sucursalid;
            _context8.prev = 1;
            _context8.next = 4;
            return _Poliza["default"].findAll({
              where: {
                tpoliza: tipopolizaid,
                sucursalid: sucursalid,
                estado: 'ACT'
              }
            });

          case 4:
            polizas = _context8.sent;
            res.json({
              polizas: polizas
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
  return _getPolizaPorTipoYSucursal.apply(this, arguments);
}

function getPolizasPorTipoYEmpresa(_x17, _x18) {
  return _getPolizasPorTipoYEmpresa.apply(this, arguments);
}

function _getPolizasPorTipoYEmpresa() {
  _getPolizasPorTipoYEmpresa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(req, res) {
    var _req$params2, tipopolizaid, empresaid, polizas;

    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _req$params2 = req.params, tipopolizaid = _req$params2.tipopolizaid, empresaid = _req$params2.empresaid;
            _context9.prev = 1;
            _context9.next = 4;
            return _database.sequelize.query("select p.* " + "from poliza p " + "inner join sucursal s on s.id=p.sucursalid  " + //"where s.empresaid= '" + empresaid + "' and p.tipopolizaid='" + tipopolizaid + "' order by p.id "
            "where s.empresaid= '" + empresaid + "' and p.tpoliza='" + tipopolizaid + "' order by p.id ", {
              type: QueryTypes.SELECT
            });

          case 4:
            polizas = _context9.sent;
            res.json({
              polizas: polizas
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
  return _getPolizasPorTipoYEmpresa.apply(this, arguments);
}

function getPolizasPorTipoRamoYEmpresa(_x19, _x20) {
  return _getPolizasPorTipoRamoYEmpresa.apply(this, arguments);
}

function _getPolizasPorTipoRamoYEmpresa() {
  _getPolizasPorTipoRamoYEmpresa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(req, res) {
    var _req$params3, tiporamoid, empresaid, polizas;

    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _req$params3 = req.params, tiporamoid = _req$params3.tiporamoid, empresaid = _req$params3.empresaid;
            _context10.prev = 1;
            _context10.next = 4;
            return _database.sequelize.query("select p.* ,sr.nombre nombresubramo,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania " + "from poliza p " + "inner join sucursal s on s.id=p.sucursalid  " + "inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid " + "inner join sub_ramo sr on sr.id=rc.subramoid " + "inner join ramo r on r.id=rc.ramoid " + "inner join asegurado a on a.id=p.tomadorid " + "inner join compania_seguro cs on cs.id=p.companiaseguroid " + //"where s.empresaid= '" + empresaid + "' and p.tiporamoid='" + tiporamoid + "' order by p.id "
            "where s.empresaid= '" + empresaid + "' and p.tpoliza='" + tiporamoid + "' order by p.id ", {
              type: QueryTypes.SELECT
            });

          case 4:
            polizas = _context10.sent;
            //console.log(JSON.stringify(usuarios[0], null, 2));
            res.json({
              polizas: polizas
            });
            _context10.next = 12;
            break;

          case 8:
            _context10.prev = 8;
            _context10.t0 = _context10["catch"](1);
            console.log(_context10.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context10.t0.message
              }
            });

          case 12:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[1, 8]]);
  }));
  return _getPolizasPorTipoRamoYEmpresa.apply(this, arguments);
}

function getPolizasPorTipoRamoYSucursal(_x21, _x22) {
  return _getPolizasPorTipoRamoYSucursal.apply(this, arguments);
}

function _getPolizasPorTipoRamoYSucursal() {
  _getPolizasPorTipoRamoYSucursal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(req, res) {
    var _req$params4, tiporamoid, sucursalid, polizas;

    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _req$params4 = req.params, tiporamoid = _req$params4.tiporamoid, sucursalid = _req$params4.sucursalid;
            _context11.prev = 1;
            _context11.next = 4;
            return _database.sequelize.query("select p.* ,sr.nombre nombresubramo,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania  " +
            /*       "from poliza p " +
                  "inner join sucursal s on s.id=p.sucursalid  " + */
            "from poliza p " + "inner join sucursal s on s.id=p.sucursalid  " + "inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid " + "inner join sub_ramo sr on sr.id=rc.subramoid " + "inner join ramo r on r.id=rc.ramoid " + "inner join asegurado a on a.id=p.tomadorid " + "inner join compania_seguro cs on cs.id=p.companiaseguroid " + "where s.empresaid= '" + empresaid + "' and s.id='" + sucursalid + "' order by p.id ", {
              type: QueryTypes.SELECT
            });

          case 4:
            polizas = _context11.sent;
            //console.log(JSON.stringify(usuarios[0], null, 2));
            res.json({
              polizas: polizas
            });
            _context11.next = 12;
            break;

          case 8:
            _context11.prev = 8;
            _context11.t0 = _context11["catch"](1);
            console.log(_context11.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context11.t0.message
              }
            });

          case 12:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[1, 8]]);
  }));
  return _getPolizasPorTipoRamoYSucursal.apply(this, arguments);
}