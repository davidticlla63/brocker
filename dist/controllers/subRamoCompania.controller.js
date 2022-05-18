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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require('sequelize'),
    QueryTypes = _require.QueryTypes;

function createSubRamoCompania(_x, _x2) {
  return _createSubRamoCompania.apply(this, arguments);
}

function _createSubRamoCompania() {
  _createSubRamoCompania = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, porcentajecomision, porcentajecomisioncredito, porcentajeprima, porcentajeprimacredito, nota, notacredito, usuarioregistro, usuariomodificacion, _req$body$fecharegist, fecharegistro, estado, ramoid, ramopadreid, companiaseguroid, sucursalid, regSubRamoCompanias, newSubRamoCompania;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
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
      }
    }, _callee, null, [[1, 15]]);
  }));
  return _createSubRamoCompania.apply(this, arguments);
}

function updateSubRamoCompania(_x3, _x4) {
  return _updateSubRamoCompania.apply(this, arguments);
}

function _updateSubRamoCompania() {
  _updateSubRamoCompania = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, _req$body2, porcentajecomision, porcentajecomisioncredito, porcentajeprima, porcentajeprimacredito, nota, notacredito, usuarioregistro, usuariomodificacion, fecharegistro, fechamodificacion, estado, ramoid, ramopadreid, companiaseguroid, updateRowCount, subRamoCompania;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
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
      }
    }, _callee2, null, [[2, 12]]);
  }));
  return _updateSubRamoCompania.apply(this, arguments);
}

function getSubRamoCompania(_x5, _x6) {
  return _getSubRamoCompania.apply(this, arguments);
}

function _getSubRamoCompania() {
  _getSubRamoCompania = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var subRamoCompania;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
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
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return _getSubRamoCompania.apply(this, arguments);
}

function subRamoCompaniaPorEmpresa(_x7, _x8) {
  return _subRamoCompaniaPorEmpresa.apply(this, arguments);
}

function _subRamoCompaniaPorEmpresa() {
  _subRamoCompaniaPorEmpresa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var empresaid, subRamoCompania;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            empresaid = req.params.empresaid;
            _context4.prev = 1;
            console.log(req.params); //const subRamoCompania = await SubRamoCompania.findAll({ where: { estado: 'ACT', ramopadreid } });

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
      }
    }, _callee4, null, [[1, 9]]);
  }));
  return _subRamoCompaniaPorEmpresa.apply(this, arguments);
}

function subRamoCompaniaPorRamo(_x9, _x10) {
  return _subRamoCompaniaPorRamo.apply(this, arguments);
}
/* export async function subRamoCompaniaPorCompania(req, res) {
    const {
        companiaseguroid } = req.params;
    try {
        const subRamoCompania = await sequelize.query("select rc.*,s.nombre as nombresubramo,r.nombre nombreramo,r.tiporamoid,r.spvs spvsramo,s.spvs spvsubramo,t.spvs spvstiporamo from sub_ramo_compania  rc  
            "inner join ramo r on r.id=s.ramoid 
            "left join ramo s on s.ramoid=r.id 
            "inner join tipo_ramo t on t.id=r.tiporamoid 
            "where rc.companiaseguroid= '` + companiaseguroid + `' and rc.estado ='ACT' order by rc.id "
            , {
                type: QueryTypes.SELECT
            });
        res.json({
            data: subRamoCompania
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            data: { estado: false, "error": e.message }
        });
    }
}
 */


function _subRamoCompaniaPorRamo() {
  _subRamoCompaniaPorRamo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var ramoid, subRamoCompania;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            ramoid = req.params.ramoid;
            _context5.prev = 1;
            console.log(req.params);
            _context5.next = 5;
            return _database.sequelize.query("select rc.*,r.nombre nombreramo,p.nombre nombreramopadre from sub_ramo_compania  rc \n            inner join ramo r on r.id=rc.ramoid \n            left join ramo p on rc.ramopadreid=r.id \n            where r.id= '" + ramoid + "' and rc.estado ='ACT' order by r.nombre ", {
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
      }
    }, _callee5, null, [[1, 9]]);
  }));
  return _subRamoCompaniaPorRamo.apply(this, arguments);
}

function subRamoCompaniaPorCompania(_x11, _x12) {
  return _subRamoCompaniaPorCompania.apply(this, arguments);
}

function _subRamoCompaniaPorCompania() {
  _subRamoCompaniaPorCompania = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var companiaseguroid, subRamoCompania;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            companiaseguroid = req.params.companiaseguroid;
            _context6.prev = 1;
            _context6.next = 4;
            return _database.sequelize.query("select  r.id,c.cia_spvs, c.nombre compania, rc.*,r.nombre nombreramo,p.nombre nombreramopadre,r.tiporamoid,t.nombre tiporamo,r.spvs spvsramo,case when p.spvs is null then '00' else p.spvs end spvsramopadre, t.spvs spvstiporamo , s.nombre sucursal \n            from sub_ramo_compania  rc  \n            inner join ramo r on r.id=rc.ramoid  \n            left join ramo p on rc.ramopadreid=r.id \n            inner join tipo_ramo t on t.id=r.tiporamoid  \n            inner join compania_seguro c on c.id =rc.companiaseguroid   \n            inner join sucursal s on s.id=rc.sucursalid \n            where rc.companiaseguroid= '" + companiaseguroid + "' and rc.estado ='ACT' order by c.nombre,r.nombre ", {
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
      }
    }, _callee6, null, [[1, 8]]);
  }));
  return _subRamoCompaniaPorCompania.apply(this, arguments);
}

function subRamoCompaniaPorCompaniaYSucursal(_x13, _x14) {
  return _subRamoCompaniaPorCompaniaYSucursal.apply(this, arguments);
}

function _subRamoCompaniaPorCompaniaYSucursal() {
  _subRamoCompaniaPorCompaniaYSucursal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var _req$params, companiaseguroid, sucursalid, subRamoCompania;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _req$params = req.params, companiaseguroid = _req$params.companiaseguroid, sucursalid = _req$params.sucursalid;
            _context7.prev = 1;
            _context7.next = 4;
            return _database.sequelize.query("select  r.id,c.cia_spvs, c.nombre compania, rc.*,r.nombre nombreramo,p.nombre nombreramopadre,r.tiporamoid,t.nombre tiporamo,r.spvs spvsramo,case when p.spvs is null then '00' else p.spvs end spvsramopadre, t.spvs spvstiporamo , s.nombre sucursal \n            from sub_ramo_compania  rc  \n            inner join ramo r on r.id=rc.ramoid  \n            left join ramo p on rc.ramopadreid=r.id \n            inner join tipo_ramo t on t.id=r.tiporamoid  \n            inner join compania_seguro c on c.id =rc.companiaseguroid   \n            inner join sucursal s on s.id=rc.sucursalid \n            where rc.companiaseguroid= '" + companiaseguroid + "' and rc.sucursalid='" + sucursalid + "' and rc.estado ='ACT' order by c.nombre,r.nombre ", {
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
      }
    }, _callee7, null, [[1, 8]]);
  }));
  return _subRamoCompaniaPorCompaniaYSucursal.apply(this, arguments);
}

function subRamoCompaniaYCompaniaPorEmpresa(_x15, _x16) {
  return _subRamoCompaniaYCompaniaPorEmpresa.apply(this, arguments);
}

function _subRamoCompaniaYCompaniaPorEmpresa() {
  _subRamoCompaniaYCompaniaPorEmpresa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
    var empresaid, subRamoCompania;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            empresaid = req.params.empresaid;
            _context8.prev = 1;
            _context8.next = 4;
            return _database.sequelize.query("select  c.cia_spvs, c.nombre compania, rc.*,p.nombre as nombreramopadre,r.nombre nombreramo,r.tiporamoid,t.nombre tiporamo,r.spvs spvsramo,case when p.spvs is null then '00' else  p.spvs end  spvramopadre,t.spvs spvstiporamo,s.nombre sucursal \n            from sub_ramo_compania  rc  \n            inner join ramo r on r.id=rc.ramoid  \n            left join ramo p on rc.ramopadreid=r.id \n            inner join tipo_ramo t on t.id=r.tiporamoid  \n            inner join compania_seguro c on c.id=rc.companiaseguroid  and c.estado='ACT'\n            inner join sucursal s on s.id=rc.sucursalid \n            where c.empresaid= '" + empresaid + "'  and rc.estado ='ACT' order by c.nombre, rc.fechamodificacion desc ", {
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
      }
    }, _callee8, null, [[1, 8]]);
  }));
  return _subRamoCompaniaYCompaniaPorEmpresa.apply(this, arguments);
}

function subRamoCompaniaYCompaniaPorSucursal(_x17, _x18) {
  return _subRamoCompaniaYCompaniaPorSucursal.apply(this, arguments);
}

function _subRamoCompaniaYCompaniaPorSucursal() {
  _subRamoCompaniaYCompaniaPorSucursal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(req, res) {
    var sucursalid, subRamoCompania;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            sucursalid = req.params.sucursalid;
            _context9.prev = 1;
            _context9.next = 4;
            return _database.sequelize.query("select  c.cia_spvs, c.nombre compania, rc.*,p.nombre as nombreramopadre,r.nombre nombreramo,r.tiporamoid,t.nombre tiporamo,r.spvs spvsramo,case when p.spvs is null then '00' else  p.spvs end  spvramopadre,t.spvs spvstiporamo ,s.nombre sucursal \n            from sub_ramo_compania  rc  \n            inner join ramo r on r.id=rc.ramoid  \n            left join ramo p on rc.ramopadreid=r.id \n            inner join tipo_ramo t on t.id=r.tiporamoid  \n            inner join compania_seguro c on c.id=rc.companiaseguroid  and c.estado='ACT'\n            inner join sucursal s on s.id=rc.sucursalid \n            where c.sucursalid= '" + sucursalid + "'  and rc.estado ='ACT' order by c.nombre, rc.fechamodificacion desc ", {
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
      }
    }, _callee9, null, [[1, 8]]);
  }));
  return _subRamoCompaniaYCompaniaPorSucursal.apply(this, arguments);
}

function getOneSubRamoCompania(_x19, _x20) {
  return _getOneSubRamoCompania.apply(this, arguments);
}

function _getOneSubRamoCompania() {
  _getOneSubRamoCompania = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(req, res) {
    var id, usuario;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
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
      }
    }, _callee10, null, [[0, 8]]);
  }));
  return _getOneSubRamoCompania.apply(this, arguments);
}

function deleteSubRamoCompania(_x21, _x22) {
  return _deleteSubRamoCompania.apply(this, arguments);
}

function _deleteSubRamoCompania() {
  _deleteSubRamoCompania = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
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
      }
    }, _callee11, null, [[0, 8]]);
  }));
  return _deleteSubRamoCompania.apply(this, arguments);
}

function bajaSubRamoCompania(_x23, _x24) {
  return _bajaSubRamoCompania.apply(this, arguments);
}

function _bajaSubRamoCompania() {
  _bajaSubRamoCompania = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(req, res) {
    var id, usuariomodificacion, updateRowCount, subRamoCompania;
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
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
      }
    }, _callee12, null, [[3, 13]]);
  }));
  return _bajaSubRamoCompania.apply(this, arguments);
}