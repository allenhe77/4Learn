const { MongoClient, ObjectId } = require("mongodb");

module.exports = async function (id) {
  const uri = process.env.DB_CREDENTIALS;

  const client = new MongoClient(uri);
  let successOrFail = false;
  try {
    await client.connect();

    const database = client.db("4learn");
    const collection = database.collection("Admin");

    // create js obj received by /register
    console.log(id);
    const doc = { id: id };
    const result = await collection.deleteOne({ _id: ObjectId(id) });

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
