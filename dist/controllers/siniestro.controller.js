"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bajaSiniestro = bajaSiniestro;
exports.createSiniestro = createSiniestro;
exports.deleteSiniestro = deleteSiniestro;
exports.getOneSiniestro = getOneSiniestro;
exports.getSiniestroPorEmpresa = getSiniestroPorEmpresa;
exports.getSiniestroPorSucursal = getSiniestroPorSucursal;
exports.getSiniestros = getSiniestros;
exports.getTotalSiniestrosPorEmpresa = getTotalSiniestrosPorEmpresa;
exports.getTotalSiniestrosPorSucursal = getTotalSiniestrosPorSucursal;
exports.updateSiniestro = updateSiniestro;

var _database = require("../database/database");

var _Siniestro = _interopRequireDefault(require("../models/Siniestro"));

var _Archivo = _interopRequireDefault(require("../models/Archivo"));

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
    var _req$body, fechanotificacion, fechasiniestro, comentarioinicial, resumenejecutivo, resumenfinal, montoindemnizar, fecharecordatoria, notarecordatoria, tpoliza, status, encargadoid, usuarioregistro, usuariomodificacion, idpolizadetalle, polizaid, sucursalid, archivos, newSiniestro, i;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, fechanotificacion = _req$body.fechanotificacion, fechasiniestro = _req$body.fechasiniestro, comentarioinicial = _req$body.comentarioinicial, resumenejecutivo = _req$body.resumenejecutivo, resumenfinal = _req$body.resumenfinal, montoindemnizar = _req$body.montoindemnizar, fecharecordatoria = _req$body.fecharecordatoria, notarecordatoria = _req$body.notarecordatoria, tpoliza = _req$body.tpoliza, status = _req$body.status, encargadoid = _req$body.encargadoid, usuarioregistro = _req$body.usuarioregistro, usuariomodificacion = _req$body.usuariomodificacion, idpolizadetalle = _req$body.idpolizadetalle, polizaid = _req$body.polizaid, sucursalid = _req$body.sucursalid, archivos = _req$body.archivos;
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
            i = 0;

          case 6:
            if (!(i < archivos.length)) {
              _context2.next = 12;
              break;
            }

            _context2.next = 9;
            return _Archivo["default"].create({
              codigo: newSiniestro.id,
              nombre: archivos[i].nombre,
              descripcion: archivos[i].nombre,
              extension: archivos[i].extension,
              archivo: archivos[i].archivo,
              sucursalid: sucursalid,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuarioregistro,
              fecharegistro: new Date(),
              fechamodificacion: new Date(),
              estado: 'ACT'
            }, {
              fields: ['codigo', 'nombre', 'descripcion', 'extension', 'archivo', 'sucursalid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado']
            });

          case 9:
            i++;
            _context2.next = 6;
            break;

          case 12:
            if (!newSiniestro) {
              _context2.next = 14;
              break;
            }

            return _context2.abrupt("return", res.json({
              message: 'Siniestro created successfully',
              data: newSiniestro
            }));

          case 14:
            _context2.next = 20;
            break;

          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context2.t0.message
              }
            });

          case 20:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 16]]);
  }));
  return _createSiniestro.apply(this, arguments);
}

function updateSiniestro(_x5, _x6) {
  return _updateSiniestro.apply(this, arguments);
}

function _updateSiniestro() {
  _updateSiniestro = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, _req$body2, fechanotificacion, fechasiniestro, comentarioinicial, resumenejecutivo, resumenfinal, montoindemnizar, fecharecordatoria, notarecordatoria, tpoliza, status, encargadoid, usuarioregistro, usuariomodificacion, idpolizadetalle, polizaid, sucursalid, archivos, archivoseliminados, updateRowCount, i, _i, siniestros;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, fechanotificacion = _req$body2.fechanotificacion, fechasiniestro = _req$body2.fechasiniestro, comentarioinicial = _req$body2.comentarioinicial, resumenejecutivo = _req$body2.resumenejecutivo, resumenfinal = _req$body2.resumenfinal, montoindemnizar = _req$body2.montoindemnizar, fecharecordatoria = _req$body2.fecharecordatoria, notarecordatoria = _req$body2.notarecordatoria, tpoliza = _req$body2.tpoliza, status = _req$body2.status, encargadoid = _req$body2.encargadoid, usuarioregistro = _req$body2.usuarioregistro, usuariomodificacion = _req$body2.usuariomodificacion, idpolizadetalle = _req$body2.idpolizadetalle, polizaid = _req$body2.polizaid, sucursalid = _req$body2.sucursalid, archivos = _req$body2.archivos, archivoseliminados = _req$body2.archivoseliminados;
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
            i = 0;

          case 7:
            if (!(i < archivoseliminados.length)) {
              _context3.next = 13;
              break;
            }

            _context3.next = 10;
            return _Archivo["default"].update({
              estado: 'BAJ',
              fechamodificacion: new Date()
            }, {
              where: {
                id: archivoseliminados[i].id
              }
            }, {
              transaction: t
            });

          case 10:
            i++;
            _context3.next = 7;
            break;

          case 13:
            _i = 0;

          case 14:
            if (!(_i < archivos.length)) {
              _context3.next = 20;
              break;
            }

            _context3.next = 17;
            return _Archivo["default"].create({
              codigo: id,
              nombre: archivos[_i].nombre,
              descripcion: archivos[_i].nombre,
              extension: archivos[_i].extension,
              archivo: archivos[_i].archivo,
              sucursalid: sucursalid,
              usuarioregistro: usuariomodificacion,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: new Date(),
              fechamodificacion: new Date(),
              estado: 'ACT'
            }, {
              fields: ['codigo', 'nombre', 'descripcion', 'extension', 'archivo', 'aseguradoid', 'sucursalid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado']
            }, {
              transaction: t
            });

          case 17:
            _i++;
            _context3.next = 14;
            break;

          case 20:
            _context3.next = 22;
            return _Siniestro["default"].findOne({
              where: {
                id: id
              }
            });

          case 22:
            siniestros = _context3.sent;
            res.json({
              message: 'Siniestro update successfully',
              count: siniestros
            });
            _context3.next = 30;
            break;

          case 26:
            _context3.prev = 26;
            _context3.t0 = _context3["catch"](2);
            console.log(_context3.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context3.t0.message
              }
            });

          case 30:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 26]]);
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
            return _database.sequelize.query("select ss.* ,p.nropoliza,p.valorasegurado,c.nombre contratante \n             ,case when r2.id is null then r.nombre else r2.nombre end nombreramo,case when  r2.id is null then null else r.nombre end nombresubramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal \n            from siniestro ss \n            inner join poliza p on p.id = ss.polizaid \n            inner join sucursal s on s.id=p.sucursalid  \n            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid \n            inner join ramo r on r.id=rc.ramoid \n            left join ramo r2 on r2.id=r.ramoid \n            inner join asegurado a on a.id=p.tomadorid \n            inner join contratante c on c.id=p.contratanteid \n            inner join compania_seguro cs on cs.id=p.companiaseguroid \n            inner join memo m on m.polizaid=p.id and m.estado='ACT' \n            where  s.id= '" + sucursalid + "'  and ss.estado IN ('ACT') order by ss.fechamodificacion desc ", {
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
/**MONTOS TOTALES PARA DASHBOARD  POR EMPRESA*/


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
            return _database.sequelize.query("select ss.*,p.nropoliza,p.valorasegurado,c.nombre contratante \n             ,case when r2.id is null then r.nombre else r2.nombre end nombreramo,case when  r2.id is null then null else r.nombre end nombresubramo,a.nombrecompleto as nombreasegurado,cs.nombre nombrecompania,s.nombre as sucursal \n            from siniestro ss \n            inner join poliza p on p.id = ss.polizaid \n            inner join sucursal s on s.id=p.sucursalid  \n            inner join sub_ramo_compania rc on rc.id=p.subramocompaniaid \n            inner join ramo r on r.id=rc.ramoid \n            left join ramo r2 on r2.id=r.ramoid \n            inner join asegurado a on a.id=p.tomadorid \n            inner join contratante c on c.id=p.contratanteid \n            inner join compania_seguro cs on cs.id=p.companiaseguroid \n            inner join memo m on m.polizaid=p.id and m.estado='ACT' \n            where  s.empresaid= '" + empresaid + "'  and ss.estado IN ('ACT','CER') order by ss.fechamodificacion desc ", {
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

function getTotalSiniestrosPorEmpresa(_x17, _x18) {
  return _getTotalSiniestrosPorEmpresa.apply(this, arguments);
}
/** MONTOS TOTALES PARA DASHBOARD  POR SUCURSAL*/


function _getTotalSiniestrosPorEmpresa() {
  _getTotalSiniestrosPorEmpresa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(req, res) {
    var empresaid, query, pagos;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            empresaid = req.params.empresaid;
            _context9.prev = 1;
            query = "select count(*) cantidad from siniestro si \n            inner join sucursal s on s.id =si.sucursalid  \n            inner join empresa e on e.id =s.empresaid \n            where si.estadosiniestro  in ('Proceso','Finalizado') and si.estado ='ACT' and e.id = '" + empresaid + "'";
            _context9.next = 5;
            return _database.sequelize.query(query, {
              type: QueryTypes.SELECT
            });

          case 5:
            pagos = _context9.sent;
            res.json({
              data: pagos
            });
            _context9.next = 13;
            break;

          case 9:
            _context9.prev = 9;
            _context9.t0 = _context9["catch"](1);
            console.log(_context9.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context9.t0.message
              }
            });

          case 13:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[1, 9]]);
  }));
  return _getTotalSiniestrosPorEmpresa.apply(this, arguments);
}

function getTotalSiniestrosPorSucursal(_x19, _x20) {
  return _getTotalSiniestrosPorSucursal.apply(this, arguments);
}

function _getTotalSiniestrosPorSucursal() {
  _getTotalSiniestrosPorSucursal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(req, res) {
    var sucursalid, query, pagos;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            sucursalid = req.params.sucursalid;
            _context10.prev = 1;
            query = "select count(*) cantidad from siniestro si  \n            where si.estadosiniestro   in ('Proceso','Finalizado')  and si.estado ='ACT'  and si.sucursalid ='" + sucursalid + "'";
            _context10.next = 5;
            return _database.sequelize.query(query, {
              type: QueryTypes.SELECT
            });

          case 5:
            pagos = _context10.sent;
            res.json({
              data: pagos
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
      }
    }, _callee10, null, [[1, 9]]);
  }));
  return _getTotalSiniestrosPorSucursal.apply(this, arguments);
}