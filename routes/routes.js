var express = require('express');
var router = express.Router();

var controller = require('../controllers/controller.js');

// home page
router.get('/', controller.welcome);

// Create new record
router.post('/bin',controller.createBin);

// Find all records
router.get('/bin',controller.findAllBins);

// Find one record by id
router.get('/bin/id/:id',controller.findOneBin);

//Find one records by name
router.get('/bin/address/:address', controller.findBinByAddress);

// Create new trash
router.post('/trash', controller.createTrash);

// Find all trash
router.get('/trash', controller.findAllTrashs);

// Find one trash by id
router.get('/trash/id/:id', controller.findOneTrash);

//Find one trash by name
router.get('/trash/name/:name', controller.findTrashByName);

module.exports = router;