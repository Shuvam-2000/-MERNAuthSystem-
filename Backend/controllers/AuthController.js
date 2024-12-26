const UserModel = require("../models/User");
const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// user signup
const signUp = async (req,res) => {
    try {
        const { name, email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if(user) return res.status(409).json({message: "User already Exists", success: false})
        
        // register user with the given fields and hash the password
        const userModel = new UserModel({ name, email, password });
        userModel.password = await bycrypt.hash(password, 10);
        await userModel.save();
        res.status(201).json({ message: "SignUp SuccessFull", success: true })
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error", success: false })
    }
}

// user login
const login = async (req,res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        const errorMessage = "Incorrect Email Or Password"
        if(!user) {
            return res.status(403).json({message: errorMessage , success: false})
        }

        // authorizing the password of the client side and the password in db
        const isPasEqual = await bycrypt.compare(password, user.password)
        if(!isPasEqual) {
            return res.status(403).json({message: errorMessage , success: false})
        }

        // initializing jwt token for user login 
        const jwtToken = jwt.sign({email: user.email,id: user._id}, process.env.JWT_SECRET,{ expiresIn: '24h'})

        res.status(200)
        .json({ 
            message: "Login SuccessFull", 
            success: true, 
            jwtToken, 
            email, 
            name: user.name 
        })
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error", success: false })
    }
}

module.exports = {
    signUp,
    login
}