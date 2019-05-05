const mongoose = require("mongoose");

var env = process.env.NODE_ENV || 'development';
var config = require('../config/config')[env];

mongoose.connect(config.dbURI, config.options).then(
    () => {
        console.log("Database connection established!");
    },
    err => {
        console.log("Error connecting Database instance due to: ", err);
    }
);

// Set up models
require('./bin.js');
require('./trash.js');
require('./tip.js')