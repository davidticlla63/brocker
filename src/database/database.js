import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'broker_db',
    'postgres',
    'admin',
    {
       /*  host: 'ec2-3-133-91-105.us-east-2.compute.amazonaws.com', */
       host:'ec2-3-134-244-83.us-east-2.compute.amazonaws.com',//nueva ruta
        dialect: 'postgres',
        port:5432, 
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