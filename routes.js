var express = require('express');
var router = express.Router();

var controller = require('../controller.js');

// Create new record
router.post('/api',controller.createRecord);

// Find all records
router.get('/api',controller.findAllRecords);

// Find one record by id
router.get('/api/id/:id',controller.findOneRecord);

//Find one records by name
router.get('/api/name/:name',controller.findRecordByName);


module.exports = router;