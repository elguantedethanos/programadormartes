var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var novedadesModel = require('../models/novedadesModel');
var novedadesModel = require('../models/novedadesModel');



router.get('/', async function(req, res, next){
  var novedades = await novedadesModel.getNovedades();
  
  res.render('index',{
    novedades
  });
});

router.post('/', async (req, res, next) => {
  
  console.log(req.body);

  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var telefono = req.body.tel;
  var mensaje = req.body.comentarios;

  var obj = {
    to: 'agustin376@yahoo.com.ar',
    subject: 'Contacto desde la web',
    html: nombre + " " + apellido + " se contactó a través y quiere más información a este correo: " + email + ". <br> Además, hizo el siguiente comentario: " + mensaje + ".<br> Su teléfono es " + telefono
  };
  // Configuración del transporte SMTP
 
  var transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});
var info = await transporter.sendMail(obj);
res.render('index', { 
  message:'Mensaje enviado correctamente',
});


});

var novedadesModel = require('../models/novedadesModel');
/*GET home page.*/
router.get('/', async function(req, res, next){
  novedades = await novedadesModel.getNovedades();
  novedades = novedades.splice(0,5);
  res.render('index',{
    novedades
  });
}),

module.exports = router;