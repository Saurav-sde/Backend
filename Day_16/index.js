const express = require ('express');
const app = express();
const main = require("./database");
const User = require("./Models/users");

app.use(express.json());

app.get("/info",async (req,res)=>{
    const ans = await User.find({});
    res.send(ans);
})

app.post("/info", async (req,res)=> {
    // const ans = new User(req.body);
    // await ans.save();
    try {
        await User.create(req.body);
        res.status(201).send("Successfully Updated");
    } catch (error) {
        res.status(500).send(error);
    }
})

app.delete("/info",async (req,res)=>{
    await User.deleteOne({name:"Vishal"});
    res.send("Deleted Successfully");
})

app.put("/info",async(req,res)=>{
    const result = await User.updateOne({name: "Mohan"},{age:40, city:"Patna"});
    res.send("Updated Successfully");
})

main()
    .then(()=>{
        console.log("Connected to DB");
        app.listen(3000,()=>{
            console.log("Listening at port 3000");
        })
    })
    .catch((err) => console.log(err));