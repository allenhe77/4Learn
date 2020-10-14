const { MongoClient, Cursor } = require("mongodb");

module.exports = function () {
  // Connection URI
  const uri =
    "mongodb+srv://effy:renjiaxuan@4learndb.hvxoz.mongodb.net/4learn?retryWrites=true&w=majority";
  // Create a new MongoClient
  const client = new MongoClient(uri);

  async function run() {
    try {
      // Connect the client to the server
      await client.connect();

      // Establish and verify connection
      await client.db("4learn").collection("userReg");
      console.log("Connected successfully to server");

      let connectTo = await client.db("4learn");
      //search
      let res = await client
        .db("4learn")
        .collection("userReg")
        .find({ name: "allen" });

      await res.forEach(console.dir);
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);
};