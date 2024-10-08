import User from "../models/user.model.js"

export const getUserForSidebar = async(req, res) => {
    try {
        const loggedUserId = req.user._id

        const allUsers = await User.find({_id: {$ne: loggedUserId}}).select("-password")

        return res.status(200).json(allUsers)
    } catch (error) {
        console.log("eror in getUserForSidebar")
        return res.status(400).json({error: error})
    }
}