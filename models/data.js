var mongoose = require('mongoose');
var dataSchema = mongoose.Schema(
    {
        "name":String,
        "address":String,
        "distance":String,
        "photo":String
    }
);
mongoose.model('data', dataSchema);
