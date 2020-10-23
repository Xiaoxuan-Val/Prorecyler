var express = require('express');
var controller = require('../controllers/controller.js');

var router = express.Router();

// map page and show all bins
router.get('/', controller.authCheck, controller.showMaps);

module.exports = router;