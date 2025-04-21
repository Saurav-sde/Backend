const redisClient = require('../config/redis'); 


// redisClient.incr(ip) it wil increase the count if ip exist otherwise create it and then returns the count 
// stores ip as a key

const rateLimiter = async(req,res,next) =>{
    try {
        const ip = req.ip;
        const number_of_req = await redisClient.incr(ip);

        if(number_of_req > 60)
            throw new Error("User Limit Exceeded");
        
        if(number_of_req == 1)
            await redisClient.expire(3600);    

        next();

    } catch (err) {
        res.send("Error: "+err);
    }
}

module.exports = rateLimiter;