var express = require('express');
var controller = require('../controllers/controller.js');

var router = express.Router();

// map page and show all bins
router.get('/', controller.showMaps);

// Find one bin by id
router.get('/bins/:id', controller.findOneBin);

//Find bins by types
router.get('/bins/:type', controller.findBinByType);

module.exports = router;