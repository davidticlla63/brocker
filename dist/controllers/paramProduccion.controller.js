"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParamProduccionBySucursal = ParamProduccionBySucursal;
exports.bajaParamProduccion = bajaParamProduccion;
exports.createParamProduccion = createParamProduccion;
exports.deleteParamProduccion = deleteParamProduccion;
exports.getOneParamProduccion = getOneParamProduccion;
exports.getParamProduccions = getParamProduccions;
exports.updateParamProduccion = updateParamProduccion;

var _Empresa = _interopRequireDefault(require("../models/Empresa"));

var _ParamProduccion = _interopRequireDefault(require("../models/ParamProduccion"));

var _Personal = _interopRequireDefault(require("../models/Personal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getParamProduccions(_x, _x2) {
  return _getParamProduccions.apply(this, arguments);
}

function _getParamProduccions() {
  _getParamProduccions = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var ParamProduccionss;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _ParamProduccion["default"].findAll({
              where: {
                estado: 'ACT'
              }
            });

          case 3:
            ParamProduccionss = _context.sent;
            res.json({
              data: ParamProduccionss
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
  return _getParamProduccions.apply(this, arguments);
}

function createParamProduccion(_x3, _x4) {
  return _createParamProduccion.apply(this, arguments);
}

function _createParamProduccion() {
  _createParamProduccion = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, diaproduccion, sucursalid, usuarioregistro, usuariomodificacion, usuariobaja, _req$body$fecharegist, fecharegistro, _req$body$fechamodifi, fechamodificacion, fechabaja, estado, newParamProduccion;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, diaproduccion = _req$body.diaproduccion, sucursalid = _req$body.sucursalid, usuarioregistro = _req$body.usuarioregistro, usuariomodificacion = _req$body.usuariomodificacion, usuariobaja = _req$body.usuariobaja, _req$body$fecharegist = _req$body.fecharegistro, fecharegistro = _req$body$fecharegist === void 0 ? new Date() : _req$body$fecharegist, _req$body$fechamodifi = _req$body.fechamodificacion, fechamodificacion = _req$body$fechamodifi === void 0 ? new Date() : _req$body$fechamodifi, fechabaja = _req$body.fechabaja, estado = _req$body.estado;
            _context2.prev = 1;
            _context2.next = 4;
            return _ParamProduccion["default"].create({
              diaproduccion: diaproduccion,
              sucursalid: sucursalid,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              usuariobaja: usuariobaja,
              fecharegistro: fecharegistro,
              fechamodificacion: fechamodificacion,
              fechabaja: fechabaja,
              estado: estado
            }, {
              fields: ['diaproduccion', 'sucursalid', 'usuarioregistro', 'usuariomodificacion', 'usuariobaja', 'fecharegistro', 'fechamodificacion', 'fechabaja', 'estado']
            });

          case 4:
            newParamProduccion = _context2.sent;

            if (!newParamProduccion) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.json({
              message: 'ParamProduccion created successfully',
              data: newParamProduccion
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
  return _createParamProduccion.apply(this, arguments);
}

function getOneParamProduccion(_x5, _x6) {
  return _getOneParamProduccion.apply(this, arguments);
}

function _getOneParamProduccion() {
  _getOneParamProduccion = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, ParamProduccions;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _ParamProduccion["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            ParamProduccions = _context3.sent;
            res.json({
              data: ParamProduccions
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
  return _getOneParamProduccion.apply(this, arguments);
}

function deleteParamProduccion(_x7, _x8) {
  return _deleteParamProduccion.apply(this, arguments);
}

function _deleteParamProduccion() {
  _deleteParamProduccion = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _ParamProduccion["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context4.sent;
            res.json({
              data: {
                message: 'ParamProduccion deleted successfully',
                count: deleteRowCount
              }
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
  return _deleteParamProduccion.apply(this, arguments);
}

function updateParamProduccion(_x9, _x10) {
  return _updateParamProduccion.apply(this, arguments);
}

function _updateParamProduccion() {
  _updateParamProduccion = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, _req$body2, diaproduccion, sucursalid, usuarioregistro, usuariomodificacion, usuariobaja, fecharegistro, fechamodificacion, fechabaja, estado, updateRowCount, ParamProduccions;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, diaproduccion = _req$body2.diaproduccion, sucursalid = _req$body2.sucursalid, usuarioregistro = _req$body2.usuarioregistro, usuariomodificacion = _req$body2.usuariomodificacion, usuariobaja = _req$body2.usuariobaja, fecharegistro = _req$body2.fecharegistro, fechamodificacion = _req$body2.fechamodificacion, fechabaja = _req$body2.fechabaja, estado = _req$body2.estado;
            _context5.prev = 2;
            _context5.next = 5;
            return _ParamProduccion["default"].update({
              diaproduccion: diaproduccion,
              sucursalid: sucursalid,
              usuariobaja: usuariobaja,
              empresaid: empresaid,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: fecharegistro,
              fechamodificacion: new Date(),
              fechabaja: fechabaja,
              estado: estado
            }, {
              where: {
                id: id
              }
            });

          case 5:
            updateRowCount = _context5.sent;
            _context5.next = 8;
            return _ParamProduccion["default"].findOne({
              where: {
                id: id
              }
            });

          case 8:
            ParamProduccions = _context5.sent;
            res.json({
              data: {
                message: 'ParamProduccion update successfully',
                count: ParamProduccions
              }
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
  return _updateParamProduccion.apply(this, arguments);
}

function bajaParamProduccion(_x11, _x12) {
  return _bajaParamProduccion.apply(this, arguments);
}

function _bajaParamProduccion() {
  _bajaParamProduccion = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, ParamProduccionsmodificacion, updateRowCount, ParamProduccions;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            console.log("bajaParamProduccion");
            ParamProduccionsmodificacion = req.body.ParamProduccionsmodificacion;
            _context6.prev = 3;
            _context6.next = 6;
            return _ParamProduccion["default"].update({
              ParamProduccionsmodificacion: ParamProduccionsmodificacion,

              /*  fechamodificacion:moment().format(), */
              fechamodificacion: new Date(),
              estado: 'BAJ'
            }, {
              where: {
                id: id
              }
            });

          case 6:
            updateRowCount = _context6.sent;
            _context6.next = 9;
            return _ParamProduccion["default"].findOne({
              where: {
                id: id
              }
            });

          case 9:
            ParamProduccions = _context6.sent;
            res.json({
              data: {
                message: 'ParamProduccion baja successfully',
                count: ParamProduccions
              }
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
  return _bajaParamProduccion.apply(this, arguments);
}

function ParamProduccionBySucursal(_x13, _x14) {
  return _ParamProduccionBySucursal.apply(this, arguments);
}

function _ParamProduccionBySucursal() {
  _ParamProduccionBySucursal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var sucursalid, ParamProduccions;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            sucursalid = req.params.sucursalid;
            _context7.next = 4;
            return _ParamProduccion["default"].findAll({
              /*    attributes: ['','nombre', 'descripcion', 'empresaid', 'ParamProduccionsregistro', 'ParamProduccionsmodificacion', 'fecharegistro',
                 'fechamodificacion', 'estado'], */
              where: {
                sucursalid: sucursalid,
                estado: 'ACT'
              }
            });

          case 4:
            ParamProduccions = _context7.sent;
            res.json({
              data: {
                ParamProduccions: ParamProduccions
              }
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
  return _ParamProduccionBySucursal.apply(this, arguments);
}