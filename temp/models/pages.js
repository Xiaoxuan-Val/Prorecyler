var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const Page = new Schema({
	displayName: { type: String, required: true },
});

module.exports = mongoose.model('pages', Page);
