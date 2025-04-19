const express = require ('express');
const app = express();
const main = require("./database");
const User = require("./Models/users");
const cookieParser = require("cookie-parser");
require('dotenv').config();
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const commentRouter = require("./routes/comment");
const redisClient = require('./config/redis');


app.use(express.json());
app.use(cookieParser());

app.use("/auth",authRouter);
app.use("/user",userRouter);
app.use("/comment",commentRouter);

const InitializeConnection = async() => {
    try {
        // await redisClient.connect();
        // console.log("Connected to Redis");

        // await main();
        // console.log("Connected to MongoDB");

        await Promise.all([redisClient.connect(),main()]); // here both are connecting parallely
        console.log("DB Connected");
        
        app.listen(process.env.PORT,()=>{
            console.log("Listening at port 3000");
        })
        
    } catch (err) {
        console.log("Error: " + err);
    }
}
InitializeConnection();