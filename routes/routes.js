var express = require('express');
var router = express.Router();
var controller = require('../controllers/controller.js');
const passport = require('passport');

// home page
router.get('/', controller.welcome);

// map page
router.get('/map', controller.showmap);

// tips page
router.get('/tips', controller.scrolling)

// game page
router.get('/game', controller.game)

// Create new bin
router.post('/bin',controller.createBin);

// Find all bins
router.get('/bin',controller.findAllBins);

// Find one bin by id
router.get('/bin/id/:id',controller.findOneBin);

//Find one bins by name
router.get('/bin/address/:address', controller.findBinByAddress);

// Find all trash
router.get('/trash', controller.findAllTrashs);

// Find one trash by id
router.get('/trash/:id', controller.findOneTrash);

//Find one trash by name
router.get('/trash/:type', controller.findTrashByType);

//Find one trash by name
router.get('/trash/:name', controller.findTrashType);

//display user add form
//router.get('/:add/:useradd', controller.getAddForm);
// Create a new user
//router.post('/users', controller.createUser);

//auth login
router.get('/auth/login', controller.Login);
//auth logout
router.get('/auth/logout', controller.Logout);
//auth Login with google
router.get('/auth/google', passport.authenticate('google',{
    scope:['profile']
}));
//callback route for google to redirect to
router.get('/auth/google/redirect', passport.authenticate('google'), controller.Callback);

module.exports = router;
