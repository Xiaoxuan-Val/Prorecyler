var mongoose = require('mongoose');
var Bin = mongoose.model('bin');
var Trash = mongoose.model('trashdb');
var Tip = mongoose.model('tip');
var Question = mongoose.model('question');

// show home page
var welcome = (req, res) => {
    res.render("index", {
        user: req.user
    });
}

var game = (req, res) => {
    res.render('game');
}

var findAllQuestion = (req, res) => { 
    Question.find((err, questions) => {
        if (err) {
            res.sendStatus(404);
        } else {
            res.json(questions);
        }
    });
}

var createQuestion = (req, res) => {
    const question = new Question({
        "question": req.body.question,
        "choices": req.body.choices,
        "answer": req.body.answer
    });
    question.save((err, newQuestion) => {
        if (err) {
            res.sendStatus(404);
        } else {
            res.send(newQuestion);
        }
    });
}

var showAnswer = (req, res) => {
    Question.find((err, questions) => {
        if (err) {
            res.sendStatus(404);
        } else {
            res.render('quizanswer', {
                questions: questions
            });
        }
    });
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

// var findOneBin = function (req, res) {
//     var binInx = req.params.id;
//     Bin.findById(binInx, function (err, bin) {
//         if (err) {
//             res.sendStatus(404);
//         } else {
//             res.send(bin);
//         }
//     });
// };

// var findBinByType = function (req, res) {
//     var binType = req.params.type.toLowerCase();
//     Bin.find({ type: binType }, function (err, bins) {
//         if (err) {
//             res.sendStatus(404);
//         } else {
//             res.send(bins);
//         }
//     });
// };

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

var findTrashs = (req, res) => {
    var keyword = req.body.search.toLowerCase();
    Trash.find({ type: keyword }, function (err, trashs) {
        if (err) {
            res.sendStatus(404);
        } else if (trashs.length > 0) {
            res.render('searchresult', {
                trashs: trashs,
                resultcount: trashs.length
            });
        } else { 
            Trash.find({ name: keyword }, (err, trashs) => {
                if (err) {
                    res.sendStatus(404);
                } else {
                    res.render('searchresult', {
                        trashs: trashs,
                        resultcount: trashs.length
                    });
                }
            });
        }
    });
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

var createTrash = (req, res) => {
    var inputname = req.body.name.toLowerCase()
    var inputtype = req.body.type

    if (inputname == null || inputtype == null) {
        res.render('SorryPage', {
            title: 'Error input'
        });
    } else {
        const trash = new Trash({
            "name": inputname,
            "type": inputtype,
            "pic": req.body.pic,
            "process": req.body.process,

        });
        trash.save((err, newTrash) => {
            if (err) {
                res.sendStatus(500);
            } else {
                res.render('ThankYouPage', {
                    title: 'ThankYou'
                });
            }
        });
    }
}

var addBin = function(req, res){
    res.render('addBinForm',{title: 'Add Bin'});
}

var createBin = function (req, res) {
    var lat = req.body.lat;
    var lng = req.body.lng;
    var inputtype = req.body.type;

    if (inputtype == null || lat == null || lng == null) {
        res.render('SorryPage', {
            title: 'Error input'
        });
    } else {
        var location = []
        location.push(lat);
        location.push(lng);

        const bin = new Bin({
            "type": inputtype,
            "photo": req.body.photo,
            "location": location,

        });
        bin.save((err, newBin) => {
            if (err) {
                res.sendStatus(500);
            } else {
                res.render('ThankYouPage', {
                    title: 'Thank You'
                });

            }
        });
    }
}

module.exports = {
    welcome, Login, Logout, Callback, Profile, authCheck, authUser,
    addTrash, createTrash, addBin, createBin, 
    game, showTips, findAllQuestion, createQuestion, showAnswer,
    showMaps, findAllBins,
    findAllTrashs, findOneTrash, findTrashs,
};