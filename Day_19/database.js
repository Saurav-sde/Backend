const mongoose = require('mongoose');

async function main() {
  await mongoose.connect("mongodbadda.xnskua4.mongodb.net/Instagram"); 
}

module.exports = main;
