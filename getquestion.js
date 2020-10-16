const { MongoClient } = require("mongodb");

module.exports = async function (questionArray) {
  const uri = process.env.DB_CREDENTIALS;

  const client = new MongoClient(uri);
  let successOrFail = false;
  try {
    await client.connect();

    const database = client.db("4learn");
    const collection = database.collection("userQuestion");

    // create js obj received by /login

    const result = await collection.find();
    const questionArray = [];
    await result.forEach((result) => questionArray.push(result));

    return questionArray;
  } finally {
    await client.close();
  }
};
