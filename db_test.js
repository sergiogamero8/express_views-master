const { MongoClient } = require('mongodb');
// Connection URL
const url = `mongodb+srv://SergioG:<PepeIrlanda24>@cluster0.bteed.mongodb.net/node-test?retryWrites=true&w=majority`
const client = new MongoClient(url);

// Database Name
const dbName = 'node-test';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const blogs = db.blogs('blogs');
  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);

  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

