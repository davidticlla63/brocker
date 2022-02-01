"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSiniestros = getSiniestros;
exports.createSiniestro = createSiniestro;
exports.updateSiniestro = updateSiniestro;
exports.getOneSiniestro = getOneSiniestro;
exports.deleteSiniestro = deleteSiniestro;
exports.bajaSiniestro = bajaSiniestro;
exports.getSiniestroPorSucursal = getSiniestroPorSucursal;
exports.getSiniestroPorEmpresa = getSiniestroPorEmpresa;

var _database = require("../database/database");

var _Siniestro = _interopRequireDefault(require("../models/Siniestro"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require('sequelize'),
    QueryTypes = _require.QueryTypes;

function getSiniestros(_x, _x2) {
  return _getSiniestros.apply(this, arguments);
}

function _getSiniestros() {
  _getSiniestros = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var siniestros;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Siniestro["default"].findAll({
              where: {
                estado: 'ACT'
              }
            });

          case 3:
            siniestros = _context.sent;
            res.json({
              data: siniestros
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
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _getSiniestros.apply(this, arguments);
}

function createSiniestro(_x3, _x4) {
  return _createSiniestro.apply(this, arguments);
}

function _createSiniestro() {
  _createSiniestro = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, fechanotificacion, fechasiniestro, comentarioinicial, resumenejecutivo, resumenfinal, montoindemnizar, fecharecordatoria, notarecordatoria, tpoliza, status, encargadoid, usuarioregistro, usuariomodificacion, idpolizadetalle, polizaid, sucursalid, newSiniestro;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, fechanotificacion = _req$body.fechanotificacion, fechasiniestro = _req$body.fechasiniestro, comentarioinicial = _req$body.comentarioinicial, resumenejecutivo = _req$body.resumenejecutivo, resumenfinal = _req$body.resumenfinal, montoindemnizar = _req$body.montoindemnizar, fecharecordatoria = _req$body.fecharecordatoria, notarecordatoria = _req$body.notarecordatoria, tpoliza = _req$body.tpoliza, status = _req$body.status, encargadoid = _req$body.encargadoid, usuarioregistro = _req$body.usuarioregistro, usuariomodificacion = _req$body.usuariomodificacion, idpolizadetalle = _req$body.idpolizadetalle, polizaid = _req$body.polizaid, sucursalid = _req$body.sucursalid;
            _context2.prev = 1;
            _context2.next = 4;
            return _Siniestro["default"].create({
              fechanotificacion: fechanotificacion,
              fechasiniestro: fechasiniestro,
              comentarioinicial: comentarioinicial,
              resumenejecutivo: resumenejecutivo,
              resumenfinalsiniestro: resumenfinal,
              montoindemnizar: montoindemnizar,
              fecharecordatorio: fecharecordatoria,
              notarecordatorio: notarecordatoria,
              tipo: tpoliza,
              estadosiniestro: status,
              encargadoid: encargadoid,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: new Date(),
              fechamodificacion: new Date(),
              estado: 'ACT',
              idpolizadetalle: idpolizadetalle,
              polizaid: polizaid,
              sucursalid: sucursalid
            }, {
              fields: ['fechanotificacion', 'fechasiniestro', 'comentarioinicial', 'resumenejecutivo', 'resumenfinalsiniestro', 'montoindemnizar', 'fecharecordatorio', 'notarecordatorio', 'tipo', 'estadosiniestro', 'encargadoid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado', 'idpolizadetalle', 'polizaid', 'sucursalid']
            });

          case 4:
            newSiniestro = _context2.sent;

            if (!newSiniestro) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.json({
              message: 'Siniestro created successfully',
              data: newSiniestro
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
      }
    }, _callee2, null, [[1, 9]]);
  }));
  return _createSiniestro.apply(this, arguments);
}

function updateSiniestro(_x5, _x6) {
  return _updateSiniestro.apply(this, arguments);
}

function _updateSiniestro() {
  _updateSiniestro = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, _req$body2, fechanotificacion, fechasiniestro, comentarioinicial, resumenejecutivo, resumenfinal, montoindemnizar, fecharecordatoria, notarecordatoria, tpoliza, status, encargadoid, usuarioregistro, usuariomodificacion, idpolizadetalle, polizaid, sucursalid, updateRowCount, siniestros;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, fechanotificacion = _req$body2.fechanotificacion, fechasiniestro = _req$body2.fechasiniestro, comentarioinicial = _req$body2.comentarioinicial, resumenejecutivo = _req$body2.resumenejecutivo, resumenfinal = _req$body2.resumenfinal, montoindemnizar = _req$body2.montoindemnizar, fecharecordatoria = _req$body2.fecharecordatoria, notarecordatoria = _req$body2.notarecordatoria, tpoliza = _req$body2.tpoliza, status = _req$body2.status, encargadoid = _req$body2.encargadoid, usuarioregistro = _req$body2.usuarioregistro, usuariomodificacion = _req$body2.usuariomodificacion, idpolizadetalle = _req$body2.idpolizadetalle, polizaid = _req$body2.polizaid, sucursalid = _req$body2.sucursalid;
            _context3.prev = 2;
            _context3.next = 5;
            return _Siniestro["default"].update({
              fechanotificacion: fechanotificacion,
              fechasiniestro: fechasiniestro,
              comentarioinicial: comentarioinicial,
              resumenejecutivo: resumenejecutivo,
              resumenfinalsiniestro: resumenfinal,
              montoindemnizar: montoindemnizar,
              fecharecordatorio: fecharecordatoria,
              notarecordatorio: notarecordatoria,
              tipo: tpoliza,
              estadosiniestro: status,
              encargadoid: encargadoid,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fechamodificacion: new Date(),
              idpolizadetalle: idpolizadetalle,
              polizaid: polizaid,
              sucursalid: sucursalid
            }, {
              where: {
                id: id
              }
            });

          case 5:
            updateRowCount = _context3.sent;
            _context3.next = 8;
            return _Siniestro["default"].findOne({
              where: {
                id: id
              }
            });

          case 8:
            siniestros = _context3.sent;
            res.json({
              message: 'Siniestro update successfully',
              count: siniestros
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
      }
    }, _callee3, null, [[2, 12]]);
  }));
  return _updateSiniestro.apply(this, arguments);
}

function getOneSiniestro(_x7, _x8) {
  return _getOneSiniestro.apply(this, arguments);
}

function _getOneSiniestro() {
  _getOneSiniestro = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, usuario;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _Siniestro["default"].findOne({
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
      }
    }, _callee4, null, [[0, 8]]);
  }));
  return _getOneSiniestro.apply(this, arguments);
}

function deleteSiniestro(_x9, _x10) {
  return _deleteSiniestro.apply(this, arguments);
}

function _deleteSiniestro() {
  _deleteSiniestro = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return _Siniestro["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context5.sent;
            res.json({
              message: 'Siniestro deleted successfully',
              count: deleteRowCount
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
      }
    }, _callee5, null, [[0, 8]]);
  }));
  return _deleteSiniestro.apply(this, arguments);
}

function bajaSiniestro(_x11, _x12) {
  return _bajaSiniestro.apply(this, arguments);
}

function _bajaSiniestro() {
  _bajaSiniestro = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, usuariomodificacion, updateRowCount, siniestros;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            console.log("bajaSiniestro");
            usuariomodificacion = req.body.usuariomodificacion;
            _context6.prev = 3;
            _context6.next = 6;
            return _Siniestro["default"].update({
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
            updateRowCount = _context6.sent;
            _context6.next = 9;
            return _Siniestro["default"].findOne({
              where: {
                id: id
              }
            });

          case 9:
            siniestros = _context6.sent;
            res.json({
              message: 'Siniestro baja successfully',
              count: siniestros
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
      }
    }, _callee6, null, [[3, 13]]);
  }));
  return _bajaSiniestro.apply(this, arguments);
}

function getSiniestroPorSucursal(_x13, _x14) {
  return _getSiniestroPorSucursal.apply(this, arguments);
}

function _getSiniestroPorSucursal() {
  _getSiniestroPorSucursal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var sucursalid, siniestros;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            sucursalid = req.params.sucursalid;
            _context7.prev = 1;
            _context7.next = 4;
            return _database.sequelize.query("select ss.* ,p.nropoliza,p.valorasegurado,c.nombre contratante " + " ,sr.nombre nombresubramo,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal " + "from siniestro ss " + "inner join poliza p on p.id = ss.polizaid " + "inner join sucursal s on s.id=p.sucursalid  " + "inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid " + "inner join sub_ramo sr on sr.id=rc.subramoid " + "inner join ramo r on r.id=rc.ramoid " + "inner join asegurado a on a.id=p.tomadorid " + "inner join contratante c on c.id=p.contratanteid " + "inner join compania_seguro cs on cs.id=p.companiaseguroid " + "inner join memo m on m.polizaid=p.id and m.estado='ACT' " + "where  s.id= '" + sucursalid + "'  and ss.estado IN ('ACT') order by ss.fechamodificacion desc ", {
              type: QueryTypes.SELECT
            });

          case 4:
            siniestros = _context7.sent;
            //console.log(JSON.stringify(usuarios[0], null, 2));
            res.json({
              siniestros: siniestros
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
      }
    }, _callee7, null, [[1, 8]]);
  }));
  return _getSiniestroPorSucursal.apply(this, arguments);
}

function getSiniestroPorEmpresa(_x15, _x16) {
  return _getSiniestroPorEmpresa.apply(this, arguments);
}

function _getSiniestroPorEmpresa() {
  _getSiniestroPorEmpresa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
    var empresaid, siniestros;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            empresaid = req.params.empresaid;
            _context8.prev = 1;
            _context8.next = 4;
            return _database.sequelize.query("select ss.*,p.nropoliza,p.valorasegurado,c.nombre contratante " + " ,sr.nombre nombresubramo,r.nombre nombreramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal " + "from siniestro ss " + "inner join poliza p on p.id = ss.polizaid " + "inner join sucursal s on s.id=p.sucursalid  " + "inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid " + "inner join sub_ramo sr on sr.id=rc.subramoid " + "inner join ramo r on r.id=rc.ramoid " + "inner join asegurado a on a.id=p.tomadorid " + "inner join contratante c on c.id=p.contratanteid " + "inner join compania_seguro cs on cs.id=p.companiaseguroid " + "inner join memo m on m.polizaid=p.id and m.estado='ACT' " + "where  s.empresaid= '" + empresaid + "'  and ss.estado IN ('ACT','CER') order by ss.fechamodificacion desc ", {
              type: QueryTypes.SELECT
            });

          case 4:
            siniestros = _context8.sent;
            //console.log(JSON.stringify(usuarios[0], null, 2));
            res.json({
              siniestros: siniestros
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
      }
    }, _callee8, null, [[1, 8]]);
  }));
  return _getSiniestroPorEmpresa.apply(this, arguments);
}