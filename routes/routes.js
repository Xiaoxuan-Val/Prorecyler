var express = require('express');
var router = express.Router();

var controller = require('../controllers/controller.js');

// home page
router.get('/', controller.welcome);

// Create new record
router.post('/api',controller.createRecord);

// Find all records
router.get('/api',controller.findAllRecords);

// Find one record by id
router.get('/api/id/:id',controller.findOneRecord);

//Find one records by name
router.get('/api/name/:name', controller.findRecordByName);

// Find all trash
router.get('/trash', controller.findAllTrashs);

// Create new trash
router.post('/trash', controller.createTrash);


module.exports = router;