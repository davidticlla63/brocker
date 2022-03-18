"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bajaUsuario = bajaUsuario;
exports.createUsuario = createUsuario;
exports.deleteUsuario = deleteUsuario;
exports.getOneUsuario = getOneUsuario;
exports.getUsuarios = getUsuarios;
exports.login = login;
exports.updateUsuario = updateUsuario;
exports.usuarioByEmpresa = usuarioByEmpresa;
exports.usuarioBySucursal = usuarioBySucursal;
exports.usuariosBySucursal = usuariosBySucursal;

var _Usuario = _interopRequireDefault(require("../models/Usuario"));

var _UsuarioPerfil = _interopRequireDefault(require("../models/UsuarioPerfil"));

var _SucursalUsuario = _interopRequireDefault(require("../models/SucursalUsuario"));

var _database = require("../database/database");

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require('sequelize'),
    QueryTypes = _require.QueryTypes;

//const { v4: uuidv4 } = require('uuid');
function login(_x, _x2) {
  return _login.apply(this, arguments);
}

function _login() {
  _login = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, nick, password, usuarios, usuario, token, _usuarios, perfiles;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            // console.log(req.params);
            _req$body = req.body, nick = _req$body.nick, password = _req$body.password;
            /*   if(nick ==null || password ==null){
                    throw new error("usuario y contraseña no pueden estar en blanco");
                } */

            if (!(typeof nick === "undefined")) {
              _context.next = 4;
              break;
            }

            throw new Error("ingrese el usuario!!!");

          case 4:
            if (!(typeof password === "undefined")) {
              _context.next = 6;
              break;
            }

            throw new Error("ingrese el contraseña!!!");

          case 6:
            _context.next = 8;
            return _database.sequelize.query("select up.* \n                 from  usuario up \n                where   up.estado !='BAJ' and up.nick= '" + nick + "' ", {
              type: QueryTypes.SELECT
            });

          case 8:
            usuarios = _context.sent;

            if (usuarios) {
              _context.next = 11;
              break;
            }

            throw new Error("no se encontró el usuario");

          case 11:
            if (!(usuarios.length === 0)) {
              _context.next = 13;
              break;
            }

            throw new Error("no se encontró el usuario");

          case 13:
            usuario = usuarios[0]; // check account found and verify password

            if (!(!usuario.password || !_bcryptjs["default"].compareSync(password, usuario.password))) {
              _context.next = 18;
              break;
            }

            throw new Error("contraseña no valida!!");

          case 18:
            token = _jsonwebtoken["default"].sign({
              id: usuario.id
            }, _config["default"].SECRET, {
              expiresIn: 86400 //24 horas

            }); // authentication successful

            _context.next = 21;
            return _database.sequelize.query("select u.id, u.nick,u.estado,p.ci,p.nombrecompleto,p.fotoperfil,s.id sucursalid, s.nombre nombresucursal,e.id empresaid,e.razonsocial nombreempresa,a.nombre areatrabajo\n             from usuario u \n                inner join sucursal_usuario su on su.usuarioid=u.id and su.estado='ACT' \n                left JOIN sucursal s on s.id=su.sucursalid and s.estado='ACT' \n                left join personal p on p.id=u.personalid  and p.estado='ACT'\n                left join area_trabajo a on a.id =p.areatrabajoid\n                LEFT join empresa e on e.id=s.empresaid and e.estado='ACT' \n                where u.id= '" + usuario.id + "' and u.estado in ('ACT','SU','ADM') order by u.nick ", {
              type: QueryTypes.SELECT
            });

          case 21:
            _usuarios = _context.sent;
            _context.next = 24;
            return _database.sequelize.query("select pe.id,pe.nombre,pe.sucursalid,s.nombre as sucursal ,p.diaproduccion \n                 from  usuario_perfil up \n                INNER JOIN perfil pe on pe.id=up.perfilid \n                inner join sucursal s on  s.id= pe.sucursalid \n                left join param_produccion p  on p.sucursalid=pe.sucursalid and p.estado='ACT' \n                where   up.estado='ACT' and up.usuarioid= '" + usuario.id + "' order by pe.nombre ", {
              type: QueryTypes.SELECT
            });

          case 24:
            perfiles = _context.sent;
            res.json({
              data: {
                "estado": true,
                "messaje": "Ingreso exitoso!!",
                usuarios: _usuarios,
                perfiles: perfiles,
                "token": token
              }
            });

          case 26:
            _context.next = 32;
            break;

          case 28:
            _context.prev = 28;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.json({
              data: {
                estado: false,
                "error": _context.t0.message
              }
            });

          case 32:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 28]]);
  }));
  return _login.apply(this, arguments);
}

function getUsuarios(_x3, _x4) {
  return _getUsuarios.apply(this, arguments);
}

function _getUsuarios() {
  _getUsuarios = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var usuarios;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Usuario["default"].findAll({
              where: {
                estado: 'ACT'
              },
              include: _UsuarioPerfil["default"]
            });

          case 3:
            usuarios = _context2.sent;
            res.json({
              data: usuarios
            });
            _context2.next = 11;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context2.t0.message
              }
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return _getUsuarios.apply(this, arguments);
}

function createUsuario(_x5, _x6) {
  return _createUsuario.apply(this, arguments);
}
/* export async function createUsuario(req, res) {
    const {
        // id=
        //nombrecompleto,
        sucursal,
        perfiles,
        nick,
        password,
        empresaid,
        personalid,
        usuarioregistro,
        usuariomodificacion,
        estado } = req.body;

    try {


        //const transaction= sequelize.transaction;
        const result = await sequelize.transaction(async (t) => {

            let newUsuario = await Usuario.create({
                //nombrecompleto,
                nick,
                password,
                empresaid,
                personalid,
                usuarioregistro,
                usuariomodificacion,
                fecharegistro: new Date(),
                fechamodificacion: new Date(),
                estado
            }, {
                fields: ['nick', 'empresaid',
                    'personalid', 'password', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro',
                    'fechamodificacion', 'estado']
            }, { transaction: t });

            let sucursal_usuario = await SucursalUsuario.create({
                sucursalid: sucursal.sucursalid,
                usuarioid: newUsuario.id,
                usuarioregistro: usuarioregistro,
                fechamodificacion: new Date(),
                fecharegistro: new Date(),
                estado: 'ACT'
            }, { transaction: t });




            // step 3
            for (let i = 0; i < perfiles.length; i++) {
                await UsuarioPerfil.create({
                    perfilid:' perfiles[i].id',
                    usuarioid: newUsuario.id,
                    usuarioregistro: usuarioregistro,
                    fechamodificacion: new Date(),
                    fecharegistro: new Date(),
                    estado: 'ACT'
                }, { transaction: t });
            }
            if (newUsuario) {
                return res.json({
                    message: 'Usuario created successfully',
                    data: newUsuario
                });
            }

        });

    } catch (e) {

        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });

    }
} */


function _createUsuario() {
  _createUsuario = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body2, sucursal, perfiles, nick, password, empresaid, personalid, usuarioregistro, usuariomodificacion, estado, t, newUsuario, i;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body2 = req.body, sucursal = _req$body2.sucursal, perfiles = _req$body2.perfiles, nick = _req$body2.nick, password = _req$body2.password, empresaid = _req$body2.empresaid, personalid = _req$body2.personalid, usuarioregistro = _req$body2.usuarioregistro, usuariomodificacion = _req$body2.usuariomodificacion, estado = _req$body2.estado; //let guid= uuidv4();
            //console.log(guid);

            _context3.next = 3;
            return _database.sequelize.transaction();

          case 3:
            t = _context3.sent;
            _context3.prev = 4;
            _context3.next = 7;
            return _Usuario["default"].create({
              //nombrecompleto,
              nick: nick,
              password: _bcryptjs["default"].hashSync(password, 10),
              empresaid: empresaid,
              personalid: personalid,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: new Date(),
              fechamodificacion: new Date(),
              estado: estado
            }, {
              fields: ['nick', 'empresaid', 'personalid', 'password', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado']
            }, {
              transaction: t
            });

          case 7:
            newUsuario = _context3.sent;
            _context3.next = 10;
            return _SucursalUsuario["default"].create({
              sucursalid: sucursal.sucursalid,
              usuarioid: newUsuario.id,
              usuarioregistro: usuarioregistro,
              fechamodificacion: new Date(),
              fecharegistro: new Date(),
              estado: 'ACT'
            }, {
              transaction: t
            });

          case 10:
            i = 0;

          case 11:
            if (!(i < perfiles.length)) {
              _context3.next = 17;
              break;
            }

            _context3.next = 14;
            return _UsuarioPerfil["default"].create({
              perfilid: perfiles[i].id,
              usuarioid: newUsuario.id,
              usuarioregistro: usuarioregistro,
              fechamodificacion: new Date(),
              fecharegistro: new Date(),
              estado: 'ACT'
            }, {
              transaction: t
            });

          case 14:
            i++;
            _context3.next = 11;
            break;

          case 17:
            _context3.next = 19;
            return t.commit();

          case 19:
            if (!newUsuario) {
              _context3.next = 21;
              break;
            }

            return _context3.abrupt("return", res.json({
              message: 'Usuario created successfully',
              //data: {newUsuario,"token":token}
              data: {
                newUsuario: newUsuario
              }
            }));

          case 21:
            _context3.next = 33;
            break;

          case 23:
            _context3.prev = 23;
            _context3.t0 = _context3["catch"](4);

            if (!t) {
              _context3.next = 31;
              break;
            }

            _context3.next = 28;
            return t.rollback();

          case 28:
            if (!newUsuario) {
              _context3.next = 31;
              break;
            }

            _context3.next = 31;
            return _Usuario["default"].destroy({
              where: {
                id: newUsuario.id
              }
            });

          case 31:
            console.log(_context3.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": e.message
              }
            }); // throw new Error(err);

          case 33:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[4, 23]]);
  }));
  return _createUsuario.apply(this, arguments);
}

function getOneUsuario(_x7, _x8) {
  return _getOneUsuario.apply(this, arguments);
}

function _getOneUsuario() {
  _getOneUsuario = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, usuario;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _Usuario["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            usuario = _context4.sent;
            res.json({
              data: usuario
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
  return _getOneUsuario.apply(this, arguments);
}

function deleteUsuario(_x9, _x10) {
  return _deleteUsuario.apply(this, arguments);
}

function _deleteUsuario() {
  _deleteUsuario = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return _Usuario["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context5.sent;
            res.json({
              message: 'Usuario deleted successfully',
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
  return _deleteUsuario.apply(this, arguments);
}

function updateUsuario(_x11, _x12) {
  return _updateUsuario.apply(this, arguments);
}

function _updateUsuario() {
  _updateUsuario = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body3, sucursal, perfiles, nick, password, empresaid, personalid, usuarioregistro, usuariomodificacion, estado, t, count, usuarios, i;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _req$body3 = req.body, sucursal = _req$body3.sucursal, perfiles = _req$body3.perfiles, nick = _req$body3.nick, password = _req$body3.password, empresaid = _req$body3.empresaid, personalid = _req$body3.personalid, usuarioregistro = _req$body3.usuarioregistro, usuariomodificacion = _req$body3.usuariomodificacion, estado = _req$body3.estado;
            _context6.next = 4;
            return _database.sequelize.transaction();

          case 4:
            t = _context6.sent;
            _context6.prev = 5;
            _context6.next = 8;
            return _Usuario["default"].update({
              nick: nick,
              password: _bcryptjs["default"].hashSync(password, 10),
              empresaid: empresaid,
              personalid: personalid,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fechamodificacion: new Date(),
              estado: estado
            }, {
              where: {
                id: id
              }
            }, {
              transaction: t
            });

          case 8:
            count = _context6.sent;
            _context6.next = 11;
            return _Usuario["default"].findOne({
              where: {
                id: id
              }
            }, {
              transaction: t
            });

          case 11:
            usuarios = _context6.sent;
            _context6.next = 14;
            return _SucursalUsuario["default"].update({
              fechamodificacion: new Date(),
              estado: 'BAJ'
            }, {
              where: {
                usuarioid: id
              }
            }, {
              transaction: t
            });

          case 14:
            _context6.next = 16;
            return _SucursalUsuario["default"].create({
              sucursalid: sucursal.sucursalid,
              usuarioid: id,
              usuarioregistro: usuarioregistro,
              fechamodificacion: new Date(),
              fecharegistro: new Date(),
              estado: 'ACT'
            }, {
              transaction: t
            });

          case 16:
            _context6.next = 18;
            return _UsuarioPerfil["default"].update({
              fechamodificacion: new Date(),
              estado: 'BAJ'
            }, {
              where: {
                usuarioid: id
              }
            }, {
              transaction: t
            });

          case 18:
            i = 0;

          case 19:
            if (!(i < perfiles.length)) {
              _context6.next = 25;
              break;
            }

            _context6.next = 22;
            return _UsuarioPerfil["default"].create({
              perfilid: perfiles[i].id,
              usuarioid: id,
              usuarioregistro: usuarioregistro,
              fechamodificacion: new Date(),
              fecharegistro: new Date(),
              estado: 'ACT'
            }, {
              transaction: t
            });

          case 22:
            i++;
            _context6.next = 19;
            break;

          case 25:
            _context6.next = 27;
            return t.commit();

          case 27:
            if (!usuarios) {
              _context6.next = 29;
              break;
            }

            return _context6.abrupt("return", res.json({
              message: 'Usuario created successfully',
              data: usuarios
            }));

          case 29:
            _context6.next = 38;
            break;

          case 31:
            _context6.prev = 31;
            _context6.t0 = _context6["catch"](5);

            if (!t) {
              _context6.next = 36;
              break;
            }

            _context6.next = 36;
            return t.rollback();

          case 36:
            console.log(_context6.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": e.message
              }
            }); // throw new Error(err);

          case 38:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[5, 31]]);
  }));
  return _updateUsuario.apply(this, arguments);
}

function usuarioBySucursal(_x13, _x14) {
  return _usuarioBySucursal.apply(this, arguments);
}

function _usuarioBySucursal() {
  _usuarioBySucursal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var sucursalid, usuarios;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            sucursalid = req.params.sucursalid;
            _context7.next = 4;
            return _Usuario["default"].findAll({
              where: {
                estado: 'ACT'
              },
              include: [//{model:AreaTrabajo, attributes: ['nombre'],require:true },
              {
                model: _SucursalUsuario["default"],
                attributes: ['nombre'],
                require: true,
                where: {
                  sucursalid: sucursalid,
                  estado: 'ACT'
                }
              }]
            });

          case 4:
            usuarios = _context7.sent;
            res.json({
              usuarios: usuarios
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
  return _usuarioBySucursal.apply(this, arguments);
}

function usuarioByEmpresa(_x15, _x16) {
  return _usuarioByEmpresa.apply(this, arguments);
}

function _usuarioByEmpresa() {
  _usuarioByEmpresa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
    var empresaid, usuarios;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            empresaid = req.params.empresaid;
            _context8.next = 4;
            return _database.sequelize.query("SELECT u.id,u.nick,u.usuarioregistro,u.usuariomodificacion,u.fecharegistro,u.fechamodificacion,u.empresaid,u.personalid,u.estado\n            ,p.nombrecompleto,s.id as sucursalid,s.nombre as nombresucursal,pe.id as perfilid,pe.nombre as nombreperfil FROM usuario u \n            inner join personal p on p.id=u.personalid and p.estado='ACT' \n            inner join sucursal_usuario su on  su.usuarioid=u.id and su.estado='ACT' \n            INNER JOIN sucursal s on s.id= su.sucursalid  and s.estado='ACT' \n            inner join  usuario_perfil up on up.usuarioid=u.id and up. estado='ACT' \n            INNER JOIN perfil pe on pe.id=up.perfilid  and pe.estado='ACT' \n            WHERE u.estado  !='BAJ' and u.empresaid= '" + empresaid + "' order by u.fechamodificacion desc ", {
              type: QueryTypes.SELECT
            });

          case 4:
            usuarios = _context8.sent;
            //console.log(JSON.stringify(usuarios[0], null, 2));
            res.json({
              usuarios: usuarios
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
  return _usuarioByEmpresa.apply(this, arguments);
}

function usuariosBySucursal(_x17, _x18) {
  return _usuariosBySucursal.apply(this, arguments);
}

function _usuariosBySucursal() {
  _usuariosBySucursal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(req, res) {
    var sucursalid, usuarios;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            sucursalid = req.params.sucursalid;
            _context9.next = 4;
            return _database.sequelize.query("SELECT  u.id,u.nick,u.usuarioregistro,u.usuariomodificacion,u.fecharegistro,u.fechamodificacion,u.empresaid,u.personalid,u.estado\n            ,p.nombrecompleto,s.id as sucursalid,s.nombre as nombresucursal,pe.id as perfilid,pe.nombre as nombreperfil FROM usuario u \n            inner join personal p on p.id=u.personalid and p.estado='ACT' \n            inner join sucursal_usuario su on  su.usuarioid=u.id and su.estado='ACT' \n            INNER JOIN sucursal s on s.id= su.sucursalid  and s.estado='ACT' \n            inner join  usuario_perfil up on up.usuarioid=u.id and up. estado='ACT' \n            INNER JOIN perfil pe on pe.id=up.perfilid  and pe.estado='ACT' \n            WHERE u.estado !='BAJ' and su.sucursalid= '" + sucursalid + "' order by u.id ", {
              type: QueryTypes.SELECT
            });

          case 4:
            usuarios = _context9.sent;
            //console.log(JSON.stringify(usuarios[0], null, 2));
            res.json({
              usuarios: usuarios
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
  return _usuariosBySucursal.apply(this, arguments);
}

function bajaUsuario(_x19, _x20) {
  return _bajaUsuario.apply(this, arguments);
}

function _bajaUsuario() {
  _bajaUsuario = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(req, res) {
    var id, usuariomodificacion, updateRowCount, usuarios;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            id = req.params.id;
            usuariomodificacion = req.body.usuariomodificacion;
            _context10.prev = 2;
            _context10.next = 5;
            return _Usuario["default"].update({
              usuariomodificacion: usuariomodificacion,
              fechamodificacion: new Date(),
              estado: "BAJ"
            }, {
              where: {
                id: id
              }
            });

          case 5:
            updateRowCount = _context10.sent;
            _context10.next = 8;
            return _Usuario["default"].findOne({
              where: {
                id: id
              }
            } //,{ include: Sucursal } 
            );

          case 8:
            usuarios = _context10.sent;
            res.json({
              message: 'Sucursal baja successfully',
              count: usuarios
            });
            _context10.next = 16;
            break;

          case 12:
            _context10.prev = 12;
            _context10.t0 = _context10["catch"](2);
            console.log(_context10.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context10.t0.message
              }
            });

          case 16:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[2, 12]]);
  }));
  return _bajaUsuario.apply(this, arguments);
}