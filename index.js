const express = require("express");

app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("you are at backend root");
});

app.post("/register", (req, res) => {
  res.send("registration recived!");
});

app.listen(PORT, (req, res) => {
  console.log(`listening on port ${PORT}`);
});
