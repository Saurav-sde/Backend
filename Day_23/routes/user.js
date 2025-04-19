const express = require ('express');
const User = require("../Models/users");
const userAuth = require('../middleware/userAuth');

const userRouter = express.Router();

// to get data of a particular user
userRouter.get("/", userAuth, async(req,res) =>{
    try {
        res.send(req.result);
    } catch (err) {
        res.send("Error "+ err.message);
    }
})

// to delete a particular user
userRouter.delete("/:id",userAuth,async (req,res) =>{
    try {
        await User.findByIdAndDelete(req.params.id);   
        res.send("Deleted Successfully"); 
    } catch (err) {
        res.send("Error "+ err.message);
    }
})

userRouter.patch("/",userAuth,async (req,res) =>{
    try {
        const {_id:id, ...update} = req.body;
        await User.findByIdAndUpdate(id,update,{"runValidators":"true"});
        res.send("Updated Successfully");
    } catch (err) {
        res.send("Error "+ err.message);
    }
})

module.exports = userRouter;