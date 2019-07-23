const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = process.env.PORT || 5000;



  // mongoose = require('mongoose'),
  // Task = require('./api/models/todoListModel'), //created model loading here
  // bodyParser = require('body-parser');

// mongoose instance connection url connection
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/Tododb');


// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());


let routesTeste = require('../routes/teste'); //importing route
routesTeste(app); //register the route
let routesUsers = require('../routes/users'); //importing route
routesUsers(app); //register the route


app.listen(port);
