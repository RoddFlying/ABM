//REQUIRE

const express = require("express");
const path = require("path");
const methodOverride = require('method-override');
const session = require('express-session');

//const {sequelize} = require ('./database/models') 
//sequelize.sync({alter:false}).then(()=> console.log ('ModeloSincronizados'));

//EXPRESS

const app = express();

//MIDDLEWARES

app.use(express.json());
app.use(methodOverride ("_method"));



//TEMPLATE

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '../views')); 

app.use(express.urlencoded({extended:true}));

app.use(session({
  secret: 'shh, is a secret',
  resave:false ,
  saveUninitialized: false,
}));


//API

const apiRoutes = require('./routes/apiRouter')
app.use('/', apiRoutes)

//ROUTES

const userRouter = require('./routes/userRouter');

app.use('/user', userRouter); 

const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath));

app.use(methodOverride ("_method")); 

//EJS 

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '/views'));




//ERROR

app.use((req, res, next) => {
    res.status(404).render("not-found")
  });


//listen//

app.listen(3002, () => {
  console.log("servidor corriendo puerto 3002");
});

// exports

module.exports = app;