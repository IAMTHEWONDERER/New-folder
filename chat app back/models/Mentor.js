const mongoose = require('mongoose');

const MentorSchema = new mongoose.Schema({
    name: String,
    role: { type: String, default: 'mentor' }
});

module.exports = mongoose.model('Mentor', MentorSchema);
