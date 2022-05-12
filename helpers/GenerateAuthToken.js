const jwt = require("jsonwebtoken");
const { secret } = require("../config/keys");

module.exports.GenerateAuthToken = (
  userId = "",
  userType = "",
  expiresIn = "24h"
) => {
  return jwt.sign({ userId, userType }, secret, { expiresIn });
};
