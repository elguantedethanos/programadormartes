const express = require('express');
const router = express.Router();
//var usuariosModel = require('./../../models/usuariosModel');

// Ruta para cerrar sesión (logout)
router.get('/logout', function (req, res, next) {
  req.session.destroy();
  res.render('admin/login', {
    layout: 'admin/layout'  
  });
});

// Ruta para procesar el inicio de sesión (login)
router.post('/', async (req, res, next) => {
  try {
    var usuario = req.body.usuario;
    var password = req.body.password;

    var data = await usuariosModel.getUserByusernameAndPassword(usuario, password);
    
    if(data != undefined) {
      req.session.id_usuario = data.id;
      req.session.nombre = data.usuario;
      res.redirect('/admin/novedades');
    } else {
      res.render('admin/login',{
        layout: 'admin/layout',
        error: true
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
