var express = require('express');
var controller = require('../controllers/controller.js');

var router = express.Router();

// home page
router.get('/', controller.authCheck, controller.welcome);

// tips page
router.get('/tips', controller.showTips)

module.exports = router;