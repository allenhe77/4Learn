const { MongoClient } = require("mongodb");

module.exports = async function (roomId, question) {
  const uri = process.env.DB_CREDENTIALS;

  const client = new MongoClient(uri);
  let successOrFail = false;
  try {
    await client.connect();
    console.log(roomId);
    console.log(question);
    const database = client.db("4learn");
    const collection = database.collection("Chatroom");

    const doc = {};
    const queryString = "" + "questions." + question;
    const result = await collection.update(
      {
        roomId: roomId,
      },
      {
        $set: {
          [queryString]: {},
        },
      }
    );

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
