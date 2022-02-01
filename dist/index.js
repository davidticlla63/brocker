"use strict";

var _app = _interopRequireDefault(require("./app"));

require("@babel/polyfill");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//const db=require("./models")

/* const Sequelize = require('sequelize');
const db = new Sequelize('broker_db', 'postgres', 'admin', {
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
    logging: false
});

async function conectar() {
    try {
        db
            .authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });
    } catch (error) {
        console.error('error:', error);
    }
} */
//var rdlc = require('node-rdlc/index')

/* rdlc ({ 

	report: './test.rdl', 

	parameters: {
		param1: 1,
		param2: 2,
		param3: 'Hello World!'
	},

	data: {

		DataSet1: [
			{ name: 'Barry Allen', id: 1 },
			{ name: 'Oliver Queen', id: 2 },
			{ name: 'Clark Kent', id: 3 }
		]

	}

}, function (err, result) {
	if (!!err) throw err;
	var fs = require('fs')
	fs.writeFileSync('test.pdf', result)
})
 */
function main() {
  return _main.apply(this, arguments);
}

function _main() {
  _main = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var PORT;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //conectar();
            PORT = 3000;
            _context.next = 3;
            return _app["default"].listen(PORT);

          case 3:
            console.log('Server on port : ' + PORT);
            /*     let a=1;
                let result = a==null?'true':'false';
                console.log(result); */

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _main.apply(this, arguments);
}

main();