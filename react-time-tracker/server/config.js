/** Common config for timetracker server. */
// read .env files and make environmental variables

const ENV = require("dotenv").config().parsed;
let DB_URI = ENV.DB_BASE_URI || "postgresql://";

if (process.env.NODE_ENV === "test") {
    DB_URI = `${DB_URI}/time_tracker_test`;
} else {
    DB_URI = process.env.DATABASE_URL || `${DB_URI}/time_tracker`;
}

module.exports = { DB_URI };