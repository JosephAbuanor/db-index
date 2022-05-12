const uuid = require("uuid-random");
const { AddDays } = require("../helpers/Date");
const generator = require("generate-password");

let code = generator.generate({
  length: 8,
  numbers: true,
  uppercase: true,
  lowercase: false,
  strict: true,
});


//Email Verification Code
module.exports.EmailVerificationCode = () => {
  return {
    emailConfirmCode: code,
    emailConfirmCodeExpiresIn: AddDays(new Date(), 1),
  };
};

module.exports.SmsVerificationCode = () => {
  //loop to generate uuid(len 4) and check existence in the db
  let smsConfirmCode = uuid().slice(0, 4);
  return {
    smsConfirmCode,
    smsConfirmCodeExpiresIn: AddDays(new Date(), 1),
  };
};
