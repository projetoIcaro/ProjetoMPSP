const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

//Rotas
const index = require('./routes/index');
const usersRoute = require('./routes/usersRoute');

app.use('/', index);
app.use('/users', usersRoute);

module.exports = app;