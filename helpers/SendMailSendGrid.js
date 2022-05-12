const { sendgridApiKey } = require("../config/keys");
const sendGridMail = require("@sendgrid/mail");
sendGridMail.setApiKey(sendgridApiKey);

module.exports.SendMail = async (
  to = "",
  subject = "",
  html = "",
  text = ""
) => {
  //Construct message
  const message = {
    to,
    from: "john.jebo@amalitech.com",
    subject,
    text,
    html,
  };
  //Send email
  try {
    await sendGridMail.send(message);
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
  }
};
