import Sequelize from 'sequelize';
import config from '../config'

export const sequelize = new Sequelize(
    config.NODE_ENV=='production'?'broker_db':'broker_test_db', //produccion  'broker_test_db'
    //'broker_test_db',//testing
    'postgres',   
    'admin',
    {
        host: '3.99.76.226',//nueva ruta
        dialect: 'postgres',
        port: 5432,
        dialectOptions: {
            useUTC: true, // -->Add this line. for reading from database
        },
        timezone: '-04:00',  /// -->Add this line. for writing to database 
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
    }
   /*  ,{
        isolationLevel: Sequelize.Transaction.ISOLATION_LEVELS.SERIALIZABLE
      } */
);