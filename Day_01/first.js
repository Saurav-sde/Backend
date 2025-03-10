// require("./second");
// console.log("Hello I am First");

// Hello ji I am second
// Hello i am first
// this is known as CJS(Common JS Module);


// Now we made a function in second.js, now can we call this function here, will it run?
// sum(3,4);
// console.log("Hello I am First");
// Hello ji i am second
// sum is not defined
// why error? :- as by default all the content of js come here as private so we cant access it

// IIFE:- Immediately Invoked Function Expression
// whenever we write require then the code comes in IIFE, 
// require("./second");
// (function(){
//     console.log("Hello Ji i am second");
//     function sum(a,b){
//         console.log(a+b);
//     }
// })()
// sum(3,4);
// console.log("Hello I am First");
// behind the line it comes like this, 
// now we can see why console gets logged and sum is getting refernece error as it is not defined



// Now we want to call function sum here how can we do this
// we can export this using module.exports
// const sum = require("./second");
// sum(3,4);
// console.log("Hello I am First");

/*
Hello Ji i am second
7
Hello I am First
*/


// requiring more than one
const {sum,sub} = require("./second"); // we have destructured it as second.js is exporting it in form of object
sum(3,4);
sub(4,3);
console.log("Hello I am First");
/*
Hello Ji i am second
7
1
Hello I am First
*/

