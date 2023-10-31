import app from "./app";
import "@babel/polyfill"; 
import config from './config'
//import {transporter} from './mailers'


//const db=require("./models")




/* const Sequelize = require('sequelize');

import { Client } from 'pg'

const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'admin',
}) */
import { sequelize } from "./database/database";
const db = sequelize


async function conectar() {
    console.log('conectar');
    try {
        db
            .authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            },(error)=>{
                console.error('Unable to connect to the database:', error);
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });
    } catch (error) {
        console.error('error:', error);
    }
}




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

 
    conectar();
    console.log(`NODE_ENV=${config.NODE_ENV}`);
    console.log(`PORT=${config.PORT}`);

    

    const PORT = config.PORT;
    await app.listen(PORT);

    console.log('Server on port : ' + PORT);
} 


main();