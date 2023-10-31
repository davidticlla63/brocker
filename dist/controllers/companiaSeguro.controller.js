"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bajaCompaniaSeguro = bajaCompaniaSeguro;
exports.createCompaniaSeguro = createCompaniaSeguro;
exports.deleteCompaniaSeguro = deleteCompaniaSeguro;
exports.getCompaniaSeguros = getCompaniaSeguros;
exports.getCompaniaSegurosPorEmpresa = getCompaniaSegurosPorEmpresa;
exports.getOneCompaniaSeguro = getOneCompaniaSeguro;
exports.updateCompaniaSeguro = updateCompaniaSeguro;
var _CompaniaSeguro = _interopRequireDefault(require("../models/CompaniaSeguro"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function getCompaniaSeguros(_x, _x2) {
  return _getCompaniaSeguros.apply(this, arguments);
}
function _getCompaniaSeguros() {
  _getCompaniaSeguros = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var companiaSeguros;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _CompaniaSeguro["default"].findAll({
            where: {
              estado: 'ACT'
            },
            order: [['fechamodificacion', 'DESC']]
          });
        case 3:
          companiaSeguros = _context.sent;
          res.json({
            data: companiaSeguros
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
  return _getCompaniaSeguros.apply(this, arguments);
}
function getCompaniaSegurosPorEmpresa(_x3, _x4) {
  return _getCompaniaSegurosPorEmpresa.apply(this, arguments);
}
function _getCompaniaSegurosPorEmpresa() {
  _getCompaniaSegurosPorEmpresa = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var empresaid, companiaSeguros;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          empresaid = req.params.empresaid;
          _context2.prev = 1;
          _context2.next = 4;
          return _CompaniaSeguro["default"].findAll({
            where: {
              estado: 'ACT',
              empresaid: empresaid
            },
            order: [['fechamodificacion', 'DESC']]
          });
        case 4:
          companiaSeguros = _context2.sent;
          res.json({
            data: companiaSeguros
          });
          _context2.next = 11;
          break;
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](1);
          console.log(_context2.t0);
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return _getCompaniaSegurosPorEmpresa.apply(this, arguments);
}
function createCompaniaSeguro(_x5, _x6) {
  return _createCompaniaSeguro.apply(this, arguments);
}
function _createCompaniaSeguro() {
  _createCompaniaSeguro = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _req$body, nombre, descripcion, nit, representanteLegal, direccion, telefono1, telefono2, web, ciaSpvs, nrocuenta, banco1, tipomoneda1, nrocuenta2, banco2, tipomoneda2, empresaid, usuarioregistro, usuariomodificacion, estado, newCompaniaSeguro;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _req$body = req.body, nombre = _req$body.nombre, descripcion = _req$body.descripcion, nit = _req$body.nit, representanteLegal = _req$body.representanteLegal, direccion = _req$body.direccion, telefono1 = _req$body.telefono1, telefono2 = _req$body.telefono2, web = _req$body.web, ciaSpvs = _req$body.ciaSpvs, nrocuenta = _req$body.nrocuenta, banco1 = _req$body.banco1, tipomoneda1 = _req$body.tipomoneda1, nrocuenta2 = _req$body.nrocuenta2, banco2 = _req$body.banco2, tipomoneda2 = _req$body.tipomoneda2, empresaid = _req$body.empresaid, usuarioregistro = _req$body.usuarioregistro, usuariomodificacion = _req$body.usuariomodificacion, estado = _req$body.estado;
          _context3.prev = 1;
          _context3.next = 4;
          return _CompaniaSeguro["default"].create({
            nombre: nombre,
            descripcion: descripcion,
            nit: nit,
            representanteLegal: representanteLegal,
            direccion: direccion,
            telefono1: telefono1,
            telefono2: telefono2,
            web: web,
            ciaSpvs: ciaSpvs,
            nrocuenta: nrocuenta,
            banco1: banco1,
            tipomoneda1: tipomoneda1,
            nrocuenta2: nrocuenta2,
            banco2: banco2,
            tipomoneda2: tipomoneda2,
            empresaid: empresaid,
            usuarioregistro: usuarioregistro,
            usuariomodificacion: usuariomodificacion,
            fecharegistro: new Date(),
            fechamodificacion: new Date(),
            estado: estado
          }, {
            fields: ['nombre', 'descripcion', 'nit', 'representanteLegal', 'direccion', 'telefono1', 'telefono2', 'web', 'ciaSpvs', 'nrocuenta', 'banco1', 'tipomoneda1', 'nrocuenta2', 'banco2', 'tipomoneda2', 'empresaid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado']
          });
        case 4:
          newCompaniaSeguro = _context3.sent;
          if (!newCompaniaSeguro) {
            _context3.next = 7;
            break;
          }
          return _context3.abrupt("return", res.json({
            message: 'CompaniaSeguro created successfully',
            data: newCompaniaSeguro
          }));
        case 7:
          _context3.next = 13;
          break;
        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](1);
          console.log(_context3.t0);
          res.status(500).json({
            message: 'Something goes wrong',
            data: {}
          });
        case 13:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 9]]);
  }));
  return _createCompaniaSeguro.apply(this, arguments);
}
function getOneCompaniaSeguro(_x7, _x8) {
  return _getOneCompaniaSeguro.apply(this, arguments);
}
function _getOneCompaniaSeguro() {
  _getOneCompaniaSeguro = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var id, usuario;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          _context4.next = 4;
          return _CompaniaSeguro["default"].findOne({
            where: {
              id: id
            }
          });
        case 4:
          usuario = _context4.sent;
          res.json({
            data: usuario
          });
          _context4.next = 11;
          break;
        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);
        case 11:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 8]]);
  }));
  return _getOneCompaniaSeguro.apply(this, arguments);
}
function deleteCompaniaSeguro(_x9, _x10) {
  return _deleteCompaniaSeguro.apply(this, arguments);
}
function _deleteCompaniaSeguro() {
  _deleteCompaniaSeguro = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var id, deleteRowCount;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id;
          _context5.next = 4;
          return _CompaniaSeguro["default"].destroy({
            where: {
              id: id
            }
          });
        case 4:
          deleteRowCount = _context5.sent;
          res.json({
            message: 'CompaniaSeguro deleted successfully',
            count: deleteRowCount
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
  return _deleteCompaniaSeguro.apply(this, arguments);
}
function updateCompaniaSeguro(_x11, _x12) {
  return _updateCompaniaSeguro.apply(this, arguments);
}
function _updateCompaniaSeguro() {
  _updateCompaniaSeguro = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var id, _req$body2, nombre, descripcion, nit, representanteLegal, direccion, telefono1, telefono2, web, ciaSpvs, nrocuenta, banco1, tipomoneda1, nrocuenta2, banco2, tipomoneda2, empresaid, usuarioregistro, usuariomodificacion, estado, updateRowCount, companiaSeguros;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, nombre = _req$body2.nombre, descripcion = _req$body2.descripcion, nit = _req$body2.nit, representanteLegal = _req$body2.representanteLegal, direccion = _req$body2.direccion, telefono1 = _req$body2.telefono1, telefono2 = _req$body2.telefono2, web = _req$body2.web, ciaSpvs = _req$body2.ciaSpvs, nrocuenta = _req$body2.nrocuenta, banco1 = _req$body2.banco1, tipomoneda1 = _req$body2.tipomoneda1, nrocuenta2 = _req$body2.nrocuenta2, banco2 = _req$body2.banco2, tipomoneda2 = _req$body2.tipomoneda2, empresaid = _req$body2.empresaid, usuarioregistro = _req$body2.usuarioregistro, usuariomodificacion = _req$body2.usuariomodificacion, estado = _req$body2.estado;
          _context6.prev = 2;
          _context6.next = 5;
          return _CompaniaSeguro["default"].update({
            nombre: nombre,
            descripcion: descripcion,
            nit: nit,
            representanteLegal: representanteLegal,
            direccion: direccion,
            telefono1: telefono1,
            telefono2: telefono2,
            web: web,
            ciaSpvs: ciaSpvs,
            nrocuenta: nrocuenta,
            banco1: banco1,
            tipomoneda1: tipomoneda1,
            nrocuenta2: nrocuenta2,
            banco2: banco2,
            tipomoneda2: tipomoneda2,
            empresaid: empresaid,
            usuarioregistro: usuarioregistro,
            usuariomodificacion: usuariomodificacion,
            fechamodificacion: new Date(),
            estado: estado
          }, {
            where: {
              id: id
            }
          });
        case 5:
          updateRowCount = _context6.sent;
          _context6.next = 8;
          return _CompaniaSeguro["default"].findOne({
            where: {
              id: id
            }
          });
        case 8:
          companiaSeguros = _context6.sent;
          res.json({
            message: 'CompaniaSeguro update successfully',
            count: companiaSeguros
          });
          _context6.next = 16;
          break;
        case 12:
          _context6.prev = 12;
          _context6.t0 = _context6["catch"](2);
          console.log(_context6.t0);
          res.status(500).json({
            message: 'Something goes wrong',
            data: {}
          });
        case 16:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[2, 12]]);
  }));
  return _updateCompaniaSeguro.apply(this, arguments);
}
function bajaCompaniaSeguro(_x13, _x14) {
  return _bajaCompaniaSeguro.apply(this, arguments);
}
function _bajaCompaniaSeguro() {
  _bajaCompaniaSeguro = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var id, usuariomodificacion, updateRowCount, companiaSeguros;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          id = req.params.id;
          console.log("bajaCompaniaSeguro");
          usuariomodificacion = req.body.usuariomodificacion;
          _context7.prev = 3;
          _context7.next = 6;
          return _CompaniaSeguro["default"].update({
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
          return _CompaniaSeguro["default"].findOne({
            where: {
              id: id
            }
          });
        case 9:
          companiaSeguros = _context7.sent;
          res.json({
            message: 'CompaniaSeguro baja successfully',
            count: companiaSeguros
          });
          _context7.next = 17;
          break;
        case 13:
          _context7.prev = 13;
          _context7.t0 = _context7["catch"](3);
          console.log(_context7.t0);
          res.status(500).json({
            message: 'Something goes wrong',
            data: {}
          });
        case 17:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[3, 13]]);
  }));
  return _bajaCompaniaSeguro.apply(this, arguments);
}