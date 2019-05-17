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

var findTrashByName = (keyword, res) => {
    var trashName = keyword;
    Trash.find({ name: trashName }, (err, trashs) => {
        if (err) {
            res.sendStatus(404);
        } else {
            // res.send(trash);
            res.render('searchresult', {
                trashs: trashs, 
                resultcount: trashs.length
            });
        }
    });
};

var findTrashByType = function (keyword, res) {
    var trashType = keyword;
    Trash.find({ type: trashType }, function (err, trashs) {
        if (err) {
            res.sendStatus(404);
        } else {
            // res.send(trash);
            res.render('searchresult', {
                trashs: trashs, 
                resultcount: trashs.length
            });
        }
    });
};

var findTrashs = (req, res) => {
    var keyword = req.body.search;
    if (keyword == "Recyclable" || keyword == "Non-recyclable") {
        findTrashByType(keyword, res);
    } else { 
        findTrashByName(keyword, res);
    }
}

// Add a new user to database
/*const createTrash = function (req, res) {
  const user = new User({
    "name": req.body.name,
    "email": req.body.email,
    "password": req.body.password,

  });
  user.save(function (err, newUser) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.render('profile', {
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
    res.render('profile',{user: req.user});
}

const authCheck = (req,res, next) => {
    if(!req.user){
        // if user is not logged in
        res.redirect('/auth/google');
    }else{
        //if logged in
        next();
    }
};

var authUser = function(req, res){
    res.render('usercenter',{title: 'User Center'});
}

var addTrash = function(req, res){
    res.render('addTrashForm',{title: 'Add Trash'});
}

var createTrash = function(req, res){
    const trash = new Trash({
        "name": req.body.name,
        "type": req.body.type,
        "pic": req.body.pic,
        "process": req.body.process,

    });
    trash.save(function (err, newTrash) {
        if (err) {
            res.sendStatus(500);
        } else {
            res.render('ThankYouPage', {
                title: 'ThankYou'
            });

        }
    });
}

var addBin = function(req, res){
    res.render('addBinForm',{title: 'Add Bin'});
}

var createBin = function(req, res){
    const bin = new Bin({
        "type": req.body.type,
        "photo": req.body.photo,
        "location": req.body.location,

    });
    bin.save(function (err, newBin) {
        if (err) {
            res.sendStatus(500);
        } else {
            res.render('ThankYouPage', {
                title: 'Thank You'
            });

        }
    });
}

module.exports = {
    welcome, game, showTips, showMaps, findAllBins, findOneBin, findBinByType,
    findAllTrashs, findOneTrash,  Login, Logout, findTrashs,
    Callback, Profile, authCheck, authUser, addTrash, createTrash, addBin, createBin,
};


//getTrashByName