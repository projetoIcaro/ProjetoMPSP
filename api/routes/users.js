'use strict';
module.exports = function(app) {
  let users = require('../controllers/users');

  app.route('/users/index').get(users.index);
};