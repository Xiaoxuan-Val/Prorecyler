var mongoose = require('mongoose');
var Bin = mongoose.model('bin');
var Trash = mongoose.model('trashdb');
var Tip = mongoose.model('tip');

var welcome = function (req, res) {
    res.render("index");
}

var game = function (req, res) { 
    res.send('Game comming soon...')
}

var scrolling = function (req, res) {
    Tip.countDocuments(function (err, count) {
        var random = Math.floor(Math.random() * count)
        Tip.findOne().skip(random).exec(function (err, result) {
            if (!err) {
                res.send(result);
            } else {
                res.sendStatus(404);
            }
        });
    })
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

var findAllTrashs = function (req, res) {
    Trash.find(function (err, trash) {
        if (!err) {
            res.send(trash);
        } else {
            res.sendStatus(404);
        }
    });
};

var findTrashByType = function (req, res) {
    var trashType = req.params.type;
    Trash.find({ type: trashType }, function (err, trash) {
        if (!err) {
            res.send(trash);
        } else {
            res.sendStatus(404);
        }
    });
};

var findTrashType = function (req, res) {
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

module.exports.game = game;

module.exports.scrolling = scrolling;

module.exports.createBin = createBin;
module.exports.findAllBins = findAllBins;
module.exports.findOneBin = findOneBin;
module.exports.findBinByAddress = findBinByAddress;

module.exports.findAllTrashs = findAllTrashs;
module.exports.findTrashType = findTrashType;
module.exports.findTrashByType = findTrashByType;