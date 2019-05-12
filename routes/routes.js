var express = require('express');
var router = express.Router();
var controller = require('../controllers/controller.js');
const passport = require('passport');

// home page
router.get('/', controller.welcome);

// tips page
router.get('/tips', controller.showTips)

// game page
router.get('/game', controller.game)

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
//redirect page
router.get('/auth/profile', controller.Profile);

module.exports = router;
