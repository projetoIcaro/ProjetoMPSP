var express = require('express'),
  app = express(),
  port = process.env.PORT || 6000;
  // mongoose = require('mongoose'),
  // Task = require('./api/models/todoListModel'), //created model loading here
  // bodyParser = require('body-parser');

// mongoose instance connection url connection
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/Tododb');


// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());


let routes = require('../routes/teste'); //importing route
routes(app); //register the route


app.listen(port);
