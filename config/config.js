require("dotenv").config(); // this is important!
module.exports = {
  development: {
    username: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME,
    host: process.env.DBHOST,
    logging: false,
    dialect: "postgres",
  },
  test: {
    username: process.env.DBUSER_TEST,
    password: process.env.DBPASSWORD_TEST,
    database: process.env.DBNAME_TEST,
    host: process.env.DBHOST_TEST,
    logging: false,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        sslmode: "require",
        rejectUnauthorized: false,
      },
    }
  },
  production: {
    username: process.env.DBUSER_PROD,
    password: process.env.DBPASSWORD_PROD,
    database: process.env.DBNAME_PROD,
    host: process.env.DBHOST_PROD,
    logging: false,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        sslmode: "require",
        rejectUnauthorized: false,
      },
    }
  },
};
