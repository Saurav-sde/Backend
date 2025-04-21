const express = require ('express');
const bcrypt = require("bcrypt");
const User = require("../Models/users");
const validUser = require("../utils/validateUser");
const userAuth = require("../middleware/userAuth");
const redisClient = require('../config/redis');
const jwt = require('jsonwebtoken');

const authRouter = express.Router();


// "/auth/register"
authRouter.post("/register",async (req,res) =>{
    try {
        // first validate the user
        validUser(req.body);

        // converting password in hashed form
        req.body.password = await bcrypt.hash(req.body.password,10);
        await User.create(req.body);
        res.send("User Registered Successfully");
    } catch (err) {
        res.send("Error "+ err.message);
    }
})


// "/auth/login"

authRouter.post("/login",async(req,res)=>{
    try {
        const people = await User.findOne({emailId: req.body.emailId});

        if(!(req.body.emailId === people.emailId))
            throw new Error("Invalid Credentials");

        const isAllowed = people.verifyPassword(req.body.password);
        if(!isAllowed)
            throw new Error("Invalid Credentials");

        // jwt token
        const token = people.getJWT();
        res.cookie("token",token);

        res.send("Login Successfully");
    } catch (err) {
        res.send("Error "+ err.message);
    }
})



// redis ke db mein blocked token dalna hain
// token: exp:3din 
authRouter.post("/logout",userAuth,async(req,res) => {
    try {

        const {token} = req.cookies;
        // console.log(token);

        const payload = jwt.decode(token);
        // console.log((payload));
        
        await redisClient.set(`token:${token}`, "Blocked");
        // await redisClient.expire(`token:${token}`,1800); // valid from current time to 1800sec 
        await redisClient.expireAt(`token:${token}`,payload.exp); // 01/01/1970 se ka tak valid rahega

        res.cookie("token",null,{expires: new Date(Date.now())});
        res.send("Logout Successfully!");
    } catch (err) {
        res.send("Error : "+ err.message);
    }
})

module.exports = authRouter;