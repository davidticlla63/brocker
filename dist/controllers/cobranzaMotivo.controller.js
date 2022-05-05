"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bajaCobranzaMotivo = bajaCobranzaMotivo;
exports.createCobranzaMotivo = createCobranzaMotivo;
exports.deleteCobranzaMotivo = deleteCobranzaMotivo;
exports.getCobranzaMotivos = getCobranzaMotivos;
exports.getCobranzaMotivosPorPlanPago = getCobranzaMotivosPorPlanPago;
exports.getOneCobranzaMotivo = getOneCobranzaMotivo;
exports.updateCobranzaMotivo = updateCobranzaMotivo;

var _CobranzaMotivo = _interopRequireDefault(require("../models/CobranzaMotivo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getCobranzaMotivos(_x, _x2) {
  return _getCobranzaMotivos.apply(this, arguments);
}

function _getCobranzaMotivos() {
  _getCobranzaMotivos = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var cobranzaMotivos;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _CobranzaMotivo["default"].findAll({
              where: {
                estado: 'ACT'
              }
            });

          case 3:
            cobranzaMotivos = _context.sent;
            res.json({
              data: cobranzaMotivos
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
  return _getCobranzaMotivos.apply(this, arguments);
}

function createCobranzaMotivo(_x3, _x4) {
  return _createCobranzaMotivo.apply(this, arguments);
}

function _createCobranzaMotivo() {
  _createCobranzaMotivo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, nombre, descripcion, usuarioregistro, usuariomodificacion, estado, newCobranzaMotivo;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, nombre = _req$body.nombre, descripcion = _req$body.descripcion, usuarioregistro = _req$body.usuarioregistro, usuariomodificacion = _req$body.usuariomodificacion, estado = _req$body.estado;
            _context2.prev = 1;
            _context2.next = 4;
            return _CobranzaMotivo["default"].create({
              nombre: nombre,
              descripcion: descripcion,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: new Date(),
              fechamodificacion: new Date(),
              estado: estado
            }, {
              fields: ['nombre', 'descripcion', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado']
            });

          case 4:
            newCobranzaMotivo = _context2.sent;

            if (!newCobranzaMotivo) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.json({
              message: 'CobranzaMotivo created successfully',
              data: newCobranzaMotivo
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
  return _createCobranzaMotivo.apply(this, arguments);
}

function getOneCobranzaMotivo(_x5, _x6) {
  return _getOneCobranzaMotivo.apply(this, arguments);
}

function _getOneCobranzaMotivo() {
  _getOneCobranzaMotivo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, usuario;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _CobranzaMotivo["default"].findOne({
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
  return _getOneCobranzaMotivo.apply(this, arguments);
}

function deleteCobranzaMotivo(_x7, _x8) {
  return _deleteCobranzaMotivo.apply(this, arguments);
}

function _deleteCobranzaMotivo() {
  _deleteCobranzaMotivo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _CobranzaMotivo["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context4.sent;
            res.json({
              message: 'CobranzaMotivo deleted successfully',
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
  return _deleteCobranzaMotivo.apply(this, arguments);
}

function updateCobranzaMotivo(_x9, _x10) {
  return _updateCobranzaMotivo.apply(this, arguments);
}

function _updateCobranzaMotivo() {
  _updateCobranzaMotivo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, _req$body2, nombre, descripcion, usuarioregistro, usuariomodificacion, estado, updateRowCount, cobranzaMotivos;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, nombre = _req$body2.nombre, descripcion = _req$body2.descripcion, usuarioregistro = _req$body2.usuarioregistro, usuariomodificacion = _req$body2.usuariomodificacion, estado = _req$body2.estado;
            _context5.prev = 2;
            _context5.next = 5;
            return _CobranzaMotivo["default"].update({
              nombre: nombre,
              descripcion: descripcion,
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
            return _CobranzaMotivo["default"].findOne({
              where: {
                id: id
              }
            });

          case 8:
            cobranzaMotivos = _context5.sent;
            res.json({
              message: 'CobranzaMotivo update successfully',
              count: cobranzaMotivos
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
  return _updateCobranzaMotivo.apply(this, arguments);
}

function bajaCobranzaMotivo(_x11, _x12) {
  return _bajaCobranzaMotivo.apply(this, arguments);
}

function _bajaCobranzaMotivo() {
  _bajaCobranzaMotivo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, usuariomodificacion, updateRowCount, cobranzaMotivos;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            console.log("bajaCobranzaMotivo");
            usuariomodificacion = req.body.usuariomodificacion;
            _context6.prev = 3;
            _context6.next = 6;
            return _CobranzaMotivo["default"].update({
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
            return _CobranzaMotivo["default"].findOne({
              where: {
                id: id
              }
            });

          case 9:
            cobranzaMotivos = _context6.sent;
            res.json({
              message: 'CobranzaMotivo baja successfully',
              count: cobranzaMotivos
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
  return _bajaCobranzaMotivo.apply(this, arguments);
}

function getCobranzaMotivosPorPlanPago(_x13, _x14) {
  return _getCobranzaMotivosPorPlanPago.apply(this, arguments);
}

function _getCobranzaMotivosPorPlanPago() {
  _getCobranzaMotivosPorPlanPago = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var planpagoid, siniestros;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            planpagoid = req.params.planpagoid;
            _context7.prev = 1;
            _context7.next = 4;
            return sequelize.query("select planpagoid, string_agg(to_char(fecharegistro, 'DD/MM/YYYY') || ' ' || descripcion, ', ' order by descripcion) \n            from cobranza_motivo \n            where estado='ACT' AND planpagoid='" + planpagoid + "' \n             group by planpagoid  ", {
              type: QueryTypes.SELECT
            });

          case 4:
            siniestros = _context7.sent;
            //console.log(JSON.stringify(usuarios[0], null, 2));
            res.json({
              siniestros: siniestros
            });
            _context7.next = 12;
            break;

          case 8:
            _context7.prev = 8;
            _context7.t0 = _context7["catch"](1);
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
    }, _callee7, null, [[1, 8]]);
  }));
  return _getCobranzaMotivosPorPlanPago.apply(this, arguments);
}