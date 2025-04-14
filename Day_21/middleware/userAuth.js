const jwt = require('jsonwebtoken');
const User = require('../Models/users');

const userAuth = async(req,res,next) =>{
    try {
        // validate the user
        const {token} = req.cookies;
        if(!token)
            throw new Error("Token doesn't exists");

        const payload = jwt.verify(token,"Saurav@1341"); 
        const {_id} = payload;
        if(!_id)
            throw new Error("Id is Missing");

        const result = await User.findById(_id);
        if(!result)
            throw new Error("User doesn't exist");
        req.result = result;

        next();

    } catch (err) {
        res.send("Error "+ err.message);
    }
} 

module.exports = userAuth;