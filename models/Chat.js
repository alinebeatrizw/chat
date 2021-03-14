const mongoose = require("mongoose")
const Schema = mongoose.Schema


const ChatModel = new Schema({
    autor:{
        type: String,
        required: true
    },
    mensagem:{
        type: String,
        required: true
    }
})

mongoose.model("chatModel", ChatModel)