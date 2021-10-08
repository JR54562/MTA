const express = require("express");
const app = express(); //app is an object
// const pokemon = require("./models/pokemon.js");
//include the method-override package
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("css"));
const routes = require('./routes');
app.use('/users', routes.users);



// Middleware goes above all other routes
app.use((req, res, next) => {
    console.log("I run for all routes");
    next();
  });
  
  app.listen(3003, () => {
    console.log("Still listening...");
  });
  