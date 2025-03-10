console.log("Hello Ji i am second");

function sum(a,b){
    console.log(a+b);
}

// module.exports = sum; // now we are particular exporting it so that they can access 


// Now we have to export more than one 

function sub(a,b){
    console.log(a-b);
}
console.log(module.exports); // it is just an empty object {}
//module.exports = {sum:sum,sub:sub}; // and we know that when key and value is same just write it a single time 
module.exports = {sum,sub};



// CJS is an older method to export this , it is being used today as well
// Newer method to export it is import and export which we have seen in react 