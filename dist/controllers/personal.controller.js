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
exports.updatePersonal = updatePersonal;

var _database = require("../database/database");

var _AreaTrabajo = _interopRequireDefault(require("../models/AreaTrabajo"));

var _Personal = _interopRequireDefault(require("../models/Personal"));

var _Sucursal = _interopRequireDefault(require("../models/Sucursal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require('sequelize'),
    QueryTypes = _require.QueryTypes;

function getPersonals(_x, _x2) {
  return _getPersonals.apply(this, arguments);
}

function _getPersonals() {
  _getPersonals = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var usuarios;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
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
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _getPersonals.apply(this, arguments);
}

function createPersonal(_x3, _x4) {
  return _createPersonal.apply(this, arguments);
}

function _createPersonal() {
  _createPersonal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, nombrecompleto, sexo, fechanacimiento, ci, telefono1, telefono2, correo1, correo2, fotoperfil, areatrabajoid, sucursalid, usuarioregistro, usuariomodificacion, _req$body$fecharegist, fecharegistro, fechamodificacion, estado, newPersonal;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, nombrecompleto = _req$body.nombrecompleto, sexo = _req$body.sexo, fechanacimiento = _req$body.fechanacimiento, ci = _req$body.ci, telefono1 = _req$body.telefono1, telefono2 = _req$body.telefono2, correo1 = _req$body.correo1, correo2 = _req$body.correo2, fotoperfil = _req$body.fotoperfil, areatrabajoid = _req$body.areatrabajoid, sucursalid = _req$body.sucursalid, usuarioregistro = _req$body.usuarioregistro, usuariomodificacion = _req$body.usuariomodificacion, _req$body$fecharegist = _req$body.fecharegistro, fecharegistro = _req$body$fecharegist === void 0 ? new Date() : _req$body$fecharegist, fechamodificacion = _req$body.fechamodificacion, estado = _req$body.estado;
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
              fecharegistro: fecharegistro,
              fechamodificacion: fechamodificacion,
              estado: estado
            }, {
              fields: ['nombrecompleto', 'sexo', 'fechanacimiento', 'ci', 'telefono1', 'telefono2', 'correo1', 'correo2', 'fotoperfil', 'areatrabajoid', 'sucursalid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado']
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
      }
    }, _callee2, null, [[1, 9]]);
  }));
  return _createPersonal.apply(this, arguments);
}

function getOnePersonal(_x5, _x6) {
  return _getOnePersonal.apply(this, arguments);
}

function _getOnePersonal() {
  _getOnePersonal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, usuario;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
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
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return _getOnePersonal.apply(this, arguments);
}

function deletePersonal(_x7, _x8) {
  return _deletePersonal.apply(this, arguments);
}

function _deletePersonal() {
  _deletePersonal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
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
      }
    }, _callee4, null, [[0, 8]]);
  }));
  return _deletePersonal.apply(this, arguments);
}

function updatePersonal(_x9, _x10) {
  return _updatePersonal.apply(this, arguments);
}

function _updatePersonal() {
  _updatePersonal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, _req$body2, nombrecompleto, sexo, fechanacimiento, ci, telefono1, telefono2, correo1, correo2, fotoperfil, areatrabajoid, sucursalid, usuarioregistro, usuariomodificacion, fecharegistro, _req$body2$fechamodif, fechamodificacion, estado, updateRowCount, personals;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, nombrecompleto = _req$body2.nombrecompleto, sexo = _req$body2.sexo, fechanacimiento = _req$body2.fechanacimiento, ci = _req$body2.ci, telefono1 = _req$body2.telefono1, telefono2 = _req$body2.telefono2, correo1 = _req$body2.correo1, correo2 = _req$body2.correo2, fotoperfil = _req$body2.fotoperfil, areatrabajoid = _req$body2.areatrabajoid, sucursalid = _req$body2.sucursalid, usuarioregistro = _req$body2.usuarioregistro, usuariomodificacion = _req$body2.usuariomodificacion, fecharegistro = _req$body2.fecharegistro, _req$body2$fechamodif = _req$body2.fechamodificacion, fechamodificacion = _req$body2$fechamodif === void 0 ? new Date() : _req$body2$fechamodif, estado = _req$body2.estado;
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
              fechamodificacion: fechamodificacion,
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
      }
    }, _callee5, null, [[2, 12]]);
  }));
  return _updatePersonal.apply(this, arguments);
}

function bajaPersonal(_x11, _x12) {
  return _bajaPersonal.apply(this, arguments);
}

function _bajaPersonal() {
  _bajaPersonal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, usuariomodificacion, updateRowCount, personals;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
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
      }
    }, _callee6, null, [[3, 13]]);
  }));
  return _bajaPersonal.apply(this, arguments);
}

function personalBySucursal(_x13, _x14) {
  return _personalBySucursal.apply(this, arguments);
}

function _personalBySucursal() {
  _personalBySucursal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var sucursalid, personals;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            sucursalid = req.params.sucursalid;
            _context7.next = 4;
            return _database.sequelize.query(" select p.id, p.nombrecompleto,p.sexo, p.fechanacimiento, p.ci,p.telefono1,p.telefono2,p.correo1,p.correo2, p.sucursalid,p.areatrabajoid \n        ,p.fecharegistro,p.fechamodificacion,p.estado,a.nombre as areatrabajo,s.nombre as sucursal \n        from personal p \n        inner join area_trabajo a on a.id=p.areatrabajoid \n        inner join sucursal s on s.id=p.sucursalid \n        where s.id='" + sucursalid + "' and p.estado='ACT' order by p.fechamodificacion desc ", {
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
      }
    }, _callee7, null, [[0, 8]]);
  }));
  return _personalBySucursal.apply(this, arguments);
}

function personalByEmpresa(_x15, _x16) {
  return _personalByEmpresa.apply(this, arguments);
}

function _personalByEmpresa() {
  _personalByEmpresa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
    var empresaid, personals;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            empresaid = req.params.empresaid;
            _context8.next = 4;
            return _database.sequelize.query(" select p.id, p.nombrecompleto,p.sexo, p.fechanacimiento, p.ci,p.telefono1,p.telefono2,p.correo1,p.correo2, p.sucursalid,p.areatrabajoid \n        ,p.fecharegistro,p.fechamodificacion,p.estado,a.nombre as areatrabajo,s.nombre as sucursal \n        from personal p \n        inner join area_trabajo a on a.id=p.areatrabajoid \n        inner join sucursal s on s.id=p.sucursalid \n        inner join empresa e on e.id=s.empresaid \n        where e.id='" + empresaid + "' and p.estado='ACT' order by p.fechamodificacion desc ", {
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
      }
    }, _callee8, null, [[0, 8]]);
  }));
  return _personalByEmpresa.apply(this, arguments);
}

function personalByAreaTrabajo(_x17, _x18) {
  return _personalByAreaTrabajo.apply(this, arguments);
}

function _personalByAreaTrabajo() {
  _personalByAreaTrabajo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(req, res) {
    var areatrabajoid, personals;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            areatrabajoid = req.params.areatrabajoid;
            _context9.next = 4;
            return _Personal["default"].findAll({
              attributes: ['id', 'nombrecompleto', 'sexo', 'fechanacimiento', 'ci', 'telefono1', 'telefono2', 'correo1', 'correo2', 'sucursalid', 'areatrabajoid', 'fecharegistro', 'fechamodificacion', 'estado'],
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
      }
    }, _callee9, null, [[0, 8]]);
  }));
  return _personalByAreaTrabajo.apply(this, arguments);
}

function personalByAreaTrabajoYSucursal(_x19, _x20) {
  return _personalByAreaTrabajoYSucursal.apply(this, arguments);
}

function _personalByAreaTrabajoYSucursal() {
  _personalByAreaTrabajoYSucursal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(req, res) {
    var _req$params, areatrabajoid, sucursalid, personals;

    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
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
            return _database.sequelize.query(" select p.id, p.nombrecompleto,p.sexo, p.fechanacimiento, p.ci,p.telefono1,p.telefono2,p.correo1,p.correo2, p.sucursalid,p.areatrabajoid \n        ,p.fecharegistro,p.fechamodificacion,p.estado \n        from personal p \n        inner join area_trabajo a on a.id=p.areatrabajoid \n        inner join sucursal s on s.id=p.sucursalid \n        where a.id in ('" + areatrabajoid + "') and s.id='" + sucursalid + "' and p.estado='ACT' order by p.nombrecompleto ", {
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
      }
    }, _callee10, null, [[0, 8]]);
  }));
  return _personalByAreaTrabajoYSucursal.apply(this, arguments);
}

function personalByAreaTrabajoYEmpresa(_x21, _x22) {
  return _personalByAreaTrabajoYEmpresa.apply(this, arguments);
}

function _personalByAreaTrabajoYEmpresa() {
  _personalByAreaTrabajoYEmpresa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(req, res) {
    var _req$params2, areatrabajoid, empresaid, personals;

    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            _req$params2 = req.params, areatrabajoid = _req$params2.areatrabajoid, empresaid = _req$params2.empresaid;
            _context11.next = 4;
            return _database.sequelize.query(" select p.id, p.nombrecompleto,p.sexo, p.fechanacimiento, p.ci,p.telefono1,p.telefono2,p.correo1,p.correo2, p.sucursalid,p.areatrabajoid \n            ,p.fecharegistro,p.fechamodificacion,p.estado \n            from personal p \n            inner join area_trabajo a on a.id=p.areatrabajoid \n            inner join sucursal s on s.id=p.sucursalid \n            inner join empresa e on e.id=s.empresaid \n            where a.id in ('" + areatrabajoid + "') and e.id='" + empresaid + "' and p.estado='ACT' order by p.nombrecompleto ", {
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
      }
    }, _callee11, null, [[0, 8]]);
  }));
  return _personalByAreaTrabajoYEmpresa.apply(this, arguments);
}