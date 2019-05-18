var express = require('express');
var router = express.Router();
var controller = require('../controllers/controller.js');
const passport = require('passport');

// home page
router.get('/', controller.welcome);

// tips page
router.get('/tips', controller.showTips)

// quiz page
router.get('/quiz', controller.quiz)

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
router.get('/auth/profile', controller.authCheck, controller.Profile);
//user center page
router.get('/auth/usercenter', controller.authUser);
//user get add trash form
router.get('/auth/usercenter/addTrash', controller.addTrash);
//user save trash to data base
router.post('/auth/usercenter/saveTrash', controller.createTrash);
//user get add bin form
router.get('/auth/usercenter/addBin', controller.addBin);
//user save bin to data base
router.post('/auth/usercenter/saveBin', controller.createBin);



module.exports = router;
