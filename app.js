// Set up express
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// set the view engine
app.set('view engine', 'pug');

// test express where the static files are kept
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database setup
require('./models/db.js');

// Routes setup
var routes = require('./routes/routes.js');
app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT,function(){
    console.log(`Express listening on port ${PORT}`);
});
