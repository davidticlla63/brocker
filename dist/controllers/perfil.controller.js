"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bajaPerfil = bajaPerfil;
exports.createPerfil = createPerfil;
exports.createPerfilPermisos = createPerfilPermisos;
exports.deletePerfil = deletePerfil;
exports.getOnePerfil = getOnePerfil;
exports.getPerfilByEmpresa = getPerfilByEmpresa;
exports.getPerfilBySucursal = getPerfilBySucursal;
exports.getPerfils = getPerfils;
exports.getPermisosPorPerfil = getPermisosPorPerfil;
exports.updatePerfil = updatePerfil;
var _database = require("../database/database");
var _Empresa = _interopRequireDefault(require("../models/Empresa"));
var _Perfil = _interopRequireDefault(require("../models/Perfil"));
var _Permiso = _interopRequireDefault(require("../models/Permiso"));
var _Pagina = _interopRequireDefault(require("../models/Pagina"));
var _Accion = _interopRequireDefault(require("../models/Accion"));
var _UsuarioPerfil = _interopRequireDefault(require("../models/UsuarioPerfil"));
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
function getPerfils(_x, _x2) {
  return _getPerfils.apply(this, arguments);
}
function _getPerfils() {
  _getPerfils = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var usuarios;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _Perfil["default"].findAll(_defineProperty({
            where: {
              estado: 'ACT'
            },
            order: [['fechamodificacion', 'DESC']],
            include: _UsuarioPerfil["default"]
          }, "include", _Empresa["default"]));
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
  return _getPerfils.apply(this, arguments);
}
function createPerfil(_x3, _x4) {
  return _createPerfil.apply(this, arguments);
}
function _createPerfil() {
  _createPerfil = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _req$body, nombre, descripcion, sucursalid, empresaid, usuarioregistro, usuariomodificacion, estado, newPerfil;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, nombre = _req$body.nombre, descripcion = _req$body.descripcion, sucursalid = _req$body.sucursalid, empresaid = _req$body.empresaid, usuarioregistro = _req$body.usuarioregistro, usuariomodificacion = _req$body.usuariomodificacion, estado = _req$body.estado;
          _context2.prev = 1;
          _context2.next = 4;
          return _Perfil["default"].create({
            nombre: nombre,
            descripcion: descripcion,
            sucursalid: sucursalid,
            empresaid: empresaid,
            usuarioregistro: usuarioregistro,
            usuariomodificacion: usuariomodificacion,
            fecharegistro: new Date(),
            fechamodificacion: new Date(),
            estado: estado
          }, {
            fields: ['nombre', 'descripcion', 'sucursalid', 'empresaid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado']
          });
        case 4:
          newPerfil = _context2.sent;
          if (!newPerfil) {
            _context2.next = 7;
            break;
          }
          return _context2.abrupt("return", res.json({
            message: 'Perfil created successfully',
            data: newPerfil
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
  return _createPerfil.apply(this, arguments);
}
function getOnePerfil(_x5, _x6) {
  return _getOnePerfil.apply(this, arguments);
}
function _getOnePerfil() {
  _getOnePerfil = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var id, usuario;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.params.id;
          _context3.next = 4;
          return _Perfil["default"].findOne({
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
  return _getOnePerfil.apply(this, arguments);
}
function deletePerfil(_x7, _x8) {
  return _deletePerfil.apply(this, arguments);
}
function _deletePerfil() {
  _deletePerfil = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var id, deleteRowCount;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          _context4.next = 4;
          return _Perfil["default"].destroy({
            where: {
              id: id
            }
          });
        case 4:
          deleteRowCount = _context4.sent;
          res.json({
            message: 'Perfil deleted successfully',
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
  return _deletePerfil.apply(this, arguments);
}
function updatePerfil(_x9, _x10) {
  return _updatePerfil.apply(this, arguments);
}
function _updatePerfil() {
  _updatePerfil = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var id, _req$body2, nombre, descripcion, sucursalid, empresaid, usuarioregistro, usuariomodificacion, estado, updateRowCount, perfils;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, nombre = _req$body2.nombre, descripcion = _req$body2.descripcion, sucursalid = _req$body2.sucursalid, empresaid = _req$body2.empresaid, usuarioregistro = _req$body2.usuarioregistro, usuariomodificacion = _req$body2.usuariomodificacion, estado = _req$body2.estado;
          _context5.prev = 2;
          _context5.next = 5;
          return _Perfil["default"].update({
            nombre: nombre,
            descripcion: descripcion,
            sucursalid: sucursalid,
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
          updateRowCount = _context5.sent;
          _context5.next = 8;
          return _Perfil["default"].findOne({
            where: {
              id: id
            }
          });
        case 8:
          perfils = _context5.sent;
          res.json({
            message: 'Perfil update successfully',
            perfil: perfils
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
  return _updatePerfil.apply(this, arguments);
}
function getPerfilByEmpresa(_x11, _x12) {
  return _getPerfilByEmpresa.apply(this, arguments);
}
function _getPerfilByEmpresa() {
  _getPerfilByEmpresa = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var empresaid, perfils;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          empresaid = req.params.empresaid;
          _context6.next = 4;
          return _Perfil["default"].findAll({
            /* attributes: ['id', 'nombre', 'descripcion','fecharegistro',
            'fechamodificacion','estado','empresaid'], */
            where: {
              empresaid: empresaid,
              estado: 'ACT'
            },
            order: [['fechamodificacion', 'DESC']],
            include: _Sucursal["default"]
          });
        case 4:
          perfils = _context6.sent;
          res.json({
            perfils: perfils
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
  return _getPerfilByEmpresa.apply(this, arguments);
}
function getPerfilBySucursal(_x13, _x14) {
  return _getPerfilBySucursal.apply(this, arguments);
}
function _getPerfilBySucursal() {
  _getPerfilBySucursal = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var sucursalid, perfils;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          sucursalid = req.params.sucursalid;
          /*   const perfils = await sequelize.query("select c.* " +
            "from perfil c " +
            "inner join sucursal s on s.id=c.sucursalid  " +
            "where s.id= '" + sucursalid + "' and c.estado='ACT' order by c.fechamodificacion desc "
            , {
                type: QueryTypes.SELECT
            }); */
          _context7.next = 4;
          return _Perfil["default"].findAll({
            /* attributes: ['id', 'nombre', 'descripcion','fecharegistro',
            'fechamodificacion','estado','empresaid'], */
            where: {
              sucursalid: sucursalid,
              estado: 'ACT'
            },
            order: [['fechamodificacion', 'DESC']],
            include: _Sucursal["default"]
          });
        case 4:
          perfils = _context7.sent;
          res.json({
            perfils: perfils
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
  return _getPerfilBySucursal.apply(this, arguments);
}
function createPerfilPermisos(_x15, _x16) {
  return _createPerfilPermisos.apply(this, arguments);
}
function _createPerfilPermisos() {
  _createPerfilPermisos = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var perfilid, _req$body3, permisos, usuarioregistro, t, i;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          perfilid = req.params.perfilid;
          _req$body3 = req.body, permisos = _req$body3.permisos, usuarioregistro = _req$body3.usuarioregistro;
          _context8.next = 4;
          return _database.sequelize.transaction();
        case 4:
          t = _context8.sent;
          _context8.prev = 5;
          _context8.next = 8;
          return _Permiso["default"].update({
            fechamodificacion: new Date(),
            estado: 'BAJ',
            usuariomodificacion: usuarioregistro
          }, {
            where: {
              perfilid: perfilid
            }
          }, {
            transaction: t
          });
        case 8:
          i = 0;
        case 9:
          if (!(i < permisos.length)) {
            _context8.next = 15;
            break;
          }
          _context8.next = 12;
          return _Permiso["default"].create({
            /*  accionid: permisos[i].accionId,
             paginaid: permisos[i].paginaId, */
            //accionid: permisos[i].accionId,
            paginaaccionid: permisos[i].id,
            perfilid: perfilid,
            usuarioregistro: usuarioregistro,
            usuariomodificacion: usuarioregistro,
            fecharegistro: new Date(),
            fechamodificacion: new Date(),
            estado: 'ACT'
          }, {
            fields: ['paginaaccionid', 'perfilid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado']
          }, {
            transaction: t
          });
        case 12:
          i++;
          _context8.next = 9;
          break;
        case 15:
          _context8.next = 17;
          return t.commit();
        case 17:
          return _context8.abrupt("return", res.json({
            message: 'Permisos created successfully',
            data: permisos
          }));
        case 20:
          _context8.prev = 20;
          _context8.t0 = _context8["catch"](5);
          _context8.next = 24;
          return t.rollback();
        case 24:
          //await newUsuario.destroy();

          //}
          console.log(_context8.t0);
          res.status(500).json({
            data: {
              estado: false,
              "error": e.message
            }
          });
          // throw new Error(err);
        case 26:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[5, 20]]);
  }));
  return _createPerfilPermisos.apply(this, arguments);
}
function getPermisosPorPerfil(_x17, _x18) {
  return _getPermisosPorPerfil.apply(this, arguments);
}
function _getPermisosPorPerfil() {
  _getPermisosPorPerfil = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var perfilid, permisos;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          perfilid = req.params.perfilid;
          _context9.prev = 1;
          _context9.next = 4;
          return _database.sequelize.query("select p.id as permisoid,pa.id as paginaaccionid, per.id perfilid,per.nombre as nombreperfil,pag.id paginaid,pag.nombre as nombrepagina,a.id accionid , a.nombre as nombreaccion \n            from pagina pag \n            inner join pagina_accion pa on pa.paginaid=pag.id and pa.estado='ACT'\n            inner join permiso p on P.paginaaccionid=pa.id and  p.estado='ACT' \n            inner join accion a on a.id=pa.accionid \n            inner join perfil per on per.id=p.perfilid \n            where per.id= '" + perfilid + "' order by per.fechamodificacion desc ", {
            type: QueryTypes.SELECT
          });
        case 4:
          permisos = _context9.sent;
          //console.log(JSON.stringify(usuarios[0], null, 2));

          res.json({
            permisos: permisos
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
  return _getPermisosPorPerfil.apply(this, arguments);
}
function bajaPerfil(_x19, _x20) {
  return _bajaPerfil.apply(this, arguments);
}
function _bajaPerfil() {
  _bajaPerfil = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var id, usuariomodificacion, permisos, updateRowCount, usuarios;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          id = req.params.id;
          usuariomodificacion = req.body.usuariomodificacion;
          _context10.prev = 2;
          _context10.next = 5;
          return _database.sequelize.query("SELECT u.id,u.nick,u.usuarioregistro,u.usuariomodificacion,u.fecharegistro,u.fechamodificacion,u.empresaid,u.personalid,u.estado\n        ,p.nombrecompleto,s.id as sucursalid,s.nombre as nombresucursal,per.id as perfilid,per.nombre as nombreperfil\n        FROM usuario u \n        inner join personal p on p.id=u.personalid and p.estado='ACT' \n        inner join sucursal_usuario su on  su.usuarioid=u.id and su.estado='ACT' \n        INNER JOIN sucursal s on s.id= su.sucursalid  and s.estado='ACT' \n        inner join  usuario_perfil up on up.usuarioid=u.id and up. estado='ACT' \n        inner join perfil per on per.id=up.perfilid\n            where per.id= '" + id + "' order by per.fechamodificacion desc ", {
            type: QueryTypes.SELECT
          });
        case 5:
          permisos = _context10.sent;
          if (!(permisos.length > 0)) {
            _context10.next = 8;
            break;
          }
          throw new Error("No se puede dar de baja. Hay varios usuarios que estan asisgnados a este perfil : " + permisos);
        case 8:
          _context10.next = 10;
          return _Perfil["default"].update({
            usuariomodificacion: usuariomodificacion,
            fechamodificacion: new Date(),
            estado: "BAJ"
          }, {
            where: {
              id: id
            }
          });
        case 10:
          updateRowCount = _context10.sent;
          _context10.next = 13;
          return _Perfil["default"].findOne({
            where: {
              id: id
            }
          } //,{ include: Sucursal } 
          );
        case 13:
          usuarios = _context10.sent;
          res.json({
            message: 'Perfil baja successfully',
            count: usuarios
          });
          _context10.next = 21;
          break;
        case 17:
          _context10.prev = 17;
          _context10.t0 = _context10["catch"](2);
          console.log(_context10.t0);
          res.status(500).json({
            data: {
              estado: false,
              "error": _context10.t0.message
            }
          });
        case 21:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[2, 17]]);
  }));
  return _bajaPerfil.apply(this, arguments);
}