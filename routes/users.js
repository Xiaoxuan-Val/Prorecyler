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

//user center page
router.get('/usercenter', controller.authCheck, controller.authUser);
//user get add trash form
router.get('/usercenter/addTrash', controller.authCheck, controller.addTrash);
//user save trash to data base
router.post('/usercenter/saveTrash', controller.authCheck, controller.createTrash);
//user get add bin form
router.get('/usercenter/addBin', controller.authCheck, controller.addBin);
//user save bin to data base
router.post('/usercenter/saveBin', controller.authCheck, controller.createBin);

module.exports = router;