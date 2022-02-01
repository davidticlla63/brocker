"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPagoss = getPagoss;
exports.createPagos = createPagos;
exports.crearPagos = crearPagos;
exports.updatePagos = updatePagos;
exports.getOnePagos = getOnePagos;
exports.deletePagos = deletePagos;
exports.bajaPagos = bajaPagos;
exports.getPagosGeneralesPorSucursal = getPagosGeneralesPorSucursal;
exports.getPagosActualesPorSucursal = getPagosActualesPorSucursal;
exports.getPagosPendientesPorSucursal = getPagosPendientesPorSucursal;
exports.getPagosMoraPorSucursal = getPagosMoraPorSucursal;
exports.getPagosActualesPorEmpresa = getPagosActualesPorEmpresa;
exports.getPagosPendientesPorEmpresa = getPagosPendientesPorEmpresa;
exports.getPagosMoraPorEmpresa = getPagosMoraPorEmpresa;
exports.getPagosPorSucursalyCi = getPagosPorSucursalyCi;
exports.getPagosPorEmpresayCi = getPagosPorEmpresayCi;
exports.getPagosPorSucursal = getPagosPorSucursal;
exports.getPagosPorEmpresa = getPagosPorEmpresa;

var _database = require("../database/database");

var _Pagos = _interopRequireDefault(require("../models/Pagos"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require('sequelize'),
    QueryTypes = _require.QueryTypes,
    _Promise = _require.Promise;

function getPagoss(_x, _x2) {
  return _getPagoss.apply(this, arguments);
}

function _getPagoss() {
  _getPagoss = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var pagoss;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
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
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _getPagoss.apply(this, arguments);
}

function createPagos(_x3, _x4) {
  return _createPagos.apply(this, arguments);
}

function _createPagos() {
  _createPagos = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, monto, tipo, planpagoid, sucursalid, usuarioregistro, usuariomodificacion, estado, newPagos;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, monto = _req$body.monto, tipo = _req$body.tipo, planpagoid = _req$body.planpagoid, sucursalid = _req$body.sucursalid, usuarioregistro = _req$body.usuarioregistro, usuariomodificacion = _req$body.usuariomodificacion, estado = _req$body.estado;
            _context2.prev = 1;
            _context2.next = 4;
            return _Pagos["default"].create({
              montobs: monto,
              montousd: 0,
              comisionbs: 0,
              comisionusd: 0,
              tipo: tipo,
              planpagoid: planpagoid,
              sucursalid: sucursalid,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: new Date(),
              fechamodificacion: new Date(),
              estado: estado
            }, {
              fields: ['montobs', 'montousd', 'comisionbs', 'comisionusd', 'tipo', 'planpagoid', 'sucursalid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado']
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
      }
    }, _callee2, null, [[1, 9]]);
  }));
  return _createPagos.apply(this, arguments);
}

function crearPagos(_x5, _x6) {
  return _crearPagos.apply(this, arguments);
}

function _crearPagos() {
  _crearPagos = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var pagos, t, listaPagos, newPagos, i;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
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
              _context3.next = 15;
              break;
            }

            _context3.next = 10;
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

          case 10:
            newPagos = _context3.sent;
            listaPagos.push(newPagos);

          case 12:
            i++;
            _context3.next = 7;
            break;

          case 15:
            _context3.next = 17;
            return t.commit();

          case 17:
            if (!listaPagos) {
              _context3.next = 19;
              break;
            }

            return _context3.abrupt("return", res.json({
              message: 'Pagos created successfully',
              data: listaPagos
            }));

          case 19:
            _context3.next = 28;
            break;

          case 21:
            _context3.prev = 21;
            _context3.t0 = _context3["catch"](2);
            console.log(_context3.t0);

            if (!t) {
              _context3.next = 27;
              break;
            }

            _context3.next = 27;
            return t.rollback();

          case 27:
            res.status(500).json({
              data: {
                estado: false,
                "error": _context3.t0.message
              }
            });

          case 28:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 21]]);
  }));
  return _crearPagos.apply(this, arguments);
}

function updatePagos(_x7, _x8) {
  return _updatePagos.apply(this, arguments);
}

function _updatePagos() {
  _updatePagos = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, _req$body2, montobs, montousd, comisionbs, comisionusd, planpagoid, sucursalid, usuarioregistro, usuariomodificacion, fecharegistro, _req$body2$fechamodif, fechamodificacion, estado, updateRowCount, pagoss;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, montobs = _req$body2.montobs, montousd = _req$body2.montousd, comisionbs = _req$body2.comisionbs, comisionusd = _req$body2.comisionusd, planpagoid = _req$body2.planpagoid, sucursalid = _req$body2.sucursalid, usuarioregistro = _req$body2.usuarioregistro, usuariomodificacion = _req$body2.usuariomodificacion, fecharegistro = _req$body2.fecharegistro, _req$body2$fechamodif = _req$body2.fechamodificacion, fechamodificacion = _req$body2$fechamodif === void 0 ? new Date() : _req$body2$fechamodif, estado = _req$body2.estado;
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
              fechamodificacion: fechamodificacion,
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
      }
    }, _callee4, null, [[2, 12]]);
  }));
  return _updatePagos.apply(this, arguments);
}

function getOnePagos(_x9, _x10) {
  return _getOnePagos.apply(this, arguments);
}

function _getOnePagos() {
  _getOnePagos = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, pagos;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
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
      }
    }, _callee5, null, [[0, 8]]);
  }));
  return _getOnePagos.apply(this, arguments);
}

function deletePagos(_x11, _x12) {
  return _deletePagos.apply(this, arguments);
}

function _deletePagos() {
  _deletePagos = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
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
      }
    }, _callee6, null, [[0, 8]]);
  }));
  return _deletePagos.apply(this, arguments);
}

function bajaPagos(_x13, _x14) {
  return _bajaPagos.apply(this, arguments);
}

function _bajaPagos() {
  _bajaPagos = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var id, usuariomodificacion, updateRowCount, pagoss;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
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
      }
    }, _callee7, null, [[3, 13]]);
  }));
  return _bajaPagos.apply(this, arguments);
}

function getPagosGeneralesPorSucursal(_x15, _x16) {
  return _getPagosGeneralesPorSucursal.apply(this, arguments);
}

function _getPagosGeneralesPorSucursal() {
  _getPagosGeneralesPorSucursal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
    var sucursalid, pagos;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            sucursalid = req.params.sucursalid;
            _context8.prev = 1;
            _context8.next = 4;
            return _database.sequelize.query("select pp.*,p.nropoliza, case when a.tipoasegurado='individual' then a.ci else a.nit end cinit,a.nombrecompleto " + ",case when to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER then 'Actuales' " + " when to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER then 'Pendientes' " + " when to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER then 'Mora' end Estado,(select  string_agg(to_char(fecharegistro, 'DD/MM/YYYY') || ' ' || descripcion, ', ' order by descripcion) " + "from cobranza_motivo " + "where estado='ACT' AND planpagoid=pp.id " + "group by planpagoid) as Motivos,case when p.tipoemision='Anexo Conclusión' then 'E' when p.tipoemision='Anexo Exclusión' then 'E' else 'I' end tipo,p.tipoemision,s.nombre as sucursal   from poliza p " + " inner join memo m on m.polizaid=p.id " + " inner join sucursal s on s.id=m.sucursalid " + " inner join plan_pago pp on pp.memoid=m.id " + "inner join asegurado a on a.id=p.tomadorid " + " where p.estado='ACT' and p.sucursalid='" + sucursalid + "'  AND  P.estado in ('ACT','CER') " + " --and to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER " + " and (pp.montocuota >(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id)) order by pp.fechapago asc", {
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
      }
    }, _callee8, null, [[1, 8]]);
  }));
  return _getPagosGeneralesPorSucursal.apply(this, arguments);
}

function getPagosActualesPorSucursal(_x17, _x18) {
  return _getPagosActualesPorSucursal.apply(this, arguments);
}

function _getPagosActualesPorSucursal() {
  _getPagosActualesPorSucursal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(req, res) {
    var sucursalid, pagos;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            sucursalid = req.params.sucursalid;
            _context9.prev = 1;
            _context9.next = 4;
            return _database.sequelize.query("select pp.*,p.nropoliza, case when a.tipoasegurado='individual' then a.ci else a.nit end cinit,a.nombrecompleto " + ",pp.montocuota-(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id) as saldo" + ",case when to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER then 'Actuales' " + " when to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER then 'Pendientes' " + " when to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER then 'Mora' end Estado,(select  string_agg(to_char(fecharegistro, 'DD/MM/YYYY') || ' ' || descripcion, ', ' order by descripcion) " + "from cobranza_motivo " + "where estado='ACT' AND planpagoid=pp.id " + "group by planpagoid) as Motivos,case when p.tipoemision='Anexo Conclusión' then 'E' when p.tipoemision='Anexo Exclusión' then 'E' else 'I' end tipo,p.tipoemision,s.nombre sucursal  from poliza p " + " inner join memo m on m.polizaid=p.id " + " inner join sucursal s on s.id=m.sucursalid " + " inner join plan_pago pp on pp.memoid=m.id " + "inner join asegurado a on a.id=p.tomadorid " + " where p.estado='ACT' and p.sucursalid='" + sucursalid + "'  AND  P.estado in ('ACT','CER') " + " and to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER " + " and (pp.montocuota >(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id)) order by pp.fechapago asc", {
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
      }
    }, _callee9, null, [[1, 8]]);
  }));
  return _getPagosActualesPorSucursal.apply(this, arguments);
}

function getPagosPendientesPorSucursal(_x19, _x20) {
  return _getPagosPendientesPorSucursal.apply(this, arguments);
}

function _getPagosPendientesPorSucursal() {
  _getPagosPendientesPorSucursal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(req, res) {
    var sucursalid, pagos;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            sucursalid = req.params.sucursalid;
            _context10.prev = 1;
            _context10.next = 4;
            return _database.sequelize.query("select pp.*,p.nropoliza, case when a.tipoasegurado='individual' then a.ci else a.nit end cinit,a.nombrecompleto " + ",pp.montocuota-(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id) as saldo" + ",case when to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER then 'Actuales' " + " when to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER then 'Pendientes' " + " when to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER then 'Mora' end Estado,(select  string_agg(to_char(fecharegistro, 'DD/MM/YYYY') || ' ' || descripcion, ', ' order by descripcion) " + "from cobranza_motivo " + "where estado='ACT' AND planpagoid=pp.id " + "group by planpagoid) as Motivos,case when p.tipoemision='Anexo Conclusión' then 'E' when p.tipoemision='Anexo Exclusión' then 'E' else 'I' end tipo,p.tipoemision,s.nombre as sucursal  from poliza p " + " inner join memo m on m.polizaid=p.id " + " inner join sucursal s on s.id=m.sucursalid " + " inner join plan_pago pp on pp.memoid=m.id " + "inner join asegurado a on a.id=p.tomadorid " + " where p.estado='ACT' and p.sucursalid='" + sucursalid + "' " + " and to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER " + " and (pp.montocuota >(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id)) order by pp.fechapago asc", {
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
      }
    }, _callee10, null, [[1, 8]]);
  }));
  return _getPagosPendientesPorSucursal.apply(this, arguments);
}

function getPagosMoraPorSucursal(_x21, _x22) {
  return _getPagosMoraPorSucursal.apply(this, arguments);
}

function _getPagosMoraPorSucursal() {
  _getPagosMoraPorSucursal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(req, res) {
    var sucursalid, pagos;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            sucursalid = req.params.sucursalid;
            _context11.prev = 1;
            _context11.next = 4;
            return _database.sequelize.query("select pp.*,p.nropoliza, case when a.tipoasegurado='individual' then a.ci else a.nit end cinit,a.nombrecompleto " + ",pp.montocuota-(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id) as saldo" + ",case when to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER then 'Actuales' " + " when to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER then 'Pendientes' " + " when to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER then 'Mora' end Estado,s.nombre as sucursal from poliza p " + " inner join memo m on m.polizaid=p.id " + " inner join sucursal s on s.id=m.sucursalid " + " inner join plan_pago pp on pp.memoid=m.id " + "inner join asegurado a on a.id=p.tomadorid " + " where p.estado='ACT' and p.sucursalid='" + sucursalid + "'  AND  P.estado in ('ACT','CER') " + " and to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER " + " and (pp.montocuota >(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id)) order by pp.fechapago asc", {
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
      }
    }, _callee11, null, [[1, 8]]);
  }));
  return _getPagosMoraPorSucursal.apply(this, arguments);
}

function getPagosActualesPorEmpresa(_x23, _x24) {
  return _getPagosActualesPorEmpresa.apply(this, arguments);
}

function _getPagosActualesPorEmpresa() {
  _getPagosActualesPorEmpresa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(req, res) {
    var empresaid, pagos;
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            empresaid = req.params.empresaid;
            _context12.prev = 1;
            _context12.next = 4;
            return _database.sequelize.query("select pp.*,p.nropoliza, case when a.tipoasegurado='individual' then a.ci else a.nit end cinit,a.nombrecompleto " + ",pp.montocuota-(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id) as saldo" + ",case when to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER then 'Actuales' " + " when to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER then 'Pendientes' " + " when to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER then 'Mora' end Estado,(select  string_agg(to_char(fecharegistro, 'DD/MM/YYYY') || ' ' || descripcion, ', ' order by descripcion) " + "from cobranza_motivo " + "where estado='ACT' AND planpagoid=pp.id " + "group by planpagoid) as Motivos,case when p.tipoemision='Anexo Conclusión' then 'E' when p.tipoemision='Anexo Exclusión' then 'E' else 'I' end tipo,p.tipoemision,s.nombre as sucursal  from poliza p " + " inner join memo m on m.polizaid=p.id " + " inner join plan_pago pp on pp.memoid=m.id " + " inner join sucursal s on s.id= p.sucursalid " + " inner join empresa e on e.id= s.empresaid " + "inner join asegurado a on a.id=p.tomadorid " + " where p.estado='ACT' and e.id='" + empresaid + "'  AND  P.estado in ('ACT','CER') " + " and to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER " + " and (pp.montocuota >(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id)) order by pp.fechapago asc", {
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
      }
    }, _callee12, null, [[1, 8]]);
  }));
  return _getPagosActualesPorEmpresa.apply(this, arguments);
}

function getPagosPendientesPorEmpresa(_x25, _x26) {
  return _getPagosPendientesPorEmpresa.apply(this, arguments);
}

function _getPagosPendientesPorEmpresa() {
  _getPagosPendientesPorEmpresa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(req, res) {
    var empresaid, pagos;
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            empresaid = req.params.empresaid;
            _context13.prev = 1;
            _context13.next = 4;
            return _database.sequelize.query("select pp.*,p.nropoliza, case when a.tipoasegurado='individual' then a.ci else a.nit end cinit,a.nombrecompleto " + ",pp.montocuota-(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id) as saldo" + ",case when to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER then 'Actuales' " + " when to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER then 'Pendientes' " + " when to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER then 'Mora' end Estado,(select  string_agg(to_char(fecharegistro, 'DD/MM/YYYY') || ' ' || descripcion, ', ' order by descripcion) " + "from cobranza_motivo " + "where estado='ACT' AND planpagoid=pp.id " + "group by planpagoid) as Motivos,case when p.tipoemision='Anexo Conclusión' then 'E' when p.tipoemision='Anexo Exclusión' then 'E' else 'I' end tipo,p.tipoemision,s.nombre as sucursal  from poliza p " + " inner join memo m on m.polizaid=p.id " + " inner join plan_pago pp on pp.memoid=m.id " + " inner join sucursal s on s.id= p.sucursalid " + " inner join empresa e on e.id= s.empresaid " + "inner join asegurado a on a.id=p.tomadorid " + " where p.estado='ACT' and e.id='" + empresaid + "'  AND  P.estado in ('ACT','CER') " + " and to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER " + " and (pp.montocuota >(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id)) order by pp.fechapago asc", {
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
      }
    }, _callee13, null, [[1, 8]]);
  }));
  return _getPagosPendientesPorEmpresa.apply(this, arguments);
}

function getPagosMoraPorEmpresa(_x27, _x28) {
  return _getPagosMoraPorEmpresa.apply(this, arguments);
}

function _getPagosMoraPorEmpresa() {
  _getPagosMoraPorEmpresa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(req, res) {
    var empresaid, pagos;
    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            empresaid = req.params.empresaid;
            _context14.prev = 1;
            _context14.next = 4;
            return _database.sequelize.query("select pp.*,p.nropoliza, case when a.tipoasegurado='individual' then a.ci else a.nit end cinit,a.nombrecompleto " + ",pp.montocuota-(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id) as saldo" + " ,case when to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER then 'Actuales' " + " when to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER then 'Pendientes' " + " when to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER then 'Mora' end Estado,(select  string_agg(to_char(fecharegistro, 'DD/MM/YYYY') || ' ' || descripcion, ', ' order by descripcion) " + "from cobranza_motivo " + "where estado='ACT' AND planpagoid=pp.id " + "group by planpagoid) as Motivos,case when p.tipoemision='Anexo Conclusión' then 'E' when p.tipoemision='Anexo Exclusión' then 'E' else 'I' end tipo,p.tipoemision,s.nombre as sucursal  from poliza p " + " inner join memo m on m.polizaid=p.id " + " inner join plan_pago pp on pp.memoid=m.id " + " inner join sucursal s on s.id= p.sucursalid " + " inner join empresa e on e.id= s.empresaid " + "inner join asegurado a on a.id=p.tomadorid " + " where p.estado='ACT' and e.id='" + empresaid + "'  AND  P.estado in ('ACT','CER') " + " and to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER " + " and (pp.montocuota >(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id)) order by pp.fechapago asc", {
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
      }
    }, _callee14, null, [[1, 8]]);
  }));
  return _getPagosMoraPorEmpresa.apply(this, arguments);
}

function getPagosPorSucursalyCi(_x29, _x30) {
  return _getPagosPorSucursalyCi.apply(this, arguments);
}

function _getPagosPorSucursalyCi() {
  _getPagosPorSucursalyCi = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(req, res) {
    var _req$params, sucursalid, cinit, pagos;

    return regeneratorRuntime.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _req$params = req.params, sucursalid = _req$params.sucursalid, cinit = _req$params.cinit;
            _context15.prev = 1;
            _context15.next = 4;
            return _database.sequelize.query("select  pp.id ,pp.nro,pp.fechapago fechacuota,pp.montocuota,pp.primaneta,pp.comision,pp.memoid,pp.usuarioregistro,pp.usuariomodificacion," + " p.nropoliza,a.nombrecompleto,p.tipomoneda,pp.montocuota-(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id) as saldo,case when to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER then 'Actuales' " + "when to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER then 'Pendientes' " + "when to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER then 'Mora' end Estado,(select  string_agg(to_char(fecharegistro, 'DD/MM/YYYY') || ' ' || descripcion, ', ' order by descripcion) " + "from cobranza_motivo " + "where estado='ACT' AND planpagoid=pp.id " + "group by planpagoid) as Motivos,case when p.tipoemision='Anexo Conclusión' then 'E' when p.tipoemision='Anexo Exclusión' then 'E' else 'I' end tipo,p.tipoemision,s.nombre as sucursal from poliza p " + "inner join memo m on m.polizaid=p.id " + " inner join sucursal s on s.id=m.sucursalid " + "inner join plan_pago pp on pp.memoid=m.id " + "inner join asegurado a on a.id=p.tomadorid " + "where p.estado='ACT' and p.sucursalid='" + sucursalid + "'  AND  P.estado in ('ACT','CER') " + // "--and to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER "+
            "and (pp.montocuota >(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id)) " + " and  case when a.tipoasegurado='corporativo' then a.nit ='" + cinit + "' else a.ci ='" + cinit + "' end " + // " and (a.ci='"+cinit+"' or a.nit ='"+cinit+"' ) "+
            " order by pp.fechapago asc", {
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
      }
    }, _callee15, null, [[1, 8]]);
  }));
  return _getPagosPorSucursalyCi.apply(this, arguments);
}

function getPagosPorEmpresayCi(_x31, _x32) {
  return _getPagosPorEmpresayCi.apply(this, arguments);
}

function _getPagosPorEmpresayCi() {
  _getPagosPorEmpresayCi = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(req, res) {
    var _req$params2, empresaid, cinit, query, pagos;

    return regeneratorRuntime.wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _req$params2 = req.params, empresaid = _req$params2.empresaid, cinit = _req$params2.cinit;
            _context16.prev = 1;
            query = "select  pp.id,pp.nro,pp.fechapago fechacuota,pp.montocuota,pp.primaneta,pp.comision,pp.memoid,pp.usuarioregistro,pp.usuariomodificacion," + " p.nropoliza,a.nombrecompleto,p.tipomoneda,pp.montocuota-(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id) as saldo,case when to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER then 'Actuales' " + "when to_char(pp.fechapago, 'YYYYMM')::INTEGER>to_char(NOW(), 'YYYYMM')::INTEGER then 'Pendientes' " + "when to_char(pp.fechapago, 'YYYYMM')::INTEGER<to_char(NOW(), 'YYYYMM')::INTEGER then 'Mora' end Estado,(select  string_agg(to_char(fecharegistro, 'DD/MM/YYYY') || ' ' || descripcion, ', ' order by descripcion) " + "from cobranza_motivo " + "where estado='ACT' AND planpagoid=pp.id " + "group by planpagoid) as Motivos,case when p.tipoemision='Anexo Conclusion' then 'E' when p.tipoemision='Anexo Exclusion' then 'E' else 'I' end tipo,p.tipoemision,s.nombre as sucursal from poliza p " + "inner join memo m on m.polizaid=p.id " + "inner join plan_pago pp on pp.memoid=m.id " + "inner join asegurado a on a.id=p.tomadorid " + " inner join sucursal s on s.id= p.sucursalid " + " inner join empresa e on e.id= s.empresaid " + "where p.estado='ACT' and e.id='" + empresaid + "' AND  P.estado in ('ACT','CER') " + //"--and to_char(pp.fechapago, 'YYYYMM')::INTEGER=to_char(NOW(), 'YYYYMM')::INTEGER "+
            " and  case when a.tipoasegurado='corporativo' then a.nit ='" + cinit + "' else a.ci ='" + cinit + "' end " + "and (pp.montocuota >(select  COALESCE (sum(pa.montousd),0) from pagos pa where pa.estado='ACT' and pa.planpagoid=pp.id)) " + //" and (a.ci='"+cinit+"' or a.nit ='"+cinit+"' ) "+
            " order by pp.fechapago asc";
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
      }
    }, _callee16, null, [[1, 9]]);
  }));
  return _getPagosPorEmpresayCi.apply(this, arguments);
}

function getPagosPorSucursal(_x33, _x34) {
  return _getPagosPorSucursal.apply(this, arguments);
}

function _getPagosPorSucursal() {
  _getPagosPorSucursal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(req, res) {
    var sucursalid, _req$body3, fechainicio, fechafin, query, pagos;

    return regeneratorRuntime.wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            sucursalid = req.params.sucursalid;
            _req$body3 = req.body, fechainicio = _req$body3.fechainicio, fechafin = _req$body3.fechafin;
            console.log(sucursalid);
            _context17.prev = 3;
            query = "SELECT pa.montobs,pa.montousd,pa.fecharegistro,pa.fechamodificacion,p.nropoliza, case when a.tipoasegurado='individual' then a.ci else a.nit end cinit,a.nombrecompleto ,case when pa.tipo='I' then 'Ingreso'  else 'Egreso' end tipo,p.tipoemision,s.nombre as sucursal " + "      from pagos pa " + "      inner join plan_pago pp on pp.id=pa.planpagoid " + "      inner join memo m on m.id=pp.memoid " + "      inner join poliza p on p.id=m.polizaid " + "      inner join sucursal s on s.id=m.sucursalid " + "      inner join asegurado a on a.id=p.tomadorid " + "      where pa.estado='ACT' and pa.montousd>0 and to_char(pa.fecharegistro, 'YYYYMMDD')::integer>= " + fechainicio + " and to_char(pa.fecharegistro, 'YYYYMMDD')::integer<= " + fechafin + " and s.id='" + sucursalid + "'  order by pa.fechamodificacion asc";
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
      }
    }, _callee17, null, [[3, 12]]);
  }));
  return _getPagosPorSucursal.apply(this, arguments);
}

function getPagosPorEmpresa(_x35, _x36) {
  return _getPagosPorEmpresa.apply(this, arguments);
}

function _getPagosPorEmpresa() {
  _getPagosPorEmpresa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(req, res) {
    var empresaid, _req$body4, fechainicio, fechafin, query, pagos;

    return regeneratorRuntime.wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            empresaid = req.params.empresaid;
            _req$body4 = req.body, fechainicio = _req$body4.fechainicio, fechafin = _req$body4.fechafin;
            _context18.prev = 2;
            query = "SELECT pa.montobs,pa.montousd,pa.fecharegistro,pa.fechamodificacion,p.nropoliza, case when a.tipoasegurado='individual' then a.ci else a.nit end cinit,a.nombrecompleto ,case when pa.tipo='I' then 'Ingreso'  else 'Egreso' end tipo,p.tipoemision,s.nombre as sucursal " + "      from pagos pa " + "      inner join plan_pago pp on pp.id=pa.planpagoid " + "      inner join memo m on m.id=pp.memoid " + "      inner join poliza p on p.id=m.polizaid " + "      inner join sucursal s on s.id=m.sucursalid " + "      inner join asegurado a on a.id=p.tomadorid " + "      where pa.estado='ACT' and pa.montousd>0 and to_char(pa.fecharegistro, 'YYYYMMDD')::integer>= " + fechainicio + " and to_char(pa.fecharegistro, 'YYYYMMDD')::integer<= " + fechafin + " and s.empresaid='" + empresaid + "'  order by pa.fechamodificacion asc"; //console.log(query);

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
      }
    }, _callee18, null, [[2, 10]]);
  }));
  return _getPagosPorEmpresa.apply(this, arguments);
}