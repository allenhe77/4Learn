const { MongoClient } = require("mongodb");

module.exports = async function (roomListArray, roomId) {
  const uri = process.env.DB_CREDENTIALS;

  const client = new MongoClient(uri, { useUnifiedTopology: true });
  let successOrFail = false;

  try {
    await client.connect();

    const database = client.db("4learn");
    const collection = database.collection("Chatroom");

    // create js obj received by /login

    const result = await collection.find({ roomId: roomId });

    await result.forEach((result) => roomListArray.push(result));
  } finally {
    await client.close();
    return roomListArray;
  }
};
