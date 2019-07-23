'use strict';
module.exports = function(app) {
  let teste = require('../controllers/teste');

  app.route('/teste/index').get(teste.index);
};