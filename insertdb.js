const { MongoClient } = require("mongodb");

module.exports = function (name, email, password) {
  const uri = process.env.DB_CREDENTIALS;

  const client = new MongoClient(uri);

  async function run() {
    try {
      await client.connect();

      const database = client.db("4learn");
      const collection = database.collection("userReg");

      // create js obj received by /register

      const doc = { name: name, email: email, password: password };
      const result = await collection.insertOne(doc);

      console.log(`${result.insertedCount} documents were inserted into db`);
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);
};
