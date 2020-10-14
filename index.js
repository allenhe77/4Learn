const express = require("express");

app = express();

const PORT = 5000;

app.listen(PORT, (req, res) => {
  console.log(`listening on port ${PORT}`);
});
