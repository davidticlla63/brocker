import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'broker_db',
    'admin',
    'admin',
    {
        host: 'localhost',
        port:'5433',
        dialect: 'postgres', 
        pool: {
            max: 5, 
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
);