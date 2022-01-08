const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let chat = new Schema({
    name: String,
    image: String,
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId, // messages object id
            ref: 'messages' //schema related to messages in mongodb
        }
    ]
})

module.exports = mongoose.model('chats', chat)