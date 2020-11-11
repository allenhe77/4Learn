const { MongoClient } = require("mongodb");

module.exports = async function (title, area, detail, tags) {
  const uri = process.env.DB_CREDENTIALS;

  const client = new MongoClient(uri);
  let successOrFail = false;
  try {
    await client.connect();

    const database = client.db("4learn");
    const collection = database.collection("Admin");

    const doc = {
      title: title,
      area: area,
      detail: detail,
      tags: {
        oAlevel: tags.oAlevel,
        subject: tags.subject,
        year: tags.year,
        paperNumber: tags.paperNumber,
        month: tags.month,
        questionNumber: tags.questionNumber,
      },
    };
    const result = await collection.insertOne(doc);

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
