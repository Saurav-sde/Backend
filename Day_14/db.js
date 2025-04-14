const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
// username  password  cluster
// @ :- %40(hexadecimal: 0x40)
const url = "mongodb+srv://CoderArmy:Saurav%402713@codingadda.xnskua4.mongodb.net/";
const client = new MongoClient(url);

// Database Name
const dbName = 'CoderArmy';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('user');

  // the following code examples can be pasted here...
  // const findResult = collection.find({});
  // // const ans = await findResult.toArray();
  // // console.log('Found documnets => ', ans);
  
  // for await(const doc of findResult)
  //   console.log(doc);


  // const innerResult = await collection.insertOne({name:"Saurav", age:20});
  // console.log('Inserted documents => ', innerResult);
  
  // const innerResult = await collection.insertMany([{name:"Saurav", age:20},{name:"Aditya", age:21},{name:"Mohit", age:19}]);
  // console.log('Inserted documents => ', innerResult);

  const filterdDocs = await collection.find({name:"Saurav"}).toArray();
  console.log('Found Documents Filtered by {name:"Saurav} =>', filterdDocs);
  
  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());