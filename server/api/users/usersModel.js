var mongoose = require('mongoose');

var userSchema = ({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('users', userSchema, 'users');
