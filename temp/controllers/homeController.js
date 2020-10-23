var mongoose = require('mongoose');
// show home page
var welcome = (req, res) => {
	res.render('index');
};

var Callback = function (req, res) {
	res.redirect('/');
};

var login = (req, res) => {
	res.render('Login');
};

module.exports = {
	welcome,
	Callback,
	login,
};
