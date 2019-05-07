const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        'email': String,
        'name': { type: String, required: true },
        'password': { type: String, required: true },
    }
);

mongoose.model('users', userSchema);
