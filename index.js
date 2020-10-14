const express = require("express");
const insertDb = require("./insertdb");
require("dotenv").config();

const DB_URL = process.env.DB_CREDENTIALS;

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

app.post("/register", (req, res) => {
  console.log(req.body);
  insertDb(req.body.name, req.body.email, req.body.password);
  res.send("registration recived!");
});

app.listen(PORT, (req, res) => {
  console.log(`listening on port ${PORT}`);
});
