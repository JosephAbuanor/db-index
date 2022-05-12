//importing the neccessary dependency
const crypto = require("crypto");
const secret = "virtualiSecret";

function HashPassword(password = "") {
  return crypto
    .pbkdf2Sync(password, secret, 1000, 64, `sha512`)
    .toString(`hex`);
};

console.log(HashPassword("aristotle_2.nikoi@boehringer-ingelheim.com"))