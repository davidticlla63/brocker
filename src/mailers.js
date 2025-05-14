//Requerimos el paquete
var nodemailer = require('nodemailer');

//Creamos el objeto de transporte
export const transporter = nodemailer.createTransport({
    service: 'gmsantacruz.gob.bo',//dominio
    host: 'smtp-mail.outlook.com',//servicio
    secureConnection: false, // use SSL
    port: 587, // port for secure SMTP
    //timeaut:10000,
    auth: {
        user: 'gamsc@gmsantacruz.gob.bo',
        pass: 'mt9Nh28yN2_tBTC'
    }
});





/* 
export const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false, // true for port 465, false for 587
    auth: {
      user: 'gamsc@gmsantacruz.gob.bo',
      pass: 'mt9Nh28yN2_tBTC', // asegúrate de que sea válida o una contraseña de aplicación
    },
    tls: {
      ciphers: 'SSLv3'
    }
  });
   */

  transporter.verify()
  .then(() => {
    console.log('Ready for send emails.');
  })
  .catch((error) => {
    console.error('Error verificando el transporte de correo:', error.message);
    // No detenemos el servidor, solo informamos el error
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
