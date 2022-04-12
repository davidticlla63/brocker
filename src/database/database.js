import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    //'broker_db', //produccion
    'broker_test_db',//testing
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