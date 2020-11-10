const { MongoClient } = require("mongodb");

module.exports = async function (questionArray) {
  const uri = process.env.DB_CREDENTIALS;

  const client = new MongoClient(uri, { useUnifiedTopology: true });
  let successOrFail = false;

  try {
    await client.connect();

    const database = client.db("4learn");
    const collection = database.collection("Admin");

    // create js obj received by /login

    const result = await collection.find();

    await result.forEach((result) => questionArray.push(result));
  } finally {
    await client.close();
    return questionArray;
  }
};
