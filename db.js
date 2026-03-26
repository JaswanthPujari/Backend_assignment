const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./users.db", (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Connected to SQLite DB");
  }
});


db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    age INTEGER
  )
`);

module.exports = { db };