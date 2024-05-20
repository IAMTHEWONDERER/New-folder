const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
    roomId: String,
    messages: [{ sender: String, message: String, timestamp: Date }]
});

module.exports = mongoose.model('Chat', ChatSchema);
