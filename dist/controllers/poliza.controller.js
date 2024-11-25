"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bajaPoliza = bajaPoliza;
exports.createPolizaGenerica = createPolizaGenerica;
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
exports.updatePolizaGenerica = updatePolizaGenerica;
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
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var _require = require('sequelize'),
  QueryTypes = _require.QueryTypes,
  _Promise = _require.Promise;
var request = require("request");
function getPolizas(_x, _x2) {
  return _getPolizas.apply(this, arguments);
}
function _getPolizas() {
  _getPolizas = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var polizas;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
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
    }, _callee, null, [[0, 7]]);
  }));
  return _getPolizas.apply(this, arguments);
}
function createPolizaGenerica(_x3, _x4) {
  return _createPolizaGenerica.apply(this, arguments);
}
function _createPolizaGenerica() {
  _createPolizaGenerica = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _req$body, nropoliza, nrocertificado, fechainicio, fechafin, fechaexpedicion, fecharecepcion, tipomoneda, primatotal, formapago, encargadoid, bancoid, ciudadexpedicion, notas, companiaseguroid, subramocompaniaid, tiporamoid, contratanteid, tomadorid, ejecutivoid, colocacionid, ciaspvs, tipopolizaid, tpoliza, tipocontrato, menoid, vendedorid, tipoemision, franquicia, valorasegurado, comisionbs, comisionusd, tipocambio, porcentajeprima, primaneta, porcentajecomision, archivos, detalle, usuarioregistro, usuariomodificacion, _req$body$estado, estado, sucursalid, planid, polizaid, newPoliza, t, ingresoegreso, primatotalsus, primanetasus, valoraseguradosus, i, _i, query1, pagos, QUERY, poliza;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
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
          }
          primatotalsus = 0, primanetasus = 0, valoraseguradosus = 0;
          if (tipomoneda == 'BOL') {
            primatotalsus = primatotal / tipocambio, primanetasus = primaneta / tipocambio, valoraseguradosus = valorasegurado / tipocambio;
          } else {
            primatotalsus = primatotal, primanetasus = primaneta, valoraseguradosus = valorasegurado;
          }
          //const transaction= sequelize.transaction;
          _context2.next = 11;
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
            polizaid: polizaid,
            primatotalsus: primatotalsus,
            primanetasus: primanetasus,
            valoraseguradosus: valoraseguradosus
          }, {
            fields: ['nropoliza', 'nrocertificado', 'fechainicio', 'fechafin', 'fechaexpedicion', 'fecharecepcion', 'tipomoneda', 'primatotal', 'formapago', 'encargadoid', 'bancoid', 'ciudadexpedicion',
            //'broker',
            'notas', 'companiaseguroid', 'subramocompaniaid', 'tiporamoid', 'contratanteid', 'tomadorid', 'ejecutivoid', 'colocacionid', 'ciaspvs', 'tipopolizaid', 'tpoliza', 'tipocontrato', 'menoid', 'vendedorid', 'tipoemision', 'franquicia', 'valorasegurado', 'comisionbs', 'comisionusd', 'tipocambio', 'porcentajeprima', 'primaneta', 'porcentajecomision', 'ingresoegreso', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado', 'sucursalid', 'planid', 'polizaid', 'primatotalsus', 'primanetasus', 'valoraseguradosus']
          }, {
            transaction: t
          });
        case 11:
          newPoliza = _context2.sent;
          i = 0;
        case 13:
          if (!(i < archivos.length)) {
            _context2.next = 19;
            break;
          }
          _context2.next = 16;
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
        case 16:
          i++;
          _context2.next = 13;
          break;
        case 19:
          if (!detalle) {
            _context2.next = 27;
            break;
          }
          _i = 0;
        case 21:
          if (!(_i < detalle.length)) {
            _context2.next = 27;
            break;
          }
          _context2.next = 24;
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
        case 24:
          _i++;
          _context2.next = 21;
          break;
        case 27:
          _context2.next = 29;
          return t.commit();
        case 29:
          query1 = " select * from  pa_corregir_poliza('" + newPoliza.id + "');";
          _context2.next = 32;
          return _database.sequelize.query(query1, {
            type: QueryTypes.SELECT
          });
        case 32:
          pagos = _context2.sent;
          QUERY = "select p.id,p.nro, p.nropoliza, p.nrocertificado, p.fechainicio, p.fechafin, p.fechaexpedicion, p.fecharecepcion, p.tipomoneda, p.primatotal, p.formapago, p.encargadoid, p.bancoid, p.ciudadexpedicion, p.notas, p.companiaseguroid, p.subramocompaniaid, p.tiporamoid, p.contratanteid, p.tomadorid, p.ejecutivoid, p.colocacionid, p.ciaspvs, p.tipopolizaid, p.tpoliza, p.tipocontrato, p.memoid, p.vendedorid, null tipoemision, p.franquicia, p.valorasegurado, p.comisionbs, p.comisionusd, p.tipocambio, p.porcentajeprima, p.primaneta, p.porcentajecomision, p.usuarioregistro, p.usuariomodificacion, p.fecharegistro, p.fechamodificacion, p.estado, p.sucursalid, p.planid, p.polizaid \n        ,sr.nombre nombreramopadre,case when sr.id is null then r.nombre else sr.nombre end nombreramo,case when  sr.id is null then null else r.nombre end nombresubramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania ,s.nombre as sucursal,t.nombre tiporamo,pe.nombrecompleto ejecutivo,car.nombrecompleto cartera\n        from poliza p\n        inner join sucursal s on s.id=p.sucursalid\n        inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid\n        inner join ramo r on r.id=rc.ramoid\n        left join ramo sr on sr.id=rc.ramopadreid\n        inner join asegurado a on a.id=p.tomadorid\n        inner join compania_seguro cs on cs.id=p.companiaseguroid\n        inner join tipo_ramo t on t.id=p.tiporamoid\n        inner join personal pe on pe.id=p.ejecutivoid\n        inner join personal car on car.id=a.carteraid\n        where p.id='" + newPoliza.id + "'   "; //console.log(QUERY);
          _context2.next = 36;
          return _database.sequelize.query(QUERY, {
            type: QueryTypes.SELECT
          });
        case 36:
          poliza = _context2.sent;
          if (!newPoliza) {
            _context2.next = 39;
            break;
          }
          return _context2.abrupt("return", res.json({
            message: 'Poliza created successfully',
            data: poliza[0]
          }));
        case 39:
          _context2.next = 51;
          break;
        case 41:
          _context2.prev = 41;
          _context2.t0 = _context2["catch"](1);
          console.log(_context2.t0);
          if (!t) {
            _context2.next = 50;
            break;
          }
          _context2.next = 47;
          return t.rollback();
        case 47:
          if (!newPoliza) {
            _context2.next = 50;
            break;
          }
          _context2.next = 50;
          return _Poliza["default"].destroy({
            where: {
              id: newPoliza.id
            }
          });
        case 50:
          res.status(500).json({
            data: {
              estado: false,
              "error": _context2.t0.message
            }
          });
        case 51:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 41]]);
  }));
  return _createPolizaGenerica.apply(this, arguments);
}
function updatePolizaGenerica(_x5, _x6) {
  return _updatePolizaGenerica.apply(this, arguments);
}
/** automotor */
/* export async function createPoliza(req, res) {
    const {
        nropoliza,
        nrocertificado,
        fechainicio,
        fechafin,
        fechaexpedicion,
        fecharecepcion,
        tipomoneda,
        primatotal,
        formapago,
        encargadoid,
        bancoid,
        ciudadexpedicion,
        //broker,
        notas,
        companiaseguroid,
        subramocompaniaid,
        tiporamoid,
        contratanteid,
        tomadorid,
        ejecutivoid,
        colocacionid,
        ciaspvs,
        tipopolizaid,
        tpoliza,
        tipocontrato,
        menoid,
        //llamadoid,
        vendedorid,
        //nroplaca,
        tipoemision,
        franquicia,
        valorasegurado,
       
        comisionbs,
        comisionusd,
        tipocambio,
        porcentajeprima,
        primaneta,
        porcentajecomision,
        archivos,
        //adicionales,
        automotores,

        usuarioregistro,
        usuariomodificacion,
        estado = 'ACT',
        sucursalid,
        planid,
        polizaid } = req.body;
    let newPoliza;
    let t;
    try {
        t = await sequelize.transaction();
        let ingresoegreso = 'I';
        if (tipoemision == 'Anexo Exclusion' || tipoemision == 'Anexo Anulacion') {
            ingresoegreso = 'E'
        } else {
            ingresoegreso = 'I'
        }
        //const transaction= sequelize.transaction;
        newPoliza = await Poliza.create({
            nropoliza,
            nrocertificado,
            fechainicio,
            fechafin,
            fechaexpedicion,
            fecharecepcion,
            tipomoneda,
            primatotal,
            formapago,
            encargadoid,
            bancoid,
            ciudadexpedicion,
            // broker,
            notas,
            companiaseguroid,
            subramocompaniaid,
            tiporamoid,
            contratanteid,
            tomadorid,
            ejecutivoid,
            colocacionid,
            ciaspvs,
            tipopolizaid,
            tpoliza,
            tipocontrato,
            menoid,
            // llamadoid,
            vendedorid,
            //nroplaca,
            tipoemision,
            franquicia,
            valorasegurado,
           
            comisionbs,
            comisionusd,
            tipocambio,
            porcentajeprima,
            primaneta,
            porcentajecomision,
            ingresoegreso,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro: new Date(),
            fechamodificacion: new Date(),
            estado,
            sucursalid,
            planid,
            polizaid
        }, {
            fields: ['nropoliza',
                'nrocertificado',
                'fechainicio',
                'fechafin',
                'fechaexpedicion',
                'fecharecepcion',
                'tipomoneda',
                'primatotal',
                'formapago',
                'encargadoid',
                'bancoid',
                'ciudadexpedicion',

                //'broker',
                'notas',
                'companiaseguroid',
                'subramocompaniaid',
                'tiporamoid',
                'contratanteid',
                'tomadorid',
                'ejecutivoid',
                'colocacionid',
                'ciaspvs',
                'tipopolizaid',
                'tpoliza',
                'tipocontrato',
                'menoid',
                // 'llamadoid',
                'vendedorid',
                //'nroplaca',
                'tipoemision',
                'franquicia',
                'valorasegurado',

               

                'comisionbs',
                'comisionusd',
                'tipocambio',
                'porcentajeprima',
                'primaneta',
                'porcentajecomision',
                'ingresoegreso',
                'usuarioregistro',
                'usuariomodificacion',
                'fecharegistro',
                'fechamodificacion',
                'estado',
                'sucursalid',
                'planid',
                'polizaid']
        }, { transaction: t });
        // step 2  archivos
        // if( archivos!) 
        for (let i = 0; i < archivos.length; i++) {
            // listaPermisos.push( 
            await Archivo.create({
                codigo: newPoliza.id,
                nombre: archivos[i].nombre,
                descripcion: archivos[i].nombre,
                extension: archivos[i].extension,
                archivo: archivos[i].archivo,
                aseguradoid: tomadorid,
                sucursalid: sucursalid,
                usuarioregistro,
                usuariomodificacion: usuarioregistro,
                fecharegistro: new Date(),
                fechamodificacion: new Date(),
                estado: 'ACT'
            }, {
                fields: [
                    'codigo',
                    'nombre',
                    'descripcion',
                    'extension',
                    'archivo',
                    'aseguradoid',
                    'sucursalid',
                    'usuarioregistro',
                    'usuariomodificacion',
                    'fecharegistro',
                    'fechamodificacion',
                    'estado']
            }, { transaction: t });


        }
        //DETALLE AUTOMOTORES
        for (let i = 0; i < automotores.length; i++) {
            let newPolizaDetalle = await PolizaDetalle.create({
                nrocertificado: automotores[i].nrocertificado,
                //titular: automotores[i].titular,
                placa: automotores[i].placa,
                tipovehiculo: automotores[i].tipovehiculo,
                marcavehiculo: automotores[i].marcavehiculo,
                colorvehiculo: automotores[i].colorvehiculo,
                aniovehiculo: automotores[i].aniovehiculo,
                modelo: automotores[i].modelo,
                primaindividual: automotores[i].primaindividual,
                primanetaindividualbs: automotores[i].primanetaindividualbs,
                primanetaindividualusd: automotores[i].primanetaindividualusd,

                franquicia: automotores[i].franquicia,
                valorasegurado: automotores[i].valorasegurado,

                usuarioregistro,
                usuariomodificacion,
                fecharegistro: new Date(),
                fechamodificacion: new Date(),
                estado: 'ACT',
                polizaid: newPoliza.id
            }, {
                fields: [

                    'nrocertificado',
                    'placa',
                    'tipovehiculo',
                    'marcavehiculo',
                    'colorvehiculo',
                    'aniovehiculo',
                    'modelo',
                    'primaindividual',
                    'primanetaindividualbs',
                    'primanetaindividualusd',
                    'franquicia',
                    'valorasegurado',
                    'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                    'fechamodificacion', 'estado',
                    'polizaid']
            }, { transaction: t });
            let campos = automotores[i].campos;
            for (let j = 0; j < campos.length; j++) {
                // listaPermisos.push( 
                await PolizaDetalleAdicional.create({
                    polizadetalleid: newPolizaDetalle.id,
                    valor: campos[j].valor,
                    dato: campos[j].dato,
                    usuarioregistro,
                    usuariomodificacion: usuarioregistro,
                    fecharegistro: new Date(),
                    fechamodificacion: new Date(),
                    estado: 'ACT'
                }, {
                    fields: [
                        'polizadetalleid',
                        'valor',
                        'dato',
                        'usuarioregistro',
                        'usuariomodificacion',
                        'fecharegistro',
                        'fechamodificacion',
                        'estado']
                }, { transaction: t });
            }

        }



        await t.commit();


        const QUERY = `select p.id, p.nropoliza, p.nrocertificado, p.fechainicio, p.fechafin, p.fechaexpedicion, p.fecharecepcion, p.tipomoneda, p.primatotal, p.formapago, p.encargadoid, p.bancoid, p.ciudadexpedicion, p.notas, p.companiaseguroid, p.subramocompaniaid, p.tiporamoid, p.contratanteid, p.tomadorid, p.ejecutivoid, p.colocacionid, p.ciaspvs, p.tipopolizaid, p.tpoliza, p.tipocontrato, p.memoid, p.vendedorid, null tipoemision, p.franquicia, p.valorasegurado, p.comisionbs, p.comisionusd, p.tipocambio, p.porcentajeprima, p.primaneta, p.porcentajecomision, p.usuarioregistro, p.usuariomodificacion, p.fecharegistro, p.fechamodificacion, p.estado, p.sucursalid, p.planid, p.polizaid 
        ,sr.nombre nombreramopadre,case when sr.id is null then r.nombre else sr.nombre end nombreramo,case when  sr.id is null then null else r.nombre end nombresubramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania ,s.nombre as sucursal,t.nombre tiporamo,pe.nombrecompleto ejecutivo,car.nombrecompleto cartera
        from poliza p
        inner join sucursal s on s.id=p.sucursalid
        inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid
        inner join ramo r on r.id=rc.ramoid
        left join ramo sr on sr.id=rc.ramopadreid
        inner join asegurado a on a.id=p.tomadorid
        inner join compania_seguro cs on cs.id=p.companiaseguroid
        inner join tipo_ramo t on t.id=p.tiporamoid
        inner join personal pe on pe.id=p.ejecutivoid
        inner join personal car on car.id=a.carteraid
        where p.id='` + newPoliza.id + `'   `;

        //console.log(QUERY);
        const poliza = await sequelize.query(QUERY
            , {
                type: QueryTypes.SELECT
            });

        if (newPoliza) {
            return res.json({
                message: 'Poliza created successfully',
                data: poliza[0]
            });
        }
    } catch (e) {
        console.log(e);
        if (t) {
            await t.rollback();
            //await newUsuario.destroy();
            if (newPoliza) {
                await Poliza.destroy({ where: { id: newPoliza.id } })
            }
        }
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
} */
/* export async function updatePoliza(req, res) {
    const { id } = req.params;
    const { nropoliza,
        nrocertificado,
        fechainicio,
        fechafin,
        fechaexpedicion,
        fecharecepcion,
        tipomoneda,
        primatotal,
        formapago,
        encargadoid,
        bancoid,
        ciudadexpedicion,
        //broker,
        notas,
        companiaseguroid,
        subramocompaniaid,
        tiporamoid,
        contratanteid,
        tomadorid,
        ejecutivoid,
        colocacionid,
        ciaspvs,
        tipopolizaid,
        tpoliza,
        tipocontrato,
        menoid,
        // llamadoid,
        vendedorid,
        //nroplaca,
        tipoemision,
        franquicia,
        valorasegurado,
        comisionbs,
        comisionusd,
        tipocambio,
        porcentajeprima,
        primaneta,
        porcentajecomision,

        usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        estado,
        sucursalid, planid, archivos, archivoseliminados,
        automotores, eliminadosautomotores } = req.body;
    let t;
    try {
        t = await sequelize.transaction();
        const updateRowCount = await Poliza.update({
            nropoliza,
            nrocertificado,
            fechainicio,
            fechafin,
            fechaexpedicion,
            fecharecepcion,
            tipomoneda,
            primatotal,
            formapago,
            encargadoid,
            bancoid,
            ciudadexpedicion,
            //broker,
            notas,
            companiaseguroid,
            subramocompaniaid,
            tiporamoid,
            contratanteid,
            tomadorid,
            ejecutivoid,
            colocacionid,
            ciaspvs,
            tipopolizaid,
            tpoliza,
            tipocontrato,
            menoid,
            //llamadoid,
            vendedorid,
            //nroplaca,
            tipoemision,
            franquicia,
            valorasegurado,
            comisionbs,
            comisionusd,
            tipocambio,
            porcentajeprima,
            primaneta,
            porcentajecomision,

            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion: new Date(),
            estado,
            sucursalid,
            planid
        }, {
            where: {
                id
            }
        }, { transaction: t });

        //ARCHIVOS ELIMINADOS
        for (let i = 0; i < archivoseliminados.length; i++) {

            await Archivo.update({
                estado: 'BAJ',
                fechamodificacion: new Date()
            }, { where: { id: archivoseliminados[i].id } }, { transaction: t });

        }
        // REGISTRO DE ARCHIVOS NUEVOS
        for (let i = 0; i < archivos.length; i++) {

            await Archivo.create({
                codigo: id,
                nombre: archivos[i].nombre,
                descripcion: archivos[i].nombre,
                extension: archivos[i].extension,
                archivo: archivos[i].archivo,
                aseguradoid: tomadorid,
                sucursalid: sucursalid,
                usuarioregistro: usuariomodificacion,
                usuariomodificacion: usuariomodificacion,
                fecharegistro: new Date(),
                fechamodificacion: new Date(),
                estado: 'ACT'
            }, {
                fields: [
                    'codigo',
                    'nombre',
                    'descripcion',
                    'extension',
                    'archivo',
                    'aseguradoid',
                    'sucursalid',
                    'usuarioregistro',
                    'usuariomodificacion',
                    'fecharegistro',
                    'fechamodificacion',
                    'estado']
            }, { transaction: t });

        }
        if (eliminadosautomotores) {
            //DETALLE  ELIMINADOS
            for (let i = 0; i < eliminadosautomotores.length; i++) {

                await PolizaDetalle.update({
                    estado: 'BAJ',
                    fechamodificacion: new Date()
                }, { where: { id: eliminadosautomotores[i].id } }, { transaction: t });

            }
        }
        if (automotores) {
            //DETALLE AUTOMOTORES
            for (let i = 0; i < automotores.length; i++) {
                let newPolizaDetalle = await PolizaDetalle.create({
                    nrocertificado: automotores[i].nrocertificado,
                    //titular: automotores[i].titular,
                    placa: automotores[i].placa,
                    tipovehiculo: automotores[i].tipovehiculo,
                    marcavehiculo: automotores[i].marcavehiculo,
                    colorvehiculo: automotores[i].colorvehiculo,
                    aniovehiculo: automotores[i].aniovehiculo,
                    modelo: automotores[i].modelo,
                    primaindividual: automotores[i].primaindividual,
                    primanetaindividualbs: automotores[i].primanetaindividualbs,
                    primanetaindividualusd: automotores[i].primanetaindividualusd,

                    franquicia: automotores[i].franquicia,
                    valorasegurado: automotores[i].valorasegurado,
                    usuarioregistro,
                    usuariomodificacion,
                    fecharegistro: new Date(),
                    fechamodificacion: new Date(),
                    estado: 'ACT',
                    polizaid: id
                }, {
                    fields: [

                        'nrocertificado',
                        'placa',
                        'tipovehiculo',
                        'marcavehiculo',
                        'colorvehiculo',
                        'aniovehiculo',
                        'modelo',
                        'primaindividual',
                        'primanetaindividualbs',
                        'primanetaindividualusd',
                        'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                        'fechamodificacion', 'estado',
                        'polizaid']
                }, { transaction: t });
                let campos = automotores[i].campos;
                for (let j = 0; j < campos.length; j++) {
                    // listaPermisos.push( 
                    await PolizaDetalleAdicional.create({
                        polizadetalleid: id,
                        valor: campos[j].valor,
                        dato: campos[j].dato,
                        usuarioregistro,
                        usuariomodificacion: usuarioregistro,
                        fecharegistro: new Date(),
                        fechamodificacion: new Date(),
                        estado: 'ACT'
                    }, {
                        fields: [
                            'polizadetalleid',
                            'valor',
                            'dato',
                            'usuarioregistro',
                            'usuariomodificacion',
                            'fecharegistro',
                            'fechamodificacion',
                            'estado']
                    }, { transaction: t });
                }
            }
        }


        await t.commit();
        const polizas = await Poliza.findOne({
            where: {
                id
            }
        }
        );
        res.json({
            message: 'Poliza update successfully',
            count: polizas
        });




    } catch (e) {
        console.log(e);
        if (t) {
            await t.rollback();
        }
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
} */
/** salud */
/* export async function createPolizaSalud(req, res) {
    const {
        nropoliza,
        nrocertificado,
        fechainicio,
        fechafin,
        fechaexpedicion,
        fecharecepcion,
        tipomoneda,
        primatotal,
        formapago,
        encargadoid,
        bancoid,
        ciudadexpedicion,
        //broker,
        notas,
        companiaseguroid,
        subramocompaniaid,
        tiporamoid,
        contratanteid,
        tomadorid,
        ejecutivoid,
        colocacionid,
        ciaspvs,
        tipopolizaid,
        tpoliza,
        tipocontrato,
        menoid,
        //llamadoid,
        vendedorid,
        //nroplaca,
        tipoemision,
        franquicia,
        valorasegurado,
        
        comisionbs,
        comisionusd,
        tipocambio,
        porcentajeprima,
        primaneta,
        porcentajecomision,
        archivos,
        //adicionales,
        personas,

        usuarioregistro,
        usuariomodificacion,
        estado = 'ACT',
        sucursalid,
        planid,
        polizaid } = req.body;
    let newPoliza;
    let t;
    try {
        t = await sequelize.transaction();
        let ingresoegreso = 'I';
        if (tipoemision == 'Anexo Exclusion' || tipoemision == 'Anexo Anulacion') {
            ingresoegreso = 'E'
        } else {
            ingresoegreso = 'I'
        }
        //const transaction= sequelize.transaction;
        newPoliza = await Poliza.create({
            nropoliza,
            nrocertificado,
            fechainicio,
            fechafin,
            fechaexpedicion,
            fecharecepcion,
            tipomoneda,
            primatotal,
            formapago,
            encargadoid,
            bancoid,
            ciudadexpedicion,
            // broker,
            notas,
            companiaseguroid,
            subramocompaniaid,
            tiporamoid,
            contratanteid,
            tomadorid,
            ejecutivoid,
            colocacionid,
            ciaspvs,
            tipopolizaid,
            tpoliza,
            tipocontrato,
            menoid,
            //llamadoid,
            vendedorid,
            //nroplaca,
            tipoemision,
            franquicia,
            valorasegurado,
           
            comisionbs,
            comisionusd,
            tipocambio,
            porcentajeprima,
            primaneta,
            porcentajecomision,
            ingresoegreso,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro: new Date(),
            fechamodificacion: new Date(),
            estado,
            sucursalid,
            planid,
            polizaid
        }, {
            fields: ['nropoliza',
                'nrocertificado',
                'fechainicio',
                'fechafin',
                'fechaexpedicion',
                'fecharecepcion',
                'tipomoneda',
                'primatotal',
                'formapago',
                'encargadoid',
                'bancoid',
                'ciudadexpedicion',

                //'broker',
                'notas',
                'companiaseguroid',
                'subramocompaniaid',
                'tiporamoid',
                'contratanteid',
                'tomadorid',
                'ejecutivoid',
                'colocacionid',
                'ciaspvs',
                'tipopolizaid',
                'tpoliza',
                'tipocontrato',
                'menoid',
                //'llamadoid',
                'vendedorid',
                //'nroplaca',
                'tipoemision',
                'franquicia',
                'valorasegurado',

              

                'comisionbs',
                'comisionusd',
                'tipocambio',
                'porcentajeprima',
                'primaneta',
                'porcentajecomision',
                'ingresoegreso',
                'usuarioregistro',
                'usuariomodificacion',
                'fecharegistro',
                'fechamodificacion',
                'estado',
                'sucursalid',
                'planid',
                'polizaid']
        }, { transaction: t });
        // step 2  archivos
        // if( archivos!) 
        for (let i = 0; i < archivos.length; i++) {
            // listaPermisos.push( 
            await Archivo.create({
                codigo: newPoliza.id,
                nombre: archivos[i].nombre,
                descripcion: archivos[i].nombre,
                extension: archivos[i].extension,
                archivo: archivos[i].archivo,
                aseguradoid: tomadorid,
                sucursalid: sucursalid,
                usuarioregistro,
                usuariomodificacion: usuarioregistro,
                fecharegistro: new Date(),
                fechamodificacion: new Date(),
                estado: 'ACT'
            }, {
                fields: [
                    'codigo',
                    'nombre',
                    'descripcion',
                    'extension',
                    'archivo',
                    'aseguradoid',
                    'sucursalid',
                    'usuarioregistro',
                    'usuariomodificacion',
                    'fecharegistro',
                    'fechamodificacion',
                    'estado']
            }, { transaction: t });


        }
        //DETALLE PERSONA
        for (let i = 0; i < personas.length; i++) {
            let newPolizaDetalle = await PolizaDetallePersona.create({
                nrocertificado: personas[i].nrocertificado,
                tipoasegurado: personas[i].tipoasegurado,
                titular: personas[i].asegurado,
                cobertura: personas[i].coberturamaternidad,
                fechanacimiento: personas[i].fechanacimiento,
                sexo: personas[i].sexo,
                ambitogeografico: personas[i].ambitogeografico,
                sistemaatencion: personas[i].sistemaatencion,

                primaindividual: personas[i].primaindividual,
                primanetaindividualbs: personas[i].primanetaindividualbs,
                primanetaindividualusd: personas[i].primanetaindividualusd,
                franquicia: personas[i].franquicia,
                valorasegurado: personas[i].valorasegurado,
                usuarioregistro,
                usuariomodificacion,
                fecharegistro: new Date(),
                fechamodificacion: new Date(),
                estado: 'ACT',
                polizaid: newPoliza.id
            }, {
                fields: [
                    'nrocertificado',
                    'tipoasegurado',
                    'titular',
                    'cobertura',
                    'fechanacimiento',
                    'sexo',
                    'ambitogeografico',
                    'sistemaatencion',

                    'primaindividual',
                    'primanetaindividualbs',
                    'primanetaindividualusd',
                    'franquicia',
                    'valorasegurado',
                    'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                    'fechamodificacion', 'estado',
                    'polizaid']
            }, { transaction: t });

          

        }

       



        await t.commit();
        const QUERY = `select p.id, p.nropoliza, p.nrocertificado, p.fechainicio, p.fechafin, p.fechaexpedicion, p.fecharecepcion, p.tipomoneda, p.primatotal, p.formapago, p.encargadoid, p.bancoid, p.ciudadexpedicion, p.notas, p.companiaseguroid, p.subramocompaniaid, p.tiporamoid, p.contratanteid, p.tomadorid, p.ejecutivoid, p.colocacionid, p.ciaspvs, p.tipopolizaid, p.tpoliza, p.tipocontrato, p.memoid, p.vendedorid, null tipoemision, p.franquicia, p.valorasegurado, p.comisionbs, p.comisionusd, p.tipocambio, p.porcentajeprima, p.primaneta, p.porcentajecomision, p.usuarioregistro, p.usuariomodificacion, p.fecharegistro, p.fechamodificacion, p.estado, p.sucursalid, p.planid, p.polizaid 
        ,sr.nombre nombreramopadre,case when sr.id is null then r.nombre else sr.nombre end nombreramo,case when  sr.id is null then null else r.nombre end nombresubramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania ,s.nombre as sucursal,t.nombre tiporamo,pe.nombrecompleto ejecutivo,car.nombrecompleto cartera
        from poliza p
        inner join sucursal s on s.id=p.sucursalid
        inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid
        inner join ramo r on r.id=rc.ramoid
        left join ramo sr on sr.id=rc.ramopadreid
        inner join asegurado a on a.id=p.tomadorid
        inner join compania_seguro cs on cs.id=p.companiaseguroid
        inner join tipo_ramo t on t.id=p.tiporamoid
        inner join personal pe on pe.id=p.ejecutivoid
        inner join personal car on car.id=a.carteraid
        where p.id='` + newPoliza.id + `'   `;

        //console.log(QUERY);
        const poliza = await sequelize.query(QUERY
            , {
                type: QueryTypes.SELECT
            });

        if (newPoliza) {
            return res.json({
                message: 'Poliza created successfully',
                data: poliza[0]
            });
        }
    } catch (e) {
        console.log(e);
        if (t) {
            await t.rollback();
            //await newUsuario.destroy();
            if (newPoliza) {
                await Poliza.destroy({ where: { id: newPoliza.id } })
            }
        }
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}
 */
/* export async function updatePolizaSalud(req, res) {
    const { id } = req.params;
    const { nropoliza,
        nrocertificado,
        fechainicio,
        fechafin,
        fechaexpedicion,
        fecharecepcion,
        tipomoneda,
        primatotal,
        formapago,
        encargadoid,
        bancoid,
        ciudadexpedicion,
        //broker,
        notas,
        companiaseguroid,
        subramocompaniaid,
        tiporamoid,
        contratanteid,
        tomadorid,
        ejecutivoid,
        colocacionid,
        ciaspvs,
        tipopolizaid,
        tpoliza,
        tipocontrato,
        menoid,
        //llamadoid,
        vendedorid,
        //nroplaca,
        tipoemision,
        franquicia,
        valorasegurado,
        comisionbs,
        comisionusd,
        tipocambio,
        porcentajeprima,
        primaneta,
        porcentajecomision,

        usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        estado,
        sucursalid, planid, archivos, archivoseliminados,
        personas, eliminadospersonas } = req.body;
    let t;
    try {
        t = await sequelize.transaction();
        const updateRowCount = await Poliza.update({
            nropoliza,
            nrocertificado,
            fechainicio,
            fechafin,
            fechaexpedicion,
            fecharecepcion,
            tipomoneda,
            primatotal,
            formapago,
            encargadoid,
            bancoid,
            ciudadexpedicion,
            //broker,
            notas,
            companiaseguroid,
            subramocompaniaid,
            tiporamoid,
            contratanteid,
            tomadorid,
            ejecutivoid,
            colocacionid,
            ciaspvs,
            tipopolizaid,
            tpoliza,
            tipocontrato,
            menoid,
            //llamadoid,
            vendedorid,
            //nroplaca,
            tipoemision,
            franquicia,
            valorasegurado,
            comisionbs,
            comisionusd,
            tipocambio,
            porcentajeprima,
            primaneta,
            porcentajecomision,

            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion: new Date(),
            estado,
            sucursalid,
            planid
        }, {
            where: {
                id
            }
        }, { transaction: t });

        //ARCHIVOS ELIMINADOS
        for (let i = 0; i < archivoseliminados.length; i++) {

            await Archivo.update({
                estado: 'BAJ',
                fechamodificacion: new Date()
            }, { where: { id: archivoseliminados[i].id } }, { transaction: t });

        }
        // REGISTRO DE ARCHIVOS NUEVOS
        for (let i = 0; i < archivos.length; i++) {

            await Archivo.create({
                codigo: id,
                nombre: archivos[i].nombre,
                descripcion: archivos[i].nombre,
                extension: archivos[i].extension,
                archivo: archivos[i].archivo,
                aseguradoid: tomadorid,
                sucursalid: sucursalid,
                usuarioregistro: usuariomodificacion,
                usuariomodificacion: usuariomodificacion,
                fecharegistro: new Date(),
                fechamodificacion: new Date(),
                estado: 'ACT'
            }, {
                fields: [
                    'codigo',
                    'nombre',
                    'descripcion',
                    'extension',
                    'archivo',
                    'aseguradoid',
                    'sucursalid',
                    'usuarioregistro',
                    'usuariomodificacion',
                    'fecharegistro',
                    'fechamodificacion',
                    'estado']
            }, { transaction: t });

        }
        if (eliminadospersonas) {
            //DETALLE  ELIMINADOS
            for (let i = 0; i < eliminadospersonas.length; i++) {

                await PolizaDetallePersona.update({
                    estado: 'BAJ',
                    fechamodificacion: new Date()
                }, { where: { id: eliminadospersonas[i].id } }, { transaction: t });

            }
        }
        if (personas) {
            //DETALLE PERSONA
            for (let i = 0; i < personas.length; i++) {
                let newPolizaDetalle = await PolizaDetallePersona.create({
                    nrocertificado: personas[i].nrocertificado,
                    tipoasegurado: personas[i].tipoasegurado,
                    titular: personas[i].asegurado,
                    cobertura: personas[i].coberturamaternidad,
                    fechanacimiento: personas[i].fechanacimiento,
                    sexo: personas[i].sexo,
                    ambitogeografico: personas[i].ambitogeografico,
                    sistemaatencion: personas[i].sistemaatencion,

                    primaindividual: personas[i].primaindividual,
                    primanetaindividualbs: personas[i].primanetaindividualbs,
                    primanetaindividualusd: personas[i].primanetaindividualusd,

                    franquicia: personas[i].franquicia,
                    valorasegurado: personas[i].valorasegurado,

                    usuarioregistro,
                    usuariomodificacion,
                    fecharegistro: new Date(),
                    fechamodificacion: new Date(),
                    estado: 'ACT',
                    polizaid: id
                }, {
                    fields: [
                        'nrocertificado',
                        'tipoasegurado',
                        'titular',
                        'cobertura',
                        'fechanacimiento',
                        'sexo',
                        'ambitogeografico',
                        'sistemaatencion',

                        'primaindividual',
                        'primanetaindividualbs',
                        'primanetaindividualusd',
                        'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                        'fechamodificacion', 'estado',
                        'polizaid']
                }, { transaction: t });

               

            }
        }
        await t.commit();
        const polizas = await Poliza.findOne({
            where: {
                id
            }
        }
        );
        res.json({
            message: 'Poliza update successfully',
            count: polizas
        });




    } catch (e) {
        console.log(e);
        if (t) {
            await t.rollback();
        }
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
} */
/** automotor */
/* export async function createPolizaGeneral(req, res) {
    const {
        nropoliza,
        nrocertificado,
        fechainicio,
        fechafin,
        fechaexpedicion,
        fecharecepcion,
        tipomoneda,
        primatotal,
        formapago,
        encargadoid,
        bancoid,
        ciudadexpedicion,
        //broker,
        notas,
        companiaseguroid,
        subramocompaniaid,
        tiporamoid,
        contratanteid,
        tomadorid,
        ejecutivoid,
        colocacionid,
        ciaspvs,
        tipopolizaid,
        tpoliza,
        tipocontrato,
        menoid,
        //llamadoid,
        vendedorid,
        //nroplaca,
        tipoemision,
        franquicia,
        valorasegurado,
        comisionbs,
        comisionusd,
        tipocambio,
        porcentajeprima,
        primaneta,
        porcentajecomision,
        archivos,
        //adicionales,
        generales,

        usuarioregistro,
        usuariomodificacion,
        estado = 'ACT',
        sucursalid,
        planid,
        polizaid } = req.body;
    let newPoliza;
    let t;
    try {
        t = await sequelize.transaction();
        if (fecharegistro) {
            fecharegistro = new Date()
            fechamodificacion = new Date()
        } else {
            fechamodificacion = fecharegistro
        }

        let ingresoegreso = 'I';
        if (tipoemision == 'Anexo Exclusion' || tipoemision == 'Anexo Anulacion') {
            ingresoegreso = 'E'
        } else {
            ingresoegreso = 'I'
        }
        //const transaction= sequelize.transaction;
        newPoliza = await Poliza.create({
            nropoliza,
            nrocertificado,
            fechainicio,
            fechafin,
            fechaexpedicion,
            fecharecepcion,
            tipomoneda,
            primatotal,
            formapago,
            encargadoid,
            bancoid,
            ciudadexpedicion,
            // broker,
            notas,
            companiaseguroid,
            subramocompaniaid,
            tiporamoid,
            contratanteid,
            tomadorid,
            ejecutivoid,
            colocacionid,
            ciaspvs,
            tipopolizaid,
            tpoliza,
            tipocontrato,
            menoid,
            //llamadoid,
            vendedorid,
            //nroplaca,
            tipoemision,
            franquicia,
            valorasegurado,
           
            comisionbs,
            comisionusd,
            tipocambio,
            porcentajeprima,
            primaneta,
            porcentajecomision,
            ingresoegreso,
            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion,
            estado,
            sucursalid,
            planid,
            polizaid
        }, {
            fields: ['nropoliza',
                'nrocertificado',
                'fechainicio',
                'fechafin',
                'fechaexpedicion',
                'fecharecepcion',
                'tipomoneda',
                'primatotal',
                'formapago',
                'encargadoid',
                'bancoid',
                'ciudadexpedicion',

                //'broker',
                'notas',
                'companiaseguroid',
                'subramocompaniaid',
                'tiporamoid',
                'contratanteid',
                'tomadorid',
                'ejecutivoid',
                'colocacionid',
                'ciaspvs',
                'tipopolizaid',
                'tpoliza',
                'tipocontrato',
                'menoid',
                //'llamadoid',
                'vendedorid',
                //'nroplaca',
                'tipoemision',
                'franquicia',
                'valorasegurado',

          

                'comisionbs',
                'comisionusd',
                'tipocambio',
                'porcentajeprima',
                'primaneta',
                'porcentajecomision',
                'ingresoegreso',
                'usuarioregistro',
                'usuariomodificacion',
                'fecharegistro',
                'fechamodificacion',
                'estado',
                'sucursalid',
                'planid',
                'polizaid']
        }, { transaction: t });
        // step 2  archivos
        // if( archivos!) 
        for (let i = 0; i < archivos.length; i++) {
            // listaPermisos.push( 
            await Archivo.create({
                codigo: newPoliza.id,
                nombre: archivos[i].nombre,
                descripcion: archivos[i].nombre,
                extension: archivos[i].extension,
                archivo: archivos[i].archivo,
                aseguradoid: tomadorid,
                sucursalid: sucursalid,
                usuarioregistro,
                usuariomodificacion: usuarioregistro,
                fecharegistro: new Date(),
                fechamodificacion: new Date(),
                estado: 'ACT'
            }, {
                fields: [
                    'codigo',
                    'nombre',
                    'descripcion',
                    'extension',
                    'archivo',
                    'aseguradoid',
                    'sucursalid',
                    'usuarioregistro',
                    'usuariomodificacion',
                    'fecharegistro',
                    'fechamodificacion',
                    'estado']
            }, { transaction: t });


        }
        //DETALLE GENERAL
        for (let i = 0; i < generales.length; i++) {
            let newPolizaDetalle = await PolizaDetalleGeneral.create({
                //titular: generales[i].titular,
                objetoasegurado: generales[i].objetoasegurado,
                nrocertificado: generales[i].nrocertificado,
                tipopolizageneral: generales[i].tipopolizageneral,
                direccion: generales[i].direccion,

                primaindividual: generales[i].primaindividual,               

                franquicia: generales[i].franquicia,
                valorasegurado: generales[i].valorasegurado,

                usuarioregistro,
                usuariomodificacion,
                fecharegistro: new Date(),
                fechamodificacion: new Date(),
                estado: 'ACT',
                polizaid: newPoliza.id
            }, {
                fields: [
                    'objetoasegurado',
                    'nrocertificado',
                    'tipopolizageneral',
                    'direccion',

                    'primaindividual',
                    'primanetaindividualbs',
                    'primanetaindividualusd',
                    'franquicia',
                    'valorasegurado',
                    'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                    'fechamodificacion', 'estado',
                    'polizaid']
            }, { transaction: t });


        }
        await t.commit();
        const QUERY = `select p.id, p.nropoliza, p.nrocertificado, p.fechainicio, p.fechafin, p.fechaexpedicion, p.fecharecepcion, p.tipomoneda, p.primatotal, p.formapago, p.encargadoid, p.bancoid, p.ciudadexpedicion, p.notas, p.companiaseguroid, p.subramocompaniaid, p.tiporamoid, p.contratanteid, p.tomadorid, p.ejecutivoid, p.colocacionid, p.ciaspvs, p.tipopolizaid, p.tpoliza, p.tipocontrato, p.memoid, p.vendedorid, null tipoemision, p.franquicia, p.valorasegurado, p.comisionbs, p.comisionusd, p.tipocambio, p.porcentajeprima, p.primaneta, p.porcentajecomision, p.usuarioregistro, p.usuariomodificacion, p.fecharegistro, p.fechamodificacion, p.estado, p.sucursalid, p.planid, p.polizaid 
        ,sr.nombre nombreramopadre,case when sr.id is null then r.nombre else sr.nombre end nombreramo,case when  sr.id is null then null else r.nombre end nombresubramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania ,s.nombre as sucursal,t.nombre tiporamo,pe.nombrecompleto ejecutivo,car.nombrecompleto cartera
        from poliza p
        inner join sucursal s on s.id=p.sucursalid
        inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid
        inner join ramo r on r.id=rc.ramoid
        left join ramo sr on sr.id=rc.ramopadreid
        inner join asegurado a on a.id=p.tomadorid
        inner join compania_seguro cs on cs.id=p.companiaseguroid
        inner join tipo_ramo t on t.id=p.tiporamoid
        inner join personal pe on pe.id=p.ejecutivoid
        inner join personal car on car.id=a.carteraid
        where p.id='` + newPoliza.id + `'   `;

        //console.log(QUERY);
        const poliza = await sequelize.query(QUERY
            , {
                type: QueryTypes.SELECT
            });

        if (newPoliza) {
            return res.json({
                message: 'Poliza created successfully',
                data: poliza[0]
            });
        }
    } catch (e) {
        console.log(e);
        if (t) {
            await t.rollback();
            //await newUsuario.destroy();
            if (newPoliza) {
                await Poliza.destroy({ where: { id: newPoliza.id } })
            }
        }
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}
 */
/* export async function updatePolizaGeneral(req, res) {
    const { id } = req.params;
    const { nropoliza,
        nrocertificado,
        fechainicio,
        fechafin,
        fechaexpedicion,
        fecharecepcion,
        tipomoneda,
        primatotal,
        formapago,
        encargadoid,
        bancoid,
        ciudadexpedicion,
        //broker,
        notas,
        companiaseguroid,
        subramocompaniaid,
        tiporamoid,
        contratanteid,
        tomadorid,
        ejecutivoid,
        colocacionid,
        ciaspvs,
        tipopolizaid,
        tpoliza,
        tipocontrato,
        menoid,
        //llamadoid,
        vendedorid,
        //nroplaca,
        tipoemision,
        franquicia,
        valorasegurado,
        comisionbs,
        comisionusd,
        tipocambio,
        porcentajeprima,
        primaneta,
        porcentajecomision,

        usuarioregistro,
        usuariomodificacion,
        fecharegistro,
        estado,
        sucursalid, planid, archivos, archivoseliminados,
        generales, eliminadosgenerales } = req.body;
    let t;
    try {
        t = await sequelize.transaction();
        const updateRowCount = await Poliza.update({
            nropoliza,
            nrocertificado,
            fechainicio,
            fechafin,
            fechaexpedicion,
            fecharecepcion,
            tipomoneda,
            primatotal,
            formapago,
            encargadoid,
            bancoid,
            ciudadexpedicion,
            //broker,
            notas,
            companiaseguroid,
            subramocompaniaid,
            tiporamoid,
            contratanteid,
            tomadorid,
            ejecutivoid,
            colocacionid,
            ciaspvs,
            tipopolizaid,
            tpoliza,
            tipocontrato,
            menoid,
            //llamadoid,
            vendedorid,
            //nroplaca,
            tipoemision,
            franquicia,
            valorasegurado,
            comisionbs,
            comisionusd,
            tipocambio,
            porcentajeprima,
            primaneta,
            porcentajecomision,

            usuarioregistro,
            usuariomodificacion,
            fecharegistro,
            fechamodificacion: new Date(),
            estado,
            sucursalid,
            planid
        }, {
            where: {
                id
            }
        }, { transaction: t });

        //ARCHIVOS ELIMINADOS
        for (let i = 0; i < archivoseliminados.length; i++) {

            await Archivo.update({
                estado: 'BAJ',
                fechamodificacion: new Date()
            }, { where: { id: archivoseliminados[i].id } }, { transaction: t });

        }
        // REGISTRO DE ARCHIVOS NUEVOS
        for (let i = 0; i < archivos.length; i++) {

            await Archivo.create({
                codigo: id,
                nombre: archivos[i].nombre,
                descripcion: archivos[i].nombre,
                extension: archivos[i].extension,
                archivo: archivos[i].archivo,
                aseguradoid: tomadorid,
                sucursalid: sucursalid,
                usuarioregistro: usuariomodificacion,
                usuariomodificacion: usuariomodificacion,
                fecharegistro: new Date(),
                fechamodificacion: new Date(),
                estado: 'ACT'
            }, {
                fields: [
                    'codigo',
                    'nombre',
                    'descripcion',
                    'extension',
                    'archivo',
                    'aseguradoid',
                    'sucursalid',
                    'usuarioregistro',
                    'usuariomodificacion',
                    'fecharegistro',
                    'fechamodificacion',
                    'estado']
            }, { transaction: t });

        }
        if (eliminadosgenerales) {
            //DETALLE  ELIMINADOS
            for (let i = 0; i < eliminadosgenerales.length; i++) {

                await PolizaDetalleGeneral.update({
                    estado: 'BAJ',
                    fechamodificacion: new Date()
                }, { where: { id: eliminadosgenerales[i].id } }, { transaction: t });

            }
        }

        if (generales) {
            //DETALLE GENERAL
            for (let i = 0; i < generales.length; i++) {
                let newPolizaDetalle = await PolizaDetalleGeneral.create({
                    //titular: generales[i].titular,
                    objetoasegurado: generales[i].objetoasegurado,
                    nrocertificado: generales[i].nrocertificado,
                    tipopolizageneral: generales[i].tipopolizageneral,
                    direccion: generales[i].direccion,

                    primaindividual: generales[i].primaindividual,

                    franquicia: generales[i].franquicia,
                    valorasegurado: generales[i].valorasegurado,
                  

                    usuarioregistro,
                    usuariomodificacion,
                    fechamodificacion: new Date(),
                    estado: 'ACT',
                    polizaid: id
                }, {
                    fields: [
                        'objetoasegurado',
                        'nrocertificado',
                        'tipopolizageneral',
                        'direccion',

                        'primaindividual',
                        'primanetaindividualbs',
                        'primanetaindividualusd',
                        'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                        'fechamodificacion', 'estado',
                        'polizaid']
                }, { transaction: t });


            }
        }


        await t.commit();
        const polizas = await Poliza.findOne({
            where: {
                id
            }
        }
        );
        res.json({
            message: 'Poliza update successfully',
            count: polizas
        });




    } catch (e) {
        console.log(e);
        if (t) {
            await t.rollback();
        }
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
} */
function _updatePolizaGenerica() {
  _updatePolizaGenerica = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var id, _req$body2, nropoliza, nrocertificado, fechainicio, fechafin, fechaexpedicion, fecharecepcion, tipomoneda, primatotal, formapago, encargadoid, bancoid, ciudadexpedicion, notas, companiaseguroid, subramocompaniaid, tiporamoid, contratanteid, tomadorid, ejecutivoid, colocacionid, ciaspvs, tipopolizaid, tpoliza, tipocontrato, menoid, vendedorid, tipoemision, franquicia, valorasegurado, comisionbs, comisionusd, tipocambio, porcentajeprima, primaneta, porcentajecomision, usuarioregistro, usuariomodificacion, fecharegistro, estado, sucursalid, planid, archivos, archivoseliminados, detalle, eliminadosdetalle, t, primatotalsus, primanetasus, valoraseguradosus, updateRowCount, i, _i2, _i3, newPolizaDetalle, _i4, query1, pagos, polizas;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, nropoliza = _req$body2.nropoliza, nrocertificado = _req$body2.nrocertificado, fechainicio = _req$body2.fechainicio, fechafin = _req$body2.fechafin, fechaexpedicion = _req$body2.fechaexpedicion, fecharecepcion = _req$body2.fecharecepcion, tipomoneda = _req$body2.tipomoneda, primatotal = _req$body2.primatotal, formapago = _req$body2.formapago, encargadoid = _req$body2.encargadoid, bancoid = _req$body2.bancoid, ciudadexpedicion = _req$body2.ciudadexpedicion, notas = _req$body2.notas, companiaseguroid = _req$body2.companiaseguroid, subramocompaniaid = _req$body2.subramocompaniaid, tiporamoid = _req$body2.tiporamoid, contratanteid = _req$body2.contratanteid, tomadorid = _req$body2.tomadorid, ejecutivoid = _req$body2.ejecutivoid, colocacionid = _req$body2.colocacionid, ciaspvs = _req$body2.ciaspvs, tipopolizaid = _req$body2.tipopolizaid, tpoliza = _req$body2.tpoliza, tipocontrato = _req$body2.tipocontrato, menoid = _req$body2.menoid, vendedorid = _req$body2.vendedorid, tipoemision = _req$body2.tipoemision, franquicia = _req$body2.franquicia, valorasegurado = _req$body2.valorasegurado, comisionbs = _req$body2.comisionbs, comisionusd = _req$body2.comisionusd, tipocambio = _req$body2.tipocambio, porcentajeprima = _req$body2.porcentajeprima, primaneta = _req$body2.primaneta, porcentajecomision = _req$body2.porcentajecomision, usuarioregistro = _req$body2.usuarioregistro, usuariomodificacion = _req$body2.usuariomodificacion, fecharegistro = _req$body2.fecharegistro, estado = _req$body2.estado, sucursalid = _req$body2.sucursalid, planid = _req$body2.planid, archivos = _req$body2.archivos, archivoseliminados = _req$body2.archivoseliminados, detalle = _req$body2.detalle, eliminadosdetalle = _req$body2.eliminadosdetalle;
          _context3.prev = 2;
          _context3.next = 5;
          return _database.sequelize.transaction();
        case 5:
          t = _context3.sent;
          primatotalsus = 0, primanetasus = 0, valoraseguradosus = 0;
          if (tipomoneda == 'BOL') {
            primatotalsus = primatotal / tipocambio, primanetasus = primaneta / tipocambio, valoraseguradosus = valorasegurado / tipocambio;
          } else {
            primatotalsus = primatotal, primanetasus = primaneta, valoraseguradosus = valorasegurado;
          }
          _context3.next = 10;
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
            planid: planid,
            primatotalsus: primatotalsus,
            primanetasus: primanetasus,
            valoraseguradosus: valoraseguradosus
          }, {
            where: {
              id: id
            }
          }, {
            transaction: t
          });
        case 10:
          updateRowCount = _context3.sent;
          i = 0;
        case 12:
          if (!(i < archivoseliminados.length)) {
            _context3.next = 18;
            break;
          }
          _context3.next = 15;
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
        case 15:
          i++;
          _context3.next = 12;
          break;
        case 18:
          _i2 = 0;
        case 19:
          if (!(_i2 < archivos.length)) {
            _context3.next = 25;
            break;
          }
          _context3.next = 22;
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
        case 22:
          _i2++;
          _context3.next = 19;
          break;
        case 25:
          if (!eliminadosdetalle) {
            _context3.next = 33;
            break;
          }
          _i3 = 0;
        case 27:
          if (!(_i3 < eliminadosdetalle.length)) {
            _context3.next = 33;
            break;
          }
          _context3.next = 30;
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
        case 30:
          _i3++;
          _context3.next = 27;
          break;
        case 33:
          if (!detalle) {
            _context3.next = 42;
            break;
          }
          _i4 = 0;
        case 35:
          if (!(_i4 < detalle.length)) {
            _context3.next = 42;
            break;
          }
          _context3.next = 38;
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
        case 38:
          newPolizaDetalle = _context3.sent;
        case 39:
          _i4++;
          _context3.next = 35;
          break;
        case 42:
          _context3.next = 44;
          return t.commit();
        case 44:
          query1 = " select * from  pa_corregir_poliza('" + id + "');";
          _context3.next = 47;
          return _database.sequelize.query(query1, {
            type: QueryTypes.SELECT
          });
        case 47:
          pagos = _context3.sent;
          _context3.next = 50;
          return _Poliza["default"].findOne({
            where: {
              id: id
            }
          });
        case 50:
          polizas = _context3.sent;
          res.json({
            message: 'Poliza update successfully',
            count: polizas
          });
          _context3.next = 61;
          break;
        case 54:
          _context3.prev = 54;
          _context3.t0 = _context3["catch"](2);
          console.log(_context3.t0);
          if (!t) {
            _context3.next = 60;
            break;
          }
          _context3.next = 60;
          return t.rollback();
        case 60:
          res.status(500).json({
            data: {
              estado: false,
              "error": _context3.t0.message
            }
          });
        case 61:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[2, 54]]);
  }));
  return _updatePolizaGenerica.apply(this, arguments);
}
function getOnePoliza(_x7, _x8) {
  return _getOnePoliza.apply(this, arguments);
}
function _getOnePoliza() {
  _getOnePoliza = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var id, poliza;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          _context4.next = 4;
          return _Poliza["default"].findOne({
            where: {
              id: id
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
    }, _callee4, null, [[0, 8]]);
  }));
  return _getOnePoliza.apply(this, arguments);
}
function polizasPorSucursal(_x9, _x10) {
  return _polizasPorSucursal.apply(this, arguments);
}
function _polizasPorSucursal() {
  _polizasPorSucursal = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var sucursalid, poliza;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          sucursalid = req.params.sucursalid;
          _context5.next = 4;
          return _Poliza["default"].findOne({
            where: {
              sucursalid: sucursalid,
              estado: 'ACT'
            }
          });
        case 4:
          poliza = _context5.sent;
          res.json({
            data: poliza
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
    }, _callee5, null, [[0, 8]]);
  }));
  return _polizasPorSucursal.apply(this, arguments);
}
function deletePoliza(_x11, _x12) {
  return _deletePoliza.apply(this, arguments);
}
function _deletePoliza() {
  _deletePoliza = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var id, deleteRowCount;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          id = req.params.id;
          _context6.next = 4;
          return _Poliza["default"].destroy({
            where: {
              id: id
            }
          });
        case 4:
          deleteRowCount = _context6.sent;
          res.json({
            message: 'Poliza deleted successfully',
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
    }, _callee6, null, [[0, 8]]);
  }));
  return _deletePoliza.apply(this, arguments);
}
function bajaPoliza(_x13, _x14) {
  return _bajaPoliza.apply(this, arguments);
}
/**consultas de polizas */
function _bajaPoliza() {
  _bajaPoliza = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var id, usuariomodificacion, updateRowCount, poliza;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          id = req.params.id;
          console.log("bajaPoliza");
          usuariomodificacion = req.body.usuariomodificacion;
          _context7.prev = 3;
          _context7.next = 6;
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
          updateRowCount = _context7.sent;
          _context7.next = 9;
          return _Poliza["default"].findOne({
            where: {
              id: id
            }
          });
        case 9:
          poliza = _context7.sent;
          res.json({
            message: 'Poliza baja successfully',
            data: poliza
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
    }, _callee7, null, [[3, 13]]);
  }));
  return _bajaPoliza.apply(this, arguments);
}
function getPolizaPorTipoYSucursal(_x15, _x16) {
  return _getPolizaPorTipoYSucursal.apply(this, arguments);
}
function _getPolizaPorTipoYSucursal() {
  _getPolizaPorTipoYSucursal = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var _req$params, tipopolizaid, sucursalid, query, polizas;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _req$params = req.params, tipopolizaid = _req$params.tipopolizaid, sucursalid = _req$params.sucursalid;
          _context8.prev = 1;
          query = "select p.*,t.nombre tiporamo,s.nombre as sucursal \n            from poliza p \n            inner join sucursal s on s.id=p.sucursalid  \n             inner join tipo_ramo t on t.id=p.tiporamoid  \"\n            where s.id= '" + sucursalid + "' and p.tpoliza='" + tipopolizaid + "' order by p.fechamodificacion desc ";
          _context8.next = 5;
          return _database.sequelize.query(query, {
            type: QueryTypes.SELECT
          });
        case 5:
          polizas = _context8.sent;
          res.json({
            polizas: polizas
          });

          //const polizas = await Poliza.findAll({ where: { tipopolizaid, sucursalid, estado: 'ACT' } });
          //const polizas = await Poliza.findAll({ where: { tpoliza: tipopolizaid, sucursalid, estado: 'ACT' } });

          res.json({
            polizas: polizas
          });
          _context8.next = 14;
          break;
        case 10:
          _context8.prev = 10;
          _context8.t0 = _context8["catch"](1);
          console.log(_context8.t0);
          res.status(500).json({
            data: {
              estado: false,
              "error": _context8.t0.message
            }
          });
        case 14:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[1, 10]]);
  }));
  return _getPolizaPorTipoYSucursal.apply(this, arguments);
}
function getPolizasPorTipoYEmpresa(_x17, _x18) {
  return _getPolizasPorTipoYEmpresa.apply(this, arguments);
}
function _getPolizasPorTipoYEmpresa() {
  _getPolizasPorTipoYEmpresa = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var _req$params2, tipopolizaid, empresaid, query, polizas;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _req$params2 = req.params, tipopolizaid = _req$params2.tipopolizaid, empresaid = _req$params2.empresaid;
          _context9.prev = 1;
          query = "select p.*,t.nombre tiporamo,s.nombre as sucursal \n            from poliza p \n            inner join sucursal s on s.id=p.sucursalid  \n            inner join tipo_ramo t on t.id=p.tiporamoid  \n            where s.empresaid= '" + empresaid + "' and p.tpoliza='" + tipopolizaid + "' order by p.fechamodificacion desc ";
          _context9.next = 5;
          return _database.sequelize.query(query, {
            type: QueryTypes.SELECT
          });
        case 5:
          polizas = _context9.sent;
          res.json({
            polizas: polizas
          });
          _context9.next = 13;
          break;
        case 9:
          _context9.prev = 9;
          _context9.t0 = _context9["catch"](1);
          console.log(_context9.t0);
          res.status(500).json({
            data: {
              estado: false,
              "error": _context9.t0.message
            }
          });
        case 13:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[1, 9]]);
  }));
  return _getPolizasPorTipoYEmpresa.apply(this, arguments);
}
function getPolizasPorTipoRamoYEmpresa(_x19, _x20) {
  return _getPolizasPorTipoRamoYEmpresa.apply(this, arguments);
}
function _getPolizasPorTipoRamoYEmpresa() {
  _getPolizasPorTipoRamoYEmpresa = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var _req$params3, tipopoliza, tiporamoid, empresaid, _req$body3, fechainicio, fechafin, query, polizas;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _req$params3 = req.params, tipopoliza = _req$params3.tipopoliza, tiporamoid = _req$params3.tiporamoid, empresaid = _req$params3.empresaid;
          _req$body3 = req.body, fechainicio = _req$body3.fechainicio, fechafin = _req$body3.fechafin;
          _context10.prev = 2;
          query = "select p.* ,t.nombre tiporamo,sr.nombre nombreramopadre,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal \n            from poliza p \n            inner join sucursal s on s.id=p.sucursalid  \n            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid \n            inner join ramo r on r.id=rc.ramoid \n                left join ramo sr on r.ramoid=sr.id \n            inner join asegurado a on a.id=p.tomadorid \n            inner join compania_seguro cs on cs.id=p.companiaseguroid \n            inner join tipo_ramo t on t.id=p.tiporamoid  \n            where s.empresaid= '" + empresaid + "' and p.tpoliza='" + tipopoliza + "' and p.tiporamoid='" + tiporamoid + "'  \n            and to_char(p.fecharegistro, 'YYYYMMDD')::integer>= " + fechainicio + " and to_char(p.fecharegistro, 'YYYYMMDD')::integer<= " + fechafin + " and p.estado  NOT IN ('BAJ') order by p.fechamodificacion desc "; //   console.log(query);
          _context10.next = 6;
          return _database.sequelize.query(query, {
            type: QueryTypes.SELECT
          });
        case 6:
          polizas = _context10.sent;
          //console.log(JSON.stringify(usuarios[0], null, 2));

          res.json({
            polizas: polizas
          });
          _context10.next = 14;
          break;
        case 10:
          _context10.prev = 10;
          _context10.t0 = _context10["catch"](2);
          console.log(_context10.t0);
          res.status(500).json({
            data: {
              estado: false,
              "error": _context10.t0.message
            }
          });
        case 14:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[2, 10]]);
  }));
  return _getPolizasPorTipoRamoYEmpresa.apply(this, arguments);
}
function getPolizasPorTipoRamoYSucursal(_x21, _x22) {
  return _getPolizasPorTipoRamoYSucursal.apply(this, arguments);
}
function _getPolizasPorTipoRamoYSucursal() {
  _getPolizasPorTipoRamoYSucursal = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var _req$params4, tipopoliza, tiporamoid, sucursalid, _req$body4, fechainicio, fechafin, query, polizas;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _req$params4 = req.params, tipopoliza = _req$params4.tipopoliza, tiporamoid = _req$params4.tiporamoid, sucursalid = _req$params4.sucursalid;
          _req$body4 = req.body, fechainicio = _req$body4.fechainicio, fechafin = _req$body4.fechafin;
          _context11.prev = 2;
          query = "select p.* ,t.nombre tiporamo,sr.nombre nombreramopadre,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal\n        from poliza p\n        inner join sucursal s on s.id=p.sucursalid\n        inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid\n        inner join ramo r on r.id=rc.ramoid\n        left join ramo sr on sr.id=rc.ramopadreid\n        inner join asegurado a on a.id=p.tomadorid\n        inner join compania_seguro cs on cs.id=p.companiaseguroid\n        inner join tipo_ramo t on t.id=p.tiporamoid\n        where s.id='" + sucursalid + "'  and p.tpoliza='" + tipopoliza + "' and p.tiporamoid='" + tiporamoid + "'  and to_char(p.fecharegistro, 'YYYYMMDD')::integer>= " + fechainicio + " and to_char(p.fecharegistro, 'YYYYMMDD')::integer<= " + fechafin + " and p.estado NOT IN ('BAJ') order by p.fechamodificacion desc ";
          _context11.next = 6;
          return _database.sequelize.query(query, {
            type: QueryTypes.SELECT
          });
        case 6:
          polizas = _context11.sent;
          //console.log(JSON.stringify(usuarios[0], null, 2));
          //console.log(query);
          res.json({
            polizas: polizas
          });
          _context11.next = 14;
          break;
        case 10:
          _context11.prev = 10;
          _context11.t0 = _context11["catch"](2);
          console.log(_context11.t0);
          res.status(500).json({
            data: {
              estado: false,
              "error": _context11.t0.message
            }
          });
        case 14:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[2, 10]]);
  }));
  return _getPolizasPorTipoRamoYSucursal.apply(this, arguments);
}
function getPolizaHijo(_x23, _x24) {
  return _getPolizaHijo.apply(this, arguments);
}
function _getPolizaHijo() {
  _getPolizaHijo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var polizaid, query, polizas;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          polizaid = req.params.polizaid;
          _context12.prev = 1;
          query = "select p.* ,t.nombre tiporamo,sr.nombre nombreramopadre,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal\n        from poliza p\n        inner join sucursal s on s.id=p.sucursalid\n        inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid\n        inner join ramo r on r.id=rc.ramoid\n        left join ramo sr on sr.id=rc.ramopadreid\n        inner join asegurado a on a.id=p.tomadorid\n        inner join compania_seguro cs on cs.id=p.companiaseguroid\n        inner join tipo_ramo t on t.id=p.tiporamoid\n        where p.polizaid='" + polizaid + "'   and p.estado NOT IN ('BAJ') order by p.fechamodificacion desc ";
          _context12.next = 5;
          return _database.sequelize.query(query, {
            type: QueryTypes.SELECT
          });
        case 5:
          polizas = _context12.sent;
          //console.log(JSON.stringify(usuarios[0], null, 2));
          //console.log(query);
          res.json({
            polizas: polizas
          });
          _context12.next = 13;
          break;
        case 9:
          _context12.prev = 9;
          _context12.t0 = _context12["catch"](1);
          console.log(_context12.t0);
          res.status(500).json({
            data: {
              estado: false,
              "error": _context12.t0.message
            }
          });
        case 13:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[1, 9]]);
  }));
  return _getPolizaHijo.apply(this, arguments);
}
function polizasPorEmpresaGeneral(_x25, _x26) {
  return _polizasPorEmpresaGeneral.apply(this, arguments);
}
function _polizasPorEmpresaGeneral() {
  _polizasPorEmpresaGeneral = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var empresaid, _req$body5, fechainicio, fechafin, query, polizas;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          empresaid = req.params.empresaid;
          _req$body5 = req.body, fechainicio = _req$body5.fechainicio, fechafin = _req$body5.fechafin;
          _context13.prev = 2;
          query = "select p.* ,t.nombre tiporamo,sr.nombre nombreramopadre,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal \n            from poliza p \n            inner join sucursal s on s.id=p.sucursalid  \n            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid \n            inner join ramo r on r.id=rc.ramoid \n                left join ramo sr on r.ramoid=sr.id \n            inner join asegurado a on a.id=p.tomadorid \n            inner join compania_seguro cs on cs.id=p.companiaseguroid \n            inner join tipo_ramo t on t.id=p.tiporamoid  \n            where s.empresaid= '" + empresaid + "' \n            and to_char(p.fecharegistro, 'YYYYMMDD')::integer>= " + fechainicio + " and to_char(p.fecharegistro, 'YYYYMMDD')::integer<= " + fechafin + " and p.estado  NOT IN ('BAJ') order by p.fechamodificacion desc "; //   console.log(query);
          _context13.next = 6;
          return _database.sequelize.query(query, {
            type: QueryTypes.SELECT
          });
        case 6:
          polizas = _context13.sent;
          //console.log(JSON.stringify(usuarios[0], null, 2));

          res.json({
            polizas: polizas
          });
          _context13.next = 14;
          break;
        case 10:
          _context13.prev = 10;
          _context13.t0 = _context13["catch"](2);
          console.log(_context13.t0);
          res.status(500).json({
            data: {
              estado: false,
              "error": _context13.t0.message
            }
          });
        case 14:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[2, 10]]);
  }));
  return _polizasPorEmpresaGeneral.apply(this, arguments);
}
function polizasPorSucursalGeneral(_x27, _x28) {
  return _polizasPorSucursalGeneral.apply(this, arguments);
}
function _polizasPorSucursalGeneral() {
  _polizasPorSucursalGeneral = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var _req$params5, tipopoliza, tiporamoid, sucursalid, _req$body6, fechainicio, fechafin, query, polizas;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _req$params5 = req.params, tipopoliza = _req$params5.tipopoliza, tiporamoid = _req$params5.tiporamoid, sucursalid = _req$params5.sucursalid;
          _req$body6 = req.body, fechainicio = _req$body6.fechainicio, fechafin = _req$body6.fechafin;
          _context14.prev = 2;
          query = "select p.* ,t.nombre tiporamo,sr.nombre nombreramopadre,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal\n        from poliza p\n        inner join sucursal s on s.id=p.sucursalid\n        inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid\n        inner join ramo r on r.id=rc.ramoid\n        left join ramo sr on sr.id=rc.ramopadreid\n        inner join asegurado a on a.id=p.tomadorid\n        inner join compania_seguro cs on cs.id=p.companiaseguroid\n        inner join tipo_ramo t on t.id=p.tiporamoid\n        where s.id='" + sucursalid + "'  and to_char(p.fecharegistro, 'YYYYMMDD')::integer>= " + fechainicio + " and to_char(p.fecharegistro, 'YYYYMMDD')::integer<= " + fechafin + " and p.estado NOT IN ('BAJ') order by p.fechamodificacion desc ";
          _context14.next = 6;
          return _database.sequelize.query(query, {
            type: QueryTypes.SELECT
          });
        case 6:
          polizas = _context14.sent;
          //console.log(JSON.stringify(usuarios[0], null, 2));
          //console.log(query);
          res.json({
            polizas: polizas
          });
          _context14.next = 14;
          break;
        case 10:
          _context14.prev = 10;
          _context14.t0 = _context14["catch"](2);
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
    }, _callee14, null, [[2, 10]]);
  }));
  return _polizasPorSucursalGeneral.apply(this, arguments);
}
function getPolizasPorEmpresaFechaVencimiento(_x29, _x30) {
  return _getPolizasPorEmpresaFechaVencimiento.apply(this, arguments);
}
function _getPolizasPorEmpresaFechaVencimiento() {
  _getPolizasPorEmpresaFechaVencimiento = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    var empresaid, _req$body7, fechainicio, fechafin, query, polizas;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          empresaid = req.params.empresaid;
          _req$body7 = req.body, fechainicio = _req$body7.fechainicio, fechafin = _req$body7.fechafin;
          _context15.prev = 2;
          query = "select p.* ,t.nombre tiporamo,sr.nombre nombreramopadre,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal \n            from poliza p\n            inner join sucursal s on s.id=p.sucursalid\n            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid\n            inner join ramo r on r.id=rc.ramoid\n            left join ramo sr on sr.id=rc.ramopadreid\n            inner join asegurado a on a.id=p.tomadorid\n            inner join compania_seguro cs on cs.id=p.companiaseguroid\n             inner join tipo_ramo t on t.id=p.tiporamoid\n             where s.empresaid= '" + empresaid + "'   and to_char(p.fechafin, 'YYYYMMDD')::integer>= " + fechainicio + " and to_char(p.fechafin, 'YYYYMMDD')::integer<= " + fechafin + " and p.estado NOT IN ('BAJ') order by p.fechamodificacion desc "; //console.log(query);
          _context15.next = 6;
          return _database.sequelize.query(query, {
            type: QueryTypes.SELECT
          });
        case 6:
          polizas = _context15.sent;
          //console.log(JSON.stringify(usuarios[0], null, 2));

          res.json({
            polizas: polizas
          });
          _context15.next = 14;
          break;
        case 10:
          _context15.prev = 10;
          _context15.t0 = _context15["catch"](2);
          console.log(_context15.t0);
          res.status(500).json({
            data: {
              estado: false,
              "error": _context15.t0.message
            }
          });
        case 14:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[2, 10]]);
  }));
  return _getPolizasPorEmpresaFechaVencimiento.apply(this, arguments);
}
function getPolizasPorSucursalVencimiento(_x31, _x32) {
  return _getPolizasPorSucursalVencimiento.apply(this, arguments);
}
function _getPolizasPorSucursalVencimiento() {
  _getPolizasPorSucursalVencimiento = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res) {
    var sucursalid, _req$body8, fechainicio, fechafin, query, polizas;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          sucursalid = req.params.sucursalid;
          _req$body8 = req.body, fechainicio = _req$body8.fechainicio, fechafin = _req$body8.fechafin;
          _context16.prev = 2;
          query = "select p.*,t.nombre tiporamo ,sr.nombre nombreramopadre,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal  \n          \n            from poliza p \n            inner join sucursal s on s.id=p.sucursalid  \n            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid \n            inner join ramo r on r.id=rc.ramoid \n                left join ramo sr on r.ramoid=sr.id \n            inner join asegurado a on a.id=p.tomadorid \n            inner join compania_seguro cs on cs.id=p.companiaseguroid\n            inner join tipo_ramo t on t.id=p.tiporamoid\n            where s.id='" + sucursalid + "'    and to_char(p.fechafin, 'YYYYMMDD')::integer>= " + fechainicio + " and to_char(p.fechafin, 'YYYYMMDD')::integer<= " + fechafin + " and p.estado NOT IN ('BAJ') order by p.fechamodificacion desc ";
          _context16.next = 6;
          return _database.sequelize.query(query, {
            type: QueryTypes.SELECT
          });
        case 6:
          polizas = _context16.sent;
          //console.log(JSON.stringify(usuarios[0], null, 2));
          //console.log(query);
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
    }, _callee16, null, [[2, 10]]);
  }));
  return _getPolizasPorSucursalVencimiento.apply(this, arguments);
}
function getPolizasPorTomadorYEmpresa(_x33, _x34) {
  return _getPolizasPorTomadorYEmpresa.apply(this, arguments);
}
function _getPolizasPorTomadorYEmpresa() {
  _getPolizasPorTomadorYEmpresa = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res) {
    var _req$params6, tomadorid, empresaid, query, polizas;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          _req$params6 = req.params, tomadorid = _req$params6.tomadorid, empresaid = _req$params6.empresaid;
          _context17.prev = 1;
          //console.log(tomadorid, empresaid );
          query = "select p.* ,t.nombre tiporamo,sr.nombre nombreramopadre,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal \n            from poliza p \n            inner join sucursal s on s.id=p.sucursalid  \n            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid \n            inner join ramo r on r.id=rc.ramoid \n                left join ramo sr on r.ramoid=sr.id \n            inner join asegurado a on a.id=p.tomadorid \n            inner join compania_seguro cs on cs.id=p.companiaseguroid \n            inner join tipo_ramo t on t.id=p.tiporamoid  \n            where s.empresaid= '" + empresaid + "' and a.id='" + tomadorid + "' and p.estado NOT IN ('BAJ') order by p.fechamodificacion desc "; //console.log(query );
          _context17.next = 5;
          return _database.sequelize.query(query, {
            type: QueryTypes.SELECT
          });
        case 5:
          polizas = _context17.sent;
          //console.log(JSON.stringify(usuarios[0], null, 2));

          res.json({
            polizas: polizas
          });
          _context17.next = 13;
          break;
        case 9:
          _context17.prev = 9;
          _context17.t0 = _context17["catch"](1);
          console.log(_context17.t0);
          res.status(500).json({
            data: {
              estado: false,
              "error": _context17.t0.message
            }
          });
        case 13:
        case "end":
          return _context17.stop();
      }
    }, _callee17, null, [[1, 9]]);
  }));
  return _getPolizasPorTomadorYEmpresa.apply(this, arguments);
}
function getPolizasPorTomadorYSucursal(_x35, _x36) {
  return _getPolizasPorTomadorYSucursal.apply(this, arguments);
}
function _getPolizasPorTomadorYSucursal() {
  _getPolizasPorTomadorYSucursal = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18(req, res) {
    var _req$params7, tomadorid, sucursalid, polizas;
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          _req$params7 = req.params, tomadorid = _req$params7.tomadorid, sucursalid = _req$params7.sucursalid;
          _context18.prev = 1;
          _context18.next = 4;
          return _database.sequelize.query("select p.* t.nombre tiporamo,sr.nombre nombreramopadre,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania ,s.nombre as sucursal \n           \n            from poliza p \n            inner join sucursal s on s.id=p.sucursalid  \n            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid \n            inner join ramo r on r.id=rc.ramoid \n                left join ramo sr on r.ramoid=sr.id \n            inner join asegurado a on a.id=p.tomadorid \n            inner join compania_seguro cs on cs.id=p.companiaseguroid \n            inner join tipo_ramo t on t.id=p.tiporamoid  \n            where s.id='" + sucursalid + "'  and a.id='" + tomadorid + "' and p.estado NOT IN ('BAJ')  order by p.fechamodificacion desc ", {
            type: QueryTypes.SELECT
          });
        case 4:
          polizas = _context18.sent;
          //console.log(JSON.stringify(usuarios[0], null, 2));

          res.json({
            polizas: polizas
          });
          _context18.next = 12;
          break;
        case 8:
          _context18.prev = 8;
          _context18.t0 = _context18["catch"](1);
          console.log(_context18.t0);
          res.status(500).json({
            data: {
              estado: false,
              "error": _context18.t0.message
            }
          });
        case 12:
        case "end":
          return _context18.stop();
      }
    }, _callee18, null, [[1, 8]]);
  }));
  return _getPolizasPorTomadorYSucursal.apply(this, arguments);
}
function getPolizasPorEmpresaSinMemo(_x37, _x38) {
  return _getPolizasPorEmpresaSinMemo.apply(this, arguments);
}
function _getPolizasPorEmpresaSinMemo() {
  _getPolizasPorEmpresaSinMemo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19(req, res) {
    var empresaid, polizas;
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          empresaid = req.params.empresaid;
          _context19.prev = 1;
          _context19.next = 4;
          return _database.sequelize.query("select p.nro,  p.id, p.nropoliza, p.nrocertificado, p.fechainicio, p.fechafin, p.fechaexpedicion, p.fecharecepcion, p.tipomoneda, p.primatotal, p.formapago, p.encargadoid, p.bancoid, p.ciudadexpedicion, p.notas, p.companiaseguroid, p.subramocompaniaid, p.tiporamoid, p.contratanteid, p.tomadorid, p.ejecutivoid, p.colocacionid, p.ciaspvs, p.tipopolizaid, p.tpoliza, p.tipocontrato, p.memoid, p.vendedorid, null tipoemision, p.franquicia, p.valorasegurado, p.comisionbs, p.comisionusd, p.tipocambio, p.porcentajeprima, p.primaneta, p.porcentajecomision, p.usuarioregistro, p.usuariomodificacion, p.fecharegistro, p.fechamodificacion, p.estado, p.sucursalid, p.planid, p.polizaid \n            ,sr.nombre nombreramopadre,case when sr.id is null then r.nombre else sr.nombre end nombreramo,case when  sr.id is null then null else r.nombre end nombresubramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal ,t.nombre tiporamo,pe.nombrecompleto ejecutivo,car.nombrecompleto cartera\n            from poliza p\n            inner join sucursal s on s.id=p.sucursalid\n            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid\n            inner join ramo r on r.id=rc.ramoid\n            left join ramo sr on sr.id=rc.ramopadreid\n            inner join asegurado a on a.id=p.tomadorid\n            inner join tipo_ramo t on t.id=p.tiporamoid\n            inner join compania_seguro cs on cs.id=p.companiaseguroid\n            inner join personal pe on pe.id=p.ejecutivoid\n            inner join personal car on car.id=a.carteraid \n            left join memo m on m.polizaid=p.id and m.estado='ACT' \n            where m.polizaid is null and  s.empresaid= '" + empresaid + "' AND p.estado IN ('ACT','CER') order by p.fechamodificacion desc ", {
            type: QueryTypes.SELECT
          });
        case 4:
          polizas = _context19.sent;
          //console.log(JSON.stringify(usuarios[0], null, 2));

          res.json({
            polizas: polizas
          });
          _context19.next = 12;
          break;
        case 8:
          _context19.prev = 8;
          _context19.t0 = _context19["catch"](1);
          console.log(_context19.t0);
          res.status(500).json({
            data: {
              estado: false,
              "error": _context19.t0.message
            }
          });
        case 12:
        case "end":
          return _context19.stop();
      }
    }, _callee19, null, [[1, 8]]);
  }));
  return _getPolizasPorEmpresaSinMemo.apply(this, arguments);
}
function getPolizasPorSucursalSinMemo(_x39, _x40) {
  return _getPolizasPorSucursalSinMemo.apply(this, arguments);
}
/** metodos de siniestro */
function _getPolizasPorSucursalSinMemo() {
  _getPolizasPorSucursalSinMemo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee20(req, res) {
    var sucursalid, QUERY, polizas;
    return _regeneratorRuntime().wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          sucursalid = req.params.sucursalid;
          _context20.prev = 1;
          QUERY = "select p.nro, p.id, p.nropoliza, p.nrocertificado, p.fechainicio, p.fechafin, p.fechaexpedicion, p.fecharecepcion, p.tipomoneda, p.primatotal, p.formapago, p.encargadoid, p.bancoid, p.ciudadexpedicion, p.notas, p.companiaseguroid, p.subramocompaniaid, p.tiporamoid, p.contratanteid, p.tomadorid, p.ejecutivoid, p.colocacionid, p.ciaspvs, p.tipopolizaid, p.tpoliza, p.tipocontrato, p.memoid, p.vendedorid, null tipoemision, p.franquicia, p.valorasegurado, p.comisionbs, p.comisionusd, p.tipocambio, p.porcentajeprima, p.primaneta, p.porcentajecomision, p.usuarioregistro, p.usuariomodificacion, p.fecharegistro, p.fechamodificacion, p.estado, p.sucursalid, p.planid, p.polizaid \n            ,sr.nombre nombreramopadre,case when sr.id is null then r.nombre else sr.nombre end nombreramo,case when  sr.id is null then null else r.nombre end nombresubramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania ,s.nombre as sucursal,t.nombre tiporamo ,pe.nombrecompleto ejecutivo,car.nombrecompleto cartera\n            from poliza p \n            inner join sucursal s on s.id=p.sucursalid  \n            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid\n            inner join ramo r on r.id=rc.ramoid \n            left join ramo sr on r.ramoid=sr.id \n            inner join asegurado a on a.id=p.tomadorid \n            inner join compania_seguro cs on cs.id=p.companiaseguroid \n            left join memo m on m.polizaid=p.id and m.estado='ACT' \n            inner join tipo_ramo t on t.id=p.tiporamoid \n            inner join personal pe on pe.id=p.ejecutivoid\n            inner join personal car on car.id=a.carteraid\n            where m.polizaid is null and s.id='" + sucursalid + "'   and p.estado IN ('ACT','CON','CER') order by p.fechamodificacion desc "; //console.log(QUERY);
          _context20.next = 5;
          return _database.sequelize.query(QUERY, {
            type: QueryTypes.SELECT
          });
        case 5:
          polizas = _context20.sent;
          //console.log(JSON.stringify(usuarios[0], null, 2));

          res.json({
            polizas: polizas
          });
          _context20.next = 13;
          break;
        case 9:
          _context20.prev = 9;
          _context20.t0 = _context20["catch"](1);
          console.log(_context20.t0);
          res.status(500).json({
            data: {
              estado: false,
              "error": _context20.t0.message
            }
          });
        case 13:
        case "end":
          return _context20.stop();
      }
    }, _callee20, null, [[1, 9]]);
  }));
  return _getPolizasPorSucursalSinMemo.apply(this, arguments);
}
function getPolizasPorSucursal(_x41, _x42) {
  return _getPolizasPorSucursal.apply(this, arguments);
}
function _getPolizasPorSucursal() {
  _getPolizasPorSucursal = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee21(req, res) {
    var sucursalid, polizas;
    return _regeneratorRuntime().wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          sucursalid = req.params.sucursalid;
          _context21.prev = 1;
          _context21.next = 4;
          return _database.sequelize.query("select p.id,p.nropoliza,p.nrocertificado,p.fechainicio,p.fechafin,p.fechaexpedicion \n            ,p.primatotal,p.valorasegurado,p.tpoliza,c.nombre as nombrecontratante,p.fecharegistro \n             ,sr.nombre nombreramopadre,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal,t.nombre tiporamo \n            from poliza p \n            inner join sucursal s on s.id=p.sucursalid  \n            inner join contratante c on c.id=p.contratanteid  \n            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid \n            inner join ramo r on r.id=rc.ramoid \n                left join ramo sr on r.ramoid=sr.id \n            inner join asegurado a on a.id=p.tomadorid \n            inner join compania_seguro cs on cs.id=p.companiaseguroid \n            inner join memo m on m.polizaid=p.id and m.estado='ACT' \n             inner join tipo_ramo t on t.id=p.tiporamoid  \n            where  s.id= '" + sucursalid + "'  and p.estado IN ('ACT','CER') order by p.fechamodificacion desc ", {
            type: QueryTypes.SELECT
          });
        case 4:
          polizas = _context21.sent;
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
          _context21.next = 12;
          break;
        case 8:
          _context21.prev = 8;
          _context21.t0 = _context21["catch"](1);
          console.log(_context21.t0);
          res.status(500).json({
            data: {
              estado: false,
              "error": _context21.t0.message
            }
          });
        case 12:
        case "end":
          return _context21.stop();
      }
    }, _callee21, null, [[1, 8]]);
  }));
  return _getPolizasPorSucursal.apply(this, arguments);
}
function getPolizasPorEmpresa(_x43, _x44) {
  return _getPolizasPorEmpresa.apply(this, arguments);
}
function _getPolizasPorEmpresa() {
  _getPolizasPorEmpresa = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee22(req, res) {
    var empresaid, polizas;
    return _regeneratorRuntime().wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          empresaid = req.params.empresaid;
          _context22.prev = 1;
          _context22.next = 4;
          return _database.sequelize.query("select p.id,p.nropoliza,p.nrocertificado,p.fechainicio,p.fechafin,p.fechaexpedicion \n            ,p.primatotal ,p.valorasegurado,p.tpoliza,c.nombre as nombrecontratante,p.fecharegistro \n             ,sr.nombre nombreramopadre,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal, t.nombre tiporamo \n            from poliza p \n            inner join sucursal s on s.id=p.sucursalid  \n            inner join contratante c on c.id=p.contratanteid  \n            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid \n            inner join ramo r on r.id=rc.ramoid \n            left join ramo sr on r.ramoid=sr.id \n            inner join asegurado a on a.id=p.tomadorid \n            inner join compania_seguro cs on cs.id=p.companiaseguroid \n            inner join memo m on m.polizaid=p.id and m.estado='ACT' \n             inner join tipo_ramo t on t.id=p.tiporamoid  \n            where  s.empresaid= '" + empresaid + "'  and p.estado IN ('ACT','CER') order by p.fechamodificacion desc ", {
            type: QueryTypes.SELECT
          });
        case 4:
          polizas = _context22.sent;
          //console.log(JSON.stringify(usuarios[0], null, 2));

          res.json({
            polizas: polizas
          });
          _context22.next = 12;
          break;
        case 8:
          _context22.prev = 8;
          _context22.t0 = _context22["catch"](1);
          console.log(_context22.t0);
          res.status(500).json({
            data: {
              estado: false,
              "error": _context22.t0.message
            }
          });
        case 12:
        case "end":
          return _context22.stop();
      }
    }, _callee22, null, [[1, 8]]);
  }));
  return _getPolizasPorEmpresa.apply(this, arguments);
}
function getPolizasPorSucursalYTipo(_x45, _x46) {
  return _getPolizasPorSucursalYTipo.apply(this, arguments);
}
function _getPolizasPorSucursalYTipo() {
  _getPolizasPorSucursalYTipo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee23(req, res) {
    var _req$params8, sucursalid, tipopolizaid, tiporamoid, polizas;
    return _regeneratorRuntime().wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          _req$params8 = req.params, sucursalid = _req$params8.sucursalid, tipopolizaid = _req$params8.tipopolizaid, tiporamoid = _req$params8.tiporamoid;
          _context23.prev = 1;
          _context23.next = 4;
          return _database.sequelize.query("WITH DetallePoliza AS (\n            SELECT\n                pd.polizaid,\n                STRING_AGG(a.nombre || ' : ' || pd.valor, ', ' ORDER BY a.nombre) AS detalle\n            FROM\n                poliza_detalles pd\n                INNER JOIN atributo a ON a.id = pd.atributoid AND a.importante = true\n            WHERE\n                pd.estado = 'ACT'\n            GROUP BY\n                pd.polizaid\n        )\n        \n        select p.id,p.nropoliza,p.nrocertificado,p.fechainicio,p.fechafin,p.fechaexpedicion \n            ,p.primatotal,p.valorasegurado,p.tpoliza,c.nombre as nombrecontratante,p.fecharegistro ,p.sucursalid,p.companiaseguroid\n             ,sr.nombre nombreramopadre,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal ,t.nombre tiporamo  ,\n             dp.detalle\n             --( select   string_agg(a.nombre || ' : ' || pd2 .valor , ', ' order by a.nombre) \n             --from poliza_detalles pd2   \n             --inner join atributo a on a.id=pd2.atributoid and a.importante =true\n             --where pd2.estado='ACT' AND pd2 .polizaid =p.id \n             --         group by polizaid) detalle\n            from poliza p \n            inner join sucursal s on s.id=p.sucursalid  \n            inner join contratante c on c.id=p.contratanteid  \n            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid \n            inner join ramo r on r.id=rc.ramoid \n                left join ramo sr on r.ramoid=sr.id \n            inner join asegurado a on a.id=p.tomadorid \n            inner join compania_seguro cs on cs.id=p.companiaseguroid \n            inner join memo m on m.polizaid=p.id and m.estado='ACT' \n             inner join tipo_ramo t on t.id=p.tiporamoid\n             left JOIN DetallePoliza dp ON dp.polizaid = p.id  \n            where  s.id= '" + sucursalid + "'  and p.estado IN ('ACT','CER')  and  p.tpoliza='" + tipopolizaid + "' and p.tiporamoid='" + tiporamoid + "'  order by p.fechamodificacion desc ", {
            type: QueryTypes.SELECT
          });
        case 4:
          polizas = _context23.sent;
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
          _context23.next = 12;
          break;
        case 8:
          _context23.prev = 8;
          _context23.t0 = _context23["catch"](1);
          console.log(_context23.t0);
          res.status(500).json({
            data: {
              estado: false,
              "error": _context23.t0.message
            }
          });
        case 12:
        case "end":
          return _context23.stop();
      }
    }, _callee23, null, [[1, 8]]);
  }));
  return _getPolizasPorSucursalYTipo.apply(this, arguments);
}
function getPolizasPorEmpresaYTipo(_x47, _x48) {
  return _getPolizasPorEmpresaYTipo.apply(this, arguments);
}
/**busquedas por detalle */
function _getPolizasPorEmpresaYTipo() {
  _getPolizasPorEmpresaYTipo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee24(req, res) {
    var _req$params9, empresaid, tipopolizaid, tiporamoid, polizas;
    return _regeneratorRuntime().wrap(function _callee24$(_context24) {
      while (1) switch (_context24.prev = _context24.next) {
        case 0:
          _req$params9 = req.params, empresaid = _req$params9.empresaid, tipopolizaid = _req$params9.tipopolizaid, tiporamoid = _req$params9.tiporamoid;
          _context24.prev = 1;
          _context24.next = 4;
          return _database.sequelize.query("WITH DetallePoliza AS (\n            SELECT\n                pd.polizaid,\n                STRING_AGG(a.nombre || ' : ' || pd.valor, ', ' ORDER BY a.nombre) AS detalle\n            FROM\n                poliza_detalles pd\n                INNER JOIN atributo a ON a.id = pd.atributoid AND a.importante = true\n            WHERE\n                pd.estado = 'ACT'\n            GROUP BY\n                pd.polizaid\n        )\n        select p.id,p.nropoliza,p.nrocertificado,p.fechainicio,p.fechafin,p.fechaexpedicion \n            ,p.primatotal ,p.valorasegurado,p.tpoliza,c.nombre as nombrecontratante,p.fecharegistro ,p.sucursalid,p.companiaseguroid\n             ,sr.nombre nombreramopadre,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal ,t.nombre tiporamo ,\n             dp.detalle\n             --( select   string_agg(a.nombre || ' : ' || pd2 .valor , ', ' order by a.nombre) \n             --from poliza_detalles pd2   \n             --inner join atributo a on a.id=pd2.atributoid and a.importante =true\n             --where pd2.estado='ACT' AND pd2 .polizaid =p.id \n             --         group by polizaid) detalle\n            from poliza p \n            inner join sucursal s on s.id=p.sucursalid  \n            inner join contratante c on c.id=p.contratanteid  \n            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid \n            inner join ramo r on r.id=rc.ramoid\n            left join ramo p on r.ramoid=p.id\n            inner join asegurado a on a.id=p.tomadorid \n            inner join compania_seguro cs on cs.id=p.companiaseguroid \n            inner join memo m on m.polizaid=p.id and m.estado='ACT' \n             inner join tipo_ramo t on t.id=p.tiporamoid\n             left JOIN DetallePoliza dp ON dp.polizaid = p.id  \n            where  s.empresaid= '" + empresaid + "'  and p.estado IN ('ACT','CER') and  p.tpoliza='" + tipopolizaid + "' and p.tiporamoid='" + tiporamoid + "' order by p.fechamodificacion desc ", {
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
    }, _callee24, null, [[1, 8]]);
  }));
  return _getPolizasPorEmpresaYTipo.apply(this, arguments);
}
function getBuscarPolizasDetallePorSucursal(_x49, _x50) {
  return _getBuscarPolizasDetallePorSucursal.apply(this, arguments);
}
function _getBuscarPolizasDetallePorSucursal() {
  _getBuscarPolizasDetallePorSucursal = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee25(req, res) {
    var sucursalid, dato, polizas;
    return _regeneratorRuntime().wrap(function _callee25$(_context25) {
      while (1) switch (_context25.prev = _context25.next) {
        case 0:
          sucursalid = req.params.sucursalid;
          dato = req.body.dato;
          _context25.prev = 2;
          _context25.next = 5;
          return _database.sequelize.query("\tselect p.*,s.nombre sucursal,r.nombre ramo,cs.nombre companiaseguro\n        from poliza p \n        inner join poliza_detalles pda2 on pda2 .polizaid =p.id and pda2.estado='ACT'\n        inner join sucursal s on s.id=p.sucursalid\n        inner join sub_ramo_compania sr on sr.id=subramocompaniaid\n        inner join ramo r on r.id=sr.ramoid\n        inner join compania_seguro cs  on cs.id=p.companiaseguroid \n        where (pda2.valor  like '%" + dato + "%' )\n        and   s.id= '" + sucursalid + "'   and p.estado IN ('ACT','CER')\n        order by fechamodificacion desc  "
          //where (pda2.placa like '%`+dato+`%' or pda2.colorvehiculo like '%`+dato+`%' or pda2.marcavehiculo like '%`+dato+`%' or pda2.titular like '%`+dato+`%') s.id= '` + sucursalid + `'  and p.estado IN ('ACT','CER')  and  p.tpoliza='` + tipopolizaid + `'  order by p.fechamodificacion desc `
          , {
            type: QueryTypes.SELECT
          });
        case 5:
          polizas = _context25.sent;
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
          _context25.next = 13;
          break;
        case 9:
          _context25.prev = 9;
          _context25.t0 = _context25["catch"](2);
          console.log(_context25.t0);
          res.status(500).json({
            data: {
              estado: false,
              "error": _context25.t0.message
            }
          });
        case 13:
        case "end":
          return _context25.stop();
      }
    }, _callee25, null, [[2, 9]]);
  }));
  return _getBuscarPolizasDetallePorSucursal.apply(this, arguments);
}
function getBuscarPolizasDetallePorEmpresa(_x51, _x52) {
  return _getBuscarPolizasDetallePorEmpresa.apply(this, arguments);
}
function _getBuscarPolizasDetallePorEmpresa() {
  _getBuscarPolizasDetallePorEmpresa = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee26(req, res) {
    var empresaid, dato, polizas;
    return _regeneratorRuntime().wrap(function _callee26$(_context26) {
      while (1) switch (_context26.prev = _context26.next) {
        case 0:
          empresaid = req.params.empresaid; //console.log( req.body)
          dato = req.body.dato;
          _context26.prev = 2;
          _context26.next = 5;
          return _database.sequelize.query("\tselect p.*,s.nombre sucursal,r.nombre ramo,cs.nombre companiaseguro\n            from poliza p \n            inner join poliza_detalles pda2 on pda2 .polizaid =p.id and pda2.estado='ACT'\n            inner join sucursal s on s.id=p.sucursalid\n            inner join sub_ramo_compania sr on sr.id=subramocompaniaid\n            inner join ramo r on r.id=sr.ramoid\n            inner join compania_seguro cs  on cs.id=p.companiaseguroid \n            where (pda2.valor  like '%" + dato + "%' )\n            and  s.empresaid= '" + empresaid + "'  and p.estado IN ('ACT','CER')\n            order by fechamodificacion desc  "
          //where (pda2.placa like '%`+dato+`%' or pda2.colorvehiculo like '%`+dato+`%' or pda2.marcavehiculo like '%`+dato+`%' or pda2.titular like '%`+dato+`%') s.id= '` + sucursalid + `'  and p.estado IN ('ACT','CER')  and  p.tpoliza='` + tipopolizaid + `'  order by p.fechamodificacion desc `
          , {
            type: QueryTypes.SELECT
          });
        case 5:
          polizas = _context26.sent;
          res.json({
            data: polizas
          });
          _context26.next = 13;
          break;
        case 9:
          _context26.prev = 9;
          _context26.t0 = _context26["catch"](2);
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
    }, _callee26, null, [[2, 9]]);
  }));
  return _getBuscarPolizasDetallePorEmpresa.apply(this, arguments);
}
function getPolizasDetalleAutomotorPorSucursalYTipo(_x53, _x54) {
  return _getPolizasDetalleAutomotorPorSucursalYTipo.apply(this, arguments);
}
function _getPolizasDetalleAutomotorPorSucursalYTipo() {
  _getPolizasDetalleAutomotorPorSucursalYTipo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee27(req, res) {
    var _req$params10, dato, sucursalid, tipopolizaid, polizas;
    return _regeneratorRuntime().wrap(function _callee27$(_context27) {
      while (1) switch (_context27.prev = _context27.next) {
        case 0:
          _req$params10 = req.params, dato = _req$params10.dato, sucursalid = _req$params10.sucursalid, tipopolizaid = _req$params10.tipopolizaid;
          _context27.prev = 1;
          _context27.next = 4;
          return _database.sequelize.query("select p.*\n        from poliza p \n        inner join poliza_detalles pda2 on pda2 .polizaid =p.id  and pda2.estado='ACT'\n        inner join sucursal s on s.id=p.sucursalid  \n        where (pda2.valor  like '%" + dato + "%' ) and s.id= '" + sucursalid + "'  and p.estado IN ('ACT','CER')  and  p.tpoliza='" + tipopolizaid + "'  order by p.fechamodificacion desc ", {
            type: QueryTypes.SELECT
          });
        case 4:
          polizas = _context27.sent;
          res.json({
            data: polizas
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
    }, _callee27, null, [[1, 8]]);
  }));
  return _getPolizasDetalleAutomotorPorSucursalYTipo.apply(this, arguments);
}
function getPolizasDetalleAutomotorPorEmpresaYTipo(_x55, _x56) {
  return _getPolizasDetalleAutomotorPorEmpresaYTipo.apply(this, arguments);
}
function _getPolizasDetalleAutomotorPorEmpresaYTipo() {
  _getPolizasDetalleAutomotorPorEmpresaYTipo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee28(req, res) {
    var _req$params11, dato, empresaid, tipopolizaid, polizas;
    return _regeneratorRuntime().wrap(function _callee28$(_context28) {
      while (1) switch (_context28.prev = _context28.next) {
        case 0:
          _req$params11 = req.params, dato = _req$params11.dato, empresaid = _req$params11.empresaid, tipopolizaid = _req$params11.tipopolizaid;
          _context28.prev = 1;
          _context28.next = 4;
          return _database.sequelize.query("select p.*\n        from poliza p \n        inner join poliza_detalles pda2 on pda2 .polizaid =p.id  pda2.estado='ACT'\n        inner join sucursal s on s.id=p.sucursalid  \n        inner join empresa e on e.id =s.empresaid  \n        where (pda2.valor  like '%" + dato + "%' ) and e.id= '" + empresaid + "'  and p.estado IN ('ACT','CER')  and  p.tpoliza='" + tipopolizaid + "'  order by p.fechamodificacion desc ", {
            type: QueryTypes.SELECT
          });
        case 4:
          polizas = _context28.sent;
          res.json({
            data: polizas
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
    }, _callee28, null, [[1, 8]]);
  }));
  return _getPolizasDetalleAutomotorPorEmpresaYTipo.apply(this, arguments);
}
function getPolizasDetalleGeneralPorSucursalYTipo(_x57, _x58) {
  return _getPolizasDetalleGeneralPorSucursalYTipo.apply(this, arguments);
}
function _getPolizasDetalleGeneralPorSucursalYTipo() {
  _getPolizasDetalleGeneralPorSucursalYTipo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee29(req, res) {
    var _req$params12, dato, sucursalid, tipopolizaid, polizas;
    return _regeneratorRuntime().wrap(function _callee29$(_context29) {
      while (1) switch (_context29.prev = _context29.next) {
        case 0:
          _req$params12 = req.params, dato = _req$params12.dato, sucursalid = _req$params12.sucursalid, tipopolizaid = _req$params12.tipopolizaid;
          _context29.prev = 1;
          _context29.next = 4;
          return _database.sequelize.query("select p.*\n        from poliza p \n        inner join poliza_detalles pda2 on pda2 .polizaid =p.id  and pda2.estado='ACT'\n        inner join sucursal s on s.id=p.sucursalid  \n        where (pda2.valor  like '%" + dato + "%' ) and s.id= '" + sucursalid + "'  and p.estado IN ('ACT','CER')  and  p.tpoliza='" + tipopolizaid + "'  order by p.fechamodificacion desc ", {
            type: QueryTypes.SELECT
          });
        case 4:
          polizas = _context29.sent;
          res.json({
            data: polizas
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
    }, _callee29, null, [[1, 8]]);
  }));
  return _getPolizasDetalleGeneralPorSucursalYTipo.apply(this, arguments);
}
function getPolizasDetalleGeneralPorEmpresaYTipo(_x59, _x60) {
  return _getPolizasDetalleGeneralPorEmpresaYTipo.apply(this, arguments);
}
function _getPolizasDetalleGeneralPorEmpresaYTipo() {
  _getPolizasDetalleGeneralPorEmpresaYTipo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee30(req, res) {
    var _req$params13, dato, empresaid, tipopolizaid, polizas;
    return _regeneratorRuntime().wrap(function _callee30$(_context30) {
      while (1) switch (_context30.prev = _context30.next) {
        case 0:
          _req$params13 = req.params, dato = _req$params13.dato, empresaid = _req$params13.empresaid, tipopolizaid = _req$params13.tipopolizaid;
          _context30.prev = 1;
          _context30.next = 4;
          return _database.sequelize.query("select p.*\n        from poliza p \n        inner join poliza_detalles pda2 on pda2 .polizaid =p.id  pda2.estado='ACT'\n        inner join sucursal s on s.id=p.sucursalid  \n        inner join empresa e on e.id =s.empresaid  \n        where (pda2.valor  like '%" + dato + "%' ) and e.id= '" + empresaid + "'  and p.estado IN ('ACT','CER')  and  p.tpoliza='" + tipopolizaid + "'  order by p.fechamodificacion desc ", {
            type: QueryTypes.SELECT
          });
        case 4:
          polizas = _context30.sent;
          res.json({
            data: polizas
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
    }, _callee30, null, [[1, 8]]);
  }));
  return _getPolizasDetalleGeneralPorEmpresaYTipo.apply(this, arguments);
}
function getPolizasDetalleSaludPorSucursalYTipo(_x61, _x62) {
  return _getPolizasDetalleSaludPorSucursalYTipo.apply(this, arguments);
}
function _getPolizasDetalleSaludPorSucursalYTipo() {
  _getPolizasDetalleSaludPorSucursalYTipo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee31(req, res) {
    var _req$params14, dato, sucursalid, tipopolizaid, polizas;
    return _regeneratorRuntime().wrap(function _callee31$(_context31) {
      while (1) switch (_context31.prev = _context31.next) {
        case 0:
          _req$params14 = req.params, dato = _req$params14.dato, sucursalid = _req$params14.sucursalid, tipopolizaid = _req$params14.tipopolizaid;
          _context31.prev = 1;
          _context31.next = 4;
          return _database.sequelize.query("select p.*\n        from poliza p \n        inner join poliza_detalles pda2 on pda2 .polizaid =p.id  and pda2.estado='ACT'\n        inner join sucursal s on s.id=p.sucursalid  \n        where (pda2.valor  like '%" + dato + "%' ) and s.id= '" + sucursalid + "'  and p.estado IN ('ACT','CER')  and  p.tpoliza='" + tipopolizaid + "'  order by p.fechamodificacion desc ", {
            type: QueryTypes.SELECT
          });
        case 4:
          polizas = _context31.sent;
          res.json({
            data: polizas
          });
          _context31.next = 12;
          break;
        case 8:
          _context31.prev = 8;
          _context31.t0 = _context31["catch"](1);
          console.log(_context31.t0);
          res.status(500).json({
            data: {
              estado: false,
              "error": _context31.t0.message
            }
          });
        case 12:
        case "end":
          return _context31.stop();
      }
    }, _callee31, null, [[1, 8]]);
  }));
  return _getPolizasDetalleSaludPorSucursalYTipo.apply(this, arguments);
}
function getPolizasDetalleSaludPorEmpresaYTipo(_x63, _x64) {
  return _getPolizasDetalleSaludPorEmpresaYTipo.apply(this, arguments);
}
function _getPolizasDetalleSaludPorEmpresaYTipo() {
  _getPolizasDetalleSaludPorEmpresaYTipo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee32(req, res) {
    var _req$params15, dato, empresaid, tipopolizaid, polizas;
    return _regeneratorRuntime().wrap(function _callee32$(_context32) {
      while (1) switch (_context32.prev = _context32.next) {
        case 0:
          _req$params15 = req.params, dato = _req$params15.dato, empresaid = _req$params15.empresaid, tipopolizaid = _req$params15.tipopolizaid;
          _context32.prev = 1;
          _context32.next = 4;
          return _database.sequelize.query("select p.*\n        from poliza p \n        inner join poliza_detalles pda2 on pda2 .polizaid =p.id  pda2.estado='ACT'\n        inner join sucursal s on s.id=p.sucursalid  \n        inner join empresa e on e.id =s.empresaid  \n        where (pda2.valor  like '%" + dato + "%' ) and e.id= '" + empresaid + "'  and p.estado IN ('ACT','CER')  and  p.tpoliza='" + tipopolizaid + "'  order by p.fechamodificacion desc ", {
            type: QueryTypes.SELECT
          });
        case 4:
          polizas = _context32.sent;
          res.json({
            data: polizas
          });
          _context32.next = 12;
          break;
        case 8:
          _context32.prev = 8;
          _context32.t0 = _context32["catch"](1);
          console.log(_context32.t0);
          res.status(500).json({
            data: {
              estado: false,
              "error": _context32.t0.message
            }
          });
        case 12:
        case "end":
          return _context32.stop();
      }
    }, _callee32, null, [[1, 8]]);
  }));
  return _getPolizasDetalleSaludPorEmpresaYTipo.apply(this, arguments);
}
function vencimientoPoliza(_x65, _x66) {
  return _vencimientoPoliza.apply(this, arguments);
}
function _vencimientoPoliza() {
  _vencimientoPoliza = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee33(req, res) {
    var id, personals, NewEnvioCorreo, dir;
    return _regeneratorRuntime().wrap(function _callee33$(_context33) {
      while (1) switch (_context33.prev = _context33.next) {
        case 0:
          id = req.params.id;
          _context33.prev = 1;
          _context33.next = 4;
          return _database.sequelize.query("  select cs.nombre nombrecompania,a.correocobranza,a.direccionasegurado,a.nombrecompleto as nombreasegurado,a.telefonoasegurado,a.telefonodomicilio,r.nombre nombreramo,s.nombre as sucursal,p.nropoliza ,p.valorasegurado ,p.fechafin \n        from poliza p \n        inner join sucursal s on s.id=p.sucursalid \n        inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid \n        inner join ramo r on r.id=rc.ramoid\n        inner join asegurado a on a.id=p.tomadorid \n        inner join compania_seguro cs on cs.id=p.companiaseguroid \n        where \n        p.id= '" + id + "'\n        order by cs.nombre,a.nombrecompleto,p.fechamodificacion desc ", {
            type: QueryTypes.SELECT
          });
        case 4:
          personals = _context33.sent;
          _context33.next = 7;
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
          NewEnvioCorreo = _context33.sent;
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
            };
            //envio de correo
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
          });
          //res.json({ data: personals });
          _context33.next = 16;
          break;
        case 12:
          _context33.prev = 12;
          _context33.t0 = _context33["catch"](1);
          console.log(_context33.t0);
          res.status(500).json({
            data: {
              estado: false,
              "error": _context33.t0.message
            }
          });
        case 16:
        case "end":
          return _context33.stop();
      }
    }, _callee33, null, [[1, 12]]);
  }));
  return _vencimientoPoliza.apply(this, arguments);
}
function obtenerPoliza(_x67, _x68) {
  return _obtenerPoliza.apply(this, arguments);
}
function _obtenerPoliza() {
  _obtenerPoliza = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee34(req, res) {
    var id, personals;
    return _regeneratorRuntime().wrap(function _callee34$(_context34) {
      while (1) switch (_context34.prev = _context34.next) {
        case 0:
          id = req.params.id;
          _context34.prev = 1;
          _context34.next = 4;
          return _database.sequelize.query(" select * from obtenerPoliza('" + id + "')  ", {
            type: QueryTypes.SELECT
          });
        case 4:
          personals = _context34.sent;
          res.json({
            data: personals
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
    }, _callee34, null, [[1, 8]]);
  }));
  return _obtenerPoliza.apply(this, arguments);
}
function obtenerDetallesPorPoliza(_x69, _x70) {
  return _obtenerDetallesPorPoliza.apply(this, arguments);
}
function _obtenerDetallesPorPoliza() {
  _obtenerDetallesPorPoliza = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee35(req, res) {
    var id, detalle;
    return _regeneratorRuntime().wrap(function _callee35$(_context35) {
      while (1) switch (_context35.prev = _context35.next) {
        case 0:
          id = req.params.id;
          _context35.prev = 1;
          _context35.next = 4;
          return _database.sequelize.query(" select * from pa_listar_detalle('" + id + "')  ", {
            type: QueryTypes.SELECT
          });
        case 4:
          detalle = _context35.sent;
          res.json({
            data: detalle[0]._row
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
    }, _callee35, null, [[1, 8]]);
  }));
  return _obtenerDetallesPorPoliza.apply(this, arguments);
}