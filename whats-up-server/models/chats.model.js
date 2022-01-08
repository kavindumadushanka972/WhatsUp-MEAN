const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let chat = new Schema({
    name: String,
    image: {
        type: String,
        default: "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
    },
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId, // messages object id
            ref: 'messages' //schema related to messages in mongodb
        }
    ]
},{
    timestamps: true
})

module.exports = mongoose.model('chats', chat)