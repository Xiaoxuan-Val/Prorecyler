var express = require('express');
var controller = require('../controllers/controller.js');

var router = express.Router();

// Find all bins
router.get('/', controller.findAllBins);

// Create new bin
router.post('/', controller.authCheck, controller.createBin);

module.exports = router;