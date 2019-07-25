const express = require('express');

const router = express.Router();
const controller = require('../controllers/usersController');

router.get('/index', controller.get);
// router.put('/:id', controller.put);
// router.delete('/:id', controller.delete);

module.exports = router;
