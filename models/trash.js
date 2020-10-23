var mongoose = require('mongoose');
var trashSchema = mongoose.Schema(
    {
        "name": String,
        "type": String,
        "pic": String,
        "process": String
    }
);
mongoose.model('trashdb', trashSchema);