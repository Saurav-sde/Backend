const express = require("express");
const app = express();

// app.use("/user",(req,res)=>{
//     res.send({name:"Saurav"});
// })



// parsing krni hoti hain
app.use(express.json()); // middleware: json format data => JS Object

// get method
app.get("/user",(req,res)=>{
    res.send({name:"Saurav"});
})

app.post("/user",(req,res)=>{
    console.log(typeof req.body.age);
    res.send("Data Saved Successfully"); 
})






app.listen(4000,()=>{
    console.log("Listening at port 4000");
})