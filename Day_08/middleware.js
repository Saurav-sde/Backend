const express = require("express");
const app = express();

// Route Handler
// app.use("/user",(req,res,next)=>{
//     console.log("first");
//     next();
// },
// (req,res,next)=>{
//     console.log("Second");
//     next();
// },
// (req,res,next)=>{
//     console.log("Third");
//     // res.send("Hello I am Third");
//     next();
// },
// (req,res,next)=>{
//     console.log("Fourth");
//     res.send("Hello I am Fourth");
// })

// we can wrap all the route handler inside an array
// app.use("/user",[(req,res,next)=>{
//     console.log("first");
//     next();
// },
// (req,res,next)=>{
//     console.log("Second");
//     next();
// },
// (req,res,next)=>{
//     console.log("Third");
//     // res.send("Hello I am Third");
//     next();
// },
// (req,res,next)=>{
//     console.log("Fourth");
//     res.send("Hello I am Fourth");
// }])
// app.use(route,RH,RH,RH,RH,RH.....)
// app.use(route,[RH,RH,RH,RH,RH.....])
// app.use(route,RH,[RH,RH,RH],RH.....)


// we can also write it alag alag krke and work same like above
// app.use("/user",(req,res,next)=>{
//     console.log("first");
//     next();
// })

// app.use("/user",(req,res,next)=>{
//     console.log("Second");
//     next();
// })

// app.use("/user",(req,res,next)=>{
//     console.log("Third");
//     // res.send("Hello I am Third");
//     next();
// })

// app.use("/user",(req,res,next)=>{
//     console.log("Fourth");
//     res.send("Hello I am Fourth");
// })

// what is middleware here:- jo beech mein hain, first three is middleware and 4th one is request/route handler

app.use("/user",(req,res,next)=>{
    console.log(`${Date.now()} ${req.method} ${req.url}`);
    next();
})

app.get("/user",(req,res)=>{
    res.send("Info About User");
})

app.post("/user",(req,res)=>{
    res.send("Info saved");
})

app.delete("/user",(req,res)=>{
    res.send("Info deleted");
})

app.listen(3000,()=>{
    console.log("Listening at port 3000");
})  
// here same code is repeatiting     console.log(`${Date.now()} ${req.method} ${req.url}`);  so we use middleware here


// mere pass koi bhi request ayyi hme use log ko maintain krni hoti hain
// Timing, kis type ki req thi, url kya tha us req ka
// benefit of log maintaining is suppose our server gets crashed then we are unable to find by which req this happens, if we maintained the log we would the req and we can work on it to maintain the server
// authentication karana ho