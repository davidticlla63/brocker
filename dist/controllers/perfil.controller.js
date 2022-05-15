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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require('sequelize'),
    QueryTypes = _require.QueryTypes;

function getPerfils(_x, _x2) {
  return _getPerfils.apply(this, arguments);
}

function _getPerfils() {
  _getPerfils = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var usuarios;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
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
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _getPerfils.apply(this, arguments);
}

function createPerfil(_x3, _x4) {
  return _createPerfil.apply(this, arguments);
}

function _createPerfil() {
  _createPerfil = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, nombre, descripcion, sucursalid, empresaid, usuarioregistro, usuariomodificacion, estado, newPerfil;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
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
      }
    }, _callee2, null, [[1, 9]]);
  }));
  return _createPerfil.apply(this, arguments);
}

function getOnePerfil(_x5, _x6) {
  return _getOnePerfil.apply(this, arguments);
}

function _getOnePerfil() {
  _getOnePerfil = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, usuario;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
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
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return _getOnePerfil.apply(this, arguments);
}

function deletePerfil(_x7, _x8) {
  return _deletePerfil.apply(this, arguments);
}

function _deletePerfil() {
  _deletePerfil = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
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
      }
    }, _callee4, null, [[0, 8]]);
  }));
  return _deletePerfil.apply(this, arguments);
}

function updatePerfil(_x9, _x10) {
  return _updatePerfil.apply(this, arguments);
}

function _updatePerfil() {
  _updatePerfil = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, _req$body2, nombre, descripcion, sucursalid, empresaid, usuarioregistro, usuariomodificacion, estado, updateRowCount, perfils;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
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
      }
    }, _callee5, null, [[2, 12]]);
  }));
  return _updatePerfil.apply(this, arguments);
}

function getPerfilByEmpresa(_x11, _x12) {
  return _getPerfilByEmpresa.apply(this, arguments);
}

function _getPerfilByEmpresa() {
  _getPerfilByEmpresa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var empresaid, perfils;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
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
      }
    }, _callee6, null, [[0, 8]]);
  }));
  return _getPerfilByEmpresa.apply(this, arguments);
}

function getPerfilBySucursal(_x13, _x14) {
  return _getPerfilBySucursal.apply(this, arguments);
}

function _getPerfilBySucursal() {
  _getPerfilBySucursal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var sucursalid, perfils;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
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
      }
    }, _callee7, null, [[0, 8]]);
  }));
  return _getPerfilBySucursal.apply(this, arguments);
}

function createPerfilPermisos(_x15, _x16) {
  return _createPerfilPermisos.apply(this, arguments);
}
/* export async function getPermisosPorPerfil(req, res) {
    const { perfilid } = req.params;
    console.log(req.params)
    try {

        const paginas = await Permiso.findAll({
            where: { estado: 'ACT', perfilid }
            , include: { model: Pagina, require: true, estado: 'ACT', 
            include: { model: Accion, estado: 'ACT', require: true } }
        });
        res.json({
            data: paginas
        });
    } catch (e) {
        console.log(e);
    }
}
 */


function _createPerfilPermisos() {
  _createPerfilPermisos = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
    var perfilid, _req$body3, permisos, usuarioregistro, t, i;

    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
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
            }); // throw new Error(err);

          case 26:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[5, 20]]);
  }));
  return _createPerfilPermisos.apply(this, arguments);
}

function getPermisosPorPerfil(_x17, _x18) {
  return _getPermisosPorPerfil.apply(this, arguments);
}

function _getPermisosPorPerfil() {
  _getPermisosPorPerfil = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(req, res) {
    var perfilid, permisos;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
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
      }
    }, _callee9, null, [[1, 8]]);
  }));
  return _getPermisosPorPerfil.apply(this, arguments);
}

function bajaPerfil(_x19, _x20) {
  return _bajaPerfil.apply(this, arguments);
}

function _bajaPerfil() {
  _bajaPerfil = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(req, res) {
    var id, usuariomodificacion, permisos, updateRowCount, usuarios;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
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
      }
    }, _callee10, null, [[2, 17]]);
  }));
  return _bajaPerfil.apply(this, arguments);
}