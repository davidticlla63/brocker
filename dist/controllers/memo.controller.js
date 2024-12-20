"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bajaMemo = bajaMemo;
exports.createMemo = createMemo;
exports.deleteMemo = deleteMemo;
exports.getMemoPorTipoYSucursal = getMemoPorTipoYSucursal;
exports.getMemos = getMemos;
exports.getMemosPorTipoRamoYEmpresa = getMemosPorTipoRamoYEmpresa;
exports.getMemosPorTipoRamoYSucursal = getMemosPorTipoRamoYSucursal;
exports.getMemosPorTipoYEmpresa = getMemosPorTipoYEmpresa;
exports.getOneMemo = getOneMemo;
exports.getTotalProduccionMemoPorEmpresa = getTotalProduccionMemoPorEmpresa;
exports.getTotalProduccionMemoPorSucursal = getTotalProduccionMemoPorSucursal;
exports.listarProduccionMesualTXT = listarProduccionMesualTXT;
exports.memosPorEmpresa = memosPorEmpresa;
exports.memosPorSucursal = memosPorSucursal;
exports.updateMemo = updateMemo;
var _database = require("../database/database");
var _Archivo = _interopRequireDefault(require("../models/Archivo"));
var _Memo = _interopRequireDefault(require("../models/Memo"));
var _PlanPago = _interopRequireDefault(require("../models/PlanPago"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var _require = require('sequelize'),
  QueryTypes = _require.QueryTypes;
function getMemos(_x, _x2) {
  return _getMemos.apply(this, arguments);
}
function _getMemos() {
  _getMemos = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var memos;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _Memo["default"].findAll({
            where: {
              estado: 'ACT'
            }
          });
        case 3:
          memos = _context.sent;
          res.json({
            data: memos
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
  return _getMemos.apply(this, arguments);
}
function createMemo(_x3, _x4) {
  return _createMemo.apply(this, arguments);
}
function _createMemo() {
  _createMemo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _req$body, fechamemo, fechapago, nrocuotas, cuotainicial, pagocada, diapago, impuesto, fechaproduccion, mesproduccion, anioproduccion, usuarioregistro, usuariomodificacion, _req$body$estado, estado, sucursalid, polizaid, archivos, planpago, t, newMemo, i, _i, newPlanPago;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, fechamemo = _req$body.fechamemo, fechapago = _req$body.fechapago, nrocuotas = _req$body.nrocuotas, cuotainicial = _req$body.cuotainicial, pagocada = _req$body.pagocada, diapago = _req$body.diapago, impuesto = _req$body.impuesto, fechaproduccion = _req$body.fechaproduccion, mesproduccion = _req$body.mesproduccion, anioproduccion = _req$body.anioproduccion, usuarioregistro = _req$body.usuarioregistro, usuariomodificacion = _req$body.usuariomodificacion, _req$body$estado = _req$body.estado, estado = _req$body$estado === void 0 ? 'ACT' : _req$body$estado, sucursalid = _req$body.sucursalid, polizaid = _req$body.polizaid, archivos = _req$body.archivos, planpago = _req$body.planpago;
          _context2.next = 3;
          return _database.sequelize.transaction();
        case 3:
          t = _context2.sent;
          _context2.prev = 4;
          _context2.next = 7;
          return _Memo["default"].create({
            /*    fechamemo:new Date(fechamemo),
               fechapago :normalizedfechapago, */

            fechamemo: fechamemo,
            fechapago: fechapago,
            nrocuotas: nrocuotas,
            cuotainicial: cuotainicial,
            pagocada: pagocada,
            diapago: diapago,
            impuesto: impuesto,
            fechaproduccion: fechaproduccion,
            mesproduccion: mesproduccion,
            anioproduccion: anioproduccion,
            usuarioregistro: usuarioregistro,
            usuariomodificacion: usuariomodificacion,
            fecharegistro: new Date(),
            fechamodificacion: new Date(),
            estado: estado,
            sucursalid: sucursalid,
            polizaid: polizaid
          }, {
            fields: ['fechamemo', 'fechapago', 'nrocuotas', 'cuotainicial', 'pagocada', 'diapago', 'impuesto', 'fechaproduccion', 'mesproduccion', 'anioproduccion', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado', 'sucursalid', 'polizaid']
          }, {
            transaction: t
          });
        case 7:
          newMemo = _context2.sent;
          i = 0;
        case 9:
          if (!(i < archivos.length)) {
            _context2.next = 15;
            break;
          }
          _context2.next = 12;
          return _Archivo["default"].create({
            codigo: newMemo.id,
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
          if (!planpago) {
            _context2.next = 24;
            break;
          }
          _i = 0;
        case 17:
          if (!(_i < planpago.length)) {
            _context2.next = 24;
            break;
          }
          _context2.next = 20;
          return _PlanPago["default"].create({
            /*     fechapago: planpago[i].fechapago,
                montobs: planpago[i].montobs,
                montousd: planpago[i].montousd,
                porcentaje: planpago[i].porcentaje,
                comisionbs: planpago[i].comisionbs,
                comisionusd: planpago[i].comisionusd, */
            nro: planpago[_i].nro,
            fechapago: planpago[_i].fechapago,
            montocuota: planpago[_i].montocuota,
            primaneta: planpago[_i].primaneta,
            comision: planpago[_i].comision,
            usuarioregistro: usuarioregistro,
            usuariomodificacion: usuariomodificacion,
            fecharegistro: new Date(),
            fechamodificacion: new Date(),
            estado: 'ACT',
            memoid: newMemo.id
          }, {
            fields: [
            /*  'fechapago',
             'montobs',
             'montousd',
             'porcentaje',
             'comisionbs',
             'comisionusd', */
            'nro', 'fechapago', 'montocuota', 'primaneta', 'comision', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado', 'memoid']
          }, {
            transaction: t
          });
        case 20:
          newPlanPago = _context2.sent;
        case 21:
          _i++;
          _context2.next = 17;
          break;
        case 24:
          _context2.next = 26;
          return t.commit();
        case 26:
          if (!newMemo) {
            _context2.next = 28;
            break;
          }
          return _context2.abrupt("return", res.json({
            message: 'Memo created successfully',
            data: newMemo
          }));
        case 28:
          _context2.next = 40;
          break;
        case 30:
          _context2.prev = 30;
          _context2.t0 = _context2["catch"](4);
          console.log(_context2.t0);
          if (!t) {
            _context2.next = 39;
            break;
          }
          _context2.next = 36;
          return t.rollback();
        case 36:
          if (!newMemo) {
            _context2.next = 39;
            break;
          }
          _context2.next = 39;
          return _Memo["default"].destroy({
            where: {
              id: newMemo.id
            }
          });
        case 39:
          res.status(500).json({
            data: {
              estado: false,
              "error": _context2.t0.message
            }
          });
        case 40:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[4, 30]]);
  }));
  return _createMemo.apply(this, arguments);
}
function updateMemo(_x5, _x6) {
  return _updateMemo.apply(this, arguments);
}
function _updateMemo() {
  _updateMemo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var id, _req$body2, fechamemo, fechapago, nrocuotas, cuotainicial, pagocada, diapago, impuesto, fechaproduccion, mesproduccion, anioproduccion, usuarioregistro, usuariomodificacion, fecharegistro, fechamodificacion, estado, sucursalid, polizaid, archivos, archivoseliminados, planpagoliminados, planpago, t, updateRowCount, i, _i2, _i3, newPlanPago, memos;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, fechamemo = _req$body2.fechamemo, fechapago = _req$body2.fechapago, nrocuotas = _req$body2.nrocuotas, cuotainicial = _req$body2.cuotainicial, pagocada = _req$body2.pagocada, diapago = _req$body2.diapago, impuesto = _req$body2.impuesto, fechaproduccion = _req$body2.fechaproduccion, mesproduccion = _req$body2.mesproduccion, anioproduccion = _req$body2.anioproduccion, usuarioregistro = _req$body2.usuarioregistro, usuariomodificacion = _req$body2.usuariomodificacion, fecharegistro = _req$body2.fecharegistro, fechamodificacion = _req$body2.fechamodificacion, estado = _req$body2.estado, sucursalid = _req$body2.sucursalid, polizaid = _req$body2.polizaid, archivos = _req$body2.archivos, archivoseliminados = _req$body2.archivoseliminados, planpagoliminados = _req$body2.planpagoliminados, planpago = _req$body2.planpago;
          _context3.next = 4;
          return _database.sequelize.transaction();
        case 4:
          t = _context3.sent;
          _context3.prev = 5;
          _context3.next = 8;
          return _Memo["default"].update(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
            fechamodificacion: new Date(),
            fechamemo: fechamemo,
            fechapago: fechapago,
            nrocuotas: nrocuotas,
            cuotainicial: cuotainicial,
            pagocada: pagocada,
            diapago: diapago,
            impuesto: impuesto,
            fechaproduccion: fechaproduccion,
            mesproduccion: mesproduccion,
            anioproduccion: anioproduccion,
            usuarioregistro: usuarioregistro,
            usuariomodificacion: usuariomodificacion,
            fecharegistro: fecharegistro
          }, "fechamodificacion", fechamodificacion), "estado", estado), "sucursalid", sucursalid), "polizaid", polizaid), {
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
          _context3.next = 25;
          return _PlanPago["default"].update({
            estado: 'BAJ',
            fechamodificacion: new Date()
          }, {
            where: {
              memoid: id
            }
          }, {
            transaction: t
          });
        case 25:
          _i3 = 0;
        case 26:
          if (!(_i3 < planpago.length)) {
            _context3.next = 33;
            break;
          }
          _context3.next = 29;
          return _PlanPago["default"].create({
            /*    fechapago: planpago[i].fechapago,
               montobs: planpago[i].montobs,
               montousd: planpago[i].montousd,
               porcentaje: planpago[i].porcentaje,
               comisionbs: planpago[i].comisionbs,
               comisionusd: planpago[i].comisionusd, */

            nro: planpago[_i3].nro,
            fechapago: planpago[_i3].fechapago,
            montocuota: planpago[_i3].montocuota,
            primaneta: planpago[_i3].primaneta,
            comision: planpago[_i3].comision,
            usuarioregistro: usuarioregistro,
            usuariomodificacion: usuariomodificacion,
            fecharegistro: new Date(),
            fechamodificacion: new Date(),
            estado: 'ACT',
            memoid: id
          }, {
            fields: [
            /*  'fechapago',
             'montobs',
             'montousd',
             'porcentaje',
             'comisionbs',
             'comisionusd', */

            'nro', 'fechapago', 'montocuota', 'primaneta', 'comision', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado', 'memoid']
          }, {
            transaction: t
          });
        case 29:
          newPlanPago = _context3.sent;
        case 30:
          _i3++;
          _context3.next = 26;
          break;
        case 33:
          _context3.next = 35;
          return t.commit();
        case 35:
          _context3.next = 37;
          return _Memo["default"].findOne({
            where: {
              id: id
            }
          });
        case 37:
          memos = _context3.sent;
          res.json({
            message: 'Memo update successfully',
            count: memos
          });
          _context3.next = 48;
          break;
        case 41:
          _context3.prev = 41;
          _context3.t0 = _context3["catch"](5);
          console.log(_context3.t0);
          if (!t) {
            _context3.next = 47;
            break;
          }
          _context3.next = 47;
          return t.rollback();
        case 47:
          res.status(500).json({
            data: {
              estado: false,
              "error": _context3.t0.message
            }
          });
        case 48:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[5, 41]]);
  }));
  return _updateMemo.apply(this, arguments);
}
function getOneMemo(_x7, _x8) {
  return _getOneMemo.apply(this, arguments);
}
function _getOneMemo() {
  _getOneMemo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var id, memo;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          _context4.next = 4;
          return _Memo["default"].findOne({
            where: {
              id: id
            }
          });
        case 4:
          memo = _context4.sent;
          res.json({
            data: memo
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
  return _getOneMemo.apply(this, arguments);
}
function memosPorSucursal(_x9, _x10) {
  return _memosPorSucursal.apply(this, arguments);
}
function _memosPorSucursal() {
  _memosPorSucursal = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var sucursalid, _req$body3, fechainicio, fechafin, memos;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          sucursalid = req.params.sucursalid;
          _req$body3 = req.body, fechainicio = _req$body3.fechainicio, fechafin = _req$body3.fechafin;
          /* const memo = await Memo.findOne({
              where: {
                  sucursalid, estado: 'ACT'
              }
          }); */
          _context5.next = 5;
          return _database.sequelize.query("select po.ciaspvs,p.*,s.nombre as sucursal,a.nombrecompleto asegurado,c.nombre compania,r.nombre ramo,sr.nombre ramopadre,po.fechainicio,po.fechafin,po.valorasegurado,po.tipomoneda,po.nropoliza,po.nrocertificado,po.fechaexpedicion,po.franquicia,po.primatotal,po.formapago,po.notas observacion,po.fecharecepcion,  \n        d.nombre ciudad,co.nombre contratante,pl.nombre plan,b.nombre subrogado,e.nombrecompleto encargado,ej.nombrecompleto ejecutivo,po.tpoliza,po.comisionbs,po.comisionusd,po.porcentajeprima,po.porcentajecomision ,po.formapago\n\t\t,po.comisionusd,po.comisionbs,po.primanetasus ,po.tipomoneda,case when po.tipomoneda='USD' THEN po.primanetasus* po.tipocambio else po.primaneta end primanetabs,po.primaneta,po.tipoemision\n\t\t,case when po.tipomoneda='USD' THEN po.primatotal* po.tipocambio else po.primatotal end primatotalbs,case when po.tipomoneda='BOL' THEN po.primatotal/ po.tipocambio else po.primatotal end primatotalusd\n             from memo p\n            inner join sucursal s on s.id=p.sucursalid\n            inner join poliza po on po.id=p.polizaid\n            inner join asegurado a on a.id=po.tomadorid\n            inner join sub_ramo_compania src on src.id=po.subramocompaniaid\n            inner join ramo r on r.id=src.ramoid\n            left join ramo sr on sr.id=src.ramopadreid\n            inner join departamento d on d.id=po.ciudadexpedicion\n            inner join contratante co on co.id=po.contratanteid\n            left join plan pl on pl.id=po.planid\n            inner join banco b on b.id=po.bancoid\n            inner join personal e on e.id=po.encargadoid\n            inner join personal ej on ej.id=po.ejecutivoid\n            inner join compania_seguro c on c.id=po.companiaseguroid            \n            where s.id= '" + sucursalid + "' and to_char(p.fecharegistro, 'YYYYMMDD')::integer>=  " + fechainicio + " and to_char(p.fecharegistro, 'YYYYMMDD')::integer<= " + fechafin + " and p.estado='ACT' order by p.fechamodificacion desc ", {
            type: QueryTypes.SELECT
          });
        case 5:
          memos = _context5.sent;
          res.json({
            data: memos
          });
          _context5.next = 13;
          break;
        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);
          res.status(500).json({
            data: {
              estado: false,
              "error": _context5.t0.message
            }
          });
        case 13:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 9]]);
  }));
  return _memosPorSucursal.apply(this, arguments);
}
function memosPorEmpresa(_x11, _x12) {
  return _memosPorEmpresa.apply(this, arguments);
}
function _memosPorEmpresa() {
  _memosPorEmpresa = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var empresaid, _req$body4, fechainicio, fechafin, query, memos;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          empresaid = req.params.empresaid;
          _req$body4 = req.body, fechainicio = _req$body4.fechainicio, fechafin = _req$body4.fechafin;
          query = "select po.ciaspvs,p.*,s.nombre as sucursal,a.nombrecompleto asegurado,c.nombre compania,r.nombre ramo,sr.nombre ramopadre,po.fechainicio,po.fechafin,po.valorasegurado,po.tipomoneda,po.nropoliza,po.nrocertificado,po.fechaexpedicion,po.franquicia,po.primatotal,po.formapago,po.notas observacion,po.fecharecepcion,\n        d.nombre ciudad,co.nombre contratante,pl.nombre plan,b.nombre subrogado,e.nombrecompleto encargado,ej.nombrecompleto ejecutivo,po.tpoliza,po.comisionbs,po.comisionusd,po.porcentajeprima,po.porcentajecomision ,po.formapago\n        ,po.comisionusd,po.comisionbs,po.primanetasus ,po.tipomoneda,case when po.tipomoneda='USD' THEN po.primanetasus* po.tipocambio else po.primaneta end primanetabs,po.primaneta,po.tipoemision\n        ,case when po.tipomoneda='USD' THEN po.primatotal* po.tipocambio else po.primatotal end primatotalbs,case when po.tipomoneda='BOL' THEN po.primatotal/ po.tipocambio else po.primatotal end primatotalusd\n        from memo p\n        inner join sucursal s on s.id=p.sucursalid\n        inner join poliza po on po.id=p.polizaid\n        inner join asegurado a on a.id=po.tomadorid\n        inner join sub_ramo_compania src on src.id=po.subramocompaniaid\n        inner join ramo r on r.id=src.ramoid\n        left join ramo sr on sr.id=src.ramopadreid\n        inner join departamento d on d.id=po.ciudadexpedicion\n        inner join contratante co on co.id=po.contratanteid\n        left  join plan pl on pl.id=po.planid\n        inner join banco b on b.id=po.bancoid\n        inner join personal e on e.id=po.encargadoid\n        inner join personal ej on ej.id=po.ejecutivoid\n        inner join compania_seguro c on c.id=po.companiaseguroid\n        where s.empresaid= '" + empresaid + "' and to_char(p.fecharegistro, 'YYYYMMDD')::integer>= " + fechainicio + " and to_char(p.fecharegistro, 'YYYYMMDD')::integer<= " + fechafin + " and p.estado='ACT' order by p.fechamodificacion desc "; //console.log(query);
          _context6.next = 6;
          return _database.sequelize.query(query, {
            type: QueryTypes.SELECT
          });
        case 6:
          memos = _context6.sent;
          //console.log(query);
          res.json({
            data: memos
          });
          _context6.next = 14;
          break;
        case 10:
          _context6.prev = 10;
          _context6.t0 = _context6["catch"](0);
          console.log(_context6.t0);
          res.status(500).json({
            data: {
              estado: false,
              "error": _context6.t0.message
            }
          });
        case 14:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 10]]);
  }));
  return _memosPorEmpresa.apply(this, arguments);
}
function deleteMemo(_x13, _x14) {
  return _deleteMemo.apply(this, arguments);
}
function _deleteMemo() {
  _deleteMemo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var id, deleteRowCount;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          id = req.params.id;
          _context7.next = 4;
          return _Memo["default"].destroy({
            where: {
              id: id
            }
          });
        case 4:
          deleteRowCount = _context7.sent;
          res.json({
            message: 'Memo deleted successfully',
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
    }, _callee7, null, [[0, 8]]);
  }));
  return _deleteMemo.apply(this, arguments);
}
function bajaMemo(_x15, _x16) {
  return _bajaMemo.apply(this, arguments);
}
function _bajaMemo() {
  _bajaMemo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var id, usuariomodificacion, updateRowCount, memos;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          id = req.params.id;
          console.log("bajaMemo");
          usuariomodificacion = req.body.usuariomodificacion;
          _context8.prev = 3;
          _context8.next = 6;
          return _Memo["default"].update({
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
          updateRowCount = _context8.sent;
          _context8.next = 9;
          return _Memo["default"].findOne({
            where: {
              id: id
            }
          });
        case 9:
          memos = _context8.sent;
          res.json({
            message: 'Memo baja successfully',
            count: memos
          });
          _context8.next = 17;
          break;
        case 13:
          _context8.prev = 13;
          _context8.t0 = _context8["catch"](3);
          console.log(_context8.t0);
          res.status(500).json({
            data: {
              estado: false,
              "error": _context8.t0.message
            }
          });
        case 17:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[3, 13]]);
  }));
  return _bajaMemo.apply(this, arguments);
}
function getMemoPorTipoYSucursal(_x17, _x18) {
  return _getMemoPorTipoYSucursal.apply(this, arguments);
}
function _getMemoPorTipoYSucursal() {
  _getMemoPorTipoYSucursal = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var _req$params, tipomemoid, sucursalid, memos;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _req$params = req.params, tipomemoid = _req$params.tipomemoid, sucursalid = _req$params.sucursalid;
          _context9.prev = 1;
          _context9.next = 4;
          return _database.sequelize.query("select p.*,s.nombre as sucursal \n            from memo p \n            inner join sucursal s on s.id=p.sucursalid  \n            where s.id= '" + sucursalid + "' and p.tmemo='" + tipomemoid + "' order by p.fechamodificacion desc ", {
            type: QueryTypes.SELECT
          });
        case 4:
          memos = _context9.sent;
          //const memos = await Memo.findAll({ where: { tipomemoid, sucursalid, estado: 'ACT' } });
          //const memos = await Memo.findAll({ where: { tmemo: tipomemoid, sucursalid, estado: 'ACT' } });

          res.json({
            memos: memos
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
    }, _callee9, null, [[1, 8]]);
  }));
  return _getMemoPorTipoYSucursal.apply(this, arguments);
}
function getMemosPorTipoYEmpresa(_x19, _x20) {
  return _getMemosPorTipoYEmpresa.apply(this, arguments);
}
function _getMemosPorTipoYEmpresa() {
  _getMemosPorTipoYEmpresa = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var _req$params2, tipomemoid, empresaid, memos;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _req$params2 = req.params, tipomemoid = _req$params2.tipomemoid, empresaid = _req$params2.empresaid;
          _context10.prev = 1;
          _context10.next = 4;
          return _database.sequelize.query("select p.*,s.nombre as sucursal \n            from memo p \n            inner join sucursal s on s.id=p.sucursalid             \n            where s.empresaid= '" + empresaid + "' and p.tmemo='" + tipomemoid + "' order by p.fechamodificacion desc ", {
            type: QueryTypes.SELECT
          });
        case 4:
          memos = _context10.sent;
          res.json({
            memos: memos
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
    }, _callee10, null, [[1, 8]]);
  }));
  return _getMemosPorTipoYEmpresa.apply(this, arguments);
}
function getMemosPorTipoRamoYEmpresa(_x21, _x22) {
  return _getMemosPorTipoRamoYEmpresa.apply(this, arguments);
}
function _getMemosPorTipoRamoYEmpresa() {
  _getMemosPorTipoRamoYEmpresa = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var _req$params3, tiporamoid, empresaid, memos;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _req$params3 = req.params, tiporamoid = _req$params3.tiporamoid, empresaid = _req$params3.empresaid;
          _context11.prev = 1;
          _context11.next = 4;
          return _database.sequelize.query("select p.* ,r2.nombre nombreramopadre,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal \n            from memo p\n            inner join sucursal s on s.id=p.sucursalid  \n            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid            \n            inner join ramo r on r.id=rc.ramoid \n            left join ramo r2 on r2.id =r.ramoid  \n            inner join asegurado a on a.id=p.tomadorid \n            inner join compania_seguro cs on cs.id=p.companiaseguroid \n            where s.empresaid= '" + empresaid + "' and p.tmemo='" + tiporamoid + "' order by p.fechamodificacion desc ", {
            type: QueryTypes.SELECT
          });
        case 4:
          memos = _context11.sent;
          //console.log(JSON.stringify(usuarios[0], null, 2));

          res.json({
            memos: memos
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
    }, _callee11, null, [[1, 8]]);
  }));
  return _getMemosPorTipoRamoYEmpresa.apply(this, arguments);
}
function getMemosPorTipoRamoYSucursal(_x23, _x24) {
  return _getMemosPorTipoRamoYSucursal.apply(this, arguments);
}
/**MONTOS TOTALES PARA DASHBOARD  POR EMPRESA*/
function _getMemosPorTipoRamoYSucursal() {
  _getMemosPorTipoRamoYSucursal = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var _req$params4, tiporamoid, sucursalid, memos;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _req$params4 = req.params, tiporamoid = _req$params4.tiporamoid, sucursalid = _req$params4.sucursalid;
          _context12.prev = 1;
          _context12.next = 4;
          return _database.sequelize.query("select p.* ,r2.nombre nombreramopadre,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania ,s.nombre as sucursal \n     \n            from memo p \n            inner join sucursal s on s.id=p.sucursalid  \n            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid \n            inner join ramo r on r.id=rc.ramoid \n            left join ramo r2 on r2.id =r.ramoid  \n            inner join asegurado a on a.id=p.tomadorid \n            inner join compania_seguro cs on cs.id=p.companiaseguroid \n            where s.id='" + sucursalid + "'  and p.tmemo='" + tiporamoid + "'  order by p.fechamodificacion desc ", {
            type: QueryTypes.SELECT
          });
        case 4:
          memos = _context12.sent;
          //console.log(JSON.stringify(usuarios[0], null, 2));

          res.json({
            memos: memos
          });
          _context12.next = 12;
          break;
        case 8:
          _context12.prev = 8;
          _context12.t0 = _context12["catch"](1);
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
    }, _callee12, null, [[1, 8]]);
  }));
  return _getMemosPorTipoRamoYSucursal.apply(this, arguments);
}
function getTotalProduccionMemoPorEmpresa(_x25, _x26) {
  return _getTotalProduccionMemoPorEmpresa.apply(this, arguments);
}
/** MONTOS TOTALES PARA DASHBOARD  POR SUCURSAL*/
function _getTotalProduccionMemoPorEmpresa() {
  _getTotalProduccionMemoPorEmpresa = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var empresaid, query, pagos;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          empresaid = req.params.empresaid;
          _context13.prev = 1;
          /*  let query = `select count(*) cantidad,SUM(p.primatotal) totalvalorasegurado 
           from memo m  
           inner join poliza p on p.id=m.polizaid  
           inner join sucursal s on s.id =p.sucursalid  
           inner join empresa e on e.id =s.empresaid where m.estado  in ('ACT') and e.id = '` + empresaid + `'`; */
          query = " with consulta as(select count(*) cantidad,( case when p.ingresoegreso ='I' then SUM(p.primanetasus) else 0 end -case when p.ingresoegreso ='E' then SUM(p.primanetasus) else 0 end)  totalvalorasegurado \n        from memo m\n        inner join poliza p on p.id=m.polizaid and p.estado in ('ACT','CER')\n        inner join sucursal s on s.id =p.sucursalid\n        inner join empresa e on e.id =s.empresaid\n        where m.estado  in ('ACT')\n        and m.mesproduccion =(select max(me.mesproduccion) from memo me where  me.sucursalid=s.id \n        and me.anioproduccion= (select max(me1.anioproduccion) from memo me1\n        where me1.sucursalid=s.id ))\n        --and \n        ---extract(year from  m.fechamemo)=  extract(year from  now())-- and extract(month  from   m.fechamemo)=  (select MAX(m2 .mesproduccion) from memo m2 where m2.sucursalid=m.sucursalid) \n        ---and m.mesproduccion = case when extract(DAY from  now())>(select pp.diaproduccion from param_produccion pp where pp.sucursalid=s.id) then extract(month from  now()) else extract(month from  now())-1 end\n         and  e.id  ='" + empresaid + "' group by p.ingresoegreso)\n        \n        select coalesce(sum(cantidad),0) cantidad,coalesce(sum(totalvalorasegurado),0) totalvalorasegurado from consulta  ";
          _context13.next = 5;
          return _database.sequelize.query(query, {
            type: QueryTypes.SELECT
          });
        case 5:
          pagos = _context13.sent;
          res.json({
            data: pagos
          });
          _context13.next = 13;
          break;
        case 9:
          _context13.prev = 9;
          _context13.t0 = _context13["catch"](1);
          console.log(_context13.t0);
          res.status(500).json({
            data: {
              estado: false,
              "error": _context13.t0.message
            }
          });
        case 13:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[1, 9]]);
  }));
  return _getTotalProduccionMemoPorEmpresa.apply(this, arguments);
}
function getTotalProduccionMemoPorSucursal(_x27, _x28) {
  return _getTotalProduccionMemoPorSucursal.apply(this, arguments);
}
function _getTotalProduccionMemoPorSucursal() {
  _getTotalProduccionMemoPorSucursal = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var sucursalid, query, pagos;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          sucursalid = req.params.sucursalid;
          _context14.prev = 1;
          /*   let query = ` with consulta as(select count(*) cantidad,( case when p.ingresoegreso ='I' then SUM(p.primaneta) else 0 end -case when p.ingresoegreso ='E' then SUM(p.primaneta) else 0 end)  totalvalorasegurado 
            from memo m  
            inner join poliza p on p.id=m.polizaid and p.estado in ('ACT','CER')  
            inner join sucursal s on s.id =p.sucursalid
            where m.estado  in ('ACT') 
            
                and m.mesproduccion =(select max(me.mesproduccion) from memo me where  me.sucursalid=s.id 
                and me.anioproduccion= (select max(me1.anioproduccion) from memo me1
                where me1.sucursalid=s.id ))
            --and 
            --extract(year from  m.fechamemo)=  extract(year from  now())-- and extract(month  from   m.fechamemo)=  (select MAX(m2 .mesproduccion) from memo m2 where m2.sucursalid=m.sucursalid) 
            --and m.mesproduccion = case when extract(DAY from  now())>(select pp.diaproduccion from param_produccion pp where pp.sucursalid=s.id) then extract(month from  now()) else extract(month from  now())-1 end
             and s.id ='` + sucursalid + `'
            group by p.ingresoegreso 
            )
            
            select coalesce(sum(cantidad),0) cantidad,coalesce(sum(totalvalorasegurado),0) totalvalorasegurado from consulta  `; */
          query = " with consulta as(\n                select case when extract(DAY from  now())> pp.diaproduccion   then now() else (now()::date-'1 month'::interval ) end fecha,*\n                from param_produccion pp where pp.sucursalid ='" + sucursalid + "'\n            ),consulta1 as(select count(*) cantidad,( case when p.ingresoegreso ='I' then SUM(p.primaneta) else 0 end -case when p.ingresoegreso ='E' then SUM(p.primaneta) else 0 end)  totalvalorasegurado\n            from memo m\n            inner join poliza p on p.id=m.polizaid and p.estado in ('ACT','CER')\n            inner join sucursal s on s.id =p.sucursalid\n            inner join consulta c on c.sucursalid=s.id\n            where m.estado  in ('ACT')\n            and extract(month  from   c.fecha)=m.mesproduccion\n            and extract(year  from   c.fecha)=m.anioproduccion\n            and s.id ='" + sucursalid + "'\n            group by p.ingresoegreso\n            )\n            select coalesce(sum(cantidad),0) cantidad,coalesce(sum(totalvalorasegurado),0) totalvalorasegurado from consulta1";
          _context14.next = 5;
          return _database.sequelize.query(query, {
            type: QueryTypes.SELECT
          });
        case 5:
          pagos = _context14.sent;
          res.json({
            data: pagos
          });
          _context14.next = 13;
          break;
        case 9:
          _context14.prev = 9;
          _context14.t0 = _context14["catch"](1);
          console.log(_context14.t0);
          res.status(500).json({
            data: {
              estado: false,
              "error": _context14.t0.message
            }
          });
        case 13:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[1, 9]]);
  }));
  return _getTotalProduccionMemoPorSucursal.apply(this, arguments);
}
function listarProduccionMesualTXT(_x29, _x30) {
  return _listarProduccionMesualTXT.apply(this, arguments);
}
function _listarProduccionMesualTXT() {
  _listarProduccionMesualTXT = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    var body, query, pagos;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.prev = 0;
          body = JSON.stringify(req.body); //console.log(body);
          /*  let query = ` select * from  pa_listar_produccion_mensual_txt(
               '{
               "sucursalid" : "deaec8c4-8bba-49a5-9b1c-4e5ec120a28f",
               "mesproduccion" :"4",
               "anioproduccion" : "2022"
               }'
               );`; */
          query = " select * from  pa_listar_produccion_mensual_txt('" + body + "');"; // console.log(query);
          _context15.next = 5;
          return _database.sequelize.query(query, {
            type: QueryTypes.SELECT
          });
        case 5:
          pagos = _context15.sent;
          res.json({
            data: pagos
          });
          _context15.next = 13;
          break;
        case 9:
          _context15.prev = 9;
          _context15.t0 = _context15["catch"](0);
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
    }, _callee15, null, [[0, 9]]);
  }));
  return _listarProduccionMesualTXT.apply(this, arguments);
}