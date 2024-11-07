"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bajaPolizaDetallePersona = bajaPolizaDetallePersona;
exports.createPolizaDetallePersona = createPolizaDetallePersona;
exports.deletePolizaDetallePersona = deletePolizaDetallePersona;
exports.getPolizaDetallePersonaPorPoliza = getPolizaDetallePersonaPorPoliza;
exports.getPolizaDetallePersonas = getPolizaDetallePersonas;
exports.polizaDetallePersonasPorPoliza = polizaDetallePersonasPorPoliza;
exports.updatePolizaDetallePersona = updatePolizaDetallePersona;
var _PolizaDetallePersona = _interopRequireDefault(require("../models/PolizaDetallePersona"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function getPolizaDetallePersonas(_x, _x2) {
  return _getPolizaDetallePersonas.apply(this, arguments);
}
function _getPolizaDetallePersonas() {
  _getPolizaDetallePersonas = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var polizaDetallePersonas;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _PolizaDetallePersona["default"].findAll({
            where: {
              estado: 'ACT'
            }
          });
        case 3:
          polizaDetallePersonas = _context.sent;
          res.json({
            data: polizaDetallePersonas
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
  return _getPolizaDetallePersonas.apply(this, arguments);
}
function createPolizaDetallePersona(_x3, _x4) {
  return _createPolizaDetallePersona.apply(this, arguments);
}
function _createPolizaDetallePersona() {
  _createPolizaDetallePersona = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _req$body, titular, placa, tipovehiculo, marcavehiculo, colorvehiculo, aniovehiculo, primaindividual, primanetaindividualbs, primanetaindividualusd, usuarioregistro, usuariomodificacion, _req$body$fecharegist, fecharegistro, _req$body$fechamodifi, fechamodificacion, estado, polizaid, adicionales, t, newPolizaDetallePersona, i;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, titular = _req$body.titular, placa = _req$body.placa, tipovehiculo = _req$body.tipovehiculo, marcavehiculo = _req$body.marcavehiculo, colorvehiculo = _req$body.colorvehiculo, aniovehiculo = _req$body.aniovehiculo, primaindividual = _req$body.primaindividual, primanetaindividualbs = _req$body.primanetaindividualbs, primanetaindividualusd = _req$body.primanetaindividualusd, usuarioregistro = _req$body.usuarioregistro, usuariomodificacion = _req$body.usuariomodificacion, _req$body$fecharegist = _req$body.fecharegistro, fecharegistro = _req$body$fecharegist === void 0 ? new Date() : _req$body$fecharegist, _req$body$fechamodifi = _req$body.fechamodificacion, fechamodificacion = _req$body$fechamodifi === void 0 ? new Date() : _req$body$fechamodifi, estado = _req$body.estado, polizaid = _req$body.polizaid, adicionales = _req$body.adicionales;
          _context2.next = 3;
          return sequelize.transaction();
        case 3:
          t = _context2.sent;
          _context2.prev = 4;
          _context2.next = 7;
          return _PolizaDetallePersona["default"].create({
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
          newPolizaDetallePersona = _context2.sent;
          i = 0;
        case 9:
          if (!(i < adicionales.length)) {
            _context2.next = 15;
            break;
          }
          _context2.next = 12;
          return PolizaDetallePersonaAdicional.create({
            polizadetalleid: newPolizaDetallePersona.id,
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
          if (!newPolizaDetallePersona) {
            _context2.next = 19;
            break;
          }
          return _context2.abrupt("return", res.json({
            message: 'PolizaDetallePersona created successfully',
            data: newPolizaDetallePersona
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
          if (!newPolizaDetallePersona) {
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
    }, _callee2, null, [[4, 21]]);
  }));
  return _createPolizaDetallePersona.apply(this, arguments);
}
function updatePolizaDetallePersona(_x5, _x6) {
  return _updatePolizaDetallePersona.apply(this, arguments);
}
function _updatePolizaDetallePersona() {
  _updatePolizaDetallePersona = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var id, _req$body2, titular, placa, tipovehiculo, marcavehiculo, colorvehiculo, aniovehiculo, primaindividual, primanetaindividualbs, primanetaindividualusd, usuarioregistro, usuariomodificacion, fecharegistro, _req$body2$fechamodif, fechamodificacion, estado, updateRowCount, polizaDetallePersonas;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, titular = _req$body2.titular, placa = _req$body2.placa, tipovehiculo = _req$body2.tipovehiculo, marcavehiculo = _req$body2.marcavehiculo, colorvehiculo = _req$body2.colorvehiculo, aniovehiculo = _req$body2.aniovehiculo, primaindividual = _req$body2.primaindividual, primanetaindividualbs = _req$body2.primanetaindividualbs, primanetaindividualusd = _req$body2.primanetaindividualusd, usuarioregistro = _req$body2.usuarioregistro, usuariomodificacion = _req$body2.usuariomodificacion, fecharegistro = _req$body2.fecharegistro, _req$body2$fechamodif = _req$body2.fechamodificacion, fechamodificacion = _req$body2$fechamodif === void 0 ? new Date() : _req$body2$fechamodif, estado = _req$body2.estado;
          _context3.prev = 2;
          _context3.next = 5;
          return _PolizaDetallePersona["default"].update({
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
          return _PolizaDetallePersona["default"].findOne({
            where: {
              id: id
            }
          });
        case 8:
          polizaDetallePersonas = _context3.sent;
          res.json({
            message: 'PolizaDetallePersona update successfully',
            count: polizaDetallePersonas
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
    }, _callee3, null, [[2, 12]]);
  }));
  return _updatePolizaDetallePersona.apply(this, arguments);
}
function bajaPolizaDetallePersona(_x7, _x8) {
  return _bajaPolizaDetallePersona.apply(this, arguments);
}
function _bajaPolizaDetallePersona() {
  _bajaPolizaDetallePersona = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var id, usuariomodificacion, updateRowCount, polizaDetallePersonas;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          console.log("bajaPolizaDetallePersona");
          usuariomodificacion = req.body.usuariomodificacion;
          _context4.prev = 3;
          _context4.next = 6;
          return _PolizaDetallePersona["default"].update({
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
          return _PolizaDetallePersona["default"].findOne({
            where: {
              id: id
            }
          });
        case 9:
          polizaDetallePersonas = _context4.sent;
          res.json({
            message: 'PolizaDetallePersona baja successfully',
            count: polizaDetallePersonas
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
    }, _callee4, null, [[3, 13]]);
  }));
  return _bajaPolizaDetallePersona.apply(this, arguments);
}
function getPolizaDetallePersonaPorPoliza(_x9, _x10) {
  return _getPolizaDetallePersonaPorPoliza.apply(this, arguments);
}
function _getPolizaDetallePersonaPorPoliza() {
  _getPolizaDetallePersonaPorPoliza = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var polizaid, usuario;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          polizaid = req.params.polizaid;
          _context5.next = 4;
          return _PolizaDetallePersona["default"].findAll({
            where: {
              polizaid: polizaid,
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
    }, _callee5, null, [[0, 8]]);
  }));
  return _getPolizaDetallePersonaPorPoliza.apply(this, arguments);
}
function polizaDetallePersonasPorPoliza(_x11, _x12) {
  return _polizaDetallePersonasPorPoliza.apply(this, arguments);
}
function _polizaDetallePersonasPorPoliza() {
  _polizaDetallePersonasPorPoliza = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var polizaid, polizaDetallePersonas;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          polizaid = req.params.polizaid;
          _context6.prev = 1;
          console.log(req.params);
          _context6.next = 5;
          return _PolizaDetallePersona["default"].findAll({
            where: {
              estado: 'ACT',
              polizaid: polizaid
            }
          });
        case 5:
          polizaDetallePersonas = _context6.sent;
          res.json({
            data: polizaDetallePersonas
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
    }, _callee6, null, [[1, 9]]);
  }));
  return _polizaDetallePersonasPorPoliza.apply(this, arguments);
}
function deletePolizaDetallePersona(_x13, _x14) {
  return _deletePolizaDetallePersona.apply(this, arguments);
}
function _deletePolizaDetallePersona() {
  _deletePolizaDetallePersona = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var id, deleteRowCount;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          id = req.params.id;
          _context7.next = 4;
          return _PolizaDetallePersona["default"].destroy({
            where: {
              id: id
            }
          });
        case 4:
          deleteRowCount = _context7.sent;
          res.json({
            message: 'PolizaDetallePersona deleted successfully',
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
  return _deletePolizaDetallePersona.apply(this, arguments);
}