"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getVendedors = getVendedors;
exports.createVendedor = createVendedor;
exports.getOneVendedor = getOneVendedor;
exports.deleteVendedor = deleteVendedor;
exports.updateVendedor = updateVendedor;
exports.bajaVendedor = bajaVendedor;

var _Vendedor = _interopRequireDefault(require("../models/Vendedor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getVendedors(_x, _x2) {
  return _getVendedors.apply(this, arguments);
}

function _getVendedors() {
  _getVendedors = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var vendedors;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Vendedor["default"].findAll({
              where: {
                estado: 'ACT'
              }
            });

          case 3:
            vendedors = _context.sent;
            res.json({
              data: vendedors
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _getVendedors.apply(this, arguments);
}

function createVendedor(_x3, _x4) {
  return _createVendedor.apply(this, arguments);
}

function _createVendedor() {
  _createVendedor = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, nombre, contratranteid, sucursalid, departamentoid, comisionvendedor, comisionvendedor2, usuarioregistro, usuariomodificacion, _req$body$fecharegist, fecharegistro, fechamodificacion, estado, newVendedor;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, nombre = _req$body.nombre, contratranteid = _req$body.contratranteid, sucursalid = _req$body.sucursalid, departamentoid = _req$body.departamentoid, comisionvendedor = _req$body.comisionvendedor, comisionvendedor2 = _req$body.comisionvendedor2, usuarioregistro = _req$body.usuarioregistro, usuariomodificacion = _req$body.usuariomodificacion, _req$body$fecharegist = _req$body.fecharegistro, fecharegistro = _req$body$fecharegist === void 0 ? new Date() : _req$body$fecharegist, fechamodificacion = _req$body.fechamodificacion, estado = _req$body.estado;
            _context2.prev = 1;
            _context2.next = 4;
            return _Vendedor["default"].create({
              nombre: nombre,
              contratranteid: contratranteid,
              sucursalid: sucursalid,
              departamentoid: departamentoid,
              comisionvendedor: comisionvendedor,
              comisionvendedor2: comisionvendedor2,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: fecharegistro,
              fechamodificacion: fechamodificacion,
              estado: estado
            }, {
              fields: ['nombre', 'contratranteid', 'sucursalid', 'departamentoid', 'comisionvendedor', 'comisionvendedor2', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado']
            });

          case 4:
            newVendedor = _context2.sent;

            if (!newVendedor) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.json({
              message: 'Vendedor created successfully',
              data: newVendedor
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
  return _createVendedor.apply(this, arguments);
}

function getOneVendedor(_x5, _x6) {
  return _getOneVendedor.apply(this, arguments);
}

function _getOneVendedor() {
  _getOneVendedor = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, usuario;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _Vendedor["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            usuario = _context3.sent;
            res.json({
              data: usuario
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
  return _getOneVendedor.apply(this, arguments);
}

function deleteVendedor(_x7, _x8) {
  return _deleteVendedor.apply(this, arguments);
}

function _deleteVendedor() {
  _deleteVendedor = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _Vendedor["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context4.sent;
            res.json({
              message: 'Vendedor deleted successfully',
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
  return _deleteVendedor.apply(this, arguments);
}

function updateVendedor(_x9, _x10) {
  return _updateVendedor.apply(this, arguments);
}

function _updateVendedor() {
  _updateVendedor = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, _req$body2, nombre, contratranteid, sucursalid, departamentoid, comisionvendedor, comisionvendedor2, usuarioregistro, usuariomodificacion, fecharegistro, fechamodificacion, estado, updateRowCount, vendedors;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, nombre = _req$body2.nombre, contratranteid = _req$body2.contratranteid, sucursalid = _req$body2.sucursalid, departamentoid = _req$body2.departamentoid, comisionvendedor = _req$body2.comisionvendedor, comisionvendedor2 = _req$body2.comisionvendedor2, usuarioregistro = _req$body2.usuarioregistro, usuariomodificacion = _req$body2.usuariomodificacion, fecharegistro = _req$body2.fecharegistro, fechamodificacion = _req$body2.fechamodificacion, estado = _req$body2.estado;
            _context5.prev = 2;
            _context5.next = 5;
            return _Vendedor["default"].update({
              nombre: nombre,
              contratranteid: contratranteid,
              sucursalid: sucursalid,
              departamentoid: departamentoid,
              comisionvendedor: comisionvendedor,
              comisionvendedor2: comisionvendedor2,
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
            return _Vendedor["default"].findOne({
              where: {
                id: id
              }
            });

          case 8:
            vendedors = _context5.sent;
            res.json({
              message: 'Vendedor update successfully',
              count: vendedors
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
  return _updateVendedor.apply(this, arguments);
}

function bajaVendedor(_x11, _x12) {
  return _bajaVendedor.apply(this, arguments);
}

function _bajaVendedor() {
  _bajaVendedor = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, usuariomodificacion, updateRowCount, vendedors;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            console.log("bajaVendedor");
            usuariomodificacion = req.body.usuariomodificacion;
            _context6.prev = 3;
            _context6.next = 6;
            return _Vendedor["default"].update({
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
            updateRowCount = _context6.sent;
            _context6.next = 9;
            return _Vendedor["default"].findOne({
              where: {
                id: id
              }
            });

          case 9:
            vendedors = _context6.sent;
            res.json({
              message: 'Vendedor baja successfully',
              count: vendedors
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
  return _bajaVendedor.apply(this, arguments);
}