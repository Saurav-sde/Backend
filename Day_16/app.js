const mongoose = require('mongoose');
const { Schema } = mongoose;

async function main() {
  await mongoose.connect("mongodb+srv://CoderArmy:Saurav%402713@codingadda.xnskua4.mongodb.net/BookStore"); // BookStore naam ke database automatically create ho jaayega

  // schema banao
  const userSchema = new Schema({
    name:String,
    age:Number,
    city:String,
    gender:String
  });

  // Model ko create karo: Collection Create Karna or we can say class create kari hain
  const user = mongoose.model("user",userSchema);

  // document create kari hai or we can say we have created an object
  const user1 = new user({name:"ROhit", age:20, city:"Dwarka", gender:"Male"});
  await user1.save();

  await user.create({name:"Mohan", age:30, city:"Pakistan", gender:"Male"});

  await user.insertMany([{name:"Ipsita",age:18},{age:25,gender:"Male"}]);

  const ans = await user.find({});
  console.log(ans);

  // find documnet by particular field
  const ans2 = await user.find({name:"ROhit"});
  console.log(ans2);
  
}

main()
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));