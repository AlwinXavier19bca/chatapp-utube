import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js"

export const sendMessage = async (req, res) => {
    try {
        const {message} = req.body
        const {id: reciverId} = req.params
        const senderId = req.user._id

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, reciverId]}
        })

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, reciverId]
            })
        }

        const newMessage = new Message({
            senderId,
            reciverId,
            message
        })

        if (newMessage) {
            conversation.messages.push(newMessage._id)
        }

        // SOCKET FUNCTIONALITY
        
        await Promise.all([conversation.save(), newMessage.save()]) //for parallel saving
        res.status(201).json(newMessage)
    } catch (error) {
        res.status(500).json({error: error, log: 'sendMessage method error'})
    }
}

export const getMessage = async (req, res) => {
    try {
        const { id: userToChatId } = req.params
        const senderId = req.user._id
        const conversation = await Conversation.findOne({
            participants: {$all: [senderId, userToChatId]}
        }).populate("messages")

        if(!conversation){
            res.status(200).json([])
        }

        const messages = conversation.messages
        res.status(200).json(messages)
        
    } catch (error) {
        console.log("error in getMessage method")
        res.status(500).json({error: 'Interner server error'})
    }
}