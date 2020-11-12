const { MongoClient, ObjectId } = require("mongodb");

module.exports = async function (answer, userName, id) {
  const uri = process.env.DB_CREDENTIALS;

  const client = new MongoClient(uri);
  let successOrFail = false;
  try {
    await client.connect();

    const database = client.db("4learn");
    const collection = database.collection("userQuestion");

    inputString = "" + "answer." + userName;

    const result = await collection.updateOne(
      {
        _id: ObjectId(id),
      },
      {
        $set: {
          [inputString]: answer,
        },
      },
      {
        upsert: true,
      }
    );
    console.log(result);
  } finally {
    await client.close();
    return true;
  }
};
