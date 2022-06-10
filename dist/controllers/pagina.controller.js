"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPagina = createPagina;
exports.deletePagina = deletePagina;
exports.getOnePagina = getOnePagina;
exports.getPaginas = getPaginas;
exports.getPaginasJson = getPaginasJson;
exports.updatePagina = updatePagina;

var _Pagina = _interopRequireDefault(require("../models/Pagina"));

var _PaginaAccion = _interopRequireDefault(require("../models/PaginaAccion"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require('sequelize'),
    QueryTypes = _require.QueryTypes;

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
                    attributes: ['id', 'accionid', 'paginaid', 'estado'],
                    require: true,
                    where: {
                      estado: 'ACT'
                    }
                  }]
                }, {
                  model: _PaginaAccion["default"],
                  attributes: ['id', 'accionid', 'paginaid', 'estado'],
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
                attributes: ['id', 'accionid', 'paginaid', 'estado'],
                require: true,
                estado: 'ACT'
              }]
            });

          case 3:
            paginas = _context.sent;
            lista = paginas.filter(function (item) {
              return item.estado = 'ACT';
            }); //lista = paginas.filter(item => item.Paginas.estado = 'ACT');
            // console.log(lista);

            res.json({
              data: lista
            });
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context.t0.message
              }
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));
  return _getPaginas.apply(this, arguments);
}

function getPaginasJson(_x3, _x4) {
  return _getPaginasJson.apply(this, arguments);
}

function _getPaginasJson() {
  _getPaginasJson = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var paginas, personObject;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _database.sequelize.query("\tselect * from public.pa_listar_paginas() " //where (pda2.placa like '%`+dato+`%' or pda2.colorvehiculo like '%`+dato+`%' or pda2.marcavehiculo like '%`+dato+`%' or pda2.titular like '%`+dato+`%') s.id= '` + sucursalid + `'  and p.estado IN ('ACT','CER')  and  p.tpoliza='` + tipopolizaid + `'  order by p.fechamodificacion desc `
            , {
              type: QueryTypes.SELECT
            });

          case 3:
            paginas = _context2.sent;
            //lista = paginas.filter(item => item.Paginas.estado = 'ACT');
            // console.log(lista);
            personObject = JSON.parse(paginas[0].dato);
            res.json({
              data: personObject
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
  return _getPaginasJson.apply(this, arguments);
}

function createPagina(_x5, _x6) {
  return _createPagina.apply(this, arguments);
}

function _createPagina() {
  _createPagina = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, nombre, descripcion, url, paginaid, usuarioregistro, usuariomodificacion, estado, newPagina;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, nombre = _req$body.nombre, descripcion = _req$body.descripcion, url = _req$body.url, paginaid = _req$body.paginaid, usuarioregistro = _req$body.usuarioregistro, usuariomodificacion = _req$body.usuariomodificacion, estado = _req$body.estado;
            _context3.prev = 1;
            _context3.next = 4;
            return _Pagina["default"].create({
              nombre: nombre,
              descripcion: descripcion,
              url: url,
              paginaid: paginaid,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: new Date(),
              fechamodificacion: new Date(),
              estado: estado
            }, {
              fields: ['nombre', 'descripcion', 'url', 'paginaid', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado']
            });

          case 4:
            newPagina = _context3.sent;

            if (!newPagina) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.json({
              message: 'Pagina created successfully',
              data: newPagina
            }));

          case 7:
            _context3.next = 13;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context3.t0.message
              }
            });

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 9]]);
  }));
  return _createPagina.apply(this, arguments);
}

function getOnePagina(_x7, _x8) {
  return _getOnePagina.apply(this, arguments);
}

function _getOnePagina() {
  _getOnePagina = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, pagina;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _Pagina["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            pagina = _context4.sent;
            res.json({
              data: pagina
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
  return _getOnePagina.apply(this, arguments);
}

function deletePagina(_x9, _x10) {
  return _deletePagina.apply(this, arguments);
}

function _deletePagina() {
  _deletePagina = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return _Pagina["default"].update({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context5.sent;
            res.json({
              message: 'Pagina deleted successfully',
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
  return _deletePagina.apply(this, arguments);
}

function updatePagina(_x11, _x12) {
  return _updatePagina.apply(this, arguments);
}

function _updatePagina() {
  _updatePagina = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, nombre, descripcion, url, paginaid, usuarioregistro, usuariomodificacion, estado, cant, usuarios;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, nombre = _req$body2.nombre, descripcion = _req$body2.descripcion, url = _req$body2.url, paginaid = _req$body2.paginaid, usuarioregistro = _req$body2.usuarioregistro, usuariomodificacion = _req$body2.usuariomodificacion, estado = _req$body2.estado;
            _context6.prev = 2;
            _context6.next = 5;
            return _Pagina["default"].update({
              nombre: nombre,
              descripcion: descripcion,
              url: url,
              paginaid: paginaid,
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
            cant = _context6.sent;
            _context6.next = 8;
            return _Pagina["default"].findOne({
              where: {
                id: id
              }
            });

          case 8:
            usuarios = _context6.sent;
            return _context6.abrupt("return", res.json({
              message: 'Pagina updated successfully',
              data: usuarios
            }));

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
  return _updatePagina.apply(this, arguments);
}