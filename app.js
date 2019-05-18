// Set up express
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//Set up passport.js
const passportSetup = require('./config/passport-setup');
const passport = require('passport');

//set up cookie
const cookieSession = require('cookie-session');

// set the view engine
app.set('view engine', 'pug');

// test express where the static files are kept
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text()); 
app.use(cookieSession({
    maxAge: 24*60*60*1000,
    keys:['prorecycler']
}));


//initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Database setup
require('./models/db.js');

// Routes setup
var routes = require('./routes/routes.js');
app.use('/', routes);

var userRouter = require('./routes/users');
app.use('/auth', userRouter);

var trashRouter = require('./routes/trashs');
app.use('/trashs', trashRouter);

var mapRouter = require('./routes/maps');
app.use('/maps', mapRouter);

var binRouter = require('./routes/bins');
app.use('/bins', binRouter);

var gameRouter = require('./routes/games');
app.use('/game', gameRouter);

// Run project
const PORT = process.env.PORT || 3000;
app.listen(PORT,function(){
    console.log(`Express listening on port ${PORT}`);
});
