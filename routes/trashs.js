var express = require('express');
var controller = require('../controllers/controller.js');

var router = express.Router();

// Find all trash
router.get('/', controller.findAllTrashs);

// Find one trash by id
router.get('/:id', controller.findOneTrash);

// Find all trash by type
router.get('/:type', controller.findTrashByType);

// Find one trash by name
//router.get('/name/:name', controller.getTrashByName);

// Find one trash by name
router.post('/find', controller.findTrashByName);

module.exports = router;