"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getContratantes = getContratantes;
exports.createContratante = createContratante;
exports.getOneContratante = getOneContratante;
exports.getOneContratantePorSucursal = getOneContratantePorSucursal;
exports.deleteContratante = deleteContratante;
exports.updateContratante = updateContratante;
exports.bajaContratante = bajaContratante;
exports.getContratantesPorEmpresa = getContratantesPorEmpresa;

var _database = require("../database/database");

var _Contratante = _interopRequireDefault(require("../models/Contratante"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require('sequelize'),
    QueryTypes = _require.QueryTypes;

function getContratantes(_x, _x2) {
  return _getContratantes.apply(this, arguments);
}

function _getContratantes() {
  _getContratantes = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var contratantes;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Contratante["default"].findAll({
              where: {
                estado: 'ACT'
              }
            });

          case 3:
            contratantes = _context.sent;
            res.json({
              data: contratantes
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
  return _getContratantes.apply(this, arguments);
}

function createContratante(_x3, _x4) {
  return _createContratante.apply(this, arguments);
}

function _createContratante() {
  _createContratante = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, nombre, nit, ejecutivoencargado, direccion, telefono, telefonoejecutivo, correoejecutivo, porcentajecomison, porcentajecomison2, sucursalid, usuarioregistro, usuariomodificacion, _req$body$fecharegist, fecharegistro, _req$body$fechamodifi, fechamodificacion, estado, newContratante;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, nombre = _req$body.nombre, nit = _req$body.nit, ejecutivoencargado = _req$body.ejecutivoencargado, direccion = _req$body.direccion, telefono = _req$body.telefono, telefonoejecutivo = _req$body.telefonoejecutivo, correoejecutivo = _req$body.correoejecutivo, porcentajecomison = _req$body.porcentajecomison, porcentajecomison2 = _req$body.porcentajecomison2, sucursalid = _req$body.sucursalid, usuarioregistro = _req$body.usuarioregistro, usuariomodificacion = _req$body.usuariomodificacion, _req$body$fecharegist = _req$body.fecharegistro, fecharegistro = _req$body$fecharegist === void 0 ? new Date() : _req$body$fecharegist, _req$body$fechamodifi = _req$body.fechamodificacion, fechamodificacion = _req$body$fechamodifi === void 0 ? new Date() : _req$body$fechamodifi, estado = _req$body.estado;
            _context2.prev = 1;
            _context2.next = 4;
            return _Contratante["default"].create({
              nombre: nombre,
              nit: nit,
              ejecutivoencargado: ejecutivoencargado,
              direccion: direccion,
              telefono: telefono,
              telefonoejecutivo: telefonoejecutivo,
              correoejecutivo: correoejecutivo,
              porcentajecomison: porcentajecomison,
              porcentajecomison2: porcentajecomison2,
              sucursalid: sucursalid,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: fecharegistro,
              fechamodificacion: fechamodificacion,
              estado: estado
            }, {
              fields: ['nombre', 'nit', 'ejecutivoencargado', 'direccion', 'telefono', 'telefonoejecutivo', 'correoejecutivo', 'porcentajecomison', 'porcentajecomison2', 'sucursalid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado']
            });

          case 4:
            newContratante = _context2.sent;

            if (!newContratante) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.json({
              message: 'Contratante created successfully',
              data: newContratante
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
  return _createContratante.apply(this, arguments);
}

function getOneContratante(_x5, _x6) {
  return _getOneContratante.apply(this, arguments);
}

function _getOneContratante() {
  _getOneContratante = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, contratante;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _Contratante["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            contratante = _context3.sent;
            res.json({
              data: contratante
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
  return _getOneContratante.apply(this, arguments);
}

function getOneContratantePorSucursal(_x7, _x8) {
  return _getOneContratantePorSucursal.apply(this, arguments);
}

function _getOneContratantePorSucursal() {
  _getOneContratantePorSucursal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var sucursalid, contratantes;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            sucursalid = req.params.sucursalid;
            _context4.next = 4;
            return _Contratante["default"].findAll({
              where: {
                sucursalid: sucursalid,
                estado: 'ACT'
              }
            });

          case 4:
            contratantes = _context4.sent;
            res.json({
              data: contratantes
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
  return _getOneContratantePorSucursal.apply(this, arguments);
}

function deleteContratante(_x9, _x10) {
  return _deleteContratante.apply(this, arguments);
}

function _deleteContratante() {
  _deleteContratante = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return _Contratante["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context5.sent;
            res.json({
              message: 'Contratante deleted successfully',
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
  return _deleteContratante.apply(this, arguments);
}

function updateContratante(_x11, _x12) {
  return _updateContratante.apply(this, arguments);
}

function _updateContratante() {
  _updateContratante = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, nombre, nit, ejecutivoencargado, direccion, telefono, telefonoejecutivo, correoejecutivo, porcentajecomison, porcentajecomison2, sucursalid, usuarioregistro, usuariomodificacion, fecharegistro, fechamodificacion, estado, updateRowCount, contratantes;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, nombre = _req$body2.nombre, nit = _req$body2.nit, ejecutivoencargado = _req$body2.ejecutivoencargado, direccion = _req$body2.direccion, telefono = _req$body2.telefono, telefonoejecutivo = _req$body2.telefonoejecutivo, correoejecutivo = _req$body2.correoejecutivo, porcentajecomison = _req$body2.porcentajecomison, porcentajecomison2 = _req$body2.porcentajecomison2, sucursalid = _req$body2.sucursalid, usuarioregistro = _req$body2.usuarioregistro, usuariomodificacion = _req$body2.usuariomodificacion, fecharegistro = _req$body2.fecharegistro, fechamodificacion = _req$body2.fechamodificacion, estado = _req$body2.estado;
            _context6.prev = 2;
            _context6.next = 5;
            return _Contratante["default"].update({
              nombre: nombre,
              nit: nit,
              ejecutivoencargado: ejecutivoencargado,
              direccion: direccion,
              telefono: telefono,
              telefonoejecutivo: telefonoejecutivo,
              correoejecutivo: correoejecutivo,
              porcentajecomison: porcentajecomison,
              porcentajecomison2: porcentajecomison2,
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
            updateRowCount = _context6.sent;
            _context6.next = 8;
            return _Contratante["default"].findOne({
              where: {
                id: id
              }
            });

          case 8:
            contratantes = _context6.sent;
            res.json({
              message: 'Contratante update successfully',
              count: contratantes
            });
            _context6.next = 16;
            break;

          case 12:
            _context6.prev = 12;
            _context6.t0 = _context6["catch"](2);
            console.log(_context6.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context6.t0.message
              }
            });

          case 16:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[2, 12]]);
  }));
  return _updateContratante.apply(this, arguments);
}

function bajaContratante(_x13, _x14) {
  return _bajaContratante.apply(this, arguments);
}

function _bajaContratante() {
  _bajaContratante = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var id, usuariomodificacion, updateRowCount, contratantes;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id = req.params.id;
            console.log("bajaContratante");
            usuariomodificacion = req.body.usuariomodificacion;
            _context7.prev = 3;
            _context7.next = 6;
            return _Contratante["default"].update({
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
            return _Contratante["default"].findOne({
              where: {
                id: id
              }
            });

          case 9:
            contratantes = _context7.sent;
            res.json({
              message: 'Contratante baja successfully',
              count: contratantes
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
  return _bajaContratante.apply(this, arguments);
}

function getContratantesPorEmpresa(_x15, _x16) {
  return _getContratantesPorEmpresa.apply(this, arguments);
}

function _getContratantesPorEmpresa() {
  _getContratantesPorEmpresa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
    var empresaid, contratantes;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            empresaid = req.params.empresaid;
            _context8.prev = 1;
            _context8.next = 4;
            return _database.sequelize.query("select c.* " + "from contratante c " + "inner join sucursal s on s.id=c.sucursalid  " + "where s.empresaid= '" + empresaid + "' order by c.nombre ", {
              type: QueryTypes.SELECT
            });

          case 4:
            contratantes = _context8.sent;
            //console.log(JSON.stringify(usuarios[0], null, 2));
            //res.json({ contratantes });
            res.json({
              data: contratantes
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
  return _getContratantesPorEmpresa.apply(this, arguments);
}