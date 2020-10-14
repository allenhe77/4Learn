const express = require("express");
const insertDb = require("./insertdb");
require("dotenv").config();

app = express();
app.use(
  express.urlencoded({
    extended: true,
  })
);
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("you are at backend root");
});

app.post("/register", async (req, res) => {
  try {
    const result = await insertDb(
      req.body.name,
      req.body.email,
      req.body.password
    ).catch(console.dir);
    if (result) {
      res.send("registration success!");
    } else {
      res.send("registration failed");
    }
  } catch (error) {}
});

app.listen(PORT, (req, res) => {
  console.log(`listening on port ${PORT}`);
});
