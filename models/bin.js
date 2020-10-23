var mongoose = require('mongoose');
var binSchema = mongoose.Schema(
    {
        "type": String,
        "photo": String,
        "location": { 
            type: [Number],
            required: true
        },
    }
);
mongoose.model('bin', binSchema);