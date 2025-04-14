const mongoose = require('mongoose');

async function main() {
  await mongoose.connect("mongodb+srv://CoderArmy:Saurav%402713@codingadda.xnskua4.mongodb.net/BookStore"); 
}

module.exports = main;
