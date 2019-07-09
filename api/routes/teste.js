'use strict';
module.exports = function(app) {
  let teste = require('../controllers/teste');

  app.route('/teste')
    .get(teste.index)
};