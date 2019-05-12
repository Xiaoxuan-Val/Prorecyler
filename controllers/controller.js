var mongoose = require('mongoose');
var Bin = mongoose.model('bin');
var Trash = mongoose.model('trashdb');
var Tip = mongoose.model('tip');
//const User = mongoose.model('users');

// show home page
var welcome = function (req, res) {
    res.render("index");
}

var game = function (req, res) {
    res.send('Game comming soon...')
}

var showMaps = (req, res) => { 
    res.render('maps');
}

var showTips = (req, res) => {
    Tip.countDocuments((err, count) => {
        var random = Math.floor(Math.random() * count)
        Tip.findOne().skip(random).exec((err, tip) => {
            if (err) {
                res.sendStatus(404);
            } else {
                // res.send(result);
                res.render('tips', {
                    tip: tip
                });
            }
        });
    })
}

var createBin = function (req, res) {
    var bin = new Bin(req.body);
    bin.save(function (err, newBin) {
        if (!err) {
            res.send(newBin);
        } else {
            res.sendStatus(400);
        }
    });
};

var findAllBins = (req, res) => {
    Bin.find((err, bins) => {
        if (err) {
            res.sendStatus(404);
        } else {
            res.json(bins);
        }
    });
};

var findOneBin = function (req, res) {
    var binInx = req.params.id;
    Bin.findById(binInx, function (err, bin) {
        if (!err) {
            res.send(bin);
        } else {
            res.sendStatus(404);
        }
    });
};

var findBinByType = function (req, res) {
    var binType = req.params.type;
    Bin.find({ type: binType }, function (err, bin) {
        if (!err) {
            res.send(bin);
        } else {
            res.sendStatus(404);
        }
    });
};

// show trash page
var findAllTrashs = (req, res) => {
    Trash.find((err, trashs) => {
        if (err) {
            res.sendStatus(500);
        } else {
            // res.send(trash);
            res.render('alltrash', {
                trashs: trashs
            });
        }
    });
};

var findOneTrash = (req, res) => {
    var trashInx = req.params.id;
    Trash.findById(trashInx, (err, trash) => {
        if (err) {
            res.sendStatus(500);
        } else {
            // res.send(trash);
            res.render('trash', {
                trash: trash
            });
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

var findTrashByName = (req, res) => {
    var trashName = req.body.search;
    Trash.find({ name: trashName }, (err, trash) => {
        if (err) {
            res.sendStatus(404);
        } else {
            // res.send(trash);
            res.render('trash', {
                trash: trash
            });
        }
    });
};

// Add a new user to database
/*const createUser = function (req, res) {
  const user = new User({
    "name": req.body.name,
    "email": req.body.email,
    "password": req.body.password,

  });
  user.save(function (err, newUser) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.render('index', {
        title: 'Home'
      });

    }
  });
};*/

// Add a new user
/*const getAddForm = function (req, res) {
  res.render('useraddform', {
    title: 'Add User'
  });
};*/


var Login = function ( req, res){
    res.render('LoginPage',{
        title: 'Login'
    });
}

var Logout = function (req, res){
    //handle with passport.js here
    res.send("Logging out");
}

var Callback = function (req, res){
    //res.send(req.user);
    res.redirect('/auth/profile/');
}
var Profile = function (req, res){
    res.send(req.user.userName);
}

// module.exports.welcome = welcome;

// module.exports.game = game;

// module.exports.showtips = showtips;

// module.exports.createBin = createBin;
// module.exports.findAllBins = findAllBins;
// module.exports.findOneBin = findOneBin;
// module.exports.findBinByType = findBinByType;

// module.exports.findAllTrashs = findAllTrashs;
// module.exports.findOneTrash = findOneTrash;
// module.exports.findTrashType = findTrashType;
// module.exports.findTrashByType = findTrashByType;

// //module.exports.createUser = createUser;
// //module.exports.getAddForm = getAddForm;
// module.exports.Login = Login;
// module.exports.Logout = Logout;
// module.exports.Callback = Callback;
// module.exports.Profile = Profile;

module.exports = {
    welcome, game, showTips, showMaps, createBin, findAllBins, findOneBin, findBinByType,
    findAllTrashs, findOneTrash, findTrashByName, findTrashByType, Login, Logout,
    Callback, Profile, 
};