"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sequelize = new _sequelize["default"]('broker_db', //'broker_test_db',//testing
'postgres', 'admin', {
  host: '3.99.76.226',
  //nueva ruta
  dialect: 'postgres',
  port: 5432,
  dialectOptions: {
    useUTC: true // -->Add this line. for reading from database

  },
  timezone: '-04:00',
  /// -->Add this line. for writing to database 
  pool: {
    max: 5,
    min: 0,
    require: 30000,
    idle: 10000
  },
  logging: false
}
/*  ,{
     isolationLevel: Sequelize.Transaction.ISOLATION_LEVELS.SERIALIZABLE
   } */
);
exports.sequelize = sequelize;