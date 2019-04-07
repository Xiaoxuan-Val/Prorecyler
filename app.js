
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Database setup
require('./models/db.js');

app.get('/', function(req,res){
    res.send('F4');
});

app.listen(3000,function(req,res){
    console.log('Express listening on port 3000');
});