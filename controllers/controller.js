var mongoose = require('mongoose');
var Data = mongoose.model('data');
var Trash = mongoose.model('trash');

var welcome = function (req, res) {
    res.send('Welcome! We are group F4.');
}

var createRecord = function(req,res){
    var record = new Record({
        "name":req.body.name,
        "address":req.body.address,
        "distance":req.body.distance,
        "photo":req.body.photo
    });
    record.save(function(err,newRecord){
        if(!err){
            res.send(newRecord);
        }else{
            res.sendStatus(400);
        }
    });
};

var findAllRecords = function(req,res){
    Record.find(function(err,records){
        if(!err){
            res.send(records);
        }else{
            res.sendStatus(404);
        }
    });
};

var findOneRecord = function(req,res){
    var recordInx = req.params.id;
    Record.findById(recordInx,function(err,record){
        if(!err){
            res.send(record);
        }else{
            res.sendStatus(404);
        }
    });
};

var findRecordByName = function(req, res){
    var recordName = req.params.name;
    Record.find({name:recordName},function(err,record){
        if(!err){
            res.send(recordName);
        }else{
            res.sendStatus(404);
        }
    });
};

var createTrash = function (req, res) {
    var trash = new Trash({
        "name": req.body.name,
        "type": req.body.type,
        "pic": req.body.pic
    });
    trash.save(function (err, newTrash) {
        if (!err) {
            res.send(newTrash);
        } else {
            res.sendStatus(400);
        }
    });
};

var findAllTrashs = function (req, res) {
    Trash.find(function (err, trash) {
        if (!err) {
            res.send(trash);
        } else {
            res.sendStatus(404);
        }
    });
};

module.exports.welcome = welcome;
module.exports.createRecord = createRecord;
module.exports.findAllRecords = findAllRecords;
module.exports.findOneRecord = findOneRecord;
module.exports.findRecordByName = findRecordByName;
module.exports.findAllTrashs = findAllTrashs;
module.exports.createTrash = createTrash;