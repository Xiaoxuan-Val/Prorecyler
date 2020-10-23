const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
var mongoose = require('mongoose');
//var User = require('../models/users.js');
require('../models/users.js');
var User = require('mongoose').model('users');

passport.serializeUser((user, done)=>{
    done(null, user.id);
});

passport.deserializeUser((id, done)=>{
    User.findById(id).then((user)=>{
        done(null, user);
    })

});



passport.use(
    new GoogleStrategy({
        //options goes here
        callbackURL:'/auth/google/redirect',
        clientID:'392634418526-rq4tg7r5jcl65q8fpgv90eutebrjc9rd.apps.googleusercontent.com',
        clientSecret: 'ltjPn1EYIRuETEzocMTIl_ug'

    },(accessToken, refreshToken, profile, done)=>{
        //check if user already exist
        User.findOne({googleID: profile.id}).then((currentUser)=>{
            if(currentUser){
                //already have the user
                console.log('user is:', currentUser);
                done(null, currentUser);

            }else{
                //create one
                new User({
                    userName: profile.displayName,
                    googleID: profile.id
                }).save().then((newUser)=>{
                    console.log('new user created:' + newUser);
                    done(null, newUser);
                })
            }

        })
  })
)