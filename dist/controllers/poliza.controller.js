"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bajaPoliza = bajaPoliza;
exports.createPoliza = createPoliza;
exports.createPolizaGeneral = createPolizaGeneral;
exports.createPolizaGenerica = createPolizaGenerica;
exports.createPolizaSalud = createPolizaSalud;
exports.deletePoliza = deletePoliza;
exports.getBuscarPolizasDetallePorEmpresa = getBuscarPolizasDetallePorEmpresa;
exports.getBuscarPolizasDetallePorSucursal = getBuscarPolizasDetallePorSucursal;
exports.getOnePoliza = getOnePoliza;
exports.getPolizaHijo = getPolizaHijo;
exports.getPolizaPorTipoYSucursal = getPolizaPorTipoYSucursal;
exports.getPolizas = getPolizas;
exports.getPolizasDetalleAutomotorPorEmpresaYTipo = getPolizasDetalleAutomotorPorEmpresaYTipo;
exports.getPolizasDetalleAutomotorPorSucursalYTipo = getPolizasDetalleAutomotorPorSucursalYTipo;
exports.getPolizasDetalleGeneralPorEmpresaYTipo = getPolizasDetalleGeneralPorEmpresaYTipo;
exports.getPolizasDetalleGeneralPorSucursalYTipo = getPolizasDetalleGeneralPorSucursalYTipo;
exports.getPolizasDetalleSaludPorEmpresaYTipo = getPolizasDetalleSaludPorEmpresaYTipo;
exports.getPolizasDetalleSaludPorSucursalYTipo = getPolizasDetalleSaludPorSucursalYTipo;
exports.getPolizasPorEmpresa = getPolizasPorEmpresa;
exports.getPolizasPorEmpresaFechaVencimiento = getPolizasPorEmpresaFechaVencimiento;
exports.getPolizasPorEmpresaSinMemo = getPolizasPorEmpresaSinMemo;
exports.getPolizasPorEmpresaYTipo = getPolizasPorEmpresaYTipo;
exports.getPolizasPorSucursal = getPolizasPorSucursal;
exports.getPolizasPorSucursalSinMemo = getPolizasPorSucursalSinMemo;
exports.getPolizasPorSucursalVencimiento = getPolizasPorSucursalVencimiento;
exports.getPolizasPorSucursalYTipo = getPolizasPorSucursalYTipo;
exports.getPolizasPorTipoRamoYEmpresa = getPolizasPorTipoRamoYEmpresa;
exports.getPolizasPorTipoRamoYSucursal = getPolizasPorTipoRamoYSucursal;
exports.getPolizasPorTipoYEmpresa = getPolizasPorTipoYEmpresa;
exports.getPolizasPorTomadorYEmpresa = getPolizasPorTomadorYEmpresa;
exports.getPolizasPorTomadorYSucursal = getPolizasPorTomadorYSucursal;
exports.obtenerDetallesPorPoliza = obtenerDetallesPorPoliza;
exports.obtenerPoliza = obtenerPoliza;
exports.polizasPorEmpresaGeneral = polizasPorEmpresaGeneral;
exports.polizasPorSucursal = polizasPorSucursal;
exports.polizasPorSucursalGeneral = polizasPorSucursalGeneral;
exports.updatePoliza = updatePoliza;
exports.updatePolizaGeneral = updatePolizaGeneral;
exports.updatePolizaGenerica = updatePolizaGenerica;
exports.updatePolizaSalud = updatePolizaSalud;
exports.vencimientoPoliza = vencimientoPoliza;

var _database = require("../database/database");

var _Archivo = _interopRequireDefault(require("../models/Archivo"));

var _Poliza = _interopRequireDefault(require("../models/Poliza"));

var _PolizaDetalleAdicionales = _interopRequireDefault(require("../models/PolizaDetalleAdicionales"));

var _PolizaDetalle = _interopRequireDefault(require("../models/PolizaDetalle"));

var _PolizaDetallePersona = _interopRequireDefault(require("../models/PolizaDetallePersona"));

var _PolizaDetalleGeneral = _interopRequireDefault(require("../models/PolizaDetalleGeneral"));

var _EnvioCorreo = _interopRequireDefault(require("../models/EnvioCorreo"));

var _mailers = require("../mailers");

var _PolizaDetalles = _interopRequireDefault(require("../models/PolizaDetalles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require('sequelize'),
    QueryTypes = _require.QueryTypes,
    _Promise = _require.Promise;

var request = require("request");

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

function createPolizaGenerica(_x3, _x4) {
  return _createPolizaGenerica.apply(this, arguments);
}

function _createPolizaGenerica() {
  _createPolizaGenerica = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, nropoliza, nrocertificado, fechainicio, fechafin, fechaexpedicion, fecharecepcion, tipomoneda, primatotal, formapago, encargadoid, bancoid, ciudadexpedicion, notas, companiaseguroid, subramocompaniaid, tiporamoid, contratanteid, tomadorid, ejecutivoid, colocacionid, ciaspvs, tipopolizaid, tpoliza, tipocontrato, menoid, vendedorid, tipoemision, franquicia, valorasegurado, comisionbs, comisionusd, tipocambio, porcentajeprima, primaneta, porcentajecomision, archivos, detalle, usuarioregistro, usuariomodificacion, _req$body$estado, estado, sucursalid, planid, polizaid, newPoliza, t, ingresoegreso, i, _i, QUERY, poliza;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, nropoliza = _req$body.nropoliza, nrocertificado = _req$body.nrocertificado, fechainicio = _req$body.fechainicio, fechafin = _req$body.fechafin, fechaexpedicion = _req$body.fechaexpedicion, fecharecepcion = _req$body.fecharecepcion, tipomoneda = _req$body.tipomoneda, primatotal = _req$body.primatotal, formapago = _req$body.formapago, encargadoid = _req$body.encargadoid, bancoid = _req$body.bancoid, ciudadexpedicion = _req$body.ciudadexpedicion, notas = _req$body.notas, companiaseguroid = _req$body.companiaseguroid, subramocompaniaid = _req$body.subramocompaniaid, tiporamoid = _req$body.tiporamoid, contratanteid = _req$body.contratanteid, tomadorid = _req$body.tomadorid, ejecutivoid = _req$body.ejecutivoid, colocacionid = _req$body.colocacionid, ciaspvs = _req$body.ciaspvs, tipopolizaid = _req$body.tipopolizaid, tpoliza = _req$body.tpoliza, tipocontrato = _req$body.tipocontrato, menoid = _req$body.menoid, vendedorid = _req$body.vendedorid, tipoemision = _req$body.tipoemision, franquicia = _req$body.franquicia, valorasegurado = _req$body.valorasegurado, comisionbs = _req$body.comisionbs, comisionusd = _req$body.comisionusd, tipocambio = _req$body.tipocambio, porcentajeprima = _req$body.porcentajeprima, primaneta = _req$body.primaneta, porcentajecomision = _req$body.porcentajecomision, archivos = _req$body.archivos, detalle = _req$body.detalle, usuarioregistro = _req$body.usuarioregistro, usuariomodificacion = _req$body.usuariomodificacion, _req$body$estado = _req$body.estado, estado = _req$body$estado === void 0 ? 'ACT' : _req$body$estado, sucursalid = _req$body.sucursalid, planid = _req$body.planid, polizaid = _req$body.polizaid;
            _context2.prev = 1;
            _context2.next = 4;
            return _database.sequelize.transaction();

          case 4:
            t = _context2.sent;
            ingresoegreso = 'I';

            if (tipoemision == 'Anexo Exclusion' || tipoemision == 'Anexo Anulacion') {
              ingresoegreso = 'E';
            } else {
              ingresoegreso = 'I';
            } //const transaction= sequelize.transaction;


            _context2.next = 9;
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
              // broker,
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
              vendedorid: vendedorid,
              tipoemision: tipoemision,
              franquicia: franquicia,
              valorasegurado: valorasegurado,
              comisionbs: comisionbs,
              comisionusd: comisionusd,
              tipocambio: tipocambio,
              porcentajeprima: porcentajeprima,
              primaneta: primaneta,
              porcentajecomision: porcentajecomision,
              ingresoegreso: ingresoegreso,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: new Date(),
              fechamodificacion: new Date(),
              estado: estado,
              sucursalid: sucursalid,
              planid: planid,
              polizaid: polizaid
            }, {
              fields: ['nropoliza', 'nrocertificado', 'fechainicio', 'fechafin', 'fechaexpedicion', 'fecharecepcion', 'tipomoneda', 'primatotal', 'formapago', 'encargadoid', 'bancoid', 'ciudadexpedicion', //'broker',
              'notas', 'companiaseguroid', 'subramocompaniaid', 'tiporamoid', 'contratanteid', 'tomadorid', 'ejecutivoid', 'colocacionid', 'ciaspvs', 'tipopolizaid', 'tpoliza', 'tipocontrato', 'menoid', 'vendedorid', 'tipoemision', 'franquicia', 'valorasegurado', 'comisionbs', 'comisionusd', 'tipocambio', 'porcentajeprima', 'primaneta', 'porcentajecomision', 'ingresoegreso', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado', 'sucursalid', 'planid', 'polizaid']
            }, {
              transaction: t
            });

          case 9:
            newPoliza = _context2.sent;
            i = 0;

          case 11:
            if (!(i < archivos.length)) {
              _context2.next = 17;
              break;
            }

            _context2.next = 14;
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

          case 14:
            i++;
            _context2.next = 11;
            break;

          case 17:
            if (!detalle) {
              _context2.next = 25;
              break;
            }

            _i = 0;

          case 19:
            if (!(_i < detalle.length)) {
              _context2.next = 25;
              break;
            }

            _context2.next = 22;
            return _PolizaDetalles["default"].create({
              numerodetalle: detalle[_i].numerodetalle,
              valor: detalle[_i].valor,
              usuarioregistro: newPoliza.usuarioregistro,
              fecharegistro: new Date(),
              fechamodificacion: new Date(),
              estado: 'ACT',
              polizaid: newPoliza.id,
              atributoid: detalle[_i].atributoid
            }, {
              fields: ['numerodetalle', 'valor', 'usuarioregistro', 'fecharegistro', 'fechamodificacion', 'estado', 'polizaid', 'atributoid']
            }, {
              transaction: t
            });

          case 22:
            _i++;
            _context2.next = 19;
            break;

          case 25:
            _context2.next = 27;
            return t.commit();

          case 27:
            QUERY = "select p.id,p.nro, p.nropoliza, p.nrocertificado, p.fechainicio, p.fechafin, p.fechaexpedicion, p.fecharecepcion, p.tipomoneda, p.primatotal, p.formapago, p.encargadoid, p.bancoid, p.ciudadexpedicion, p.notas, p.companiaseguroid, p.subramocompaniaid, p.tiporamoid, p.contratanteid, p.tomadorid, p.ejecutivoid, p.colocacionid, p.ciaspvs, p.tipopolizaid, p.tpoliza, p.tipocontrato, p.memoid, p.vendedorid, null tipoemision, p.franquicia, p.valorasegurado, p.comisionbs, p.comisionusd, p.tipocambio, p.porcentajeprima, p.primaneta, p.porcentajecomision, p.usuarioregistro, p.usuariomodificacion, p.fecharegistro, p.fechamodificacion, p.estado, p.sucursalid, p.planid, p.polizaid \n        ,sr.nombre nombreramopadre,case when sr.id is null then r.nombre else sr.nombre end nombreramo,case when  sr.id is null then null else r.nombre end nombresubramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania ,s.nombre as sucursal,t.nombre tiporamo,pe.nombrecompleto ejecutivo,car.nombrecompleto cartera\n        from poliza p\n        inner join sucursal s on s.id=p.sucursalid\n        inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid\n        inner join ramo r on r.id=rc.ramoid\n        left join ramo sr on sr.id=rc.ramopadreid\n        inner join asegurado a on a.id=p.tomadorid\n        inner join compania_seguro cs on cs.id=p.companiaseguroid\n        inner join tipo_ramo t on t.id=p.tiporamoid\n        inner join personal pe on pe.id=p.ejecutivoid\n        inner join personal car on car.id=a.carteraid\n        where p.id='" + newPoliza.id + "'   "; //console.log(QUERY);

            _context2.next = 30;
            return _database.sequelize.query(QUERY, {
              type: QueryTypes.SELECT
            });

          case 30:
            poliza = _context2.sent;

            if (!newPoliza) {
              _context2.next = 33;
              break;
            }

            return _context2.abrupt("return", res.json({
              message: 'Poliza created successfully',
              data: poliza[0]
            }));

          case 33:
            _context2.next = 45;
            break;

          case 35:
            _context2.prev = 35;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);

            if (!t) {
              _context2.next = 44;
              break;
            }

            _context2.next = 41;
            return t.rollback();

          case 41:
            if (!newPoliza) {
              _context2.next = 44;
              break;
            }

            _context2.next = 44;
            return _Poliza["default"].destroy({
              where: {
                id: newPoliza.id
              }
            });

          case 44:
            res.status(500).json({
              data: {
                estado: false,
                "error": _context2.t0.message
              }
            });

          case 45:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 35]]);
  }));
  return _createPolizaGenerica.apply(this, arguments);
}

function updatePolizaGenerica(_x5, _x6) {
  return _updatePolizaGenerica.apply(this, arguments);
}
/** automotor */


function _updatePolizaGenerica() {
  _updatePolizaGenerica = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, _req$body2, nropoliza, nrocertificado, fechainicio, fechafin, fechaexpedicion, fecharecepcion, tipomoneda, primatotal, formapago, encargadoid, bancoid, ciudadexpedicion, notas, companiaseguroid, subramocompaniaid, tiporamoid, contratanteid, tomadorid, ejecutivoid, colocacionid, ciaspvs, tipopolizaid, tpoliza, tipocontrato, menoid, vendedorid, tipoemision, franquicia, valorasegurado, comisionbs, comisionusd, tipocambio, porcentajeprima, primaneta, porcentajecomision, usuarioregistro, usuariomodificacion, fecharegistro, estado, sucursalid, planid, archivos, archivoseliminados, detalle, eliminadosdetalle, t, updateRowCount, i, _i2, _i3, newPolizaDetalle, _i4, polizas;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, nropoliza = _req$body2.nropoliza, nrocertificado = _req$body2.nrocertificado, fechainicio = _req$body2.fechainicio, fechafin = _req$body2.fechafin, fechaexpedicion = _req$body2.fechaexpedicion, fecharecepcion = _req$body2.fecharecepcion, tipomoneda = _req$body2.tipomoneda, primatotal = _req$body2.primatotal, formapago = _req$body2.formapago, encargadoid = _req$body2.encargadoid, bancoid = _req$body2.bancoid, ciudadexpedicion = _req$body2.ciudadexpedicion, notas = _req$body2.notas, companiaseguroid = _req$body2.companiaseguroid, subramocompaniaid = _req$body2.subramocompaniaid, tiporamoid = _req$body2.tiporamoid, contratanteid = _req$body2.contratanteid, tomadorid = _req$body2.tomadorid, ejecutivoid = _req$body2.ejecutivoid, colocacionid = _req$body2.colocacionid, ciaspvs = _req$body2.ciaspvs, tipopolizaid = _req$body2.tipopolizaid, tpoliza = _req$body2.tpoliza, tipocontrato = _req$body2.tipocontrato, menoid = _req$body2.menoid, vendedorid = _req$body2.vendedorid, tipoemision = _req$body2.tipoemision, franquicia = _req$body2.franquicia, valorasegurado = _req$body2.valorasegurado, comisionbs = _req$body2.comisionbs, comisionusd = _req$body2.comisionusd, tipocambio = _req$body2.tipocambio, porcentajeprima = _req$body2.porcentajeprima, primaneta = _req$body2.primaneta, porcentajecomision = _req$body2.porcentajecomision, usuarioregistro = _req$body2.usuarioregistro, usuariomodificacion = _req$body2.usuariomodificacion, fecharegistro = _req$body2.fecharegistro, estado = _req$body2.estado, sucursalid = _req$body2.sucursalid, planid = _req$body2.planid, archivos = _req$body2.archivos, archivoseliminados = _req$body2.archivoseliminados, detalle = _req$body2.detalle, eliminadosdetalle = _req$body2.eliminadosdetalle;
            _context3.prev = 2;
            _context3.next = 5;
            return _database.sequelize.transaction();

          case 5:
            t = _context3.sent;
            _context3.next = 8;
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
              vendedorid: vendedorid,
              tipoemision: tipoemision,
              franquicia: franquicia,
              valorasegurado: valorasegurado,
              comisionbs: comisionbs,
              comisionusd: comisionusd,
              tipocambio: tipocambio,
              porcentajeprima: porcentajeprima,
              primaneta: primaneta,
              porcentajecomision: porcentajecomision,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: fecharegistro,
              fechamodificacion: new Date(),
              estado: estado,
              sucursalid: sucursalid,
              planid: planid
            }, {
              where: {
                id: id
              }
            }, {
              transaction: t
            });

          case 8:
            updateRowCount = _context3.sent;
            i = 0;

          case 10:
            if (!(i < archivoseliminados.length)) {
              _context3.next = 16;
              break;
            }

            _context3.next = 13;
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
            _context3.next = 10;
            break;

          case 16:
            _i2 = 0;

          case 17:
            if (!(_i2 < archivos.length)) {
              _context3.next = 23;
              break;
            }

            _context3.next = 20;
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
            _context3.next = 17;
            break;

          case 23:
            if (!eliminadosdetalle) {
              _context3.next = 31;
              break;
            }

            _i3 = 0;

          case 25:
            if (!(_i3 < eliminadosdetalle.length)) {
              _context3.next = 31;
              break;
            }

            _context3.next = 28;
            return _PolizaDetalles["default"].update({
              estado: 'BAJ',
              fechamodificacion: new Date()
            }, {
              where: {
                numerodetalle: eliminadosdetalle[_i3].numerodetalle,
                id: eliminadosdetalle[_i3].id
              }
            }, {
              transaction: t
            });

          case 28:
            _i3++;
            _context3.next = 25;
            break;

          case 31:
            if (!detalle) {
              _context3.next = 40;
              break;
            }

            _i4 = 0;

          case 33:
            if (!(_i4 < detalle.length)) {
              _context3.next = 40;
              break;
            }

            _context3.next = 36;
            return _PolizaDetalles["default"].create({
              numerodetalle: detalle[_i4].numerodetalle,
              valor: detalle[_i4].valor,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: new Date(),
              fechamodificacion: new Date(),
              estado: 'ACT',
              atributoid: detalle[_i4].atributoid,
              polizaid: id
            }, {
              fields: ['numerodetalle', 'valor', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado', 'atributoid', 'polizaid']
            }, {
              transaction: t
            });

          case 36:
            newPolizaDetalle = _context3.sent;

          case 37:
            _i4++;
            _context3.next = 33;
            break;

          case 40:
            _context3.next = 42;
            return t.commit();

          case 42:
            _context3.next = 44;
            return _Poliza["default"].findOne({
              where: {
                id: id
              }
            });

          case 44:
            polizas = _context3.sent;
            res.json({
              message: 'Poliza update successfully',
              count: polizas
            });
            _context3.next = 55;
            break;

          case 48:
            _context3.prev = 48;
            _context3.t0 = _context3["catch"](2);
            console.log(_context3.t0);

            if (!t) {
              _context3.next = 54;
              break;
            }

            _context3.next = 54;
            return t.rollback();

          case 54:
            res.status(500).json({
              data: {
                estado: false,
                "error": _context3.t0.message
              }
            });

          case 55:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 48]]);
  }));
  return _updatePolizaGenerica.apply(this, arguments);
}

function createPoliza(_x7, _x8) {
  return _createPoliza.apply(this, arguments);
}

function _createPoliza() {
  _createPoliza = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$body3, nropoliza, nrocertificado, fechainicio, fechafin, fechaexpedicion, fecharecepcion, tipomoneda, primatotal, formapago, encargadoid, bancoid, ciudadexpedicion, notas, companiaseguroid, subramocompaniaid, tiporamoid, contratanteid, tomadorid, ejecutivoid, colocacionid, ciaspvs, tipopolizaid, tpoliza, tipocontrato, menoid, vendedorid, tipoemision, franquicia, valorasegurado, comisionbs, comisionusd, tipocambio, porcentajeprima, primaneta, porcentajecomision, archivos, automotores, usuarioregistro, usuariomodificacion, _req$body3$estado, estado, sucursalid, planid, polizaid, newPoliza, t, ingresoegreso, i, _i5, newPolizaDetalle, campos, j, QUERY, poliza;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body3 = req.body, nropoliza = _req$body3.nropoliza, nrocertificado = _req$body3.nrocertificado, fechainicio = _req$body3.fechainicio, fechafin = _req$body3.fechafin, fechaexpedicion = _req$body3.fechaexpedicion, fecharecepcion = _req$body3.fecharecepcion, tipomoneda = _req$body3.tipomoneda, primatotal = _req$body3.primatotal, formapago = _req$body3.formapago, encargadoid = _req$body3.encargadoid, bancoid = _req$body3.bancoid, ciudadexpedicion = _req$body3.ciudadexpedicion, notas = _req$body3.notas, companiaseguroid = _req$body3.companiaseguroid, subramocompaniaid = _req$body3.subramocompaniaid, tiporamoid = _req$body3.tiporamoid, contratanteid = _req$body3.contratanteid, tomadorid = _req$body3.tomadorid, ejecutivoid = _req$body3.ejecutivoid, colocacionid = _req$body3.colocacionid, ciaspvs = _req$body3.ciaspvs, tipopolizaid = _req$body3.tipopolizaid, tpoliza = _req$body3.tpoliza, tipocontrato = _req$body3.tipocontrato, menoid = _req$body3.menoid, vendedorid = _req$body3.vendedorid, tipoemision = _req$body3.tipoemision, franquicia = _req$body3.franquicia, valorasegurado = _req$body3.valorasegurado, comisionbs = _req$body3.comisionbs, comisionusd = _req$body3.comisionusd, tipocambio = _req$body3.tipocambio, porcentajeprima = _req$body3.porcentajeprima, primaneta = _req$body3.primaneta, porcentajecomision = _req$body3.porcentajecomision, archivos = _req$body3.archivos, automotores = _req$body3.automotores, usuarioregistro = _req$body3.usuarioregistro, usuariomodificacion = _req$body3.usuariomodificacion, _req$body3$estado = _req$body3.estado, estado = _req$body3$estado === void 0 ? 'ACT' : _req$body3$estado, sucursalid = _req$body3.sucursalid, planid = _req$body3.planid, polizaid = _req$body3.polizaid;
            _context4.prev = 1;
            _context4.next = 4;
            return _database.sequelize.transaction();

          case 4:
            t = _context4.sent;
            ingresoegreso = 'I';

            if (tipoemision == 'Anexo Exclusion' || tipoemision == 'Anexo Anulacion') {
              ingresoegreso = 'E';
            } else {
              ingresoegreso = 'I';
            } //const transaction= sequelize.transaction;


            _context4.next = 9;
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
              // broker,
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
              // llamadoid,
              vendedorid: vendedorid,
              //nroplaca,
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
              ingresoegreso: ingresoegreso,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: new Date(),
              fechamodificacion: new Date(),
              estado: estado,
              sucursalid: sucursalid,
              planid: planid,
              polizaid: polizaid
            }, {
              fields: ['nropoliza', 'nrocertificado', 'fechainicio', 'fechafin', 'fechaexpedicion', 'fecharecepcion', 'tipomoneda', 'primatotal', 'formapago', 'encargadoid', 'bancoid', 'ciudadexpedicion', //'broker',
              'notas', 'companiaseguroid', 'subramocompaniaid', 'tiporamoid', 'contratanteid', 'tomadorid', 'ejecutivoid', 'colocacionid', 'ciaspvs', 'tipopolizaid', 'tpoliza', 'tipocontrato', 'menoid', // 'llamadoid',
              'vendedorid', //'nroplaca',
              'tipoemision', 'franquicia', 'valorasegurado',
              /*     'fechainiciovigencia',
                  'fechafinvigencia',
                  'fechainclusion',
                  'prima',
                  'porcentajeprima',
                  'primaneta',
                  'porcentajecomision',
                  'detalle', */
              'comisionbs', 'comisionusd', 'tipocambio', 'porcentajeprima', 'primaneta', 'porcentajecomision', 'ingresoegreso', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado', 'sucursalid', 'planid', 'polizaid']
            }, {
              transaction: t
            });

          case 9:
            newPoliza = _context4.sent;
            i = 0;

          case 11:
            if (!(i < archivos.length)) {
              _context4.next = 17;
              break;
            }

            _context4.next = 14;
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

          case 14:
            i++;
            _context4.next = 11;
            break;

          case 17:
            _i5 = 0;

          case 18:
            if (!(_i5 < automotores.length)) {
              _context4.next = 33;
              break;
            }

            _context4.next = 21;
            return _PolizaDetalle["default"].create({
              nrocertificado: automotores[_i5].nrocertificado,
              //titular: automotores[i].titular,
              placa: automotores[_i5].placa,
              tipovehiculo: automotores[_i5].tipovehiculo,
              marcavehiculo: automotores[_i5].marcavehiculo,
              colorvehiculo: automotores[_i5].colorvehiculo,
              aniovehiculo: automotores[_i5].aniovehiculo,
              modelo: automotores[_i5].modelo,
              primaindividual: automotores[_i5].primaindividual,
              primanetaindividualbs: automotores[_i5].primanetaindividualbs,
              primanetaindividualusd: automotores[_i5].primanetaindividualusd,
              franquicia: automotores[_i5].franquicia,
              valorasegurado: automotores[_i5].valorasegurado,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: new Date(),
              fechamodificacion: new Date(),
              estado: 'ACT',
              polizaid: newPoliza.id
            }, {
              fields: ['nrocertificado', 'placa', 'tipovehiculo', 'marcavehiculo', 'colorvehiculo', 'aniovehiculo', 'modelo', 'primaindividual', 'primanetaindividualbs', 'primanetaindividualusd', 'franquicia', 'valorasegurado', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado', 'polizaid']
            }, {
              transaction: t
            });

          case 21:
            newPolizaDetalle = _context4.sent;
            campos = automotores[_i5].campos;
            j = 0;

          case 24:
            if (!(j < campos.length)) {
              _context4.next = 30;
              break;
            }

            _context4.next = 27;
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

          case 27:
            j++;
            _context4.next = 24;
            break;

          case 30:
            _i5++;
            _context4.next = 18;
            break;

          case 33:
            _context4.next = 35;
            return t.commit();

          case 35:
            QUERY = "select p.id, p.nropoliza, p.nrocertificado, p.fechainicio, p.fechafin, p.fechaexpedicion, p.fecharecepcion, p.tipomoneda, p.primatotal, p.formapago, p.encargadoid, p.bancoid, p.ciudadexpedicion, p.notas, p.companiaseguroid, p.subramocompaniaid, p.tiporamoid, p.contratanteid, p.tomadorid, p.ejecutivoid, p.colocacionid, p.ciaspvs, p.tipopolizaid, p.tpoliza, p.tipocontrato, p.memoid, p.vendedorid, null tipoemision, p.franquicia, p.valorasegurado, p.comisionbs, p.comisionusd, p.tipocambio, p.porcentajeprima, p.primaneta, p.porcentajecomision, p.usuarioregistro, p.usuariomodificacion, p.fecharegistro, p.fechamodificacion, p.estado, p.sucursalid, p.planid, p.polizaid \n        ,sr.nombre nombreramopadre,case when sr.id is null then r.nombre else sr.nombre end nombreramo,case when  sr.id is null then null else r.nombre end nombresubramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania ,s.nombre as sucursal,t.nombre tiporamo,pe.nombrecompleto ejecutivo,car.nombrecompleto cartera\n        from poliza p\n        inner join sucursal s on s.id=p.sucursalid\n        inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid\n        inner join ramo r on r.id=rc.ramoid\n        left join ramo sr on sr.id=rc.ramopadreid\n        inner join asegurado a on a.id=p.tomadorid\n        inner join compania_seguro cs on cs.id=p.companiaseguroid\n        inner join tipo_ramo t on t.id=p.tiporamoid\n        inner join personal pe on pe.id=p.ejecutivoid\n        inner join personal car on car.id=a.carteraid\n        where p.id='" + newPoliza.id + "'   "; //console.log(QUERY);

            _context4.next = 38;
            return _database.sequelize.query(QUERY, {
              type: QueryTypes.SELECT
            });

          case 38:
            poliza = _context4.sent;

            if (!newPoliza) {
              _context4.next = 41;
              break;
            }

            return _context4.abrupt("return", res.json({
              message: 'Poliza created successfully',
              data: poliza[0]
            }));

          case 41:
            _context4.next = 53;
            break;

          case 43:
            _context4.prev = 43;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0);

            if (!t) {
              _context4.next = 52;
              break;
            }

            _context4.next = 49;
            return t.rollback();

          case 49:
            if (!newPoliza) {
              _context4.next = 52;
              break;
            }

            _context4.next = 52;
            return _Poliza["default"].destroy({
              where: {
                id: newPoliza.id
              }
            });

          case 52:
            res.status(500).json({
              data: {
                estado: false,
                "error": _context4.t0.message
              }
            });

          case 53:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 43]]);
  }));
  return _createPoliza.apply(this, arguments);
}

function updatePoliza(_x9, _x10) {
  return _updatePoliza.apply(this, arguments);
}
/** salud */


function _updatePoliza() {
  _updatePoliza = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, _req$body4, nropoliza, nrocertificado, fechainicio, fechafin, fechaexpedicion, fecharecepcion, tipomoneda, primatotal, formapago, encargadoid, bancoid, ciudadexpedicion, notas, companiaseguroid, subramocompaniaid, tiporamoid, contratanteid, tomadorid, ejecutivoid, colocacionid, ciaspvs, tipopolizaid, tpoliza, tipocontrato, menoid, vendedorid, tipoemision, franquicia, valorasegurado, comisionbs, comisionusd, tipocambio, porcentajeprima, primaneta, porcentajecomision, usuarioregistro, usuariomodificacion, fecharegistro, estado, sucursalid, planid, archivos, archivoseliminados, automotores, eliminadosautomotores, t, updateRowCount, i, _i6, _i7, _i8, newPolizaDetalle, campos, j, polizas;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _req$body4 = req.body, nropoliza = _req$body4.nropoliza, nrocertificado = _req$body4.nrocertificado, fechainicio = _req$body4.fechainicio, fechafin = _req$body4.fechafin, fechaexpedicion = _req$body4.fechaexpedicion, fecharecepcion = _req$body4.fecharecepcion, tipomoneda = _req$body4.tipomoneda, primatotal = _req$body4.primatotal, formapago = _req$body4.formapago, encargadoid = _req$body4.encargadoid, bancoid = _req$body4.bancoid, ciudadexpedicion = _req$body4.ciudadexpedicion, notas = _req$body4.notas, companiaseguroid = _req$body4.companiaseguroid, subramocompaniaid = _req$body4.subramocompaniaid, tiporamoid = _req$body4.tiporamoid, contratanteid = _req$body4.contratanteid, tomadorid = _req$body4.tomadorid, ejecutivoid = _req$body4.ejecutivoid, colocacionid = _req$body4.colocacionid, ciaspvs = _req$body4.ciaspvs, tipopolizaid = _req$body4.tipopolizaid, tpoliza = _req$body4.tpoliza, tipocontrato = _req$body4.tipocontrato, menoid = _req$body4.menoid, vendedorid = _req$body4.vendedorid, tipoemision = _req$body4.tipoemision, franquicia = _req$body4.franquicia, valorasegurado = _req$body4.valorasegurado, comisionbs = _req$body4.comisionbs, comisionusd = _req$body4.comisionusd, tipocambio = _req$body4.tipocambio, porcentajeprima = _req$body4.porcentajeprima, primaneta = _req$body4.primaneta, porcentajecomision = _req$body4.porcentajecomision, usuarioregistro = _req$body4.usuarioregistro, usuariomodificacion = _req$body4.usuariomodificacion, fecharegistro = _req$body4.fecharegistro, estado = _req$body4.estado, sucursalid = _req$body4.sucursalid, planid = _req$body4.planid, archivos = _req$body4.archivos, archivoseliminados = _req$body4.archivoseliminados, automotores = _req$body4.automotores, eliminadosautomotores = _req$body4.eliminadosautomotores;
            _context5.prev = 2;
            _context5.next = 5;
            return _database.sequelize.transaction();

          case 5:
            t = _context5.sent;
            _context5.next = 8;
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
              //llamadoid,
              vendedorid: vendedorid,
              //nroplaca,
              tipoemision: tipoemision,
              franquicia: franquicia,
              valorasegurado: valorasegurado,
              comisionbs: comisionbs,
              comisionusd: comisionusd,
              tipocambio: tipocambio,
              porcentajeprima: porcentajeprima,
              primaneta: primaneta,
              porcentajecomision: porcentajecomision,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: fecharegistro,
              fechamodificacion: new Date(),
              estado: estado,
              sucursalid: sucursalid,
              planid: planid
            }, {
              where: {
                id: id
              }
            }, {
              transaction: t
            });

          case 8:
            updateRowCount = _context5.sent;
            i = 0;

          case 10:
            if (!(i < archivoseliminados.length)) {
              _context5.next = 16;
              break;
            }

            _context5.next = 13;
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
            _context5.next = 10;
            break;

          case 16:
            _i6 = 0;

          case 17:
            if (!(_i6 < archivos.length)) {
              _context5.next = 23;
              break;
            }

            _context5.next = 20;
            return _Archivo["default"].create({
              codigo: id,
              nombre: archivos[_i6].nombre,
              descripcion: archivos[_i6].nombre,
              extension: archivos[_i6].extension,
              archivo: archivos[_i6].archivo,
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
            _i6++;
            _context5.next = 17;
            break;

          case 23:
            if (!eliminadosautomotores) {
              _context5.next = 31;
              break;
            }

            _i7 = 0;

          case 25:
            if (!(_i7 < eliminadosautomotores.length)) {
              _context5.next = 31;
              break;
            }

            _context5.next = 28;
            return _PolizaDetalle["default"].update({
              estado: 'BAJ',
              fechamodificacion: new Date()
            }, {
              where: {
                id: eliminadosautomotores[_i7].id
              }
            }, {
              transaction: t
            });

          case 28:
            _i7++;
            _context5.next = 25;
            break;

          case 31:
            if (!automotores) {
              _context5.next = 48;
              break;
            }

            _i8 = 0;

          case 33:
            if (!(_i8 < automotores.length)) {
              _context5.next = 48;
              break;
            }

            _context5.next = 36;
            return _PolizaDetalle["default"].create({
              nrocertificado: automotores[_i8].nrocertificado,
              //titular: automotores[i].titular,
              placa: automotores[_i8].placa,
              tipovehiculo: automotores[_i8].tipovehiculo,
              marcavehiculo: automotores[_i8].marcavehiculo,
              colorvehiculo: automotores[_i8].colorvehiculo,
              aniovehiculo: automotores[_i8].aniovehiculo,
              modelo: automotores[_i8].modelo,
              primaindividual: automotores[_i8].primaindividual,
              primanetaindividualbs: automotores[_i8].primanetaindividualbs,
              primanetaindividualusd: automotores[_i8].primanetaindividualusd,
              franquicia: automotores[_i8].franquicia,
              valorasegurado: automotores[_i8].valorasegurado,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: new Date(),
              fechamodificacion: new Date(),
              estado: 'ACT',
              polizaid: id
            }, {
              fields: ['nrocertificado', 'placa', 'tipovehiculo', 'marcavehiculo', 'colorvehiculo', 'aniovehiculo', 'modelo', 'primaindividual', 'primanetaindividualbs', 'primanetaindividualusd', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado', 'polizaid']
            }, {
              transaction: t
            });

          case 36:
            newPolizaDetalle = _context5.sent;
            campos = automotores[_i8].campos;
            j = 0;

          case 39:
            if (!(j < campos.length)) {
              _context5.next = 45;
              break;
            }

            _context5.next = 42;
            return _PolizaDetalleAdicionales["default"].create({
              polizadetalleid: id,
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

          case 42:
            j++;
            _context5.next = 39;
            break;

          case 45:
            _i8++;
            _context5.next = 33;
            break;

          case 48:
            _context5.next = 50;
            return t.commit();

          case 50:
            _context5.next = 52;
            return _Poliza["default"].findOne({
              where: {
                id: id
              }
            });

          case 52:
            polizas = _context5.sent;
            res.json({
              message: 'Poliza update successfully',
              count: polizas
            });
            _context5.next = 63;
            break;

          case 56:
            _context5.prev = 56;
            _context5.t0 = _context5["catch"](2);
            console.log(_context5.t0);

            if (!t) {
              _context5.next = 62;
              break;
            }

            _context5.next = 62;
            return t.rollback();

          case 62:
            res.status(500).json({
              data: {
                estado: false,
                "error": _context5.t0.message
              }
            });

          case 63:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 56]]);
  }));
  return _updatePoliza.apply(this, arguments);
}

function createPolizaSalud(_x11, _x12) {
  return _createPolizaSalud.apply(this, arguments);
}

function _createPolizaSalud() {
  _createPolizaSalud = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var _req$body5, nropoliza, nrocertificado, fechainicio, fechafin, fechaexpedicion, fecharecepcion, tipomoneda, primatotal, formapago, encargadoid, bancoid, ciudadexpedicion, notas, companiaseguroid, subramocompaniaid, tiporamoid, contratanteid, tomadorid, ejecutivoid, colocacionid, ciaspvs, tipopolizaid, tpoliza, tipocontrato, menoid, vendedorid, tipoemision, franquicia, valorasegurado, comisionbs, comisionusd, tipocambio, porcentajeprima, primaneta, porcentajecomision, archivos, personas, usuarioregistro, usuariomodificacion, _req$body5$estado, estado, sucursalid, planid, polizaid, newPoliza, t, ingresoegreso, i, _i9, newPolizaDetalle, QUERY, poliza;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _req$body5 = req.body, nropoliza = _req$body5.nropoliza, nrocertificado = _req$body5.nrocertificado, fechainicio = _req$body5.fechainicio, fechafin = _req$body5.fechafin, fechaexpedicion = _req$body5.fechaexpedicion, fecharecepcion = _req$body5.fecharecepcion, tipomoneda = _req$body5.tipomoneda, primatotal = _req$body5.primatotal, formapago = _req$body5.formapago, encargadoid = _req$body5.encargadoid, bancoid = _req$body5.bancoid, ciudadexpedicion = _req$body5.ciudadexpedicion, notas = _req$body5.notas, companiaseguroid = _req$body5.companiaseguroid, subramocompaniaid = _req$body5.subramocompaniaid, tiporamoid = _req$body5.tiporamoid, contratanteid = _req$body5.contratanteid, tomadorid = _req$body5.tomadorid, ejecutivoid = _req$body5.ejecutivoid, colocacionid = _req$body5.colocacionid, ciaspvs = _req$body5.ciaspvs, tipopolizaid = _req$body5.tipopolizaid, tpoliza = _req$body5.tpoliza, tipocontrato = _req$body5.tipocontrato, menoid = _req$body5.menoid, vendedorid = _req$body5.vendedorid, tipoemision = _req$body5.tipoemision, franquicia = _req$body5.franquicia, valorasegurado = _req$body5.valorasegurado, comisionbs = _req$body5.comisionbs, comisionusd = _req$body5.comisionusd, tipocambio = _req$body5.tipocambio, porcentajeprima = _req$body5.porcentajeprima, primaneta = _req$body5.primaneta, porcentajecomision = _req$body5.porcentajecomision, archivos = _req$body5.archivos, personas = _req$body5.personas, usuarioregistro = _req$body5.usuarioregistro, usuariomodificacion = _req$body5.usuariomodificacion, _req$body5$estado = _req$body5.estado, estado = _req$body5$estado === void 0 ? 'ACT' : _req$body5$estado, sucursalid = _req$body5.sucursalid, planid = _req$body5.planid, polizaid = _req$body5.polizaid;
            _context6.prev = 1;
            _context6.next = 4;
            return _database.sequelize.transaction();

          case 4:
            t = _context6.sent;
            ingresoegreso = 'I';

            if (tipoemision == 'Anexo Exclusion' || tipoemision == 'Anexo Anulacion') {
              ingresoegreso = 'E';
            } else {
              ingresoegreso = 'I';
            } //const transaction= sequelize.transaction;


            _context6.next = 9;
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
              // broker,
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
              //llamadoid,
              vendedorid: vendedorid,
              //nroplaca,
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
              ingresoegreso: ingresoegreso,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: new Date(),
              fechamodificacion: new Date(),
              estado: estado,
              sucursalid: sucursalid,
              planid: planid,
              polizaid: polizaid
            }, {
              fields: ['nropoliza', 'nrocertificado', 'fechainicio', 'fechafin', 'fechaexpedicion', 'fecharecepcion', 'tipomoneda', 'primatotal', 'formapago', 'encargadoid', 'bancoid', 'ciudadexpedicion', //'broker',
              'notas', 'companiaseguroid', 'subramocompaniaid', 'tiporamoid', 'contratanteid', 'tomadorid', 'ejecutivoid', 'colocacionid', 'ciaspvs', 'tipopolizaid', 'tpoliza', 'tipocontrato', 'menoid', //'llamadoid',
              'vendedorid', //'nroplaca',
              'tipoemision', 'franquicia', 'valorasegurado',
              /*     'fechainiciovigencia',
                  'fechafinvigencia',
                  'fechainclusion',
                  'prima',
                  'porcentajeprima',
                  'primaneta',
                  'porcentajecomision',
                  'detalle', */
              'comisionbs', 'comisionusd', 'tipocambio', 'porcentajeprima', 'primaneta', 'porcentajecomision', 'ingresoegreso', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado', 'sucursalid', 'planid', 'polizaid']
            }, {
              transaction: t
            });

          case 9:
            newPoliza = _context6.sent;
            i = 0;

          case 11:
            if (!(i < archivos.length)) {
              _context6.next = 17;
              break;
            }

            _context6.next = 14;
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

          case 14:
            i++;
            _context6.next = 11;
            break;

          case 17:
            _i9 = 0;

          case 18:
            if (!(_i9 < personas.length)) {
              _context6.next = 25;
              break;
            }

            _context6.next = 21;
            return _PolizaDetallePersona["default"].create({
              nrocertificado: personas[_i9].nrocertificado,
              tipoasegurado: personas[_i9].tipoasegurado,
              titular: personas[_i9].asegurado,
              cobertura: personas[_i9].coberturamaternidad,
              fechanacimiento: personas[_i9].fechanacimiento,
              sexo: personas[_i9].sexo,
              ambitogeografico: personas[_i9].ambitogeografico,
              sistemaatencion: personas[_i9].sistemaatencion,
              primaindividual: personas[_i9].primaindividual,
              primanetaindividualbs: personas[_i9].primanetaindividualbs,
              primanetaindividualusd: personas[_i9].primanetaindividualusd,
              franquicia: personas[_i9].franquicia,
              valorasegurado: personas[_i9].valorasegurado,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: new Date(),
              fechamodificacion: new Date(),
              estado: 'ACT',
              polizaid: newPoliza.id
            }, {
              fields: ['nrocertificado', 'tipoasegurado', 'titular', 'cobertura', 'fechanacimiento', 'sexo', 'ambitogeografico', 'sistemaatencion', 'primaindividual', 'primanetaindividualbs', 'primanetaindividualusd', 'franquicia', 'valorasegurado', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado', 'polizaid']
            }, {
              transaction: t
            });

          case 21:
            newPolizaDetalle = _context6.sent;

          case 22:
            _i9++;
            _context6.next = 18;
            break;

          case 25:
            _context6.next = 27;
            return t.commit();

          case 27:
            QUERY = "select p.id, p.nropoliza, p.nrocertificado, p.fechainicio, p.fechafin, p.fechaexpedicion, p.fecharecepcion, p.tipomoneda, p.primatotal, p.formapago, p.encargadoid, p.bancoid, p.ciudadexpedicion, p.notas, p.companiaseguroid, p.subramocompaniaid, p.tiporamoid, p.contratanteid, p.tomadorid, p.ejecutivoid, p.colocacionid, p.ciaspvs, p.tipopolizaid, p.tpoliza, p.tipocontrato, p.memoid, p.vendedorid, null tipoemision, p.franquicia, p.valorasegurado, p.comisionbs, p.comisionusd, p.tipocambio, p.porcentajeprima, p.primaneta, p.porcentajecomision, p.usuarioregistro, p.usuariomodificacion, p.fecharegistro, p.fechamodificacion, p.estado, p.sucursalid, p.planid, p.polizaid \n        ,sr.nombre nombreramopadre,case when sr.id is null then r.nombre else sr.nombre end nombreramo,case when  sr.id is null then null else r.nombre end nombresubramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania ,s.nombre as sucursal,t.nombre tiporamo,pe.nombrecompleto ejecutivo,car.nombrecompleto cartera\n        from poliza p\n        inner join sucursal s on s.id=p.sucursalid\n        inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid\n        inner join ramo r on r.id=rc.ramoid\n        left join ramo sr on sr.id=rc.ramopadreid\n        inner join asegurado a on a.id=p.tomadorid\n        inner join compania_seguro cs on cs.id=p.companiaseguroid\n        inner join tipo_ramo t on t.id=p.tiporamoid\n        inner join personal pe on pe.id=p.ejecutivoid\n        inner join personal car on car.id=a.carteraid\n        where p.id='" + newPoliza.id + "'   "; //console.log(QUERY);

            _context6.next = 30;
            return _database.sequelize.query(QUERY, {
              type: QueryTypes.SELECT
            });

          case 30:
            poliza = _context6.sent;

            if (!newPoliza) {
              _context6.next = 33;
              break;
            }

            return _context6.abrupt("return", res.json({
              message: 'Poliza created successfully',
              data: poliza[0]
            }));

          case 33:
            _context6.next = 45;
            break;

          case 35:
            _context6.prev = 35;
            _context6.t0 = _context6["catch"](1);
            console.log(_context6.t0);

            if (!t) {
              _context6.next = 44;
              break;
            }

            _context6.next = 41;
            return t.rollback();

          case 41:
            if (!newPoliza) {
              _context6.next = 44;
              break;
            }

            _context6.next = 44;
            return _Poliza["default"].destroy({
              where: {
                id: newPoliza.id
              }
            });

          case 44:
            res.status(500).json({
              data: {
                estado: false,
                "error": _context6.t0.message
              }
            });

          case 45:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 35]]);
  }));
  return _createPolizaSalud.apply(this, arguments);
}

function updatePolizaSalud(_x13, _x14) {
  return _updatePolizaSalud.apply(this, arguments);
}
/** automotor */


function _updatePolizaSalud() {
  _updatePolizaSalud = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var id, _req$body6, nropoliza, nrocertificado, fechainicio, fechafin, fechaexpedicion, fecharecepcion, tipomoneda, primatotal, formapago, encargadoid, bancoid, ciudadexpedicion, notas, companiaseguroid, subramocompaniaid, tiporamoid, contratanteid, tomadorid, ejecutivoid, colocacionid, ciaspvs, tipopolizaid, tpoliza, tipocontrato, menoid, vendedorid, tipoemision, franquicia, valorasegurado, comisionbs, comisionusd, tipocambio, porcentajeprima, primaneta, porcentajecomision, usuarioregistro, usuariomodificacion, fecharegistro, estado, sucursalid, planid, archivos, archivoseliminados, personas, eliminadospersonas, t, updateRowCount, i, _i10, _i11, _i12, newPolizaDetalle, polizas;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id = req.params.id;
            _req$body6 = req.body, nropoliza = _req$body6.nropoliza, nrocertificado = _req$body6.nrocertificado, fechainicio = _req$body6.fechainicio, fechafin = _req$body6.fechafin, fechaexpedicion = _req$body6.fechaexpedicion, fecharecepcion = _req$body6.fecharecepcion, tipomoneda = _req$body6.tipomoneda, primatotal = _req$body6.primatotal, formapago = _req$body6.formapago, encargadoid = _req$body6.encargadoid, bancoid = _req$body6.bancoid, ciudadexpedicion = _req$body6.ciudadexpedicion, notas = _req$body6.notas, companiaseguroid = _req$body6.companiaseguroid, subramocompaniaid = _req$body6.subramocompaniaid, tiporamoid = _req$body6.tiporamoid, contratanteid = _req$body6.contratanteid, tomadorid = _req$body6.tomadorid, ejecutivoid = _req$body6.ejecutivoid, colocacionid = _req$body6.colocacionid, ciaspvs = _req$body6.ciaspvs, tipopolizaid = _req$body6.tipopolizaid, tpoliza = _req$body6.tpoliza, tipocontrato = _req$body6.tipocontrato, menoid = _req$body6.menoid, vendedorid = _req$body6.vendedorid, tipoemision = _req$body6.tipoemision, franquicia = _req$body6.franquicia, valorasegurado = _req$body6.valorasegurado, comisionbs = _req$body6.comisionbs, comisionusd = _req$body6.comisionusd, tipocambio = _req$body6.tipocambio, porcentajeprima = _req$body6.porcentajeprima, primaneta = _req$body6.primaneta, porcentajecomision = _req$body6.porcentajecomision, usuarioregistro = _req$body6.usuarioregistro, usuariomodificacion = _req$body6.usuariomodificacion, fecharegistro = _req$body6.fecharegistro, estado = _req$body6.estado, sucursalid = _req$body6.sucursalid, planid = _req$body6.planid, archivos = _req$body6.archivos, archivoseliminados = _req$body6.archivoseliminados, personas = _req$body6.personas, eliminadospersonas = _req$body6.eliminadospersonas;
            _context7.prev = 2;
            _context7.next = 5;
            return _database.sequelize.transaction();

          case 5:
            t = _context7.sent;
            _context7.next = 8;
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
              //llamadoid,
              vendedorid: vendedorid,
              //nroplaca,
              tipoemision: tipoemision,
              franquicia: franquicia,
              valorasegurado: valorasegurado,
              comisionbs: comisionbs,
              comisionusd: comisionusd,
              tipocambio: tipocambio,
              porcentajeprima: porcentajeprima,
              primaneta: primaneta,
              porcentajecomision: porcentajecomision,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: fecharegistro,
              fechamodificacion: new Date(),
              estado: estado,
              sucursalid: sucursalid,
              planid: planid
            }, {
              where: {
                id: id
              }
            }, {
              transaction: t
            });

          case 8:
            updateRowCount = _context7.sent;
            i = 0;

          case 10:
            if (!(i < archivoseliminados.length)) {
              _context7.next = 16;
              break;
            }

            _context7.next = 13;
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
            _context7.next = 10;
            break;

          case 16:
            _i10 = 0;

          case 17:
            if (!(_i10 < archivos.length)) {
              _context7.next = 23;
              break;
            }

            _context7.next = 20;
            return _Archivo["default"].create({
              codigo: id,
              nombre: archivos[_i10].nombre,
              descripcion: archivos[_i10].nombre,
              extension: archivos[_i10].extension,
              archivo: archivos[_i10].archivo,
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
            _i10++;
            _context7.next = 17;
            break;

          case 23:
            if (!eliminadospersonas) {
              _context7.next = 31;
              break;
            }

            _i11 = 0;

          case 25:
            if (!(_i11 < eliminadospersonas.length)) {
              _context7.next = 31;
              break;
            }

            _context7.next = 28;
            return _PolizaDetallePersona["default"].update({
              estado: 'BAJ',
              fechamodificacion: new Date()
            }, {
              where: {
                id: eliminadospersonas[_i11].id
              }
            }, {
              transaction: t
            });

          case 28:
            _i11++;
            _context7.next = 25;
            break;

          case 31:
            if (!personas) {
              _context7.next = 40;
              break;
            }

            _i12 = 0;

          case 33:
            if (!(_i12 < personas.length)) {
              _context7.next = 40;
              break;
            }

            _context7.next = 36;
            return _PolizaDetallePersona["default"].create({
              nrocertificado: personas[_i12].nrocertificado,
              tipoasegurado: personas[_i12].tipoasegurado,
              titular: personas[_i12].asegurado,
              cobertura: personas[_i12].coberturamaternidad,
              fechanacimiento: personas[_i12].fechanacimiento,
              sexo: personas[_i12].sexo,
              ambitogeografico: personas[_i12].ambitogeografico,
              sistemaatencion: personas[_i12].sistemaatencion,
              primaindividual: personas[_i12].primaindividual,
              primanetaindividualbs: personas[_i12].primanetaindividualbs,
              primanetaindividualusd: personas[_i12].primanetaindividualusd,
              franquicia: personas[_i12].franquicia,
              valorasegurado: personas[_i12].valorasegurado,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: new Date(),
              fechamodificacion: new Date(),
              estado: 'ACT',
              polizaid: id
            }, {
              fields: ['nrocertificado', 'tipoasegurado', 'titular', 'cobertura', 'fechanacimiento', 'sexo', 'ambitogeografico', 'sistemaatencion', 'primaindividual', 'primanetaindividualbs', 'primanetaindividualusd', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado', 'polizaid']
            }, {
              transaction: t
            });

          case 36:
            newPolizaDetalle = _context7.sent;

          case 37:
            _i12++;
            _context7.next = 33;
            break;

          case 40:
            _context7.next = 42;
            return t.commit();

          case 42:
            _context7.next = 44;
            return _Poliza["default"].findOne({
              where: {
                id: id
              }
            });

          case 44:
            polizas = _context7.sent;
            res.json({
              message: 'Poliza update successfully',
              count: polizas
            });
            _context7.next = 55;
            break;

          case 48:
            _context7.prev = 48;
            _context7.t0 = _context7["catch"](2);
            console.log(_context7.t0);

            if (!t) {
              _context7.next = 54;
              break;
            }

            _context7.next = 54;
            return t.rollback();

          case 54:
            res.status(500).json({
              data: {
                estado: false,
                "error": _context7.t0.message
              }
            });

          case 55:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[2, 48]]);
  }));
  return _updatePolizaSalud.apply(this, arguments);
}

function createPolizaGeneral(_x15, _x16) {
  return _createPolizaGeneral.apply(this, arguments);
}

function _createPolizaGeneral() {
  _createPolizaGeneral = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
    var _req$body7, nropoliza, nrocertificado, fechainicio, fechafin, fechaexpedicion, fecharecepcion, tipomoneda, primatotal, formapago, encargadoid, bancoid, ciudadexpedicion, notas, companiaseguroid, subramocompaniaid, tiporamoid, contratanteid, tomadorid, ejecutivoid, colocacionid, ciaspvs, tipopolizaid, tpoliza, tipocontrato, menoid, vendedorid, tipoemision, franquicia, valorasegurado, comisionbs, comisionusd, tipocambio, porcentajeprima, primaneta, porcentajecomision, archivos, generales, usuarioregistro, usuariomodificacion, _req$body7$estado, estado, sucursalid, planid, polizaid, newPoliza, t, ingresoegreso, i, _i13, newPolizaDetalle, QUERY, poliza;

    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _req$body7 = req.body, nropoliza = _req$body7.nropoliza, nrocertificado = _req$body7.nrocertificado, fechainicio = _req$body7.fechainicio, fechafin = _req$body7.fechafin, fechaexpedicion = _req$body7.fechaexpedicion, fecharecepcion = _req$body7.fecharecepcion, tipomoneda = _req$body7.tipomoneda, primatotal = _req$body7.primatotal, formapago = _req$body7.formapago, encargadoid = _req$body7.encargadoid, bancoid = _req$body7.bancoid, ciudadexpedicion = _req$body7.ciudadexpedicion, notas = _req$body7.notas, companiaseguroid = _req$body7.companiaseguroid, subramocompaniaid = _req$body7.subramocompaniaid, tiporamoid = _req$body7.tiporamoid, contratanteid = _req$body7.contratanteid, tomadorid = _req$body7.tomadorid, ejecutivoid = _req$body7.ejecutivoid, colocacionid = _req$body7.colocacionid, ciaspvs = _req$body7.ciaspvs, tipopolizaid = _req$body7.tipopolizaid, tpoliza = _req$body7.tpoliza, tipocontrato = _req$body7.tipocontrato, menoid = _req$body7.menoid, vendedorid = _req$body7.vendedorid, tipoemision = _req$body7.tipoemision, franquicia = _req$body7.franquicia, valorasegurado = _req$body7.valorasegurado, comisionbs = _req$body7.comisionbs, comisionusd = _req$body7.comisionusd, tipocambio = _req$body7.tipocambio, porcentajeprima = _req$body7.porcentajeprima, primaneta = _req$body7.primaneta, porcentajecomision = _req$body7.porcentajecomision, archivos = _req$body7.archivos, generales = _req$body7.generales, usuarioregistro = _req$body7.usuarioregistro, usuariomodificacion = _req$body7.usuariomodificacion, _req$body7$estado = _req$body7.estado, estado = _req$body7$estado === void 0 ? 'ACT' : _req$body7$estado, sucursalid = _req$body7.sucursalid, planid = _req$body7.planid, polizaid = _req$body7.polizaid;
            _context8.prev = 1;
            _context8.next = 4;
            return _database.sequelize.transaction();

          case 4:
            t = _context8.sent;
            ingresoegreso = 'I';

            if (tipoemision == 'Anexo Exclusion' || tipoemision == 'Anexo Anulacion') {
              ingresoegreso = 'E';
            } else {
              ingresoegreso = 'I';
            } //const transaction= sequelize.transaction;


            _context8.next = 9;
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
              // broker,
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
              //llamadoid,
              vendedorid: vendedorid,
              //nroplaca,
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
              ingresoegreso: ingresoegreso,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: new Date(),
              fechamodificacion: new Date(),
              estado: estado,
              sucursalid: sucursalid,
              planid: planid,
              polizaid: polizaid
            }, {
              fields: ['nropoliza', 'nrocertificado', 'fechainicio', 'fechafin', 'fechaexpedicion', 'fecharecepcion', 'tipomoneda', 'primatotal', 'formapago', 'encargadoid', 'bancoid', 'ciudadexpedicion', //'broker',
              'notas', 'companiaseguroid', 'subramocompaniaid', 'tiporamoid', 'contratanteid', 'tomadorid', 'ejecutivoid', 'colocacionid', 'ciaspvs', 'tipopolizaid', 'tpoliza', 'tipocontrato', 'menoid', //'llamadoid',
              'vendedorid', //'nroplaca',
              'tipoemision', 'franquicia', 'valorasegurado',
              /*     'fechainiciovigencia',
                  'fechafinvigencia',
                  'fechainclusion',
                  'prima',
                  'porcentajeprima',
                  'primaneta',
                  'porcentajecomision',
                  'detalle', */
              'comisionbs', 'comisionusd', 'tipocambio', 'porcentajeprima', 'primaneta', 'porcentajecomision', 'ingresoegreso', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado', 'sucursalid', 'planid', 'polizaid']
            }, {
              transaction: t
            });

          case 9:
            newPoliza = _context8.sent;
            i = 0;

          case 11:
            if (!(i < archivos.length)) {
              _context8.next = 17;
              break;
            }

            _context8.next = 14;
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

          case 14:
            i++;
            _context8.next = 11;
            break;

          case 17:
            _i13 = 0;

          case 18:
            if (!(_i13 < generales.length)) {
              _context8.next = 25;
              break;
            }

            _context8.next = 21;
            return _PolizaDetalleGeneral["default"].create({
              //titular: generales[i].titular,
              objetoasegurado: generales[_i13].objetoasegurado,
              nrocertificado: generales[_i13].nrocertificado,
              tipopolizageneral: generales[_i13].tipopolizageneral,
              direccion: generales[_i13].direccion,
              primaindividual: generales[_i13].primaindividual,

              /*     primanetaindividualbs: generales[i].primanetaindividualbs,
                  primanetaindividualusd: generales[i].primanetaindividualusd, */
              franquicia: generales[_i13].franquicia,
              valorasegurado: generales[_i13].valorasegurado,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: new Date(),
              fechamodificacion: new Date(),
              estado: 'ACT',
              polizaid: newPoliza.id
            }, {
              fields: ['objetoasegurado', 'nrocertificado', 'tipopolizageneral', 'direccion', 'primaindividual', 'primanetaindividualbs', 'primanetaindividualusd', 'franquicia', 'valorasegurado', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado', 'polizaid']
            }, {
              transaction: t
            });

          case 21:
            newPolizaDetalle = _context8.sent;

          case 22:
            _i13++;
            _context8.next = 18;
            break;

          case 25:
            _context8.next = 27;
            return t.commit();

          case 27:
            QUERY = "select p.id, p.nropoliza, p.nrocertificado, p.fechainicio, p.fechafin, p.fechaexpedicion, p.fecharecepcion, p.tipomoneda, p.primatotal, p.formapago, p.encargadoid, p.bancoid, p.ciudadexpedicion, p.notas, p.companiaseguroid, p.subramocompaniaid, p.tiporamoid, p.contratanteid, p.tomadorid, p.ejecutivoid, p.colocacionid, p.ciaspvs, p.tipopolizaid, p.tpoliza, p.tipocontrato, p.memoid, p.vendedorid, null tipoemision, p.franquicia, p.valorasegurado, p.comisionbs, p.comisionusd, p.tipocambio, p.porcentajeprima, p.primaneta, p.porcentajecomision, p.usuarioregistro, p.usuariomodificacion, p.fecharegistro, p.fechamodificacion, p.estado, p.sucursalid, p.planid, p.polizaid \n        ,sr.nombre nombreramopadre,case when sr.id is null then r.nombre else sr.nombre end nombreramo,case when  sr.id is null then null else r.nombre end nombresubramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania ,s.nombre as sucursal,t.nombre tiporamo,pe.nombrecompleto ejecutivo,car.nombrecompleto cartera\n        from poliza p\n        inner join sucursal s on s.id=p.sucursalid\n        inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid\n        inner join ramo r on r.id=rc.ramoid\n        left join ramo sr on sr.id=rc.ramopadreid\n        inner join asegurado a on a.id=p.tomadorid\n        inner join compania_seguro cs on cs.id=p.companiaseguroid\n        inner join tipo_ramo t on t.id=p.tiporamoid\n        inner join personal pe on pe.id=p.ejecutivoid\n        inner join personal car on car.id=a.carteraid\n        where p.id='" + newPoliza.id + "'   "; //console.log(QUERY);

            _context8.next = 30;
            return _database.sequelize.query(QUERY, {
              type: QueryTypes.SELECT
            });

          case 30:
            poliza = _context8.sent;

            if (!newPoliza) {
              _context8.next = 33;
              break;
            }

            return _context8.abrupt("return", res.json({
              message: 'Poliza created successfully',
              data: poliza[0]
            }));

          case 33:
            _context8.next = 45;
            break;

          case 35:
            _context8.prev = 35;
            _context8.t0 = _context8["catch"](1);
            console.log(_context8.t0);

            if (!t) {
              _context8.next = 44;
              break;
            }

            _context8.next = 41;
            return t.rollback();

          case 41:
            if (!newPoliza) {
              _context8.next = 44;
              break;
            }

            _context8.next = 44;
            return _Poliza["default"].destroy({
              where: {
                id: newPoliza.id
              }
            });

          case 44:
            res.status(500).json({
              data: {
                estado: false,
                "error": _context8.t0.message
              }
            });

          case 45:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[1, 35]]);
  }));
  return _createPolizaGeneral.apply(this, arguments);
}

function updatePolizaGeneral(_x17, _x18) {
  return _updatePolizaGeneral.apply(this, arguments);
}

function _updatePolizaGeneral() {
  _updatePolizaGeneral = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(req, res) {
    var id, _req$body8, nropoliza, nrocertificado, fechainicio, fechafin, fechaexpedicion, fecharecepcion, tipomoneda, primatotal, formapago, encargadoid, bancoid, ciudadexpedicion, notas, companiaseguroid, subramocompaniaid, tiporamoid, contratanteid, tomadorid, ejecutivoid, colocacionid, ciaspvs, tipopolizaid, tpoliza, tipocontrato, menoid, vendedorid, tipoemision, franquicia, valorasegurado, comisionbs, comisionusd, tipocambio, porcentajeprima, primaneta, porcentajecomision, usuarioregistro, usuariomodificacion, fecharegistro, estado, sucursalid, planid, archivos, archivoseliminados, generales, eliminadosgenerales, t, updateRowCount, i, _i14, _i15, _i16, newPolizaDetalle, polizas;

    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            id = req.params.id;
            _req$body8 = req.body, nropoliza = _req$body8.nropoliza, nrocertificado = _req$body8.nrocertificado, fechainicio = _req$body8.fechainicio, fechafin = _req$body8.fechafin, fechaexpedicion = _req$body8.fechaexpedicion, fecharecepcion = _req$body8.fecharecepcion, tipomoneda = _req$body8.tipomoneda, primatotal = _req$body8.primatotal, formapago = _req$body8.formapago, encargadoid = _req$body8.encargadoid, bancoid = _req$body8.bancoid, ciudadexpedicion = _req$body8.ciudadexpedicion, notas = _req$body8.notas, companiaseguroid = _req$body8.companiaseguroid, subramocompaniaid = _req$body8.subramocompaniaid, tiporamoid = _req$body8.tiporamoid, contratanteid = _req$body8.contratanteid, tomadorid = _req$body8.tomadorid, ejecutivoid = _req$body8.ejecutivoid, colocacionid = _req$body8.colocacionid, ciaspvs = _req$body8.ciaspvs, tipopolizaid = _req$body8.tipopolizaid, tpoliza = _req$body8.tpoliza, tipocontrato = _req$body8.tipocontrato, menoid = _req$body8.menoid, vendedorid = _req$body8.vendedorid, tipoemision = _req$body8.tipoemision, franquicia = _req$body8.franquicia, valorasegurado = _req$body8.valorasegurado, comisionbs = _req$body8.comisionbs, comisionusd = _req$body8.comisionusd, tipocambio = _req$body8.tipocambio, porcentajeprima = _req$body8.porcentajeprima, primaneta = _req$body8.primaneta, porcentajecomision = _req$body8.porcentajecomision, usuarioregistro = _req$body8.usuarioregistro, usuariomodificacion = _req$body8.usuariomodificacion, fecharegistro = _req$body8.fecharegistro, estado = _req$body8.estado, sucursalid = _req$body8.sucursalid, planid = _req$body8.planid, archivos = _req$body8.archivos, archivoseliminados = _req$body8.archivoseliminados, generales = _req$body8.generales, eliminadosgenerales = _req$body8.eliminadosgenerales;
            _context9.prev = 2;
            _context9.next = 5;
            return _database.sequelize.transaction();

          case 5:
            t = _context9.sent;
            _context9.next = 8;
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
              //llamadoid,
              vendedorid: vendedorid,
              //nroplaca,
              tipoemision: tipoemision,
              franquicia: franquicia,
              valorasegurado: valorasegurado,
              comisionbs: comisionbs,
              comisionusd: comisionusd,
              tipocambio: tipocambio,
              porcentajeprima: porcentajeprima,
              primaneta: primaneta,
              porcentajecomision: porcentajecomision,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: fecharegistro,
              fechamodificacion: new Date(),
              estado: estado,
              sucursalid: sucursalid,
              planid: planid
            }, {
              where: {
                id: id
              }
            }, {
              transaction: t
            });

          case 8:
            updateRowCount = _context9.sent;
            i = 0;

          case 10:
            if (!(i < archivoseliminados.length)) {
              _context9.next = 16;
              break;
            }

            _context9.next = 13;
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
            _context9.next = 10;
            break;

          case 16:
            _i14 = 0;

          case 17:
            if (!(_i14 < archivos.length)) {
              _context9.next = 23;
              break;
            }

            _context9.next = 20;
            return _Archivo["default"].create({
              codigo: id,
              nombre: archivos[_i14].nombre,
              descripcion: archivos[_i14].nombre,
              extension: archivos[_i14].extension,
              archivo: archivos[_i14].archivo,
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
            _i14++;
            _context9.next = 17;
            break;

          case 23:
            if (!eliminadosgenerales) {
              _context9.next = 31;
              break;
            }

            _i15 = 0;

          case 25:
            if (!(_i15 < eliminadosgenerales.length)) {
              _context9.next = 31;
              break;
            }

            _context9.next = 28;
            return _PolizaDetalleGeneral["default"].update({
              estado: 'BAJ',
              fechamodificacion: new Date()
            }, {
              where: {
                id: eliminadosgenerales[_i15].id
              }
            }, {
              transaction: t
            });

          case 28:
            _i15++;
            _context9.next = 25;
            break;

          case 31:
            if (!generales) {
              _context9.next = 40;
              break;
            }

            _i16 = 0;

          case 33:
            if (!(_i16 < generales.length)) {
              _context9.next = 40;
              break;
            }

            _context9.next = 36;
            return _PolizaDetalleGeneral["default"].create({
              //titular: generales[i].titular,
              objetoasegurado: generales[_i16].objetoasegurado,
              nrocertificado: generales[_i16].nrocertificado,
              tipopolizageneral: generales[_i16].tipopolizageneral,
              direccion: generales[_i16].direccion,
              primaindividual: generales[_i16].primaindividual,
              franquicia: generales[_i16].franquicia,
              valorasegurado: generales[_i16].valorasegurado,

              /*  primanetaindividualbs: generales[i].primanetaindividualbs,
               primanetaindividualusd: generales[i].primanetaindividualusd, */
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fechamodificacion: new Date(),
              estado: 'ACT',
              polizaid: id
            }, {
              fields: ['objetoasegurado', 'nrocertificado', 'tipopolizageneral', 'direccion', 'primaindividual', 'primanetaindividualbs', 'primanetaindividualusd', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado', 'polizaid']
            }, {
              transaction: t
            });

          case 36:
            newPolizaDetalle = _context9.sent;

          case 37:
            _i16++;
            _context9.next = 33;
            break;

          case 40:
            _context9.next = 42;
            return t.commit();

          case 42:
            _context9.next = 44;
            return _Poliza["default"].findOne({
              where: {
                id: id
              }
            });

          case 44:
            polizas = _context9.sent;
            res.json({
              message: 'Poliza update successfully',
              count: polizas
            });
            _context9.next = 55;
            break;

          case 48:
            _context9.prev = 48;
            _context9.t0 = _context9["catch"](2);
            console.log(_context9.t0);

            if (!t) {
              _context9.next = 54;
              break;
            }

            _context9.next = 54;
            return t.rollback();

          case 54:
            res.status(500).json({
              data: {
                estado: false,
                "error": _context9.t0.message
              }
            });

          case 55:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[2, 48]]);
  }));
  return _updatePolizaGeneral.apply(this, arguments);
}

function getOnePoliza(_x19, _x20) {
  return _getOnePoliza.apply(this, arguments);
}

function _getOnePoliza() {
  _getOnePoliza = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(req, res) {
    var id, poliza;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            id = req.params.id;
            _context10.next = 4;
            return _Poliza["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            poliza = _context10.sent;
            res.json({
              data: poliza
            });
            _context10.next = 12;
            break;

          case 8:
            _context10.prev = 8;
            _context10.t0 = _context10["catch"](0);
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
    }, _callee10, null, [[0, 8]]);
  }));
  return _getOnePoliza.apply(this, arguments);
}

function polizasPorSucursal(_x21, _x22) {
  return _polizasPorSucursal.apply(this, arguments);
}

function _polizasPorSucursal() {
  _polizasPorSucursal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(req, res) {
    var sucursalid, poliza;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            sucursalid = req.params.sucursalid;
            _context11.next = 4;
            return _Poliza["default"].findOne({
              where: {
                sucursalid: sucursalid,
                estado: 'ACT'
              }
            });

          case 4:
            poliza = _context11.sent;
            res.json({
              data: poliza
            });
            _context11.next = 12;
            break;

          case 8:
            _context11.prev = 8;
            _context11.t0 = _context11["catch"](0);
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
    }, _callee11, null, [[0, 8]]);
  }));
  return _polizasPorSucursal.apply(this, arguments);
}

function deletePoliza(_x23, _x24) {
  return _deletePoliza.apply(this, arguments);
}

function _deletePoliza() {
  _deletePoliza = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            id = req.params.id;
            _context12.next = 4;
            return _Poliza["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context12.sent;
            res.json({
              message: 'Poliza deleted successfully',
              count: deleteRowCount
            });
            _context12.next = 12;
            break;

          case 8:
            _context12.prev = 8;
            _context12.t0 = _context12["catch"](0);
            console.log(_context12.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context12.t0.message
              }
            });

          case 12:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[0, 8]]);
  }));
  return _deletePoliza.apply(this, arguments);
}

function bajaPoliza(_x25, _x26) {
  return _bajaPoliza.apply(this, arguments);
}
/**consultas de polizas */


function _bajaPoliza() {
  _bajaPoliza = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(req, res) {
    var id, usuariomodificacion, updateRowCount, poliza;
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            id = req.params.id;
            console.log("bajaPoliza");
            usuariomodificacion = req.body.usuariomodificacion;
            _context13.prev = 3;
            _context13.next = 6;
            return _Poliza["default"].update({
              usuariomodificacion: usuariomodificacion,
              fechamodificacion: new Date(),
              estado: 'BAJ'
            }, {
              where: {
                id: id
              }
            });

          case 6:
            updateRowCount = _context13.sent;
            _context13.next = 9;
            return _Poliza["default"].findOne({
              where: {
                id: id
              }
            });

          case 9:
            poliza = _context13.sent;
            res.json({
              message: 'Poliza baja successfully',
              data: poliza
            });
            _context13.next = 17;
            break;

          case 13:
            _context13.prev = 13;
            _context13.t0 = _context13["catch"](3);
            console.log(_context13.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context13.t0.message
              }
            });

          case 17:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, null, [[3, 13]]);
  }));
  return _bajaPoliza.apply(this, arguments);
}

function getPolizaPorTipoYSucursal(_x27, _x28) {
  return _getPolizaPorTipoYSucursal.apply(this, arguments);
}

function _getPolizaPorTipoYSucursal() {
  _getPolizaPorTipoYSucursal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(req, res) {
    var _req$params, tipopolizaid, sucursalid, query, polizas;

    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _req$params = req.params, tipopolizaid = _req$params.tipopolizaid, sucursalid = _req$params.sucursalid;
            _context14.prev = 1;
            query = "select p.*,t.nombre tiporamo,s.nombre as sucursal \n            from poliza p \n            inner join sucursal s on s.id=p.sucursalid  \n             inner join tipo_ramo t on t.id=p.tiporamoid  \"\n            where s.id= '" + sucursalid + "' and p.tpoliza='" + tipopolizaid + "' order by p.fechamodificacion desc ";
            _context14.next = 5;
            return _database.sequelize.query(query, {
              type: QueryTypes.SELECT
            });

          case 5:
            polizas = _context14.sent;
            res.json({
              polizas: polizas
            }); //const polizas = await Poliza.findAll({ where: { tipopolizaid, sucursalid, estado: 'ACT' } });
            //const polizas = await Poliza.findAll({ where: { tpoliza: tipopolizaid, sucursalid, estado: 'ACT' } });

            res.json({
              polizas: polizas
            });
            _context14.next = 14;
            break;

          case 10:
            _context14.prev = 10;
            _context14.t0 = _context14["catch"](1);
            console.log(_context14.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context14.t0.message
              }
            });

          case 14:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14, null, [[1, 10]]);
  }));
  return _getPolizaPorTipoYSucursal.apply(this, arguments);
}

function getPolizasPorTipoYEmpresa(_x29, _x30) {
  return _getPolizasPorTipoYEmpresa.apply(this, arguments);
}

function _getPolizasPorTipoYEmpresa() {
  _getPolizasPorTipoYEmpresa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(req, res) {
    var _req$params2, tipopolizaid, empresaid, query, polizas;

    return regeneratorRuntime.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _req$params2 = req.params, tipopolizaid = _req$params2.tipopolizaid, empresaid = _req$params2.empresaid;
            _context15.prev = 1;
            query = "select p.*,t.nombre tiporamo,s.nombre as sucursal \n            from poliza p \n            inner join sucursal s on s.id=p.sucursalid  \n            inner join tipo_ramo t on t.id=p.tiporamoid  \n            where s.empresaid= '" + empresaid + "' and p.tpoliza='" + tipopolizaid + "' order by p.fechamodificacion desc ";
            _context15.next = 5;
            return _database.sequelize.query(query, {
              type: QueryTypes.SELECT
            });

          case 5:
            polizas = _context15.sent;
            res.json({
              polizas: polizas
            });
            _context15.next = 13;
            break;

          case 9:
            _context15.prev = 9;
            _context15.t0 = _context15["catch"](1);
            console.log(_context15.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context15.t0.message
              }
            });

          case 13:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15, null, [[1, 9]]);
  }));
  return _getPolizasPorTipoYEmpresa.apply(this, arguments);
}

function getPolizasPorTipoRamoYEmpresa(_x31, _x32) {
  return _getPolizasPorTipoRamoYEmpresa.apply(this, arguments);
}

function _getPolizasPorTipoRamoYEmpresa() {
  _getPolizasPorTipoRamoYEmpresa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(req, res) {
    var _req$params3, tipopoliza, tiporamoid, empresaid, _req$body9, fechainicio, fechafin, query, polizas;

    return regeneratorRuntime.wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _req$params3 = req.params, tipopoliza = _req$params3.tipopoliza, tiporamoid = _req$params3.tiporamoid, empresaid = _req$params3.empresaid;
            _req$body9 = req.body, fechainicio = _req$body9.fechainicio, fechafin = _req$body9.fechafin;
            _context16.prev = 2;
            query = "select p.* ,t.nombre tiporamo,sr.nombre nombreramopadre,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal \n            from poliza p \n            inner join sucursal s on s.id=p.sucursalid  \n            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid \n            inner join ramo r on r.id=rc.ramoid \n            left join ramo sr on sr.id=rc.ramopadreid \n            inner join asegurado a on a.id=p.tomadorid \n            inner join compania_seguro cs on cs.id=p.companiaseguroid \n            inner join tipo_ramo t on t.id=p.tiporamoid  \n            where s.empresaid= '" + empresaid + "' and p.tpoliza='" + tipopoliza + "' and p.tiporamoid='" + tiporamoid + "'  \n            and to_char(p.fecharegistro, 'YYYYMMDD')::integer>= " + fechainicio + " and to_char(p.fecharegistro, 'YYYYMMDD')::integer<= " + fechafin + " and p.estado  NOT IN ('BAJ') order by p.fechamodificacion desc "; //   console.log(query);

            _context16.next = 6;
            return _database.sequelize.query(query, {
              type: QueryTypes.SELECT
            });

          case 6:
            polizas = _context16.sent;
            //console.log(JSON.stringify(usuarios[0], null, 2));
            res.json({
              polizas: polizas
            });
            _context16.next = 14;
            break;

          case 10:
            _context16.prev = 10;
            _context16.t0 = _context16["catch"](2);
            console.log(_context16.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context16.t0.message
              }
            });

          case 14:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16, null, [[2, 10]]);
  }));
  return _getPolizasPorTipoRamoYEmpresa.apply(this, arguments);
}

function getPolizasPorTipoRamoYSucursal(_x33, _x34) {
  return _getPolizasPorTipoRamoYSucursal.apply(this, arguments);
}

function _getPolizasPorTipoRamoYSucursal() {
  _getPolizasPorTipoRamoYSucursal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(req, res) {
    var _req$params4, tipopoliza, tiporamoid, sucursalid, _req$body10, fechainicio, fechafin, query, polizas;

    return regeneratorRuntime.wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            _req$params4 = req.params, tipopoliza = _req$params4.tipopoliza, tiporamoid = _req$params4.tiporamoid, sucursalid = _req$params4.sucursalid;
            _req$body10 = req.body, fechainicio = _req$body10.fechainicio, fechafin = _req$body10.fechafin;
            _context17.prev = 2;
            query = "select p.* ,t.nombre tiporamo,sr.nombre nombreramopadre,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal\n        from poliza p\n        inner join sucursal s on s.id=p.sucursalid\n        inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid\n        inner join ramo r on r.id=rc.ramoid\n        left join ramo sr on sr.id=rc.ramopadreid\n        inner join asegurado a on a.id=p.tomadorid\n        inner join compania_seguro cs on cs.id=p.companiaseguroid\n        inner join tipo_ramo t on t.id=p.tiporamoid\n        where s.id='" + sucursalid + "'  and p.tpoliza='" + tipopoliza + "' and p.tiporamoid='" + tiporamoid + "'  and to_char(p.fecharegistro, 'YYYYMMDD')::integer>= " + fechainicio + " and to_char(p.fecharegistro, 'YYYYMMDD')::integer<= " + fechafin + " and p.estado NOT IN ('BAJ') order by p.fechamodificacion desc ";
            _context17.next = 6;
            return _database.sequelize.query(query, {
              type: QueryTypes.SELECT
            });

          case 6:
            polizas = _context17.sent;
            //console.log(JSON.stringify(usuarios[0], null, 2));
            //console.log(query);
            res.json({
              polizas: polizas
            });
            _context17.next = 14;
            break;

          case 10:
            _context17.prev = 10;
            _context17.t0 = _context17["catch"](2);
            console.log(_context17.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context17.t0.message
              }
            });

          case 14:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17, null, [[2, 10]]);
  }));
  return _getPolizasPorTipoRamoYSucursal.apply(this, arguments);
}

function getPolizaHijo(_x35, _x36) {
  return _getPolizaHijo.apply(this, arguments);
}

function _getPolizaHijo() {
  _getPolizaHijo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(req, res) {
    var polizaid, query, polizas;
    return regeneratorRuntime.wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            polizaid = req.params.polizaid;
            _context18.prev = 1;
            query = "select p.* ,t.nombre tiporamo,sr.nombre nombreramopadre,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal\n        from poliza p\n        inner join sucursal s on s.id=p.sucursalid\n        inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid\n        inner join ramo r on r.id=rc.ramoid\n        left join ramo sr on sr.id=rc.ramopadreid\n        inner join asegurado a on a.id=p.tomadorid\n        inner join compania_seguro cs on cs.id=p.companiaseguroid\n        inner join tipo_ramo t on t.id=p.tiporamoid\n        where p.polizaid='" + polizaid + "'   and p.estado NOT IN ('BAJ') order by p.fechamodificacion desc ";
            _context18.next = 5;
            return _database.sequelize.query(query, {
              type: QueryTypes.SELECT
            });

          case 5:
            polizas = _context18.sent;
            //console.log(JSON.stringify(usuarios[0], null, 2));
            //console.log(query);
            res.json({
              polizas: polizas
            });
            _context18.next = 13;
            break;

          case 9:
            _context18.prev = 9;
            _context18.t0 = _context18["catch"](1);
            console.log(_context18.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context18.t0.message
              }
            });

          case 13:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18, null, [[1, 9]]);
  }));
  return _getPolizaHijo.apply(this, arguments);
}

function polizasPorEmpresaGeneral(_x37, _x38) {
  return _polizasPorEmpresaGeneral.apply(this, arguments);
}

function _polizasPorEmpresaGeneral() {
  _polizasPorEmpresaGeneral = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(req, res) {
    var empresaid, _req$body11, fechainicio, fechafin, query, polizas;

    return regeneratorRuntime.wrap(function _callee19$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            empresaid = req.params.empresaid;
            _req$body11 = req.body, fechainicio = _req$body11.fechainicio, fechafin = _req$body11.fechafin;
            _context19.prev = 2;
            query = "select p.* ,t.nombre tiporamo,sr.nombre nombreramopadre,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal \n            from poliza p \n            inner join sucursal s on s.id=p.sucursalid  \n            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid \n            inner join ramo r on r.id=rc.ramoid \n            left join ramo sr on sr.id=rc.ramopadreid \n            inner join asegurado a on a.id=p.tomadorid \n            inner join compania_seguro cs on cs.id=p.companiaseguroid \n            inner join tipo_ramo t on t.id=p.tiporamoid  \n            where s.empresaid= '" + empresaid + "' \n            and to_char(p.fecharegistro, 'YYYYMMDD')::integer>= " + fechainicio + " and to_char(p.fecharegistro, 'YYYYMMDD')::integer<= " + fechafin + " and p.estado  NOT IN ('BAJ') order by p.fechamodificacion desc "; //   console.log(query);

            _context19.next = 6;
            return _database.sequelize.query(query, {
              type: QueryTypes.SELECT
            });

          case 6:
            polizas = _context19.sent;
            //console.log(JSON.stringify(usuarios[0], null, 2));
            res.json({
              polizas: polizas
            });
            _context19.next = 14;
            break;

          case 10:
            _context19.prev = 10;
            _context19.t0 = _context19["catch"](2);
            console.log(_context19.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context19.t0.message
              }
            });

          case 14:
          case "end":
            return _context19.stop();
        }
      }
    }, _callee19, null, [[2, 10]]);
  }));
  return _polizasPorEmpresaGeneral.apply(this, arguments);
}

function polizasPorSucursalGeneral(_x39, _x40) {
  return _polizasPorSucursalGeneral.apply(this, arguments);
}

function _polizasPorSucursalGeneral() {
  _polizasPorSucursalGeneral = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(req, res) {
    var _req$params5, tipopoliza, tiporamoid, sucursalid, _req$body12, fechainicio, fechafin, query, polizas;

    return regeneratorRuntime.wrap(function _callee20$(_context20) {
      while (1) {
        switch (_context20.prev = _context20.next) {
          case 0:
            _req$params5 = req.params, tipopoliza = _req$params5.tipopoliza, tiporamoid = _req$params5.tiporamoid, sucursalid = _req$params5.sucursalid;
            _req$body12 = req.body, fechainicio = _req$body12.fechainicio, fechafin = _req$body12.fechafin;
            _context20.prev = 2;
            query = "select p.* ,t.nombre tiporamo,sr.nombre nombreramopadre,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal\n        from poliza p\n        inner join sucursal s on s.id=p.sucursalid\n        inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid\n        inner join ramo r on r.id=rc.ramoid\n        left join ramo sr on sr.id=rc.ramopadreid\n        inner join asegurado a on a.id=p.tomadorid\n        inner join compania_seguro cs on cs.id=p.companiaseguroid\n        inner join tipo_ramo t on t.id=p.tiporamoid\n        where s.id='" + sucursalid + "'  and to_char(p.fecharegistro, 'YYYYMMDD')::integer>= " + fechainicio + " and to_char(p.fecharegistro, 'YYYYMMDD')::integer<= " + fechafin + " and p.estado NOT IN ('BAJ') order by p.fechamodificacion desc ";
            _context20.next = 6;
            return _database.sequelize.query(query, {
              type: QueryTypes.SELECT
            });

          case 6:
            polizas = _context20.sent;
            //console.log(JSON.stringify(usuarios[0], null, 2));
            //console.log(query);
            res.json({
              polizas: polizas
            });
            _context20.next = 14;
            break;

          case 10:
            _context20.prev = 10;
            _context20.t0 = _context20["catch"](2);
            console.log(_context20.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context20.t0.message
              }
            });

          case 14:
          case "end":
            return _context20.stop();
        }
      }
    }, _callee20, null, [[2, 10]]);
  }));
  return _polizasPorSucursalGeneral.apply(this, arguments);
}

function getPolizasPorEmpresaFechaVencimiento(_x41, _x42) {
  return _getPolizasPorEmpresaFechaVencimiento.apply(this, arguments);
}

function _getPolizasPorEmpresaFechaVencimiento() {
  _getPolizasPorEmpresaFechaVencimiento = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21(req, res) {
    var empresaid, _req$body13, fechainicio, fechafin, query, polizas;

    return regeneratorRuntime.wrap(function _callee21$(_context21) {
      while (1) {
        switch (_context21.prev = _context21.next) {
          case 0:
            empresaid = req.params.empresaid;
            _req$body13 = req.body, fechainicio = _req$body13.fechainicio, fechafin = _req$body13.fechafin;
            _context21.prev = 2;
            query = "select p.* ,t.nombre tiporamo,sr.nombre nombreramopadre,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal \n            from poliza p\n            inner join sucursal s on s.id=p.sucursalid\n            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid\n            inner join ramo r on r.id=rc.ramoid\n            left join ramo sr on sr.id=rc.ramopadreid\n            inner join asegurado a on a.id=p.tomadorid\n            inner join compania_seguro cs on cs.id=p.companiaseguroid\n             inner join tipo_ramo t on t.id=p.tiporamoid \n            where s.empresaid= '" + empresaid + "'   and to_char(p.fechafin, 'YYYYMMDD')::integer>= " + fechainicio + " and to_char(p.fechafin, 'YYYYMMDD')::integer<= " + fechafin + " and p.estado NOT IN ('BAJ') order by p.fechamodificacion desc "; //console.log(query);

            _context21.next = 6;
            return _database.sequelize.query(query, {
              type: QueryTypes.SELECT
            });

          case 6:
            polizas = _context21.sent;
            //console.log(JSON.stringify(usuarios[0], null, 2));
            res.json({
              polizas: polizas
            });
            _context21.next = 14;
            break;

          case 10:
            _context21.prev = 10;
            _context21.t0 = _context21["catch"](2);
            console.log(_context21.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context21.t0.message
              }
            });

          case 14:
          case "end":
            return _context21.stop();
        }
      }
    }, _callee21, null, [[2, 10]]);
  }));
  return _getPolizasPorEmpresaFechaVencimiento.apply(this, arguments);
}

function getPolizasPorSucursalVencimiento(_x43, _x44) {
  return _getPolizasPorSucursalVencimiento.apply(this, arguments);
}

function _getPolizasPorSucursalVencimiento() {
  _getPolizasPorSucursalVencimiento = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22(req, res) {
    var sucursalid, _req$body14, fechainicio, fechafin, query, polizas;

    return regeneratorRuntime.wrap(function _callee22$(_context22) {
      while (1) {
        switch (_context22.prev = _context22.next) {
          case 0:
            sucursalid = req.params.sucursalid;
            _req$body14 = req.body, fechainicio = _req$body14.fechainicio, fechafin = _req$body14.fechafin;
            _context22.prev = 2;
            query = "select p.*,t.nombre tiporamo ,sr.nombre nombreramopadre,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal  \n          \n            from poliza p \n            inner join sucursal s on s.id=p.sucursalid  \n            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid \n            inner join ramo r on r.id=rc.ramoid \n            left join ramo sr on sr.id=rc.ramopadreid \n            inner join asegurado a on a.id=p.tomadorid \n            inner join compania_seguro cs on cs.id=p.companiaseguroid \n            inner join tipo_ramo t on t.id=p.tiporamoid  \"\n            where s.id='" + sucursalid + "'    and to_char(p.fechafin, 'YYYYMMDD')::integer>= " + fechainicio + " and to_char(p.fechafin, 'YYYYMMDD')::integer<= " + fechafin + " and p.estado NOT IN ('BAJ') order by p.fechamodificacion desc ";
            _context22.next = 6;
            return _database.sequelize.query(query, {
              type: QueryTypes.SELECT
            });

          case 6:
            polizas = _context22.sent;
            //console.log(JSON.stringify(usuarios[0], null, 2));
            //console.log(query);
            res.json({
              polizas: polizas
            });
            _context22.next = 14;
            break;

          case 10:
            _context22.prev = 10;
            _context22.t0 = _context22["catch"](2);
            console.log(_context22.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context22.t0.message
              }
            });

          case 14:
          case "end":
            return _context22.stop();
        }
      }
    }, _callee22, null, [[2, 10]]);
  }));
  return _getPolizasPorSucursalVencimiento.apply(this, arguments);
}

function getPolizasPorTomadorYEmpresa(_x45, _x46) {
  return _getPolizasPorTomadorYEmpresa.apply(this, arguments);
}

function _getPolizasPorTomadorYEmpresa() {
  _getPolizasPorTomadorYEmpresa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23(req, res) {
    var _req$params6, tomadorid, empresaid, query, polizas;

    return regeneratorRuntime.wrap(function _callee23$(_context23) {
      while (1) {
        switch (_context23.prev = _context23.next) {
          case 0:
            _req$params6 = req.params, tomadorid = _req$params6.tomadorid, empresaid = _req$params6.empresaid;
            _context23.prev = 1;
            //console.log(tomadorid, empresaid );
            query = "select p.* ,t.nombre tiporamo,sr.nombre nombreramopadre,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal \n            from poliza p \n            inner join sucursal s on s.id=p.sucursalid  \n            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid \n            inner join ramo r on r.id=rc.ramoid \n            left join ramo sr on sr.id=rc.ramopadreid \n            inner join asegurado a on a.id=p.tomadorid \n            inner join compania_seguro cs on cs.id=p.companiaseguroid \n            inner join tipo_ramo t on t.id=p.tiporamoid  \n            where s.empresaid= '" + empresaid + "' and a.id='" + tomadorid + "' and p.estado NOT IN ('BAJ') order by p.fechamodificacion desc "; //console.log(query );

            _context23.next = 5;
            return _database.sequelize.query(query, {
              type: QueryTypes.SELECT
            });

          case 5:
            polizas = _context23.sent;
            //console.log(JSON.stringify(usuarios[0], null, 2));
            res.json({
              polizas: polizas
            });
            _context23.next = 13;
            break;

          case 9:
            _context23.prev = 9;
            _context23.t0 = _context23["catch"](1);
            console.log(_context23.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context23.t0.message
              }
            });

          case 13:
          case "end":
            return _context23.stop();
        }
      }
    }, _callee23, null, [[1, 9]]);
  }));
  return _getPolizasPorTomadorYEmpresa.apply(this, arguments);
}

function getPolizasPorTomadorYSucursal(_x47, _x48) {
  return _getPolizasPorTomadorYSucursal.apply(this, arguments);
}

function _getPolizasPorTomadorYSucursal() {
  _getPolizasPorTomadorYSucursal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24(req, res) {
    var _req$params7, tomadorid, sucursalid, polizas;

    return regeneratorRuntime.wrap(function _callee24$(_context24) {
      while (1) {
        switch (_context24.prev = _context24.next) {
          case 0:
            _req$params7 = req.params, tomadorid = _req$params7.tomadorid, sucursalid = _req$params7.sucursalid;
            _context24.prev = 1;
            _context24.next = 4;
            return _database.sequelize.query("select p.* t.nombre tiporamo,sr.nombre nombreramopadre,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania ,s.nombre as sucursal \n           \n            from poliza p \n            inner join sucursal s on s.id=p.sucursalid  \n            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid \n            inner join ramo r on r.id=rc.ramoid \n            left join ramo sr on sr.id=rc.ramopadreid \n            inner join asegurado a on a.id=p.tomadorid \n            inner join compania_seguro cs on cs.id=p.companiaseguroid \n            inner join tipo_ramo t on t.id=p.tiporamoid  \n            where s.id='" + sucursalid + "'  and a.id='" + tomadorid + "' and p.estado NOT IN ('BAJ')  order by p.fechamodificacion desc ", {
              type: QueryTypes.SELECT
            });

          case 4:
            polizas = _context24.sent;
            //console.log(JSON.stringify(usuarios[0], null, 2));
            res.json({
              polizas: polizas
            });
            _context24.next = 12;
            break;

          case 8:
            _context24.prev = 8;
            _context24.t0 = _context24["catch"](1);
            console.log(_context24.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context24.t0.message
              }
            });

          case 12:
          case "end":
            return _context24.stop();
        }
      }
    }, _callee24, null, [[1, 8]]);
  }));
  return _getPolizasPorTomadorYSucursal.apply(this, arguments);
}

function getPolizasPorEmpresaSinMemo(_x49, _x50) {
  return _getPolizasPorEmpresaSinMemo.apply(this, arguments);
}

function _getPolizasPorEmpresaSinMemo() {
  _getPolizasPorEmpresaSinMemo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee25(req, res) {
    var empresaid, polizas;
    return regeneratorRuntime.wrap(function _callee25$(_context25) {
      while (1) {
        switch (_context25.prev = _context25.next) {
          case 0:
            empresaid = req.params.empresaid;
            _context25.prev = 1;
            _context25.next = 4;
            return _database.sequelize.query("select p.id, p.nropoliza, p.nrocertificado, p.fechainicio, p.fechafin, p.fechaexpedicion, p.fecharecepcion, p.tipomoneda, p.primatotal, p.formapago, p.encargadoid, p.bancoid, p.ciudadexpedicion, p.notas, p.companiaseguroid, p.subramocompaniaid, p.tiporamoid, p.contratanteid, p.tomadorid, p.ejecutivoid, p.colocacionid, p.ciaspvs, p.tipopolizaid, p.tpoliza, p.tipocontrato, p.memoid, p.vendedorid, null tipoemision, p.franquicia, p.valorasegurado, p.comisionbs, p.comisionusd, p.tipocambio, p.porcentajeprima, p.primaneta, p.porcentajecomision, p.usuarioregistro, p.usuariomodificacion, p.fecharegistro, p.fechamodificacion, p.estado, p.sucursalid, p.planid, p.polizaid \n            ,sr.nombre nombreramopadre,case when sr.id is null then r.nombre else sr.nombre end nombreramo,case when  sr.id is null then null else r.nombre end nombresubramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal ,t.nombre tiporamo,pe.nombrecompleto ejecutivo,car.nombrecompleto cartera\n            from poliza p\n            inner join sucursal s on s.id=p.sucursalid\n            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid\n            inner join ramo r on r.id=rc.ramoid\n            left join ramo sr on sr.id=rc.ramopadreid\n            inner join asegurado a on a.id=p.tomadorid\n            inner join tipo_ramo t on t.id=p.tiporamoid\n            inner join compania_seguro cs on cs.id=p.companiaseguroid\n            inner join personal pe on pe.id=p.ejecutivoid\n            inner join personal car on car.id=a.carteraid \n            left join memo m on m.polizaid=p.id and m.estado='ACT' \n            where m.polizaid is null and  s.empresaid= '" + empresaid + "' AND p.estado IN ('ACT','CER') order by p.fechamodificacion desc ", {
              type: QueryTypes.SELECT
            });

          case 4:
            polizas = _context25.sent;
            //console.log(JSON.stringify(usuarios[0], null, 2));
            res.json({
              polizas: polizas
            });
            _context25.next = 12;
            break;

          case 8:
            _context25.prev = 8;
            _context25.t0 = _context25["catch"](1);
            console.log(_context25.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context25.t0.message
              }
            });

          case 12:
          case "end":
            return _context25.stop();
        }
      }
    }, _callee25, null, [[1, 8]]);
  }));
  return _getPolizasPorEmpresaSinMemo.apply(this, arguments);
}

function getPolizasPorSucursalSinMemo(_x51, _x52) {
  return _getPolizasPorSucursalSinMemo.apply(this, arguments);
}
/** metodos de siniestro */


function _getPolizasPorSucursalSinMemo() {
  _getPolizasPorSucursalSinMemo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee26(req, res) {
    var sucursalid, QUERY, polizas;
    return regeneratorRuntime.wrap(function _callee26$(_context26) {
      while (1) {
        switch (_context26.prev = _context26.next) {
          case 0:
            sucursalid = req.params.sucursalid;
            _context26.prev = 1;
            QUERY = "select p.id, p.nropoliza, p.nrocertificado, p.fechainicio, p.fechafin, p.fechaexpedicion, p.fecharecepcion, p.tipomoneda, p.primatotal, p.formapago, p.encargadoid, p.bancoid, p.ciudadexpedicion, p.notas, p.companiaseguroid, p.subramocompaniaid, p.tiporamoid, p.contratanteid, p.tomadorid, p.ejecutivoid, p.colocacionid, p.ciaspvs, p.tipopolizaid, p.tpoliza, p.tipocontrato, p.memoid, p.vendedorid, null tipoemision, p.franquicia, p.valorasegurado, p.comisionbs, p.comisionusd, p.tipocambio, p.porcentajeprima, p.primaneta, p.porcentajecomision, p.usuarioregistro, p.usuariomodificacion, p.fecharegistro, p.fechamodificacion, p.estado, p.sucursalid, p.planid, p.polizaid \n            ,sr.nombre nombreramopadre,case when sr.id is null then r.nombre else sr.nombre end nombreramo,case when  sr.id is null then null else r.nombre end nombresubramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania ,s.nombre as sucursal,t.nombre tiporamo ,pe.nombrecompleto ejecutivo,car.nombrecompleto cartera\n            from poliza p \n            inner join sucursal s on s.id=p.sucursalid  \n            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid\n            inner join ramo r on r.id=rc.ramoid \n            left join ramo sr on sr.id=rc.ramopadreid \n            inner join asegurado a on a.id=p.tomadorid \n            inner join compania_seguro cs on cs.id=p.companiaseguroid \n            left join memo m on m.polizaid=p.id and m.estado='ACT' \n            inner join tipo_ramo t on t.id=p.tiporamoid \n            inner join personal pe on pe.id=p.ejecutivoid\n            inner join personal car on car.id=a.carteraid\n            where m.polizaid is null and s.id='" + sucursalid + "'   and p.estado IN ('ACT','CON','CER') order by p.fechamodificacion desc "; //console.log(QUERY);

            _context26.next = 5;
            return _database.sequelize.query(QUERY, {
              type: QueryTypes.SELECT
            });

          case 5:
            polizas = _context26.sent;
            //console.log(JSON.stringify(usuarios[0], null, 2));
            res.json({
              polizas: polizas
            });
            _context26.next = 13;
            break;

          case 9:
            _context26.prev = 9;
            _context26.t0 = _context26["catch"](1);
            console.log(_context26.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context26.t0.message
              }
            });

          case 13:
          case "end":
            return _context26.stop();
        }
      }
    }, _callee26, null, [[1, 9]]);
  }));
  return _getPolizasPorSucursalSinMemo.apply(this, arguments);
}

function getPolizasPorSucursal(_x53, _x54) {
  return _getPolizasPorSucursal.apply(this, arguments);
}

function _getPolizasPorSucursal() {
  _getPolizasPorSucursal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee27(req, res) {
    var sucursalid, polizas;
    return regeneratorRuntime.wrap(function _callee27$(_context27) {
      while (1) {
        switch (_context27.prev = _context27.next) {
          case 0:
            sucursalid = req.params.sucursalid;
            _context27.prev = 1;
            _context27.next = 4;
            return _database.sequelize.query("select p.id,p.nropoliza,p.nrocertificado,p.fechainicio,p.fechafin,p.fechaexpedicion \n            ,p.primatotal,p.valorasegurado,p.tpoliza,c.nombre as nombrecontratante,p.fecharegistro \n             ,sr.nombre nombreramopadre,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal,t.nombre tiporamo \n            from poliza p \n            inner join sucursal s on s.id=p.sucursalid  \n            inner join contratante c on c.id=p.contratanteid  \n            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid \n            inner join ramo r on r.id=rc.ramoid \n            left join ramo sr on sr.id=rc.ramopadreid \n            inner join asegurado a on a.id=p.tomadorid \n            inner join compania_seguro cs on cs.id=p.companiaseguroid \n            inner join memo m on m.polizaid=p.id and m.estado='ACT' \n             inner join tipo_ramo t on t.id=p.tiporamoid  \n            where  s.id= '" + sucursalid + "'  and p.estado IN ('ACT','CER') order by p.fechamodificacion desc ", {
              type: QueryTypes.SELECT
            });

          case 4:
            polizas = _context27.sent;

            /*            const polizas = await sequelize.query("call pa_polizas_por_sucursal(:params) ", { replacements: {params : [sucursalid]} }
                           , {
                               type: QueryTypes.SELECT
                           }); */

            /*   const polizas = await sequelize.query("select * from pa_polizas_por_sucursal('`+sucursalid+`') ", {
                  type: QueryTypes.SELECT
              }); */
            //console.log(JSON.stringify(usuarios[0], null, 2));
            res.json({
              polizas: polizas
            });
            _context27.next = 12;
            break;

          case 8:
            _context27.prev = 8;
            _context27.t0 = _context27["catch"](1);
            console.log(_context27.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context27.t0.message
              }
            });

          case 12:
          case "end":
            return _context27.stop();
        }
      }
    }, _callee27, null, [[1, 8]]);
  }));
  return _getPolizasPorSucursal.apply(this, arguments);
}

function getPolizasPorEmpresa(_x55, _x56) {
  return _getPolizasPorEmpresa.apply(this, arguments);
}

function _getPolizasPorEmpresa() {
  _getPolizasPorEmpresa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee28(req, res) {
    var empresaid, polizas;
    return regeneratorRuntime.wrap(function _callee28$(_context28) {
      while (1) {
        switch (_context28.prev = _context28.next) {
          case 0:
            empresaid = req.params.empresaid;
            _context28.prev = 1;
            _context28.next = 4;
            return _database.sequelize.query("select p.id,p.nropoliza,p.nrocertificado,p.fechainicio,p.fechafin,p.fechaexpedicion \n            ,p.primatotal ,p.valorasegurado,p.tpoliza,c.nombre as nombrecontratante,p.fecharegistro \n             ,sr.nombre nombreramopadre,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal, t.nombre tiporamo \n            from poliza p \n            inner join sucursal s on s.id=p.sucursalid  \n            inner join contratante c on c.id=p.contratanteid  \n            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid \n            inner join ramo r on r.id=rc.ramoid \n            left join ramo sr on sr.id=rc.ramopadreid \n            inner join asegurado a on a.id=p.tomadorid \n            inner join compania_seguro cs on cs.id=p.companiaseguroid \n            inner join memo m on m.polizaid=p.id and m.estado='ACT' \n             inner join tipo_ramo t on t.id=p.tiporamoid  \n            where  s.empresaid= '" + empresaid + "'  and p.estado IN ('ACT','CER') order by p.fechamodificacion desc ", {
              type: QueryTypes.SELECT
            });

          case 4:
            polizas = _context28.sent;
            //console.log(JSON.stringify(usuarios[0], null, 2));
            res.json({
              polizas: polizas
            });
            _context28.next = 12;
            break;

          case 8:
            _context28.prev = 8;
            _context28.t0 = _context28["catch"](1);
            console.log(_context28.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context28.t0.message
              }
            });

          case 12:
          case "end":
            return _context28.stop();
        }
      }
    }, _callee28, null, [[1, 8]]);
  }));
  return _getPolizasPorEmpresa.apply(this, arguments);
}

function getPolizasPorSucursalYTipo(_x57, _x58) {
  return _getPolizasPorSucursalYTipo.apply(this, arguments);
}

function _getPolizasPorSucursalYTipo() {
  _getPolizasPorSucursalYTipo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee29(req, res) {
    var _req$params8, sucursalid, tipopolizaid, tiporamoid, polizas;

    return regeneratorRuntime.wrap(function _callee29$(_context29) {
      while (1) {
        switch (_context29.prev = _context29.next) {
          case 0:
            _req$params8 = req.params, sucursalid = _req$params8.sucursalid, tipopolizaid = _req$params8.tipopolizaid, tiporamoid = _req$params8.tiporamoid;
            _context29.prev = 1;
            _context29.next = 4;
            return _database.sequelize.query("select p.id,p.nropoliza,p.nrocertificado,p.fechainicio,p.fechafin,p.fechaexpedicion \n            ,p.primatotal,p.valorasegurado,p.tpoliza,c.nombre as nombrecontratante,p.fecharegistro ,p.sucursalid,p.companiaseguroid\n             ,sr.nombre nombreramopadre,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal ,t.nombre tiporamo  ,( select   string_agg(a.nombre || ' : ' || pd2 .valor , ', ' order by a.nombre) \n             from poliza_detalles pd2   \n             inner join atributo a on a.id=pd2.atributoid and a.importante =true\n             where pd2.estado='ACT' AND pd2 .polizaid =p.id \n                      group by polizaid) detalle\n            from poliza p \n            inner join sucursal s on s.id=p.sucursalid  \n            inner join contratante c on c.id=p.contratanteid  \n            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid \n            inner join ramo r on r.id=rc.ramoid \n            left join ramo sr on sr.id=rc.ramopadreid \n            inner join asegurado a on a.id=p.tomadorid \n            inner join compania_seguro cs on cs.id=p.companiaseguroid \n            inner join memo m on m.polizaid=p.id and m.estado='ACT' \n             inner join tipo_ramo t on t.id=p.tiporamoid  \n            where  s.id= '" + sucursalid + "'  and p.estado IN ('ACT','CER')  and  p.tpoliza='" + tipopolizaid + "' and p.tiporamoid='" + tiporamoid + "'  order by p.fechamodificacion desc ", {
              type: QueryTypes.SELECT
            });

          case 4:
            polizas = _context29.sent;

            /*            const polizas = await sequelize.query("call pa_polizas_por_sucursal(:params) ", { replacements: {params : [sucursalid]} }
                           , {
                               type: QueryTypes.SELECT
                           }); */

            /*   const polizas = await sequelize.query("select * from pa_polizas_por_sucursal('`+sucursalid+`') ", {
                  type: QueryTypes.SELECT
              }); */
            //console.log(JSON.stringify(usuarios[0], null, 2));
            res.json({
              polizas: polizas
            });
            _context29.next = 12;
            break;

          case 8:
            _context29.prev = 8;
            _context29.t0 = _context29["catch"](1);
            console.log(_context29.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context29.t0.message
              }
            });

          case 12:
          case "end":
            return _context29.stop();
        }
      }
    }, _callee29, null, [[1, 8]]);
  }));
  return _getPolizasPorSucursalYTipo.apply(this, arguments);
}

function getPolizasPorEmpresaYTipo(_x59, _x60) {
  return _getPolizasPorEmpresaYTipo.apply(this, arguments);
}
/**busquedas por detalle */


function _getPolizasPorEmpresaYTipo() {
  _getPolizasPorEmpresaYTipo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee30(req, res) {
    var _req$params9, empresaid, tipopolizaid, tiporamoid, polizas;

    return regeneratorRuntime.wrap(function _callee30$(_context30) {
      while (1) {
        switch (_context30.prev = _context30.next) {
          case 0:
            _req$params9 = req.params, empresaid = _req$params9.empresaid, tipopolizaid = _req$params9.tipopolizaid, tiporamoid = _req$params9.tiporamoid;
            _context30.prev = 1;
            _context30.next = 4;
            return _database.sequelize.query("select p.id,p.nropoliza,p.nrocertificado,p.fechainicio,p.fechafin,p.fechaexpedicion \n            ,p.primatotal ,p.valorasegurado,p.tpoliza,c.nombre as nombrecontratante,p.fecharegistro ,p.sucursalid,p.companiaseguroid\n             ,sr.nombre nombreramopadre,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal ,t.nombre tiporamo ,( select   string_agg(a.nombre || ' : ' || pd2 .valor , ', ' order by a.nombre) \n             from poliza_detalles pd2   \n             inner join atributo a on a.id=pd2.atributoid and a.importante =true\n             where pd2.estado='ACT' AND pd2 .polizaid =p.id \n                      group by polizaid) detalle\n            from poliza p \n            inner join sucursal s on s.id=p.sucursalid  \n            inner join contratante c on c.id=p.contratanteid  \n            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid \n            inner join ramo r on r.id=rc.ramoid \n            left join ramo sr on sr.id=rc.ramopadreid \n            inner join asegurado a on a.id=p.tomadorid \n            inner join compania_seguro cs on cs.id=p.companiaseguroid \n            inner join memo m on m.polizaid=p.id and m.estado='ACT' \n             inner join tipo_ramo t on t.id=p.tiporamoid  \n            where  s.empresaid= '" + empresaid + "'  and p.estado IN ('ACT','CER') and  p.tpoliza='" + tipopolizaid + "' and p.tiporamoid='" + tiporamoid + "' order by p.fechamodificacion desc ", {
              type: QueryTypes.SELECT
            });

          case 4:
            polizas = _context30.sent;
            //console.log(JSON.stringify(usuarios[0], null, 2));
            res.json({
              polizas: polizas
            });
            _context30.next = 12;
            break;

          case 8:
            _context30.prev = 8;
            _context30.t0 = _context30["catch"](1);
            console.log(_context30.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context30.t0.message
              }
            });

          case 12:
          case "end":
            return _context30.stop();
        }
      }
    }, _callee30, null, [[1, 8]]);
  }));
  return _getPolizasPorEmpresaYTipo.apply(this, arguments);
}

function getBuscarPolizasDetallePorSucursal(_x61, _x62) {
  return _getBuscarPolizasDetallePorSucursal.apply(this, arguments);
}

function _getBuscarPolizasDetallePorSucursal() {
  _getBuscarPolizasDetallePorSucursal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee31(req, res) {
    var sucursalid, dato, polizas;
    return regeneratorRuntime.wrap(function _callee31$(_context31) {
      while (1) {
        switch (_context31.prev = _context31.next) {
          case 0:
            sucursalid = req.params.sucursalid;
            dato = req.body.dato;
            _context31.prev = 2;
            _context31.next = 5;
            return _database.sequelize.query("\tselect p.*,s.nombre sucursal,r.nombre ramo,cs.nombre companiaseguro\n        from poliza p \n        inner join poliza_detalles pda2 on pda2 .polizaid =p.id and pda2.estado='ACT'\n        inner join sucursal s on s.id=p.sucursalid\n        inner join sub_ramo_compania sr on sr.id=subramocompaniaid\n        inner join ramo r on r.id=sr.ramoid\n        inner join compania_seguro cs  on cs.id=p.companiaseguroid \n        where (pda2.valor  like '%" + dato + "%' )\n        and   s.id= '" + sucursalid + "'   and p.estado IN ('ACT','CER')\n        order by fechamodificacion desc  " //where (pda2.placa like '%`+dato+`%' or pda2.colorvehiculo like '%`+dato+`%' or pda2.marcavehiculo like '%`+dato+`%' or pda2.titular like '%`+dato+`%') s.id= '` + sucursalid + `'  and p.estado IN ('ACT','CER')  and  p.tpoliza='` + tipopolizaid + `'  order by p.fechamodificacion desc `
            , {
              type: QueryTypes.SELECT
            });

          case 5:
            polizas = _context31.sent;

            /*  const polizas = await sequelize.query(`	select p.*
             from poliza p 
             inner join poliza_detalle_automotor pda2 on pda2 .polizaid =p.id  
             inner join sucursal s on s.id=p.sucursalid  
             where (pda2.placa like '%`+ dato + `%' or pda2.colorvehiculo like '%` + dato + `%' or pda2.marcavehiculo like '%` + dato + `%' or pda2.titular like '%` + dato + `%') 
             and  s.id= '` + sucursalid + `'  and p.estado IN ('ACT','CER')  
             
             union 
             
             select p.*
             from poliza p 
            inner join poliza_detalle_general pda2 on pda2 .polizaid =p.id  
             inner join sucursal s on s.id=p.sucursalid  
             where (pda2.direccion like '%`+ dato + `%' or pda2.nrocertificado like '%` + dato + `%' ) 
             and  s.id= '` + sucursalid + `'  and p.estado IN ('ACT','CER') 
             
             union 
             
             select p.*
             from poliza p 
            inner join poliza_detalle_persona pda2 on pda2 .polizaid =p.id  
             inner join sucursal s on s.id=p.sucursalid  
             where (pda2.tipoasegurado like '%`+ dato + `%' or pda2.titular like '%` + dato + `%' ) 
             and  s.id= '` + sucursalid + `'  and p.estado IN ('ACT','CER')
               order by p.fechamodificacion desc  `
                 //where (pda2.placa like '%`+dato+`%' or pda2.colorvehiculo like '%`+dato+`%' or pda2.marcavehiculo like '%`+dato+`%' or pda2.titular like '%`+dato+`%') s.id= '` + sucursalid + `'  and p.estado IN ('ACT','CER')  and  p.tpoliza='` + tipopolizaid + `'  order by p.fechamodificacion desc `
                 , {
                     type: QueryTypes.SELECT
                 });
            */
            res.json({
              data: polizas
            });
            _context31.next = 13;
            break;

          case 9:
            _context31.prev = 9;
            _context31.t0 = _context31["catch"](2);
            console.log(_context31.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context31.t0.message
              }
            });

          case 13:
          case "end":
            return _context31.stop();
        }
      }
    }, _callee31, null, [[2, 9]]);
  }));
  return _getBuscarPolizasDetallePorSucursal.apply(this, arguments);
}

function getBuscarPolizasDetallePorEmpresa(_x63, _x64) {
  return _getBuscarPolizasDetallePorEmpresa.apply(this, arguments);
}

function _getBuscarPolizasDetallePorEmpresa() {
  _getBuscarPolizasDetallePorEmpresa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee32(req, res) {
    var empresaid, dato, polizas;
    return regeneratorRuntime.wrap(function _callee32$(_context32) {
      while (1) {
        switch (_context32.prev = _context32.next) {
          case 0:
            empresaid = req.params.empresaid; //console.log( req.body)

            dato = req.body.dato;
            _context32.prev = 2;
            _context32.next = 5;
            return _database.sequelize.query("\tselect p.*,s.nombre sucursal,r.nombre ramo,cs.nombre companiaseguro\n            from poliza p \n            inner join poliza_detalles pda2 on pda2 .polizaid =p.id and pda2.estado='ACT'\n            inner join sucursal s on s.id=p.sucursalid\n            inner join sub_ramo_compania sr on sr.id=subramocompaniaid\n            inner join ramo r on r.id=sr.ramoid\n            inner join compania_seguro cs  on cs.id=p.companiaseguroid \n            where (pda2.valor  like '%" + dato + "%' )\n            and  s.empresaid= '" + empresaid + "'  and p.estado IN ('ACT','CER')\n            order by fechamodificacion desc  " //where (pda2.placa like '%`+dato+`%' or pda2.colorvehiculo like '%`+dato+`%' or pda2.marcavehiculo like '%`+dato+`%' or pda2.titular like '%`+dato+`%') s.id= '` + sucursalid + `'  and p.estado IN ('ACT','CER')  and  p.tpoliza='` + tipopolizaid + `'  order by p.fechamodificacion desc `
            , {
              type: QueryTypes.SELECT
            });

          case 5:
            polizas = _context32.sent;
            res.json({
              data: polizas
            });
            _context32.next = 13;
            break;

          case 9:
            _context32.prev = 9;
            _context32.t0 = _context32["catch"](2);
            console.log(_context32.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context32.t0.message
              }
            });

          case 13:
          case "end":
            return _context32.stop();
        }
      }
    }, _callee32, null, [[2, 9]]);
  }));
  return _getBuscarPolizasDetallePorEmpresa.apply(this, arguments);
}

function getPolizasDetalleAutomotorPorSucursalYTipo(_x65, _x66) {
  return _getPolizasDetalleAutomotorPorSucursalYTipo.apply(this, arguments);
}

function _getPolizasDetalleAutomotorPorSucursalYTipo() {
  _getPolizasDetalleAutomotorPorSucursalYTipo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee33(req, res) {
    var _req$params10, dato, sucursalid, tipopolizaid, polizas;

    return regeneratorRuntime.wrap(function _callee33$(_context33) {
      while (1) {
        switch (_context33.prev = _context33.next) {
          case 0:
            _req$params10 = req.params, dato = _req$params10.dato, sucursalid = _req$params10.sucursalid, tipopolizaid = _req$params10.tipopolizaid;
            _context33.prev = 1;
            _context33.next = 4;
            return _database.sequelize.query("select p.*\n        from poliza p \n        inner join poliza_detalles pda2 on pda2 .polizaid =p.id  and pda2.estado='ACT'\n        inner join sucursal s on s.id=p.sucursalid  \n        where (pda2.valor  like '%" + dato + "%' ) and s.id= '" + sucursalid + "'  and p.estado IN ('ACT','CER')  and  p.tpoliza='" + tipopolizaid + "'  order by p.fechamodificacion desc ", {
              type: QueryTypes.SELECT
            });

          case 4:
            polizas = _context33.sent;
            res.json({
              data: polizas
            });
            _context33.next = 12;
            break;

          case 8:
            _context33.prev = 8;
            _context33.t0 = _context33["catch"](1);
            console.log(_context33.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context33.t0.message
              }
            });

          case 12:
          case "end":
            return _context33.stop();
        }
      }
    }, _callee33, null, [[1, 8]]);
  }));
  return _getPolizasDetalleAutomotorPorSucursalYTipo.apply(this, arguments);
}

function getPolizasDetalleAutomotorPorEmpresaYTipo(_x67, _x68) {
  return _getPolizasDetalleAutomotorPorEmpresaYTipo.apply(this, arguments);
}

function _getPolizasDetalleAutomotorPorEmpresaYTipo() {
  _getPolizasDetalleAutomotorPorEmpresaYTipo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee34(req, res) {
    var _req$params11, dato, empresaid, tipopolizaid, polizas;

    return regeneratorRuntime.wrap(function _callee34$(_context34) {
      while (1) {
        switch (_context34.prev = _context34.next) {
          case 0:
            _req$params11 = req.params, dato = _req$params11.dato, empresaid = _req$params11.empresaid, tipopolizaid = _req$params11.tipopolizaid;
            _context34.prev = 1;
            _context34.next = 4;
            return _database.sequelize.query("select p.*\n        from poliza p \n        inner join poliza_detalles pda2 on pda2 .polizaid =p.id  pda2.estado='ACT'\n        inner join sucursal s on s.id=p.sucursalid  \n        inner join empresa e on e.id =s.empresaid  \n        where (pda2.valor  like '%" + dato + "%' ) and e.id= '" + empresaid + "'  and p.estado IN ('ACT','CER')  and  p.tpoliza='" + tipopolizaid + "'  order by p.fechamodificacion desc ", {
              type: QueryTypes.SELECT
            });

          case 4:
            polizas = _context34.sent;
            res.json({
              data: polizas
            });
            _context34.next = 12;
            break;

          case 8:
            _context34.prev = 8;
            _context34.t0 = _context34["catch"](1);
            console.log(_context34.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context34.t0.message
              }
            });

          case 12:
          case "end":
            return _context34.stop();
        }
      }
    }, _callee34, null, [[1, 8]]);
  }));
  return _getPolizasDetalleAutomotorPorEmpresaYTipo.apply(this, arguments);
}

function getPolizasDetalleGeneralPorSucursalYTipo(_x69, _x70) {
  return _getPolizasDetalleGeneralPorSucursalYTipo.apply(this, arguments);
}

function _getPolizasDetalleGeneralPorSucursalYTipo() {
  _getPolizasDetalleGeneralPorSucursalYTipo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee35(req, res) {
    var _req$params12, dato, sucursalid, tipopolizaid, polizas;

    return regeneratorRuntime.wrap(function _callee35$(_context35) {
      while (1) {
        switch (_context35.prev = _context35.next) {
          case 0:
            _req$params12 = req.params, dato = _req$params12.dato, sucursalid = _req$params12.sucursalid, tipopolizaid = _req$params12.tipopolizaid;
            _context35.prev = 1;
            _context35.next = 4;
            return _database.sequelize.query("select p.*\n        from poliza p \n        inner join poliza_detalles pda2 on pda2 .polizaid =p.id  and pda2.estado='ACT'\n        inner join sucursal s on s.id=p.sucursalid  \n        where (pda2.valor  like '%" + dato + "%' ) and s.id= '" + sucursalid + "'  and p.estado IN ('ACT','CER')  and  p.tpoliza='" + tipopolizaid + "'  order by p.fechamodificacion desc ", {
              type: QueryTypes.SELECT
            });

          case 4:
            polizas = _context35.sent;
            res.json({
              data: polizas
            });
            _context35.next = 12;
            break;

          case 8:
            _context35.prev = 8;
            _context35.t0 = _context35["catch"](1);
            console.log(_context35.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context35.t0.message
              }
            });

          case 12:
          case "end":
            return _context35.stop();
        }
      }
    }, _callee35, null, [[1, 8]]);
  }));
  return _getPolizasDetalleGeneralPorSucursalYTipo.apply(this, arguments);
}

function getPolizasDetalleGeneralPorEmpresaYTipo(_x71, _x72) {
  return _getPolizasDetalleGeneralPorEmpresaYTipo.apply(this, arguments);
}

function _getPolizasDetalleGeneralPorEmpresaYTipo() {
  _getPolizasDetalleGeneralPorEmpresaYTipo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee36(req, res) {
    var _req$params13, dato, empresaid, tipopolizaid, polizas;

    return regeneratorRuntime.wrap(function _callee36$(_context36) {
      while (1) {
        switch (_context36.prev = _context36.next) {
          case 0:
            _req$params13 = req.params, dato = _req$params13.dato, empresaid = _req$params13.empresaid, tipopolizaid = _req$params13.tipopolizaid;
            _context36.prev = 1;
            _context36.next = 4;
            return _database.sequelize.query("select p.*\n        from poliza p \n        inner join poliza_detalles pda2 on pda2 .polizaid =p.id  pda2.estado='ACT'\n        inner join sucursal s on s.id=p.sucursalid  \n        inner join empresa e on e.id =s.empresaid  \n        where (pda2.valor  like '%" + dato + "%' ) and e.id= '" + empresaid + "'  and p.estado IN ('ACT','CER')  and  p.tpoliza='" + tipopolizaid + "'  order by p.fechamodificacion desc ", {
              type: QueryTypes.SELECT
            });

          case 4:
            polizas = _context36.sent;
            res.json({
              data: polizas
            });
            _context36.next = 12;
            break;

          case 8:
            _context36.prev = 8;
            _context36.t0 = _context36["catch"](1);
            console.log(_context36.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context36.t0.message
              }
            });

          case 12:
          case "end":
            return _context36.stop();
        }
      }
    }, _callee36, null, [[1, 8]]);
  }));
  return _getPolizasDetalleGeneralPorEmpresaYTipo.apply(this, arguments);
}

function getPolizasDetalleSaludPorSucursalYTipo(_x73, _x74) {
  return _getPolizasDetalleSaludPorSucursalYTipo.apply(this, arguments);
}

function _getPolizasDetalleSaludPorSucursalYTipo() {
  _getPolizasDetalleSaludPorSucursalYTipo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee37(req, res) {
    var _req$params14, dato, sucursalid, tipopolizaid, polizas;

    return regeneratorRuntime.wrap(function _callee37$(_context37) {
      while (1) {
        switch (_context37.prev = _context37.next) {
          case 0:
            _req$params14 = req.params, dato = _req$params14.dato, sucursalid = _req$params14.sucursalid, tipopolizaid = _req$params14.tipopolizaid;
            _context37.prev = 1;
            _context37.next = 4;
            return _database.sequelize.query("select p.*\n        from poliza p \n        inner join poliza_detalles pda2 on pda2 .polizaid =p.id  and pda2.estado='ACT'\n        inner join sucursal s on s.id=p.sucursalid  \n        where (pda2.valor  like '%" + dato + "%' ) and s.id= '" + sucursalid + "'  and p.estado IN ('ACT','CER')  and  p.tpoliza='" + tipopolizaid + "'  order by p.fechamodificacion desc ", {
              type: QueryTypes.SELECT
            });

          case 4:
            polizas = _context37.sent;
            res.json({
              data: polizas
            });
            _context37.next = 12;
            break;

          case 8:
            _context37.prev = 8;
            _context37.t0 = _context37["catch"](1);
            console.log(_context37.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context37.t0.message
              }
            });

          case 12:
          case "end":
            return _context37.stop();
        }
      }
    }, _callee37, null, [[1, 8]]);
  }));
  return _getPolizasDetalleSaludPorSucursalYTipo.apply(this, arguments);
}

function getPolizasDetalleSaludPorEmpresaYTipo(_x75, _x76) {
  return _getPolizasDetalleSaludPorEmpresaYTipo.apply(this, arguments);
}

function _getPolizasDetalleSaludPorEmpresaYTipo() {
  _getPolizasDetalleSaludPorEmpresaYTipo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee38(req, res) {
    var _req$params15, dato, empresaid, tipopolizaid, polizas;

    return regeneratorRuntime.wrap(function _callee38$(_context38) {
      while (1) {
        switch (_context38.prev = _context38.next) {
          case 0:
            _req$params15 = req.params, dato = _req$params15.dato, empresaid = _req$params15.empresaid, tipopolizaid = _req$params15.tipopolizaid;
            _context38.prev = 1;
            _context38.next = 4;
            return _database.sequelize.query("select p.*\n        from poliza p \n        inner join poliza_detalles pda2 on pda2 .polizaid =p.id  pda2.estado='ACT'\n        inner join sucursal s on s.id=p.sucursalid  \n        inner join empresa e on e.id =s.empresaid  \n        where (pda2.valor  like '%" + dato + "%' ) and e.id= '" + empresaid + "'  and p.estado IN ('ACT','CER')  and  p.tpoliza='" + tipopolizaid + "'  order by p.fechamodificacion desc ", {
              type: QueryTypes.SELECT
            });

          case 4:
            polizas = _context38.sent;
            res.json({
              data: polizas
            });
            _context38.next = 12;
            break;

          case 8:
            _context38.prev = 8;
            _context38.t0 = _context38["catch"](1);
            console.log(_context38.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context38.t0.message
              }
            });

          case 12:
          case "end":
            return _context38.stop();
        }
      }
    }, _callee38, null, [[1, 8]]);
  }));
  return _getPolizasDetalleSaludPorEmpresaYTipo.apply(this, arguments);
}

function vencimientoPoliza(_x77, _x78) {
  return _vencimientoPoliza.apply(this, arguments);
}

function _vencimientoPoliza() {
  _vencimientoPoliza = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee39(req, res) {
    var id, personals, NewEnvioCorreo, dir;
    return regeneratorRuntime.wrap(function _callee39$(_context39) {
      while (1) {
        switch (_context39.prev = _context39.next) {
          case 0:
            id = req.params.id;
            _context39.prev = 1;
            _context39.next = 4;
            return _database.sequelize.query("  select cs.nombre nombrecompania,a.correocobranza,a.direccionasegurado,a.nombrecompleto as nombreasegurado,a.telefonoasegurado,a.telefonodomicilio,r.nombre nombreramo,s.nombre as sucursal,p.nropoliza ,p.valorasegurado ,p.fechafin \n        from poliza p \n        inner join sucursal s on s.id=p.sucursalid \n        inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid \n        inner join ramo r on r.id=rc.ramoid\n        inner join asegurado a on a.id=p.tomadorid \n        inner join compania_seguro cs on cs.id=p.companiaseguroid \n        where \n        p.id= '" + id + "'\n        order by cs.nombre,a.nombrecompleto,p.fechamodificacion desc ", {
              type: QueryTypes.SELECT
            });

          case 4:
            personals = _context39.sent;
            _context39.next = 7;
            return _EnvioCorreo["default"].create({
              nombre: 'poliza vencimiento',
              descripcion: 'envio de certificados de vencimiento',
              usuarioregistro: 'system',
              usuariomodificacion: 'system',
              fecharegistro: new Date(),
              fechamodificacion: new Date(),
              estado: 'ACT',
              polizaid: id
            }, {
              fields: ['nombre', 'descripcion', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado', 'polizaid']
            });

          case 7:
            NewEnvioCorreo = _context39.sent;
            dir = "http://3.99.76.226:8080/broker/rest/reporte/vencimientoPoliza/" + id;
            request.get({
              url: dir
            }, function (err, response, body) {
              var data = response.body;
              var mensaje = "Poliza vencida por favor apersonarse a las oficinas de su Broker...";
              var mailOptions = {
                from: 'gamsc@gmsantacruz.gob.bo',
                // to: 'david.ticlla@gmail.com',
                to: personals[0].correocobranza,
                subject: 'Vencimiento de Poliza nro.-' + personals[0].nropoliza + ' - ' + personals[0].nombreasegurado,
                //subject: 'Vencimiento de Poliza',
                text: mensaje,
                html: '',
                attachments: [{
                  filename: 'poliza-' + personals[0].nombreasegurado + '-' + personals[0].nropoliza + '.pdf',
                  path: 'data:application/pdf;base64,' + data
                }]
              }; //envio de correo

              _mailers.transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                  res.json({
                    data: 'Error al enviar: ' + error
                  });
                  console.log('mensaje: ' + error);
                } else {
                  res.json({
                    data: 'Email enviado: ' + info.response
                  });
                  console.log('Email enviado: ' + info.response);
                }

                _mailers.transporter.close();
              });
            }); //res.json({ data: personals });

            _context39.next = 16;
            break;

          case 12:
            _context39.prev = 12;
            _context39.t0 = _context39["catch"](1);
            console.log(_context39.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context39.t0.message
              }
            });

          case 16:
          case "end":
            return _context39.stop();
        }
      }
    }, _callee39, null, [[1, 12]]);
  }));
  return _vencimientoPoliza.apply(this, arguments);
}

function obtenerPoliza(_x79, _x80) {
  return _obtenerPoliza.apply(this, arguments);
}

function _obtenerPoliza() {
  _obtenerPoliza = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee40(req, res) {
    var id, personals;
    return regeneratorRuntime.wrap(function _callee40$(_context40) {
      while (1) {
        switch (_context40.prev = _context40.next) {
          case 0:
            id = req.params.id;
            _context40.prev = 1;
            _context40.next = 4;
            return _database.sequelize.query(" select * from obtenerPoliza('" + id + "')  ", {
              type: QueryTypes.SELECT
            });

          case 4:
            personals = _context40.sent;
            res.json({
              data: personals
            });
            _context40.next = 12;
            break;

          case 8:
            _context40.prev = 8;
            _context40.t0 = _context40["catch"](1);
            console.log(_context40.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context40.t0.message
              }
            });

          case 12:
          case "end":
            return _context40.stop();
        }
      }
    }, _callee40, null, [[1, 8]]);
  }));
  return _obtenerPoliza.apply(this, arguments);
}

function obtenerDetallesPorPoliza(_x81, _x82) {
  return _obtenerDetallesPorPoliza.apply(this, arguments);
}

function _obtenerDetallesPorPoliza() {
  _obtenerDetallesPorPoliza = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee41(req, res) {
    var id, detalle;
    return regeneratorRuntime.wrap(function _callee41$(_context41) {
      while (1) {
        switch (_context41.prev = _context41.next) {
          case 0:
            id = req.params.id;
            _context41.prev = 1;
            _context41.next = 4;
            return _database.sequelize.query(" select * from pa_listar_detalle('" + id + "')  ", {
              type: QueryTypes.SELECT
            });

          case 4:
            detalle = _context41.sent;
            res.json({
              data: detalle[0]._row
            });
            _context41.next = 12;
            break;

          case 8:
            _context41.prev = 8;
            _context41.t0 = _context41["catch"](1);
            console.log(_context41.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context41.t0.message
              }
            });

          case 12:
          case "end":
            return _context41.stop();
        }
      }
    }, _callee41, null, [[1, 8]]);
  }));
  return _obtenerDetallesPorPoliza.apply(this, arguments);
}