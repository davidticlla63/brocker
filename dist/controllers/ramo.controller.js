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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require('sequelize'),
    QueryTypes = _require.QueryTypes;

function createRamo(_x, _x2) {
  return _createRamo.apply(this, arguments);
}

function _createRamo() {
  _createRamo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, nombre, descripcion, spvs, tiporamoid, empresaid, ramoid, usuarioregistro, usuariomodificacion, _req$body$fecharegist, fecharegistro, fechamodificacion, estado, newRamo;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, nombre = _req$body.nombre, descripcion = _req$body.descripcion, spvs = _req$body.spvs, tiporamoid = _req$body.tiporamoid, empresaid = _req$body.empresaid, ramoid = _req$body.ramoid, usuarioregistro = _req$body.usuarioregistro, usuariomodificacion = _req$body.usuariomodificacion, _req$body$fecharegist = _req$body.fecharegistro, fecharegistro = _req$body$fecharegist === void 0 ? new Date() : _req$body$fecharegist, fechamodificacion = _req$body.fechamodificacion, estado = _req$body.estado;
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
              fecharegistro: fecharegistro,
              fechamodificacion: fechamodificacion,
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
      }
    }, _callee, null, [[1, 9]]);
  }));
  return _createRamo.apply(this, arguments);
}

function getOneRamo(_x3, _x4) {
  return _getOneRamo.apply(this, arguments);
}

function _getOneRamo() {
  _getOneRamo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, usuario;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
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
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return _getOneRamo.apply(this, arguments);
}

function deleteRamo(_x5, _x6) {
  return _deleteRamo.apply(this, arguments);
}

function _deleteRamo() {
  _deleteRamo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
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
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return _deleteRamo.apply(this, arguments);
}

function updateRamo(_x7, _x8) {
  return _updateRamo.apply(this, arguments);
}

function _updateRamo() {
  _updateRamo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, _req$body2, nombre, descripcion, spvs, tiporamoid, empresaid, usuarioregistro, usuariomodificacion, fecharegistro, fechamodificacion, estado, ramoid, updateRowCount, ramos;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, nombre = _req$body2.nombre, descripcion = _req$body2.descripcion, spvs = _req$body2.spvs, tiporamoid = _req$body2.tiporamoid, empresaid = _req$body2.empresaid, usuarioregistro = _req$body2.usuarioregistro, usuariomodificacion = _req$body2.usuariomodificacion, fecharegistro = _req$body2.fecharegistro, fechamodificacion = _req$body2.fechamodificacion, estado = _req$body2.estado, ramoid = _req$body2.ramoid;
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
              fechamodificacion: fechamodificacion,
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
      }
    }, _callee4, null, [[2, 12]]);
  }));
  return _updateRamo.apply(this, arguments);
}

function getRamos(_x9, _x10) {
  return _getRamos.apply(this, arguments);
}

function _getRamos() {
  _getRamos = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var ramos;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
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
      }
    }, _callee5, null, [[0, 7]]);
  }));
  return _getRamos.apply(this, arguments);
}

function getSubRamos(_x11, _x12) {
  return _getSubRamos.apply(this, arguments);
}

function _getSubRamos() {
  _getSubRamos = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var ramoid, ramos;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
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
      }
    }, _callee6, null, [[1, 8]]);
  }));
  return _getSubRamos.apply(this, arguments);
}

function getRamosPorEmpresa(_x13, _x14) {
  return _getRamosPorEmpresa.apply(this, arguments);
}

function _getRamosPorEmpresa() {
  _getRamosPorEmpresa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var empresaid, ramos;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            empresaid = req.params.empresaid;
            _context7.prev = 1;
            _context7.next = 4;
            return _database.sequelize.query("select r.* ,tr.nombre as tiporamo \n            from ramo r \n            inner join tipo_ramo tr on tr.id=r.tiporamoid \n            where r.empresaid= '" + empresaid + "' and r.estado='ACT' and r.ramoid is null order by r.fechamodificacion desc ", {
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
      }
    }, _callee7, null, [[1, 8]]);
  }));
  return _getRamosPorEmpresa.apply(this, arguments);
}

function bajaRamo(_x15, _x16) {
  return _bajaRamo.apply(this, arguments);
}

function _bajaRamo() {
  _bajaRamo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
    var id, usuariomodificacion, updateRowCount, ramos;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
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
      }
    }, _callee8, null, [[3, 13]]);
  }));
  return _bajaRamo.apply(this, arguments);
}

function getRamosPorEmpresas(_x17, _x18) {
  return _getRamosPorEmpresas.apply(this, arguments);
}

function _getRamosPorEmpresas() {
  _getRamosPorEmpresas = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(req, res) {
    var empresaid, sql, tiporamos;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
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
      }
    }, _callee9, null, [[1, 10]]);
  }));
  return _getRamosPorEmpresas.apply(this, arguments);
}

function obtenerRamosPorEmpresa(_x19, _x20) {
  return _obtenerRamosPorEmpresa.apply(this, arguments);
}

function _obtenerRamosPorEmpresa() {
  _obtenerRamosPorEmpresa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(req, res) {
    var empresaid, sql, ramos;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
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
      }
    }, _callee10, null, [[1, 9]]);
  }));
  return _obtenerRamosPorEmpresa.apply(this, arguments);
}

function ramoPorEmpresa(_x21, _x22) {
  return _ramoPorEmpresa.apply(this, arguments);
}

function _ramoPorEmpresa() {
  _ramoPorEmpresa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(req, res) {
    var empresaid, sql, subRamoCompania;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
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
      }
    }, _callee11, null, [[1, 9]]);
  }));
  return _ramoPorEmpresa.apply(this, arguments);
}