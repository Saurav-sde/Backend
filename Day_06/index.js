const express = require('express');

const app = express(); // creating a server
// console.log(app);

// app.use("/", (req,res)=>{
//     res.send({"name":"saurav", "age":20,"gender":"male","contact":"6202404482"}); // sending response in json format 
// })

// app.use("/about", (req,res)=>{
//     res.send("I am Your About Page"); 
// })

// app.use("/contact", (req,res)=>{
//     res.send("I am Your Contact Page");
// })

// app.use("/", (req,res)=>{
//     res.send({"name":"saurav", "age":20,"gender":"male","contact":"6202404482"}); // sending response in json format 
// })



// if we use ? then u become option here, /abot and /about hits the same http request
// app.use("/abou?t", (req,res)=>{
//     res.send("I am Your About Page"); 
// })


// now if we use + then it handle every route like (about,abouut,abouuut,abouuuut...) for every number of u
// app.use("/abou+t", (req,res)=>{
//     res.send("I am Your About Page"); 
// })

// if we use * after u then we can write anything after u but ends with t hits the same request
// app.use("/abou*t", (req,res)=>{
//     res.send("I am Your About Page"); 
// })



// params
// app.use("/about/:id/:user", (req,res)=>{ // for any /about/anything comes here
//     console.log(req.params); // { id: '49', user: 'saurav' } -> /about/49/saurav
//     res.send("I am Your About and user Page"); 
// })


// app.use("/about/:id", (req,res)=>{ // for any /about/anything comes here
//     console.log(req.params); // { id: '30' } -> /about/30
//     res.send("I am Your About Page"); 
// })


// app.use("/contact", (req,res)=>{
//     res.send("I am Your Contact Page");
// })

// app.use("/", (req,res)=>{
//     res.send({"name":"saurav", "age":20,"gender":"male","contact":"6202404482"}); // sending response in json format 
// })


app.listen(4000,()=>{
    console.log("Listening at port 4000");
}) 