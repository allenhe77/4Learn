const express = require("express");
const insertDb = require("./insertdb");
const searchDb = require("./searchdb");
const insertQuestion = require("./insertquestion");
const getQuestion = require("./getquestion");

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

app.post("/login", async (req, res) => {
  const loginInfo = await searchDb(req.body.email, req.body.password);
  if (loginInfo) {
    res.send("you've logged in");
  } else {
    res.send("wrong credentials");
  }
});

app.post("/askquestion", async (req, res) => {
  const result = await insertQuestion(
    req.body.title,
    req.body.area,
    req.body.detail
  );
  result
    ? res.send("question posted success")
    : res.send("there was an error while posting");
});

app.get("/answerquestion", async (req, res) => {
  const data = [];
  const result = await getQuestion(data);

  res.json(result);
});

app.listen(PORT, (req, res) => {
  console.log(`listening on port ${PORT}`);
});
