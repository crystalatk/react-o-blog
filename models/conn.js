"use strict";

const host = "ziggy.db.elephantsql.com",
  database = "qgmnyzoz",
  user = "qgmnyzoz",
  password = "lvH0lXOJYvg839g6HfzTbOgf3ALlB-zZ";

// running pg-promise immediately with (). Do NOT pass the log when you go to production!
const pgp = require("pg-promise")({
  query: function (event) {
    console.log("QUERY:", event.query);
  },
});

const options = {
  host,
  database,
  user,
  password,
};

const db = pgp(options);

module.exports = db;
