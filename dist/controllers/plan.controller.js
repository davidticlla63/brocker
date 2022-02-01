"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPlans = getPlans;
exports.getPlansPorCompania = getPlansPorCompania;
exports.createPlan = createPlan;
exports.getOnePlan = getOnePlan;
exports.deletePlan = deletePlan;
exports.updatePlan = updatePlan;
exports.bajaPlan = bajaPlan;

var _Plan = _interopRequireDefault(require("../models/Plan"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require('sequelize'),
    QueryTypes = _require.QueryTypes;

/* export async function getPlans(req, res) {
    try {
        const plans = await Plan.findAll({ where: { estado: 'ACT' } });
        res.json({
            data: plans
        });
    } catch (e) {
        console.log(e);
    }
} */
function getPlans(_x, _x2) {
  return _getPlans.apply(this, arguments);
}

function _getPlans() {
  _getPlans = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var string, plans;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            string = "select p.*,c.nombre as companiaSeguro" + " from plan p " + " inner join  compania_seguro c on c.id= p.companiaseguroid" + " where p.estado='ACT' order by p.fechamodificacion desc "; //console.log(string)

            _context.next = 4;
            return _database.sequelize.query(string, {
              type: QueryTypes.SELECT
            });

          case 4:
            plans = _context.sent;
            res.json({
              data: plans
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
  return _getPlans.apply(this, arguments);
}

function getPlansPorCompania(_x3, _x4) {
  return _getPlansPorCompania.apply(this, arguments);
}
/* export async function getPlansPorCompania(req, res) {
    const { companiaseguroid } = req.params;
    try {
        const plans = await Plan.findAll({ where: {companiaseguroid, estado: 'ACT' } });
        res.json({
            data: plans
        });
    } catch (e) {
        console.log(e);
    }
} */


function _getPlansPorCompania() {
  _getPlansPorCompania = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var companiaseguroid, string, plans;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            companiaseguroid = req.params.companiaseguroid;
            string = "select p.*,c.nombre as companiaSeguro" + " from plan p " + " inner join  compania_seguro c on c.id= p.companiaseguroid" + " where c.id='" + companiaseguroid + "'  and p.estado='ACT' order by p.fechamodificacion desc "; //console.log(string)

            _context2.next = 5;
            return _database.sequelize.query(string, {
              type: QueryTypes.SELECT
            });

          case 5:
            plans = _context2.sent;
            res.json({
              data: plans
            });
            _context2.next = 13;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
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
    }, _callee2, null, [[0, 9]]);
  }));
  return _getPlansPorCompania.apply(this, arguments);
}

function createPlan(_x5, _x6) {
  return _createPlan.apply(this, arguments);
}

function _createPlan() {
  _createPlan = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, nombre, descripcion, usuarioregistro, usuariomodificacion, _req$body$fecharegist, fecharegistro, _req$body$fechamodifi, fechamodificacion, estado, companiaseguroid, newPlan;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, nombre = _req$body.nombre, descripcion = _req$body.descripcion, usuarioregistro = _req$body.usuarioregistro, usuariomodificacion = _req$body.usuariomodificacion, _req$body$fecharegist = _req$body.fecharegistro, fecharegistro = _req$body$fecharegist === void 0 ? new Date() : _req$body$fecharegist, _req$body$fechamodifi = _req$body.fechamodificacion, fechamodificacion = _req$body$fechamodifi === void 0 ? new Date() : _req$body$fechamodifi, estado = _req$body.estado, companiaseguroid = _req$body.companiaseguroid;
            _context3.prev = 1;
            _context3.next = 4;
            return _Plan["default"].create({
              nombre: nombre,
              descripcion: descripcion,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: fecharegistro,
              fechamodificacion: fechamodificacion,
              estado: estado,
              companiaseguroid: companiaseguroid
            }, {
              fields: ['nombre', 'descripcion', 'usuarioregistro', 'usuariomodificacion', 'fecharegistro', 'fechamodificacion', 'estado', 'companiaseguroid']
            });

          case 4:
            newPlan = _context3.sent;

            if (!newPlan) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.json({
              message: 'Plan created successfully',
              data: newPlan
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
  return _createPlan.apply(this, arguments);
}

function getOnePlan(_x7, _x8) {
  return _getOnePlan.apply(this, arguments);
}

function _getOnePlan() {
  _getOnePlan = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, usuario;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _Plan["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            usuario = _context4.sent;
            res.json({
              data: usuario
            });
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 8]]);
  }));
  return _getOnePlan.apply(this, arguments);
}

function deletePlan(_x9, _x10) {
  return _deletePlan.apply(this, arguments);
}

function _deletePlan() {
  _deletePlan = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return _Plan["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context5.sent;
            res.json({
              message: 'Plan deleted successfully',
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
  return _deletePlan.apply(this, arguments);
}

function updatePlan(_x11, _x12) {
  return _updatePlan.apply(this, arguments);
}

function _updatePlan() {
  _updatePlan = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, nombre, descripcion, usuarioregistro, usuariomodificacion, fecharegistro, fechamodificacion, estado, companiaseguroid, updateRowCount, plans;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, nombre = _req$body2.nombre, descripcion = _req$body2.descripcion, usuarioregistro = _req$body2.usuarioregistro, usuariomodificacion = _req$body2.usuariomodificacion, fecharegistro = _req$body2.fecharegistro, fechamodificacion = _req$body2.fechamodificacion, estado = _req$body2.estado, companiaseguroid = _req$body2.companiaseguroid;
            _context6.prev = 2;
            _context6.next = 5;
            return _Plan["default"].update({
              nombre: nombre,
              descripcion: descripcion,
              usuarioregistro: usuarioregistro,
              usuariomodificacion: usuariomodificacion,
              fecharegistro: fecharegistro,
              fechamodificacion: fechamodificacion,
              estado: estado,
              companiaseguroid: companiaseguroid
            }, {
              where: {
                id: id
              }
            });

          case 5:
            updateRowCount = _context6.sent;
            _context6.next = 8;
            return _Plan["default"].findOne({
              where: {
                id: id
              }
            });

          case 8:
            plans = _context6.sent;
            res.json({
              message: 'Plan update successfully',
              count: plans
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
  return _updatePlan.apply(this, arguments);
}

function bajaPlan(_x13, _x14) {
  return _bajaPlan.apply(this, arguments);
}

function _bajaPlan() {
  _bajaPlan = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var id, usuariomodificacion, updateRowCount, plans;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id = req.params.id;
            console.log("bajaPlan");
            usuariomodificacion = req.body.usuariomodificacion;
            _context7.prev = 3;
            _context7.next = 6;
            return _Plan["default"].update({
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
            return _Plan["default"].findOne({
              where: {
                id: id
              }
            });

          case 9:
            plans = _context7.sent;
            res.json({
              message: 'Plan baja successfully',
              count: plans
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
  return _bajaPlan.apply(this, arguments);
}