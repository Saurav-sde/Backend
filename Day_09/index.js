const {Auth} = require("./middleware/auth");
const express = require("express");
const app = express();
app.use(express.json());
// CRUD: Create Read Update Delete


// Database: array
const FoodMenu = [
    { "id": 1, "food": "Veg Chowmein", "category": "veg", "price": 150 },
    { "id": 2, "food": "Butter Naan", "category": "veg", "price": 50 },
    { "id": 3, "food": "Chicken Curry", "category": "non-veg", "price": 250 },
    { "id": 4, "food": "Veg Momos", "category": "veg", "price": 120 },
    { "id": 5, "food": "Mutton Curry", "category": "non-veg", "price": 350 },
    { "id": 6, "food": "Tandoori Roti", "category": "veg", "price": 20 },
    { "id": 7, "food": "Chicken Lollipop", "category": "non-veg", "price": 180 },
    { "id": 8, "food": "Seekh Kabab", "category": "non-veg", "price": 220 },
    { "id": 9, "food": "Paneer Butter Masala", "category": "veg", "price": 280 },
    { "id": 10, "food": "Egg Curry", "category": "non-veg", "price": 200 },
    { "id": 11, "food": "Green Salad", "category": "veg", "price": 80 },
    { "id": 12, "food": "Veg Shawarma", "category": "veg", "price": 150 },
    { "id": 13, "food": "Butter Chicken", "category": "non-veg", "price": 300 },
    { "id": 14, "food": "Mushroom Masala", "category": "veg", "price": 250 },
    { "id": 15, "food": "Rajma Chawal", "category": "veg", "price": 180 },
    { "id": 16, "food": "Masala Chai", "category": "veg", "price": 30 }
]

// user ko jo bhi food hoga wo idhar aayega
const AddToCart = [];


app.get("/food",(req,res)=>{
    res.status(200).send(FoodMenu);
})

// authenticate admin here
// app.use("/admin",Auth);

// here anyone can request it, how we differentiate it is org admin or not
app.post("/admin",Auth,(req,res) =>{
    FoodMenu.push(req.body);
    res.status(201).send("Item added Successfully");
})


app.delete("/admin/:id",Auth,(req,res)=>{
    const id = parseInt(req.params.id);
    const index = FoodMenu.findIndex(item => item.id === id);

    if(index === -1)
        res.status(404).send("Item doesn't exists");
    else
    {
        FoodMenu.splice(index,1);
        res.status(200).send("Successfully deleted");
    }
})


app.patch("/admin",Auth,(req,res)=>{
    const id = parseInt(req.body.id);
    const foodData = FoodMenu.find(item => item.id === id);
    if(foodData)
    {
        if(req.body.food)
            foodData.food = req.body.food;

        if(req.body.category)
            foodData.category = req.body.category;

        if(req.body.price)
            foodData.price = req.body.price;

        res.status(200).send("Successfully Updated");
     }
    else
        res.status(404).send("Item doesn't exists");
})


app.post("/user/:id",(req,res)=>{
    const id = parseInt(req.params.id);

    const foodItem = FoodMenu.find(item => item.id === id);
    if(foodItem)
    {
        AddToCart.push(foodItem);
        res.status(201).send("Item added to Cart successfully!!");
    }
    else
        res.send("Item Out of Stock");
})


app.delete("/user/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const index = AddToCart.findIndex(item => item.id === id);
    if(index == -1)
        res.status(404).send("Item Not found in Cart");
    else
    {
        AddToCart.splice(index,1);
        res.status(200).send("Item removed successfully");
    }
})

app.get("/user",(req,res)=>{
    if(AddToCart.length == 0)
        res.send("Cart is Empty");
    else
        res.status(200).send(AddToCart);
})


app.listen(3000,(req,res)=>{
    console.log("Listening at port 3000");
})


// HW Add to cart, Delete to cart, look at my cart