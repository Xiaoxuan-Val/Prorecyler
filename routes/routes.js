var express = require('express');
var controller = require('../controllers/controller.js');

var router = express.Router();

// home page
router.get('/', controller.welcome);

// tips page
// router.get('/tips', controller.showTips)

//display user add form
//router.get('/:add/:useradd', controller.getAddForm);
// Create a new user
//router.post('/users', controller.createUser);

module.exports = router;