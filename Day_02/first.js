const {sum,sub} = require("./second"); 
// require("./third");
// require("./fourth");
// require("./fifth");
// here first it loads second then third then fourth and then fifth.

sum(3,4);
sub(4,3);
console.log("Hello I am First");
/*
Hello Ji i am second
7
1
Hello I am First
*/

