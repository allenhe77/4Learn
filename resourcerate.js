const { MongoClient, ObjectId } = require("mongodb");

module.exports = async function (id, rate) {
  const uri = process.env.DB_CREDENTIALS;

  const client = new MongoClient(uri);
  let successOrFail = false;
  try {
    await client.connect();

    const database = client.db("4learn");
    const collection = database.collection("Resource");

    let upOrDown = 0;
    if (rate === "upvote") {
      upOrDown = 1;
    } else if (rate === "downvote") {
      upOrDown = -1;
    }

    const result = await collection.updateOne(
      {
        _id: ObjectId(id),
      },
      {
        $inc: {
          rate: upOrDown,
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
