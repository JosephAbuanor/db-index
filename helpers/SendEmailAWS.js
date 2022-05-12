const {
  accessKeyId,
  secretAccessKey,
  aws_region,
  source_email,
} = require("../config/keys");

// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");

module.exports.SendEmail = async (html, to, subject) => {
  const ses = new AWS.SES({
    accessKeyId,
    secretAccessKey,
    region: aws_region,
  });

  // Create sendEmail params
  var params = {
    Destination: {
      ToAddresses: [
        to,
      ],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: html,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: subject,
      },
    },
    Source: source_email,
    ReplyToAddresses: [source_email],
  };

  // Create the promise and SES service object
  var sendPromise = ses.sendEmail(params).promise();

  // Handle promise's fulfilled/rejected states
  await sendPromise
    .then(function (data) {
      console.log(data);
    })
    .catch(function (err) {
      console.error(err, err.stack);
    });
};
