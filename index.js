const express = require("express");
const connectDB = require("./connectdb");

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
  connectDB();
  res.send("registration recived!");
});

app.listen(PORT, (req, res) => {
  console.log(`listening on port ${PORT}`);
});
