
import sum from "./second.js";

sum(3,8);
console.log("hello Ji ");


// does this code run? :- it gives error
// By deafult Nodejs follows CJS Method (reuqire waale), this import and export is our latest method it came in MJS module 
// then how node js understand it?
// 1st Option is we change the file name extension from .js to .mjs then node understand MJS module, but when we are using in react we are not doing this there it is running smoothly without changing the file name , as there is bundler who are doing this task, here we have not any bundler so we have to explicitly write this

// 2nd option is cretae a package.json file and mention "type":"module" , now whenever node js sees this file it see it like MJS module
/*
11
hello Ji 
*/