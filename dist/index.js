"use strict";

var _app = _interopRequireDefault(require("./app"));

require("@babel/polyfill");

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//import {transporter} from './mailers'
//const db=require("./models")
var Sequelize = require('sequelize');

var db = new Sequelize('broker_db', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
  //operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: true
});

function conectar() {
  return _conectar.apply(this, arguments);
}

function _conectar() {
  _conectar = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('conectar');

            try {
              db.authenticate().then(function () {
                console.log('Connection has been established successfully.');
              }, function (error) {
                console.error('Unable to connect to the database:', error);
              })["catch"](function (err) {
                console.error('Unable to connect to the database:', err);
              });
            } catch (error) {
              console.error('error:', error);
            }

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _conectar.apply(this, arguments);
}

var mensaje = "Hola desde nodejs...";
var mailOptions = {
  from: 'gamsc@gmsantacruz.gob.bo',
  to: 'dticlla@gmsantacruz.gob.bo',
  subject: 'Asunto Del Correo',
  text: mensaje
  /*  html:`<h1>Esta es una etiqueta H1. Utilízala en el título.</h1>
   <h2>Esta es una etiqueta H2. Utilízala en los encabezados de secciones.</h2>
   <h3>Esta es una etiqueta H3. Utilízala en sub-secciones.</h3>
   <h4>Esta es una etiqueta H4. No se usan muy a menudo.</h4>
   <h5>Esta es una etiqueta H5.</h5>
   <h6>Esta es una etiqueta H6.</h6>` */

}; //envio de correos

/* transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log('mensaje: '+error);
    } else {
        console.log('Email enviado: ' + info.response);
    }
    transporter.close(); 
}); */

function main() {
  return _main.apply(this, arguments);
}

function _main() {
  _main = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var PORT;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            //conectar();
            console.log("NODE_ENV=".concat(_config["default"].NODE_ENV));
            console.log("PORT=".concat(_config["default"].PORT));
            PORT = _config["default"].PORT;
            _context2.next = 5;
            return _app["default"].listen(PORT);

          case 5:
            console.log('Server on port : ' + PORT);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _main.apply(this, arguments);
}

main();