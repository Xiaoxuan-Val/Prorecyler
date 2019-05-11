var mongoose = require('mongoose');
var dataSchema = mongoose.Schema(
    {
        "type":String,
        "coordinates": { latitude: Number, longitude: Number},
        "photo":String
    }
);
mongoose.model('bin', dataSchema);
