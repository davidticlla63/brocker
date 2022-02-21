"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bajaArchivo = bajaArchivo;
exports.createArchivo = createArchivo;
exports.deleteArchivo = deleteArchivo;
exports.getArchivos = getArchivos;
exports.getArchivosCodigo = getArchivosCodigo;
exports.getArchivosXAsegurado = getArchivosXAsegurado;
exports.getOneArchivo = getOneArchivo;
exports.updateArchivo = updateArchivo;

var _database = require("../database/database");

var _Archivo = _interopRequireDefault(require("../models/Archivo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require('sequelize'),
    QueryTypes = _require.QueryTypes;

function getArchivos(_x, _x2) {
  return _getArchivos.apply(this, arguments);
}

function _getArchivos() {
  _getArchivos = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var codigo, archivos;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //console.log('getArchivos');
            codigo = req.params.codigo;
            _context.prev = 1;

            if (!codigo) {
              _context.next = 7;
              break;
            }

            _context.next = 5;
            return _Archivo["default"].findAll({
              where: {
                estado: 'ACT',
                codigo: codigo
              }
            });

          case 5:
            archivos = _context.sent;
            res.json({
              data: archivos
            });

          case 7:
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 9]]);
  }));
  return _getArchivos.apply(this, arguments);
}

function getArchivosCodigo(_x3, _x4) {
  return _getArchivosCodigo.apply(this, arguments);
}

function _getArchivosCodigo() {
  _getArchivosCodigo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var codigo, query, archivos;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            //console.log('getArchivosCodigo');
            codigo = req.params.codigo; //const archivos = await Archivo.findAll({ where: { codigo,estado: 'ACT' }});

            if (!codigo) {
              _context2.next = 9;
              break;
            }

            query = "select a.*" + "from archivo a " + "where a.codigo='" + codigo + "' and a.estado='ACT' order by a.nombre ";
            console.log(query);
            _context2.next = 7;
            return _database.sequelize.query(query, {
              type: QueryTypes.SELECT
            });

          case 7:
            archivos = _context2.sent;
            res.json({
              data: archivos
            });

          case 9:
            _context2.next = 14;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 11]]);
  }));
  return _getArchivosCodigo.apply(this, arguments);
}

function getArchivosXAsegurado(_x5, _x6) {
  return _getArchivosXAsegurado.apply(this, arguments);
}

function _getArchivosXAsegurado() {
  _getArchivosXAsegurado = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var aseguradoid, archivos;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            aseguradoid = req.params.aseguradoid;
            _context3.next = 4;
            return _Archivo["default"].findAll({
              where: {
                aseguradoid: aseguradoid,
                estado: 'ACT'
              }
            });

          case 4:
            archivos = _context3.sent;
            res.json({
              data: archivos
            });
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return _getArchivosXAsegurado.apply(this, arguments);
}

function createArchivo(_x7, _x8) {
  return _createArchivo.apply(this, arguments);
}

function _createArchivo() {
  _createArchivo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$body, nombre, descripcion, extension, archivo, tipo, codigo, aseguradoid, sucursalid, carpetaid, usuarioregistro, usuariomodificacion, _req$body$fecharegist, fecharegistro, _req$body$fechamodifi, fechamodificacion, _req$body$estado, estado, newArchivo;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, nombre = _req$body.nombre, descripcion = _req$body.descripcion, extension = _req$body.extension, archivo = _req$body.archivo, tipo = _req$body.tipo, codigo = _req$body.codigo, aseguradoid = _req$body.aseguradoid, sucursalid = _req$body.sucursalid, carpetaid = _req$body.carpetaid, usuarioregistro = _req$body.usuarioregistro, usuariomodificacion = _req$body.usuariomodificacion, _req$body$fecharegist = _req$body.fecharegistro, fecharegistro = _req$body$fecharegist === void 0 ? new Date() : _req$body$fecharegist, _req$body$fechamodifi = _req$body.fechamodificacion, fechamodificacion = _req$body$fechamodifi === void 0 ? new Date() : _req$body$fechamodifi, _req$body$estado = _req$body.estado, estado = _req$body$estado === void 0 ? 'ACT' : _req$body$estado;
            _context4.prev = 1;
            _context4.next = 4;
            return _Archivo["default"].create({
              nombre: nombre,
              descripcion: descripcion,
              extension: extension,
              archivo: archivo,
              tipo: tipo,
              codigo: codigo,
              aseguradoid: aseguradoid,
              sucursalid: sucursalid,
              carpetaid: carpetaid,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: fecharegistro,
              fechamodificacion: fechamodificacion,
              estado: estado
            }, {
              fields: ['nombre', 'descripcion', 'extension', 'archivo', 'tipo', 'codigo', 'aseguradoid', 'carpetaid', 'sucursalid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado']
            });

          case 4:
            newArchivo = _context4.sent;

            if (!newArchivo) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", res.json({
              message: 'Archivo created successfully',
              data: newArchivo
            }));

          case 7:
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
  return _createArchivo.apply(this, arguments);
}

function getOneArchivo(_x9, _x10) {
  return _getOneArchivo.apply(this, arguments);
}

function _getOneArchivo() {
  _getOneArchivo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, usuario;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return _Archivo["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            usuario = _context5.sent;
            res.json({
              data: usuario
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
  return _getOneArchivo.apply(this, arguments);
}

function deleteArchivo(_x11, _x12) {
  return _deleteArchivo.apply(this, arguments);
}

function _deleteArchivo() {
  _deleteArchivo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            id = req.params.id;
            _context6.next = 4;
            return _Archivo["default"].update({
              estado: 'ACT'
            }, {
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context6.sent;
            res.json({
              message: 'Archivo deleted successfully',
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
  return _deleteArchivo.apply(this, arguments);
}

function updateArchivo(_x13, _x14) {
  return _updateArchivo.apply(this, arguments);
}

function _updateArchivo() {
  _updateArchivo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var id, _req$body2, nombre, descripcion, extension, archivo, tipo, codigo, aseguradoid, sucursalid, carpetaid, usuarioregistro, usuariomodificacion, fecharegistro, fechamodificacion, estado, updateRowCount, archivos;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, nombre = _req$body2.nombre, descripcion = _req$body2.descripcion, extension = _req$body2.extension, archivo = _req$body2.archivo, tipo = _req$body2.tipo, codigo = _req$body2.codigo, aseguradoid = _req$body2.aseguradoid, sucursalid = _req$body2.sucursalid, carpetaid = _req$body2.carpetaid, usuarioregistro = _req$body2.usuarioregistro, usuariomodificacion = _req$body2.usuariomodificacion, fecharegistro = _req$body2.fecharegistro, fechamodificacion = _req$body2.fechamodificacion, estado = _req$body2.estado;
            _context7.prev = 2;
            _context7.next = 5;
            return _Archivo["default"].update({
              nombre: nombre,
              descripcion: descripcion,
              extension: extension,
              archivo: archivo,
              tipo: tipo,
              codigo: codigo,
              aseguradoid: aseguradoid,
              sucursalid: sucursalid,
              carpetaid: carpetaid,
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
            updateRowCount = _context7.sent;
            _context7.next = 8;
            return _Archivo["default"].findOne({
              where: {
                id: id
              }
            });

          case 8:
            archivos = _context7.sent;
            res.json({
              message: 'Archivo update successfully',
              count: archivos
            });
            _context7.next = 16;
            break;

          case 12:
            _context7.prev = 12;
            _context7.t0 = _context7["catch"](2);
            console.log(_context7.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context7.t0.message
              }
            });

          case 16:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[2, 12]]);
  }));
  return _updateArchivo.apply(this, arguments);
}

function bajaArchivo(_x15, _x16) {
  return _bajaArchivo.apply(this, arguments);
}

function _bajaArchivo() {
  _bajaArchivo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
    var id, usuariomodificacion, updateRowCount, archivos;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            id = req.params.id;
            console.log("bajaArchivo");
            usuariomodificacion = req.body.usuariomodificacion;
            _context8.prev = 3;
            _context8.next = 6;
            return _Archivo["default"].update({
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
            return _Archivo["default"].findOne({
              where: {
                id: id
              }
            });

          case 9:
            archivos = _context8.sent;
            res.json({
              message: 'Archivo baja successfully',
              count: archivos
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
  return _bajaArchivo.apply(this, arguments);
}