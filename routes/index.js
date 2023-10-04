var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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
  host: 'sandbox.smtp.mailtrap.io',
  port: 2525,
  secure: true,
  auth: {
    method: 'LOGIN',
    user: '9b327f72ebfe25',
    pass: '749d1788293014'
  }
});
});
module.exports = router;