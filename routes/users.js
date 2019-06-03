var express = require('express');
var controller = require('../controllers/controller.js');
const passport = require('passport');

var router = express.Router();

//auth login
router.get('/login', controller.Login);
//auth logout
router.get('/logout', controller.Logout);
//auth Login with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));
//callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), controller.Callback);
//redirect page
// router.get('/profile', controller.authCheck, controller.Profile);

//user center page
router.get('/usercenter', controller.authUser);
//user get add trash form
router.get('/usercenter/addTrash', controller.addTrash);
//user save trash to data base
router.post('/usercenter/saveTrash', controller.createTrash);
//user get add bin form
router.get('/usercenter/addBin', controller.addBin);
//user save bin to data base
router.post('/usercenter/saveBin', controller.createBin);

module.exports = router;