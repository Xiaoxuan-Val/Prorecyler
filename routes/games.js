var express = require('express');
var controller = require('../controllers/controller.js');

var router = express.Router();

// Play game
router.get('/', controller.game);

// Create new game quiz question
router.post('/', controller.createQuestion);

module.exports = router;