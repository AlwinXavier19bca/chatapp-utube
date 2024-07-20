import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    reciverId: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    message: {
        required: true,
        type: String
    },
}, {timestamps: true})

const Message = mongoose.model("Message", messageSchema)

export default Message