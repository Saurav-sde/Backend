const bcrypt = require("bcrypt");

const password = "Rohit@123";

async function Hashing(){
    // hashcode + salt

    
    // const hashpass = await bcrypt.hash(password,10); // this process is slow so we have to use async await

    const salt = await bcrypt.genSalt(10);
    const hashpass = await bcrypt.hash(password,salt);
    console.log(salt);
    console.log(hashpass);
}

Hashing();
// $2b$10$rqtE0qZbvDB/oG3/GWD8Yue7BNPsN3xxI6IPC2RCCw2/IgzDCC5vm 
// $2b$10$bClq5s/Nhfv06zFeJH7eC.q5njHJ73gLFNNIIRefqRuIBj5Q/p5ca

/*
bcrypt.hash(password,10)
10 is round , means that hashcode that we are generating is how much complex, the higher the value is higher the complexity of hash code became
10 means runs this algo 2^10 time
*/
// in general we use 10-12 round


// salt
// password
/*
$2b$10$Tar2058J9dJQK/OR2e7GHu
$2b$10$Tar2058J9dJQK/OR2e7GHu2Tzkv8l55ONyQ8bbSzbw5FB3CRCaQlq
Here we can see till / both is same , in our system we only store 2nd one 
*/