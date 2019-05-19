var express = require('express');
var controller = require('../controllers/controller.js');

var router = express.Router();

// Play game
router.get('/', controller.game);

// Get all game quiz question
router.get('/questions', controller.findAllQuestion)

// Create new game quiz question
router.post('/questions', controller.createQuestion);

module.exports = router;