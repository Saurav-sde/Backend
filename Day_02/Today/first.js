// const sum = require("./current/sum");
// const sub = require("./current/sub");
// const mul = require("./current/mul");

// sum(2,4);
// sub(3,4);
// mul(6,8);

// console.log("Hello Ji");


// Here we have import all these three files one by one, but we have kept all these in a single folder this is not treated as good habit
// instead of create a index.js file and import these three files there and export it here
const {sum,sub,mul} = require("./calculator");
sum(2,4);
sub(3,4);
mul(6,8);

console.log("Hello Ji");

// in node js when we go inside any folder and want to export something and we have given only the name of folder instead of particular file nam. By default it export index.js if this file is not present there then it gives error

