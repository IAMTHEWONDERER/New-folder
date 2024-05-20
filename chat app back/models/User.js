const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    role: { type: String, default: 'user' }
});

module.exports = mongoose.model('User', UserSchema);
