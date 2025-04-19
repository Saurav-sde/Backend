const validator = require("validator");

function validateUser(data) {
    const mandatoryField = ["firstName","emailId","age","password"];
    const isAllowed = mandatoryField.every((k) => Object.keys(data).includes(k));

    if(!isAllowed)
        throw new Error("Fields missing");

    if(!validator.isEmail(data.emailId))
        throw new Error("Invalid Email");

    if(!validator.isStrongPassword(data.password))
        throw new Error("Weak Password");

    if(!(data.firstName.length > 3 && data.firstName.length <= 20))
        throw new Error("Name should be in range [3,20]");
} 


module.exports = validateUser;