import app from "./app";
import "@babel/polyfill";


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




async function main() {
    //conectar();
    await app.listen(3000);
    console.log('Server on port 3000');
/*     let a=1;
    let result = a==null?'true':'false';
    console.log(result); */
}


main();