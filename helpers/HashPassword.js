//importing the neccessary dependency
const crypto = require("crypto");
const { secret } = require("../config/keys");

module.exports.HashPassword = (password = "") => {
  return crypto
    .pbkdf2Sync(password, secret, 1000, 64, `sha512`)
    .toString(`hex`);
};
