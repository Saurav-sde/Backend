const express = require ('express');
const app = express();
const main = require("./database");
const User = require("./Models/users");
const validUser = require("./utils/validateUser");
const bcrypt = require("bcrypt");


app.use(express.json());

// register the user
app.post("/register",async (req,res) =>{
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

app.post("/login",async(req,res)=>{
    try {
        const people = await User.findById(req.body._id);

        if(!(req.body.emailId === people.emailId))
            throw new Error("Invalid Credentials");

        const isAllowed = await bcrypt.compare(req.body.password, people.password);
        if(!isAllowed)
            throw new Error("Invalid Credentials");

        res.send("Login Successfully");

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