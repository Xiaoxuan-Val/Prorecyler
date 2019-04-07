var mongoose = require('mongoose');
var Data = mongoose.model('data');

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

module.exports.createRecord = createRecord;
module.exports.findAllRecords = findAllRecords;
module.exports.findOneRecord = findOneRecord;
module.exports.findRecordByName = findRecordByName;