/*
    Schema will be used for end product but for short term testing, users.js will have test data
*/
var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');

const User = new Schema(
	{
		userName: { type: String, required: true, unique: true },
		password: { type: String, required: true },
	},
	{ timestamps: true }
);

User.plugin(uniqueValidator);

User.pre('save', function (next) {
	if (!this.isModified('password')) {
		return next();
	}
	this.password = bcrypt.hashSync(this.password, 12);
	next();
});

User.methods.comparePassword = function (plaintext, callback) {
	return callback(null, bcrypt.compareSync(plaintext, this.password));
};

module.exports = mongoose.model('users', User);
