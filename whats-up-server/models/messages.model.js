const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let message = new Schema({
    message: String,
    chat_id: String,
    from: String
},{
    timestamps: true
})

module.exports = mongoose.model('messages', message)