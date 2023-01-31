const { validationResult } = require('express-validator');
const { privateDecrypt } = require('crypto');

const fs  = require("fs");
const path = require("path");

const db = require('../database/models');

const userEditController = {
    index: async (req,res) => {
        await db.users
          .findAll({ include: [{ association: "categoria_producto" }] })
          .then((products) => {
            let productsList = [];
            for (products of products) {
              productsList.push(products);
            }
            res.render("products/products", {
              ps: productsList,
              toThousand: toThousand,
            });
          });
          //REVISAR ESTA API
  },
    //crear el usuario

    create: (req, res) =>{
    res.render('user/createUser');

  },

    //guardar un usuario
    store: async (req,res)=>{
      
    let usuario = await db.users.create({
        role_id : req.body.id,
        name : req.body.name,
        surname: req.body.apellido,
        dni: req.body.dni,
        email: req.body.email,
        password: bcryptjs.hashSync(req.body.contrasena1, 9),
        address_street: req.body.calle,
        address_extra: req.body.extra,
        address_city: req.body.ciudad,
        address_state: req.body.provincia,
        address_zipcode: req.body.codigoPostal, 
        image: req.file.filename,
        detail : req.body.detail,
        creation_date: req.body.creation_date
    });
    console.log(usuario);
    res.redirect('/');
  },
   
    //mostrar detalles de los usuarios
    detail: async  (req,res)=>{
   
     db.users.findByPk(req.params.id)
    
            .then(user => {
                res.render('user/detailUser', { users: user});
            })
            .catch(error => res.send(error));  
  },
    //editar un usuario
     edit: (req,res) => {
    db.users.findByPk (req.params.id)
    .then(function (objetoUsuario){
      res.render("user/editUser", {usuario: objetoUsuario}) 
    } )
  },

    //eliminar usuario
     delete: async (req,res) => {
      
  },


};

module.exports = userEditController;