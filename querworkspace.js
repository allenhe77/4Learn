const { MongoClient } = require("mongodb");

module.exports = async (questionArray) => {
  const uri = process.env.DB_CREDENTIALS;
  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try {
    await client.connect();

    const database = client.db("4learn");
    const collection = database.collection("userWorkspace");

    // create js obj received by /login

    const result = await collection.find();

    await result.forEach((result) => questionArray.push(result));
  } finally {
    await client.close();
    return questionArray;
  }
};
