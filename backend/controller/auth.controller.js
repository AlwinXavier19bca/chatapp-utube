import bcrypt from 'bcrypt'
import User from "../models/user.model.js"
import generateTokenAndSetCookie from "../utils/generateToken.js"

export const signup = async (req, res) => {
    try{
        const { fullName, username, password, confirmPassword, gender} = req.body

        if (password !== confirmPassword) {
            return res.status(400).json({error: "Password din't match"})
        }

        const user = await User.findOne({username})

        if (user){
            return res.status(400).json({error: "Username already exist"})
        }

        // PASSWORD HASHING

        const salt =  await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        // AVATAR_LINK=https://avatar-placeholder.iran.liara.run/
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })

        await newUser.save()

        if (newUser){

            // GENERATE JWT TOKEN HERE
            generateTokenAndSetCookie(newUser._id, res)

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                gender: newUser.gender,
                username: newUser.username,
                profilePic: newUser.profilePic
            })
        }else{
            res.status(400).json({ error: "Invalid user data"})
        }

    }catch (error){
        console.log("error in singup controller")
        res.status(500).json({error: error.message, log: 'error in singup controller'})
    }
}

export const login = async (req, res) => {
    try {
        const { username, password} = req.body

        const user = await User.findOne({username})
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "")

        if(!user || !isPasswordCorrect){
            return res.status(400).json({error: "Invalid username or password"})
        }

        generateTokenAndSetCookie(user._id, res)

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            profilePic: user.profilePic
        })

    } catch (error) {
        res.status(500).json({error: error.message, log: "login controller"})
    }
}

export const logout = (req, res) => {
    try {
        console.log('logout controller success')
        res.cookie("jwt", "", {maxAge: 0})
        res.status(200).json({message: "logged out successfully"})
    } catch (error) {
        console.log(error, 'error doi')
        res.status(500).json({error: error.message, log: "logout controller"})
    }
}