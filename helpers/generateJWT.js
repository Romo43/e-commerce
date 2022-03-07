const jwt = require("jsonwebtoken");
const { SECRET } = require("../config/config");

const generateJWT = (uid = "") => {
  return new Promise((resolve, reject) => {
    jwt.sign({ uid }, SECRET, { expiresIn: "4h" }, (err, token) => {
      if (err) {
        console.log(err);
        reject("Error in generating token");
      } else {
        resolve(token);
      }
    });
  });
};

module.exports = {
  generateJWT,
};
