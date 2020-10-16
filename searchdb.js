const { MongoClient } = require("mongodb");

module.exports = async function (email, password) {
  const uri = process.env.DB_CREDENTIALS;

  const client = new MongoClient(uri);
  let successOrFail = false;
  try {
    await client.connect();

    const database = client.db("4learn");
    const collection = database.collection("userReg");

    // create js obj received by /login

    const doc = { email: email, password: password };
    const result = await collection.findOne(doc);
    console.log(result);

    if (result !== null) {
      successOrFail = true;
      return true;
    }
  } finally {
    await client.close();
  }
};
