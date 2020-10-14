const { MongoClient } = require("mongodb");

module.exports = async function (name, email, password) {
  const uri = process.env.DB_CREDENTIALS;

  const client = new MongoClient(uri);
  let successOrFail = false;
  try {
    await client.connect();

    const database = client.db("4learn");
    const collection = database.collection("userReg");

    // create js obj received by /register

    const doc = { name: name, email: email, password: password };
    const result = await collection.insertOne(doc);

    console.log(`${result.insertedCount} documents were inserted into db`);
    console.log(result.insertedCount > 0);
    if (result.insertedCount > 0) {
      successOrFail = true;
      return true;
    }
  } finally {
    await client.close();
  }
};
