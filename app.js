
var express = require('express');
var app = express();

app.get('/', function(req,res){
    res.send('F4');
});

app.listen(3000,function(req,res){
    console.log('Express listening on port 3000');
});