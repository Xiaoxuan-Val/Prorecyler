var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema(
    {
        userName: String,
        googleID: String
    }
);

var User = mongoose.model('users', userSchema);

module.exports.User = User;


