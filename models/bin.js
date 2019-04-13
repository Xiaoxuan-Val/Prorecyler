var mongoose = require('mongoose');
var dataSchema = mongoose.Schema(
    {
        "type":String,
        "address":String,
        "distance":String,
        "photo":String
    }
);
mongoose.model('bin', dataSchema);
