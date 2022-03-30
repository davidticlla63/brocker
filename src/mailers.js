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
        pass: 'D3s4rrOll0'
    }
});


transporter.verify().then(()=>{
    console.log('Ready for send emails.');
});