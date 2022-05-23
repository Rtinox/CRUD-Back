var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: String,
    first_name: String,
    age: Number,
    description: String
}, {
    collection: 'users'
});

module.exports = mongoose.model('User', UserSchema);