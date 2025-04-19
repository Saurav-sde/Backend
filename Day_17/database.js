const mongoose = require('mongoose');

async function main() {
  await mongoose.connect("mongodb+srv:/==2713@codingadda.xnskua4.mongodb.net/Instagram"); 
}

module.exports = main;
