"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bajaPagos = bajaPagos;
exports.crearPagos = crearPagos;
exports.createPagos = createPagos;
exports.deletePagos = deletePagos;
exports.getOnePagos = getOnePagos;
exports.getPagosActualesPorEmpresa = getPagosActualesPorEmpresa;
exports.getPagosActualesPorSucursal = getPagosActualesPorSucursal;
exports.getPagosGeneralesPorSucursal = getPagosGeneralesPorSucursal;
exports.getPagosMoraPorEmpresa = getPagosMoraPorEmpresa;
exports.getPagosMoraPorSucursal = getPagosMoraPorSucursal;
exports.getPagosPendientesPorEmpresa = getPagosPendientesPorEmpresa;
exports.getPagosPendientesPorSucursal = getPagosPendientesPorSucursal;
exports.getPagosPorEmpresa = getPagosPorEmpresa;
exports.getPagosPorEmpresayCi = getPagosPorEmpresayCi;
exports.getPagosPorSucursal = getPagosPorSucursal;
exports.getPagosPorSucursalyCi = getPagosPorSucursalyCi;
exports.getPagoss = getPagoss;
exports.getTotalPagosPorEmpresa = getTotalPagosPorEmpresa;
exports.getTotalPagosPorSucursal = getTotalPagosPorSucursal;
exports.updatePagos = updatePagos;
var _database = require("../database/database");
var _Pagos = _interopRequireDefault(require("../models/Pagos"));
var _CobranzaMotivo = _interopRequireDefault(require("../models/CobranzaMotivo"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var _require = require('sequelize'),
  QueryTypes = _require.QueryTypes,
  _Promise = _require.Promise;
function getPagoss(_x, _x2) {
  return _getPagoss.apply(this, arguments);
}
function _getPagoss() {
  _getPagoss = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var pagoss;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _Pagos["default"].findAll({
            where: {
              estado: 'ACT'
            }
          });
        case 3:
          pagoss = _context.sent;
          res.json({
            data: pagoss
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
    }, _callee, null, [[0, 7]]);
  }));
  return _getPagoss.apply(this, arguments);
}
function createPagos(_x3, _x4) {
  return _createPagos.apply(this, arguments);
}
function _createPagos() {
  _createPagos = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _req$body, monto, tipo, planpagoid, numerofactura, sucursalid, usuarioregistro, usuariomodificacion, estado, newPagos;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, monto = _req$body.monto, tipo = _req$body.tipo, planpagoid = _req$body.planpagoid, numerofactura = _req$body.numerofactura, sucursalid = _req$body.sucursalid, usuarioregistro = _req$body.usuarioregistro, usuariomodificacion = _req$body.usuariomodificacion, estado = _req$body.estado;
          _context2.prev = 1;
          _context2.next = 4;
          return _Pagos["default"].create({
            montobs: monto,
            montousd: 0,
            comisionbs: 0,
            comisionusd: 0,
            tipo: tipo,
            numerofactura: numerofactura,
            planpagoid: planpagoid,
            sucursalid: sucursalid,
            usuarioregistro: usuarioregistro,
            usuariomodificacion: usuariomodificacion,
            fecharegistro: new Date(),
            fechamodificacion: new Date(),
            estado: estado
          }, {
            fields: ['montobs', 'montousd', 'comisionbs', 'comisionusd', 'tipo', 'numerofactura', 'planpagoid', 'sucursalid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado']
          });
        case 4:
          newPagos = _context2.sent;
          if (!newPagos) {
            _context2.next = 7;
            break;
          }
          return _context2.abrupt("return", res.json({
            message: 'Pagos created successfully',
            data: newPagos
          }));
        case 7:
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
    }, _callee2, null, [[1, 9]]);
  }));
  return _createPagos.apply(this, arguments);
}
function crearPagos(_x5, _x6) {
  return _crearPagos.apply(this, arguments);
}
function _crearPagos() {
  _crearPagos = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var pagos, t, listaPagos, newPagos, i, _i, newCobranzaMotivo;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          pagos = req.body.pagos;
          listaPagos = [];
          _context3.prev = 2;
          _context3.next = 5;
          return _database.sequelize.transaction();
        case 5:
          t = _context3.sent;
          i = 0;
        case 7:
          if (!(i < pagos.length)) {
            _context3.next = 16;
            break;
          }
          if (!(pagos[i].monto > 0)) {
            _context3.next = 13;
            break;
          }
          _context3.next = 11;
          return _Pagos["default"].create({
            //titular: pagos[i].titular,
            montobs: pagos[i].monto,
            montousd: pagos[i].monto,
            comisionbs: 0,
            comisionusd: 0,
            planpagoid: pagos[i].planpagoid,
            sucursalid: pagos[i].sucursalid,
            usuarioregistro: pagos[i].usuarioregistro,
            fecharegistro: new Date(),
            fechamodificacion: new Date(),
            estado: 'ACT',
            tipo: pagos[i].tipo
          }, {
            fields: ['montobs', 'montousd', 'comisionbs', 'comisionusd', 'planpagoid', 'sucursalid', 'usuarioregistro', 'fecharegistro', 'fechamodificacion', 'estado', 'tipo']
          }, {
            transaction: t
          });
        case 11:
          newPagos = _context3.sent;
          listaPagos.push(newPagos);
        case 13:
          i++;
          _context3.next = 7;
          break;
        case 16:
          _i = 0;
        case 17:
          if (!(_i < pagos.length)) {
            _context3.next = 25;
            break;
          }
          if (!pagos[_i].notallamada) {
            _context3.next = 22;
            break;
          }
          _context3.next = 21;
          return _CobranzaMotivo["default"].create({
            nombre: pagos[_i].notallamada,
            descripcion: pagos[_i].notallamada,
            usuarioregistro: pagos[_i].usuarioregistro,
            fecharegistro: new Date(),
            fechamodificacion: new Date(),
            estado: 'ACT',
            planpagoid: pagos[_i].planpagoid
          }, {
            fields: ['nombre', 'descripcion', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado', 'planpagoid']
          }, {
            transaction: t
          });
        case 21:
          newCobranzaMotivo = _context3.sent;
        case 22:
          _i++;
          _context3.next = 17;
          break;
        case 25:
          _context3.next = 27;
          return t.commit();
        case 27:
          if (!listaPagos) {
            _context3.next = 29;
            break;
          }
          return _context3.abrupt("return", res.json({
            message: 'Pagos created successfully',
            data: listaPagos
          }));
        case 29:
          _context3.next = 38;
          break;
        case 31:
          _context3.prev = 31;
          _context3.t0 = _context3["catch"](2);
          console.log(_context3.t0);
          if (!t) {
            _context3.next = 37;
            break;
          }
          _context3.next = 37;
          return t.rollback();
        case 37:
          res.status(500).json({
            data: {
              estado: false,
              "error": _context3.t0.message
            }
          });
        case 38:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[2, 31]]);
  }));
  return _crearPagos.apply(this, arguments);
}
function updatePagos(_x7, _x8) {
  return _updatePagos.apply(this, arguments);
}
function _updatePagos() {
  _updatePagos = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var id, _req$body2, montobs, montousd, comisionbs, comisionusd, planpagoid, sucursalid, usuarioregistro, usuariomodificacion, fecharegistro, estado, updateRowCount, pagoss;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, montobs = _req$body2.montobs, montousd = _req$body2.montousd, comisionbs = _req$body2.comisionbs, comisionusd = _req$body2.comisionusd, planpagoid = _req$body2.planpagoid, sucursalid = _req$body2.sucursalid, usuarioregistro = _req$body2.usuarioregistro, usuariomodificacion = _req$body2.usuariomodificacion, fecharegistro = _req$body2.fecharegistro, estado = _req$body2.estado;
          _context4.prev = 2;
          _context4.next = 5;
          return _Pagos["default"].update({
            montobs: montobs,
            montousd: montousd,
            comisionbs: comisionbs,
            comisionusd: comisionusd,
            planpagoid: planpagoid,
            sucursalid: sucursalid,
            usuarioregistro: usuarioregistro,
            usuariomodificacion: usuariomodificacion,
            fecharegistro: fecharegistro,
            fechamodificacion: new Date(),
            estado: estado
          }, {
            where: {
              id: id
            }
          });
        case 5:
          updateRowCount = _context4.sent;
          _context4.next = 8;
          return _Pagos["default"].findOne({
            where: {
              id: id
            }
          });
        case 8:
          pagoss = _context4.sent;
          res.json({
            message: 'Pagos update successfully',
            count: pagoss
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
    }, _callee4, null, [[2, 12]]);
  }));
  return _updatePagos.apply(this, arguments);
}
function getOnePagos(_x9, _x10) {
  return _getOnePagos.apply(this, arguments);
}
function _getOnePagos() {
  _getOnePagos = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var id, pagos;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id;
          _context5.next = 4;
          return _Pagos["default"].findOne({
            where: {
              id: id
            }
          });
        case 4:
          pagos = _context5.sent;
          res.json({
            data: pagos
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
    }, _callee5, null, [[0, 8]]);
  }));
  return _getOnePagos.apply(this, arguments);
}
function deletePagos(_x11, _x12) {
  return _deletePagos.apply(this, arguments);
}
function _deletePagos() {
  _deletePagos = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var id, deleteRowCount;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          id = req.params.id;
          _context6.next = 4;
          return _Pagos["default"].destroy({
            where: {
              id: id
            }
          });
        case 4:
          deleteRowCount = _context6.sent;
          res.json({
            message: 'Pagos deleted successfully',
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
  return _deletePagos.apply(this, arguments);
}
function bajaPagos(_x13, _x14) {
  return _bajaPagos.apply(this, arguments);
}
function _bajaPagos() {
  _bajaPagos = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var id, usuariomodificacion, updateRowCount, pagoss;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          id = req.params.id;
          console.log("bajaPagos");
          usuariomodificacion = req.body.usuariomodificacion;
          _context7.prev = 3;
          _context7.next = 6;
          return _Pagos["default"].update({
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
          return _Pagos["default"].findOne({
            where: {
              id: id
            }
          });
        case 9:
          pagoss = _context7.sent;
          res.json({
            message: 'Pagos baja successfully',
            count: pagoss
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
  return _bajaPagos.apply(this, arguments);
}
function getPagosGeneralesPorSucursal(_x15, _x16) {
  return _getPagosGeneralesPorSucursal.apply(this, arguments);
}
function _getPagosGeneralesPorSucursal() {
  _getPagosGeneralesPorSucursal = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var sucursalid, pagos;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          sucursalid = req.params.sucursalid;
          _context8.prev = 1;
          _context8.next = 4;
          return _database.sequelize.query("select pp.*,p.nropoliza, case when a.tipoasegurado='individual' then a.ci else a.nit end cinit,a.nombrecompleto \n            ,case when to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER then 'Actuales' \n             when to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER then 'Pendientes' \n             when to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER then 'Mora' end Estado,(select  string_agg(to_char(fecharegistro, 'DD/MM/YYYY') || ' ' || descripcion, ', ' order by descripcion) \n            from cobranza_motivo \n            where estado='ACT' AND planpagoid=pp.id \n            group by planpagoid) as Motivos,case when p.tipoemision='Anexo Conclusi\xF3n' then 'E' when p.tipoemision='Anexo Exclusi\xF3n' then 'E' else 'I' end tipo,p.tipoemision,s.nombre as sucursal   from poliza p \n             inner join memo m on m.polizaid=p.id \n             inner join sucursal s on s.id=m.sucursalid \n             inner join plan_pago pp on pp.memoid=m.id \n            inner join asegurado a on a.id=p.tomadorid \n             where  p.sucursalid='" + sucursalid + "'  AND  P.estado in ('ACT','CER')  and m.estado='ACT'           \n             and (pp.montocuota >(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id)) order by pp.fechapago asc", {
            type: QueryTypes.SELECT
          });
        case 4:
          pagos = _context8.sent;
          res.json({
            pagos: pagos
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
    }, _callee8, null, [[1, 8]]);
  }));
  return _getPagosGeneralesPorSucursal.apply(this, arguments);
}
function getPagosActualesPorSucursal(_x17, _x18) {
  return _getPagosActualesPorSucursal.apply(this, arguments);
}
function _getPagosActualesPorSucursal() {
  _getPagosActualesPorSucursal = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var sucursalid, pagos;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          sucursalid = req.params.sucursalid;
          _context9.prev = 1;
          _context9.next = 4;
          return _database.sequelize.query("select pp.*,p.nropoliza, case when a.tipoasegurado='individual' then a.ci else a.nit end cinit,a.nombrecompleto \n            ,pp.montocuota-(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id) as saldo\n            ,case when to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER then 'Actuales' \n             when to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER then 'Pendientes' \n             when to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER then 'Mora' end Estado,(select  string_agg(to_char(fecharegistro, 'DD/MM/YYYY') || ' ' || descripcion, ', ' order by descripcion) \n            from cobranza_motivo \n            where estado='ACT' AND planpagoid=pp.id \n            group by planpagoid) as Motivos,case when p.tipoemision='Anexo Conclusi\xF3n' then 'E' when p.tipoemision='Anexo Exclusi\xF3n' then 'E' else 'I' end tipo,p.tipoemision,s.nombre sucursal  from poliza p \n             inner join memo m on m.polizaid=p.id \n             inner join sucursal s on s.id=m.sucursalid \n             inner join plan_pago pp on pp.memoid=m.id \n            inner join asegurado a on a.id=p.tomadorid \n             where  p.sucursalid='" + sucursalid + "'  AND  P.estado in ('ACT','CER')  and m.estado='ACT'\n             and to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER \n             and (pp.montocuota >(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id)) order by pp.fechapago asc", {
            type: QueryTypes.SELECT
          });
        case 4:
          pagos = _context9.sent;
          res.json({
            pagos: pagos
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
  return _getPagosActualesPorSucursal.apply(this, arguments);
}
function getPagosPendientesPorSucursal(_x19, _x20) {
  return _getPagosPendientesPorSucursal.apply(this, arguments);
}
function _getPagosPendientesPorSucursal() {
  _getPagosPendientesPorSucursal = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var sucursalid, pagos;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          sucursalid = req.params.sucursalid;
          _context10.prev = 1;
          _context10.next = 4;
          return _database.sequelize.query("select pp.*,p.nropoliza, case when a.tipoasegurado='individual' then a.ci else a.nit end cinit,a.nombrecompleto \n            ,pp.montocuota-(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id) as saldo\n            ,case when to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER then 'Actuales' \n             when to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER then 'Pendientes' \n             when to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER then 'Mora' end Estado,(select  string_agg(to_char(fecharegistro, 'DD/MM/YYYY') || ' ' || descripcion, ', ' order by descripcion) \n            from cobranza_motivo \n            where estado='ACT' AND planpagoid=pp.id \n            group by planpagoid) as Motivos,case when p.tipoemision='Anexo Conclusi\xF3n' then 'E' when p.tipoemision='Anexo Exclusi\xF3n' then 'E' else 'I' end tipo,p.tipoemision,s.nombre as sucursal  from poliza p \n             inner join memo m on m.polizaid=p.id \n             inner join sucursal s on s.id=m.sucursalid \n             inner join plan_pago pp on pp.memoid=m.id \n            inner join asegurado a on a.id=p.tomadorid \n             where  P.estado in ('ACT','CER')  and p.sucursalid='" + sucursalid + "'   and m.estado='ACT'\n             and to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER \n             and (pp.montocuota >(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id)) order by pp.fechapago asc", {
            type: QueryTypes.SELECT
          });
        case 4:
          pagos = _context10.sent;
          res.json({
            pagos: pagos
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
  return _getPagosPendientesPorSucursal.apply(this, arguments);
}
function getPagosMoraPorSucursal(_x21, _x22) {
  return _getPagosMoraPorSucursal.apply(this, arguments);
}
function _getPagosMoraPorSucursal() {
  _getPagosMoraPorSucursal = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var sucursalid, pagos;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          sucursalid = req.params.sucursalid;
          _context11.prev = 1;
          _context11.next = 4;
          return _database.sequelize.query("select pp.*,p.nropoliza, case when a.tipoasegurado='individual' then a.ci else a.nit end cinit,a.nombrecompleto \n            ,pp.montocuota-(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id) as saldo\n            ,case when to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER then 'Actuales' \n             when to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER then 'Pendientes' \n             when to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER then 'Mora' end Estado,s.nombre as sucursal from poliza p \n             inner join memo m on m.polizaid=p.id \n             inner join sucursal s on s.id=m.sucursalid \n             inner join plan_pago pp on pp.memoid=m.id \n            inner join asegurado a on a.id=p.tomadorid \n             where  p.sucursalid='" + sucursalid + "'  AND  P.estado in ('ACT','CER')  and m.estado='ACT'\n             and to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER \n             and (pp.montocuota >(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id)) order by pp.fechapago asc", {
            type: QueryTypes.SELECT
          });
        case 4:
          pagos = _context11.sent;
          res.json({
            pagos: pagos
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
  return _getPagosMoraPorSucursal.apply(this, arguments);
}
function getPagosActualesPorEmpresa(_x23, _x24) {
  return _getPagosActualesPorEmpresa.apply(this, arguments);
}
function _getPagosActualesPorEmpresa() {
  _getPagosActualesPorEmpresa = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var empresaid, pagos;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          empresaid = req.params.empresaid;
          _context12.prev = 1;
          _context12.next = 4;
          return _database.sequelize.query("SELECT pp.*,\n       p.nropoliza,\n       CASE WHEN a.tipoasegurado = 'individual' THEN a.ci ELSE a.nit END AS cinit,\n       a.nombrecompleto,\n       pp.montocuota - COALESCE(pagos.saldo, 0) AS saldo,\n       CASE \n           WHEN DATE_TRUNC('month', pp.fechapago) = DATE_TRUNC('month', CURRENT_DATE) THEN 'Actuales'\n           WHEN pp.fechapago > CURRENT_DATE THEN 'Pendientes'\n           ELSE 'Mora'\n       END AS Estado,\n       motivos.motivos,\n       CASE \n           WHEN p.tipoemision IN ('Anexo Conclusi\xF3n', 'Anexo Exclusi\xF3n') THEN 'E' \n           ELSE 'I' \n       END AS tipo,\n       p.tipoemision,\n       s.nombre AS sucursal\nFROM poliza p\nINNER JOIN memo m ON m.polizaid = p.id\nINNER JOIN plan_pago pp ON pp.memoid = m.id\nINNER JOIN sucursal s ON s.id = p.sucursalid\nINNER JOIN empresa e ON e.id = s.empresaid\nINNER JOIN asegurado a ON a.id = p.tomadorid\nLEFT JOIN (\n    SELECT pa.planpagoid, COALESCE(SUM(pa.montousd), 0) AS saldo\n    FROM pagos pa\n    WHERE pa.estado = 'ACT'\n    GROUP BY pa.planpagoid\n) pagos ON pagos.planpagoid = pp.id\nLEFT JOIN LATERAL (\n    SELECT string_agg(to_char(fecharegistro, 'DD/MM/YYYY') || ' ' || descripcion, ', ' ORDER BY descripcion) AS motivos\n    FROM cobranza_motivo\n    WHERE estado = 'ACT' AND planpagoid = pp.id\n) motivos ON true\nWHERE e.id = '" + empresaid + "'\n  AND p.estado IN ('ACT', 'CER')\n  AND m.estado = 'ACT'\n  AND DATE_TRUNC('month', pp.fechapago) = DATE_TRUNC('month', CURRENT_DATE)\n  AND pp.montocuota > COALESCE(pagos.saldo, 0)\nORDER BY pp.fechapago ASC;\n", {
            type: QueryTypes.SELECT
          });
        case 4:
          pagos = _context12.sent;
          res.json({
            pagos: pagos
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
  return _getPagosActualesPorEmpresa.apply(this, arguments);
}
function getPagosPendientesPorEmpresa(_x25, _x26) {
  return _getPagosPendientesPorEmpresa.apply(this, arguments);
}
function _getPagosPendientesPorEmpresa() {
  _getPagosPendientesPorEmpresa = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var empresaid, pagos;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          empresaid = req.params.empresaid;
          _context13.prev = 1;
          _context13.next = 4;
          return _database.sequelize.query("select pp.*,p.nropoliza, case when a.tipoasegurado='individual' then a.ci else a.nit end cinit,a.nombrecompleto \n            ,pp.montocuota-(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id) as saldo\n            ,case when to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER then 'Actuales' \n             when to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER then 'Pendientes' \n             when to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER then 'Mora' end Estado,(select  string_agg(to_char(fecharegistro, 'DD/MM/YYYY') || ' ' || descripcion, ', ' order by descripcion) \n            from cobranza_motivo \n            where estado='ACT' AND planpagoid=pp.id \n            group by planpagoid) as Motivos,case when p.tipoemision='Anexo Conclusi\xF3n' then 'E' when p.tipoemision='Anexo Exclusi\xF3n' then 'E' else 'I' end tipo,p.tipoemision,s.nombre as sucursal  from poliza p \n             inner join memo m on m.polizaid=p.id \n             inner join plan_pago pp on pp.memoid=m.id \n             inner join sucursal s on s.id= p.sucursalid \n             inner join empresa e on e.id= s.empresaid \n            inner join asegurado a on a.id=p.tomadorid \n             where  e.id='" + empresaid + "'  AND  P.estado in ('ACT','CER')  and m.estado='ACT'\n             and to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER \n             and (pp.montocuota >(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id)) order by pp.fechapago asc", {
            type: QueryTypes.SELECT
          });
        case 4:
          pagos = _context13.sent;
          res.json({
            pagos: pagos
          });
          _context13.next = 12;
          break;
        case 8:
          _context13.prev = 8;
          _context13.t0 = _context13["catch"](1);
          console.log(_context13.t0);
          res.status(500).json({
            data: {
              estado: false,
              "error": _context13.t0.message
            }
          });
        case 12:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[1, 8]]);
  }));
  return _getPagosPendientesPorEmpresa.apply(this, arguments);
}
function getPagosMoraPorEmpresa(_x27, _x28) {
  return _getPagosMoraPorEmpresa.apply(this, arguments);
}
function _getPagosMoraPorEmpresa() {
  _getPagosMoraPorEmpresa = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var empresaid, pagos;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          empresaid = req.params.empresaid;
          _context14.prev = 1;
          _context14.next = 4;
          return _database.sequelize.query("select pp.*,p.nropoliza, case when a.tipoasegurado='individual' then a.ci else a.nit end cinit,a.nombrecompleto \n            ,pp.montocuota-(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id) as saldo\n             ,case when to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER then 'Actuales' \n             when to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER then 'Pendientes' \n             when to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER then 'Mora' end Estado,(select  string_agg(to_char(fecharegistro, 'DD/MM/YYYY') || ' ' || descripcion, ', ' order by descripcion) \n            from cobranza_motivo \n            where estado='ACT' AND planpagoid=pp.id \n            group by planpagoid) as Motivos,case when p.tipoemision='Anexo Conclusi\xF3n' then 'E' when p.tipoemision='Anexo Exclusi\xF3n' then 'E' else 'I' end tipo,p.tipoemision,s.nombre as sucursal  from poliza p \n             inner join memo m on m.polizaid=p.id \n             inner join plan_pago pp on pp.memoid=m.id \n             inner join sucursal s on s.id= p.sucursalid \n             inner join empresa e on e.id= s.empresaid \n            inner join asegurado a on a.id=p.tomadorid \n             where  e.id='" + empresaid + "'  AND  P.estado in ('ACT','CER')  and m.estado='ACT'\n             and to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER \n             and (pp.montocuota >(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id)) order by pp.fechapago asc", {
            type: QueryTypes.SELECT
          });
        case 4:
          pagos = _context14.sent;
          res.json({
            pagos: pagos
          });
          _context14.next = 12;
          break;
        case 8:
          _context14.prev = 8;
          _context14.t0 = _context14["catch"](1);
          console.log(_context14.t0);
          res.status(500).json({
            data: {
              estado: false,
              "error": _context14.t0.message
            }
          });
        case 12:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[1, 8]]);
  }));
  return _getPagosMoraPorEmpresa.apply(this, arguments);
}
function getPagosPorSucursalyCi(_x29, _x30) {
  return _getPagosPorSucursalyCi.apply(this, arguments);
}
function _getPagosPorSucursalyCi() {
  _getPagosPorSucursalyCi = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    var _req$params, sucursalid, cinit, pagos;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _req$params = req.params, sucursalid = _req$params.sucursalid, cinit = _req$params.cinit;
          _context15.prev = 1;
          _context15.next = 4;
          return _database.sequelize.query("select  pp.id ,pp.nro,pp.fechapago fechacuota,pp.montocuota,pp.primaneta,pp.comision,pp.memoid,pp.usuarioregistro,pp.usuariomodificacion,\n        p.nropoliza,a.nombrecompleto,p.tipomoneda,pp.montocuota-(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id) as saldo,case when to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER then 'Actuales'\n        when to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER then 'Pendientes'\n        when to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER then 'Mora' end Estado,(select  string_agg(to_char(fecharegistro, 'DD/MM/YYYY') || ' ' || descripcion, ', ' order by descripcion)\n        from cobranza_motivo\n        where estado='ACT' AND planpagoid=pp.id\n        group by planpagoid) as Motivos,case when p.tipoemision='Anexo Conclusi\xF3n' then 'E' when p.tipoemision='Anexo Exclusi\xF3n' then 'E' else 'I' end tipo,p.tipoemision,s.nombre as sucursal from poliza p\n        inner join memo m on m.polizaid=p.id\n        inner join sucursal s on s.id=m.sucursalid\n        inner join plan_pago pp on pp.memoid=m.id\n        inner join asegurado a on a.id=p.tomadorid\n        where p.sucursalid='" + sucursalid + "'  AND  P.estado in ('ACT','CER')  and m.estado='ACT'\n        and (pp.montocuota >(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id))\n        and  case when a.tipoasegurado='corporativo' then a.nit ='" + cinit + "' else a.ci ='" + cinit + "' end \n        order by pp.fechapago asc", {
            type: QueryTypes.SELECT
          });
        case 4:
          pagos = _context15.sent;
          res.json({
            pagos: pagos
          });
          _context15.next = 12;
          break;
        case 8:
          _context15.prev = 8;
          _context15.t0 = _context15["catch"](1);
          console.log(_context15.t0);
          res.status(500).json({
            data: {
              estado: false,
              "error": _context15.t0.message
            }
          });
        case 12:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[1, 8]]);
  }));
  return _getPagosPorSucursalyCi.apply(this, arguments);
}
function getPagosPorEmpresayCi(_x31, _x32) {
  return _getPagosPorEmpresayCi.apply(this, arguments);
}
function _getPagosPorEmpresayCi() {
  _getPagosPorEmpresayCi = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res) {
    var _req$params2, empresaid, cinit, query, pagos;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          _req$params2 = req.params, empresaid = _req$params2.empresaid, cinit = _req$params2.cinit;
          _context16.prev = 1;
          /*     let query = `select  pp.id,pp.nro,pp.fechapago fechacuota,pp.montocuota,pp.primaneta,pp.comision,pp.memoid,pp.usuarioregistro,pp.usuariomodificacion,
               p.nropoliza,a.nombrecompleto,p.tipomoneda,pp.montocuota-(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id) as saldo,case when to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER then 'Actuales' 
              when to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER then 'Pendientes' 
              when to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER then 'Mora' end Estado,(select  string_agg(to_char(fecharegistro, 'DD/MM/YYYY') || ' ' || descripcion, ', ' order by descripcion) 
              from cobranza_motivo 
              where estado='ACT' AND planpagoid=pp.id 
              group by planpagoid) as Motivos,case when p.tipoemision='Anexo Conclusion' then 'E' when p.tipoemision='Anexo Exclusion' then 'E' else 'I' end tipo,p.tipoemision,s.nombre as sucursal from poliza p 
              inner join memo m on m.polizaid=p.id 
              inner join plan_pago pp on pp.memoid=m.id 
              inner join asegurado a on a.id=p.tomadorid 
               inner join sucursal s on s.id= p.sucursalid 
               inner join empresa e on e.id= s.empresaid 
              where e.id='` + empresaid + `' AND  P.estado in ('ACT','CER')  and m.estado='ACT'
               and  case when a.tipoasegurado='corporativo' then a.nit ='` + cinit + `' else a.ci ='` + cinit + `' end 
              and (pp.montocuota >(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id)) 
               order by pp.fechapago  asc,p.nropoliza asc`; */
          query = "WITH saldo_cte AS (\n    SELECT \n        pa.planpagoid, \n        COALESCE(SUM(pa.montousd), 0) AS saldo_pagado\n    FROM pagos pa\n    WHERE pa.estado = 'ACT'\n    GROUP BY pa.planpagoid\n),\nmotivos_cte AS (\n    SELECT \n        planpagoid, \n        string_agg(to_char(fecharegistro, 'DD/MM/YYYY') || ' ' || descripcion, ', ' ORDER BY descripcion) AS Motivos\n    FROM cobranza_motivo\n    WHERE estado = 'ACT'\n    GROUP BY planpagoid\n)\nSELECT  \n    pp.id,\n    pp.nro,\n    pp.fechapago AS fechacuota,\n    pp.montocuota,\n    pp.primaneta,\n    pp.comision,\n    pp.memoid,\n    pp.usuarioregistro,\n    pp.usuariomodificacion,\n    p.nropoliza,\n    a.nombrecompleto,\n    p.tipomoneda,\n    pp.montocuota - COALESCE(saldo_cte.saldo_pagado, 0) AS saldo,\n    CASE \n        WHEN EXTRACT(YEAR FROM pp.fechapago) = EXTRACT(YEAR FROM NOW()) \n             AND EXTRACT(MONTH FROM pp.fechapago) = EXTRACT(MONTH FROM NOW()) THEN 'Actuales'\n        WHEN pp.fechapago > NOW() THEN 'Pendientes'\n        ELSE 'Mora'\n    END AS Estado,\n    motivos_cte.Motivos,\n    CASE \n        WHEN p.tipoemision IN ('Anexo Conclusion', 'Anexo Exclusion') THEN 'E' \n        ELSE 'I' \n    END AS tipo,\n    p.tipoemision,\n    s.nombre AS sucursal\nFROM poliza p\nINNER JOIN memo m ON m.polizaid = p.id\nINNER JOIN plan_pago pp ON pp.memoid = m.id\nINNER JOIN asegurado a ON a.id = p.tomadorid\nINNER JOIN sucursal s ON s.id = p.sucursalid\nINNER JOIN empresa e ON e.id = s.empresaid\nLEFT JOIN saldo_cte ON saldo_cte.planpagoid = pp.id\nLEFT JOIN motivos_cte ON motivos_cte.planpagoid = pp.id\nWHERE \n    e.id = '" + empresaid + "'\n    AND p.estado IN ('ACT', 'CER')\n    AND m.estado = 'ACT'\n    AND (\n        (a.tipoasegurado = 'corporativo' AND a.nit = '" + cinit + "') \n        OR (a.tipoasegurado <> 'corporativo' AND a.ci = '" + cinit + "')\n    )\n    AND pp.montocuota > COALESCE(saldo_cte.saldo_pagado, 0)\nORDER BY \n    pp.fechapago ASC,\n    p.nropoliza ASC;";
          _context16.next = 5;
          return _database.sequelize.query(query, {
            type: QueryTypes.SELECT
          });
        case 5:
          pagos = _context16.sent;
          res.json({
            pagos: pagos
          });
          _context16.next = 13;
          break;
        case 9:
          _context16.prev = 9;
          _context16.t0 = _context16["catch"](1);
          console.log(_context16.t0);
          res.status(500).json({
            data: {
              estado: false,
              "error": _context16.t0.message
            }
          });
        case 13:
        case "end":
          return _context16.stop();
      }
    }, _callee16, null, [[1, 9]]);
  }));
  return _getPagosPorEmpresayCi.apply(this, arguments);
}
function getPagosPorSucursal(_x33, _x34) {
  return _getPagosPorSucursal.apply(this, arguments);
}
function _getPagosPorSucursal() {
  _getPagosPorSucursal = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res) {
    var sucursalid, _req$body3, fechainicio, fechafin, query, pagos;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          sucursalid = req.params.sucursalid;
          _req$body3 = req.body, fechainicio = _req$body3.fechainicio, fechafin = _req$body3.fechafin;
          console.log(sucursalid);
          _context17.prev = 3;
          query = "SELECT pa.montobs,pa.montousd,pa.fecharegistro,pa.fechamodificacion,p.nropoliza, case when a.tipoasegurado='individual' then a.ci else a.nit end cinit,a.nombrecompleto ,case when pa.tipo='I' then 'Ingreso'  else 'Egreso' end tipo,p.tipoemision,s.nombre as sucursal\n        from pagos pa\n        inner join plan_pago pp on pp.id=pa.planpagoid\n        inner join memo m on m.id=pp.memoid\n        inner join poliza p on p.id=m.polizaid\n        inner join sucursal s on s.id=m.sucursalid\n        inner join asegurado a on a.id=p.tomadorid\n        where pa.estado='ACT'  and m.estado='ACT' and pa.montousd>0 and to_char(pa.fecharegistro, 'YYYYMMDD')::integer>=  " + fechainicio + "  and to_char(pa.fecharegistro, 'YYYYMMDD'):: integer <= " + fechafin + "  and s.id='" + sucursalid + "'  order by pa.fechamodificacion asc";
          console.log(query);
          _context17.next = 8;
          return _database.sequelize.query(query, {
            type: QueryTypes.SELECT
          });
        case 8:
          pagos = _context17.sent;
          res.json({
            pagos: pagos
          });
          _context17.next = 16;
          break;
        case 12:
          _context17.prev = 12;
          _context17.t0 = _context17["catch"](3);
          console.log(_context17.t0);
          res.status(500).json({
            data: {
              estado: false,
              "error": _context17.t0.message
            }
          });
        case 16:
        case "end":
          return _context17.stop();
      }
    }, _callee17, null, [[3, 12]]);
  }));
  return _getPagosPorSucursal.apply(this, arguments);
}
function getPagosPorEmpresa(_x35, _x36) {
  return _getPagosPorEmpresa.apply(this, arguments);
}
/**MONTOS TOTALES PARA DASHBOARD  POR EMPRESA*/
function _getPagosPorEmpresa() {
  _getPagosPorEmpresa = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18(req, res) {
    var empresaid, _req$body4, fechainicio, fechafin, query, pagos;
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          empresaid = req.params.empresaid;
          _req$body4 = req.body, fechainicio = _req$body4.fechainicio, fechafin = _req$body4.fechafin;
          _context18.prev = 2;
          query = "SELECT pa.montobs,pa.montousd,pa.fecharegistro,pa.fechamodificacion,p.nropoliza, case when a.tipoasegurado='individual' then a.ci else a.nit end cinit,a.nombrecompleto ,case when pa.tipo='I' then 'Ingreso'  else 'Egreso' end tipo,p.tipoemision,s.nombre as sucursal\n        from pagos pa\n        inner join plan_pago pp on pp.id=pa.planpagoid\n        inner join memo m on m.id=pp.memoid\n        inner join poliza p on p.id=m.polizaid\n        inner join sucursal s on s.id=m.sucursalid\n        inner join asegurado a on a.id=p.tomadorid\n        where pa.estado='ACT'  and m.estado='ACT' and pa.montousd>0 and to_char(pa.fecharegistro, 'YYYYMMDD')::integer>=  " + fechainicio + "  and to_char(pa.fecharegistro, 'YYYYMMDD'):: integer <= " + fechafin + "  and s.empresaid='" + empresaid + "'  order by pa.fechamodificacion asc"; //console.log(query);
          _context18.next = 6;
          return _database.sequelize.query(query, {
            type: QueryTypes.SELECT
          });
        case 6:
          pagos = _context18.sent;
          res.json({
            pagos: pagos
          });
          _context18.next = 14;
          break;
        case 10:
          _context18.prev = 10;
          _context18.t0 = _context18["catch"](2);
          console.log(_context18.t0);
          res.status(500).json({
            data: {
              estado: false,
              "error": _context18.t0.message
            }
          });
        case 14:
        case "end":
          return _context18.stop();
      }
    }, _callee18, null, [[2, 10]]);
  }));
  return _getPagosPorEmpresa.apply(this, arguments);
}
function getTotalPagosPorEmpresa(_x37, _x38) {
  return _getTotalPagosPorEmpresa.apply(this, arguments);
}
/** MONTOS TOTALES PARA DASHBOARD  POR SUCURSAL*/
function _getTotalPagosPorEmpresa() {
  _getTotalPagosPorEmpresa = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19(req, res) {
    var empresaid, query, pagos;
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          empresaid = req.params.empresaid;
          _context19.prev = 1;
          query = "select  COUNT(*) cantidad,coalesce(SUM(p.montobs),0) montobs from pagos p\n        inner join plan_pago pp on pp.id=p.planpagoid\n        inner join memo m on m.id=pp.memoid\n        inner join sucursal s on s.id =p.sucursalid\n        inner join empresa e on e.id =s.empresaid\n        where to_char(p.fecharegistro, 'YYYY-MM')= to_char(now(), 'YYYY-MM') and p.estado ='ACT'  and m.estado='ACT' and e.id ='" + empresaid + "'";
          _context19.next = 5;
          return _database.sequelize.query(query, {
            type: QueryTypes.SELECT
          });
        case 5:
          pagos = _context19.sent;
          res.json({
            data: pagos
          });
          _context19.next = 13;
          break;
        case 9:
          _context19.prev = 9;
          _context19.t0 = _context19["catch"](1);
          console.log(_context19.t0);
          res.status(500).json({
            data: {
              estado: false,
              "error": _context19.t0.message
            }
          });
        case 13:
        case "end":
          return _context19.stop();
      }
    }, _callee19, null, [[1, 9]]);
  }));
  return _getTotalPagosPorEmpresa.apply(this, arguments);
}
function getTotalPagosPorSucursal(_x39, _x40) {
  return _getTotalPagosPorSucursal.apply(this, arguments);
}
function _getTotalPagosPorSucursal() {
  _getTotalPagosPorSucursal = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee20(req, res) {
    var sucursalid, query, pagos;
    return _regeneratorRuntime().wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          sucursalid = req.params.sucursalid;
          _context20.prev = 1;
          query = "select  COUNT(*) cantidad,coalesce(SUM(p.montobs),0)montobs from pagos p\n        inner join plan_pago pp on pp.id=p.planpagoid\n        inner join memo m on m.id=pp.memoid\n        where to_char(p.fecharegistro, 'YYYY-MM')= to_char(now(), 'YYYY-MM') and p.estado ='ACT' and m.estado='ACT' and p.sucursalid ='" + sucursalid + "'";
          _context20.next = 5;
          return _database.sequelize.query(query, {
            type: QueryTypes.SELECT
          });
        case 5:
          pagos = _context20.sent;
          res.json({
            data: pagos
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
  return _getTotalPagosPorSucursal.apply(this, arguments);
}