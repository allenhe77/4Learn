const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const accessToken = req.cookies["access-token"];

    console.log(jwt.verify(accessToken, "sdadsad").userName);
    if (req.cookies["access-token"] !== undefined) {
      res.send("login success");
    }
  } catch (error) {
    console.log(error);
    next();
  }
};
