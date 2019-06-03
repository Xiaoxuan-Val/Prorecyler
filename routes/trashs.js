var express = require('express');
var controller = require('../controllers/controller.js');

var router = express.Router();

// Find all trash
router.get('/', controller.authCheck, controller.findAllTrashs);

// Find one trash by id
router.get('/:id', controller.authCheck, controller.findOneTrash);

// Find one trash by keyword
router.post('/find', controller.authCheck, controller.findTrashs);

module.exports = router;