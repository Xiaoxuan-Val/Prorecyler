const express = require('express');
const bodyParser = require('body-parser');
const homeRouter = express.Router();
const app = express();
const passport = require('passport');
var homeController = require('../controllers/homeController.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Home page
homeRouter.get('/', function (req, res) {
	res.send('GET request to the homepage');
});

// Login page
homeRouter.get('/login', function (req, res) {
	passport.login;
	res.send('GET request to the login page');
});

module.exports = homeRouter;
