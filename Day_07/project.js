const express = require('express');
const app = express();

let bookStore = [
    {id: 1, name: "Harry Potter", author: "DevFlux"},
    {id: 2, name: "Friends", author: "Vikash"},
    {id: 3, name: "Nexus", author: "Rohit Negi"},
    {id: 4, name: "The Alchemist", author: "Paulo Coelho"},
    {id: 5, name: "Atomic Habits", author: "James Clear"},
    {id: 6, name: "The Silent Patient", author: "Alex Michaelides"},
    {id: 7, name: "Rich Dad Poor Dad", author: "Robert Kiyosaki"},
    {id: 8, name: "To Kill a Mockingbird", author: "Harper Lee"},
    {id: 9, name: "1984", author: "George Orwell"},
    {id:10, name: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson"},
];

app.use(express.json()); // converts json in js object

app.get("/book",(req,res)=>{
    res.send(bookStore);
})

app.get("/book/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const book = bookStore.find(info => info.id === id);
    res.send(book);
})

app.post("/book",(req,res)=>{
    const book = req.body;
    const duplicateBook = bookStore.find(info => info === book);
    if(!duplicateBook)
        res.send("Book Already Exists");
    else
    {
        bookStore.push(req.body);
        res.send("Book Stored Successfully");
    }
})

app.delete("/book/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    bookStore = bookStore.filter(book => book.id !== id);
    res.send("Book is removed Successfully");
})

app.listen(3000,()=>{
    console.log("Server is Listening at 3000");
})


