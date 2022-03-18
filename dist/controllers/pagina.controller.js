"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPagina = createPagina;
exports.deletePagina = deletePagina;
exports.getOnePagina = getOnePagina;
exports.getPaginas = getPaginas;
exports.updatePagina = updatePagina;

var _Pagina = _interopRequireDefault(require("../models/Pagina"));

var _PaginaAccion = _interopRequireDefault(require("../models/PaginaAccion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getPaginas(_x, _x2) {
  return _getPaginas.apply(this, arguments);
}

function _getPaginas() {
  _getPaginas = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var paginas, lista;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Pagina["default"].findAll({
              where: {
                estado: 'ACT',
                paginaid: null
              },
              require: true,
              order: [['orden', 'ASC']],
              include: [{
                model: _Pagina["default"],
                require: true,
                estado: 'ACT',
                include: [{
                  model: _Pagina["default"],
                  require: true,
                  estado: 'ACT',
                  include: [{
                    model: _PaginaAccion["default"],
                    attributes: ['id', 'accionid', 'paginaid'],
                    require: true,
                    estado: 'ACT'
                  }]
                }, {
                  model: _PaginaAccion["default"],
                  attributes: ['id', 'accionid', 'paginaid'],
                  require: true,
                  estado: 'ACT'
                }]
                /*  ,
                 include: [{
                     model: PaginaAccion, attributes: ['id', 'accionid', 'paginaid'], require: true, estado: 'ACT'
                 },
                 ] */

              }, {
                model: _PaginaAccion["default"],
                attributes: ['id', 'accionid', 'paginaid'],
                require: true,
                estado: 'ACT'
              }]
            });

          case 3:
            paginas = _context.sent;
            lista = paginas.filter(function (item) {
              return item.estado = 'ACT';
            });
            console.log(lista);
            res.json({
              data: lista
            });
            _context.next = 13;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
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
    }, _callee, null, [[0, 9]]);
  }));
  return _getPaginas.apply(this, arguments);
}

function createPagina(_x3, _x4) {
  return _createPagina.apply(this, arguments);
}

function _createPagina() {
  _createPagina = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, nombre, descripcion, url, paginaid, usuarioregistro, usuariomodificacion, fecharegistro, fechamodificacion, estado, newPagina;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, nombre = _req$body.nombre, descripcion = _req$body.descripcion, url = _req$body.url, paginaid = _req$body.paginaid, usuarioregistro = _req$body.usuarioregistro, usuariomodificacion = _req$body.usuariomodificacion, fecharegistro = _req$body.fecharegistro, fechamodificacion = _req$body.fechamodificacion, estado = _req$body.estado;
            _context2.prev = 1;
            _context2.next = 4;
            return _Pagina["default"].create({
              nombre: nombre,
              descripcion: descripcion,
              url: url,
              paginaid: paginaid,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: fecharegistro,
              fechamodificacion: fechamodificacion,
              estado: estado
            }, {
              fields: ['nombre', 'descripcion', 'url', 'paginaid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado']
            });

          case 4:
            newPagina = _context2.sent;

            if (!newPagina) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.json({
              message: 'Pagina created successfully',
              data: newPagina
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
  return _createPagina.apply(this, arguments);
}

function getOnePagina(_x5, _x6) {
  return _getOnePagina.apply(this, arguments);
}

function _getOnePagina() {
  _getOnePagina = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, pagina;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _Pagina["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            pagina = _context3.sent;
            res.json({
              data: pagina
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
  return _getOnePagina.apply(this, arguments);
}

function deletePagina(_x7, _x8) {
  return _deletePagina.apply(this, arguments);
}

function _deletePagina() {
  _deletePagina = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _Pagina["default"].update({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context4.sent;
            res.json({
              message: 'Pagina deleted successfully',
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
  return _deletePagina.apply(this, arguments);
}

function updatePagina(_x9, _x10) {
  return _updatePagina.apply(this, arguments);
}

function _updatePagina() {
  _updatePagina = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, _req$body2, nombre, descripcion, url, paginaid, usuarioregistro, usuariomodificacion, fecharegistro, fechamodificacion, estado, cant, usuarios;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, nombre = _req$body2.nombre, descripcion = _req$body2.descripcion, url = _req$body2.url, paginaid = _req$body2.paginaid, usuarioregistro = _req$body2.usuarioregistro, usuariomodificacion = _req$body2.usuariomodificacion, fecharegistro = _req$body2.fecharegistro, fechamodificacion = _req$body2.fechamodificacion, estado = _req$body2.estado;
            _context5.prev = 2;
            _context5.next = 5;
            return _Pagina["default"].update({
              nombre: nombre,
              descripcion: descripcion,
              url: url,
              paginaid: paginaid,
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
            cant = _context5.sent;
            _context5.next = 8;
            return _Pagina["default"].findOne({
              where: {
                id: id
              }
            });

          case 8:
            usuarios = _context5.sent;
            return _context5.abrupt("return", res.json({
              message: 'Pagina updated successfully',
              data: usuarios
            }));

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
  return _updatePagina.apply(this, arguments);
}