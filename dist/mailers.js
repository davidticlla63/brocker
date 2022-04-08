"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transporter = void 0;

//Requerimos el paquete
var nodemailer = require('nodemailer'); //Creamos el objeto de transporte


var transporter = nodemailer.createTransport({
  service: 'gmsantacruz.gob.bo',
  //dominio
  host: 'smtp-mail.outlook.com',
  //servicio
  secureConnection: false,
  // use SSL
  port: 587,
  // port for secure SMTP
  //timeaut:10000,
  auth: {
    user: 'gamsc@gmsantacruz.gob.bo',
    pass: 'D3s4rrOll0'
  }
});
/* export const transporter = nodemailer.createTransport({
    //service: 'patria-sa.com',//dominio
     //   host: 'smtp-mail.outlook.com',//servicio
    host: 'smtp.gmail.com',//servicio
    secureConnection: false, // use SSL
    //port: 587, // port for secure SMTP
   port: 465, // port for secure SMTP
    //timeaut:10000,
    secure:true,
    auth: {
        user: 'sac@patria-sa.com',
        pass: 'patria$AC2022'
    }
});
 */

/* export const transporter = nodemailer.createTransport({
    service: 'gmail',//dominio
     //   host: 'smtp-mail.outlook.com',//servicio
   // host: 'smtp.gmail.com',//servicio
    secureConnection: false, // use SSL
    //port: 587, // port for secure SMTP
   port: 465, // port for secure SMTP
    //timeaut:10000,
    secure:true,
    auth: {
        user: 'sac@patria-sa.com',
        pass: 'patria$AC2022'
    }
});
 */

exports.transporter = transporter;
transporter.verify().then(function () {
  console.log('Ready for send emails.');
});