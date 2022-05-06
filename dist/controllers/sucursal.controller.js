"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bajaSucursal = bajaSucursal;
exports.createSucursal = createSucursal;
exports.deleteSucursal = deleteSucursal;
exports.getOneSucursal = getOneSucursal;
exports.getSucursalByEmpresa = getSucursalByEmpresa;
exports.getSucursals = getSucursals;
exports.updateSucursal = updateSucursal;

var _Empresa = _interopRequireDefault(require("../models/Empresa"));

var _ParamProduccion = _interopRequireDefault(require("../models/ParamProduccion"));

var _Sucursal = _interopRequireDefault(require("../models/Sucursal"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require('sequelize'),
    QueryTypes = _require.QueryTypes;

function getSucursals(_x, _x2) {
  return _getSucursals.apply(this, arguments);
}

function _getSucursals() {
  _getSucursals = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var sucursals;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Sucursal["default"].findAll({
              where: {
                estado: 'ACT'
              },
              order: [['fechamodificacion', 'DESC']]
            });

          case 3:
            sucursals = _context.sent;
            res.json({
              data: sucursals
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
  return _getSucursals.apply(this, arguments);
}

function createSucursal(_x3, _x4) {
  return _createSucursal.apply(this, arguments);
}

function _createSucursal() {
  _createSucursal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, nombre, descripcion, telefono, actividad, representante, departamentoid, direccion, usuarioregistro, _req$body$fecharegist, fecharegistro, fechamodificacion, estado, empresaid, transaction, result;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, nombre = _req$body.nombre, descripcion = _req$body.descripcion, telefono = _req$body.telefono, actividad = _req$body.actividad, representante = _req$body.representante, departamentoid = _req$body.departamentoid, direccion = _req$body.direccion, usuarioregistro = _req$body.usuarioregistro, _req$body$fecharegist = _req$body.fecharegistro, fecharegistro = _req$body$fecharegist === void 0 ? new Date() : _req$body$fecharegist, fechamodificacion = _req$body.fechamodificacion, estado = _req$body.estado, empresaid = _req$body.empresaid;
            _context3.next = 3;
            return _database.sequelize.transaction();

          case 3:
            transaction = _context3.sent;
            _context3.prev = 4;
            _context3.next = 7;
            return _database.sequelize.transaction( /*#__PURE__*/function () {
              var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(t) {
                var newSucursal, newParamProducion;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return _Sucursal["default"].create({
                          nombre: nombre,
                          descripcion: descripcion,
                          telefono: telefono,
                          actividad: actividad,
                          representante: representante,
                          departamentoid: departamentoid,
                          direccion: direccion,
                          usuarioregistro: usuarioregistro,
                          fecharegistro: fecharegistro,
                          fechamodificacion: fechamodificacion,
                          estado: estado,
                          empresaid: empresaid
                        }, {
                          fields: ['nombre', 'descripcion', 'telefono', 'actividad', 'representante', 'departamentoid', 'direccion', 'usuarioregistro', 'fecharegistro', 'fechamodificacion', 'estado', 'empresaid']
                        }, {
                          t: t
                        });

                      case 2:
                        newSucursal = _context2.sent;

                        if (!false) {
                          _context2.next = 5;
                          break;
                        }

                        throw new Error('Rollback initiated');

                      case 5:
                        _context2.next = 7;
                        return _ParamProduccion["default"].create({
                          diaproduccion: 1,
                          sucursalid: newSucursal.id,
                          usuarioregistro: usuarioregistro,
                          fecharegistro: new Date(),
                          fechamodificacion: new Date(),
                          estado: 'ACT'
                        }, {
                          fields: ['diaproduccion', 'sucursalid', 'usuarioregistro', 'fecharegistro', 'fechamodificacion', 'estado']
                        }, {
                          t: t
                        });

                      case 7:
                        newParamProducion = _context2.sent;

                        if (!newSucursal) {
                          _context2.next = 10;
                          break;
                        }

                        return _context2.abrupt("return", res.json({
                          message: 'Sucursal created successfully',
                          data: newSucursal
                        }));

                      case 10:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x15) {
                return _ref.apply(this, arguments);
              };
            }());

          case 7:
            result = _context3.sent;
            _context3.next = 14;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](4);
            console.log(_context3.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context3.t0.message
              }
            });

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[4, 10]]);
  }));
  return _createSucursal.apply(this, arguments);
}

function getOneSucursal(_x5, _x6) {
  return _getOneSucursal.apply(this, arguments);
}

function _getOneSucursal() {
  _getOneSucursal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, sucursal;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _Sucursal["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            sucursal = _context4.sent;
            res.json({
              data: sucursal
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
  return _getOneSucursal.apply(this, arguments);
}

function deleteSucursal(_x7, _x8) {
  return _deleteSucursal.apply(this, arguments);
}

function _deleteSucursal() {
  _deleteSucursal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return _Sucursal["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context5.sent;
            res.json({
              message: 'Sucursal deleted successfully',
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
  return _deleteSucursal.apply(this, arguments);
}

function updateSucursal(_x9, _x10) {
  return _updateSucursal.apply(this, arguments);
}

function _updateSucursal() {
  _updateSucursal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, nombre, descripcion, telefono, actividad, representante, departamentoid, direccion, fecharegistro, estado, empresaid, cant, sucursals;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, nombre = _req$body2.nombre, descripcion = _req$body2.descripcion, telefono = _req$body2.telefono, actividad = _req$body2.actividad, representante = _req$body2.representante, departamentoid = _req$body2.departamentoid, direccion = _req$body2.direccion, fecharegistro = _req$body2.fecharegistro, estado = _req$body2.estado, empresaid = _req$body2.empresaid;
            _context6.prev = 2;
            _context6.next = 5;
            return _Sucursal["default"].update({
              nombre: nombre,
              descripcion: descripcion,
              telefono: telefono,
              actividad: actividad,
              representante: representante,
              departamentoid: departamentoid,
              direccion: direccion,
              fecharegistro: fecharegistro,
              fechamodificacion: new Date(),
              estado: estado,
              empresaid: empresaid
            }, {
              where: {
                id: id
              }
            });

          case 5:
            cant = _context6.sent;
            _context6.next = 8;
            return _Sucursal["default"].findOne({
              where: {
                id: id
              }
            }, {
              include: _Empresa["default"]
            });

          case 8:
            sucursals = _context6.sent;
            return _context6.abrupt("return", res.json({
              message: 'Sucursal updated successfully',
              data: sucursals
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
  return _updateSucursal.apply(this, arguments);
}

function getSucursalByEmpresa(_x11, _x12) {
  return _getSucursalByEmpresa.apply(this, arguments);
}

function _getSucursalByEmpresa() {
  _getSucursalByEmpresa = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var empresaid, sucursal;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            empresaid = req.params.empresaid;
            _context7.next = 4;
            return _Sucursal["default"].findAll({
              attributes: ['id', 'nombre', 'descripcion', 'representante', 'departamentoid', 'direccion', 'telefono', 'actividad', 'usuarioregistro', 'fecharegistro', 'fechamodificacion', 'estado', 'empresaid'],
              where: {
                empresaid: empresaid,
                estado: 'ACT'
              },
              order: [['fechamodificacion', 'DESC']]
            });

          case 4:
            sucursal = _context7.sent;
            res.json({
              sucursal: sucursal
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
  return _getSucursalByEmpresa.apply(this, arguments);
}

function bajaSucursal(_x13, _x14) {
  return _bajaSucursal.apply(this, arguments);
}

function _bajaSucursal() {
  _bajaSucursal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
    var id, usuariomodificacion, updateRowCount, sucursals;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            id = req.params.id;
            usuariomodificacion = req.body.usuariomodificacion;
            _context8.prev = 2;
            _context8.next = 5;
            return _Sucursal["default"].update({
              usuariomodificacion: usuariomodificacion,
              fechamodificacion: new Date(),
              estado: "BAJ"
            }, {
              where: {
                id: id
              }
            });

          case 5:
            updateRowCount = _context8.sent;
            _context8.next = 8;
            return _Sucursal["default"].findOne({
              where: {
                id: id
              }
            } //,{ include: Sucursal } 
            );

          case 8:
            sucursals = _context8.sent;
            res.json({
              message: 'Sucursal baja successfully',
              count: sucursals
            });
            _context8.next = 16;
            break;

          case 12:
            _context8.prev = 12;
            _context8.t0 = _context8["catch"](2);
            console.log(_context8.t0);
            res.status(500).json({
              data: {
                estado: false,
                "error": _context8.t0.message
              }
            });

          case 16:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[2, 12]]);
  }));
  return _bajaSucursal.apply(this, arguments);
}