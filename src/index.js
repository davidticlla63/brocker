import app from "./app";
import "@babel/polyfill"; 
//import {transporter} from './mailers'


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




var mensaje = "Hola desde nodejs...";

var mailOptions = {
    from: 'gamsc@gmsantacruz.gob.bo',
    to: 'dticlla@gmsantacruz.gob.bo',
    subject: 'Asunto Del Correo',
    text: mensaje,
   /*  html:`<h1>Esta es una etiqueta H1. Utilízala en el título.</h1>
    <h2>Esta es una etiqueta H2. Utilízala en los encabezados de secciones.</h2>
    <h3>Esta es una etiqueta H3. Utilízala en sub-secciones.</h3>
    <h4>Esta es una etiqueta H4. No se usan muy a menudo.</h4>
    <h5>Esta es una etiqueta H5.</h5>
    <h6>Esta es una etiqueta H6.</h6>` */
};
//envio de correos
/* transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log('mensaje: '+error);
    } else {
        console.log('Email enviado: ' + info.response);
    }
    transporter.close(); 
}); */



async function main() {
    //conectar();

    const PORT = 3000
    await app.listen(PORT);
    console.log('Server on port : ' + PORT);
}


main();