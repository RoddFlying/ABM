const {validationResult} = require ('express-validator');
let path = require('path');

const bcryptjs = require ('bcryptjs');
const fs  = require("fs");


//API USUARIO

list: (req, res) => {
    db.user.findAll()
    .then(function(usuarios){
  
        let listaUsuarios = []
  
        for (usuario of usuarios){
            let aux = {
                nombre: usuario.name,
                apellido: usuario.surname,
                dni: usuario.dni,
                email: usuario.email,
                admin: usuario.role_id,
                telephone: usuario.telephone,
            }
            listaUsuarios.push(aux);
        }
        res.json({descripcion: "Lista de usuarios",
        codigo:200,
        users: listaUsuarios,
        count: listaUsuarios.length
    
      })}) 
  }

//module.exports = userController;
