const express = require ('express');
const app = express();
const main = require("./database");
const User = require("./Models/users");

app.use(express.json());

// register the user
app.post("/register",async (req,res) =>{
    try {
        // req.body ke andar data aaya hai, usme firstname,emailID and age present hona chahaiye
        const mandatoryField = ["firstname","enmailId","age"];
        const isAllowed = mandatoryField.every((k) => Object.keys(req.body).includes(k));

        if(!isAllowed)
            throw new Error("Fields missing");

        await User.create(req.body);
        res.send("User Registered Successfully");
    } catch (err) {
        res.send("Error "+ err.message);
    }
})

// get all the user data
app.get("/info",async (req,res) =>{
    try {
        const result = await User.find();
        res.send(result);
    } catch (err) {
        res.send("Error "+ err.message);
    }
})

// to get data of a particular user
app.get("/user/:id", async(req,res) =>{
    try {
        const result = await User.findById(req.params.id);
        res.send(result);
    } catch (err) {
        res.send("Error "+ err.message);
    }
})

// to delete a particular user
app.delete("/user/:id",async (req,res) =>{
    try {
        await User.findByIdAndDelete(req.params.id);   
        res.send("Deleted Successfully"); 
    } catch (err) {
        res.send("Error "+ err.message);
    }
})

app.patch("/user",async (req,res) =>{
    try {
        const {_id:id, ...update} = req.body;
        await User.findByIdAndUpdate(id,update,{"runValidators":"true"});
        res.send("Updated Successfully");
    } catch (err) {
        res.send("Error "+ err.message);
    }
})



main()
    .then(()=>{
        console.log("Connected to DB");
        app.listen(3000,()=>{
            console.log("Listening at port 3000");
        })
    })
    .catch((err) => console.log(err));