
// Function format errors to send to client
module.exports.ReportError = (error, res, prefix, status = 400) => {
  const errMsg =
    error.errors && error.errors.length
      ? error.errors[0].message
      : error.message;
  return res.status(status).send({
    error: `${prefix} ${errMsg}`,
  });
};

