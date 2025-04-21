const redis = require('redis');
const redisClient = redis.createClient({
    username: 'default',
    password: 'C6Lywg3TJOvqc5TLDAkkA4iQVeiaGi05',
    socket: {
        host: 'redis-10536.crce182.ap-south-1-1.ec2.redns.redis-cloud.com',
        port: 10536
    }
});
module.exports = redisClient;