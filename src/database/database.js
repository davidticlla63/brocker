import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'broker_db',
    'postgres',
    'admin',
    {
        host: 'localhost',
        dialect: 'postgres', 
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
);