var mongoose = require('mongoose');
var Bin = mongoose.model('bin');
var Trash = mongoose.model('trashdb');

var welcome = function (req, res) {
    res.send('Welcome! We are group F4.');
}

var createBin = function(req,res){
    var bin = new Bin({
        "type":req.body.type,
        "address":req.body.address,
        "distance":req.body.distance,
        "photo":req.body.photo
    });
    bin.save(function(err,newBin){
        if(!err){
            res.send(newBin);
        }else{
            res.sendStatus(400);
        }
    });
};

var findAllBins = function(req,res){
    Bin.find(function(err,bins){
        if(!err){
            res.send(bins);
        }else{
            res.sendStatus(404);
        }
    });
};

var findOneBin = function(req,res){
    var binInx = req.params.id;
    Bin.findById(binInx,function(err,bin){
        if(!err){
            res.send(bin);
        }else{
            res.sendStatus(404);
        }
    });
};

var findBinByAddress = function(req, res){
    var binAddress = req.params.address;
    Bin.find({name:binAddress},function(err,bin){
        if(!err){
            res.send(bin);
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

var findOneTrash = function (req, res) {
    var trashInx = req.params.id;
    Trash.findById(trashInx, function (err, trash) {
        if (!err) {
            res.send(trash);
        } else {
            res.sendStatus(404);
        }
    });
};

var findTrashByName = function (req, res) {
    var trashName = req.params.name;
    Trash.find({ name: trashName }, function (err, trash) {
        if (!err) {
            res.send(trash);
        } else {
            res.sendStatus(404);
        }
    });
};

module.exports.welcome = welcome;

module.exports.createBin = createBin;
module.exports.findAllBins = findAllBins;
module.exports.findOneBin = findOneBin;
module.exports.findBinByAddress = findBinByAddress;

module.exports.createTrash = createTrash;
module.exports.findAllTrashs = findAllTrashs;
module.exports.findOneTrash = findOneTrash;
module.exports.findTrashByName = findTrashByName;