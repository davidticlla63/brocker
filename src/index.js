import app from "./app";
import "@babel/polyfill";


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

async function main() {
    //conectar();
    await app.listen(3000);
    console.log('Server on port 3000');
}


main();