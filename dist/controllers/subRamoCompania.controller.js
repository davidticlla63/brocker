"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bajaSubRamoCompania = bajaSubRamoCompania;
exports.createSubRamoCompania = createSubRamoCompania;
exports.deleteSubRamoCompania = deleteSubRamoCompania;
exports.getOneSubRamoCompania = getOneSubRamoCompania;
exports.getSubRamoCompania = getSubRamoCompania;
exports.subRamoCompaniaPorCompania = subRamoCompaniaPorCompania;
exports.subRamoCompaniaPorCompaniaYSucursal = subRamoCompaniaPorCompaniaYSucursal;
exports.subRamoCompaniaPorEmpresa = subRamoCompaniaPorEmpresa;
exports.subRamoCompaniaPorRamo = subRamoCompaniaPorRamo;
exports.subRamoCompaniaYCompaniaPorEmpresa = subRamoCompaniaYCompaniaPorEmpresa;
exports.subRamoCompaniaYCompaniaPorSucursal = subRamoCompaniaYCompaniaPorSucursal;
exports.updateSubRamoCompania = updateSubRamoCompania;
var _database = require("../database/database");
var _SubRamoCompania = _interopRequireDefault(require("../models/SubRamoCompania"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var _require = require('sequelize'),
  QueryTypes = _require.QueryTypes;
function createSubRamoCompania(_x, _x2) {
  return _createSubRamoCompania.apply(this, arguments);
}
function _createSubRamoCompania() {
  _createSubRamoCompania = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body, porcentajecomision, porcentajecomisioncredito, porcentajeprima, porcentajeprimacredito, nota, notacredito, usuarioregistro, usuariomodificacion, _req$body$fecharegist, fecharegistro, estado, ramoid, ramopadreid, companiaseguroid, sucursalid, regSubRamoCompanias, newSubRamoCompania;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, porcentajecomision = _req$body.porcentajecomision, porcentajecomisioncredito = _req$body.porcentajecomisioncredito, porcentajeprima = _req$body.porcentajeprima, porcentajeprimacredito = _req$body.porcentajeprimacredito, nota = _req$body.nota, notacredito = _req$body.notacredito, usuarioregistro = _req$body.usuarioregistro, usuariomodificacion = _req$body.usuariomodificacion, _req$body$fecharegist = _req$body.fecharegistro, fecharegistro = _req$body$fecharegist === void 0 ? new Date() : _req$body$fecharegist, estado = _req$body.estado, ramoid = _req$body.ramoid, ramopadreid = _req$body.ramopadreid, companiaseguroid = _req$body.companiaseguroid, sucursalid = _req$body.sucursalid;
          _context.prev = 1;
          _context.next = 4;
          return _SubRamoCompania["default"].findAll({
            where: {
              ramoid: ramoid,
              companiaseguroid: companiaseguroid,
              sucursalid: sucursalid,
              estado: 'ACT'
            }
          });
        case 4:
          regSubRamoCompanias = _context.sent;
          console.log(regSubRamoCompanias);
          if (!(regSubRamoCompanias.length > 0)) {
            _context.next = 8;
            break;
          }
          throw new Error("Ya existe Ramo asignado a la Compañia!!");
        case 8:
          _context.next = 10;
          return _SubRamoCompania["default"].create({
            porcentajecomision: porcentajecomision,
            porcentajecomisioncredito: porcentajecomisioncredito,
            porcentajeprima: porcentajeprima,
            porcentajeprimacredito: porcentajeprimacredito,
            nota: nota,
            notacredito: notacredito,
            usuarioregistro: usuarioregistro,
            usuariomodificacion: usuariomodificacion,
            fecharegistro: fecharegistro,
            fechamodificacion: new Date(),
            estado: estado,
            ramoid: ramoid,
            ramopadreid: ramopadreid,
            companiaseguroid: companiaseguroid,
            sucursalid: sucursalid
          }, {
            fields: ['porcentajecomision', 'porcentajecomisioncredito', 'porcentajeprima', 'porcentajeprimacredito', 'nota', 'notacredito', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado', 'ramoid', 'ramopadreid', 'companiaseguroid', 'sucursalid']
          });
        case 10:
          newSubRamoCompania = _context.sent;
          if (!newSubRamoCompania) {
            _context.next = 13;
            break;
          }
          return _context.abrupt("return", res.json({
            message: 'SubRamoCompania created successfully',
            data: newSubRamoCompania
          }));
        case 13:
          _context.next = 19;
          break;
        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0);
          res.json({
            data: {
              estado: false,
              "error": _context.t0.message
            }
          });
        case 19:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 15]]);
  }));
  return _createSubRamoCompania.apply(this, arguments);
}
function updateSubRamoCompania(_x3, _x4) {
  return _updateSubRamoCompania.apply(this, arguments);
}
function _updateSubRamoCompania() {
  _updateSubRamoCompania = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var id, _req$body2, porcentajecomision, porcentajecomisioncredito, porcentajeprima, porcentajeprimacredito, nota, notacredito, usuarioregistro, usuariomodificacion, fecharegistro, fechamodificacion, estado, ramoid, ramopadreid, companiaseguroid, updateRowCount, subRamoCompania;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, porcentajecomision = _req$body2.porcentajecomision, porcentajecomisioncredito = _req$body2.porcentajecomisioncredito, porcentajeprima = _req$body2.porcentajeprima, porcentajeprimacredito = _req$body2.porcentajeprimacredito, nota = _req$body2.nota, notacredito = _req$body2.notacredito, usuarioregistro = _req$body2.usuarioregistro, usuariomodificacion = _req$body2.usuariomodificacion, fecharegistro = _req$body2.fecharegistro, fechamodificacion = _req$body2.fechamodificacion, estado = _req$body2.estado, ramoid = _req$body2.ramoid, ramopadreid = _req$body2.ramopadreid, companiaseguroid = _req$body2.companiaseguroid;
          _context2.prev = 2;
          _context2.next = 5;
          return _SubRamoCompania["default"].update({
            porcentajecomision: porcentajecomision,
            porcentajecomisioncredito: porcentajecomisioncredito,
            porcentajeprima: porcentajeprima,
            porcentajeprimacredito: porcentajeprimacredito,
            nota: nota,
            notacredito: notacredito,
            usuarioregistro: usuarioregistro,
            usuariomodificacion: usuariomodificacion,
            fecharegistro: fecharegistro,
            fechamodificacion: fechamodificacion,
            estado: estado,
            ramoid: ramoid,
            ramopadreid: ramopadreid,
            companiaseguroid: companiaseguroid
          }, {
            where: {
              id: id
            }
          });
        case 5:
          updateRowCount = _context2.sent;
          _context2.next = 8;
          return _SubRamoCompania["default"].findOne({
            where: {
              id: id
            }
          });
        case 8:
          subRamoCompania = _context2.sent;
          res.json({
            message: 'SubRamoCompania update successfully',
            count: subRamoCompania
          });
          _context2.next = 16;
          break;
        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](2);
          console.log(_context2.t0);
          res.status(500).json({
            data: {
              estado: false,
              "error": _context2.t0.message
            }
          });
        case 16:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[2, 12]]);
  }));
  return _updateSubRamoCompania.apply(this, arguments);
}
function getSubRamoCompania(_x5, _x6) {
  return _getSubRamoCompania.apply(this, arguments);
}
function _getSubRamoCompania() {
  _getSubRamoCompania = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var subRamoCompania;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _SubRamoCompania["default"].findAll({
            where: {
              estado: 'ACT'
            }
          });
        case 3:
          subRamoCompania = _context3.sent;
          res.json({
            data: subRamoCompania
          });
          _context3.next = 11;
          break;
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          res.status(500).json({
            data: {
              estado: false,
              "error": _context3.t0.message
            }
          });
        case 11:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return _getSubRamoCompania.apply(this, arguments);
}
function subRamoCompaniaPorEmpresa(_x7, _x8) {
  return _subRamoCompaniaPorEmpresa.apply(this, arguments);
}
function _subRamoCompaniaPorEmpresa() {
  _subRamoCompaniaPorEmpresa = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var empresaid, subRamoCompania;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          empresaid = req.params.empresaid;
          _context4.prev = 1;
          console.log(req.params);
          //const subRamoCompania = await SubRamoCompania.findAll({ where: { estado: 'ACT', ramopadreid } });
          _context4.next = 5;
          return _database.sequelize.query("select rc.*,r.nombre nombreramo from sub_ramo_compania  rc \n            inner join ramo r on r.id=rc.ramoid \n            where r.empresaid= '" + empresaid + "' and rc.estado ='ACT' order by r.nombre ", {
            type: QueryTypes.SELECT
          });
        case 5:
          subRamoCompania = _context4.sent;
          res.json({
            data: subRamoCompania
          });
          _context4.next = 13;
          break;
        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](1);
          console.log(_context4.t0);
          res.status(500).json({
            data: {
              estado: false,
              "error": _context4.t0.message
            }
          });
        case 13:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 9]]);
  }));
  return _subRamoCompaniaPorEmpresa.apply(this, arguments);
}
function subRamoCompaniaPorRamo(_x9, _x10) {
  return _subRamoCompaniaPorRamo.apply(this, arguments);
}
function _subRamoCompaniaPorRamo() {
  _subRamoCompaniaPorRamo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var ramoid, subRamoCompania;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          ramoid = req.params.ramoid;
          _context5.prev = 1;
          console.log(req.params);
          _context5.next = 5;
          return _database.sequelize.query("select rc.*,r.nombre nombreramo,p.nombre nombreramopadre from sub_ramo_compania  rc \n            inner join ramo r on r.id=rc.ramoid \n            --left join ramo p on rc.ramopadreid=r.id \n            left join ramo p on r.ramoid=p.id\n            where r.id= '" + ramoid + "' and rc.estado ='ACT' order by r.nombre ", {
            type: QueryTypes.SELECT
          });
        case 5:
          subRamoCompania = _context5.sent;
          res.json({
            data: subRamoCompania
          });
          _context5.next = 13;
          break;
        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](1);
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
    }, _callee5, null, [[1, 9]]);
  }));
  return _subRamoCompaniaPorRamo.apply(this, arguments);
}
function subRamoCompaniaPorCompania(_x11, _x12) {
  return _subRamoCompaniaPorCompania.apply(this, arguments);
}
function _subRamoCompaniaPorCompania() {
  _subRamoCompaniaPorCompania = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var companiaseguroid, subRamoCompania;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          companiaseguroid = req.params.companiaseguroid;
          _context6.prev = 1;
          _context6.next = 4;
          return _database.sequelize.query("select  r.id,c.cia_spvs, c.nombre compania, rc.*,r.nombre nombreramo,p.nombre nombreramopadre,r.tiporamoid,t.nombre tiporamo,r.spvs spvsramo,case when p.id is null then '00' else p.spvs end spvsramopadre, t.spvs spvstiporamo , s.nombre sucursal \n            from sub_ramo_compania  rc  \n            inner join ramo r on r.id=rc.ramoid  \n            left join ramo p on r.ramoid=p.id\n            inner join tipo_ramo t on t.id=r.tiporamoid  \n            inner join compania_seguro c on c.id =rc.companiaseguroid   \n            inner join sucursal s on s.id=rc.sucursalid \n            where rc.companiaseguroid= '" + companiaseguroid + "' and rc.estado ='ACT' order by c.nombre,r.nombre ", {
            type: QueryTypes.SELECT
          });
        case 4:
          subRamoCompania = _context6.sent;
          res.json({
            data: subRamoCompania
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
  return _subRamoCompaniaPorCompania.apply(this, arguments);
}
function subRamoCompaniaPorCompaniaYSucursal(_x13, _x14) {
  return _subRamoCompaniaPorCompaniaYSucursal.apply(this, arguments);
}
function _subRamoCompaniaPorCompaniaYSucursal() {
  _subRamoCompaniaPorCompaniaYSucursal = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var _req$params, companiaseguroid, sucursalid, subRamoCompania;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _req$params = req.params, companiaseguroid = _req$params.companiaseguroid, sucursalid = _req$params.sucursalid;
          _context7.prev = 1;
          _context7.next = 4;
          return _database.sequelize.query("select  r.id,c.cia_spvs, c.nombre compania, rc.*,r.nombre nombreramo,p.nombre nombreramopadre,r.tiporamoid,t.nombre tiporamo,r.spvs spvsramo,case when p.spvs is null then '00' else p.spvs end spvsramopadre, t.spvs spvstiporamo , s.nombre sucursal \n                from sub_ramo_compania  rc  \n                inner join ramo r on r.id=rc.ramoid\n                left join ramo p on r.ramoid=p.id\n                inner join tipo_ramo t on t.id=r.tiporamoid\n                inner join compania_seguro c on c.id =rc.companiaseguroid\n                inner join sucursal s on s.id=rc.sucursalid\n                where rc.companiaseguroid= '" + companiaseguroid + "' and rc.sucursalid='" + sucursalid + "' and rc.estado ='ACT' order by c.nombre,r.nombre ", {
            type: QueryTypes.SELECT
          });
        case 4:
          subRamoCompania = _context7.sent;
          res.json({
            data: subRamoCompania
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
  return _subRamoCompaniaPorCompaniaYSucursal.apply(this, arguments);
}
function subRamoCompaniaYCompaniaPorEmpresa(_x15, _x16) {
  return _subRamoCompaniaYCompaniaPorEmpresa.apply(this, arguments);
}
function _subRamoCompaniaYCompaniaPorEmpresa() {
  _subRamoCompaniaYCompaniaPorEmpresa = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var empresaid, subRamoCompania;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          empresaid = req.params.empresaid;
          _context8.prev = 1;
          _context8.next = 4;
          return _database.sequelize.query("select  c.cia_spvs, c.nombre compania, rc.*,p.nombre as nombreramopadre,r.nombre nombreramo,r.tiporamoid,t.nombre tiporamo,r.spvs spvsramo,case when p.spvs is null then '00' else  p.spvs end  spvramopadre,t.spvs spvstiporamo,s.nombre sucursal \n            from sub_ramo_compania  rc  \n            inner join ramo r on r.id=rc.ramoid  \n            --left join ramo p on rc.ramopadreid=r.id \n            left join ramo p on r.ramoid=p.id\n            inner join tipo_ramo t on t.id=r.tiporamoid  \n            inner join compania_seguro c on c.id=rc.companiaseguroid  and c.estado='ACT'\n            inner join sucursal s on s.id=rc.sucursalid \n            where c.empresaid= '" + empresaid + "'  and rc.estado ='ACT' order by c.nombre, rc.fechamodificacion desc ", {
            type: QueryTypes.SELECT
          });
        case 4:
          subRamoCompania = _context8.sent;
          res.json({
            data: subRamoCompania
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
  return _subRamoCompaniaYCompaniaPorEmpresa.apply(this, arguments);
}
function subRamoCompaniaYCompaniaPorSucursal(_x17, _x18) {
  return _subRamoCompaniaYCompaniaPorSucursal.apply(this, arguments);
}
function _subRamoCompaniaYCompaniaPorSucursal() {
  _subRamoCompaniaYCompaniaPorSucursal = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var sucursalid, subRamoCompania;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          sucursalid = req.params.sucursalid;
          _context9.prev = 1;
          _context9.next = 4;
          return _database.sequelize.query("select  c.cia_spvs, c.nombre compania, rc.*,p.nombre as nombreramopadre,r.nombre nombreramo,r.tiporamoid,t.nombre tiporamo,r.spvs spvsramo,case when p.spvs is null then '00' else  p.spvs end  spvramopadre,t.spvs spvstiporamo ,s.nombre sucursal \n            from sub_ramo_compania  rc  \n            inner join ramo r on r.id=rc.ramoid  \n            --left join ramo p on rc.ramopadreid=r.id \n            left join ramo p on r.ramoid=p.id\n            inner join tipo_ramo t on t.id=r.tiporamoid  \n            inner join compania_seguro c on c.id=rc.companiaseguroid  and c.estado='ACT'\n            inner join sucursal s on s.id=rc.sucursalid \n            where c.sucursalid= '" + sucursalid + "'  and rc.estado ='ACT' order by c.nombre, rc.fechamodificacion desc ", {
            type: QueryTypes.SELECT
          });
        case 4:
          subRamoCompania = _context9.sent;
          res.json({
            data: subRamoCompania
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
  return _subRamoCompaniaYCompaniaPorSucursal.apply(this, arguments);
}
function getOneSubRamoCompania(_x19, _x20) {
  return _getOneSubRamoCompania.apply(this, arguments);
}
function _getOneSubRamoCompania() {
  _getOneSubRamoCompania = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var id, usuario;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          id = req.params.id;
          _context10.next = 4;
          return _SubRamoCompania["default"].findOne({
            where: {
              id: id
            }
          });
        case 4:
          usuario = _context10.sent;
          res.json({
            data: usuario
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
  return _getOneSubRamoCompania.apply(this, arguments);
}
function deleteSubRamoCompania(_x21, _x22) {
  return _deleteSubRamoCompania.apply(this, arguments);
}
function _deleteSubRamoCompania() {
  _deleteSubRamoCompania = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var id, deleteRowCount;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          id = req.params.id;
          _context11.next = 4;
          return _SubRamoCompania["default"].destroy({
            where: {
              id: id
            }
          });
        case 4:
          deleteRowCount = _context11.sent;
          res.json({
            message: 'SubRamoCompania deleted successfully',
            count: deleteRowCount
          });
          _context11.next = 12;
          break;
        case 8:
          _context11.prev = 8;
          _context11.t0 = _context11["catch"](0);
          console.log(_context11.t0);
          res.json({
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
  return _deleteSubRamoCompania.apply(this, arguments);
}
function bajaSubRamoCompania(_x23, _x24) {
  return _bajaSubRamoCompania.apply(this, arguments);
}
function _bajaSubRamoCompania() {
  _bajaSubRamoCompania = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var id, usuariomodificacion, updateRowCount, subRamoCompania;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          id = req.params.id;
          console.log("bajaSubRamoCompania");
          usuariomodificacion = req.body.usuariomodificacion;
          _context12.prev = 3;
          _context12.next = 6;
          return _SubRamoCompania["default"].update({
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
          updateRowCount = _context12.sent;
          _context12.next = 9;
          return _SubRamoCompania["default"].findOne({
            where: {
              id: id
            }
          });
        case 9:
          subRamoCompania = _context12.sent;
          res.json({
            message: 'SubRamoCompania baja successfully',
            count: subRamoCompania
          });
          _context12.next = 17;
          break;
        case 13:
          _context12.prev = 13;
          _context12.t0 = _context12["catch"](3);
          console.log(_context12.t0);
          res.status(500).json({
            data: {
              estado: false,
              "error": _context12.t0.message
            }
          });
        case 17:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[3, 13]]);
  }));
  return _bajaSubRamoCompania.apply(this, arguments);
}