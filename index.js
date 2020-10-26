const express = require("express");
const app = express();
const http = require("http").Server(app);
const insertDb = require("./insertdb");
const searchDb = require("./searchdb");
const insertQuestion = require("./insertquestion");
const getQuestion = require("./getquestion");
const auth = require("./auth");
const jwt = require("jsonwebtoken");
const io = require("socket.io")(http);
const { ExpressPeerServer } = require("peer");
const peerServer = ExpressPeerServer(http, {
  debug: true,
});
const jwt_decode = require("jwt-decode");

require("dotenv").config();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/peerjs", peerServer);

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("you are at backend root");
});

// websocket io for chatroom
io.on("connection", (socket) => {
  console.log("user connected");

  socket.on("clientmessage", (data) => {
    console.log(data.message);
    console.log(jwt.decode(data.from));
    socket.broadcast.emit("broadcast", {
      message: data.message,
      from: jwt.decode(data.from).username,
    });

    socket.on("join-chat", (userId) => {
      socket.broadcast.emit("user-joined", userId);
      console.log(userId);
    });
  });

  setTimeout(
    () => socket.emit("server-message", { message: "message from server" }),
    5000
  );
  setTimeout(
    () => socket.emit("server-message", { message: "message2 from server" }),
    10000
  );

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

// websocket io for chatroom ends

app.post("/register", async (req, res) => {
  try {
    const result = await insertDb(
      req.body.name,
      req.body.email,
      req.body.password
    ).catch(console.dir);
    if (result) {
      res.redirect("/dashboard");
    } else {
      res.send("registration failed");
    }
  } catch (error) {}
});

//middleware auth, login path not working
app.use("/login", auth);

app.post("/login", async (req, res) => {
  try {
    const loginInfo = await searchDb(req.body.email, req.body.password);

    let username = req.body.email;
    let password = req.body.password;
    let payload = { username: username };
    const users = [];

    let accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: process.env.ACCESS_TOKEN_LIFE,
    });

    //users[username].refreshToken = refreshToken;
    res.cookie("access-token", accessToken);
    res.redirect("/dashboard");
  } catch {
    res.send("auth failed");
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

http.listen(PORT, (req, res) => {
  console.log(`listening on port ${PORT}`);
});
