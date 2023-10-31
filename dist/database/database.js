"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
var _config = _interopRequireDefault(require("../config"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var sequelize = new _sequelize["default"](_config["default"].NODE_ENV == 'production' ? 'broker_db' : 'broker_db',
//produccion  'broker_test_db'
//'broker_test_db',//testing
_config["default"].NODE_ENV == 'production' ? 'broker' : 'postgres', _config["default"].NODE_ENV == 'production' ? 'broker' : 'admin', {
  host: 'localhost',
  //nueva ruta
  dialect: 'postgres',
  port: 5432,
  dialectOptions: {
    useUTC: true // -->Add this line. for reading from database
  },

  timezone: '-04:00',
  /// -->Add this line. for writing to database 
  pool: {
    max: 20,
    min: 0,
    require: 30000,
    idle: 60000,
    acquire: 10000,
    evict: 60000,
    handleDisconnects: true
  },
  logging: false
  /* logging: (message) => {
      // Personaliza cómo manejar los mensajes de registro aquí
      console.log(message);
  } */
}
/*  ,{
     isolationLevel: Sequelize.Transaction.ISOLATION_LEVELS.SERIALIZABLE
   } */);

/* export async function conectar() {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
} */
exports.sequelize = sequelize;