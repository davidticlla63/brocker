"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bajaPersonal = bajaPersonal;
exports.createPersonal = createPersonal;
exports.deletePersonal = deletePersonal;
exports.getOnePersonal = getOnePersonal;
exports.getPersonals = getPersonals;
exports.personalByAreaTrabajo = personalByAreaTrabajo;
exports.personalByAreaTrabajoYEmpresa = personalByAreaTrabajoYEmpresa;
exports.personalByAreaTrabajoYSucursal = personalByAreaTrabajoYSucursal;
exports.personalByEmpresa = personalByEmpresa;
exports.personalBySucursal = personalBySucursal;
exports.personalByTipoCarteraYEmpresa = personalByTipoCarteraYEmpresa;
exports.personalByTipoCarteraYSucursal = personalByTipoCarteraYSucursal;
exports.updatePersonal = updatePersonal;
var _database = require("../database/database");
var _AreaTrabajo = _interopRequireDefault(require("../models/AreaTrabajo"));
var _Personal = _interopRequireDefault(require("../models/Personal"));
var _Sucursal = _interopRequireDefault(require("../models/Sucursal"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var _require = require('sequelize'),
  QueryTypes = _require.QueryTypes;
function getPersonals(_x, _x2) {
  return _getPersonals.apply(this, arguments);
}
function _getPersonals() {
  _getPersonals = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var usuarios;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _Personal["default"].findAll(_defineProperty({
            where: {
              estado: 'ACT'
            },
            include: _AreaTrabajo["default"]
          }, "include", _Sucursal["default"]));
        case 3:
          usuarios = _context.sent;
          res.json({
            data: usuarios
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
  return _getPersonals.apply(this, arguments);
}
function createPersonal(_x3, _x4) {
  return _createPersonal.apply(this, arguments);
}
function _createPersonal() {
  _createPersonal = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _req$body, nombrecompleto, sexo, fechanacimiento, ci, telefono1, telefono2, correo1, correo2, fotoperfil, areatrabajoid, sucursalid, usuarioregistro, usuariomodificacion, tipocartera, estado, newPersonal;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, nombrecompleto = _req$body.nombrecompleto, sexo = _req$body.sexo, fechanacimiento = _req$body.fechanacimiento, ci = _req$body.ci, telefono1 = _req$body.telefono1, telefono2 = _req$body.telefono2, correo1 = _req$body.correo1, correo2 = _req$body.correo2, fotoperfil = _req$body.fotoperfil, areatrabajoid = _req$body.areatrabajoid, sucursalid = _req$body.sucursalid, usuarioregistro = _req$body.usuarioregistro, usuariomodificacion = _req$body.usuariomodificacion, tipocartera = _req$body.tipocartera, estado = _req$body.estado;
          _context2.prev = 1;
          _context2.next = 4;
          return _Personal["default"].create({
            nombrecompleto: nombrecompleto,
            sexo: sexo,
            fechanacimiento: fechanacimiento,
            ci: ci,
            telefono1: telefono1,
            telefono2: telefono2,
            correo1: correo1,
            correo2: correo2,
            fotoperfil: fotoperfil,
            areatrabajoid: areatrabajoid,
            sucursalid: sucursalid,
            usuarioregistro: usuarioregistro,
            usuariomodificacion: usuariomodificacion,
            fecharegistro: new Date(),
            fechamodificacion: new Date(),
            tipocartera: tipocartera,
            estado: estado
          }, {
            fields: ['nombrecompleto', 'sexo', 'fechanacimiento', 'ci', 'telefono1', 'telefono2', 'correo1', 'correo2', 'fotoperfil', 'areatrabajoid', 'sucursalid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'tipocartera', 'estado']
          });
        case 4:
          newPersonal = _context2.sent;
          if (!newPersonal) {
            _context2.next = 7;
            break;
          }
          return _context2.abrupt("return", res.json({
            message: 'Personal created successfully',
            data: newPersonal
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
  return _createPersonal.apply(this, arguments);
}
function getOnePersonal(_x5, _x6) {
  return _getOnePersonal.apply(this, arguments);
}
function _getOnePersonal() {
  _getOnePersonal = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var id, usuario;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.params.id;
          _context3.next = 4;
          return _Personal["default"].findOne({
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
    }, _callee3, null, [[0, 8]]);
  }));
  return _getOnePersonal.apply(this, arguments);
}
function deletePersonal(_x7, _x8) {
  return _deletePersonal.apply(this, arguments);
}
function _deletePersonal() {
  _deletePersonal = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var id, deleteRowCount;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          _context4.next = 4;
          return _Personal["default"].destroy({
            where: {
              id: id
            }
          });
        case 4:
          deleteRowCount = _context4.sent;
          res.json({
            message: 'Personal deleted successfully',
            count: deleteRowCount
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
  return _deletePersonal.apply(this, arguments);
}
function updatePersonal(_x9, _x10) {
  return _updatePersonal.apply(this, arguments);
}
function _updatePersonal() {
  _updatePersonal = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var id, _req$body2, nombrecompleto, sexo, fechanacimiento, ci, telefono1, telefono2, correo1, correo2, fotoperfil, areatrabajoid, sucursalid, usuarioregistro, usuariomodificacion, fecharegistro, tipocartera, estado, updateRowCount, personals;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, nombrecompleto = _req$body2.nombrecompleto, sexo = _req$body2.sexo, fechanacimiento = _req$body2.fechanacimiento, ci = _req$body2.ci, telefono1 = _req$body2.telefono1, telefono2 = _req$body2.telefono2, correo1 = _req$body2.correo1, correo2 = _req$body2.correo2, fotoperfil = _req$body2.fotoperfil, areatrabajoid = _req$body2.areatrabajoid, sucursalid = _req$body2.sucursalid, usuarioregistro = _req$body2.usuarioregistro, usuariomodificacion = _req$body2.usuariomodificacion, fecharegistro = _req$body2.fecharegistro, tipocartera = _req$body2.tipocartera, estado = _req$body2.estado;
          _context5.prev = 2;
          _context5.next = 5;
          return _Personal["default"].update({
            nombrecompleto: nombrecompleto,
            sexo: sexo,
            fechanacimiento: fechanacimiento,
            ci: ci,
            telefono1: telefono1,
            telefono2: telefono2,
            correo1: correo1,
            correo2: correo2,
            fotoperfil: fotoperfil,
            areatrabajoid: areatrabajoid,
            sucursalid: sucursalid,
            usuarioregistro: usuarioregistro,
            usuariomodificacion: usuariomodificacion,
            fecharegistro: fecharegistro,
            fechamodificacion: new Date(),
            tipocartera: tipocartera,
            estado: estado
          }, {
            where: {
              id: id
            }
          });
        case 5:
          updateRowCount = _context5.sent;
          _context5.next = 8;
          return _Personal["default"].findOne({
            where: {
              id: id
            }
          });
        case 8:
          personals = _context5.sent;
          res.json({
            message: 'Personal update successfully',
            count: personals
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
    }, _callee5, null, [[2, 12]]);
  }));
  return _updatePersonal.apply(this, arguments);
}
function bajaPersonal(_x11, _x12) {
  return _bajaPersonal.apply(this, arguments);
}
function _bajaPersonal() {
  _bajaPersonal = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var id, usuariomodificacion, updateRowCount, personals;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          id = req.params.id;
          usuariomodificacion = req.body.usuariomodificacion;
          console.log("bajaPersonal");
          _context6.prev = 3;
          _context6.next = 6;
          return _Personal["default"].update({
            usuariomodificacion: usuariomodificacion,
            fechamodificacion: new Date(),
            estado: "BAJ"
          }, {
            where: {
              id: id
            }
          });
        case 6:
          updateRowCount = _context6.sent;
          _context6.next = 9;
          return _Personal["default"].findOne({
            where: {
              id: id
            }
          });
        case 9:
          personals = _context6.sent;
          res.json({
            message: 'Personal update successfully',
            count: personals
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
    }, _callee6, null, [[3, 13]]);
  }));
  return _bajaPersonal.apply(this, arguments);
}
function personalBySucursal(_x13, _x14) {
  return _personalBySucursal.apply(this, arguments);
}
function _personalBySucursal() {
  _personalBySucursal = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var sucursalid, personals;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          sucursalid = req.params.sucursalid;
          _context7.next = 4;
          return _database.sequelize.query(" select p.id, p.nombrecompleto,p.sexo, p.fechanacimiento, p.ci,p.telefono1,p.telefono2,p.correo1,p.correo2, p.sucursalid,p.areatrabajoid \n        ,p.fecharegistro,p.fechamodificacion,p.tipocartera,p.estado,a.nombre as areatrabajo,s.nombre as sucursal \n        from personal p \n        inner join area_trabajo a on a.id=p.areatrabajoid \n        inner join sucursal s on s.id=p.sucursalid \n        where s.id='" + sucursalid + "' and p.estado='ACT' order by p.fechamodificacion desc ", {
            type: QueryTypes.SELECT
          });
        case 4:
          personals = _context7.sent;
          /*  const personals = await Personal.findAll({
               where: {
                   sucursalid, estado: 'ACT'
               }, order: [
                   ['fechamodificacion', 'DESC']
               ],
               include: [{ model: AreaTrabajo, attributes: ['nombre'], require: true },
               {
                   model: Sucursal, attributes: ['nombre'], require: true
               }]
           }); */
          res.json({
            personals: personals
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
  return _personalBySucursal.apply(this, arguments);
}
function personalByEmpresa(_x15, _x16) {
  return _personalByEmpresa.apply(this, arguments);
}
function _personalByEmpresa() {
  _personalByEmpresa = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var empresaid, personals;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          empresaid = req.params.empresaid;
          _context8.next = 4;
          return _database.sequelize.query(" select p.id, p.nombrecompleto,p.sexo, p.fechanacimiento, p.ci,p.telefono1,p.telefono2,p.correo1,p.correo2, p.sucursalid,p.areatrabajoid \n        ,p.fecharegistro,p.fechamodificacion,p.estado,p.tipocartera,a.nombre as areatrabajo,s.nombre as sucursal \n        from personal p \n        inner join area_trabajo a on a.id=p.areatrabajoid \n        inner join sucursal s on s.id=p.sucursalid \n        inner join empresa e on e.id=s.empresaid \n        where e.id='" + empresaid + "' and p.estado='ACT' order by p.fechamodificacion desc ", {
            type: QueryTypes.SELECT
          });
        case 4:
          personals = _context8.sent;
          /* const personals = await Personal.findAll({
              where: { estado: 'ACT' }, order: [
                  ['fechamodificacion', 'DESC']
              ],
              include: [{ model: AreaTrabajo, attributes: ['nombre'], require: true },
              {
                  model: Sucursal, attributes: ['nombre'], require: true,
                  where: {
                      empresaid
                  }
              }] 
          });*/
          res.json({
            personals: personals
          });
          _context8.next = 12;
          break;
        case 8:
          _context8.prev = 8;
          _context8.t0 = _context8["catch"](0);
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
    }, _callee8, null, [[0, 8]]);
  }));
  return _personalByEmpresa.apply(this, arguments);
}
function personalByAreaTrabajo(_x17, _x18) {
  return _personalByAreaTrabajo.apply(this, arguments);
}
function _personalByAreaTrabajo() {
  _personalByAreaTrabajo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var areatrabajoid, personals;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          areatrabajoid = req.params.areatrabajoid;
          _context9.next = 4;
          return _Personal["default"].findAll({
            attributes: ['id', 'nombrecompleto', 'sexo', 'fechanacimiento', 'ci', 'telefono1', 'telefono2', 'correo1', 'correo2', 'sucursalid', 'areatrabajoid', 'fecharegistro', 'fechamodificacion', 'tipocartera', 'estado'],
            where: {
              areatrabajoid: areatrabajoid,
              estado: 'ACT'
            },
            order: [['fechamodificacion', 'DESC']]
          });
        case 4:
          personals = _context9.sent;
          res.json({
            personals: personals
          });
          _context9.next = 12;
          break;
        case 8:
          _context9.prev = 8;
          _context9.t0 = _context9["catch"](0);
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
    }, _callee9, null, [[0, 8]]);
  }));
  return _personalByAreaTrabajo.apply(this, arguments);
}
function personalByAreaTrabajoYSucursal(_x19, _x20) {
  return _personalByAreaTrabajoYSucursal.apply(this, arguments);
}
function _personalByAreaTrabajoYSucursal() {
  _personalByAreaTrabajoYSucursal = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var _req$params, areatrabajoid, sucursalid, personals;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _req$params = req.params, areatrabajoid = _req$params.areatrabajoid, sucursalid = _req$params.sucursalid;
          /*    const personals = await Personal.findAll({
                 attributes: ['id', 'nombrecompleto', 'sexo', 'fechanacimiento', 'ci', 'telefono1', 'telefono2', 'correo1', 'correo2', 'sucursalid', 'areatrabajoid'
                     , 'fecharegistro', 'fechamodificacion', 'estado'],
                 where: {
                     areatrabajoid, sucursalid, estado: 'ACT'
                 }
             });
             res.json({personals }); */
          _context10.next = 4;
          return _database.sequelize.query(" select p.id, p.nombrecompleto,p.sexo, p.fechanacimiento, p.ci,p.telefono1,p.telefono2,p.correo1,p.correo2, p.sucursalid,p.areatrabajoid \n        ,p.fecharegistro,p.fechamodificacion,p.tipocartera,p.estado \n        from personal p \n        inner join area_trabajo a on a.id=p.areatrabajoid \n        inner join sucursal s on s.id=p.sucursalid \n        where a.id in ('" + areatrabajoid + "') and s.id='" + sucursalid + "' and p.estado='ACT' order by p.nombrecompleto ", {
            type: QueryTypes.SELECT
          });
        case 4:
          personals = _context10.sent;
          res.json({
            personals: personals
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
    }, _callee10, null, [[0, 8]]);
  }));
  return _personalByAreaTrabajoYSucursal.apply(this, arguments);
}
function personalByAreaTrabajoYEmpresa(_x21, _x22) {
  return _personalByAreaTrabajoYEmpresa.apply(this, arguments);
}
function _personalByAreaTrabajoYEmpresa() {
  _personalByAreaTrabajoYEmpresa = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var _req$params2, areatrabajoid, empresaid, personals;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _req$params2 = req.params, areatrabajoid = _req$params2.areatrabajoid, empresaid = _req$params2.empresaid;
          _context11.next = 4;
          return _database.sequelize.query(" select p.id, p.nombrecompleto,p.sexo, p.fechanacimiento, p.ci,p.telefono1,p.telefono2,p.correo1,p.correo2, p.sucursalid,p.areatrabajoid \n            ,p.fecharegistro,p.fechamodificacion,p.tipocartera,p.estado \n            from personal p \n            inner join area_trabajo a on a.id=p.areatrabajoid \n            inner join sucursal s on s.id=p.sucursalid \n            inner join empresa e on e.id=s.empresaid \n            where a.id in ('" + areatrabajoid + "') and e.id='" + empresaid + "' and p.estado='ACT' order by p.nombrecompleto ", {
            type: QueryTypes.SELECT
          });
        case 4:
          personals = _context11.sent;
          res.json({
            personals: personals
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
    }, _callee11, null, [[0, 8]]);
  }));
  return _personalByAreaTrabajoYEmpresa.apply(this, arguments);
}
function personalByTipoCarteraYSucursal(_x23, _x24) {
  return _personalByTipoCarteraYSucursal.apply(this, arguments);
}
function _personalByTipoCarteraYSucursal() {
  _personalByTipoCarteraYSucursal = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var _req$params3, tipocartera, sucursalid, personals;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          _req$params3 = req.params, tipocartera = _req$params3.tipocartera, sucursalid = _req$params3.sucursalid;
          /*    const personals = await Personal.findAll({
                 attributes: ['id', 'nombrecompleto', 'sexo', 'fechanacimiento', 'ci', 'telefono1', 'telefono2', 'correo1', 'correo2', 'sucursalid', 'areatrabajoid'
                     , 'fecharegistro', 'fechamodificacion', 'estado'],
                 where: {
                     areatrabajoid, sucursalid, estado: 'ACT'
                 }
             });
             res.json({personals }); */
          _context12.next = 4;
          return _database.sequelize.query(" select p.id, p.nombrecompleto,p.sexo, p.fechanacimiento, p.ci,p.telefono1,p.telefono2,p.correo1,p.correo2, p.sucursalid,p.areatrabajoid \n        ,p.fecharegistro,p.fechamodificacion,p.tipocartera,p.estado \n        from personal p \n        inner join area_trabajo a on a.id=p.areatrabajoid \n        inner join sucursal s on s.id=p.sucursalid \n        where p.tipocartera in ('" + tipocartera + "') and s.id='" + sucursalid + "' and p.estado='ACT' order by p.nombrecompleto ", {
            type: QueryTypes.SELECT
          });
        case 4:
          personals = _context12.sent;
          res.json({
            personals: personals
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
    }, _callee12, null, [[0, 8]]);
  }));
  return _personalByTipoCarteraYSucursal.apply(this, arguments);
}
function personalByTipoCarteraYEmpresa(_x25, _x26) {
  return _personalByTipoCarteraYEmpresa.apply(this, arguments);
}
function _personalByTipoCarteraYEmpresa() {
  _personalByTipoCarteraYEmpresa = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var _req$params4, tipocartera, empresaid, personals;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          _req$params4 = req.params, tipocartera = _req$params4.tipocartera, empresaid = _req$params4.empresaid;
          _context13.next = 4;
          return _database.sequelize.query(" select p.id, p.nombrecompleto,p.sexo, p.fechanacimiento, p.ci,p.telefono1,p.telefono2,p.correo1,p.correo2, p.sucursalid,p.areatrabajoid \n            ,p.fecharegistro,p.fechamodificacion,p.tipocartera,p.estado \n            from personal p \n            inner join area_trabajo a on a.id=p.areatrabajoid \n            inner join sucursal s on s.id=p.sucursalid \n            inner join empresa e on e.id=s.empresaid \n            where p.tipocartera in ('" + tipocartera + "') and e.id='" + empresaid + "' and p.estado='ACT' order by p.nombrecompleto ", {
            type: QueryTypes.SELECT
          });
        case 4:
          personals = _context13.sent;
          res.json({
            personals: personals
          });
          _context13.next = 12;
          break;
        case 8:
          _context13.prev = 8;
          _context13.t0 = _context13["catch"](0);
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
    }, _callee13, null, [[0, 8]]);
  }));
  return _personalByTipoCarteraYEmpresa.apply(this, arguments);
}