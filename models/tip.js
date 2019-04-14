var mongoose = require('mongoose');
var tipSchema = mongoose.Schema(
    {
        "content": String,
        "pic": String
    }
);
mongoose.model('tip', tipSchema);