const { MongoClient } = require("mongodb");

module.exports = async function (roomId, currentQuestion, userName, userWork) {
  const uri = process.env.DB_CREDENTIALS;

  const client = new MongoClient(uri);
  let successOrFail = false;
  try {
    await client.connect();

    const database = client.db("4learn");
    const collection = database.collection("Chatroom");
    console.log("asdsd");

    // queryString = "" + "questions." + currentQuestion + "." + userName;
    queryString = "questions.q1.allen";
    console.log(queryString);
    const result = await collection.updateOne(
      {
        roomId: roomId,
        [queryString]: {
          $exists: true,
        },
      },
      {
        $set: {
          [queryString]: userWork,
        },
      }
    );

    await result.forEach((result) => workArray.push(result));
  } finally {
    await client.close();
    return workArray;
  }
};
