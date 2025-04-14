

// by default get is used
const response = await fetch("https://api.example.com/data",
    //{
        // method:'GET',
        // headers: {
        //     'Content-Type': 'application/json'
        // },
        // body: JSON.stringify({name:"Saurav", age:30}) // we can send data by the GET method also but get is used for fetching data.So we dont need this line 
        // all these are not needed in GET Method 
    //}
);


// post
const response2 = await fetch("https://api.example.com/data",{
    method:'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({name:"Saurav", age:30})
});


// patch
const response3 = await fetch("https://api.example.com/data",{
    method:'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({age:30})
});


