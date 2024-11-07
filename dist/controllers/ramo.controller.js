"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bajaRamo = bajaRamo;
exports.createRamo = createRamo;
exports.deleteRamo = deleteRamo;
exports.getOneRamo = getOneRamo;
exports.getRamos = getRamos;
exports.getRamosPorEmpresa = getRamosPorEmpresa;
exports.getRamosPorEmpresas = getRamosPorEmpresas;
exports.getSubRamos = getSubRamos;
exports.obtenerRamosPorEmpresa = obtenerRamosPorEmpresa;
exports.ramoPorEmpresa = ramoPorEmpresa;
exports.updateRamo = updateRamo;
var _database = require("../database/database");
var _Ramo = _interopRequireDefault(require("../models/Ramo"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var _require = require('sequelize'),
  QueryTypes = _require.QueryTypes;
function createRamo(_x, _x2) {
  return _createRamo.apply(this, arguments);
}
function _createRamo() {
  _createRamo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body, nombre, descripcion, spvs, tiporamoid, empresaid, ramoid, usuarioregistro, usuariomodificacion, estado, newRamo;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, nombre = _req$body.nombre, descripcion = _req$body.descripcion, spvs = _req$body.spvs, tiporamoid = _req$body.tiporamoid, empresaid = _req$body.empresaid, ramoid = _req$body.ramoid, usuarioregistro = _req$body.usuarioregistro, usuariomodificacion = _req$body.usuariomodificacion, estado = _req$body.estado;
          _context.prev = 1;
          _context.next = 4;
          return _Ramo["default"].create({
            nombre: nombre,
            descripcion: descripcion,
            spvs: spvs,
            tiporamoid: tiporamoid,
            empresaid: empresaid,
            usuarioregistro: usuarioregistro,
            usuariomodificacion: usuariomodificacion,
            fecharegistro: new Date(),
            fechamodificacion: new Date(),
            estado: estado,
            ramoid: ramoid
          }, {
            fields: ['nombre', 'descripcion', 'spvs', 'tiporamoid', 'empresaid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado', 'ramoid']
          });
        case 4:
          newRamo = _context.sent;
          if (!newRamo) {
            _context.next = 7;
            break;
          }
          return _context.abrupt("return", res.json({
            message: 'Ramo created successfully',
            data: newRamo
          }));
        case 7:
          _context.next = 13;
          break;
        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0);
          res.status(500).json({
            data: {
              estado: false,
              "error": _context.t0.message
            }
          });
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 9]]);
  }));
  return _createRamo.apply(this, arguments);
}
function getOneRamo(_x3, _x4) {
  return _getOneRamo.apply(this, arguments);
}
function _getOneRamo() {
  _getOneRamo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var id, usuario;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          id = req.params.id;
          _context2.next = 4;
          return _Ramo["default"].findOne({
            where: {
              id: id
            }
          });
        case 4:
          usuario = _context2.sent;
          res.json({
            data: usuario
          });
          _context2.next = 12;
          break;
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          res.status(500).json({
            data: {
              estado: false,
              "error": _context2.t0.message
            }
          });
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return _getOneRamo.apply(this, arguments);
}
function deleteRamo(_x5, _x6) {
  return _deleteRamo.apply(this, arguments);
}
function _deleteRamo() {
  _deleteRamo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var id, deleteRowCount;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.params.id;
          _context3.next = 4;
          return _Ramo["default"].destroy({
            where: {
              id: id
            }
          });
        case 4:
          deleteRowCount = _context3.sent;
          res.json({
            message: 'Ramo deleted successfully',
            count: deleteRowCount
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
  return _deleteRamo.apply(this, arguments);
}
function updateRamo(_x7, _x8) {
  return _updateRamo.apply(this, arguments);
}
function _updateRamo() {
  _updateRamo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var id, _req$body2, nombre, descripcion, spvs, tiporamoid, empresaid, usuarioregistro, usuariomodificacion, fecharegistro, estado, ramoid, updateRowCount, ramos;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, nombre = _req$body2.nombre, descripcion = _req$body2.descripcion, spvs = _req$body2.spvs, tiporamoid = _req$body2.tiporamoid, empresaid = _req$body2.empresaid, usuarioregistro = _req$body2.usuarioregistro, usuariomodificacion = _req$body2.usuariomodificacion, fecharegistro = _req$body2.fecharegistro, estado = _req$body2.estado, ramoid = _req$body2.ramoid;
          _context4.prev = 2;
          _context4.next = 5;
          return _Ramo["default"].update({
            nombre: nombre,
            descripcion: descripcion,
            spvs: spvs,
            tiporamoid: tiporamoid,
            empresaid: empresaid,
            usuarioregistro: usuarioregistro,
            usuariomodificacion: usuariomodificacion,
            fecharegistro: fecharegistro,
            fechamodificacion: new Date(),
            estado: estado,
            ramoid: ramoid
          }, {
            where: {
              id: id
            }
          });
        case 5:
          updateRowCount = _context4.sent;
          _context4.next = 8;
          return _Ramo["default"].findOne({
            where: {
              id: id
            }
          });
        case 8:
          ramos = _context4.sent;
          res.json({
            message: 'Ramo update successfully',
            count: ramos
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
  return _updateRamo.apply(this, arguments);
}
function getRamos(_x9, _x10) {
  return _getRamos.apply(this, arguments);
}
function _getRamos() {
  _getRamos = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var ramos;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return _Ramo["default"].findAll({
            where: {
              estado: 'ACT'
            },
            order: [['fechamodificacion', 'DESC']]
          });
        case 3:
          ramos = _context5.sent;
          res.json({
            data: ramos
          });
          _context5.next = 11;
          break;
        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);
          res.status(500).json({
            data: {
              estado: false,
              "error": _context5.t0.message
            }
          });
        case 11:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 7]]);
  }));
  return _getRamos.apply(this, arguments);
}
function getSubRamos(_x11, _x12) {
  return _getSubRamos.apply(this, arguments);
}
function _getSubRamos() {
  _getSubRamos = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var ramoid, ramos;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          ramoid = req.params.ramoid;
          _context6.prev = 1;
          _context6.next = 4;
          return _Ramo["default"].findAll({
            where: {
              ramoid: ramoid,
              estado: 'ACT'
            },
            order: [['fechamodificacion', 'DESC']]
          });
        case 4:
          ramos = _context6.sent;
          res.json({
            data: ramos
          });
          _context6.next = 12;
          break;
        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](1);
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
    }, _callee6, null, [[1, 8]]);
  }));
  return _getSubRamos.apply(this, arguments);
}
function getRamosPorEmpresa(_x13, _x14) {
  return _getRamosPorEmpresa.apply(this, arguments);
}
function _getRamosPorEmpresa() {
  _getRamosPorEmpresa = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var empresaid, ramos;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          empresaid = req.params.empresaid;
          _context7.prev = 1;
          _context7.next = 4;
          return _database.sequelize.query("select r.* ,tr.nombre as tiporamo ,tr.spvs spvstipo\n            from ramo r \n            inner join tipo_ramo tr on tr.id=r.tiporamoid \n            where r.empresaid= '" + empresaid + "' and r.estado='ACT' and r.ramoid is null order by r.fechamodificacion desc ", {
            type: QueryTypes.SELECT
          });
        case 4:
          ramos = _context7.sent;
          //const ramos = await Ramo.findAll({ where: { estado: 'ACT', empresaid } });
          res.json({
            data: ramos
          });
          _context7.next = 12;
          break;
        case 8:
          _context7.prev = 8;
          _context7.t0 = _context7["catch"](1);
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
    }, _callee7, null, [[1, 8]]);
  }));
  return _getRamosPorEmpresa.apply(this, arguments);
}
function bajaRamo(_x15, _x16) {
  return _bajaRamo.apply(this, arguments);
}
function _bajaRamo() {
  _bajaRamo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var id, usuariomodificacion, updateRowCount, ramos;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          id = req.params.id;
          console.log("bajaRamo");
          usuariomodificacion = req.body.usuariomodificacion;
          _context8.prev = 3;
          _context8.next = 6;
          return _Ramo["default"].update({
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
          return _Ramo["default"].findOne({
            where: {
              id: id
            }
          });
        case 9:
          ramos = _context8.sent;
          res.json({
            message: 'Ramo baja successfully',
            count: ramos
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
  return _bajaRamo.apply(this, arguments);
}
function getRamosPorEmpresas(_x17, _x18) {
  return _getRamosPorEmpresas.apply(this, arguments);
}
function _getRamosPorEmpresas() {
  _getRamosPorEmpresas = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var empresaid, sql, tiporamos;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          empresaid = req.params.empresaid;
          _context9.prev = 1;
          sql = "select t.id,t.spvs, t.nombre as tipo,case when r2.id is null then  r.id else r2.id end ramoid,case when r2.id is null then  r.spvs else  r2.spvs end  spvsramo \n        ,case when r2.id is null then  r.nombre else r2.nombre end ramo ,case when r2.id is null then NULL else r.id end  subramoid,case when r2.id is null then NULL else r.nombre end  subramo \n        ,case when r2.id is null then '00' else r.spvs end  spvsubramo \n         from tipo_ramo t  \n        inner join ramo r on r.tiporamoid=t.id and r.empresaid=t.empresaid  \n        left join ramo r2 on r2.id =r.ramoid  \n        where r.estado='ACT' and t.empresaid='" + empresaid + "' order by r.fechamodificacion desc";
          /*   const sql = "select tr.id,tr.nombre as tipo,tr.spvs tipospvs,r.id ramoid,r.nombre as ramo,r.spvs ramospvs,sr.id subramoid,sr.nombre as subramo, case when sr.spvs is null then '00' else sr.spvs end subramospvs 
                " from tipo_ramo tr 
                " inner join ramo r on r.tiporamoid=tr.id and r.ramoid is null and r.estado='ACT' 
                " left join ramo sr on sr.ramoid=r.id and sr.estado='ACT'  
                " where  tr.empresaid= '` + empresaid + `' and r.ramoid is null order by r.fechamodificacion desc ,sr.fechamodificacion desc ";
          */
          console.log(sql);
          _context9.next = 6;
          return _database.sequelize.query(sql, {
            type: QueryTypes.SELECT
          });
        case 6:
          tiporamos = _context9.sent;
          /*  const ramos = await sequelize.query("select r.* ,tr.nombre as tiporamo 
               "from ramo r 
               "inner join tipo_ramo tr on tr.id=r.tiporamoid 
               "where r.empresaid= '` + empresaid + `' and r.estado='ACT' order by r.fechamodificacion desc "
               , {
                   type: QueryTypes.SELECT
               });
                 const tiporamos = await sequelize.query("select tr.* 
               "from tipo_ramo tr  
               "where tr.empresaid= '` + empresaid + `' and tr.estado='ACT' order by tr.fechamodificacion desc "
               , {
                   type: QueryTypes.SELECT
               });
           for (let i = 0; i < tiporamos.length; i++) {
                  const ramos = await sequelize.query("select r.* 
                   "from ramo r  
                   "where r.empresaid= '` + empresaid + `' and r.tiporamoid='` + tiporamos[i].id + `' and r.ramoid is null and r.estado='ACT' order by r.fechamodificacion desc "
                   , {
                       type: QueryTypes.SELECT
                   });
               for (let j = 0; j < ramos.length; i++) {
                      const subramos = await sequelize.query("select r.* 
                       "from ramo r  
                       "where r.ramo='` + ramos[j].id + `' and r.estado='ACT' order by r.fechamodificacion desc "
                       , {
                           type: QueryTypes.SELECT
                       });
                          res.json({
                            tiporamos:tiporamos[i],  tiporamos:tiporamos[i]
                       });
                  }
           } */
          res.json({
            data: tiporamos
          });
          _context9.next = 14;
          break;
        case 10:
          _context9.prev = 10;
          _context9.t0 = _context9["catch"](1);
          console.log(_context9.t0);
          res.status(500).json({
            data: {
              estado: false,
              "error": _context9.t0.message
            }
          });
        case 14:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[1, 10]]);
  }));
  return _getRamosPorEmpresas.apply(this, arguments);
}
function obtenerRamosPorEmpresa(_x19, _x20) {
  return _obtenerRamosPorEmpresa.apply(this, arguments);
}
function _obtenerRamosPorEmpresa() {
  _obtenerRamosPorEmpresa = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var empresaid, sql, ramos;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          empresaid = req.params.empresaid;
          _context10.prev = 1;
          sql = "select t.id,t.spvs, t.nombre as tipo,case when r2.id is null then  r.id else r2.id end ramoid,case when r2.id is null then  r.spvs else  r2.spvs end  spvsramo \n        ,case when r2.id is null then  r.nombre else r2.nombre end ramo ,case when r2.id is null then NULL else r.id end  subramoid,case when r2.id is null then NULL else r.nombre end  subramo \n        ,case when r2.id is null then '00'  else r.spvs end  spvsubramo \n         from tipo_ramo t  \n        inner join ramo r on r.tiporamoid=t.id and r.empresaid=t.empresaid  \n        left join ramo r2 on r2.id =r.ramoid  \n        where r.estado='ACT' and t.empresaid='" + empresaid + "' order by r.fechamodificacion desc";
          /*   const ramos = await sequelize.query("select t.id,t.nombre tipo,t.spvs spvstipo,r.id ramoid,r.nombre ramo,r.spvs spvsramo,s.id subramoid, s.nombre subramo,case when s.spvs is null then '00' else s.spvs end spvssubramo 
                " from tipo_ramo t 
                "inner join ramo r on r.tiporamoid=t.id and r.ramoid is null 
                " left join ramo s on s.ramoid=r.id and s.estado='ACT' 
                " where  r.estado ='ACT'and r.empresaid= '` + empresaid + `' order by r.fechamodificacion desc "
                , {
                    type: QueryTypes.SELECT
                }); */
          _context10.next = 5;
          return _database.sequelize.query(sql, {
            type: QueryTypes.SELECT
          });
        case 5:
          ramos = _context10.sent;
          //const ramos = await Ramo.findAll({ where: { estado: 'ACT', empresaid } });
          res.json({
            data: ramos
          });
          _context10.next = 13;
          break;
        case 9:
          _context10.prev = 9;
          _context10.t0 = _context10["catch"](1);
          console.log(_context10.t0);
          res.status(500).json({
            data: {
              estado: false,
              "error": _context10.t0.message
            }
          });
        case 13:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[1, 9]]);
  }));
  return _obtenerRamosPorEmpresa.apply(this, arguments);
}
function ramoPorEmpresa(_x21, _x22) {
  return _ramoPorEmpresa.apply(this, arguments);
}
function _ramoPorEmpresa() {
  _ramoPorEmpresa = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var empresaid, sql, subRamoCompania;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          empresaid = req.params.empresaid;
          _context11.prev = 1;
          /*  const subRamoCompania = await sequelize.query(";with consulta as ( 
               "select t.id,t.spvs, t.nombre as tipo,r.id ramoid, r.spvs spvsramo ,r.nombre ramo from tipo_ramo t  
               "inner join ramo r on r.tiporamoid=t.id and r.empresaid=t.empresaid 
               "where r.estado='ACT' and r.ramoid is null and t.empresaid='` + empresaid + `'  
               "    ) 
               "    select c.*,sr.id subramoid,sr.nombre subramo,sr.spvs spvsubramo from consulta c 
               "    left join ramo sr on sr.ramoid=c.ramoid and sr.estado='ACT' "
               , {
                   type: QueryTypes.SELECT
               }); */
          /*    
            select t.id,t.spvs, t.nombre as tipo,case when r2.id is null then  r.id else r2.id end ramoid,case when r2.id is null then  r.spvs else  r2.spvs end  spvsramo 
            ,case when r2.id is null then  r.nombre else r2.nombre end ramo ,case when r2.id is null then NULL else r.id end  subramoid,case when r2.id is null then NULL else r.nombre end  subramo 
            ,case when r2.id is null then '00'  else r.spvs end  spvsubramo 
               */
          sql = "select t.id ,t.spvs,t.spvs||' '|| t.nombre as tipo,r.id ramoid,r.spvs spvsramo,case when r.ramoid is null then  r.spvs||' '||r.nombre else r2.spvs||'-'||r.spvs ||' '||r.nombre  end ramo\n,r2.spvs spvsramopadre,r2.spvs ||' ' ||r2.nombre ramopadre,r.nombre ramos ,r2.id ramopadreid,r2.nombre ramopadres\n             from tipo_ramo t  \n            inner join ramo r on r.tiporamoid=t.id and r.empresaid=t.empresaid  \n            left join ramo r2 on r2.id =r.ramoid  \n            where r.estado='ACT' and t.empresaid='" + empresaid + "' order by tipo, ramo -- order by t.nombre, r.nombre";
          /* const subRamoCompania = await sequelize.query(" select t.id,t.spvs, t.nombre as tipo,r2.id ramoid, r2.spvs spvsramo ,r2.nombre ramo ,r.id subramoid,r.nombre subramo,r.spvs spvsubramo 
          " from tipo_ramo t  
          "inner join ramo r on r.tiporamoid=t.id and r.empresaid=t.empresaid 
          "left join ramo r2 on r2.id =r.ramoid 
          "where r.estado='ACT' and t.empresaid='` + empresaid + `'  "
          , {
              type: QueryTypes.SELECT
          }); */
          //console.log(sql);
          _context11.next = 5;
          return _database.sequelize.query(sql, {
            type: QueryTypes.SELECT
          });
        case 5:
          subRamoCompania = _context11.sent;
          res.json({
            data: subRamoCompania
          });
          _context11.next = 13;
          break;
        case 9:
          _context11.prev = 9;
          _context11.t0 = _context11["catch"](1);
          console.log(_context11.t0);
          res.status(500).json({
            data: {
              estado: false,
              "error": _context11.t0.message
            }
          });
        case 13:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[1, 9]]);
  }));
  return _ramoPorEmpresa.apply(this, arguments);
}