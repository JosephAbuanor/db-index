const moment = require("moment");

module.exports.AddDays = (theDate, days) => {
  return new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000);
};


module.exports.FormatDateTimeZone = (dateValue, timezone) =>{
  return new Date(
    moment(dateValue)
      .tz(timezone)
      .format("YYYY-MM-DD HH:mm:ss")
  ).toISOString()
}