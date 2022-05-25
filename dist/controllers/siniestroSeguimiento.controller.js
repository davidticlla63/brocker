"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bajaSiniestroSeguimiento = bajaSiniestroSeguimiento;
exports.createSiniestroSeguimiento = createSiniestroSeguimiento;
exports.deleteSiniestroSeguimiento = deleteSiniestroSeguimiento;
exports.getOneSiniestroSeguimiento = getOneSiniestroSeguimiento;
exports.getSiniestroSeguimientoPorSucursal = getSiniestroSeguimientoPorSucursal;
exports.getSiniestroSeguimientos = getSiniestroSeguimientos;
exports.updateSiniestroSeguimiento = updateSiniestroSeguimiento;

var _database = require("../database/database");

var _SiniestroSeguimiento = _interopRequireDefault(require("../models/SiniestroSeguimiento"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require('sequelize'),
    QueryTypes = _require.QueryTypes;

function getSiniestroSeguimientos(_x, _x2) {
  return _getSiniestroSeguimientos.apply(this, arguments);
}

function _getSiniestroSeguimientos() {
  _getSiniestroSeguimientos = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var siniestroid, siniestros;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            siniestroid = req.params.siniestroid;
            _context.prev = 1;
            _context.next = 4;
            return _database.sequelize.query("select s.*  \n            from siniestro_seguimiento s \n            where  s.siniestroid= '" + siniestroid + "'  and s.estado IN ('ACT') order by s.fechamodificacion desc ", {
              type: QueryTypes.SELECT
            });

          case 4:
            siniestros = _context.sent;
            //console.log(JSON.stringify(usuarios[0], null, 2));
            res.json({
              data: siniestros
            });
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context.t0.message
              }
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));
  return _getSiniestroSeguimientos.apply(this, arguments);
}

function createSiniestroSeguimiento(_x3, _x4) {
  return _createSiniestroSeguimiento.apply(this, arguments);
}

function _createSiniestroSeguimiento() {
  _createSiniestroSeguimiento = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, fecha, comentario, usuarioregistro, usuariomodificacion, siniestroid, newSiniestroSeguimiento;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, fecha = _req$body.fecha, comentario = _req$body.comentario, usuarioregistro = _req$body.usuarioregistro, usuariomodificacion = _req$body.usuariomodificacion, siniestroid = _req$body.siniestroid;
            _context2.prev = 1;
            _context2.next = 4;
            return _SiniestroSeguimiento["default"].create({
              fecha: fecha,
              comentario: comentario,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: new Date(),
              fechamodificacion: new Date(),
              estado: 'ACT',
              siniestroid: siniestroid
            }, {
              fields: ['fecha', 'fechasiniestro', 'comentario', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado', 'siniestroid']
            });

          case 4:
            newSiniestroSeguimiento = _context2.sent;

            if (!newSiniestroSeguimiento) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.json({
              message: 'SiniestroSeguimiento created successfully',
              data: newSiniestroSeguimiento
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
  return _createSiniestroSeguimiento.apply(this, arguments);
}

function updateSiniestroSeguimiento(_x5, _x6) {
  return _updateSiniestroSeguimiento.apply(this, arguments);
}

function _updateSiniestroSeguimiento() {
  _updateSiniestroSeguimiento = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, _req$body2, fecha, comentario, usuarioregistro, usuariomodificacion, fecharegistro, fechamodificacion, estado, siniestroid, updateRowCount, siniestros;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, fecha = _req$body2.fecha, comentario = _req$body2.comentario, usuarioregistro = _req$body2.usuarioregistro, usuariomodificacion = _req$body2.usuariomodificacion, fecharegistro = _req$body2.fecharegistro, fechamodificacion = _req$body2.fechamodificacion, estado = _req$body2.estado, siniestroid = _req$body2.siniestroid;
            _context3.prev = 2;
            _context3.next = 5;
            return _SiniestroSeguimiento["default"].update({
              fecha: fecha,
              comentario: comentario,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: fecharegistro,
              fechamodificacion: new Date(),
              estado: estado,
              siniestroid: siniestroid
            }, {
              where: {
                id: id
              }
            });

          case 5:
            updateRowCount = _context3.sent;
            _context3.next = 8;
            return _SiniestroSeguimiento["default"].findOne({
              where: {
                id: id
              }
            });

          case 8:
            siniestros = _context3.sent;
            res.json({
              message: 'SiniestroSeguimiento update successfully',
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
  return _updateSiniestroSeguimiento.apply(this, arguments);
}

function getOneSiniestroSeguimiento(_x7, _x8) {
  return _getOneSiniestroSeguimiento.apply(this, arguments);
}

function _getOneSiniestroSeguimiento() {
  _getOneSiniestroSeguimiento = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, usuario;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _SiniestroSeguimiento["default"].findOne({
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
  return _getOneSiniestroSeguimiento.apply(this, arguments);
}

function deleteSiniestroSeguimiento(_x9, _x10) {
  return _deleteSiniestroSeguimiento.apply(this, arguments);
}

function _deleteSiniestroSeguimiento() {
  _deleteSiniestroSeguimiento = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return _SiniestroSeguimiento["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context5.sent;
            res.json({
              message: 'SiniestroSeguimiento deleted successfully',
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
  return _deleteSiniestroSeguimiento.apply(this, arguments);
}

function bajaSiniestroSeguimiento(_x11, _x12) {
  return _bajaSiniestroSeguimiento.apply(this, arguments);
}

function _bajaSiniestroSeguimiento() {
  _bajaSiniestroSeguimiento = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, usuariomodificacion, updateRowCount, siniestros;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            console.log("bajaSiniestroSeguimiento");
            usuariomodificacion = req.body.usuariomodificacion;
            _context6.prev = 3;
            _context6.next = 6;
            return _SiniestroSeguimiento["default"].update({
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
            return _SiniestroSeguimiento["default"].findOne({
              where: {
                id: id
              }
            });

          case 9:
            siniestros = _context6.sent;
            res.json({
              message: 'SiniestroSeguimiento baja successfully',
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
  return _bajaSiniestroSeguimiento.apply(this, arguments);
}

function getSiniestroSeguimientoPorSucursal(_x13, _x14) {
  return _getSiniestroSeguimientoPorSucursal.apply(this, arguments);
}

function _getSiniestroSeguimientoPorSucursal() {
  _getSiniestroSeguimientoPorSucursal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var sucursalid, siniestros;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            sucursalid = req.params.sucursalid;
            _context7.prev = 1;
            _context7.next = 4;
            return _database.sequelize.query("select ss.* ,p.nropoliza,p.valorasegurado,c.nombre contratante \n             ,case when r2.id is null then r.nombre else r2.nombre end nombreramo,case when  r2.id is null then null else r.nombre end nombresubramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal \n            from siniestro ss \n            inner join poliza p on p.id = ss.polizaid \n            inner join sucursal s on s.id=p.sucursalid  \n            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid \n            inner join ramo r on r.id=rc.ramoid\n            left join ramo r2 on r.ramoid=r2.id\n            inner join asegurado a on a.id=p.tomadorid \n            inner join contratante c on c.id=p.contratanteid \n            inner join compania_seguro cs on cs.id=p.companiaseguroid \n            inner join memo m on m.polizaid=p.id --and m.estado='ACT' \n            where  s.id= '" + sucursalid + "'  and ss.estado IN ('ACT') order by ss.fechamodificacion desc ", {
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
  return _getSiniestroSeguimientoPorSucursal.apply(this, arguments);
}