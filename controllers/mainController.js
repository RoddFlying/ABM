const fs = require('fs');
const path = require ('path');

let users = [];

const db = require('../database/models');

//const Op = db.Sequelize.Op;

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const controlador = {
  index: (req, res) => { 
  
  res.render("home");

  res.render("/home", {users: users});

  }
};
module.exports = controlador;
